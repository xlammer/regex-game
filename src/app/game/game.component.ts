import {Component, OnInit} from '@angular/core';
import {TaskService} from '../task.service';
import {Task} from '../Task';


@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

    tasks: Task [];
    currentTask: Task;
    timesUp: boolean;


    constructor(private taskService: TaskService) {
    }

    ngOnInit() {
        this.tasks = this.getTasks();
        this.currentTask = this.tasks[0];
    }

    private getTasks() {
        return this.taskService.getTasks();
    }

    setActive(id) {
        this.currentTask = this.tasks[id];
    }

    regexChanged() {
        if (this.currentTask == null || this.currentTask.regex == null || this.currentTask.regex === '') {
            this.currentTask.output = [];
            return;
        }

        try {
            let regexp = new RegExp(this.currentTask.regex);
            console.log(regexp);

            let results = [];
            for (let text of this.currentTask.inputText) {
                console.log('checking text: ' + text);
                let match = regexp.exec(text);
                if (match == null) {
                    results.push('');
                } else {
                    results.push(match[0]);
                }
            }
            this.currentTask.output = results;
        } catch (e) {
            console.log(e);
            this.currentTask.output = ['Malformed syntax!'];
        }

        if (this.currentTask.isFinished()) {
            new Audio('./assets/success.mp3').play();
        }

    }

    getTaskButtonClass(task: Task) {
        if (this.taskFinished(task)) {
            return 'btn-success';
        }
        if (this.currentTask.id === task.id) {
            return 'btn-primary';
        }
        return 'btn-default';
    }

    gameFinished() {
        return this.tasks.every(task => this.taskFinished(task));
    }

    taskFinished(task: Task) {
        return task.isFinished();
    }

    isResultOk(index: number) {
        return this.currentTask.output[index] === this.currentTask.expectedOutput[index];
    }

    resultClass(index: number) {
        return this.isResultOk(index) ? 'list-group-item-success' : 'list-group-item-danger';
    }

    onTimerFinished() {
        this.timesUp = true;
    }
}

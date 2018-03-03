import {Component, OnInit} from '@angular/core';
import {TaskService} from '../task.service';
import {Task} from '../Task';
import {MAX_TIMER_TIME} from '../timer/timer.component';


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
        }

        if (this.currentTask.regex.indexOf('*') >= 0) {
            this.currentTask.output = ['You cannot use asterisk symbol, because G flag is used and regex will match indefinitely.'];
        }

        try {
            let regexp = new RegExp(this.currentTask.regex, 'gi');
            console.log(regexp);

            let results = [];
            for (let text of this.currentTask.inputText) {
                console.log('checking text: ' + text);
                let match;
                let result = '';
                while ((match = regexp.exec(text)) !== null) {
                    if (match[0] === '') {
                        break;
                    }
                    result += match[0];
                }
                results.push(result);
            }
            this.currentTask.output = results;
        } catch {
            this.currentTask.output = ['Malformed syntax!'];
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

    onTimerTick(secondsPassed: number) {
        if (secondsPassed === MAX_TIMER_TIME) {
            this.timesUp = true;
        }
    }
}

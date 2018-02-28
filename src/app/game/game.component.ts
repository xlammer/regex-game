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
            return '';
        }
        try {
            let regexp = new RegExp(this.currentTask.regex, 'gi');
            console.log(regexp);

            let results = [];
            for (let text of this.currentTask.inputText) {
                console.log('checking text: ' + text);
                let match;
                let accu = '';
                while ((match = regexp.exec(text)) !== null) {
                    accu += match;
                }
                results.push(accu);
            }
            this.currentTask.output = results;
        } catch {
            this.currentTask.output = ['Malformed syntax!'];
        }
    }

    getTaskButtonClass(id) {
        if (this.taskFinished(id)) {
            return 'btn-success';
        }
        if (this.currentTask.id === id) {
            return 'btn-primary';
        }
        return 'btn-default';
    }

    success() {
        return this.taskFinished(this.currentTask.id);
    }

    taskFinished(id: number) {
        let task = this.tasks[id - 1];
        return task.isFinished();
    }

    isResultOk(index: number) {
        return this.currentTask.output[index] === this.currentTask.expectedOutput[index];
    }

    resultClass(index: number) {
        return this.isResultOk(index) ? 'list-group-item-success' : 'list-group-item-danger';
    }
}

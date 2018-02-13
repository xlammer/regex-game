import {Component, OnInit} from '@angular/core';
import {TaskService} from '../task.service';
import {Task} from '../Task';


@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

    public timeLeft = 300;

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

    setActive(index) {
        this.currentTask = this.tasks[index];
        console.log('active task - ' + this.currentTask);
    }

}

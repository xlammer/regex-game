import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

    public timeLeft = 300;
    tasks = [1, 2, 3, 4, 5];
    task: 1;

    ngOnInit() {
        setInterval(function () {
            this.timeLeft -= 1;
            console.log('tick ' + this.timeLeft);
            // why NaN?
        }, 1000);
    }

    setActive(task) {
        this.task = task;
        console.log('active task - ' + task);
    }

}

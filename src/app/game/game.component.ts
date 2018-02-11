import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

    timeLeft: 0;
    tasks: [1, 2, 3, 4, 5];

    constructor() {
    }

    ngOnInit() {
        const interval = Observable.interval(300);

        interval
            .takeWhile(_ => this.timeLeft < 300)
            .do(i => this.timeLeft += 0.1)
            .subscribe();
    }

}

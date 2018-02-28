import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html'
})
export class TimerComponent implements OnInit {

    @Input() percentage: number;

    secondsPassed = 0;

    constructor() {
        this.percentage = 0;
    }

    ngOnInit() {
        setInterval(_ => {
            if (this.secondsPassed < 300) {
                this.secondsPassed++;
                this.percentage = (this.secondsPassed / 300 * 100);
            }
        }, 1000);
    }

    titleFormat = (): any => {
        return 300 - this.secondsPassed;
    };
}

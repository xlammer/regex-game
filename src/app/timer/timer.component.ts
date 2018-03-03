import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html'
})
export class TimerComponent implements OnInit {

    @Input()
    percentage: number;

    @Output() onTick = new EventEmitter<number>();
    secondsPassed: number;

    constructor() {
        this.percentage = 0;
        this.secondsPassed = 0;
    }

    ngOnInit() {
        setInterval(_ => {
            if (this.secondsPassed < MAX_TIMER_TIME) {
                this.secondsPassed++;
                this.onTick.emit(this.secondsPassed);
                this.percentage = (this.secondsPassed / MAX_TIMER_TIME * 100);
            }
        }, 1000);
    }

    titleFormat = (): any => {
        let secondsLeft = MAX_TIMER_TIME - this.secondsPassed;
        if (secondsLeft > 60) {
            let minutes = Math.floor(secondsLeft / 60);
            let seconds = secondsLeft - minutes * 60;
            return minutes + 'm ' + seconds + 's';
        }
        return secondsLeft + ' seconds';
    }
}

export const MAX_TIMER_TIME = 600;

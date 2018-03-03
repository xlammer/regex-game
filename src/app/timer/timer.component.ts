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
        return secondsLeft + 's';
    }
}

export const MAX_TIMER_TIME = 600;

export const TIMER_OPTIONS = {
    radius: 50,
    outerStrokeWidth: 12,
    outerStrokeColor: '#4882c2',
    innerStrokeWidth: 12,
    innerStrokeColor: '#e7e8ea',
    outerStrokeLinecap: 'butt',
    backgroundOpacity: 1,
    space: -12,
    animation: false,
    maxPercent: 100,
    showSubtitle: false,
    showUnits: false,
    clockwise: false,
    toFixed: 3
};

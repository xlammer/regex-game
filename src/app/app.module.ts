import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {GameComponent} from './game/game.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {TaskService} from './task.service';
import {TIMER_OPTIONS, TimerComponent} from './timer/timer.component';
import {NgCircleProgressModule} from 'ng-circle-progress';


@NgModule({
    declarations: [
        AppComponent,
        GameComponent,
        WelcomeComponent,
        TimerComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        NgbModule.forRoot(),
        NgCircleProgressModule.forRoot(TIMER_OPTIONS)
    ],
    providers: [TaskService],
    bootstrap: [AppComponent]
})


export class AppModule {
}

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {GameComponent} from './game/game.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {TaskService} from './task.service';
import {TimerComponent} from './timer/timer.component';
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
        NgCircleProgressModule.forRoot({
            radius: 50,
            outerStrokeWidth: 12,
            outerStrokeColor: '#4882c2',
            innerStrokeWidth: 12,
            innerStrokeColor: '#e7e8ea',
            backgroundOpacity: 1,
            space: -12,
            animation: false,
            maxPercent: 100,
            showSubtitle: false,
            showUnits: false
        })
    ],
    providers: [TaskService],
    bootstrap: [AppComponent]
})


export class AppModule {
}

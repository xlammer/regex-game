import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {GameComponent} from './game/game.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {TaskService} from './task.service';


@NgModule({
    declarations: [
        AppComponent,
        GameComponent,
        WelcomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        NgbModule.forRoot()
    ],
    providers: [TaskService],
    bootstrap: [AppComponent]
})


export class AppModule {
}

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';


import {Routes} from '@angular/router';


import {FormsModule} from '@angular/forms';
import {RoundProgressModule} from 'angular-svg-round-progressbar';

import {GameComponent} from './game/game.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {AppRoutingModule} from './app-routing.module';


const routes: Routes = [
    {path: 'welcome', component: WelcomeComponent},
    {path: 'game', component: GameComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        GameComponent,
        WelcomeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RoundProgressModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})


export class AppModule {
}

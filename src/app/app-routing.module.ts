import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {GameComponent} from './game/game.component';


const routes: Routes = [
    {path: '', redirectTo: '/welcome', pathMatch: 'full'},
    {path: 'welcome', component: WelcomeComponent},
    {path: 'game', component: GameComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

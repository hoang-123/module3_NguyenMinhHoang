import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { TimeLinesComponent } from './time-lines/time-lines.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { DictionaryPageComponent } from './dictionary-page/dictionary-page.component';
import { DictionaryDetailComponent } from './dictionary-detail/dictionary-detail.component';
import { AuthGuard } from 'src/auth.guard';


const routes: Routes = [
  {
    path: 'time-lines',
    component: TimeLinesComponent

},
{
  path: 'youtube',
  component: YoutubeComponent,
  children: [{
      path: ':id',
      component: YoutubePlayerComponent
  }]
},
{
  path: 'dictionary',
  component: DictionaryPageComponent,
  children: [
    {
      path: ':key',
      component: DictionaryDetailComponent,
      canActivate: [AuthGuard]
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

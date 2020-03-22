import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from 'src/auth.guard';
import { TimeLinesComponent } from './learn/time-lines/time-lines.component';
import { YoutubeComponent } from './learn/youtube/youtube.component';
import { YoutubePlayerComponent } from './learn/youtube-player/youtube-player.component';
import { DictionaryPageComponent } from './learn/dictionary-page/dictionary-page.component';
import { DictionaryDetailComponent } from './learn/dictionary-detail/dictionary-detail.component';


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
      component: DictionaryDetailComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

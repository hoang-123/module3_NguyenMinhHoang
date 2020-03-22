import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DictionaryService } from 'src/dictionary.service';
import { LoginComponent } from './learn/login/login.component';
import { RegisterFinalComponent } from './learn/register-final/register-final.component';
import { RegisterComponent } from './learn/register/register.component';
import { TemplateDrivenFormComponent } from './learn/template-driven-form/template-driven-form.component';
import { TodoComponent } from './learn/todo/todo.component';
import { TimeLinesComponent } from './learn/time-lines/time-lines.component';
import { YoutubeComponent } from './learn/youtube/youtube.component';
import { YoutubePlayerComponent } from './learn/youtube-player/youtube-player.component';
import { DictionaryComponent } from './learn/dictionary/dictionary.component';
import { DictionaryDetailComponent } from './learn/dictionary-detail/dictionary-detail.component';
import { DictionaryPageComponent } from './learn/dictionary-page/dictionary-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterFinalComponent,
    RegisterComponent,
    TemplateDrivenFormComponent,
    TodoComponent,
    TimeLinesComponent,
    YoutubeComponent,
    YoutubePlayerComponent,
    DictionaryComponent,
    DictionaryDetailComponent,
    DictionaryPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DictionaryService],
  bootstrap: [AppComponent]
})
export class AppModule { }

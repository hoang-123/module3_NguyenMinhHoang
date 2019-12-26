import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterFinalComponent } from './register-final/register-final.component';
import { RegisterComponent } from './register/register.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { TodoComponent } from './todo/todo.component';
import { TimeLinesComponent } from './time-lines/time-lines.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { DictionaryDetailComponent } from './dictionary-detail/dictionary-detail.component';
import { DictionaryPageComponent } from './dictionary-page/dictionary-page.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

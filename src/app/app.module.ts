import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbDialogModule, NbDialogService, NbCardModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { PostFeedDialogComponent } from './post-feed-dialog/post-feed-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PostFeedDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbEvaIconsModule,
    NbDialogModule.forChild(),
    NbCardModule,
  ],
  providers: [
    // ...NbThemeModule.forRoot({name: 'dark'}).providers,
  ],
  entryComponents: [PostFeedDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

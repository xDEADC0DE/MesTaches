import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListeTachesComponent } from './components/liste-taches/liste-taches.component';
import { DetailTacheComponent } from './components/detail-tache/detail-tache.component';
import { TacheStatutPipe } from './pipes/tache-statut.pipe';
import { GpsPipe } from './pipes/gps.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListeTachesComponent,
    DetailTacheComponent,
    TacheStatutPipe,
    GpsPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

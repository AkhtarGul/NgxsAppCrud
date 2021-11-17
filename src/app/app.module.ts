import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { MoviesCategories } from './model/movies.model';
import { MoviesState } from './store/app.state';
import { MoviesModalComponent } from './movies-modal/movies-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    MoviesModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    NgxsModule.forRoot([MoviesState], {
      developmentMode: !environment.production
    }),
  ],
  providers: [],
  entryComponents: [MoviesModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

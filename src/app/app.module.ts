import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from './environment/environment';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TutorialService } from './tutorial.service';
import { AddstockComponent } from './addstock/addstock.component'

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'add', component: AddstockComponent },
]

@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot(routes), AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,],
  declarations: [ AppComponent, HelloComponent, HomeComponent, AddstockComponent ],
  bootstrap:    [ AppComponent ],
  providers: [TutorialService]
})
export class AppModule { }


import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './page/home/home.component';
import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterComponent } from './component/router/router.component';
import {ContextMenuComponent} from './component/context-menu/context-menu.component'
import { MatDividerModule } from '@angular/material/divider';
@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    RouterComponent,
    ContextMenuComponent
  ],
  imports: [
    MatButtonModule,
    MatDividerModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    DragDropModule,
    MatMenuModule,
    MatIconModule
  ],
  bootstrap: [AppComponent],
  providers: []
})

export class AppModule { }

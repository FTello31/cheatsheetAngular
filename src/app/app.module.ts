import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { MaterialModule } from './app-material.module';
import { SidebarComponent } from './core-modules/sidebar/sidebar.component';
import { HomeComponent } from './modules/home/home.component';
import { TablesComponent } from './modules/tables/tables.component';

import { AppConfig } from './services/config/app.config';
import { TableCheckComponent } from './modules/tables/table-check/table-check.component';
import { TableRowButtonsComponent } from './modules/tables/table-row-buttons/table-row-buttons.component';
import { DialogsComponent } from './modules/dialogs/dialogs.component';
import { DialogConfirmDeleteComponent } from './shared/dialog-confirm-delete/dialog-confirm-delete.component';
import { SyncDialogComponent } from './modules/dialogs/sync-dialog/sync-dialog.component';
import { AsyncDialogComponent } from './modules/dialogs/async-dialog/async-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './core-modules/footer/footer.component';
import { HeaderComponent } from './core-modules/header/header.component';
import { LoginComponent } from './core-modules/login/login.component';
import { ParentSecureComponent } from './core-modules/parent-secure/parent-secure.component';



export function initializeApp(appConfig: AppConfig) {
  return () => appConfig.load();
}

const DialogComponents = [
  DialogConfirmDeleteComponent,
  SyncDialogComponent,
  AsyncDialogComponent
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    TablesComponent,
    TableCheckComponent,
    TableRowButtonsComponent,
    DialogsComponent,
    DialogConfirmDeleteComponent,
    SyncDialogComponent,
    AsyncDialogComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    ParentSecureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AppConfig,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppConfig], multi: true
    },
  ],
  entryComponents: [
    DialogComponents
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

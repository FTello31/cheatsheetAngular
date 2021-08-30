import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/app-material.module';
import { DialogsComponent } from './dialogs.component';
import { DialogsRoutingModule } from './dialogs.routing.module';
import { SyncDialogComponent } from './sync-dialog/sync-dialog.component';
import { AsyncDialogComponent } from './async-dialog/async-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SyncDialogComponent,
    AsyncDialogComponent,
  ],
  imports: [
    CommonModule,
    DialogsRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class DialogsModule { }

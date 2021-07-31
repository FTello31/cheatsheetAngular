import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { DialogConfirmDeleteComponent } from 'src/app/shared/dialog-confirm-delete/dialog-confirm-delete.component';
import { AsyncDialogComponent } from './async-dialog/async-dialog.component';
import { SyncDialogComponent } from './sync-dialog/sync-dialog.component';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.sass']
})
export class DialogsComponent implements OnInit {

  deleteGenericDialog: MatDialogRef<DialogConfirmDeleteComponent>;

  asyncDialog: MatDialogRef<AsyncDialogComponent>;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  clickButtonDelete(): void {
    this.deleteGenericDialog = this.dialog.open(DialogConfirmDeleteComponent, { disableClose: false });
    this.deleteGenericDialog.componentInstance.title = ("Title Generic Delete");
    this.deleteGenericDialog.componentInstance.msgConfirmation = "Are you sure to delete this?";
    this.deleteGenericDialog.afterClosed().subscribe(result => {
      if (result) {
        this.deleteFunction();
      }
      this.deleteGenericDialog = null;
    });

  }

  deleteFunction() {
    console.log("Delete Generic");
  }




  openSyncDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    dialogConfig.minWidth = 300;
    // if (!this.flagNewUser) {
    dialogConfig.data = {
      // user: this.user,
      // flagView : this.flagViewUser
    };
    // }
    const dialogRef = this.dialog.open(SyncDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        // this.user = result;
        // if (this.flagNewUser) {
        this.syncDialogMethod();
        // } else {
        //   this.updateUser(this.user);
        // }
      }
    });
  }
  syncDialogMethod() {
    console.log("SyncDialog pressed")
  }

  openAsyncDialog() {
    let array = ['1', '2', '3', '4', '5']
    this.asyncDialog = this.dialog.open(AsyncDialogComponent, { width: '80%', disableClose: false });
    this.asyncDialog.componentInstance.logsEscenario = array;

  }

  asyncDialogMethod() {
    console.log("SyncDialog pressed")
  }






}

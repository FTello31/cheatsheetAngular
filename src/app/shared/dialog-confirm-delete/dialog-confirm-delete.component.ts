import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-confirm-delete',
  templateUrl: './dialog-confirm-delete.component.html',
  styleUrls: ['./dialog-confirm-delete.component.sass']
})
export class DialogConfirmDeleteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogConfirmDeleteComponent>) {
  }

  public msgConfirmation: string;
  public title: string;

  ngOnInit(): void {
  }

}

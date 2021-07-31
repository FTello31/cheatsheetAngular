import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-async-dialog',
  templateUrl: './async-dialog.component.html',
  styleUrls: ['./async-dialog.component.sass']
})
export class AsyncDialogComponent implements OnInit {


  @Input() logsEscenario: string[];

  // dcVerResumen: string[] = ['numstage', 'contador', 'pe','saldo', 'pd', 'lgd', 'ead'];
  // dsVerResumen: MatTableDataSource<VerResumen>;
  // verResumen: VerResumen[];
  allDataSource: any = [];

  constructor(public dialogRef: MatDialogRef<AsyncDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
  }

}

import { Component, ElementRef, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-sync-dialog',
  templateUrl: './sync-dialog.component.html',
  styleUrls: ['./sync-dialog.component.sass']
})
export class SyncDialogComponent implements OnInit, OnDestroy {

  // UserForm: FormGroup;
  tittle: string;
  hide: boolean;
  disabled = false;
  @ViewChild('focus', { static: true }) focusElement: ElementRef;


  constructor(
    public dialogRef: MatDialogRef<SyncDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.tittle = "Sync Dialog";
    this.hide = true;
  }


  ngOnInit(): void {
    // this.UserForm = new FormGroup({
    //   // 'id_User': new FormControl(''),
    //   'name': new FormControl('', [Validators.required]),
    //   'email': new FormControl('', [Validators.required, Validators.email]),
    //   'department': new FormControl('', [Validators.required]),
    //   'user_password': new FormControl('', [Validators.required]),
    //   'admin': new FormControl('', [Validators.required]),
    //   'id_UserLanguage': new FormControl('', [Validators.required])
    // });
  }

  onCancel() {
    this.dialogRef.close();
  }

  ngOnDestroy() {
    // this.UserForm.reset();
  }


}

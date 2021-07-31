import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'cheetsheetAngular';


  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {

    iconRegistry.addSvgIcon(
      'add_box', sanitizer.bypassSecurityTrustResourceUrl('assets/images/mat-icons/baseline-add_box-24px.svg'));
    iconRegistry.addSvgIcon(
      'delete', sanitizer.bypassSecurityTrustResourceUrl('assets/images/mat-icons/baseline-delete-24px.svg'));
  }

}

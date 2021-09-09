import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'cheatsheetAngular';
  loading: boolean;


  constructor(router: Router, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    this.loading = false;
    // loading spinner
    router.events.subscribe(
      (event: RouterEvent): void => {
        if (event instanceof RouteConfigLoadStart) {
          this.loading = true;
          console.log("waiting");
        } else if (event instanceof RouteConfigLoadEnd) {
          this.loading = false;
        }
      }
    );


    iconRegistry.addSvgIcon(
      'add_box', sanitizer.bypassSecurityTrustResourceUrl('assets/images/mat-icons/baseline-add_box-24px.svg'));
    iconRegistry.addSvgIcon(
      'delete', sanitizer.bypassSecurityTrustResourceUrl('assets/images/mat-icons/baseline-delete-24px.svg'));
  }

}

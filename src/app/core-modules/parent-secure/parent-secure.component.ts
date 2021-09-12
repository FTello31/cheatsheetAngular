import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-secure',
  templateUrl: './parent-secure.component.html',
  styleUrls: ['./parent-secure.component.sass']
})
export class ParentSecureComponent implements OnInit {

  isActiveSidebar: string = 'show';

  constructor() { }

  ngOnInit(): void {
  }

  showSide(show) {
    console.log(show);

    show == 'true' ? this.isActiveSidebar = 'show' : this.isActiveSidebar = 'hide';
    console.log(show);
  }

}

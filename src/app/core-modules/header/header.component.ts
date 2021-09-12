import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  @Output() show = new EventEmitter<string>();
  showFlag: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  showSidebar() {
    this.showFlag = !this.showFlag;
    this.show.emit(this.showFlag.toString());
  }

}

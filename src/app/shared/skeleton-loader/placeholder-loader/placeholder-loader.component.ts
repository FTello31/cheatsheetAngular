import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-placeholder-loader',
  templateUrl: './placeholder-loader.component.html',
  styleUrls: ['./placeholder-loader.component.sass']
})
export class PlaceholderLoaderComponent implements OnInit {

  @Input() Cwidth;
  @Input() Cheight;
  @Input() circle: boolean;


  constructor() { }

  ngOnInit(): void {
  }


  getMyStyles() {
    const myStyles = {
      'width': this.Cwidth ? this.Cwidth : '',
      'height': this.Cheight ? this.Cheight : '',
      'border-radius': this.circle ? '50%' : ''
    };
    return myStyles;
  }

}

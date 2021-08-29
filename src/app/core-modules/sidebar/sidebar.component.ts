import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { MENU } from './sidebar-routes.config';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit, AfterViewInit, OnDestroy {
  public color: string;
  public menuItems: object;
  public activeFontColor: string;
  public normalFontColor: string;
  public dividerBgColor: string;

  // constructor(public settingsService: SettingsService) {
  //   this.menuItems = MENU;
  //   this.activeFontColor = 'rgba(0,0,0,.6)';
  //   this.normalFontColor = 'rgba(255,255,255,.8)';
  //   this.dividerBgColor = 'rgba(255, 255, 255, 0.5)';
  // }
  constructor() {
    this.menuItems = MENU;
    this.activeFontColor = 'rgba(0,0,0,.6)';
    this.normalFontColor = 'rgba(255,255,255,.8)';
    this.dividerBgColor = 'rgba(255, 255, 255, 0.5)';
  }

  ngOnInit(): void {

  }

  ngOnDestroy() {
  }

  // hasPermissions(permisoRequerido:string):boolean {
  //   const permisos=JSON.parse(sessionStorage.getItem("Permisos")); 
  //   return permisos.find(p=>p.nombre==permisoRequerido).acciones.acceder;
  // }


  ngAfterViewInit() {
  }

}

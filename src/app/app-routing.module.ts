import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core-modules/login/login.component';
import { ParentSecureComponent } from './core-modules/parent-secure/parent-secure.component';
import { DialogsComponent } from './modules/dialogs/dialogs.component';
import { HomeComponent } from './modules/home/home.component';
import { TablesComponent } from './modules/tables/tables.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  {
    path: '', canActivate: [AuthGuard], component: ParentSecureComponent,
    children: [
      // { path: 'inicio',canActivate: [AuthGuard,PermisionGuard], data: {permisoRequerido: 'mnuInicio'}, component: InicioComponent },
      // { path: 'parametrizacion/cuentas-contables',canActivate: [AuthGuard,PermisionGuard], data: {permisoRequerido: 'mnuParametrizacion'}, component: CuentasContablesPeriodoListarComponent }
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'tables', component: TablesComponent },
      { path: 'dialogs', component: DialogsComponent },

    ]
  },


  // ibk
  // {
  //   path: '', canActivate: [AutenticacionGuard], component: NavbarComponent,
  //   children: [

  //     {
  //       path: 'inicio', component: PaginaInicioComponent,
  //       canActivate: [AutenticacionGuard],
  //       data: { permisosRequeridos: [] }
  //     },
  //   ]
  // }


];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

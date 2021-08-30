import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core-modules/login/login.component';
import { ParentSecureComponent } from './core-modules/parent-secure/parent-secure.component';
import { DialogsComponent } from './modules/dialogs/dialogs.component';
import { HomeComponent } from './modules/home/home.component';
import { TablesComponent } from './modules/tables-container/tables.component';
import { AuthGuard } from './shared/_guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '', canActivate: [AuthGuard], canActivateChild: [AuthGuard], component: ParentSecureComponent,
    children: [
      // { path: 'inicio',canActivate: [AuthGuard,PermisionGuard], data: {permisoRequerido: 'mnuInicio'}, component: InicioComponent },
      // { path: 'parametrizacion/cuentas-contables',canActivate: [AuthGuard,PermisionGuard], data: {permisoRequerido: 'mnuParametrizacion'}, component: CuentasContablesPeriodoListarComponent }
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      // { path: 'tables', component: TablesComponent },
      { path: 'tables', loadChildren: () => import('./modules/tables-container/tables.module').then(m => m.TablesModule) },
      { path: 'dialogs', loadChildren: () => import('./modules/dialogs/dialogs.module').then(m => m.DialogsModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

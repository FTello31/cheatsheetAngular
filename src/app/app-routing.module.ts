import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DialogsComponent } from './modules/dialogs/dialogs.component';
import { HomeComponent } from './modules/home/home.component';
import { TablesComponent } from './modules/tables/tables.component';

const routes: Routes = [
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: 'login', component: LoginComponent },

  // {
  //   path: '', canActivate: [AuthGuard], component: ParentComponent,
  //   children: [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'dialogs', component: DialogsComponent },

  // { path: 'parametrizacion/productos/catalogo',canActivate: [AuthGuard,PermisionGuard], data: {permisoRequerido: 'mnuParametrizacion'}, component: ProductosMaestroListarComponent },
  // { path: 'parametrizacion/canales',canActivate: [AuthGuard,PermisionGuard], data: {permisoRequerido: 'mnuParametrizacion'}, component: CanalesMaestroComponent },
  // { path: 'parametrizacion/subcanales',canActivate: [AuthGuard,PermisionGuard], data: {permisoRequerido: 'mnuParametrizacion'}, component: SubcanalesPeriodoListarComponent },
  // { path: 'parametrizacion/subcanales/catalogo',canActivate: [AuthGuard,PermisionGuard], data: {permisoRequerido: 'mnuParametrizacion'}, component: SubcanalesMaestroListarComponent },

  //   ]
  // }
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

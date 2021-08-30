import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablesComponent } from './tables.component';

const routes: Routes = [
    //     { path: '',
    //     redirectTo: 'page-a1',
    //     pathMatch: 'full'
    //   },
    {
        path: '',
        component: TablesComponent,
    }
];





@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TablesRoutingModule { }

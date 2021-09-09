import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableCheckComponent } from './table-check/table-check.component';
import { TableNormalComponent } from './table-normal/table-normal.component';
import { TableRowButtonsComponent } from './table-row-buttons/table-row-buttons.component';
import { TablesComponent } from './tables.component';

const routes: Routes = [
    //     { path: '',
    //     redirectTo: 'page-a1',
    //     pathMatch: 'full'
    //   },
    {
        path: '',
        component: TablesComponent
        // children: [
    },

    {
        path: 'normal-table',
        component: TableNormalComponent
    },
    {
        path: 'check-table',
        component: TableCheckComponent
    },
    {
        path: 'row-table',
        component: TableRowButtonsComponent
    }
    // ]}
];





@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TablesRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableNormalComponent } from './table-normal/table-normal.component';
import { TableCheckComponent } from './table-check/table-check.component';
import { TableRowButtonsComponent } from './table-row-buttons/table-row-buttons.component';
import { MaterialModule } from 'src/app/app-material.module';
import { TablesComponent } from './tables.component';
import { TablesRoutingModule } from './tables.routing.module';



@NgModule({
  declarations: [
    TablesComponent,
    TableNormalComponent,
    TableCheckComponent,
    TableRowButtonsComponent],
  imports: [
    CommonModule,
    TablesRoutingModule,
    MaterialModule
  ]
})
export class TablesModule { }

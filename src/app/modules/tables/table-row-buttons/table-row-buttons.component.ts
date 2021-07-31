import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MaPartida } from 'src/app/models/ma-partida.model';
import { TablesService } from 'src/app/services/tables.service';

@Component({
  selector: 'app-table-row-buttons',
  templateUrl: './table-row-buttons.component.html',
  styleUrls: ['./table-row-buttons.component.sass']
})
export class TableRowButtonsComponent implements OnInit, AfterViewInit {

  hasLoaded: boolean = false;

  // tabla 2
  dataSourceEscenarios: MatTableDataSource<MaPartida>;
  displayedColumns: string[] = ['nombre', 'grupoGasto', 'editar', 'borrar'];
  escenarios: MaPartida[];

  // Funcionalidad Paginator, Paneles y Sort
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog,
    private restPartidaService: TablesService,
    public snackBar: MatSnackBar) {

    this.dataSourceEscenarios = new MatTableDataSource<MaPartida>();
  }

  ngOnInit(): void {
    this.getPartidas();
  }

  ngAfterViewInit() {
    this.dataSourceEscenarios.paginator = this.paginator;
    this.dataSourceEscenarios.sort = this.sort;
  }

  getPartidas() {
    this.hasLoaded = false;
    this.restPartidaService.getPartidas(1).subscribe(partidas => {
      this.hasLoaded = true;

      this.escenarios = partidas;
      this.dataSourceEscenarios.data = partidas;
    },
      error => {
        this.snackBar.open(`(${error.status}):
        ${error.message}`, 'X', { duration: 10000 });
      }
    );
  }

  clickBotonEditar(entidadSeleccionada: MaPartida): void {
    console.log("edit " + entidadSeleccionada.nombre);

  }


  clickBotonBorrar(entidadSeleccionada: MaPartida): void {
    console.log("delete " + entidadSeleccionada.nombre);
  }


}

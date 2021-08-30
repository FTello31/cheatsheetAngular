import { AfterViewInit, Component, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { MaPartida } from '../../../models/ma-partida.model';
import { TablesService } from '../../../services/tables.service';
import { SyncDialogComponent } from '../../dialogs/sync-dialog/sync-dialog.component';

import { utils, WorkBook, WorkSheet, writeFile } from 'xlsx';

@Component({
  selector: 'app-table-normal',
  templateUrl: './table-normal.component.html',
  styleUrls: ['./table-normal.component.sass']
})
export class TableNormalComponent implements OnInit, AfterViewInit, OnDestroy {

  // Funcionalidad Paginator, Paneles y Sort
  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
  @ViewChildren(MatSort) sort = new QueryList<MatSort>();

  partidaSeleccionada: MaPartida;
  selectedRowIndex: string;
  isActive: boolean;

  hasLoaded: boolean = false;

  dsMaPartidas: MatTableDataSource<MaPartida>;
  dcMaPartidas: string[] = ['codPartida', 'nombre', 'grupoGasto', 'tipoGasto'];
  partidas: MaPartida[];

  fileName: string = 'Partidas - Catalogo';


  constructor(public dialog: MatDialog,
    private restPartidaService: TablesService,
    public snackBar: MatSnackBar) {
    this.dsMaPartidas = new MatTableDataSource<MaPartida>();
    this.restart();
  }

  ngOnInit(): void {
    this.getPartidas();
  }

  ngAfterViewInit() {
    this.dsMaPartidas.paginator = this.paginator.toArray()[0];

    // Para atributos con objetos anidados
    /*this.dsCuentas.sortingDataAccessor = (item, property) => {
      switch (property) {
        case 'nombre': return item.card_number;
        default: return item[property];
      }
    };*/
    this.dsMaPartidas.sort = this.sort.toArray()[0];
  }

  getPartidas() {
    this.hasLoaded = false;
    this.restPartidaService.getPartidas(1).subscribe(partidas => {
      this.hasLoaded = true;
      this.partidas = partidas;
      this.dsMaPartidas.data = partidas;

    },
      error => {
        this.snackBar.open(`(${error.status}):
        ${error.message}`, 'X', { duration: 10000 });
      }
    );
  }

  restart() {
    this.partidaSeleccionada = null;
    this.isActive = false;
    this.selectedRowIndex = null;
  }

  clickablePartidaRow(partida: MaPartida) {
    this.partidaSeleccionada = partida;
    this.selectedRowIndex = partida.codPartida;
    this.isActive = true;
  }

  openCreateDialog() {
    // this.dialogoCrear = this.dialog.open(PartidasMaestroCrearDialogComponent, { disableClose: false });
    // this.dialogoCrear.afterClosed().subscribe(result => {
    //   this.getPartidas();
    //   this.dialogoCrear = null;
    // });
    console.log("create");

  }

  openEditDialog() {
    console.log("edit");

    if (Object.keys(this.partidaSeleccionada).length !== 0) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = false;
      dialogConfig.autoFocus = false;
      dialogConfig.minWidth = 300;
      dialogConfig.data = {
        partida: this.partidaSeleccionada
      };

      const dialogRef = this.dialog.open(SyncDialogComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        this.getPartidas();
      });

    }
    this.restart();
  }

  openDeleteDialog() {
    console.log("delete");
  }

  downloadTable() {
    //npm install xlsx --save
    /* ID TABLA */
    let headers = ['CODIGO', 'NOMBRE', 'GRUPO GASTO', 'TIPO GASTO'];
    let newArray = this.dsMaPartidas.filteredData.map(({ codPartida, nombre, grupoGasto, tipoGasto }
    ) => ({ codPartida, nombre, grupoGasto, tipoGasto: tipoGasto == 1 ? '1' : '0' }));

    /* GENERAR WORKBOOK Y AÑADIR WORKSHEET */
    let ws: WorkSheet = utils.json_to_sheet(newArray);
    if (ws.A1 != undefined) {
      ws.A1.v = headers[0];
      ws.B1.v = headers[1];
      ws.C1.v = headers[2];
      ws.D1.v = headers[3];
    }
    const wb: WorkBook = utils.book_new();
    utils.book_append_sheet(wb, ws, 'CATALOGO'); // tab name

    /* GRABAR ARCHIVO */
    writeFile(wb, this.fileName + ' - ' + new Date().toLocaleString() + '.xlsx');
  }

  applyFilter(filterValue: string) {
    this.dsMaPartidas.filter = filterValue.trim().toLowerCase();

    if (this.dsMaPartidas.paginator) {
      this.dsMaPartidas.paginator.firstPage();
    }
  }


  ngOnDestroy(): void {
    // this.subscribeUpload?.unsubscribe();
  }

}

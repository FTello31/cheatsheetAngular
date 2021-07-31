import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MaPartida } from '../../models/ma-partida.model';
import { TablesService } from '../../services/tables.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.sass']
})
export class TablesComponent implements OnInit, AfterViewInit, OnDestroy {

  // Funcionalidad Paginator, Paneles y Sort
  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
  @ViewChildren(MatSort) sort = new QueryList<MatSort>();

  partidaSeleccionada: MaPartida;
  selectedRowIndex: string;
  isActivePartida: boolean;

  hasLoaded: boolean = false;
  repartoTipo: number;

  dsMaPartidas: MatTableDataSource<MaPartida>;
  dcMaPartidas: string[] = ['codPartida', 'nombre', 'grupoGasto', 'tipoGasto'];
  partidas: MaPartida[];



  constructor(public dialog: MatDialog,
    private restPartidaService: TablesService,
    public snackBar: MatSnackBar) {
    this.dsMaPartidas = new MatTableDataSource<MaPartida>();
    this.repartoTipo = 1;
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
    this.restPartidaService.getPartidas(this.repartoTipo).subscribe(partidas => {
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
    this.isActivePartida = false;
    this.selectedRowIndex = null;
  }

  clickablePartidaRow(partida: MaPartida) {
    this.partidaSeleccionada = partida;
    this.selectedRowIndex = partida.codPartida;
    this.isActivePartida = true;
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

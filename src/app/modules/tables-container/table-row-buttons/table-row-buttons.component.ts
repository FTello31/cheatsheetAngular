import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { MaPartida } from 'src/app/models/ma-partida.model';
import { TablesService } from 'src/app/services/tables.service';
import { RxjsWayService } from 'src/app/services/rxjs-way.service';
import { tap } from 'rxjs/operators';

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


  products$: Observable<MaPartida[]>;
  // https://wilderperozo.medium.com/5-sencillos-tips-and-tricks-cuando-usas-async-pipe-en-angular-fa4580000694

  constructor(public dialog: MatDialog,
    private restAsyncService: RxjsWayService,
    public snackBar: MatSnackBar) {

    this.dataSourceEscenarios = new MatTableDataSource<MaPartida>();
  }

  ngOnInit(): void {
    this.restAsyncService.getPartidas(1).subscribe(products => {
      this.dataSourceEscenarios.data = products;
    });
    // this.products$.subscribe(data => console.log(data));
  }

  ngAfterViewInit() {
    this.dataSourceEscenarios.paginator = this.paginator;
    this.dataSourceEscenarios.sort = this.sort;
  }



  clickBotonEditar(entidadSeleccionada: MaPartida): void {
    console.log("edit " + entidadSeleccionada.nombre);

  }


  clickBotonBorrar(entidadSeleccionada: MaPartida): void {
    console.log("delete " + entidadSeleccionada.nombre);
  }


}

import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MaPartida } from 'src/app/models/ma-partida.model';
import { TablesService } from 'src/app/services/tables.service';
import { DialogConfirmDeleteComponent } from 'src/app/shared/dialog-confirm-delete/dialog-confirm-delete.component';

@Component({
  selector: 'app-table-check',
  templateUrl: './table-check.component.html',
  styleUrls: ['./table-check.component.sass']
})
export class TableCheckComponent implements OnInit, AfterViewInit {

  hasLoaded: boolean = false;

  // tabla 2
  dataSourceEscenarios: MatTableDataSource<MaPartida>;
  displayedColumns: string[] = ['select', 'nombre', 'grupoGasto'];
  escenarios: MaPartida[];
  selection: SelectionModel<MaPartida>;

  deleteDialog: MatDialogRef<DialogConfirmDeleteComponent>;


  // Funcionalidad Paginator, Paneles y Sort
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog,
    private restPartidaService: TablesService,
    public snackBar: MatSnackBar) {

    this.dataSourceEscenarios = new MatTableDataSource<MaPartida>();
    this.selection = new SelectionModel<MaPartida>(true, []); // para los checkboxes de la tabla

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

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSourceEscenarios.filteredData.forEach(row => this.selection.select(row));
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSourceEscenarios.filteredData.length;
    return numSelected === numRows;
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: MaPartida): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row}`;
  }


  clickButtonNew(): void {
    //Control de Paneles
    // this.desabilitarEditar = false;
    // this.desabilitarEscenarios = true;
    // this.expandirEditar = true;
    // this.expandirEscenarios = false;


    // //Actualizamos validadores        
    // this.escenarioForm.controls["nombre_escenario"].setValidators([Validators.required,Validators.maxLength(50), nombreExistenteValidator(this.nombresEscenario)]);

    // this.escenarioForm.controls['nombre_variable_motor'].setValidators([Validators.required, Validators.maxLength(30), 
    //   nombreExistenteValidator(this.nombresVariableMotorEscenario), Validators.pattern(/^\s*\S+\s*$/)]);
    // //Formulario
    // this.escenarioForm.controls["nombre_escenario"].setValue('');
    // this.escenarioForm.controls["nombre_variable_motor"].setValue('');
    // this.edicionNuevoEscenario = true;
    // this.escenario_edicion = new Escenario();
    console.log("New");
  }

  clickButtonEdit(escenarioSeleccionado: MaPartida): void {
    //Guardamos la escenario anterior a la edicion
    // this.escenario_anterior = JSON.parse(JSON.stringify(escenarioSeleccionado));

    // //Control de Paneles 
    // this.desabilitarEditar = false;
    // this.desabilitarEscenarios = true;
    // this.expandirEditar = true;
    // this.expandirEscenarios = false;

    // //Actualizamos validadores
    // let nombresEscenarioSinEditado: string[] = this.nombresEscenario.filter(nombre => nombre !== escenarioSeleccionado.nombre_escenario);
    // this.escenarioForm.controls["nombre_escenario"].setValidators([Validators.required,Validators.maxLength(50), nombreExistenteValidator(nombresEscenarioSinEditado)]);

    // let nombresEscenarioVariableMotorSinEditado: string[] = this.nombresVariableMotorEscenario.filter(nombre => nombre !== escenarioSeleccionado.nombre_variable_motor);
    // this.escenarioForm.controls['nombre_variable_motor'].setValidators([Validators.required, Validators.maxLength(30), 
    //   nombreExistenteValidator(nombresEscenarioVariableMotorSinEditado), Validators.pattern(/^\s*\S+\s*$/)]);


    // //Formulario
    // this.escenarioForm.controls["nombre_escenario"].setValue(escenarioSeleccionado.nombre_escenario);
    // this.escenarioForm.controls["nombre_variable_motor"].setValue(escenarioSeleccionado.nombre_variable_motor);
    // this.edicionNuevoEscenario = false;
    // this.escenario_edicion = escenarioSeleccionado;
    console.log(escenarioSeleccionado.nombre);

  }




  //-------------------Funcionalidad Buttones + formulario-------------------------//
  clickButtonDelete(): void {
    if (this.selection.selected.length > 0) {
      this.deleteDialog = this.dialog.open(DialogConfirmDeleteComponent, { disableClose: false });
      this.deleteDialog.componentInstance.title = ("Delete");
      this.deleteDialog.componentInstance.msgConfirmation = "Confirmation";
      this.deleteDialog.afterClosed().subscribe(result => {
        if (result) {
          this.deleteEscenarios();
        }
        this.deleteDialog = null;
      });

    }
  }
  deleteEscenarios() {
    console.log("delete");
  }



  applyFilter2(filterValue: string) {
    this.dataSourceEscenarios.filter = filterValue.trim().toLowerCase();
    this.selection.clear();

    if (this.dataSourceEscenarios.paginator) {
      this.dataSourceEscenarios.paginator.firstPage();
    }
  }



}

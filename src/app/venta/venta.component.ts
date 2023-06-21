import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogVentaComponent } from './dialog/dialogventa.component';
import { ApiventaService } from '../services/apiventa.service';
import { Response } from '../models/response';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.scss']
})
export class VentaComponent implements OnInit{

  public lst!:[];
  public columnas: string[]=['id','fecha','idCliente','total'];
  readonly width: string = '600px';

  constructor( 
    private apiVentas: ApiventaService,
    public dialog: MatDialog, 
    public snackBar: MatSnackBar)
  {
   
  } 

  ngOnInit(): void
  {
     this.getVentas();
  }

   getVentas(){
     this.apiVentas.getVentas().subscribe(response =>{this.lst = response.data;});
   }

  openAdd(){
    const dialogRef= this.dialog.open(DialogVentaComponent,({width: this.width
    }));

  }
}


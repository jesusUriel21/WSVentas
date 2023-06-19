import {Component, Inject} from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ApiclienteService } from "src/app/services/apicliente.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Cliente } from "src/app/models/cliente";


@Component({
    templateUrl: 'dialogcliente.component.html'
}) 

export class DialogclienteComponent{
  public nombre!: string; 
   
   
    
   constructor(
      public dialogRef: MatDialogRef<DialogclienteComponent>,
      public apiCliente: ApiclienteService,
      public sanckBar: MatSnackBar,
      @Inject(MAT_DIALOG_DATA) public cliente: Cliente)
   {
        if (this.cliente !== null) {
            this.nombre = cliente.nombre;
        }
   }

     close(){
      this.dialogRef.close();
     }

     addCliente () {
      const cliente: Cliente = {nombre: this.nombre, id: 0}
             this.apiCliente.add(cliente).subscribe(response => {
                 if(response.exito === 1){
                   this.dialogRef.close();
                   this.sanckBar.open('Cliente insertado con exito', '' ,{duration: 2000 });
           }
       });  
    }




    editCliente()
      {
        const cliente: any = {nombre: this.nombre, id: this.cliente.id};
        this.apiCliente.edit(cliente).subscribe(response => {
          if(response.exito == 1)
          {
            this.dialogRef.close();
            this.sanckBar.open('Cliente editado con Exito', '' ,{duration: 2000 });
          }
            });  
      }
     
    

  }

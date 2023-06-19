import { Component, Inject, inject } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Concepto } from "src/app/models/concepto";
import { Venta } from "src/app/models/venta";
import { ApiventaService } from "src/app/services/apiventa.service";


@Component({
    templateUrl: 'dialogventa.component.html'
})

export class DialogVentaComponent{

     public venta:Venta;
     public conceptos: Concepto[];
        

  


     public conceptoForm = this.formBuilder.group({
       cantidad:[2, Validators.required],
       importe:[50,Validators.required],
       idproducto:[1,Validators.required] 

     });

    /* public conceptoForm = new FormGroup({
        email: new FormControl(''),
        password: new FormControl('')
     }) */
    

    constructor(public dialogRef: MatDialogRef<DialogVentaComponent>, public snackBar: MatSnackBar, private formBuilder: FormBuilder, public apiVenta: ApiventaService){
      this.conceptos = [];
      this.venta = {idCliente:3, conceptos:[]};
    }

    close(){
        this.dialogRef.close();
    }
     
    addConcepto(){
        this.conceptos.push(this.conceptoForm.value as Concepto);
    }

    addVenta(){
        this.venta.conceptos = this.conceptos;
        this.apiVenta.add(this.venta).subscribe(response=>{
         
                this.dialogRef.close();
                this.snackBar.open('Venta exitosa', '',{duration: 2000});
            
        });
    }

}
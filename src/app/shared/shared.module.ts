import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from './material-design/material-design.module';
import { MensajeConfirmacionComponent } from './mensaje-confirmacion/mensaje-confirmacion.component';



@NgModule({
  declarations: [
    MensajeConfirmacionComponent
  ],
  imports: [
    CommonModule,
    MaterialDesignModule
  ],
  exports:[
    MensajeConfirmacionComponent
  ]
})
export class SharedModule { }

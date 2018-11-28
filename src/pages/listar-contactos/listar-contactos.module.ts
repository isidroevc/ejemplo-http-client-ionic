import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListarContactosPage } from './listar-contactos';

@NgModule({
  declarations: [
    ListarContactosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListarContactosPage),
  ],
})
export class ListarContactosPageModule {}

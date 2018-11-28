import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EditarUsuarioPage } from '../editar-usuario/editar-usuario';
import { Contacto } from '../../schemas/contacto';
import { ListarContactosPage } from '../listar-contactos/listar-contactos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  //Eventos onclick.
  navegarAEditarUsuario() {
    this.navCtrl.push(EditarUsuarioPage, {
      contacto: new Contacto()
    });
  }

  navegarAListarcontactos(){
    this.navCtrl.push(ListarContactosPage,{});
  }

}

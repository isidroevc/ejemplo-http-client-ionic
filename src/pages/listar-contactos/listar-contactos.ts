import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ContactoProvider } from '../../providers/contacto/contacto';
import { Contacto } from '../../schemas/contacto';
import { EditarUsuarioPage } from '../editar-usuario/editar-usuario';

/**
 * Generated class for the ListarContactosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listar-contactos',
  templateUrl: 'listar-contactos.html',
})
export class ListarContactosPage {
  private contactos:Contacto[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private contactoProvider:ContactoProvider, private toastController:ToastController) {
    this.contactoProvider.listar().subscribe((contactos:Contacto[]) => {
      this.contactos = contactos;
    }, (error:any) => {
      let toast = this.toastController.create({
        message: 'No se pudieron listar los contactos',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListarContactosPage');
  }
  //evento click
  navegarAEditar(contacto:Contacto) {
    this.navCtrl.push(EditarUsuarioPage, {contacto: contacto});
  }
}

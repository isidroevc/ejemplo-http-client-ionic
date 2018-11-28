import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Contacto } from '../../schemas/contacto';
import { ContactoProvider } from '../../providers/contacto/contacto';
import { HomePage } from '../home/home';

/**
 * Generated class for the EditarUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editar-usuario',
  templateUrl: 'editar-usuario.html',
})
export class EditarUsuarioPage {
  private contacto:Contacto;
  private accion:string;
  private titulo:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private contactoProvider: ContactoProvider, private toastCtrl: ToastController) {
    this.contacto = navParams.get('contacto');
    if(!this.contacto.id) {
      this.accion = 'crear';
      this.titulo = 'Agregar Contacto';
    } else {
      this.accion = 'editar';
      this.titulo = 'Editar Contacto';
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarUsuarioPage');
  }

  //eventos
  ejecutarAccion() {
    if(this.accion === 'crear') {
      this.crear();
    } else {
      this.actualizar();
    }
  }

  crear() {
    this.contactoProvider.crear(this.contacto).subscribe((contacto:Contacto) => {
      this.contacto = contacto;
      let toast = this.toastCtrl.create({
        message: 'Contacto agregado correctamente',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
      setTimeout(() => {
        this.navCtrl.push(HomePage);
      }, 3000);
    }, (error: any) => {
      let toast = this.toastCtrl.create({
        message: 'No se pudo agregar el contacto',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
    });
  } 

  actualizar() {
    this.contactoProvider.actualizar(this.contacto).subscribe((contacto:Contacto)=> {
      this.contacto = contacto;
      let toast = this.toastCtrl.create({
        message: 'Contacto actualizado correctamente',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
      setTimeout(() => {
        this.navCtrl.push(HomePage);
      }, 3000);
    }, (error:any) => {
      let toast = this.toastCtrl.create({
        message: 'No se pudo actualizar el contacto',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
    });
  }

}

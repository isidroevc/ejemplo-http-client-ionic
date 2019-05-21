import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contacto } from '../../schemas/contacto';

/*
  Generated class for the ContactoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContactoProvider {
  private urlBase:string = 'http://192.168.137.175:3000/api/contactos/'
  constructor(public http: HttpClient) {

  }

  crear(contacto:Contacto) {
    return this.http.post<Contacto>(this.urlBase, contacto);
  }

  listar() {
    return this.http.get<Contacto[]>(this.urlBase);
  }

  actualizar(contacto:Contacto) {
    return this.http.patch<Contacto>(this.urlBase + contacto.id, contacto);
  }

  leer(id:number) {
    return this.http.get<Contacto>(this.urlBase + id);
  }
}

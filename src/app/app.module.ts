import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http'; 
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EditarUsuarioPage } from '../pages/editar-usuario/editar-usuario';
import { ContactoProvider } from '../providers/contacto/contacto';
import { ListarContactosPage } from '../pages/listar-contactos/listar-contactos';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EditarUsuarioPage,
    ListarContactosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EditarUsuarioPage,
    ListarContactosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContactoProvider
  ]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { FormacionPortfolioComponent } from './componentes/formacion-portfolio/formacion-portfolio.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './componentes/index/index.component';
import { Page404Component } from './componentes/page404/page404.component';
import { LoginComponent } from './componentes/login/login.component';
import { LogoutComponent } from './componentes/logout/logout.component';
import { ModalComponent } from './modales/modal/modal.component';
import { ModalLoginComponent } from './modales/modal-login/modal-login.component';
import { ModalCertificadosComponent } from './componentes/modal-certificados/modal-certificados.component';


@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    EncabezadoComponent,
    SobreMiComponent,
    FormacionPortfolioComponent,
    FooterComponent,
    ContactoComponent,
    HabilidadesComponent,
    IndexComponent,
    Page404Component,
    LoginComponent,
    LogoutComponent,
    ModalComponent,
    ModalLoginComponent,
    ModalCertificadosComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

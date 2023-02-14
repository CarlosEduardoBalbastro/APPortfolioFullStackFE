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
import { ModalEncabezadoComponent } from './componentes/modal-encabezado/modal-encabezado.component';
import { ModalCvComponent } from './componentes/modal-cv/modal-cv.component';
import { ModalImgperfilComponent } from './componentes/modal-imgperfil/modal-imgperfil.component';
import { ModalSobremiComponent } from './componentes/modal-sobremi/modal-sobremi.component';
import { ModalFormacionComponent } from './componentes/modal-formacion/modal-formacion.component';
import { ModalHabilidadesComponent } from './componentes/modal-habilidades/modal-habilidades.component';
import { ModalPortfolioComponent } from './componentes/modal-portfolio/modal-portfolio.component';
import { ModalIdiomaComponent } from './componentes/modal-idioma/modal-idioma.component';


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
    ModalEncabezadoComponent,
    ModalCvComponent,
    ModalImgperfilComponent,
    ModalSobremiComponent,
    ModalFormacionComponent,
    ModalHabilidadesComponent,
    ModalPortfolioComponent,
    ModalIdiomaComponent,
    
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

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { IndexComponent } from './componentes/index/index.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { Page404Component } from './componentes/page404/page404.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { FormacionPortfolioComponent } from './componentes/formacion-portfolio/formacion-portfolio.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { LoginComponent } from './componentes/login/login.component';




const routes: Routes = [

  { path: "", component:LoginComponent},
  {path: "index", component:IndexComponent},
 //{path: "", redirectTo:"login", pathMatch:"full"},
  // { path: "",  component: IndexComponent },
  // { path: "navegacion", component:NavegacionComponent},
  // { path: "encabezado", component: EncabezadoComponent},
  // { path: "sobremi", component: SobreMiComponent},
  // { path: "formacion", component:FormacionPortfolioComponent},
  // { path: "habilidades", component:  HabilidadesComponent},
  // { path: "contacto", component: ContactoComponent},
  // { path:"footer", component: FooterComponent},
  // { path: "login", component: LoginComponent },




  { path: "**", component:Page404Component}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

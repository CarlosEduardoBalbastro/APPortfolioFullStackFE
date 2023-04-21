import { TokenType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {


isLogged=false;


  experiencias: Experiencia[]=[];
  constructor(private sExperiencia:ExperienciaService, private tokenService:TokenService) { }

  ngOnInit(): void {

    this.traerExperiencia();

    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }

}


  onlogOut(){
    
    console.log('soy el btn logout');
    this.tokenService.logOut();
    window.location.reload();
 
  }

  traerExperiencia():void{
    this.sExperiencia.traer().subscribe(data => {
      this.experiencias=data
    });
  }

  
}

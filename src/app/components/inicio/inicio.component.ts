import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  peso: number = 180;
  edad: number = 29;
  altura: number= 186;
  sexo: string = '';

  cambiarAltura(event: any):void{
    // console.log(event.target.value);
    this.altura = event.target.value;
  }

  masculino(){
    this.sexo = 'Masculino';
  }

  femenino(){
    this.sexo = 'Femenino';
  }

  calcularImc(){
    //calcular indice de masa corporal
    const IMC = (this.peso*0.453592) / Math.pow(this.altura/100 , 2);
    // console.log(IMC.toFixed(1));

    this.router.navigate(['/resultado',IMC.toFixed(1) ]);
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


}

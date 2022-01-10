import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  bmi:number;
  resultado: string ;
  interpretacion: string ;
  peligro: number=0;
  constructor(private route: ActivatedRoute) {
    // + para transformar el vaslor de string a number
    // ! para indicar que el valor que puede ser nulo, omitir(Object is possibly 'null').
    this.resultado=  '';
    this.interpretacion= '';
    this.bmi = +route.snapshot.paramMap.get('valor')!;
    console.log(this.bmi);
   }

  ngOnInit(): void {
      this.getResultado();
  }


  getResultado(){

    if (this.bmi >= 18.5 && this.bmi <= 25 ) {
      this.resultado = 'Normal';
      this.interpretacion = 'Esta todo ok...sigue asi!'
    }else if(this.bmi > 25 && this.bmi <= 30 ) {
      this.resultado = 'Promedio';
      this.interpretacion = 'Estas un poco de sobrepeso..regula tu comida!'
    }else if(this.bmi > 30 && this.bmi <= 40 ) {
      this.resultado = 'Obesidad';
      this.interpretacion = 'Estas con obesidad..regula tu comida!'
      this.peligro=1;
    }else if(this.bmi > 40) {
      this.resultado = 'Obesidad Morbida';
      this.interpretacion = 'Tienes que hacer algo por tu salud....deja la comida chatarra!';
      this.peligro=1;
    }else{
      this.resultado = 'Desnutrido';
      this.interpretacion = 'Come un poquito más...';
      this.peligro=1;
    }
  }

}

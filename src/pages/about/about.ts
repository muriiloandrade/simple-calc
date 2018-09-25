import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  valor1: any;
  valor2: any;
  resultado: any;
  constructor(public navCtrl: NavController) {

  }

  soma(){
    this.resultado = parseInt(this.valor1)+parseInt(this.valor2);
  }

  subtrai(){
    this.resultado = parseInt(this.valor1)-parseInt(this.valor2);
  }

  multiplica(){
    this.resultado = parseInt(this.valor1)*parseInt(this.valor2);
  }
  
  divide(){
    this.resultado = parseInt(this.valor1)/parseInt(this.valor2);
  }
}

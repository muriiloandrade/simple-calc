import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  /* nome: any;
  nomeRecebido: any;
  teste: boolean; */
  constructor(public navCtrl: NavController) {
    //this.teste = false;
  }

  /* getNome(){
    this.teste=true;
  } */
}

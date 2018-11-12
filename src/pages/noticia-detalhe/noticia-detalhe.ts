import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Noticia } from '../../model/noticia';

/**
 * Generated class for the NoticiaDetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-noticia-detalhe',
  templateUrl: 'noticia-detalhe.html',
})
export class NoticiaDetalhePage {

  noticias : Noticia;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.noticias = this.navParams.get('noticia');
  }

  

}

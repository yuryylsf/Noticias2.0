import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClienteService } from '../../service/cliente.service';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the CadastroClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-cliente',
  templateUrl: 'cadastro-cliente.html',
})
export class CadastroClientePage {
  formGroup : FormGroup;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder : FormBuilder,
                              public clienteService:ClienteService,
                              public alertCtrl: AlertController) {
    this.formGroup = this.formBuilder.group({
      
      nome : ['', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
      email : ['', [Validators.required, Validators.email]],
      senha : ['', [Validators.required]],
    })
    
  }
  

  cadastrar(){
    console.log(this.formGroup.value);

    this.clienteService.cadastrar(this.formGroup.value)
    .subscribe(response => {
      this.showAlert();
    },
      error =>{
        console.log(error);
      }
    );
  }

  
  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Cadastrado com sucesso!',
      buttons: ['OK']
    });
    alert.present();
  }

}
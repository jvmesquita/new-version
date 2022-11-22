import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criarconta2',
  templateUrl: './criarconta2.page.html',
  styleUrls: ['./criarconta2.page.scss'],
})
export class Criarconta2Page implements OnInit {

  @ViewChild('brl') chbrl: any;
  constructor(
    private alertController: AlertController,
    public router: Router
  ) { }

  ngOnInit() {
  }
  avancar(){

    if (!this.chbrl.checked){
      this.presentAlert();
    }else{
      this.router.navigate (['home']);
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Aviso!',
      message: 'Selecione uma moeda.',
      buttons: ['OK'],
    });

    await alert.present();
  }
}

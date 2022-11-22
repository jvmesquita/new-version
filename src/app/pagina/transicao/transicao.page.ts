import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-transicao',
  templateUrl: './transicao.page.html',
  styleUrls: ['./transicao.page.scss'],
})
export class TransicaoPage implements OnInit {

  constructor(
    private loadingCtrl: LoadingController,
    public router: Router
  ) { }

  ngOnInit() {
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Dismissing after 3 seconds...',
      duration: 3000,
    });

    loading.present();

    // Quando encerrar o loading
    loading.onDidDismiss().then(()=>{ this.router.navigate(['/home']); });;
  }
}

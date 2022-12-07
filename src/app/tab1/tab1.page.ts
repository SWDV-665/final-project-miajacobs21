import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SimpleModalPage } from '../simple-modal/simple-modal.page';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private modalCtrl: ModalController, private alertController: AlertController) {}

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: SimpleModalPage,
      breakpoints: [0, 0.4, 1],
      initialBreakpoint: 0.4,
      cssClass: 'custom-modal'
    });
    await modal.present();
  }


async presentAlert() {
  const alert = await this.alertController.create({
    header: 'Record Your Results',
    buttons: ['SUBMIT'],
    inputs: [
      {
        type: 'number',
        placeholder: 'Score',
      },
      {
        type: 'textarea',
        placeholder: 'Modifications',
      },
      {
        type: 'textarea',
        placeholder: 'Additional Comments',
      },
    ],
  });

  await alert.present();
  }
}

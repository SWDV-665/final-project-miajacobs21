import { Component, IterableDiffers } from '@angular/core';
import { NavController, ToastController, AlertController, IonItem, IonDatetime } from '@ionic/angular';
 

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {

  title = "Goals";

  items = [
    {
      entry:"Enter Journal Entry", workout: "Enter Exercise"
  }
  ]


  constructor(public navCtrl: NavController, public toastCtrl: ToastController, private alertController: AlertController) {}


// different from video - found answer here - https://forum.ionicframework.com/t/toast-present-is-not-a-function/155889
  async removeItem(item, index) {
    console.log("Removing Item - ", item, index);
    const toast = await this.toastCtrl.create({
      message:`Removing Item: ` + item.entry + "...",
      duration: 3000
    });
    toast.present();
    

    this.items.splice(index, 1);
  }

  async editItem(item, index) {
    console.log("Edit Item - ", item, index);
    const toast = await this.toastCtrl.create({
      message:`Editing Item: ` + item.entry + "...",
      duration: 3000
    });
    toast.present();
    this.showEditItemPrompt(item, index);
  }

  async showEditItemPrompt(item, index) {
    console.log("Edit Item... ");
    const alert = await this.alertController.create({
      header: 'Please Edit Item',
      inputs: [
        {
          name: 'entry',
          placeholder: 'Document Here',
          value: item.entry
        },
        {
          name: 'workout',
          placeholder: 'Enter Exercise',
          value: item.workout
        },
      ],
      buttons: [
        {
          text:'Cancel',
          handler: data => {
            console.log('Cancel clicked')
          }
        }, 
        {
          text:'Save',
          handler: item => {
            console.log('Saved clicked', item);
            this.items[index] = item;
          }
        }
      ]
    });
  
    await alert.present();
  }


  addItem() {
    console.log("Adding Item");
    this.presentAlert();
  }

  
// code from https://ionicframework.com/docs/api/alert
  async presentAlert() {
    console.log("Adding Item... ");
    const alert = await this.alertController.create({
      header: 'Add Journal Entry',
      inputs: [
        {
          name: 'workout',
          placeholder: 'Enter Exercise',   
        },
        {
          name: 'entry',
          placeholder: 'Enter Journal Entry',

        }
      ],
      buttons: [
        {
          text:'Cancel',
          handler: data => {
            console.log('Cancel clicked')
          }
        }, 
        {
          text:'Save',
          handler: item => {
            console.log('Saved clicked', item);
            this.items.push(item);
          }
        }
      ]
    });

    await alert.present();
  }
}



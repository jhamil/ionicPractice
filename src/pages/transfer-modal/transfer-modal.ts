import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController, ActionSheetController } from 'ionic-angular';
import { TransferProvider } from '../../providers/transfer/transfer';

/**
 * Generated class for the TransferModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transfer-modal',
  templateUrl: 'transfer-modal.html',
})
export class TransferModalPage {

  currency :{}[] = [];
  constructor(public navParams: NavParams,
    private view: ViewController,
    public actionSheetCtrl: ActionSheetController,
    public transferService: TransferProvider) {
  }

  ionViewDidLoad() {
    //loadContact();
    this.currency = this.transferService.getCurrency();
  }
  ionViewWillLoad() {
    //recuperamos los datos enviamos
    //this.navParams.get('data');
  }

  closeModal() {
    this.view.dismiss(); 
  }

  transferir() {
    console.log('transferir money');
  }


  accountActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Cuentas',
      buttons: [
        {
          text: '123456789',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: '65432100',
          handler: () => {
            console.log('Archive clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
 
    actionSheet.present();

  }
  currencyActionSheet() {
    console.log(this.currency[0]);
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Tipo de moneda',
      buttons: [
        {
          text: 'BS',
          handler: () => {
            console.log('Bolivianos');
          }
        },
        {
          text: 'USD',
          handler: () => {
            console.log('Dolares');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel');
          }
        }
      ]
    });
 
    actionSheet.present();
  }
}

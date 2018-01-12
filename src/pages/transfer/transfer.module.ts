import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransferPage } from './transfer';
//import { TransferModalComponent } from '../../components/transfer-modal/transfer-modal';


@NgModule({
  declarations: [
    TransferPage,
  //  TransferModalComponent
  ],
  imports: [
    IonicPageModule.forChild(TransferPage),
  ],
})
export class TransferPageModule {}

import { Component } from '@angular/core';

/**
 * Generated class for the TransferModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'transfer-modal',
  templateUrl: 'transfer-modal.html'
})
export class TransferModalComponent {

  text: string;

  constructor() {
    console.log('Hello TransferModalComponent Component');
    this.text = 'Hello World';
  }

}

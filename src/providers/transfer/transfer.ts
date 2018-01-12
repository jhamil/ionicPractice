import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TransferProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TransferProvider {

  currency :{}[] = [];
  constructor(public http: HttpClient) {
    console.log('Hello TransferProvider Provider');
  }

  getCurrency() {
    var a = {'id':1, 'type':'BS'}; 
    var b = {'id':2, 'type':'USD'};
    this.currency.push(a);
    this.currency.push(b);
    return this.currency;
  }
}

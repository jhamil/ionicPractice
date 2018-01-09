import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Contacts } from '@ionic-native/contacts';

/**
 * Generated class for the SyncContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sync-contact',
  templateUrl: 'sync-contact.html',
})
export class SyncContactPage {

  listaContactos:any[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private contacts:Contacts) {
    this.cargarListaContactos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SyncContactPage');
  }

  cargarListaContactos(){
    this.contacts.find(["*"])
    .then(res => {
      console.log({funcion:'CargarListaContactos',res:res})
      let datosMostar:any[]=[];
      res.map((item) =>{
        if(item.displayName != null && item.photos != null && item.phoneNumbers != null){
          datosMostar.push({displayName:item.displayName,phoneNumbers:item.phoneNumbers})
        }        
      })
      console.log({funcion:'CargarListaContactos',datosMostar:datosMostar})
      this.listaContactos = datosMostar;
    },error => {
      console.log({error:error})
    })
  }

}

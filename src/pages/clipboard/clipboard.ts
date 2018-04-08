import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFirestore,AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
/**
 * Generated class for the ClipboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
interface Message{
  message:string;
  date:Date;
}

@Component({
  selector: 'page-clipboard',
  templateUrl: 'clipboard.html',
})
export class ClipboardPage {
  message: string;

  messagesCollection:AngularFirestoreCollection<Message>;
  messages:Observable<Message[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,private db: AngularFirestore) {
    
  }

  ionViewDidLoad() {
    this.messagesCollection = this.db.collection("messages",ref =>{
      return ref.orderBy("date");
    });
    this.messages = this.messagesCollection.valueChanges();
    this.WatchFixedInputPosition()
  }

  itemSelected(item) {

  }

  WatchFixedInputPosition() {
    window.onload = (event) => {
      let tabs = document.getElementsByClassName("tabbar");
      let input = document.getElementById("input-text");
      input.style.bottom = tabs.item(0).clientHeight + "px";
    }
  }

  sendMessage() {
    this.messagesCollection.add({message:this.message,date:new Date()});
    this.message = "";
  }

  toggleContent(i:number){
    document.getElementById(i+"").classList.toggle("hidden"); 
  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ClipboardPage } from '../clipboard/clipboard';
import { SettingPage } from '../setting/setting';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    this.tab1 = ClipboardPage;
    this.tab2 = SettingPage;
  }

  tab1: any;
  tab2: any;

}

import { Component } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { CreateContactPage } from '../create-contact/create-contact.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  hidden:boolean = true;
  constructor(private modalCtrl: ModalController) {
    
  }

  async OpenModal(){
    const modal = await this.modalCtrl.create({
      component: CreateContactPage,
      id: 'cc'
    });
    return await modal.present();
  }

  UnHide(){
    this.hidden = !this.hidden;
    console.log(this.hidden)
  }

}

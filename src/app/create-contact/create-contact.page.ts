import { Component, OnInit } from '@angular/core';
import { ViewController } from '@ionic/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.page.html',
  styleUrls: ['./create-contact.page.scss'],
})
export class CreateContactPage implements OnInit {

  constructor(private modal: ModalController) { }

  ngOnInit() {
  }

  Dismiss(){
    this.modal.dismiss('cc')
  }

}

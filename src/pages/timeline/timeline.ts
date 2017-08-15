import { PostAddPage } from './../post-add/post-add';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html'
})
export class TimelinePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addPost(){
    // alert('add');
    let addModal = this.modalCtrl.create(PostAddPage);
    addModal.onDidDismiss(item => {
      if (item){
        // add the added items to the list
      }
    })
    addModal.present();
  }
}

import { MapsPage } from './../maps/maps';
import { Component } from '@angular/core';
import { NavController, ViewController, ModalController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

/**
 * Generated class for the PostAddPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-post-add',
  templateUrl: 'post-add.html',
})
export class PostAddPage {
  isReadyToSave: boolean;
  item: any;
  form: FormGroup;
  koordinat: string;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, formBuilder: FormBuilder, public modalCtrl: ModalController, public navParams: NavParams) {
    this.form = formBuilder.group({
      judulFoto: ['', Validators.required],
      tanggalFoto: ['', Validators.required],
      koordinat: [''],
      namaLokasi: ['', Validators.required],
      kesimpulan: ['', Validators.required]
    })

    // Watch for the form changes
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
  }

  ionViewDidEnter(){
   if (this.navParams.get('lat') != null && this.navParams.get('lng') != null) {
    console.log(this.navParams.get('lat') + ", " + this.navParams.get('lng'));
    this.koordinat = this.navParams.get('lat') + ", " + this.navParams.get('lng');
    this.form.get('koordinat').disable();
   }
  }

  // user dismiss
  cancel(){
    this.viewCtrl.dismiss();
  }

  /**
   * The user is done and wants to create the item, so return it
   * back to the presenter.
   */
  submit(){
    if (!this.form.valid){ return; }
    this.viewCtrl.dismiss(this.form.value);
    console.log(this.form.value);
  }
}
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DoodleService {

  linkId!: string;
  // private doodle = this.fs.doc(`doodles/${this.linkId}`);
  private doodle = this.fs.doc("doodles/pGFdW3ogObPinYcJG2pD");

  constructor(
    private fs:AngularFirestore
  ) { }

  updateDB(dataURI:string) {
    console.log("updateDB");
    // this.doodle.collection('ImageInfo').add({ src: dataURI });
  }

  // loadDoodle() {
  //  return this.doodle.collection('ImageInfo').valueChanges();
  // }

}

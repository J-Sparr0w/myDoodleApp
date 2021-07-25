import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DoodleService {

  linkId!: string;
  // private doodle = this.fs.doc(`doodles/${this.linkId}`);
  private doodle = this.fs.doc("doodles/6474-798a");

  constructor(
    private fs:AngularFirestore
  ) { }

  updateDB(dataURI:string) {
    console.log("updateDB");
    // this.doodle.update({ "src": dataURI });
  }


}

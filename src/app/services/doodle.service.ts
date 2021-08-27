import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DoodleService {

  linkId = JSON.parse(sessionStorage.getItem('roomLink')!);
  // private doodle = this.fs.doc(`doodles/${this.linkId}`);
  // private doodle = this.fs.doc("doodles/pGFdW3ogObPinYcJG2pD");
  private _doodles=this._db.list(`doodleRoom/${this.linkId}/doodles`)

  constructor(
    private fs: AngularFirestore,
    private _db: AngularFireDatabase
  ) { }

  updateDB(dataURI: string) {
    if (!this.linkId) {
      console.log("getting linkId again from session storage");
      this.linkId = JSON.parse(sessionStorage.getItem('roomLink')!);
    }
    console.log("updateDB");
    // this._doodles.push({ src: dataURI });
  }

  loadDoodle() {
  //  return this._doodles.collection('ImageInfo').valueChanges();
   return this._doodles.valueChanges();
  }

}

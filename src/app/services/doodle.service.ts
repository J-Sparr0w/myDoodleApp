import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DoodleService {

  linkId = JSON.parse(sessionStorage.getItem('roomLink')!);

  private _doodles=this._db.list<DoodleInt>(`doodleRoom/${this.linkId}/doodles`)

  constructor(
    private _db: AngularFireDatabase
  ) { }

  updateDB(dataURI: string) {
    if (!this.linkId) {
      console.log("getting linkId again from session storage");
      this.linkId = JSON.parse(sessionStorage.getItem('roomLink')!);
    }
    console.log(`updateDB with link: ${this.linkId}`);
    // this._doodles.push({ src: dataURI });
  }

  loadDoodle() {
   return this._doodles.valueChanges();
  }

}

 interface DoodleInt{
src:string
}

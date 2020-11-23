import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  devices;
  constructor(private database: AngularFirestore,
    private storage: AngularFireStorage) { 
    }
  downloadImage(){
    this.database.collection<any>("Devices/images").valueChanges({idField:'id'}).subscribe(Devices=>{
     this.devices = Devices;
      console.log(this.devices);
      return  this.devices;
    })
  }
}

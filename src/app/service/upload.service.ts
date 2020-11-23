import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  item;
  price;
  image: Observable<any>;

  uploadPercent: Observable<number>;
  downloadURL: Observable<any>;
  
  constructor(
    private storage: AngularFireStorage,
    private firestore: AngularFirestore,
    private router: Router
    ) {}
  uploadFile(event) {
 
   const file = event.target.files[0];
    const filename = file.name;
    const fileExt = filename.split('.').pop();
    const filePath = Math.random().toString(36).substring(2) + '.' + fileExt;
    const fileRef = this.storage.ref(`images/${filePath}`);
    const task = this.storage.upload(`images/${filePath}`, file);

    this.uploadPercent = task.percentageChanges();

    task.snapshotChanges().pipe(
      finalize(() => this.downloadURL =  fileRef.getDownloadURL())
    ).subscribe()
  
    task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(downloadURL => {
          this.image = downloadURL;
          });
      })
     )
  .subscribe()

  }
  uploadItem(_item,_name,_price,_description) {

    window.alert("upload item " + name);
    let id = this.firestore.createId();
    this.firestore.collection('Devices').doc(id).set({
      item: "iOS",
      name: "Iphone XI",
      price: "18799",
      description: "Newly Added",
      image: this.image
    }).catch(error => {
      console.log("not added error ->" + error);
    }).then(() => {
      console.log(name + " added successfully");
      this.router.navigate(["/home"]);
    })
  }
  uploadImage(event){
    const file = event.target.files[0];
    const filePath = 'images' + this.makeid(3);
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);
   
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(
      finalize(() => this.downloadURL =  fileRef.getDownloadURL())
    ).subscribe()
    return this.uploadPercent;
  }
  makeid(length){
    var result ='';
    var characters ='ABCDEFGHIJKLMNOPQRTSUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for(var i =0; i < length; i++){
      result += characters.charAt(Math.random()* charactersLength);
    }
    return result;
  }
}

/*
import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  constructor(private storage: AngularFireStorage) { }

  uploadImage(event){
    const file = event.target.files[1];
    const filePath = file;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);
    
    const task1 = fileRef.put(file);
    //Observe percentage changes
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(
      finalize(() => this.downloadURL =  fileRef.getDownloadURL())
    ).subscribe()
    return this.uploadPercent;
  }
  makeid(length){
    var result ='';
    var characters ='ABCDEFGHIJKLMNOPQRTSUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for(var i =0; i < length; i++){
      result += characters.charAt(Math.random()* charactersLength);
    }
    return result;
  }



  /*uploadImage(event){
    const file = event.target.files[0];
    const filePath = 'images';
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);

    //Observe percentage changes
    this.uploadPercent = task.percentageChanges();
    return this.uploadPercent;
  }
  makeid(length){
    var result ='';
    var characters ='ABCDEFGHIJKLMNOPQRTSUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for(var i =0; i < length; i++){
      result += characters.charAt(Math.random()* charactersLength);
    }
    return result;
  }
}

*/
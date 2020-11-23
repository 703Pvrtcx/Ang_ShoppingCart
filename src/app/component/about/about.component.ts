
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { products } from '../../products';
import { Observable, of } from 'rxjs';
import { Router, ActivatedRoute } from "@angular/router"
import { catchError,map, finalize } from 'rxjs/operators';
import { UploadService } from "../../service/upload.service";
import { HttpErrorResponse, HttpEventType } from '@angular/common/http';
//import { MatProgressBar } from "@angular/material/progress-bar";
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  uploadPercentage;
  filename: string;

  item: Observable<string>;
  price: Observable<number>;
  image: Observable<string>;
  description: Observable<string>

  _item;
  _name;
  _price;
  _description;


  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;

  constructor(private router:Router,
    private uploadDao: UploadService,
     private afStorage: AngularFireStorage,
     private firestore: AngularFirestore) {
   }


   
   onClick(){
    this.image = this.uploadDao.image ;
    this.item  = this.uploadDao.item ;
    this.price = this.uploadDao.price;
    this.price = this.uploadDao.price;
    this.uploadDao.uploadItem(this._item,this._name,this._price,this._description);
    }

  uploadFile(event){
    
     this.uploadDao.uploadFile(event);
     this.uploadPercentage = this.uploadDao.uploadPercent;
    
     //this.uploadDao.uploadItem();
  }

  ngOnInit(): void{
    //this.downloadURL = this.afStorage.ref('/images/').getDownloadURL();
  }

}

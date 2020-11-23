import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {Router } from '@angular/router';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.scss']
})
export class ClothingComponent implements OnInit {
  constructor(private firestore: AngularFirestore, private router:Router) { }
  categories = [{categoryName: "Category-Fantasy"},
                {categoryName: "Category-Horror"},
                {categoryName: "Category-Adventure"},
              ];
  ngOnInit(): void {
    this.addBook();
  }
  addBook(){
    let newId = this.firestore.createId();
    let category = this.categories[2].categoryName;
    this.firestore.collection(category).doc(newId).set({
      bookName: "Coding Tutorials",
      publishingDate: "13/Sep/2020",
      bookAuthor: "NJ"
    })
    .then(data => {
      console.log("Document successfully written!");
    })
    .catch(error => {
      console.error("Error writting document: ", error);
    });
  }
  getBook(){
    this.firestore.collection<any>("categoty-Adventure").valueChanges({idField: 'id'}).subscribe(books => {
        books = books;
      console.log(books);
    })  
  }
  removeBook(selecteBookId){
    this.firestore.collection('Category-Adventure').
    doc(selecteBookId).delete().then(() => {
      console.log("Book removed succcessfully1");
    })
  }
}

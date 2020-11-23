import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class ClothingService {
  constructor(private afs: AngularFirestore) { }
  
  addClothing(clothing){
    this.afs.collection('Items').add(clothing).then(() =>{
      alert("Successfully Added Clothing!");
    }).catch(err => {
      alert(err.message + '  ' + ' Unable to add clothing');
    })
  }
  deleteClothing(key){
    this.afs.collection('Items').doc(key).delete().then(() => {
      alert(key.value.name + ' Successfully Deleted Clothing!');
    }).catch(err => {
      alert(err.message + ' '+ ' Unable to delete clothing')
    });
}
getClothing(){
  return this.afs.collection('Items').snapshotChanges();
}
updateClothing(clothing){
  this.afs.collection('Items').doc(clothing.id).update(clothing);
}


}

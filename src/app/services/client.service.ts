import { Injectable } from '@angular/core';
import {
  AngularFirestore, AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Client } from '../models/client';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clientsCollection: AngularFirestoreCollection<Client>;
  clientDoc: AngularFirestoreDocument<Client>;

  clients: Observable<Client[]>;
  client: Observable<Client>;
  x: any;

  constructor(private afs: AngularFirestore) {
    this.clientsCollection = this.afs.collection('clients',
      ref => ref.orderBy('lastName', 'asc'));
  }

  getClients(): Observable<Client[]>{
    //get clients with the id

    // this.clients = this.clientsCollection.snapshotChanges().map(changes =>{
    //   return changes.map(action =>{
    //     const data = action.payload.doc.data() as Client;
    //     data.id = action.payload.doc.id;
    //     return data;
    //   });
    // }); 
    // x.pipe(map(
    //   res=>{console.log(res)}
    // )).subscribe()

    this.clients = this.clientsCollection.snapshotChanges().pipe(map(changes => {
        // console.warn({ 'a': changes })
        return changes.map(action => {
          const data = action.payload.doc.data() as Client
          data.id = action.payload.doc.id
          return data
        })
      }
    ))
    return this.clients; 
  }
}

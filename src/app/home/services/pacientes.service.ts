import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { AuthService } from './../../services/auth.service';
import { Firestore } from 'src/app/classes/firestore.class';
import { Home } from './../models/home.model';


@Injectable({
  providedIn: 'root'
})
export class PacientesService extends Firestore<Home>{

  constructor(private authService: AuthService, db: AngularFirestore) {
    super(db);
    this.init();
   }

private init(): void {
    this.authService.authState$.subscribe(user =>{
      if ( user ){
        this.setCollection(`/users/${user.uid}/pacientes`);
        return;
      }
      this.setCollection(null);
    });
  } 
}

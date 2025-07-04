
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';      //ESTO PERMITE TRABAJAR CON DATOS ASINCRÓNICOS, COMO LAS RESPUESTAS HTTP QUE LLEGAN EN EL FUTURO

// DEFINIMOS LA ESTRUSTURA QUE PUEDE TENER UN CONTACTO

export interface Contact{
  id?: number; // IDENTIFICADOR ÚNICO DEL CONTACTO
  name: string; // NOMBRE DEL CONTACTO
  email: string; // CORREO ELECTRÓNICO
  phone: string; // TELEFONO DELL CONTACTO 
}



@Injectable({     // DECORADOR QUE INDICA QUE ESE SERVICIO SE PROVEE A TODA LA APLICACIÓN
  providedIn: 'root'
})
export class ContactService {

  //URL BASE DEL API DONDE SE GESTIONAN LOS CONTACTOS
  private API = 'http://localhost:3001/contacts';

  constructor(private http: HttpClient) { }          // PERMITE HACER PETICIONES http A UN SERVIDOR BACKEND

  getAll(): Observable<Contact[]>{
    return this.http.get<Contact[]>(this.API);
  }

  add(c: Contact): Observable<Contact> {
  // POST http://localhost:3001/contacts con el cuerpo c
  return this.http.post<Contact>(this.API, c);
  }
 

  update(contact: Contact): Observable<Contact>{  //PERMITE MODIFICAR CONTACTOS
    return this.http.put<Contact>(
      `${this.API}/${contact.id}`,
      contact
    );
  }

  delete(id: number): Observable<void>{         //PERMITE BORRAR CONTACTOS
    return this.http.delete<void>(`${this.API}/${id}`);
  }
}

import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ContactListComponent } from './components/contact-list/contact-list.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ButtonModule,
    ContactListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'frontend';

  @ViewChild(ContactListComponent) listCmp! : ContactListComponent;

  // onCreate(){             //METODO QUE SE PUEDE LLAMAR AL CREAR UN CONTACTO. RECARGA LA LISTA DE CONTACTOS PARA MOSTRAR EL NUEVO
  //   this.listCmp.load();
  // }

  // onUpdated(){            //METODO QUE SE PUEDE LLAMAR CUANDO SE MODIFICA UN CONTACTO. RECARGA LA LISTA Y MUESTRA LOS CAMBIOS
  //   this.listCmp.load();
  // }


}

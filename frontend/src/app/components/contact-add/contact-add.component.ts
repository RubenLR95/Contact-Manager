import { Component } from "@angular/core";
import { ContactService } from "../../services/contact.service";
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({     // Esto es el Metadata
  selector: 'app-contact-add',  //Etiqueta con la que invocamos este componente en el app.html
  imports: [                    //Modulos que va a utilizar este componente
        CommonModule,
        FormsModule
  ],           
  templateUrl: './contact-add.component.html',      //Ruta al archivo html
  styleUrl: './contact-add.component.css'           //Rut al archivo css de estilos
})



export class ContactAddComponent {
    name = '';  //Nombre del nuevo contacto
    email = ''; //Email del nuevo contacto
    phone = ''; //Teléfono del nuevo contacto


    //Inyección de dependencias
    //svc -> Instancia de Contactservice para llama a la API o lógica de datos
    // router -> Instancias de Router para redirigir tras guardar
    constructor (
        private svc: ContactService,
        private router: Router
    ){}

    save(){ // Metodo que se ejecuta al enviar el formulario
        if (!this.name.trim() || !this.email.trim()){
            alert('Nombre y email obligatorios');
            return;
        }

        //Llamada al servicio para que se guarde el contacto

        this.svc
            .add({
                name: this.name,
                email: this.email,
                phone: this.phone
            })


            .subscribe(() =>  //Cuando el observable indica que ya ha recibido los contactos, el subscrive ejecutará el redireccionamiento
                this.router.navigate(['/contacts'])
            );
            

    }


}
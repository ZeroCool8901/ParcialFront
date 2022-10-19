import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/Services/api.service';
import { ModalService } from 'src/app/Services/modal.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-estudiante',
  templateUrl: './formulario-estudiante.component.html',
  styleUrls: ['./formulario-estudiante.component.css']
})
export class FormularioEstudianteComponent {
  addressForm = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    Email: [null, Validators.required],
    address: [null, Validators.required],
    phone: [null, Validators.required]
  });

  hasUnitNumber = false;



  constructor(private fb: FormBuilder, public service: ApiService, public modalservice: ModalService) { }

  onSubmit(): void {
    const Estudiante = {
      nombre: this.addressForm.get('Name')?.value,
      apellido: this.addressForm.get('lastName')?.value,
      correo: this.addressForm.get('Email')?.value,
      direccion: this.addressForm.get('address')?.value,
      telefono: this.addressForm.get('phone')?.value,

    }

    if (this.addressForm.valid) {
      this.service.Post('Estudiantes', Estudiante);
      Swal.fire({
        title: "Registro realizado",
        position: 'center',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      Swal.fire({
        title: "FALLIDO",
        position: 'center',
        icon: 'error',
        showConfirmButton: false,
        timer: 1500
      });

    }
  }
}

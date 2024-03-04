import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


export interface PeriodicElement {
  Elemento: string;
  Cantidad: number;
  Descripcion: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Elemento: 'Set 1', Cantidad:1, Descripcion: 'Set 1 para quirófano'},
  {Elemento: 'Set 2', Cantidad:1, Descripcion: 'Set 2 para quirófano'},
  {Elemento: 'Set 3', Cantidad:1, Descripcion: 'Set 3 para quirófano'},
  {Elemento: 'Set 4', Cantidad:1, Descripcion: 'Set 4 para quirófano'},
  {Elemento: 'Set 5', Cantidad:1, Descripcion: 'Set 4 para quirófano'},
  {Elemento: 'Set 6', Cantidad:1, Descripcion: 'Set 4 para quirófano'},
];


@Component({
  selector: 'app-datos-de-programacion',
  templateUrl: './datos-de-programacion.component.html',
  styleUrl: './datos-de-programacion.component.css'
})

export class DatosDeProgramacionComponent {
  labelPosition: 'media' | 'alta' = 'alta';
 

  displayedColumns: string[] = ['Elemento', 'Cantidad', 'Descripcion', 'icon'];
  dataSource = ELEMENT_DATA;




  DatosProgramacion(form: NgForm){
    const userRegistrationRequest/*: fromUser.UserCreateRequest */= {
      
      paciente: form.value.paciente,
      cirugiaprogramada: form.value.cirugiaprogramada,
      registro: form.value.registro,
      solicita: form.value.solicita,
      edad: form.value.edad,
      medicocirujano: form.value.medicocirujano,
      fechanacimiento: form.value.fechanacimiento,
      medicoanestesiologo: form.value.medicoanestesiologo,
      numerohabitacion: form.value.numerohabitacion,
      tipoanestesia: form.value.tipoanestesia,
      sala: form.value.sala,
      ayudante: form.value.ayudante,
      turno: form.value.turno,
      arearegistro: form.value.arearegistro,
      diagnostico: form.value.diagnostico,
      enfermero: form.value.enfermero,
      notasadicionales: form.value.notasadicionales,
    };
}


}

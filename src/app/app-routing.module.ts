import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocenteComponent } from './docente/docente.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { FacultadComponent } from './facultad/facultad.component';
import { NavegacionComponent } from './navegacion/navegacion.component';

const routes: Routes = [
  { path: 'docente', component: DocenteComponent},
  { path: 'estudiante', component: EstudianteComponent},
  { path: 'facultad', component: FacultadComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

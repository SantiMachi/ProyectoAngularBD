import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HomeComponent } from './pages/home/home.component';
import { IndexxComponent } from './pages/indexx/indexx.component';

const rutas: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'indexx', component: IndexxComponent },
      { path: 'listado', component: ListadoComponent },
      { path: 'agregar', component: AgregarComponent },
      { path: 'editar/:id', component: AgregarComponent },
      { path: 'buscar', component: BuscarComponent },
      { path: ':id', component: HeroeComponent },
      { path: '**', redirectTo: 'indexx' }
    ]
  }
];



@NgModule({
  imports: [
    RouterModule.forChild( rutas )
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }

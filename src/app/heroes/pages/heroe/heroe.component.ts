import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 5px;
    }
  `]
})
export class HeroeComponent implements OnInit {
  cant=0;
  heroe!: Heroe;

  constructor( private activatedRoute: ActivatedRoute,
               private heroesService: HeroesService,
               private router: Router,
               private snackBar: MatSnackBar,
               public dialog: MatDialog ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.heroesService.getHeroePorId(id) )
      )
      .subscribe( heroe => this.heroe = heroe );

  }

  guardar( compra: number) {
    
    if( this.heroe.superhero.trim().length === 0  ) {
      return;
    }


    if ( this.heroe.id ) {
      // Actualizar
      this.heroe.first_appearance=this.heroe.first_appearance-compra;
      this.heroesService.actualizarHeroe( this.heroe )
        .subscribe( heroe => this.mostrarSnakbar('Registro actualizado'));

    } else {
      // Crear
      this.heroesService.agregarHeroe( this.heroe )
        .subscribe( heroe => {
          this.router.navigate(['/heroes/editar', heroe.id ]);
          this.mostrarSnakbar('Registro creado');
        })
    }

  }
  mostrarSnakbar( mensaje: string ) {

    this.snackBar.open( mensaje, 'ok!', {
      duration: 2500
    });

  }

  regresar() {
    this.router.navigate(['/heroes/listado']);
  }
  

}

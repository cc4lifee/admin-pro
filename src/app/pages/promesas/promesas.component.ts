import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',

})
export class PromesasComponent implements OnInit {

  ngOnInit(): void {

    // this.getUsuarios();

    this.getUsuarios().then(usuarios => {
      console.log(usuarios);
    })


    // const promesa = new Promise((resolve, reject) => {

    //   if (false) {
    //     resolve('Hola Mundo');

    //   } else {
    //     reject('Algo salio mal')
    //   }

    // });

    // promesa.then((mensaje) => {

    //   console.log(mensaje);

    // })

    // console.log('Fin del init');

  }


  getUsuarios() {

    return new Promise(resolve => {
      fetch('https://reqres.in/api/users')
        .then(resp => resp.json())
        .then(body => resolve(body.data))
    })

   

  }

}

import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent {

  public imgUrl: string = '';

  constructor(private usuarioService: UsuarioService){ 
    this.imgUrl = usuarioService.usuario!.imagenUrl;
  }



  logout(){
    this.usuarioService.logout();
  }

}

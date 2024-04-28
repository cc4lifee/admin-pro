import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-image',
  templateUrl: './modal-image.component.html',
  styles: [

  ]
})
export class ModalImageComponent {

  public ocultarModal : boolean = false;

  cerrarModal (){
    this.ocultarModal = true;
  }
}

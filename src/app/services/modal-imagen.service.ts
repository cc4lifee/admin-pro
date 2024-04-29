import { EventEmitter, Injectable } from '@angular/core';
import { enviroment } from '../environments/environment';

const base_url = enviroment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ModalImagenService {

  private _ocultarModal: boolean = true;
  public tipo!: 'usuarios' | 'medicos' | 'hospitales';
  public uid!: string;
  public img?: string;

  public nuevaImagen: EventEmitter<string> = new EventEmitter<string>();

  get ocultarModal() {
    return this._ocultarModal;
  }

  abrirModal(tipo: 'usuarios' | 'medicos' | 'hospitales', uid: string, img: string = 'no-img') {
    this._ocultarModal = false;
    this.tipo = tipo;
    this.uid = uid;
    // this.img = img;
    if (img.includes('https')) {
      this.img = img;
    } else {
      this.img = `${base_url}/upload/${tipo}/${img}`
    }

  }

  cerrarModal() {
    this._ocultarModal = true;
  }
  constructor() { }
}

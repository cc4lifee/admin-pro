import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { enviroment } from '../environments/environment';
import { tap, map, catchError, of } from 'rxjs';
import { RegisterForm } from '../interfaces/register-form.interface';
import { LoginForm } from '../interfaces/login-form.interface';

declare const google: any;

const base_url = enviroment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient, private router: Router) { }

  logout() {
    localStorage.removeItem('token');

    
    google.accounts.id.revoke('cristhian.camacho@gulfstream.com', () => {
      this.router.navigateByUrl('/login')

    })
  }

  validarToken() {
    const token = localStorage.getItem('token') || '';

    return this.http.get(`${base_url}/login/renew`, {
      headers: {
        'x-token': token
      }
    }).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.token)

      }), map(resp => true),
      catchError(error => of(false))
    )
  }

  crearUsuario(formData: RegisterForm) {
    return this.http.post(`${base_url}/usuarios`, formData).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.token)
      })
    )
  }

  login(formData: LoginForm) {
    return this.http.post(`${base_url}/login`, formData).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.token)
      })
    )
  }

  loginGoogle(token: string) {
    return this.http.post(`${base_url}/login/google`, { token }).pipe(
      tap((resp: any) => {
        // console.log(resp);
        localStorage.setItem('token', resp.token)
      })
    )
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {

  private baseUrl = 'http://168.194.207.98:8081/api_provincia/';

  constructor(private http: HttpClient) { }

  getProvincia(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}get_provincia.php?id=${id}`);
  }

  crearProvincia(provincia: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}post_provincia.php`, provincia);
  }

  actualizarProvincia(value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/put_provincia.php`, value);
  }

  eliminarProvincia(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete_provincia.php?id=${id}`, { responseType: 'text' });
  }

  getProvincias(): Observable<any> {
    return this.http.get(`${this.baseUrl}get_provincias.php`);
  }

  getProvinciaNombre(value: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/get_provincias.php?nombre=${value}`);
  }
}

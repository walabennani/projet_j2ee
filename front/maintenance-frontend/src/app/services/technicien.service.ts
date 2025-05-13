import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Technicien {
  id?: number;
  name: string;
  available: string;
  competences: string;
}
@Injectable({
  providedIn: 'root'
})
export class TechnicienService {

  private apiUrl = 'http://localhost:9090/api/technicien';

  constructor(private http: HttpClient) { }

  getTechniciens(): Observable<Technicien[]> {
    return this.http.get<Technicien[]>(this.apiUrl);
  }

  addTechnicien(t: Technicien): Observable<Technicien> {
    return this.http.post<Technicien>(this.apiUrl, t);
  }

  updateTechnicien(id: number, t: Technicien): Observable<Technicien> {
    return this.http.put<Technicien>(`${this.apiUrl}/${id}`, t);
  }

  deleteTechnicien(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

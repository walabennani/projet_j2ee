import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Equipement {
  id: number;
  nom: string;
}
export interface Panne {
  id?: number;
  description: string;
  category: string;
  equipement: Equipement;
  dateReported: string; 
}

@Injectable({
  providedIn: 'root'
})
export class PanneService {
  private apiUrl = 'http://localhost:9090/api/panne';

  constructor(private http: HttpClient) {}

  getPannes(): Observable<Panne[]> {
    return this.http.get<Panne[]>(this.apiUrl);
  }
getCategories(): Observable<string[]> {
  return this.http.get<string[]>(`${this.apiUrl}/categories`);
}
  getPanneById(id: number): Observable<Panne> {
    return this.http.get<Panne>(`${this.apiUrl}/${id}`);
  }

  addPanne(panne: Panne): Observable<Panne> {
    return this.http.post<Panne>(this.apiUrl, panne);
  }

  updatePanne(id: number, panne: Panne): Observable<Panne> {
    return this.http.put<Panne>(`${this.apiUrl}/${id}`, panne);
  }

  deletePanne(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

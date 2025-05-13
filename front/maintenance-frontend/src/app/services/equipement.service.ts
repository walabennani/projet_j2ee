import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Equipement {
  
  id?: number;
 nom: string;
  status: string;
  acquisitionDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class EquipementService {

  private apiUrl = 'http://localhost:9090/api/equipement';

  constructor(private http: HttpClient) { }

  getEquipements(): Observable<Equipement[]> {
    return this.http.get<Equipement[]>(this.apiUrl);
  }

  addEquipement(e: Equipement): Observable<Equipement> {
    return this.http.post<Equipement>(this.apiUrl, e);
  }
updateEquipement(id: number, equipement: Equipement): Observable<Equipement> {
  return this.http.put<Equipement>(`${this.apiUrl}/${id}`, equipement);
}

  deleteEquipement(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}


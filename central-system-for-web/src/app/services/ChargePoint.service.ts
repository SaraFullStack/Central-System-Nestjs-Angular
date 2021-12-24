import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ChargePoint } from '../models/ChargePoint';

@Injectable({
  providedIn: 'root',
})
export class ChargePointService {
  private apiUrl = `${environment.apiUrl}charge-points`

  constructor(private http: HttpClient) { }

  public getOrganizations(): Observable<any> {
    return this.http.get(`${this.apiUrl}`)
  }

  public postOrganizations(chargePoint: ChargePoint): Observable<any> {
    return this.http.post(`${this.apiUrl}`, chargePoint)
  }

  public putOrganizations(chargePoint: ChargePoint): Observable<any> {
    return this.http.put(`${this.apiUrl}/${chargePoint.id}`, chargePoint)
  }

  public deleteOrganizations(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`)
  }
}

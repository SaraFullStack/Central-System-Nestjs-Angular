import { Organization } from 'src/app/models/Organization';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrganizationService {
  private apiUrl = `${environment.apiUrl}organizations`

  constructor(private http: HttpClient) { }

  public getOrganizations(): Observable<any> {
    return this.http.get(`${this.apiUrl}`)
  }

  public postOrganizations(organization: Organization): Observable<any> {
    return this.http.post(`${this.apiUrl}`, organization)
  }

  public putOrganizations(organization: Organization): Observable<any> {
    return this.http.put(`${this.apiUrl}/${organization.id}`, organization)
  }

  public deleteOrganizations(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`)
  }
}

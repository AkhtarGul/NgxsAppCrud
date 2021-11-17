import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { MoviesCategories } from '../model/movies.model';
@Injectable({
  providedIn: 'root',
})
export class AppService {

 
  
  constructor(
    // private router: Router,
     private http: HttpClient
 ) {}

 Add(payload: MoviesCategories): Observable<any> {
     return this.http.post(`${environment.apiUrl}/api/categories`, payload)
   }

 getAll(): Observable<any> {
     return this.http.get(`${environment.apiUrl}/api/categories`);
   }

 
 getById(id: number): Observable<any> {
     
     return this.http.get<any>(`${environment.apiUrl}/api/categories/${id}`);
 }

 Update(payload: MoviesCategories,id:number):  Observable<any>  {        
     return this.http.put(`${environment.apiUrl}/api/categories/${id}`, payload);
 }

 Delete(id: number): Observable<any>  {        
     return this.http.delete(`${environment.apiUrl}/api/categories/${id}`);
 }

}
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) { }
/**
 * Abonne
 * API
 * Services 
 * Starts
 */
  postAbonne(data: any) {
    return this.http.post<any>('http://localhost:8000/api/abonnes/', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getAbonne() {
    return this.http.get<any>('http://localhost:8000/api/abonnes/').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  updateAbonne(data: any,id:number){
    return this.http.put<any>('http://localhost:8000/api/abonnes/'+id,data).pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteAbonne(id:number){
    return this.http.delete<any>("http://localhost:8000/api/abonnes/"+id).pipe(map((res:any)=>{
      return res;
    }))
  }

}

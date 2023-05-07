import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) { }
/**
 * Region
 * API
 * Services 
 * Starts
 */
  postRegion(data: any) {
    return this.http.post<any>('http://localhost:8000/api/regions/', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getRegion() {
    return this.http.get<any>('http://localhost:8000/api/regions/').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  updateRegion(data: any,id:number){
    return this.http.put<any>('http://localhost:8000/api/regions/'+id,data).pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteRegion(id:number){
    return this.http.delete<any>("http://localhost:8000/api/regions/"+id).pipe(map((res:any)=>{
      return res;
    }))
  }

  /**
 * Participant
 * API
 * Services 
 * Starts
 */

  postParticipant(data: any) {
    return this.http.post<any>('http://localhost:8000/api/participants/', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getParticipant() {
    return this.http.get<any>('http://localhost:8000/api/participants/').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  updateParticipant(data: any,id:number){
    return this.http.put<any>('http://localhost:8000/api/participants/'+id,data).pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteParticipant(id:number){
    return this.http.delete<any>("http://localhost:8000/api/participants/"+id).pipe(map((res:any)=>{
      return res;
    }))
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  private serveur: string = 'http://localhost:3100/api'

  constructor( private http: HttpClient) { }

  public submitQuestion(question:any){
    console.log("Service:", question)
    return this.http.post<any>(`${this.serveur}/questions/submit`, question).pipe(
      tap(resultat=>{
        console.log("Resultat:",resultat)
      })
    )
  }

}

import { Component } from '@angular/core';
import { QuestionsService } from './services/questions.service';

interface statut{
  value: string,
  viewValue: string
}

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent {
  public question1=""
  public question2=""
  public question3=""

  statuts: statut[] = [
    {value: 'Elève', viewValue: 'Elève'},
    {value: 'Etudiant', viewValue: 'Etudiant'},
    {value: 'Employé', viewValue: 'Employé'},
    {value: 'Autres', viewValue: 'Autres'},
  ];


  public submitQuestion(){
    const liste =[ this.question1, this.question2, this.question3]

    this.questionsService.submitQuestion(liste).subscribe({
      next:resultat=>{

        console.log("next: ",resultat)
      },

      error: erreur=> {

        console.log ("error: ",erreur)
      }
      
      
    })

  }

  constructor (private questionsService: QuestionsService){}

  
}

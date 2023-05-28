import { Component } from '@angular/core';

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
    console.log(this.question1, this.question2, this.question3)
  }




}

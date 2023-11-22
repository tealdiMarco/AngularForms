import { Component } from '@angular/core';
import { Appointment } from '../appointment'; //per prendere interfaccia appointment (interfaccia = clsController)

@Component({
  selector: 'template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
  model:Appointment ={
    name:"",
    mail:"",
    dayOfTheWeek:"Lunedì",
    office:"Ufficio_A",
    application0:false,
    application1:false,
    application2:false
  };

  daysOfTheWeek = [
    "Lunedì",
    "Martedì",
    "Mercoledì",
    "Giovedì",
    "Venerdì"
  ];

  availableOffices =[
    {id:"A",name:"Ufficio_A"},
    {id:"B",name:"Ufficio_B"},
    {id:"C",name:"Ufficio_C"}
  ];

  apllications = [
    {id:0},
    {id:1},
    {id:2}
  ];
}

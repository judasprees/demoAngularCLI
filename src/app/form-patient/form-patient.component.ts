import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-patient',
  templateUrl: './form-patient.component.html',
  styleUrls: ['./form-patient.component.css']
})
export class FormPatientComponent implements OnInit {
  @Output() sendData: EventEmitter<any> = new EventEmitter();
  @Input() buttonName: string;
 @Input() patient: any = {};
  constructor() { }

  ngOnInit() {
  console.log(this.patient);
  }

  onSubmitPatient(patientForm: NgForm){
    this.sendData.emit(patientForm.value);
  }

  
}

import { Component, OnInit } from '@angular/core';
import { CreatePatientService } from '../create-patient/create-patient.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  patients: any = [];
  constructor(private createPatientService : CreatePatientService,
              private router : Router){ }
  
  ngOnInit() {
    this.patients = this.createPatientService.getPatients();
  }

  onEdit(patient){
    this.router.navigate(["/edit/"+patient.patientId]);
  }

}

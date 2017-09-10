import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { CreatePatientService } from '../create-patient/create-patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  buttonName: string = "Edit";
  patient: any={};  
  constructor(private activeRouter : ActivatedRoute,
              private createPatientService : CreatePatientService,
              private router : Router ) { }

  ngOnInit() {
    this.patient = this.createPatientService.getPatientById(this.activeRouter.snapshot.paramMap.get("id"));
  }

  onEditPatient(patientForm){
    this.createPatientService.editPatient(patientForm);
    this.router.navigate(["/"]);
    
  }
}

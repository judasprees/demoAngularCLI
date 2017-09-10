import { Component, OnInit } from '@angular/core';
import { CreatePatientService } from '../create-patient/create-patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  buttonName: string = "Add";
  constructor(private createPatientService : CreatePatientService, private router: Router) { }

  ngOnInit() {
  }

  onCreatePatient(addForm){
    this.createPatientService.createPatient(addForm);
    this.router.navigate(["/"]);
  }


}

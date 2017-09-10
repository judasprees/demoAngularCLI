import { Injectable } from '@angular/core';

@Injectable()
export class CreatePatientService {
  patients: Array<any>=[];
  patient: any={};
  createPatient(data){
    this.patients.push(data);
  }

  getPatients(){
    return this.patients;
  }

  getPatientById(id){
    this.patients.filter(data=>{
      if(id === data.patientId){
        this.patient = {
          "patientId": data.patientId,
          "patientCitizen": data.patientCitizen
        };
      }
    });
    return this.patient;
  }

  editPatient(patient){
    this.patients.push(patient);
  }
  

}



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { RouterModule, Routes} from '@angular/router';
import {CreatePatientService} from './create-patient/create-patient.service';
import { EditComponent } from './edit/edit.component';
import { FormPatientComponent } from './form-patient/form-patient.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path: "add", component:AddComponent},
  {path:"edit/:id", component:EditComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddComponent,
    EditComponent,
    FormPatientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CreatePatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }

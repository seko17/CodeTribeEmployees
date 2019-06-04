import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { ReadEmployeeComponent } from './read-employee/read-employee.component';
import { SearchEmployeesPipe } from './search-employees.pipe';
import{AddComponent} from './read-employee/add/add.component';
import { UpdateComponent } from './read-employee/update/update.component';
import { DisplaybioComponent } from './read-employee/displaybio/displaybio.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ReadEmployeeComponent,
    SearchEmployeesPipe,
    AddComponent,
    UpdateComponent,
    DisplaybioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'', component:LoginComponent},
      {path:'read-employee', component:ReadEmployeeComponent},
      {path:'add', component:AddComponent},
      {path:"update/:id", component: UpdateComponent},
      {path:"displayboi/:id", component: DisplaybioComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

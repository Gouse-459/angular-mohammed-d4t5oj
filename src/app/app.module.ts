import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeData } from './employee-data.component';
import { RouterModule } from '@angular/router';
import { ChildComponent } from './child-comp';

const Routes = [
  {
    path: '',
    component: ChildComponent,
  },

  { path: 'employee', component: EmployeeData },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(Routes),
  ],
  declarations: [AppComponent, HelloComponent, EmployeeData, ChildComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

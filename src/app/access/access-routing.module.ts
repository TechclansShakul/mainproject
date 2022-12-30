import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';

const ACCESS_ROUTES: Routes = [
  {
    path:'register', component:RegisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(ACCESS_ROUTES)],
  exports: [RouterModule]
})
export class AccessRoutingModule { }

import { Component,OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/Material-Module';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  constructor(private router:Router){}
  ngOnInit(): void {
    
  }
  RedirectLogin(){
    this.router.navigate(['login'])
  }

}

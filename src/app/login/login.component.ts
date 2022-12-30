import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/Material-Module';
import { FormsModule } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule   
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userservice:UserService, private route:Router){}
  ngOnInit(): void {
    localStorage.clear();     
  }
  responsedata:any;

  ProceedLogin(logindata:any){    
    console.log(logindata.value);
    console.log(logindata.valid);
    if (logindata.valid)
    {
      this.userservice.ProceedLogin(logindata.value).subscribe(item =>{
        this.responsedata = item;
        if (this.responsedata != null){
            localStorage.setItem('token',this.responsedata);  /* jwToken */
            console.log('Token',this.responsedata);
            this.route.navigate(['home']);
        }
        else{
          alert("Login Failed")
        }
     })

    };
  }

  RedirectRegister(){
    const currentroute=this.route.url;
    console.log(currentroute)
    this.route.navigate(['access/register']);
  }
}

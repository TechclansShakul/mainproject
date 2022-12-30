import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http:HttpClient) { 

  }
    
  ProceedLogin(inputdata:any){
    return this.http.post('http://192.168.101.12:8084/api/user/login/',inputdata);
  }

  IsLogedIn(){
    return localStorage.getItem('token')!=null;
  }

  GetToken(){
    return localStorage.getItem('token') != null?localStorage.getItem('token'):'';
  }

}


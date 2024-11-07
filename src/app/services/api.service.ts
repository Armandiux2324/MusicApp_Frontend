import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  url = environment.backend;
  login(user:string, pass:string){
    return this.http.post(this.url + '/login', {username:user, password:pass});
  }

  register(username:string, email:string, password:string, name:String){
    return this.http.post(this.url + '/users', {username:username, password:password, email:email, name:name});
  }
}

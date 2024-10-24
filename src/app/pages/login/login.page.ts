import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private http: HttpClient) { }
  url = environment.backend;
  ngOnInit() {
    this.login();
  }

  login(){
    this.http.post(this.url + '/login', {username: 'juanito2', password: '123456'}).subscribe({
      next(data) {
        console.log(data);
      }, error(err) {
        console.log(err);
      },
    })
  }

}

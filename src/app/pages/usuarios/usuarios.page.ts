import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  constructor(private http: HttpClient) { }
  url = environment.backend;
  usuarios: any[] = [];
  ngOnInit() {
    this.getAll()
  }
  getAll(){
    this.http.get(this.url + '/users').subscribe({
      next(data){
        console.log(data);
      }, 
      error(err){
        console.log(err);
      }
    })
  }
}

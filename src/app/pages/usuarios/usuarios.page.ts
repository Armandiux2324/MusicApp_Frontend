import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  constructor(private http: HttpClient) { }
  usuarios: any[] = [];
  ngOnInit() {
  }
  getAll(){
    this.http.get('http://localhost:3000/usuarios').subscribe({
      next(data){
        console.log(data);
      }, 
      error(err){
        console.log(err);
      }
    })
  }
}

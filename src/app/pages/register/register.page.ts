import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private api:ApiService, private alertCtrl:AlertController) { }
  username = "";
  password = "";
  email = "";
  name = "";

  ngOnInit() {
  }

  register(){
    this.api.register(this.username, this.email, this.password, this.name).subscribe({
      next:(data:any) => {
        this.presentAlert('Información', data.message);
      }, error:(error:any) => {
        this.presentAlert('Información', 'Intenta más tarde');
      }
    })
  }

  async presentAlert(header:string, message:string) {
    const alert = await this.alertCtrl.create({
      header: header,
      message: message,
      buttons: ['Aceptar'],
    });

    await alert.present();
  }


}

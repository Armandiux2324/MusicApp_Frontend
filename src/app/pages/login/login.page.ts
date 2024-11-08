import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private api:ApiService, private alertCtrl:AlertController) { }
  ngOnInit() {
  }

  user = '';
  pass = '';

  login(){
    this.api.login(this.user, this.pass).subscribe({
      next:(data:any) => {
        //console.log(data)
        this.presentAlert('Información', data.message);
      }, error:(error) => {
        //console.log(error);
        this.presentAlert('Información', 'Intenta más tarde');
      },
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

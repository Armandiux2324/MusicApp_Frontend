import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private api:ApiService) { }
  ngOnInit() {
  }

  user = '';
  pass = '';

  login(){
    this.api.login(this.user, this.pass).subscribe({
      next(data){
        console.log(data)
      }, error(error){
        console.log(error);
      },
    })
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'A Short Title Is Best',
      subHeader: 'A Sub Header Is Optional',
      message: 'A message should be a short, complete sentence.',
      buttons: ['Action'],
    });

    await alert.present();
  }

}

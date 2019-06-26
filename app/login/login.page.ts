import { Component, OnInit, ViewChild } from '@angular/core';
import { parseWebDriverCommand } from 'blocking-proxy/built/lib/webdriver_commands';
import { NavController, AlertController } from '@ionic/angular';
import { LoginServiceService } from './login-service.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('username') uname;
  @ViewChild('password') pwd;

  constructor(private nav: NavController, private msg: AlertController, private loginService: LoginServiceService){ 
  }

  ngOnInit() {
  }
 async  showError() {
    const alert = await this.msg.create({
      header: 'Alert',
      message: 'Invalid credintials.',
      buttons: ['OK']
    });
    await alert.present();
}


  signIn() {
    let a = this.loginService.isValid(this.uname.value, this.pwd.value);
  
  }

}

import { Component } from '@angular/core';
import { NetworkService } from './network.service';
import { login } from './authguard';
import { logout } from './authguard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 // lists = ['home','users','shop','error'];
 lists = [{name:'Home',link:'home'},{name:'Users',link:'users'},{name:'Shop',link:'shop'},{name:'Error',link:'error'}];
  title = 'angularrouting';
  isloggin=false;
  constructor(private nt:NetworkService){}
  login(){
    this.isloggin = login();
    console.log(this.isloggin);
  }
  logout(){
    this.isloggin = logout();
    console.log(this.isloggin);

  }
}

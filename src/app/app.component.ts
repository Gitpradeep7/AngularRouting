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

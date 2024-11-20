import { Component } from '@angular/core';
import { NetworkService } from '../network.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  data:any;
  data2:any;
  constructor(private nt:NetworkService){
    
  }
  ngOnInit(){
    this.nt.getURL().subscribe((res:any)=>{
      this.data = res;
      console.log(this.data)
    })
  }
}

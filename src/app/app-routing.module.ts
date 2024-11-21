import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { UsersComponent } from './users/users.component';
import { Authguard } from './authguard';
import { ErrorpageComponent } from './errorpage/errorpage.component';

const routes: Routes = [{path:'home',component:HomeComponent},
  {path:'shop',component:ShopComponent},
  {path:'users',component:UsersComponent},
  {path:'', redirectTo:'home' , pathMatch: 'full'},
  {path:'error',component:ErrorpageComponent},
  {path:'**',redirectTo:'error',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

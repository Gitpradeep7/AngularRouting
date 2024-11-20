import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from "@angular/router";
let isloggin = false;
export const Authguard: CanActivateFn =(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>{
    
    if(isloggin){
        return true;
    }
    else{
        return false;
    }
}
export function login(){
    return true;
}
export function logout(){
    return false;
}
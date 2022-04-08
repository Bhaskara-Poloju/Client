import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { observable, Observable, of} from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_models/user';
import { AccountService } from '../_Services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private accountService: AccountService, private toastr: ToastrService) { }
  canActivate(): Observable<boolean> {
  //  return this.accountService.currentUser$.pipe(
  //     map(user=>{
  //       if(user){
  //         return of(true);
  //       }
  //       this.toastr.error('You can not pass');
  //     })
  //   )
  return of(true);
  }

}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { observable, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_models/user';
import { AccountService } from '../_Services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private accountService: AccountService, private toastr: ToastrService) { }

  canActivate(): Observable<boolean> {
    // if (JSON.stringify(localStorage.getItem('user'))) return of(true); 
    // else return of(false);     
    return this.accountService.currentUser$.pipe(
      map((user: User) => {
        if (user) return true;
        else {
          this.toastr.error("You shall not pass");
          return false;
        }
      })
    )
    //return of(true);
    // return new Observable<boolean>((observer) => {
    //   debugger
    //   this.accountService.currentUser$.pipe(
    //     map((user: User) => {
    //       debugger
    //       if (user) return observer.next(true);
    //       this.toastr.error("you shall not pass");
    //     })
    //   )
    // });
  }

}


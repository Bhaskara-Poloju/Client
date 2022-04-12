import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Member } from '../_models/member';
import { User } from '../_models/user';

// const httpOptions = {
//   headers: new HttpHeaders({
//     Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')!)
//   })
// }

@Injectable({
  providedIn: 'root'
})

export class MembersService {
  baseurl = environment.apiUrl;
  user!: User;

  constructor(private http: HttpClient) { }

  getMembers() {
    // this.user = JSON.parse(localStorage.getItem('user')!);
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     Authorization: 'Bearer ' + this.user.token
    //   })
    // }
    return this.http.get<Member[]>(this.baseurl + 'Users');
  }

  getMember(username: string) {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     Authorization: 'Bearer ' + this.user.token
    //   })
    // }
    return this.http.get<Member>(this.baseurl + 'Users/' + username);
  }
}

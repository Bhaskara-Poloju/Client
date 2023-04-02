import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
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
  memebers: Member[] = [];

  constructor(private http: HttpClient) { }

  getMembers() {
    if (this.memebers.length > 0) return of(this.memebers);
    return this.http.get<Member[]>(this.baseurl + 'Users').pipe(
      map(members => {
        this.memebers = members;
        return members;
      })
    );
  }

  getMember(username: string) {
    const member = this.memebers.find(x => x.username == username);
    if (member !== undefined) return of(member);
    return this.http.get<Member>(this.baseurl + 'Users/' + username);
  }

  updateMember(member: Member) {
    return this.http.put(this.baseurl + 'users', member).pipe(
      map(() => {
        const index = this.memebers.indexOf(member);
        this.memebers[index] = member;
      })
    )
  }

  setMainPhoto(photoId: Number) {
    return this.http.put(this.baseurl + 'users/set-main-photo/' + photoId, {});
  }

  deletePhoto(photoId: number) {
    return this.http.delete(this.baseurl + "users/delete-photo/" + photoId);
  }
}

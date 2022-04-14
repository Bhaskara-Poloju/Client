import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Member } from 'src/app/_models/member';
import { AccountService } from 'src/app/_Services/account.service';
import { MembersService } from 'src/app/_Services/members.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  members$!: Observable<Member[]>;

  constructor(private memberService: MembersService, private accountService: AccountService) { }

  ngOnInit(): void {   
    this.members$=this.memberService.getMembers();
  }

}

import { UserService } from './../../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dsm',
  templateUrl: './dsm.component.html',
  styleUrls: ['./dsm.component.css']
})
export class DsmComponent implements OnInit {
  users: any[];
  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.getUserList()
  }

  getUserList() {
    this.service.getUser().subscribe((res) => {
      this.users = res
    })
  }

  getUserId(id) {
    this.service.userId.next(id);

  }


}

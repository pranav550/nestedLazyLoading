import { UserService } from './../../../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  selectUser: string;
  userObj: {};
  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.getUserId()
    this.getSelectedUser()
  }

  getUserId() {
    this.service.getUserId.subscribe(resp => {
      this.selectUser = resp
      // console.log(resp, "vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv")
    })
  }

  getSelectedUser() {
    this.service.getUser().subscribe(res => {
      res.filter(data => {
        if (data.id === this.selectUser) {
          this.userObj = data
          console.log(data)
        }
      })
    })
  }

}

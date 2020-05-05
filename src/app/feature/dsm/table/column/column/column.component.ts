import { UserService } from './../../../../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {
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

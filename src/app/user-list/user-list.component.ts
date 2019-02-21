import { Component, OnInit } from "@angular/core";
import { UserListService } from "./service/user-list.service";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.styl"],
  //优先级：这里的配置>
  providers: [UserListService]
})
export class UserListComponent implements OnInit {
  private userList: Array<any>;

  constructor(public userListService: UserListService) {
    console.log(this.userListService);
  }

  ngOnInit() {
    this.userList = this.userListService.getUserList();
  }
}

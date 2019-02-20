import { Injectable } from "@angular/core";
import { UUID } from "angular2-uuid";

@Injectable({
  providedIn: "root"
})
export class UserListService {
  private _id: string;

  constructor() {
    this._id = UUID.UUID();
  }

  /**
   * getUserList
   */
  public getUserList(): Array<any> {
    return [
      { userName: "coder", age: 18 },
      { userName: "coder", age: 18 },
      { userName: "coder", age: 18 },
      { userName: "coder", age: 18 },
      { userName: "coder", age: 18 },
      { userName: "coder", age: 18 },
      { userName: "coder", age: 18 }
    ];
  }
}

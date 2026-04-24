import { uid } from "../utilities/generate-id";
import { UserTypeEnum } from "../meta/enums/user-type";
import type { IUser } from "../meta/i-user";

class User implements IUser {
  id: string;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  userType: UserTypeEnum;
  phoneNumber: string;
  imageUrl: string;

  constructor(
    username = "",
    password = "",
    firstname = "",
    lastname = "",
    userType = UserTypeEnum.Contestant,
    phoneNumber = "",
    imageUrl = "",
  ) {
    this.id = uid();
    this.username = username;
    this.password = password;
    this.firstname = firstname;
    this.lastname = lastname;
    this.userType = userType;
    this.phoneNumber = phoneNumber;
    this.imageUrl = imageUrl;
  }

  validatePassword(password: string): boolean {
    return this.password === password;
  }
}

export { User };

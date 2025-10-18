import { uid } from "../utilities/generate-id";
import type { IUser } from "../meta/i-user";

class User implements IUser {
  id: string;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  userType: string;
  phoneNumber: string;
  imageUrl: string;

  constructor(
    username = "",
    password = "",
    firstname = "",
    lastname = "",
    userType = "user",
    phoneNumber = "",
    imageUrl = ""
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

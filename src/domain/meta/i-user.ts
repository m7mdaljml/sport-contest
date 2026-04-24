import type { UserTypeEnum } from "./enums/user-type";

interface IUser {
  id: string;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  imageUrl: string;
  userType: UserTypeEnum;
  phoneNumber: string;
}

export type { IUser };

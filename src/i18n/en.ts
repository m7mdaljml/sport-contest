import { UserTypeEnum } from "../domain/meta/enums/user-type";

export default {
  dark: "Dark",
  light: "Light",
  arabic: "Arabic",
  english: "English",
  enterUserName: "Enter User Name",
  enterPass: "Enter Password",
  userName: "User Name",
  password: "Password",
  login: "Login",
  logout: "Logout",
  invalidLogin: "Invalid username or password",
  userType: "User Type",
  phoneNumber: "Phone Number",
  profile: "Profile",
  enums: {
    userTypeEnum: {
      [UserTypeEnum.Admin]: "Admin",
      [UserTypeEnum.Contestant]: "Contestant",
    },
  },
};

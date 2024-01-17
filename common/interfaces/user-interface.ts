import { Theme } from "../enums";
import { IBase } from "./";

export interface IUser extends IBase {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  theme: Theme;
  language: string;
  timezone: string;
  notificationsEnabled: boolean;
  profilePictureUrl?: string;
}

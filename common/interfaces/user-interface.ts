import { Languages, Themes } from "../enums";
import { IBase } from "./";

export interface IUser extends IBase {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  theme: Themes;
  language: Languages;
  timezone: string;
  notificationsEnabled: boolean;
  profilePictureUrl?: string;
}

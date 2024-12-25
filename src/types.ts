export interface UserDataInterface {
  _id: string;
  username: string;
  email: string;
  hash: string;
  salt: string;
  admin: boolean;
  // passwordReset: {passwordResetToken: string, passwordResetTokenExpires: Number|string}
  __v: number;
}
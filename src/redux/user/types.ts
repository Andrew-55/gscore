export type UserType = {
  id: string;
  username: string;
  email: string;
};

export interface UserState {
  user: UserType;
  token: string;
}

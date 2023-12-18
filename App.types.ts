export interface AppProps {
  title: string
}

export type Name = {
  first: string;
  last: string;
}

export type Login = {
  uuid: string;
}

export interface Users {
  name: Name;
  login: Login;
  email: string;
}
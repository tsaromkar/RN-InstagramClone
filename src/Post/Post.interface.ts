export interface IUserPostDetails {
  userName: string;
  location: string;
}

export interface IUserDetailsContainer {
  displayPicture: string;
  userName: string;
  location: string;
}

export interface IPost {
  route: object;
  fromScreen: string;
}

export interface IPostComponent {
  displayPicture: string;
  userName: string;
  location: string;
  post: string;
}

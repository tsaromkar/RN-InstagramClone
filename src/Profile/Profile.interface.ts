export interface IUserProfileDetails {
  name: string;
  bio: string;
}

export interface IUserStats {
  count: number;
  type: string;
}

export interface IUserImages {
  images: string[];
  navigateTo: (item: string) => void;
}

export interface IProfile {
  displayPicture: string;
  fullName: string;
  bio: string;
  userName: string;
  location: string;
  posts: number;
  followers: number;
  following: number;
  userImages: string[];
}

export interface IProfileDetails {
  displayPicture: string;
  fullName: string;
  bio: string;
  posts: number;
  followers: number;
  following: number;
}

export interface IDisplayPicture {
  displayPicture: string;
  width: number;
  height: number;
}

export interface IDisplayPictureContainer {
  displayPicture: string;
}

export interface IUserStatsContainer {
  posts: number;
  followers: number;
  following: number;
}

import { Photo } from '../CoreComponents/PhotoEditor/Photo.model';

export class User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  age:number;
  professionalTitle: string;
  professionalDescription: string;
  language: string;
  photos: Photo[];
  profilePhotoUrl: string;
  backgroundPhotoUrl: string;
  twitterLink: string;
  facebookLink: string;
  linkedinLink: string;
  youtubeLink: string;
  udemyLink: string;
  courseraLink: string;
  lastActive: Date;
  createdDate: Date;
  lastUpdatedDate: Date;
}

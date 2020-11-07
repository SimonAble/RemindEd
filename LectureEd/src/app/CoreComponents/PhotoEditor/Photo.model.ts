import { User } from 'src/app/CoreModels/User.model';

export class Photo {
  id: number;
  url: string;
  description: string;
  isProfilePicture: boolean;
  isProfileBackground: boolean;
  dateAdded: Date;
  publicId: string;
  user: User;
}

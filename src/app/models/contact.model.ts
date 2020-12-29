export class Contact {
    id: number;
    name: string;
    mobile: string;
    fax: string;
    email: string;
    facebook: string;
    address: string;
    avatarUrl: Photo;
    backgroundUrl: Photo;
    isFavorite: boolean;
    organization: string;
}

export interface IContactCreate {
    name: string;
    mobile: string;
    fax: string;
    email: string;
    facebook: string;
    address: string;
    avatarUrl: Photo;
    backgroundUrl: Photo;
    isFavorite: boolean;
    organization: string;
}

export interface Photo {
    filepath: string;
    webviewPath: string;
  }

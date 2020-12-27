export class Contact {
    id: number;
    name: string;
    mobile: string;
    fax: string;
    email: string;
    facebook: string;
    address: string;
    avatarUrl: string;
    backgroundUrl: string;
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
    avatarUrl: string;
    backgroundUrl: string;
    isFavorite: boolean;
    organization: string;
}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  contacts = [{
    id: 0,
    name: 'Tùng',
    mobile: '0378963405',
    fax: '0378963405',
    email: 'mtung199x@gmail.com',
    facebook: 'fb.com/mtung199x',
    address: 'Thử Đức',
    avatarUrl: 'https://chatcord-api.herokuapp.com/icons/avatar/avatar1001.svg',
    backgroundUrl: 'string',
    isFavorite: true,
    organization: 'UIT university',
  },
  {
    id: 1,
    name: 'Lâm',
    mobile: '0378963405',
    fax: '0378963405',
    email: 'mtung199x@gmail.com',
    facebook: 'fb.com/mtung199x',
    address: 'Thử Đức',
    avatarUrl: 'https://chatcord-api.herokuapp.com/icons/avatar/avatar1002.svg',
    backgroundUrl: 'string',
    isFavorite: false,
    organization: 'Nguyễn Tất Thành university',
  },
  {
    id: 2,
    name: 'Thành Trương',
    mobile: '0378963405',
    fax: '0378963405',
    email: 'mtung199x@gmail.com',
    facebook: 'fb.com/mtung199x',
    address: 'Thử Đức',
    avatarUrl: 'https://chatcord-api.herokuapp.com/icons/avatar/avatar1003.svg',
    backgroundUrl: 'string',
    isFavorite: true,
    organization: 'Chém gió',
  },
  {
    id: 3,
    name: 'Linh Chi',
    mobile: '0378963405',
    fax: '0378963405',
    email: 'mtung199x@gmail.com',
    facebook: 'fb.com/mtung199x',
    address: 'Thử Đức',
    avatarUrl: 'https://chatcord-api.herokuapp.com/icons/avatar/avatar1004.svg',
    backgroundUrl: 'string',
    isFavorite: false,
    organization: '',
  },{
    id: 4,
    name: 'Mẹ',
    mobile: '0378963405',
    fax: '0378963405',
    email: 'mtung199x@gmail.com',
    facebook: 'fb.com/mtung199x',
    address: 'Thử Đức',
    avatarUrl: 'https://chatcord-api.herokuapp.com/icons/avatar/avatar1005.svg',
    backgroundUrl: 'string',
    isFavorite: true,
    organization: 'UIT university',
  },{
    id: 5,
    name: 'Some one 1... ',
    mobile: '0378963405',
    fax: '0378963405',
    email: 'mtung199x@gmail.com',
    facebook: 'fb.com/mtung199x',
    address: 'Thử Đức',
    avatarUrl: 'https://chatcord-api.herokuapp.com/icons/avatar/avatar1006.svg',
    backgroundUrl: 'string',
    isFavorite: false,
    organization: '',
  },{
    id: 6,
    name: 'Some one ... ',
    mobile: '0378963405',
    fax: '0378963405',
    email: 'mtung199x@gmail.com',
    facebook: 'fb.com/mtung199x',
    address: 'Thử Đức',
    avatarUrl: 'https://chatcord-api.herokuapp.com/icons/avatar/avatar1008.svg',
    backgroundUrl: 'string',
    isFavorite: false,
    organization: 'UIT university',
  }];
  arrAlpha = [];

  constructor() { }

  ngOnInit() {
    this.contacts.sort((a, b) => {
      return a.name > b.name ? 1 : (a.name < b.name ? -1 : 0);
    });
    for (let contact of this.contacts){
      const index = this.arrAlpha.findIndex(x => x === contact.name[0]);
      if (index === -1){
        this.arrAlpha.push(contact.name[0]);
      }
    }
  }

}

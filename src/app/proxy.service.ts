import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;


@Injectable({
  providedIn: 'root'
})
export class ProxyService {

  constructor() { 
    // this.setObject('contact', [
    //   {
    //         id:1,
    //         name: 'tung4',
    //         mobile: '0378963405',
    //         fax: '0378963405',
    //         email: 'mtung199x@gmail.com',
    //         facebook: 'https://fb.com/mtung199x',
    //         address: 'Thủ Đức',
    //         avatarUrl: {
    //           filepath: "1609216049909.jpeg", 
    //           webviewPath: "blob:http://localhost:8100/5c425e39-5d92-4339-bc9f-6ddd362b72c2"
    //         },
    //         backgroundUrl: 
    //         {
    //           filepath: "1609216049909.jpeg", 
    //           webviewPath: "blob:http://localhost:8100/5c425e39-5d92-4339-bc9f-6ddd362b72c2"
    //         },
    //         isFavorite: '1'
    //   },
    //   {
    //         id:2,
    //         name: 'tung3',
    //         mobile: '0378963405',
    //         fax: '0378963405',
    //         email: 'mtung199x@gmail.com',
    //         facebook: 'https://fb.com/mtung199x',
    //         address: 'Thủ Đức',
    //         avatarUrl: {
    //           filepath: "1609216049909.jpeg", 
    //           webviewPath: "blob:http://localhost:8100/5c425e39-5d92-4339-bc9f-6ddd362b72c2"
    //         },
    //         backgroundUrl: {
    //           filepath: "1609223065036.jpeg", 
    //           webviewPath: "blob:http://localhost:8100/5836eb2c-c70c-4a81-99c0-698c7a53d52c"
    //         },
    //         isFavorite: '1'
    //   },
    //   {
    //         id:3,
    //         name: 'tung2',
    //         mobile: '0378963405',
    //         fax: '0378963405',
    //         email: 'mtung199x@gmail.com',
    //         facebook: 'https://fb.com/mtung199x',
    //         address: 'Thủ Đức',
    //         avatarUrl: {
    //           filepath: "1609216049909.jpeg", 
    //           webviewPath: "blob:http://localhost:8100/5c425e39-5d92-4339-bc9f-6ddd362b72c2"
    //         },
    //         backgroundUrl: {
    //           filepath: "1609216049909.jpeg", 
    //           webviewPath: "blob:http://localhost:8100/5c425e39-5d92-4339-bc9f-6ddd362b72c2"
    //         },
    //         isFavorite: '1'
    //   }
    // ])
  }
  
  //  set all
  async setObject(key: string, arrValue: any[]) {
    await Storage.set({
      key,
      value: JSON.stringify(arrValue)
    }).then().catch();
  }

  // get all
  async getObject(key: string) {
    const ret = await Storage.get({ key });
    return JSON.parse(ret.value);
  }

  // remove all
  async removeObject(key: string) {
    await Storage.remove({ key });
  }

  // getOne
  async getOne(id, key) {
    let obj = await this.getObject(key);
    let result = obj.find(x => x.id === id);
    return result;
  }
  // add
  async create(item, key) {
    let obj = await this.getObject(key);
    const id = obj[obj.length - 1].id + 1;
    item = { id, ...item };
    obj.push(item);
    this.setObject(key, obj);
  }

  // update
  async update(item, key) {
    let obj = await this.getObject(key);
    obj[obj.findIndex(x => x.id === item.id)] = item;
    this.setObject(key, obj);
  }

  // delete
  async delete(id, key) {
    let obj = await this.getObject(key);
    obj.splice(obj.findIndex(x => x.id === id), 1);
    this.setObject(key, obj);
  }
}

import { Injectable } from '@angular/core';
import { SMS, SmsOptions } from '@ionic-native/sms/ngx';
import { Contact, IContactCreate } from '../models/contact.model';
import { ProxyService } from '../proxy.service';
import { Plugins, CameraResultType, Capacitor, FilesystemDirectory, 
  CameraPhoto, CameraSource } from '@capacitor/core';
import { CallNumber } from '@ionic-native/call-number/ngx';

const { Camera, Filesystem, Storage } = Plugins;



@Injectable({
  providedIn: 'root'
})
export class ContactService extends ProxyService {


  constructor(private sms: SMS, private callNumber : CallNumber) {
    super();
    console.log('a');
    // let obj = {
    //   id:3,
    //   name: 'tung4',
    //   mobile: '0378963405',
    //   fax: '0378963405',
    //   email: 'mtung199x@gmail.com',
    //   facebook: 'https://fb.com/mtung199x',
    //   address: 'Thủ Đức',
    //   avatarUrl: {
    //     filepath: "1609216049909.jpeg", 
    //     webviewPath: "blob:http://localhost:8100/5c425e39-5d92-4339-bc9f-6ddd362b72c2"
    //   },
    //   backgroundUrl: 
    //   {
    //     filepath: "1609216049909.jpeg", 
    //     webviewPath: "blob:http://localhost:8100/5c425e39-5d92-4339-bc9f-6ddd362b72c2"
    //   },
    //   isFavorite: '1'
    // } 
    // this.update(obj, 'contact')
  }

  createContact(item: IContactCreate): Promise<any> {
    return this.create(item, 'contact');
  }

  updateContact(item: Contact): Promise<any> {
    return this.update(item, 'contact');
  }

  deleteContact(id: number): Promise<any> {
    return this.delete(id, 'contact');
  }

  getContact(id: number): Promise<any> {
    return this.getOne(id, 'contact');
  }

  call(mobile: string){
    console.log(mobile); 
     this.callNumber.callNumber(mobile, true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
    
  }

  sendSms(mobile:string)
  {
    let option : SmsOptions = {
        replaceLineBreaks:false,
        android:{
          intent:'INTENT'
        }
    }
    this.sms.send(mobile, '', option).then(x=>console.log(x)).catch(y=>console.log(y))
  }
}

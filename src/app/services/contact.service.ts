import { Injectable } from '@angular/core';
import { Contact, IContactCreate } from '../models/contact.model';
import { ProxyService } from '../proxy.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService extends ProxyService {


  constructor() {
    super();
    console.log('a');
    
    // this.call("18008168");
    
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

  // call(mobile: string){
  //   console.log(mobile); 
  //    this.callNumber.callNumber(mobile, true)
  //   .then(res => console.log('Launched dialer!', res))
  //   .catch(err => console.log('Error launching dialer', err));
    
  // }
}

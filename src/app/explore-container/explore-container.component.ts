import { Component, OnInit, Input } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { ContactService } from '../services/contact.service';
import { SMS } from '@ionic-native/sms/ngx';




@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;

  constructor(private contactService: ContactService,private callNumber:CallNumber, private sms: SMS) {
  }

  ngOnInit() {
    this.contactService.getObject('contact').then(x => console.log(x))
    //this.callNumber.callNumber('0911569553', true).then(x=> console.log(x)).catch(err=>console.log(err))
    this.sms.send('0961791330', 'Hello DB!')
  }

}

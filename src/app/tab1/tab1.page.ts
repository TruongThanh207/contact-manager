import { Component } from '@angular/core';
import { SMS, SmsOptions } from '@ionic-native/sms/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private sms: SMS) {
    
  }
  onClick(){
    var option: SmsOptions={
      replaceLineBreaks:false,
      android:{
        intent:'INTENT'
      }
    }
    this.sms.send('0911569553', 'Hello!', option)
  }
}

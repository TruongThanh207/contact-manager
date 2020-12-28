import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';


@Component({
  selector: 'app-recent',
  templateUrl: './recent.page.html',
  styleUrls: ['./recent.page.scss'],
})
export class RecentPage implements OnInit {

  constructor(private contact : ContactService) { 
    this.contact.sendSms('0911569553')
  }

  ngOnInit() {
  }

}

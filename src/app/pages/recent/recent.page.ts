import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { PhotoService } from 'src/app/services/photo.service';


@Component({
  selector: 'app-recent',
  templateUrl: './recent.page.html',
  styleUrls: ['./recent.page.scss'],
})
export class RecentPage implements OnInit {

  contacts: Contact[] = []
  path:string
  constructor(public contactService : ContactService, public photoSevice:PhotoService) {
    //this.contactService.getObject('contact').then(x=>console.log(x))
  }

  ngOnInit() {
    this.photoSevice.getManyContact('contact').then(data=>{
      this.contacts = data
    })
  }

  addAvatar()
  {
    //this.photoSevice.getOneContact(2, 'contact').then(x=>console.log(x))
  }
  addBackground(){
    //this.photoSevice.addBackgroundImage().then(x=>this.path=x.webviewPath)
  }
  async updateBackground(){
    this.photoSevice.updateBackgroundImage(1, 'contact').then(x=>this.path=x.webviewPath).then(y=>{
      this.photoSevice.updateBackgroundImage(2, 'contact').then(x=>this.path=x.webviewPath).then(x=>{
        this.photoSevice.updateBackgroundImage(3, 'contact').then(x=>this.path=x.webviewPath)
      })
    })
  }
  async updateAvatar(){
    await this.photoSevice.updateAvatarImage(1, 'contact').then(x=>this.path=x.webviewPath).then( async y=> {
      await this.photoSevice.updateAvatarImage(2, 'contact').then(x=>this.path=x.webviewPath).then(async x=>{
        await this.photoSevice.updateAvatarImage(3, 'contact').then(x=>this.path=x.webviewPath)
      })
    })
    
  }
}

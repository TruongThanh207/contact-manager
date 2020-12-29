import { Injectable } from '@angular/core';
import { Contact, IContactCreate, Photo} from '../models/contact.model';
import { ProxyService } from '../proxy.service';
import { Plugins, CameraResultType, Capacitor, FilesystemDirectory, 
  CameraPhoto, CameraSource } from '@capacitor/core';

const { Camera, Filesystem, Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class PhotoService extends ProxyService {

  public avatar: Photo

  public background: Photo

  public contacts : Contact []= []

  public contact : Contact

  constructor() {
    super()

  }

  async getOneContact(id:number, key:string) {
    // Take a photo
    const capturedPhoto = await this.getOne(id, key).then(x=>{
      this.contact = x
    })
    return this.contact
  }

  async getManyContact(key:string) {
    // Take a photo
    const contacts = await this.getObject(key).then(x=>{
     this.contacts = x
    })
    return this.contacts
  }

  // ---> add photo

  async addAvatarImage() {
    // Take a photo
    let capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri, 
      source: CameraSource.Camera, 
      quality: 100 
    });
    let savedImageFile = await this.savePicture(capturedPhoto)

    let readFileAvatar = await Filesystem.readFile({
      path: savedImageFile.filepath,
      directory: FilesystemDirectory.Data
    });
    this.avatar = savedImageFile
    this.avatar.webviewPath = `data:image/jpeg;base64,${readFileAvatar.data}`

    return this.avatar
  }

  async addBackgroundImage() {
    // Take a photo
    let capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri, 
      source: CameraSource.Camera, 
      quality: 100 
    });
    let savedImageFile = await this.savePicture(capturedPhoto)

    let readFileBackground = await Filesystem.readFile({
      path: savedImageFile.filepath,
      directory: FilesystemDirectory.Data
    });

    this.background = savedImageFile
    this.background.webviewPath = `data:image/jpeg;base64,${readFileBackground.data}`

    return this.background
    
  }

  //--->update image

  async updateAvatarImage(id:number, key:string) {
    // Take a photo
    let capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri, 
      source: CameraSource.Camera, 
      quality: 100 
    });
    let savedImageFile = await this.savePicture(capturedPhoto)

    let readFileAvatar = await Filesystem.readFile({
      path: savedImageFile.filepath,
      directory: FilesystemDirectory.Data
    });
    this.avatar = savedImageFile
    this.avatar.webviewPath = `data:image/jpeg;base64,${readFileAvatar.data}`

    await this.getOne(id, key).then(contact=>{
      contact.avatarUrl = this.avatar
      this.update(contact, key)
    }).then(x=>{
      this.getObject('contact').then(x=>console.log(x))
    })
    return this.avatar
  }

  async updateBackgroundImage(id:number, key:string) {
    // Take a photo
    let capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri, 
      source: CameraSource.Camera, 
      quality: 100 
    });
    let savedImageFile = await this.savePicture(capturedPhoto)

    let readFileBackground = await Filesystem.readFile({
      path: savedImageFile.filepath,
      directory: FilesystemDirectory.Data
    });

    this.background = savedImageFile
    this.background.webviewPath = `data:image/jpeg;base64,${readFileBackground.data}`
    await this.getOne(id, key).then(contact=>{
      contact.backgroundUrl = this.background
      this.update(contact, key)
    }).then(x=>{
      this.getObject('contact').then(x=>console.log(x))
    })
    return this.background
  }




  // Save image and Convert base64
 async savePicture(cameraPhoto: CameraPhoto) {
    const base64Data = await this.readAsBase64(cameraPhoto);
    const fileName = new Date().getTime() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: FilesystemDirectory.Data
    });
    return {
      filepath: fileName,
      webviewPath: cameraPhoto.webPath
    };
  }

  private async readAsBase64(cameraPhoto: CameraPhoto) {
    // Fetch the photo, read as a blob, then convert to base64 format
    const response = await fetch(cameraPhoto.webPath!);
    const blob = await response.blob();
  
    return await this.convertBlobToBase64(blob) as string;  
  }
  
  convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader;
    reader.onerror = reject;
    reader.onload = () => {
        resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });
  // EndSave image and Convert base64
}

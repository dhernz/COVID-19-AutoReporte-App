import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Device } from '@ionic-native/device/ngx';
import { CommonService } from '../services/common.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  userData: any = {}
  constructor(
    private apiService: ApiService,
    private device: Device,
    private common: CommonService
  ) { }

  ngOnInit() {
  }

  validateName(){
    return 'ion-invalid'
  }

  processForm(){
    console.log(this.device)
    let data = {
      ...this.userData,
      identity: this.userData.identityOne.toString() + this.userData.identityTwo.toString() + this.userData.identityThree.toString(),
      mac_address: "asd",
      country_code: "+504",
      device_id: this.device.uuid || "device_id_here"
    }
    this.common.presentLoading()
    this.apiService.register(data).then((data:any)=>{
      localStorage.setItem("token",data.token)
      this.common.hideLoading()
    }).catch(err=>{
      console.log(err)
      this.common.hideLoading()
    })
    console.log("Process form")
    console.log(data)
  }

  validForm(){
    let valid = false
    return valid
  }

}
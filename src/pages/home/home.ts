import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SenderProvider } from '../../providers/sender/sender';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  url:string;

  constructor(public navCtrl: NavController, public sender: SenderProvider ) {

  }

  command(param:string){
    this.sender.sendCommand(this.url,param).subscribe(
      data =>
      console.log(data),
      error => 
      console.log(error)
    )
    
  }

}

import { Component } from '@angular/core';
import { PaiService } from '../../paisa.service';
import { Router } from '@angular/router';
import { Advertise } from '../../paisa';

@Component({
  selector: 'app-advertisementform',
  templateUrl: './advertisementform.component.html',
  styleUrls: ['./advertisementform.component.css']
})
export class AdvertisementformComponent {
  advertise= new Advertise();
  message=''
  text="www";
  public editorData: string = '';
  constructor(private _service: PaiService, private _router: Router){};
  onEditorChange(event: any) {
    this.editorData = event;
    console.log("this.editorData---->",this.editorData)
    // You can perform additional actions when the editor content changes
  }
  advertisementForm(){
    this._service.advertiseFromRemote(this.advertise,this._service.userId).subscribe(
      data=>{console.log("Response received");
      this._router.navigate(['alladvertisements'])
    },
      error=>{console.log(this.advertise);
        console.log("not saved");
      this.message="Invalid details";
    }
      
    )
  }

}

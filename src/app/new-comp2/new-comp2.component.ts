import { Component,OnInit} from '@angular/core';
import { ServiceService } from '../service.service';
import { SerService } from "../ser.service";

@Component({
  selector: 'app-new-comp2',
  templateUrl: './new-comp2.component.html',
  styleUrls: ['./new-comp2.component.scss']
})
export class NewComp2Component implements OnInit {
  data:any;
  constructor(public g:SerService){

  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.data=this.g.getinfo().subscribe(e=>{
      this.data=e
    })
    
  }

}

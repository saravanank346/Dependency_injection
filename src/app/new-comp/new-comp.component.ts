import { Component ,OnInit } from '@angular/core';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-new-comp',
  templateUrl: './new-comp.component.html',
  styleUrls: ['./new-comp.component.scss']
})
export class NewCompComponent implements OnInit {
  student:any;

  constructor(public s:ServiceService){

  }
  ngOnInit(): void {
    console.log("inside");
    
    this.student=this.s.getDetials().subscribe(data=>this.student=data);
    
    
  }
  
  
  


}
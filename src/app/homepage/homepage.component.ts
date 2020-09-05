import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {NoAccessComponent} from '../no-access/no-access.component';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{ 
  @Input() moduleArray;
//   @Input() username;

// isAML:boolean;
// isSAR: boolean;
// isCBA: boolean;
// isMPN: boolean;
// isEMEA: boolean;
// isCR:boolean;

  constructor( public dialog : MatDialog) { }
  ngOnInit():void{
    this.moduleArray = this.moduleArray;
    console.log("module array..."+this.moduleArray[0]);
    
//     this.isAML=this.moduleArray.includes('AML Investigate');
//     console.log("module array boolean..."+this.isAML);
//     for(let i=0; i<this.moduleArray.length; i++){
//       if(this.moduleArray[i].includes('AML Investigate')){
//         this.isAML = true;
//         console.log(" boolean111..."+this.isAML);
//       }
//     }
//     console.log(" boolean222..."+this.isAML);
//     this.isSAR=this.moduleArray.includes('Graph Visualization');
//     this.isCBA=this.moduleArray.includes('AML Investigate');
//     this.isMPN=this.moduleArray.includes('Model Monitoring');
//     this.isEMEA=this.moduleArray.includes('AML Investigate');
//     this.isCR=this.moduleArray.includes('AML Investigate');

  }
  // openDialog() {
  //   this.dialog.open(NoAccessComponent);
  // }

  // close(){
  //   this.dialog.closeAll();
  // }

}


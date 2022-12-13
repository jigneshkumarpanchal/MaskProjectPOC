import { Component } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styles:[`
            .online{
                color :blue;
            }
    `]

})
export class ServerComponent{



    showSecret = false;
    log = [];
  
    onToggleDetails() {
      this.showSecret = !this.showSecret;
      this.log.push(new Date());
    }
    
    hideparagragh:boolean =true;
    displayarray:number=0;
    arrayInc: any[];
  
    VisiblityofParagraph(){
        console.log('size');
        this.displayarray=this.displayarray+1;
        this.arrayInc[this.displayarray]=this.displayarray;
        if(this.hideparagragh==true)
        {
        this.hideparagragh=false;
        }
        else
        {
            this.hideparagragh=true;
        }
        return this.hideparagragh;
    }
    getColor(){
        return this.serverstatus==='' ? 'green' : 'red';
    }
    Isone:boolean =false;
    serverstatus:string="online";
    isEnabled:boolean=false;
   
    
   
    getservername1()
    {
      this.serverstatus="online";
      return this.serverstatus;
    }
}
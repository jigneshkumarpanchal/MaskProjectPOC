import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-servers',
  template: '<app-server></app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
 serverName:string="ABC";
  constructor() { }


  getservername()
  {
    return this.serverName;
  }
  ngOnInit(): void {
  }

}

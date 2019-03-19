import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  // template: '<app-server></app-server><app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreatingStatus = "No server was created";
  serverName: string = 'TestServer';
  serverCreated: boolean = false;
  servers = ['Test Server', 'Test Server 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
   }

  ngOnInit() {
  }

  onCreateServer = () => {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreatingStatus = "Server was created! Name is " + this.serverName;
  }

  onUpdateServerName = (event: Event) => {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}

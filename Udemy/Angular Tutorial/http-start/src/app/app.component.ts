import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { ServerService } from './servers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName=this.serverService.getAppName();
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];

  constructor(private serverService: ServerService){}

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }

  onSaveServer() {
    this.serverService.storeServers(this.servers).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  onGetServer() {
    this.serverService.getServers().subscribe(
      (servers: any[]) => this.servers = servers,
      (error) => alert(error) 
    );
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}

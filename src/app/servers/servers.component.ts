import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server been created.';
  serverName = 'abdfe';
  username = 'Xiao Li';
  serverCreated = false;
  servers = ['testserver', 'testserver 2'];
  showScrt = false;
  log = [];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }
  onCreateServer() {
    this.serverCreationStatus = 'New server has created. Name is ' + this.serverName;
  }
  onUpdateServerName(event: Event) {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  check() {
    this.username = '';
  }
  allowDisplay() {
    this.showScrt = !this.showScrt;
    this.log.push(this.log.length + 1);
  }
}

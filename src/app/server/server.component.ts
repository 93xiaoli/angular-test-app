import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
  .online{
    color: white;
  `]
})

export class ServerComponent {
  serverStatus = 'offline';
  constructor(){
    this.serverStatus = Math.random() > 0.5 ? 'offline' : 'online';
  }
  checkColor(){
    return this.serverStatus === 'offline' ? 'red' : 'green';
  }
}

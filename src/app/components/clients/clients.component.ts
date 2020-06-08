import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: Client[];
  x: any;
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    // this.clientService.getX().forEach(element => {
    //   console.log(element);
    // });111112222
    
      this.clientService.getClients().subscribe(client =>
        console.log(client));
      
    
  }

}

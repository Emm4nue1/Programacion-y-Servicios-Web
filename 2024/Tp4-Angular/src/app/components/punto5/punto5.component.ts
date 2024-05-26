import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TicketService } from './service/ticket.service';
import { TIPO, ticket } from '../../models/ticket';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-punto5',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './punto5.component.html',
  styleUrl: './punto5.component.css'
})


export class Punto5Component {
parseFloat(arg0: string): number {
  return parseFloat(arg0);
}
  TIPO=TIPO;
  ticket:ticket = new ticket(0, 0,"", 0, TIPO.Local, new Date());

constructor(private ticketService: TicketService) {
  this.ticket = new ticket(0, 0,"", 0, TIPO.Local, new Date());
  console.log(this.ticketService.getTickets());
}

  editarTicket(id: number): void {
    const foundTicket = this.ticketService.getTicketId(id);
    if (foundTicket) {
      this.ticket = {...foundTicket}; // Crea una copia del ticket encontrado
    } else {
      console.log("Error: Ticket no encontrado");
    }
  }

    guardarTicket(): void {
    this.ticketService.addTicket(this.ticket);
    //this.ticket = new ticket(0, 0,"", 0, TIPO.Local, new Date());
  }

}

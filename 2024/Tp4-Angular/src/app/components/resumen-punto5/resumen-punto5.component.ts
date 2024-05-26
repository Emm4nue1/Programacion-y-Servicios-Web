import { Component } from '@angular/core';
import { TicketService } from '../punto5/service/ticket.service';
import { ticket } from '../../models/ticket';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-resumen-punto5',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './resumen-punto5.component.html',
  styleUrl: './resumen-punto5.component.css'
})

export class ResumenPunto5Component {
  tickets: ticket[] = [];

  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    this.tickets = this.ticketService.getTickets();
  }

  editarTicket(id: number): void {
  }

  eliminarTicket(id: number): void {
    this.ticketService.deleteTicket(id);
    this.tickets = this.ticketService.getTickets();
  }
  }


  


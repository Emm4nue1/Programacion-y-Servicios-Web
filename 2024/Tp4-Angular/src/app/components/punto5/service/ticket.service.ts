import { Injectable } from '@angular/core';
import { ticket,TIPO } from '../../../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private idIncrementar=0;
  boleteria:ticket[] = [];

  constructor() { }


  // Operacion buscar
  getTicketId(id: number): ticket | undefined {
    return this.boleteria.find(ticket => ticket.id === id);
  }

  // Operación de Crear
  addTicket(ticket:ticket): void {
    const existe = this.boleteria.some(t => t.dni === ticket.dni);
    if (existe) {
        console.log('El DNI ya existe');
        return;
    }

    if (ticket.tipo === TIPO.Local) {
        ticket.precio = ticket.precio-ticket.precio * 0.2;
    }
    const newTicket: ticket = {id: this.idIncrementar++, dni: ticket.dni,nombre: ticket.nombre,precio: ticket.precio,tipo: ticket.tipo,fecha: ticket.fecha};
    this.boleteria.push(newTicket);
  }

  // Operación de leer todo el Array
  getTickets(): ticket[] {
    return this.boleteria;
  }

  // Operación de Actualizar
  updateTicket(id: number, updatedTicket: ticket): void {
    const index = this.boleteria.findIndex(t => t.id === id);
    if (index !== -1) {
      this.boleteria[index] = updatedTicket;
    }
  }

  // Operación de Eliminar
  deleteTicket(id: number): void {
    const index = this.boleteria.findIndex(t => t.id === id);
    if (index !== -1) {
      this.boleteria.splice(index, 1);
    }
  }
}

import { Component } from '@angular/core';
import { QrService } from './service/qr.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-punto-d',
    imports: [FormsModule, RouterModule],
    templateUrl: './punto-d.component.html',
    styleUrl: './punto-d.component.css'
})
export class PuntoDComponent {
  texto:string="";
  qrCode:string="";

      constructor (private qrService:QrService ){}

      generarQr():void{
        this.qrService.getQr64(this.texto).subscribe((qr:any)=>{
        this.qrCode=qr;
        console.log(this.qrCode)
        })
      }
}

import { Component } from '@angular/core';
import { producto } from '../../models/producto';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-punto1',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './punto1.component.html',
  styleUrl: './punto1.component.css'
})
export class Punto1Component {
    punto1?: producto;
    articulos: producto [] = [
      new producto(1,"https://http2.mlstatic.com/D_NQ_NP_960302-MLA53383804563_012023-O.webp","Smart TV Motorola Led 43","Esta televisión Full HD con tecnología HDR ofrece una experiencia de visualización mejorada, con función Screen Share para compartir contenido fácilmente y acceso a YouTube. Con sistema operativo Android TV y capacidad de almacenamiento de 8GB, proporciona entretenimiento y conectividad en un solo lugar, permitiéndote conectar tus dispositivos mediante 2 puertos HDMI y 2 puertos USB.",344599),
      new producto(2,"https://http2.mlstatic.com/D_NQ_NP_2X_925314-MLU73036825910_112023-F.webp","Smart Tv Noblex 32","Disfruta de entretenimiento HD con Netflix en esta televisión Android que ofrece conectividad fácil para tus dispositivos a través de sus puertos HDMI y USB, todo en un elegante diseño de 71.9cm de ancho, 42.7cm de alto y 8.52cm de profundidad.",228961),
      new producto(3,"https://http2.mlstatic.com/D_NQ_NP_677196-MLU74154724021_012024-O.webp","Tv Smart Led Philips 32","Esta televisión ofrece una impresionante resolución HD, tecnología HDR para una calidad de imagen mejorada, sonido envolvente Dolby Audio, control por comando de voz, sistema operativo Google TV, una amplia capacidad de almacenamiento de 8GB y una conectividad versátil con 3 puertos HDMI y 2 puertos USB para tus dispositivos.",241885),
      new producto(4,"https://http2.mlstatic.com/D_NQ_NP_909532-MLA73280494860_122023-O.webp","Smart Tv Philco Led Hd 32","Esta televisión HD te permite controlarla por comando de voz gracias a su integración con Google Assistant, además de ofrecer acceso a Apple TV+ y funcionar con el sistema operativo Android. Con sus 2 puertos HDMI y puerto USB, puedes conectar fácilmente tus dispositivos. Sus dimensiones compactas de 72.4cm de ancho, 42.5cm de alto y 8.4cm de profundidad la hacen ideal para cualquier espacio.",239380),
      new producto(5,"https://http2.mlstatic.com/D_NQ_NP_2X_715392-MLU73210357537_122023-F.webp","Televisor Samsung Business Tv 55","Este televisor de 55 pulgadas ofrece una impresionante resolución 4K y tecnología HDR para una calidad de imagen mejorada. Con Samsung Business TV integrado, garantiza una experiencia de entretenimiento y conectividad incomparable. Además, cuenta con conexiones HDMI y USB para una fácil conexión de dispositivos. Sus dimensiones de 1230.5mm de ancho, 707.2mm de alto y 59.9mm de profundidad lo hacen ideal para cualquier espacio.",599999),
      new producto(6,"https://http2.mlstatic.com/D_NQ_NP_638468-MLU72922623123_112023-O.webp","Smart Tv Samsung Serie 8 Led 4k 65","Este televisor ofrece una impresionante resolución 4K y tecnología HDR para una calidad de imagen mejorada. Con Dolby Digital Plus, proporciona un sonido envolvente de alta calidad. Además, puedes controlarlo por comando de voz gracias a Google Assistant integrado y disfrutar de la función Screen Share para compartir contenido fácilmente. También incluye Samsung TV Plus para acceder a una amplia gama de contenido.",1199999)
    ];
    
    carrito: producto []=[];

    agregarCarrito(compra:producto) {
      if (!this.carrito.some(item => item.id === compra.id)) {
        compra.cantidad = 1;
        this.carrito.push(compra);
      } else {
        console.log("El producto ya está en el carrito");
      }

    }
    constructor(){
      console.log(this.carrito)
    }
  
}

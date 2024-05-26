import { Routes } from '@angular/router';
import { Punto1Component } from './components/punto1/punto1.component';
import { Punto2Component } from './components/punto2/punto2.component';
import { Punto5Component } from './components/punto5/punto5.component';
import { ResumenPunto5Component } from './components/resumen-punto5/resumen-punto5.component';

export const routes: Routes = [
    {path: "punto-1",component: Punto1Component},
    {path: "punto-2",component: Punto2Component},
    {path: "punto-5",component: Punto5Component},
    {path: "punto-5/resumen",component: ResumenPunto5Component}


];

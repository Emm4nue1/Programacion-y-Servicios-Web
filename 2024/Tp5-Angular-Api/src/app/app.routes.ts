import { Routes } from '@angular/router';
import { PuntoAComponent } from './components/punto-a/punto-a.component';
import { PuntoBComponent } from './components/punto-b/punto-b.component';
import { PuntoCComponent } from './components/punto-c/punto-c.component';
import { PuntoDComponent } from './components/punto-d/punto-d.component';

export const routes: Routes = [
    {path: "punto-A",component: PuntoAComponent},
    {path: "punto-B",component: PuntoBComponent},
    {path: "punto-C",component: PuntoCComponent},
    {path: "punto-D",component: PuntoDComponent},
];


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BarComponent } from './charts/bar/bar.component';
import { LineComponent } from './charts/line/line.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';


const routes: Routes = [
    { path: '', redirectTo: '/project', pathMatch: 'full' },
    { path: 'line-chart', component: LineComponent },
    { path: 'bar-chart', component: BarComponent },
    { path: 'project', component: FormInputsComponent }
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule,
    ],
})

export class RoutingModule {

}

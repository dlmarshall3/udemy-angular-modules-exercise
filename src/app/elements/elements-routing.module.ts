import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementshomeComponent } from './elementshome/elementshome.component';

const routes: Routes = [
  {path: 'elements', component: ElementshomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { ConfigComponent } from './config/config.component';

const routes: Routes = [
  {
    path:'',
    component: FormsComponent,
  },
  {
    path: 'data',
    component: ConfigComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

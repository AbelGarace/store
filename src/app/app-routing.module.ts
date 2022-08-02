import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbelcodeComponent } from './pages/abelcode/abelcode.component';

const routes: Routes = [
  {path: 'abelcode',component: AbelcodeComponent},
  { path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule) },
  {path: '**', redirectTo: '', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

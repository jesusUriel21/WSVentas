import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './cliente/cliente.component';
import { AuthGuard } from './Security/auth.guard';
import { LoginComponent} from './login/login.component';
import { VentaComponent } from './venta/venta.component';

const routes: Routes = [
  {path: '',redirectTo: '', pathMatch:'full', canActivate: [AuthGuard]},
  {path: "login", component: LoginComponent, },
  {path: "home", component: HomeComponent, canActivate: [AuthGuard]},
  {path: "cliente", component: ClienteComponent, canActivate: [AuthGuard]},  
  {path: "venta", component: VentaComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

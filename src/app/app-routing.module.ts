import { PasswordComponent } from './pages/password/password.component';
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'password',
    component: PasswordComponent
  }
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      paramsInheritanceStrategy: 'always',
      onSameUrlNavigation: 'reload'
    })
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}

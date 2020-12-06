import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPanelComponent } from './components/admin/admin-panel/admin-panel.component';
import { EditIllustrationComponent } from './components/admin/edit-illustration/edit-illustration.component';
import { LoginAdminComponent } from './components/admin/login-admin/login-admin.component';
import { AllIllustrationsComponent } from './components/user/all-illustrations/all-illustrations.component';
import { BiographieComponent } from './components/user/biographie/biographie.component';
import { ContactComponent } from './components/user/contact/contact.component';
import { HomeComponent } from './components/user/home/home.component';
import { IllustrationComponent } from './components/user/illustration/illustration.component';
import { AdminGuard } from './guards/admin.guard';


const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "biographie",
    component: BiographieComponent
  },
  {
    path: "illustrations",
    component: AllIllustrationsComponent
  },
  { 
    path: "illustration/:id",
    component: IllustrationComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "loginAdmin",
    component: LoginAdminComponent
  },
  {
    path: "adminPanel",
    component: AdminPanelComponent,
    canActivate: [AdminGuard]
  },
  {
    path: "editIllustration/:id",
    component: EditIllustrationComponent,
    canActivate:[AdminGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

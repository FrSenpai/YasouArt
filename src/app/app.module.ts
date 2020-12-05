import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/user/home/home.component';
import { NavigationComponent } from './components/user/navigation/navigation.component';
import { environment } from '../../src/environments/environment.prod';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NgxPaginationModule } from 'ngx-pagination';
import { FooterComponent } from './components/user/footer/footer.component';
import { BiographieComponent } from './components/user/biographie/biographie.component';
import { AllIllustrationsComponent } from './components/user/all-illustrations/all-illustrations.component';
import { IllustrationComponent } from './components/user/illustration/illustration.component';
import { ContactComponent } from './components/user/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginAdminComponent } from './components/admin/login-admin/login-admin.component';
import { AdminPanelComponent } from './components/admin/admin-panel/admin-panel.component';
import { AngularFirePerformanceModule, PerformanceMonitoringService } from '@angular/fire/performance';
import { EditGalleryComponent } from './components/admin/edit-gallery/edit-gallery.component';
import { EditIllustrationComponent } from './components/admin/edit-illustration/edit-illustration.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    FooterComponent,
    BiographieComponent,
    AllIllustrationsComponent,
    IllustrationComponent,
    ContactComponent,
    LoginAdminComponent,
    AdminPanelComponent,
    EditGalleryComponent,
    EditIllustrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirePerformanceModule,
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

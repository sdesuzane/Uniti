import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularToastifyModule, ToastService } from 'angular-toastify';
import { CardCadastroComponent } from 'src/shared/components/card-cadastro/card-cadastro.component';
import { AuthInterceptor } from 'src/shared/interceptor/AuthInterceptor.interceptor';
import { LoginCadastroService } from 'src/shared/services/login-cadastro.service';
import { SharedComponentModule } from '../shared/components/shared-component.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { PagesModule } from './pages/pages.module';
import { TelaPrincipalComponent } from './pages/tela-principal/tela-principal.component';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { provideNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [AppComponent, TelaPrincipalComponent, CardCadastroComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    PagesModule,
    FontAwesomeModule,
    AngularToastifyModule,
    PagesRoutingModule,
    SharedComponentModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  providers: [
    ToastService,
    provideNgxMask(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    LoginCadastroService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}

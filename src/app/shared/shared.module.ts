import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackValidatorComponent } from './components/feedback-validator/feedback-validator.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthService } from '../auth/services/auth.service';
import { UrlInterceptorService } from './services/url-interceptor.service';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FeedbackValidatorComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [
    RouterModule,
    FeedbackValidatorComponent,
    HeaderComponent,
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UrlInterceptorService,
      multi: true,
    },
  ],
})
export class SharedModule { }

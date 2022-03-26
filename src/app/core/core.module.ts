import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptorService } from './request-interceptor.service';

registerLocaleData(localePt);

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptorService, multi: true },
    { provide: LOCALE_ID, useValue: 'pt' }
  ]
})
export class CoreModule { }

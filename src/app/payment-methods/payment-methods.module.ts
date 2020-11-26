import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentMethodRoutingModule } from './payment-method-routing.module';
import { PaymentMethodsComponent } from './payment-methods.component';



@NgModule({
  declarations: [
    PaymentMethodsComponent
  ],
  imports: [
    CommonModule,
    PaymentMethodRoutingModule,
  ]
})
export class PaymentMethodsModule { }

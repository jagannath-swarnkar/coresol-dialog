import { Component, OnInit } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import { environment } from 'src/environments/environment';
// const Stripe = window['Stripe']
@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.scss']
})
export class PaymentMethodsComponent implements OnInit {
  private stripe: Stripe
  constructor(private fns: AngularFireFunctions) { }

  async ngOnInit() {
    this.stripe = await loadStripe(environment.stripe.testKey);
    const elements = this.stripe.elements();
    const style = {
      base: {
        color: '#32325d',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: (window.innerWidth <= 500) ? '12px' : '16px',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    };
    const card = elements.create('card', { style });


    card.mount('#card-element');

    card.on('change', (event) => {
      const displayError = document.getElementById('card-errors');
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }

    });

    const button = document.getElementById('button');
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const ownerInfo = {
        owner: {
          name : 'user'
        },
        amount: 20000,
        currency: 'usd'
      };
      this.stripe.createSource(card, ownerInfo).then((result) => {
        console.log(result);
        if (result.error) {
          const errorElement = document.getElementById('card-errors');
          errorElement.textContent = result.error.message;
        } else {
          this.stripeSourceHandler(result.source);
        }
      });
    });
  }


  private stripeSourceHandler(source): void {
    const callable = this.fns.httpsCallable('stripeChargeCall');
    const obs = callable(source);
    obs.subscribe(res => {
      console.log(res);
      if (res.result === 'SUCCESSFUL') {
        document.getElementsByClassName('text')[0].innerHTML = 'Flower Paid 💸, Thanks';
      } else {
        document.getElementsByClassName('text')[0].innerHTML = 'Something went wrong. 😞';
      }
    });
  }

  

}

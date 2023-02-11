import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';
import { StripeService, StripeCardComponent } from 'ngx-stripe';
import {
  StripeCardElementOptions,
  StripeElementsOptions,
  PaymentIntent,
} from '@stripe/stripe-js';
import { Observable, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
const ue = ['Francia', 'Spain', 'Deutschland', 'Portugal'];
const nonUe = ['Suiza', 'England'];

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {

  @ViewChild(StripeCardComponent) card!: StripeCardComponent;
  cardOptions: StripeCardElementOptions = {
    hidePostalCode:true,
    style: {
      base: {
        iconColor: 'red',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: 'red',
        },
      },
    },
  };
  portes = 0;
  elementsOptions: StripeElementsOptions = {
    locale: 'en',
  };
  envio = {
    apellido: '',
    nombre: '',
    email: '',
    direccion: '',
    ciudad: '',
    cp: '',
    pais: '',
  };

  nameStripe = new FormControl('',Validators.required);
  clienteForm = this.fb.group({
    apellido: ['',Validators.required],
    nombre: ['',Validators.required],
    email: [''],
    direccion: ['',Validators.required],
    ciudad: ['',Validators.required],
    cp: ['',Validators.required],
    pais: ['Suiza',Validators.required],

    apellido_fact: [''],
    nombre_fact: [''],
    email_fact: [''],
    direccion_fact: [''],
    ciudad_fact: [''],
    cp_fact: [''],

    pais_fact: ['Suiza'],
  });

  constructor(
    private http: HttpClient,
    private fb: UntypedFormBuilder,
    public cartService: CartService,
    private router: Router,
    private stripeService: StripeService
  ) {}

  ngOnInit(): void {}
  onSubmit() {
    console.log(this.clienteForm.value.pais);

    if (this.clienteForm.value.direccion_fact) {
      this.envio.apellido = this.clienteForm.value.apellido_fact;
      this.envio.nombre = this.clienteForm.value.nombre_fact;
      this.envio.direccion=this.clienteForm.value.direccion_fact;
      this.envio.email = this.clienteForm.value.email_fact;
      this.envio.ciudad = this.clienteForm.value.ciudad_fact;
      this.envio.cp = this.clienteForm.value.cp_fact;
      this.envio.pais = this.clienteForm.value.pais_fact;
    } else {
      this.envio.apellido = this.clienteForm.value.apellido;
      this.envio.nombre = this.clienteForm.value.nombre;
      this.envio.direccion=this.clienteForm.value.direccion;
      this.envio.email = this.clienteForm.value.email;
      this.envio.ciudad = this.clienteForm.value.ciudad;
      this.envio.cp = this.clienteForm.value.cp;

      this.envio.pais = this.clienteForm.value.pais;
    }
    if (ue.includes(this.envio.pais)) {
      this.portes = 5;
      this.cartService.totalPago = 5 + this.cartService.getTotalPrice();
    } else {
      this.portes = 8;
      this.cartService.totalPago = 8 + this.cartService.getTotalPrice();
    }
  }

  

  pay(): void {
    this.createPaymentIntent(this.cartService.totalPagoCompra)
      .pipe(
        switchMap((pi) =>
          this.stripeService.confirmCardPayment(pi.client_secret!, {
            payment_method: {
              card: this.card.element,
              billing_details: {
                name: this.nameStripe.value!,
              },
            },
          })
        )
      )
      .subscribe((result) => {
        if (result.error) {
          // Show error to your customer (e.g., insufficient funds)
          this.router.navigate(['/check-error']);
          console.log(result.error.message);
        } else {
          // The payment has been processed!
          this.router.navigate(['/thankyou']);
          if (result.paymentIntent!.status === 'succeeded') {
            // Show a success message to your customer
            this.cartService
              .ventaRealizada(this.envio, this.cartService.cartItemList)
              .subscribe((data) => {
                console.log(data);
              });
            console.log(this.envio.nombre, this.cartService.cartItemList);
          }
        }
      });
  }

  createPaymentIntent(amount: number): Observable<PaymentIntent> {
    return this.http.post<PaymentIntent>(
      `http://localhost:3000/create-payment-intent`,
      { amount }
    );
  }

}

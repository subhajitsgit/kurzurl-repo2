import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { PricingTab } from "@landing/enums/pricing-tabs.enum";
import { CreateCheckoutDto } from "@landing/interfaces/create-checkout.dto";
import { CheckoutResponse } from "@landing/interfaces/checkout-response.dto";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import { response } from "express";

@Component({
    selector: 'pricing',
    standalone: true,
    templateUrl: './pricing.component.html',
    styleUrl: './pricing.component.css'
})
export class PricingComponent {
    public activeTab: PricingTab;


    public readonly PRICING_TAB: typeof PricingTab;

    constructor (private http: HttpClient) {
        this.activeTab = PricingTab.Monthly;
        this.PRICING_TAB = PricingTab;
    }
    public changeActiveTab(tab: PricingTab): void {
        this.activeTab = tab;
    }
    async checkout(PlanName: string, Currency: string, Amount: number){
        const stripe = await loadStripe('pk_test_51SMRLHJLFJw1JPYAWo2m7Pl0O7NsU5V1seQOU05ulEgGFiAFSJgYQ9V4Z16CAHvu5P8yiZi7OYArGgd3VoxUjQkV00hRBiojFM') as Stripe;

        if (!stripe) {
        console.error('Stripe failed to load');
        return;
        }

        const checkoutDto: CreateCheckoutDto={
            name: PlanName,
            currency: Currency,
            amountInCents: Amount,
            successUrl: "http://localhost:56873/#pricing",
            cancelUrl: "http://localhost:56873/#pricing"
        };

        this.http.post<CheckoutResponse>('http://localhost:5057/api/Payment/checkout', checkoutDto).subscribe(async (session) => {
            window.location.href = session.url;
        });
    }
}
export interface CreateCheckoutDto{
    name:string;
    currency: string;
    amountInCents: number;
    successUrl: string;
    cancelUrl: string;
}
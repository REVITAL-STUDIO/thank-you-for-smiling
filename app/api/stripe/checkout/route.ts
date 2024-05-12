import { NextResponse } from "next/server";
import Stripe from "stripe";


// api handler for processing donation payment
export async function POST(request: Request) {
    if (!process.env.STRIPE_SECRET) {
        throw new Error('Stripe secret key is not defined in environment variables');
      }
    const stripe = new Stripe(process.env.STRIPE_SECRET);
    const amount  = await request.json();
    console.log("in checkout endpoint")
    console.log("amount: ", amount);

    try {

        const allPrices = await stripe.prices.list({
            product: 'prod_Q4mvzskAECCpaV',
        });
    
        let priceId;
        for (const price of allPrices.data) {
            if (price.unit_amount === amount * 100) {
                priceId = price.id;
                break; 
            }
        }
    
        if (!priceId) {
            const newPrice = await stripe.prices.create({
                unit_amount: amount * 100,
                currency: 'usd',
                product: 'prod_Q4mvzskAECCpaV',
            });
            priceId = newPrice.id;
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [{
                price: priceId,
                quantity: 1,
            }],
            mode: 'payment',
            success_url: `${process.env.NEXT_BASE_URL}/success.html?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.NEXT_BASE_URL}/donations`,
        });


        return NextResponse.json(session.url, { status: 200 });

    } catch (error) {
        console.error("Error creating Checkout Session:", error);
        return NextResponse.json({ error: "Failed to create Checkout Session" }, { status: 500 });
    }
}
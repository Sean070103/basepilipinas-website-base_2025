"use client";

import React, { useRef } from "react";
import CodeBlock from "@/components/CodeBlock";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function AcceptPaymentsPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  const paymentButtonCode = `import { PaymentButton } from '@base/payments';

function Checkout() {
  return (
    <PaymentButton
      amount="0.1"
      currency="ETH"
      onSuccess={(tx) => {
        console.log('Payment successful:', tx);
      }}
      onError={(error) => {
        console.error('Payment failed:', error);
      }}
    >
      Pay with Crypto
    </PaymentButton>
  );
}`;

  const subscriptionCode = `import { useSubscription } from '@base/payments';

function SubscriptionManager() {
  const { subscribe, cancel, status } = useSubscription({
    planId: 'premium_monthly',
    amount: '0.05',
    interval: 'month'
  });

  return (
    <div>
      <button onClick={subscribe} disabled={status === 'active'}>
        Subscribe
      </button>
      {status === 'active' && (
        <button onClick={cancel}>Cancel Subscription</button>
      )}
    </div>
  );
}`;

  const invoiceCode = `import { createInvoice } from '@base/payments';

async function generateInvoice(order) {
  const invoice = await createInvoice({
    items: order.items,
    currency: 'USDC',
    dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    metadata: {
      orderId: order.id,
      customerEmail: order.email
    }
  });

  return invoice;
}`;

  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-6">Accept Crypto Payments</h1>

      <p className="text-lg text-white/70 mb-8">
        Learn how to accept cryptocurrency payments in your dApp. This guide
        covers one-time payments, subscriptions, and invoice generation.
      </p>

      <div className="relative">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto space-x-8 pb-4 scrollbar-hide"
        >
          <div className="min-w-[300px] space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-4">One-Time Payments</h2>
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3">Payment Button</h3>
                <p className="text-white/70 mb-4">
                  Add a payment button to your checkout flow:
                </p>
                <div className="mt-4">
                  <CodeBlock code={paymentButtonCode} />
                </div>
              </div>
            </section>
          </div>

          <div className="min-w-[300px] space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Subscriptions</h2>
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3">Subscription Manager</h3>
                <p className="text-white/70 mb-4">
                  Implement recurring payments:
                </p>
                <div className="mt-4">
                  <CodeBlock code={subscriptionCode} />
                </div>
              </div>
            </section>
          </div>

          <div className="min-w-[300px] space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Invoices</h2>
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3">Invoice Generation</h3>
                <p className="text-white/70 mb-4">
                  Generate and manage invoices:
                </p>
                <div className="mt-4">
                  <CodeBlock code={invoiceCode} />
                </div>
              </div>
            </section>
          </div>
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

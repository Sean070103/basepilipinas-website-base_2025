"use client";

import React from "react";
import CodeBlock from "@/components/CodeBlock";

export default function AcceptPaymentsPage() {
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
    <div className="max-w-4xl mx-auto py-8 px-4 max-sm:max-w-[330px]">
      <h1 className="text-4xl font-bold mb-6">Accept Crypto Payments</h1>
      <p className="text-gray-300 mb-8">
        Learn how to accept cryptocurrency payments in your dApp. This guide covers
        one-time payments, subscriptions, and invoice generation.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">One-Time Payments</h2>
        <p className="text-gray-300 mb-4">
          Implement secure one-time crypto payments with our PaymentButton component.
        </p>
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <CodeBlock code={paymentButtonCode} />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Subscriptions</h2>
        <p className="text-gray-300 mb-4">
          Set up recurring payments with automatic billing and management features.
        </p>
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <CodeBlock code={subscriptionCode} />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Invoices</h2>
        <p className="text-gray-300 mb-4">
          Generate and manage professional crypto invoices for your customers.
        </p>
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <CodeBlock code={invoiceCode} />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <div className="space-y-4">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Payment Processing</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Verify transaction confirmations before fulfilling orders</li>
              <li>Implement proper error handling for failed transactions</li>
              <li>Use webhooks for payment notifications</li>
              <li>Support multiple payment currencies</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Security Measures</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Validate payment amounts and addresses</li>
              <li>Implement rate limiting for payment attempts</li>
              <li>Use secure payment channels</li>
              <li>Monitor for suspicious activity</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Customer Experience</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Provide clear payment instructions</li>
              <li>Show real-time payment status updates</li>
              <li>Send payment confirmation emails</li>
              <li>Offer customer support for payment issues</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

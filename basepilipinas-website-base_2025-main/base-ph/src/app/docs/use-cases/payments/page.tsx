"use client";

export default function AcceptPaymentsPage() {
  const paymentIntegrationCode = `import { usePayments } from '@onchainkit/payments';

function PaymentButton() {
  const { createPayment, status } = usePayments();

  const handlePayment = async () => {
    try {
      const payment = await createPayment({
        amount: '0.1',
        currency: 'ETH',
        recipient: '0x...',
        metadata: {
          productId: '123',
          orderId: 'order_456'
        }
      });
      
      console.log('Payment created:', payment);
    } catch (error) {
      console.error('Payment failed:', error);
    }
  };

  return (
    <button 
      onClick={handlePayment}
      disabled={status === 'processing'}
    >
      {status === 'processing' ? 'Processing...' : 'Pay with ETH'}
    </button>
  );
}`;

  const webhookHandlerCode = `// pages/api/payment-webhook.ts
import { verifyPaymentSignature } from '@onchainkit/payments';

export default async function handler(req, res) {
  const signature = req.headers['x-payment-signature'];
  const payload = req.body;

  try {
    const isValid = await verifyPaymentSignature(payload, signature);
    if (!isValid) {
      return res.status(400).json({ error: 'Invalid signature' });
    }

    // Handle successful payment
    if (payload.status === 'completed') {
      await updateOrderStatus(payload.metadata.orderId);
    }

    res.status(200).json({ received: true });
  } catch (error) {
    res.status(400).json({ error: 'Webhook error' });
  }
}`;

  const multiTokenCode = `import { useSupportedTokens } from '@onchainkit/payments';

function TokenSelector() {
  const { tokens, selectedToken, selectToken } = useSupportedTokens();

  return (
    <select 
      value={selectedToken?.symbol} 
      onChange={(e) => selectToken(e.target.value)}
    >
      {tokens.map((token) => (
        <option key={token.address} value={token.symbol}>
          {token.name} ({token.symbol})
        </option>
      ))}
    </select>
  );
}`;

  const subscriptionCode = `import { useSubscriptions } from '@onchainkit/payments';

function SubscriptionForm() {
  const { createSubscription } = useSubscriptions();

  const startSubscription = async () => {
    try {
      const subscription = await createSubscription({
        amount: '10',
        currency: 'USDC',
        interval: 'monthly',
        recipient: '0x...',
        metadata: {
          planId: 'premium',
          userId: 'user_123'
        }
      });
      
      console.log('Subscription created:', subscription);
    } catch (error) {
      console.error('Subscription failed:', error);
    }
  };

  return (
    <button onClick={startSubscription}>
      Subscribe Monthly
    </button>
  );
}`;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Accept Crypto Payments</h1>
        <p className="text-lg text-white/70 mb-8">
          Learn how to integrate crypto payments into your application using
          OnchainKit&apos;s payment features.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Basic Payment Integration
        </h2>
        <div className="bg-white/5 rounded-lg p-6">
          <h3 className="text-xl font-medium mb-3">Payment Button</h3>
          <p className="text-white/70 mb-4">
            Implement a simple payment button that accepts ETH or other tokens:
          </p>
          <div className="mt-4 bg-black/30 rounded p-4">
            <pre className="text-sm">
              <code>{paymentIntegrationCode}</code>
            </pre>
          </div>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
              <span className="text-white/70">
                Simple one-click payment flow
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
              <span className="text-white/70">Built-in error handling</span>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Webhook Integration</h2>
        <div className="bg-white/5 rounded-lg p-6">
          <h3 className="text-xl font-medium mb-3">Payment Webhooks</h3>
          <p className="text-white/70 mb-4">
            Handle payment notifications and update your backend:
          </p>
          <div className="mt-4 bg-black/30 rounded p-4">
            <pre className="text-sm">
              <code>{webhookHandlerCode}</code>
            </pre>
          </div>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
              <span className="text-white/70">
                Secure signature verification
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
              <span className="text-white/70">Real-time payment updates</span>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Multi-Token Support</h2>
        <div className="bg-white/5 rounded-lg p-6">
          <h3 className="text-xl font-medium mb-3">Token Selection</h3>
          <p className="text-white/70 mb-4">
            Allow users to pay with their preferred token:
          </p>
          <div className="mt-4 bg-black/30 rounded p-4">
            <pre className="text-sm">
              <code>{multiTokenCode}</code>
            </pre>
          </div>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
              <span className="text-white/70">Support multiple tokens</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
              <span className="text-white/70">Automatic price conversion</span>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Subscription Payments</h2>
        <div className="bg-white/5 rounded-lg p-6">
          <h3 className="text-xl font-medium mb-3">Recurring Payments</h3>
          <p className="text-white/70 mb-4">
            Implement subscription-based payments:
          </p>
          <div className="mt-4 bg-black/30 rounded p-4">
            <pre className="text-sm">
              <code>{subscriptionCode}</code>
            </pre>
          </div>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
              <span className="text-white/70">Automated recurring charges</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
              <span className="text-white/70">Flexible billing intervals</span>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Security</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">
                  Implement proper access controls
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">
                  Use secure payment channels
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">Validate all transactions</span>
              </li>
            </ul>
          </div>
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">User Experience</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">
                  Provide clear transaction status
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">
                  Implement proper error handling
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">
                  Support multiple payment methods
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

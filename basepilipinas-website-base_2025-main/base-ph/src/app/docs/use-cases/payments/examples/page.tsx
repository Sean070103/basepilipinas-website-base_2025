"use client";

export default function PaymentExamplesPage() {
  const ecommerceCode = `import { usePayments, usePaymaster } from '@onchainkit/payments';

function EcommerceCheckout() {
  const { createPayment } = usePayments();
  const { sponsorTransaction } = usePaymaster();

  const handleCheckout = async (cart) => {
    try {
      // Sponsor the transaction for better UX
      const sponsoredPayment = await sponsorTransaction({
        to: '0x...',
        value: cart.total,
        data: '0x...'
      });

      // Create the payment
      const payment = await createPayment({
        amount: cart.total,
        currency: 'USDC',
        recipient: process.env.MERCHANT_ADDRESS,
        metadata: {
          orderId: cart.id,
          items: cart.items,
          shipping: cart.shipping
        }
      });

      // Handle success
      await updateOrderStatus(cart.id, 'paid');
      await sendOrderConfirmation(cart.email);

    } catch (error) {
      console.error('Checkout failed:', error);
      // Handle error appropriately
    }
  };

  return (
    <button onClick={() => handleCheckout(currentCart)}>
      Complete Purchase
    </button>
  );
}`;

  const subscriptionCode = `import { useSubscriptions } from '@onchainkit/payments';

function SubscriptionManager() {
  const { 
    createSubscription, 
    cancelSubscription,
    updateSubscription 
  } = useSubscriptions();

  const handleSubscribe = async (plan) => {
    try {
      const subscription = await createSubscription({
        amount: plan.price,
        currency: 'USDC',
        interval: plan.interval,
        recipient: process.env.MERCHANT_ADDRESS,
        metadata: {
          planId: plan.id,
          userId: currentUser.id,
          features: plan.features
        }
      });

      // Handle success
      await updateUserSubscription(currentUser.id, subscription.id);
      await sendWelcomeEmail(currentUser.email, plan.name);

    } catch (error) {
      console.error('Subscription failed:', error);
      // Handle error appropriately
    }
  };

  return (
    <div>
      <button onClick={() => handleSubscribe(selectedPlan)}>
        Start Subscription
      </button>
      <button onClick={() => updateSubscription(subId, { amount: '20' })}>
        Upgrade Plan
      </button>
      <button onClick={() => cancelSubscription(subId)}>
        Cancel Subscription
      </button>
    </div>
  );
}`;

  const marketplaceCode = `import { usePayments, useSplitPayment } from '@onchainkit/payments';

function MarketplaceListing() {
  const { createPayment } = usePayments();
  const { createSplitPayment } = useSplitPayment();

  const handlePurchase = async (listing) => {
    try {
      // Calculate fees
      const platformFee = listing.price * 0.025; // 2.5% platform fee
      const creatorAmount = listing.price - platformFee;

      // Create split payment
      const payment = await createSplitPayment({
        amount: listing.price,
        currency: 'ETH',
        recipients: [
          { 
            address: listing.creatorAddress, 
            share: 97.5 // 97.5% to creator
          },
          { 
            address: process.env.PLATFORM_ADDRESS, 
            share: 2.5  // 2.5% to platform
          }
        ],
        metadata: {
          listingId: listing.id,
          type: listing.type,
          buyer: currentUser.address
        }
      });

      // Handle success
      await transferNFT(listing.tokenId, currentUser.address);
      await updateListingStatus(listing.id, 'sold');

    } catch (error) {
      console.error('Purchase failed:', error);
      // Handle error appropriately
    }
  };

  return (
    <button onClick={() => handlePurchase(currentListing)}>
      Buy Now
    </button>
  );
}`;

  const donationCode = `import { usePayments, useTokens } from '@onchainkit/payments';

function DonationForm() {
  const { createPayment } = usePayments();
  const { tokens, selectedToken, selectToken } = useTokens();

  const handleDonation = async (amount) => {
    try {
      const payment = await createPayment({
        amount,
        currency: selectedToken.symbol,
        recipient: process.env.CHARITY_ADDRESS,
        metadata: {
          donorId: currentUser.id,
          campaign: 'winter_2024',
          anonymous: false
        }
      });

      // Handle success
      await updateCampaignTotal(payment.amount);
      await sendThankYouEmail(currentUser.email);
      
    } catch (error) {
      console.error('Donation failed:', error);
      // Handle error appropriately
    }
  };

  return (
    <div>
      <select 
        value={selectedToken?.symbol} 
        onChange={(e) => selectToken(e.target.value)}
      >
        {tokens.map((token) => (
          <option key={token.address} value={token.symbol}>
            {token.name}
          </option>
        ))}
      </select>
      <input 
        type="number" 
        placeholder="Amount" 
        onChange={(e) => setAmount(e.target.value)} 
      />
      <button onClick={() => handleDonation(amount)}>
        Donate Now
      </button>
    </div>
  );
}`;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Payment Examples</h1>
        <p className="text-lg text-white/70 mb-8">
          Real-world examples of implementing payment features in different scenarios.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-4">E-commerce Checkout</h2>
        <div className="bg-white/5 rounded-lg p-6">
          <h3 className="text-xl font-medium mb-3">Shopping Cart Checkout</h3>
          <p className="text-white/70 mb-4">
            Implement a complete e-commerce checkout flow with gasless transactions:
          </p>
          <div className="mt-4 bg-black/30 rounded p-4">
            <pre className="text-sm">
              <code>{ecommerceCode}</code>
            </pre>
          </div>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
              <span className="text-white/70">Gasless transactions for better UX</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
              <span className="text-white/70">Order metadata and confirmation</span>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Subscription Management</h2>
        <div className="bg-white/5 rounded-lg p-6">
          <h3 className="text-xl font-medium mb-3">SaaS Subscriptions</h3>
          <p className="text-white/70 mb-4">
            Handle subscription creation, updates, and cancellations:
          </p>
          <div className="mt-4 bg-black/30 rounded p-4">
            <pre className="text-sm">
              <code>{subscriptionCode}</code>
            </pre>
          </div>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
              <span className="text-white/70">Complete subscription lifecycle</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
              <span className="text-white/70">Plan upgrades and downgrades</span>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">NFT Marketplace</h2>
        <div className="bg-white/5 rounded-lg p-6">
          <h3 className="text-xl font-medium mb-3">Split Payments</h3>
          <p className="text-white/70 mb-4">
            Implement marketplace purchases with revenue sharing:
          </p>
          <div className="mt-4 bg-black/30 rounded p-4">
            <pre className="text-sm">
              <code>{marketplaceCode}</code>
            </pre>
          </div>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
              <span className="text-white/70">Automatic fee distribution</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
              <span className="text-white/70">NFT transfer handling</span>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Donation Platform</h2>
        <div className="bg-white/5 rounded-lg p-6">
          <h3 className="text-xl font-medium mb-3">Multi-Token Donations</h3>
          <p className="text-white/70 mb-4">
            Accept donations in multiple tokens:
          </p>
          <div className="mt-4 bg-black/30 rounded p-4">
            <pre className="text-sm">
              <code>{donationCode}</code>
            </pre>
          </div>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
              <span className="text-white/70">Multiple token support</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
              <span className="text-white/70">Campaign tracking</span>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Documentation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Basic Features</h3>
            <p className="text-white/70">
              Return to basic payment features.
            </p>
            <a href="/docs/use-cases/payments" className="mt-4 text-blue-400 hover:text-blue-300 transition-colors inline-block">
              ← Back to Payments
            </a>
          </div>
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Advanced Features</h3>
            <p className="text-white/70">
              Learn about advanced payment features.
            </p>
            <a href="/docs/use-cases/payments/advanced" className="mt-4 text-blue-400 hover:text-blue-300 transition-colors inline-block">
              Advanced Guide →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 
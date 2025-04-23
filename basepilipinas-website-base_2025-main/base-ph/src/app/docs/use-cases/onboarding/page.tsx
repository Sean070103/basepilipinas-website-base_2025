"use client";

export default function UserOnboardingPage() {
  return (
    <div className="space-y-8 max-sm:max-w-[330px]">
      <div>
        <h1 className="text-4xl font-bold mb-4">User Onboarding</h1>
        <p className="text-lg text-white/70 mb-8">
          Create a seamless onboarding experience for users new to Web3 and
          Base. Learn how to implement social logins, wallet creation, and
          progressive user journeys.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Social Login Integration
        </h2>
        <div className="bg-white/5 rounded-lg p-6">
          <h3 className="text-xl font-medium mb-3">Implementing OAuth</h3>
          <p className="text-white/70 mb-4">
            Enable users to sign in with their existing social accounts and
            create a Web3 wallet automatically.
          </p>
          <div className="mt-4 bg-black/30 rounded p-4">
            <pre className="text-sm overflow-x-scroll">
              <code>
                {`import { useOAuth } from '@base/auth'
import { useCreateWallet } from '@base/wallet'

export function SocialLogin() {
  const { signIn, user } = useOAuth({
    providers: ['google', 'twitter', 'discord'],
    onSuccess: async (user) => {
      // Create wallet for new users
      if (!user.hasWallet) {
        await createWallet(user)
      }
    }
  })

  return (
    <div className="space-y-4">
      <button onClick={() => signIn('google')}>
        Continue with Google
      </button>
      <button onClick={() => signIn('twitter')}>
        Continue with Twitter
      </button>
      <button onClick={() => signIn('discord')}>
        Continue with Discord
      </button>
    </div>
  )
}`}
              </code>
            </pre>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Smart Wallet Creation</h2>
        <div className="bg-white/5 rounded-lg p-6">
          <h3 className="text-xl font-medium mb-3">
            Account Abstraction Setup
          </h3>
          <p className="text-white/70 mb-4">
            Create smart contract wallets for users with social recovery and
            advanced features.
          </p>
          <div className="mt-4 bg-black/30 rounded p-4">
            <pre className="text-sm overflow-x-scroll">
              <code>
                {`import { createSmartWallet } from '@base/wallet'

async function createWallet(user) {
  const wallet = await createSmartWallet({
    owner: user.id,
    guardians: [
      user.email, // Email recovery
      user.phoneNumber, // SMS recovery
    ],
    features: {
      socialRecovery: true,
      gasAbstraction: true,
      batchTransactions: true
    }
  })

  return wallet
}`}
              </code>
            </pre>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Progressive Disclosure</h2>
        <div className="space-y-6">
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Step-by-Step Flow</h3>
            <p className="text-white/70 mb-4">
              Guide users through Web3 concepts progressively as they explore
              your app.
            </p>
            <div className="mt-4 bg-black/30 rounded p-4">
              <pre className="text-sm overflow-x-scroll">
                <code className="overflow-x-scroll">
                  {`import { OnboardingFlow } from '@base/onboarding'

export function ProgressiveOnboarding() {
  return (
    <OnboardingFlow
      steps={[
        {
          id: 'welcome',
          title: 'Welcome to Web3',
          content: <WelcomeStep />,
          isCompleted: (user) => user.hasWallet
        },
        {
          id: 'wallet',
          title: 'Your Digital Wallet',
          content: <WalletStep />,
          isCompleted: (user) => user.hasCompletedTutorial
        },
        {
          id: 'first-transaction',
          title: 'Your First Transaction',
          content: <TransactionStep />,
          isCompleted: (user) => user.hasCompletedFirstTx
        }
      ]}
      onComplete={(user) => {
        // Mark onboarding as complete
        updateUserProgress(user.id, 'onboarding_complete')
      }}
    />
  )
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">User Experience</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">
                  Hide blockchain complexity initially
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">
                  Provide clear explanations of Web3 concepts
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">
                  Offer multiple recovery options
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Security</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">
                  Implement proper authentication flows
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">Secure key management</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">Regular security audits</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

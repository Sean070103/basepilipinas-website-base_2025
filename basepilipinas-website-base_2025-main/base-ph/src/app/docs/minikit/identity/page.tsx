"use client";

import React from "react";
import CodeBlock from "@/components/CodeBlock";

export default function IdentityAndSocialPage() {
  const identityVerificationCode = `import { useIdentity } from '@minikit/identity';

function IdentityVerification() {
  const { verify, isVerified, isLoading } = useIdentity();

  const handleVerify = async () => {
    try {
      await verify({
        provider: 'coinbase',
        proof: '...'
      });
    } catch (error) {
      console.error('Verification failed:', error);
    }
  };

  return (
    <div>
      <button onClick={handleVerify} disabled={isLoading}>
        {isLoading ? 'Verifying...' : 'Verify Identity'}
      </button>
      {isVerified && <p>Identity verified!</p>}
    </div>
  );
}`;

  const socialRecoveryCode = `import { useSocialRecovery } from '@minikit/identity';

function SocialRecovery() {
  const { setupGuardians, initiateRecovery } = useSocialRecovery();

  const handleSetup = async () => {
    await setupGuardians({
      guardians: ['0x123...', '0x456...'],
      threshold: 2
    });
  };

  const handleRecovery = async () => {
    await initiateRecovery({
      newOwner: '0x789...'
    });
  };

  return (
    <div>
      <button onClick={handleSetup}>Setup Guardians</button>
      <button onClick={handleRecovery}>Initiate Recovery</button>
    </div>
  );
}`;

  const reputationSystemCode = `import { useReputation } from '@minikit/identity';

function ReputationDisplay() {
  const { score, history } = useReputation();

  return (
    <div>
      <h3>Reputation Score: {score}</h3>
      <ul>
        {history.map((event, index) => (
          <li key={index}>{event.description}</li>
        ))}
      </ul>
    </div>
  );
}`;

  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-6">Identity & Social Features</h1>
      
      <p className="text-lg text-white/70 mb-8">
        MiniKit provides powerful identity verification and social features to enhance user experience and security.
        These features include identity verification, social recovery, and reputation systems.
      </p>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Identity Verification</h2>
          <div className="space-y-6">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">Identity Verification</h3>
              <p className="text-white/70 mb-4">
                Implement identity verification in your app:
              </p>
              <div className="mt-4">
                <CodeBlock code={identityVerificationCode} />
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Social Recovery</h2>
          <div className="space-y-6">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">Social Recovery Setup</h3>
              <p className="text-white/70 mb-4">
                Implement social recovery for enhanced security:
              </p>
              <div className="mt-4">
                <CodeBlock code={socialRecoveryCode} />
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Reputation System</h2>
          <div className="space-y-6">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">Reputation Tracking</h3>
              <p className="text-white/70 mb-4">
                Track and display user reputation:
              </p>
              <div className="mt-4">
                <CodeBlock code={reputationSystemCode} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

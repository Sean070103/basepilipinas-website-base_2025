"use client";

import React from "react";
import CodeBlock from "@/components/CodeBlock";

export default function IdentityAndSocialPage() {
  const identityCode = `import { useIdentity } from '@minikit/identity';

function IdentityVerification() {
  const { verify, status } = useIdentity();

  return (
    <button
      onClick={verify}
      disabled={status === 'verifying'}
    >
      {status === 'verifying' ? 'Verifying...' : 'Verify Identity'}
      </button>
  );
}`;

  const socialCode = `import { useSocialRecovery } from '@minikit/identity';

function RecoverySetup() {
  const { setupGuardians, isSettingUp } = useSocialRecovery();

  return (
    <button
      onClick={() => setupGuardians(['0x123...', '0x456...'])}
      disabled={isSettingUp}
    >
      {isSettingUp ? 'Setting up...' : 'Setup Recovery'}
    </button>
  );
}`;

  const reputationCode = `import { useReputation } from '@minikit/identity';

function ReputationScore() {
  const { score, history } = useReputation();

  return (
          <div>
      <p>Score: {score}</p>
      <ul>
        {history.map((event, i) => (
          <li key={i}>{event}</li>
      ))}
      </ul>
    </div>
  );
}`;

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 max-sm:max-w-[330px]">
      <h1 className="text-4xl font-bold mb-6">Identity & Social Features</h1>
      <p className="text-gray-300 mb-8">
        Enhance your dApp with identity verification, social recovery, and reputation systems.
        Learn how to implement these features using MiniKit&apos;s identity tools.
        </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Identity Verification</h2>
        <p className="text-gray-300 mb-4">
          Implement secure identity verification for your users.
          </p>
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <CodeBlock code={identityCode} />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Social Recovery</h2>
        <p className="text-gray-300 mb-4">
          Set up social recovery mechanisms to enhance wallet security.
          </p>
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <CodeBlock code={socialCode} />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Reputation System</h2>
        <p className="text-gray-300 mb-4">
          Track and display user reputation scores and history.
          </p>
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <CodeBlock code={reputationCode} />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <div className="space-y-4">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Security</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Implement proper identity verification checks</li>
              <li>Use secure storage for sensitive data</li>
              <li>Regular security audits</li>
              <li>Multi-factor authentication</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">User Experience</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Clear verification instructions</li>
              <li>Simple recovery process</li>
              <li>Transparent reputation scoring</li>
              <li>Responsive feedback</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Integration</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Seamless wallet integration</li>
              <li>Cross-platform compatibility</li>
              <li>API documentation</li>
              <li>Error handling</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

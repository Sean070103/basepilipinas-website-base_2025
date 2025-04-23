export default function ProvenPatternsPage() {
  const accountAbstractionCode = `import { createSmartAccount } from '@onchainkit/account';
import { useWallet } from '@onchainkit/wallet';

function SmartAccountSetup() {
  const { address } = useWallet();
  
  const setupSmartAccount = async () => {
    const account = await createSmartAccount({
      owner: address,
      entryPoint: '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789',
      factory: '0x3ABe5285dE84676fbe75856c631EF355BAf5Ef44'
    });
    
    return account;
  };

  return (
    <button onClick={setupSmartAccount}>
      Create Smart Account
    </button>
  );
}`;

  const batchTransactionsCode = `import { useBundler } from '@onchainkit/bundler';

interface Transaction {
  to: string;
  value: string;
  data: string;
}

function BatchTransactions() {
  const { bundleTransactions } = useBundler();

  const executeBatch = async (transactions: Transaction[]) => {
    const userOp = await bundleTransactions({
      transactions,
      gasLimit: '1000000'
    });

    await userOp.wait();
  };

  return (
    <button onClick={() => executeBatch([
      {
        to: '0x...',
        value: '0.1',
        data: '0x...'
      },
      {
        to: '0x...',
        value: '0.2',
        data: '0x...'
      }
    ])}>
      Execute Batch
    </button>
  );
}`;

  const gaslessTransactionsCode = `import { usePaymaster } from '@onchainkit/paymaster';

function GaslessTransaction() {
  const { sponsorTransaction } = usePaymaster({
    paymasterUrl: 'https://api.paymaster.base.org'
  });

  const sendTransaction = async () => {
    const userOp = await sponsorTransaction({
      to: '0x...',
      value: '0.1',
      data: '0x...'
    });

    await userOp.wait();
  };

  return (
    <button onClick={sendTransaction}>
      Send Gasless Transaction
    </button>
  );
}`;

  const sessionKeysCode = `import { createSessionKey } from '@onchainkit/account';

interface SessionKeyParams {
  validUntil: number;
  validAfter: number;
  permissions: string[];
}

function SessionKeyManagement() {
  const createTemporaryAccess = async (params: SessionKeyParams) => {
    const sessionKey = await createSessionKey({
      ...params,
      paymaster: '0x...',
      verifier: '0x...'
    });

    return sessionKey;
  };

  return (
    <button onClick={() => createTemporaryAccess({
      validUntil: Date.now() + 3600000, // 1 hour
      validAfter: Date.now(),
      permissions: ['0x...'] // specific method signatures
    })}>
      Create Session Key
    </button>
  );
}`;

  return (
    <div className="space-y-8 max-sm:max-w-[330px]">
      <div>
        <h1 className="text-4xl font-bold mb-4">Proven Patterns</h1>
        <p className="text-lg text-white/70 mb-8">
          Explore battle-tested patterns and best practices for building robust
          applications with OnchainKit. These patterns have been proven
          effective in production environments.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Account Abstraction</h2>
        <div className="bg-white/5 rounded-lg p-6">
          <h3 className="text-xl font-medium mb-3">Smart Account Setup</h3>
          <p className="text-white/70 mb-4">
            Implement account abstraction using smart accounts for enhanced
            security and user experience:
          </p>
          <div className="mt-4 bg-black/30 rounded p-4">
            <pre className="text-sm overflow-x-scroll">
              <code>{accountAbstractionCode}</code>
            </pre>
          </div>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
              <span className="text-white/70">
                Enables advanced features like social recovery
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
              <span className="text-white/70">
                Supports custom validation logic
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Batch Transactions</h2>
        <div className="bg-white/5 rounded-lg p-6">
          <h3 className="text-xl font-medium mb-3">Transaction Bundling</h3>
          <p className="text-white/70 mb-4">
            Optimize gas costs and improve UX by bundling multiple transactions:
          </p>
          <div className="mt-4 bg-black/30 rounded p-4">
            <pre className="text-sm overflow-x-scroll">
              <code>{batchTransactionsCode}</code>
            </pre>
          </div>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
              <span className="text-white/70">Reduces overall gas costs</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
              <span className="text-white/70">
                Simplifies complex operations
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Gasless Transactions</h2>
        <div className="bg-white/5 rounded-lg p-6">
          <h3 className="text-xl font-medium mb-3">Paymaster Integration</h3>
          <p className="text-white/70 mb-4">
            Implement gasless transactions using paymasters:
          </p>
          <div className="mt-4 bg-black/30 rounded p-4">
            <pre className="text-sm overflow-x-scroll">
              <code>{gaslessTransactionsCode}</code>
            </pre>
          </div>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
              <span className="text-white/70">Improves user onboarding</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
              <span className="text-white/70">
                Supports custom sponsorship rules
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Session Keys</h2>
        <div className="bg-white/5 rounded-lg p-6">
          <h3 className="text-xl font-medium mb-3">
            Temporary Access Management
          </h3>
          <p className="text-white/70 mb-4">
            Implement secure temporary access using session keys:
          </p>
          <div className="mt-4 bg-black/30 rounded p-4">
            <pre className="text-sm overflow-x-scroll">
              <code>{sessionKeysCode}</code>
            </pre>
          </div>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
              <span className="text-white/70">Time-bound permissions</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
              <span className="text-white/70">Method-level access control</span>
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
                  Always validate user operations
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">
                  Implement proper access controls
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">Use secure key management</span>
              </li>
            </ul>
          </div>
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Gas Optimization</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">Batch similar operations</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">
                  Use efficient data structures
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">Optimize calldata usage</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

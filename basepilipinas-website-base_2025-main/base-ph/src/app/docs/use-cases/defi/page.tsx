"use client";

export default function DeFiIntegrationPage() {
  return (
    <div className="space-y-8 max-sm:max-w-[330px]">
      <div>
        <h1 className="text-4xl font-bold mb-4">DeFi Integration</h1>
        <p className="text-lg text-white/70 mb-8">
          Here&apos;s how to integrate DeFi functionality into your dApp.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Token Swaps</h2>
        <div className="bg-white/5 rounded-lg p-6">
          <h3 className="text-xl font-medium mb-3">Implementing Token Swaps</h3>
          <p className="text-white/70 mb-4">
            Enable users to swap tokens using Base&apos;s liquidity pools and
            automated market makers.
          </p>

          <div className="mt-4 bg-black/30 rounded p-4">
            <pre className="text-sm overflow-x-scroll">
              <code>
                {`import { useContractWrite, useContractRead } from 'wagmi'
import { parseUnits, formatUnits } from 'ethers/lib/utils'

export function TokenSwap() {
  const { data: quote } = useContractRead({
    address: ROUTER_ADDRESS,
    abi: routerABI,
    functionName: 'getAmountsOut',
    args: [parseUnits('1', 18), [TOKEN_A, TOKEN_B]],
  })

  const { write: executeSwap } = useContractWrite({
    address: ROUTER_ADDRESS,
    abi: routerABI,
    functionName: 'swapExactTokensForTokens',
  })

  return (
    <div>
      <p>Rate: 1 TOKEN_A = {formatUnits(quote?.[1] || 0, 18)} TOKEN_B</p>
      <button onClick={() => executeSwap()}>Swap Tokens</button>
    </div>
  )
}`}
              </code>
            </pre>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Lending & Borrowing</h2>
        <div className="space-y-6">
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">
              Lending Protocol Integration
            </h3>
            <p className="text-white/70 mb-4">
              Implement lending and borrowing functionality using Base&apos;s
              lending protocols.
            </p>

            <div className="mt-4 bg-black/30 rounded p-4">
              <pre className="text-sm overflow-x-scroll">
                <code>
                  {`import { useLendingPool } from './hooks/lending'

export function LendingInterface() {
  const {
    deposit,
    withdraw,
    borrow,
    repay,
    userDeposits,
    userBorrows,
  } = useLendingPool()

  return (
    <div className="space-y-4">
      <div>
        <h4>Your Deposits</h4>
        <p>{formatUnits(userDeposits, 18)} ETH</p>
        <button onClick={() => deposit(amount)}>Deposit</button>
        <button onClick={() => withdraw(amount)}>Withdraw</button>
      </div>
      
      <div>
        <h4>Your Borrows</h4>
        <p>{formatUnits(userBorrows, 18)} ETH</p>
        <button onClick={() => borrow(amount)}>Borrow</button>
        <button onClick={() => repay(amount)}>Repay</button>
      </div>
    </div>
  )
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Yield Farming</h2>
        <div className="bg-white/5 rounded-lg p-6">
          <h3 className="text-xl font-medium mb-3">Staking and Rewards</h3>
          <p className="text-white/70 mb-4">
            Implement yield farming features to allow users to earn rewards by
            providing liquidity.
          </p>
          <div className="mt-4 bg-black/30 rounded p-4">
            <pre className="text-sm overflow-x-scroll">
              <code>
                {`import { useStaking } from './hooks/staking'

export function YieldFarming() {
  const {
    stake,
    unstake,
    getRewards,
    stakedBalance,
    rewardBalance,
  } = useStaking()

  return (
    <div>
      <div>
        <h4>Staked Balance</h4>
        <p>{formatUnits(stakedBalance, 18)} LP Tokens</p>
        <button onClick={() => stake(amount)}>Stake</button>
        <button onClick={() => unstake(amount)}>Unstake</button>
      </div>

      <div>
        <h4>Rewards</h4>
        <p>{formatUnits(rewardBalance, 18)} REWARD</p>
        <button onClick={getRewards}>Claim Rewards</button>
      </div>
    </div>
  )
}`}
              </code>
            </pre>
          </div>
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
                <span className="text-white/70">Use secure key management</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">
                  Monitor for suspicious activity
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Performance</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">Optimize gas usage</span>
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
                  Use efficient data structures
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

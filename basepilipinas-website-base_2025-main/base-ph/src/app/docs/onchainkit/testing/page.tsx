import React from 'react';

export default function TestingGuide() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-6">Testing Guide</h1>
      <p className="text-gray-300 mb-8">
        A comprehensive guide to testing your OnchainKit applications, covering unit tests, integration tests, 
        smart contract tests, and end-to-end testing scenarios.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Unit Testing Components</h2>
        <p className="text-gray-300 mb-4">
          Learn how to test individual components and hooks using React Testing Library and Jest.
        </p>
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <pre className="text-sm">
            <code>{`import { render, screen, fireEvent } from '@testing-library/react'
import { useWallet } from '@onchainkit/hooks'
import { WalletButton } from './WalletButton'

jest.mock('@onchainkit/hooks')

describe('WalletButton', () => {
  it('shows connect wallet when not connected', () => {
    (useWallet as jest.Mock).mockReturnValue({ 
      isConnected: false,
      connect: jest.fn()
    })
    
    render(<WalletButton />)
    expect(screen.getByText('Connect Wallet')).toBeInTheDocument()
  })

  it('shows address when connected', () => {
    (useWallet as jest.Mock).mockReturnValue({
      isConnected: true,
      address: '0x123...'
    })
    
    render(<WalletButton />)
    expect(screen.getByText('0x123...')).toBeInTheDocument()
  })
})`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Integration Testing</h2>
        <p className="text-gray-300 mb-4">
          Test complete user flows and component interactions using Playwright or Cypress.
        </p>
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <pre className="text-sm">
            <code>{`import { test, expect } from '@playwright/test'

test('complete payment flow', async ({ page }) => {
  await page.goto('/checkout')
  
  // Connect wallet
  await page.click('[data-testid="connect-wallet"]')
  await page.waitForSelector('[data-testid="wallet-connected"]')
  
  // Enter payment details
  await page.fill('[data-testid="amount"]', '0.1')
  await page.click('[data-testid="pay-button"]')
  
  // Verify transaction success
  await page.waitForSelector('[data-testid="success-message"]')
  const message = await page.textContent('[data-testid="success-message"]')
  expect(message).toContain('Payment successful')
})`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Smart Contract Testing</h2>
        <p className="text-gray-300 mb-4">
          Write comprehensive tests for your smart contracts using Hardhat and Chai.
        </p>
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <pre className="text-sm">
            <code>{`import { expect } from 'chai'
import { ethers } from 'hardhat'

describe('PaymentProcessor', function () {
  let paymentProcessor
  let owner
  let user

  beforeEach(async function () {
    [owner, user] = await ethers.getSigners()
    
    const PaymentProcessor = await ethers.getContractFactory('PaymentProcessor')
    paymentProcessor = await PaymentProcessor.deploy()
    await paymentProcessor.deployed()
  })

  it('should process payment correctly', async function () {
    const amount = ethers.utils.parseEther('1.0')
    
    await expect(paymentProcessor.connect(user).processPayment({
      value: amount
    }))
      .to.emit(paymentProcessor, 'PaymentProcessed')
      .withArgs(user.address, amount)
      
    const balance = await ethers.provider.getBalance(paymentProcessor.address)
    expect(balance).to.equal(amount)
  })
})`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <div className="space-y-4">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Test Organization</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Group tests logically by feature or component</li>
              <li>Use descriptive test names that explain the expected behavior</li>
              <li>Follow the Arrange-Act-Assert pattern</li>
              <li>Keep test files close to the components they test</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Coverage Guidelines</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Aim for 100% coverage of smart contracts</li>
              <li>Test all possible state transitions and edge cases</li>
              <li>Include both positive and negative test cases</li>
              <li>Test error conditions and revert scenarios</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Security Considerations</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Test access control and permissions</li>
              <li>Verify input validation and sanitization</li>
              <li>Test against common attack vectors</li>
              <li>Include fuzzing tests for critical functions</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
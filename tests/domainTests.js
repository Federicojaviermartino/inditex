// tests/domainTests.js
const Stock = require('../src/domain/stock');
const Proposal = require('../src/domain/proposal');
const assert = require('assert');
const { log } = require('../src/infrastructure/logger');

// Test Stock Allocation
function testStockAllocation() {
  log('Starting Stock Allocation Tests');
  const stock = new Stock('item1', 'ZAR', 10, 20, 'P-Z01-001');

  // Allocate for eCommerce (state 5)
  let allocation = stock.allocateStock(8, true);
  assert.strictEqual(allocation.allocatedUnits, 8, 'Incorrect allocated units for state 5');
  assert.strictEqual(stock.stockEm05, 2, 'Incorrect remaining stockEm05');

  // Allocate remaining for physical store (state 1)
  allocation = stock.allocateStock(12, false);
  assert.strictEqual(allocation.allocatedUnits, 12, 'Incorrect allocated units for state 1');
  assert.strictEqual(stock.stockEm01, 8, 'Incorrect remaining stockEm01');

  log('Stock allocation tests passed');
}

// Test Proposal Matching
function testProposalMatching() {
  log('Starting Proposal Matching Tests');
  const proposal = new Proposal('item1', 10, 'store1', 'CICLO 2 GRUPO A2', 1);

  const isMatch = proposal.matchesCriteria(['CICLO 2 GRUPO A2'], 1);
  assert.strictEqual(isMatch, true, 'Proposal did not match criteria');

  log('Proposal matching tests passed');
}

// Run domain tests
testStockAllocation();
testProposalMatching();


import { Transaction, RiskLevel, UserProfile, Subscription } from './types';

export const MOCK_USER_PROFILE: UserProfile = {
  typicalSpendingRange: [10, 200],
  frequentCategories: ['Grocery', 'Dining', 'Transportation', 'Utility'],
  usualLocations: ['New York, NY', 'Jersey City, NJ'],
  lastTransactionTime: new Date(Date.now() - 3600000).toISOString(),
};

export const INITIAL_TRANSACTIONS: Transaction[] = [
  {
    id: 'tx-1',
    amount: 45.50,
    merchant: 'Whole Foods Market',
    category: 'Grocery',
    timestamp: new Date(Date.now() - 86400000).toISOString(),
    location: 'New York, NY',
    riskLevel: RiskLevel.SAFE,
    explanation: 'Standard grocery purchase within your usual location and budget.'
  },
  {
    id: 'tx-2',
    amount: 12.00,
    merchant: 'Starbucks Coffee',
    category: 'Dining',
    timestamp: new Date(Date.now() - 172800000).toISOString(),
    location: 'New York, NY',
    riskLevel: RiskLevel.SAFE,
  },
  {
    id: 'tx-3',
    amount: 850.00,
    merchant: 'Luxury Watches Intl',
    category: 'Shopping',
    timestamp: new Date(Date.now() - 259200000).toISOString(),
    location: 'Dubai, UAE',
    riskLevel: RiskLevel.HIGH,
    explanation: 'High value transaction in an unusual international location.'
  }
];

export const MOCK_SUBSCRIPTIONS: Subscription[] = [
  {
    id: 'sub-1',
    name: 'Netflix Premium',
    cost: 19.99,
    billingCycle: 'monthly',
    status: 'active',
    aiInsight: 'Used daily. Good value for money.'
  },
  {
    id: 'sub-2',
    name: 'Gym Membership',
    cost: 55.00,
    billingCycle: 'monthly',
    lastUsed: new Date(Date.now() - 45 * 86400000).toISOString(),
    status: 'unused',
    aiInsight: 'No activity detected for 45 days. Potential $55 monthly saving.'
  },
  {
    id: 'sub-3',
    name: 'Premium Cooking App',
    cost: 9.99,
    billingCycle: 'monthly',
    status: 'risky',
    aiInsight: 'Duplicate functionality with your free Foodie account.'
  }
];

export const CATEGORIES = ['Grocery', 'Dining', 'Shopping', 'Travel', 'Utility', 'Electronics', 'Entertainment'];

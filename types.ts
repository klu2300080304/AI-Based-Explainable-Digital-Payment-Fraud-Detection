
export enum RiskLevel {
  SAFE = 'SAFE',
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL'
}

export interface Transaction {
  id: string;
  amount: number;
  merchant: string;
  category: string;
  timestamp: string;
  location: string;
  riskLevel: RiskLevel;
  explanation?: string;
}

export interface UserProfile {
  typicalSpendingRange: [number, number];
  frequentCategories: string[];
  usualLocations: string[];
  lastTransactionTime: string;
}

export interface RiskAnalysis {
  riskScore: number;
  riskLevel: RiskLevel;
  reasons: string[];
  recommendation: string;
  confidence: number;
}

export interface Subscription {
  id: string;
  name: string;
  cost: number;
  billingCycle: 'monthly' | 'yearly';
  lastUsed?: string;
  status: 'active' | 'risky' | 'unused';
  aiInsight: string;
}

export interface ScamAnalysis {
  isScam: boolean;
  threatLevel: RiskLevel;
  detectedPatterns: string[];
  explanation: string;
  advice: string;
}

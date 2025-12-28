
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import RiskAnalyzer from './components/RiskAnalyzer';
import TransactionList from './components/TransactionList';
import SubscriptionGuard from './components/SubscriptionGuard';
import ScamShield from './components/ScamShield';
import { INITIAL_TRANSACTIONS } from './constants.tsx';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'analyzer':
        return <RiskAnalyzer />;
      case 'subscriptions':
        return <SubscriptionGuard />;
      case 'scam-shield':
        return <ScamShield />;
      case 'history':
        return <TransactionList transactions={INITIAL_TRANSACTIONS} />;
      default:
        return <Dashboard />;
    }
  };

  const getHeaderTitle = () => {
    switch (activeTab) {
      case 'dashboard': return 'Financial Overview';
      case 'analyzer': return 'AI Risk Analysis';
      case 'subscriptions': return 'Subscription Guard';
      case 'scam-shield': return 'Scam Detection';
      case 'history': return 'Transaction Ledger';
      default: return 'GuardiaPay';
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 p-4 md:p-10 max-w-7xl mx-auto w-full">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-xs font-bold">G</div>
            <span className="font-bold text-slate-800">GuardiaPay</span>
          </div>
          <button className="w-10 h-10 bg-white rounded-full border border-slate-200 flex items-center justify-center">
            🔔
          </button>
        </div>

        <header className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-indigo-600 text-sm font-bold uppercase tracking-widest mb-1">Welcome Back, Alex</p>
            <h1 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">{getHeaderTitle()}</h1>
          </div>
          
          <div className="flex gap-3">
            <button className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
              Reports
            </button>
            <button 
              onClick={() => setActiveTab('analyzer')}
              className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
            >
              Check Fraud Risk
            </button>
          </div>
        </header>

        <div className="pb-24">
          {renderContent()}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden fixed bottom-6 left-6 right-6 bg-white/90 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-4 flex justify-around items-center z-50">
          <button onClick={() => setActiveTab('dashboard')} className={`p-2 rounded-xl ${activeTab === 'dashboard' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 'text-slate-400'}`}>📊</button>
          <button onClick={() => setActiveTab('analyzer')} className={`p-2 rounded-xl ${activeTab === 'analyzer' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 'text-slate-400'}`}>🛡️</button>
          <button onClick={() => setActiveTab('subscriptions')} className={`p-2 rounded-xl ${activeTab === 'subscriptions' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 'text-slate-400'}`}>🔄</button>
          <button onClick={() => setActiveTab('scam-shield')} className={`p-2 rounded-xl ${activeTab === 'scam-shield' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 'text-slate-400'}`}>🚫</button>
        </div>
      </main>
    </div>
  );
};

export default App;

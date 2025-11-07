'use client';

import { useState } from 'react';
import {
  Rocket, TrendingUp, DollarSign, Zap, ShoppingCart, Share2,
  FileText, Bot, CheckCircle2, ChevronRight, Sparkles,
  Target, Clock, BarChart3, Globe, IndianRupee
} from 'lucide-react';

export default function Home() {
  const [activeWorkflow, setActiveWorkflow] = useState<string | null>(null);

  const businesses = [
    {
      id: 'dropshipping',
      title: 'Dropshipping Empire',
      icon: ShoppingCart,
      platforms: ['Amazon', 'Flipkart', 'Meesho', 'Shopify', 'Myntra', 'Ajio'],
      revenue: '₹2-5L/month',
      automation: '95%',
      status: 'Ready to Deploy',
      tasks: [
        'Product research & trending analysis',
        'Multi-platform listing automation',
        'Price optimization engine',
        'Order fulfillment automation',
        'Customer service AI chatbot',
        'Inventory sync across platforms'
      ]
    },
    {
      id: 'affiliate',
      title: 'Affiliate Marketing',
      icon: Share2,
      platforms: ['YouTube', 'Instagram', 'Facebook', 'Pinterest', 'Quora'],
      revenue: '₹1-3L/month',
      automation: '90%',
      status: 'Ready to Deploy',
      tasks: [
        'Content generation (articles, videos)',
        'SEO optimization automation',
        'Social media posting scheduler',
        'Affiliate link management',
        'Performance tracking & analytics',
        'Email marketing automation'
      ]
    },
    {
      id: 'freelancing',
      title: 'AI Freelancing',
      icon: Bot,
      platforms: ['Upwork', 'Fiverr', 'Freelancer', 'LinkedIn'],
      revenue: '₹3-8L/month',
      automation: '85%',
      status: 'Ready to Deploy',
      tasks: [
        'Profile optimization & bidding',
        'Proposal generation AI',
        'Project delivery automation',
        'Client communication bot',
        'Portfolio management',
        'Invoice & payment tracking'
      ]
    },
    {
      id: 'ebooks',
      title: 'Digital Products',
      icon: FileText,
      platforms: ['Gumroad', 'Amazon Kindle', 'Instamojo', 'Notion'],
      revenue: '₹50K-2L/month',
      automation: '95%',
      status: 'Ready to Deploy',
      tasks: [
        'AI content creation',
        'Ebook formatting & design',
        'Multi-platform publishing',
        'Marketing automation',
        'Email sequence for sales',
        'Analytics & optimization'
      ]
    }
  ];

  const automationTools = [
    {
      name: 'Make.com (Integromat)',
      type: 'Visual Automation',
      pricing: 'Free tier: 1000 ops/month',
      features: ['1000+ integrations', 'Visual builder', 'Scheduling', 'Webhooks'],
      recommended: true
    },
    {
      name: 'Pipedream',
      type: 'Developer-Friendly',
      pricing: 'Free tier: Generous limits',
      features: ['Code + No-code', 'Event-driven', 'Pre-built actions', 'APIs'],
      recommended: true
    },
    {
      name: 'Zapier Free',
      type: 'Simple Automation',
      pricing: 'Free tier: 100 tasks/month',
      features: ['Easy setup', '5 Zaps', 'Basic triggers', '15min refresh'],
      recommended: false
    },
    {
      name: 'n8n Cloud Free',
      type: 'Self-Hosted Option',
      pricing: 'Free tier available',
      features: ['Open source', 'Full control', 'Custom nodes', 'Community'],
      recommended: true
    }
  ];

  const roadmap = [
    {
      phase: 'Week 1',
      title: 'Foundation Setup',
      tasks: [
        'Account creation on all platforms',
        'Configure automation tools (Make.com/Pipedream)',
        'Set up payment gateways',
        'Create brand assets with AI'
      ],
      status: 'Active'
    },
    {
      phase: 'Week 2',
      title: 'Business #1 & #2 Launch',
      tasks: [
        'Deploy dropshipping automation',
        'Launch affiliate marketing campaigns',
        'Set up product research workflows',
        'Configure tracking & analytics'
      ],
      status: 'Upcoming'
    },
    {
      phase: 'Week 3-4',
      title: 'Scale & Optimize',
      tasks: [
        'Add freelancing automation',
        'Launch digital products',
        'Optimize all funnels',
        'Scale profitable channels'
      ],
      status: 'Upcoming'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              AI Business Automation Hub
            </h1>
            <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
          </div>
          <p className="text-xl text-gray-300 mb-6">
            Your Ultimate AI Global Employee Agent - 25 Years Experience, Infinite Possibilities
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-green-600 px-6 py-3 rounded-lg font-bold flex items-center gap-2">
              <Target className="w-5 h-5" />
              Target: Crorepati Status
            </div>
            <div className="bg-orange-600 px-6 py-3 rounded-lg font-bold flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Timeline: 15 Days (Pre-Diwali)
            </div>
            <div className="bg-purple-600 px-6 py-3 rounded-lg font-bold flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Automation: 100% AI-Powered
            </div>
          </div>
        </div>

        {/* Key Metrics Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-gradient-to-br from-green-600 to-green-800 p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold">Revenue Potential</h3>
              <IndianRupee className="w-8 h-8" />
            </div>
            <p className="text-3xl font-bold">₹6-18L</p>
            <p className="text-sm text-green-100">Per Month (Combined)</p>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold">Business Streams</h3>
              <Rocket className="w-8 h-8" />
            </div>
            <p className="text-3xl font-bold">4+</p>
            <p className="text-sm text-blue-100">Active Revenue Sources</p>
          </div>
          <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold">Automation Level</h3>
              <Bot className="w-8 h-8" />
            </div>
            <p className="text-3xl font-bold">92%</p>
            <p className="text-sm text-purple-100">Fully Automated</p>
          </div>
          <div className="bg-gradient-to-br from-orange-600 to-orange-800 p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold">Time Investment</h3>
              <Clock className="w-8 h-8" />
            </div>
            <p className="text-3xl font-bold">2-4h</p>
            <p className="text-sm text-orange-100">Per Week</p>
          </div>
        </div>

        {/* Business Modules */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <ShoppingCart className="w-8 h-8 text-yellow-400" />
            Your Automated Business Empire
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {businesses.map((business) => {
              const Icon = business.icon;
              const isActive = activeWorkflow === business.id;

              return (
                <div
                  key={business.id}
                  className={`bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg border-2 transition-all cursor-pointer ${
                    isActive ? 'border-yellow-400 scale-105' : 'border-gray-700 hover:border-gray-600'
                  }`}
                  onClick={() => setActiveWorkflow(isActive ? null : business.id)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-3 rounded-lg">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{business.title}</h3>
                        <p className="text-sm text-gray-400">{business.status}</p>
                      </div>
                    </div>
                    <ChevronRight className={`w-6 h-6 transition-transform ${isActive ? 'rotate-90' : ''}`} />
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-700 p-3 rounded-lg">
                      <p className="text-xs text-gray-400 mb-1">Revenue Potential</p>
                      <p className="font-bold text-green-400">{business.revenue}</p>
                    </div>
                    <div className="bg-gray-700 p-3 rounded-lg">
                      <p className="text-xs text-gray-400 mb-1">Automation Level</p>
                      <p className="font-bold text-blue-400">{business.automation}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-400 mb-2">Platforms:</p>
                    <div className="flex flex-wrap gap-2">
                      {business.platforms.map((platform) => (
                        <span key={platform} className="bg-gray-700 px-3 py-1 rounded-full text-xs">
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>

                  {isActive && (
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <p className="text-sm font-semibold mb-3 text-yellow-400">Automation Tasks:</p>
                      <ul className="space-y-2">
                        {business.tasks.map((task, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Automation Tools */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Zap className="w-8 h-8 text-yellow-400" />
            FREE Automation Tools (N8N Alternatives)
          </h2>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {automationTools.map((tool) => (
                <div
                  key={tool.name}
                  className={`p-4 rounded-lg border-2 ${
                    tool.recommended
                      ? 'bg-gradient-to-br from-green-900 to-green-800 border-green-500'
                      : 'bg-gray-800 border-gray-600'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-bold text-lg">{tool.name}</h3>
                      <p className="text-sm text-gray-400">{tool.type}</p>
                    </div>
                    {tool.recommended && (
                      <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">
                        RECOMMENDED
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-green-400 font-semibold mb-3">{tool.pricing}</p>
                  <div className="flex flex-wrap gap-2">
                    {tool.features.map((feature) => (
                      <span key={feature} className="bg-gray-700 px-2 py-1 rounded text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 15-Day Roadmap */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <BarChart3 className="w-8 h-8 text-yellow-400" />
            15-Day Launch Roadmap (Pre-Diwali)
          </h2>
          <div className="space-y-4">
            {roadmap.map((phase, idx) => (
              <div
                key={phase.phase}
                className={`bg-gradient-to-br p-6 rounded-xl shadow-lg border-2 ${
                  phase.status === 'Active'
                    ? 'from-orange-900 to-orange-800 border-orange-500'
                    : 'from-gray-800 to-gray-900 border-gray-600'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-white text-black w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{phase.phase}</h3>
                      <p className="text-lg text-gray-300">{phase.title}</p>
                    </div>
                  </div>
                  <span className={`px-4 py-2 rounded-full font-semibold ${
                    phase.status === 'Active'
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-600 text-gray-300'
                  }`}>
                    {phase.status}
                  </span>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {phase.tasks.map((task, taskIdx) => (
                    <li key={taskIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-200">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Start Guide */}
        <div className="bg-gradient-to-br from-yellow-600 via-orange-600 to-red-600 p-8 rounded-xl shadow-2xl">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Rocket className="w-8 h-8" />
            Quick Start: Your First 24 Hours
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white text-gray-900 p-6 rounded-lg">
              <div className="text-4xl font-bold text-orange-600 mb-2">1</div>
              <h3 className="text-xl font-bold mb-3">Setup Accounts</h3>
              <ul className="space-y-2 text-sm">
                <li>✓ Create Make.com account</li>
                <li>✓ Sign up for Pipedream</li>
                <li>✓ Register on e-commerce platforms</li>
                <li>✓ Set up payment gateways</li>
              </ul>
            </div>
            <div className="bg-white text-gray-900 p-6 rounded-lg">
              <div className="text-4xl font-bold text-orange-600 mb-2">2</div>
              <h3 className="text-xl font-bold mb-3">Import Workflows</h3>
              <ul className="space-y-2 text-sm">
                <li>✓ Download automation blueprints</li>
                <li>✓ Import to Make.com/Pipedream</li>
                <li>✓ Configure API keys</li>
                <li>✓ Test connections</li>
              </ul>
            </div>
            <div className="bg-white text-gray-900 p-6 rounded-lg">
              <div className="text-4xl font-bold text-orange-600 mb-2">3</div>
              <h3 className="text-xl font-bold mb-3">Launch & Monitor</h3>
              <ul className="space-y-2 text-sm">
                <li>✓ Activate workflows</li>
                <li>✓ Monitor dashboard</li>
                <li>✓ Track first sales</li>
                <li>✓ Optimize & scale</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-xl font-bold text-white">
              🎯 Goal: First ₹10,000 in 7 days | ₹1 Lakh in 30 days | ₹1 Crore in 12 months
            </p>
          </div>
        </div>

        {/* Automation Workflows Section */}
        <div className="mt-12 bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Globe className="w-8 h-8 text-blue-400" />
            Complete Automation Workflows
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-yellow-400">🔧 Dropshipping Automation Flow</h3>
              <p className="text-sm text-gray-300 mb-3">
                AI monitors trending products → Auto-lists on platforms → Price optimization → Order received →
                Supplier notified → Tracking updated → Customer service AI handles queries → Analytics updated
              </p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-yellow-400">📱 Affiliate Marketing Flow</h3>
              <p className="text-sm text-gray-300 mb-3">
                AI generates content → SEO optimization → Auto-posts to social media → Monitors trends →
                Adjusts strategy → Tracks conversions → Email follow-ups → Performance reports
              </p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-yellow-400">💼 Freelancing Flow</h3>
              <p className="text-sm text-gray-300 mb-3">
                AI scans projects → Auto-bids with proposals → Project delivery automation →
                Client communication → Invoice generation → Payment tracking → Portfolio updates
              </p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-yellow-400">📚 Digital Products Flow</h3>
              <p className="text-sm text-gray-300 mb-3">
                AI creates content → Formats ebook → Multi-platform publishing → Marketing campaigns →
                Email sequences → Sales tracking → Customer delivery → Review collection
              </p>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 rounded-xl shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">🚀 Ready to Launch Your AI Empire?</h2>
            <p className="text-xl mb-6">
              Everything is set up. Just import the workflows, connect your accounts, and watch the money flow.
            </p>
            <p className="text-lg font-semibold text-yellow-300">
              No team needed. No daily grind. Just you + AI = Crorepati Status
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

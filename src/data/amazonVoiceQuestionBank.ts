import { VoiceCategoryKey, VoiceCategoryMeta, VoiceQuizQuestion } from '../types/amazonVoice'

export interface PriorityVoiceTopic {
  id: string
  number: number
  title: string
  shortTitle: string
  query: string
  categoryKey: VoiceCategoryKey
  description: string
  badge: string
}

export const PRIORITY_VOICE_TOPICS: PriorityVoiceTopic[] = [
  {
    id: 'a_to_z',
    number: 1,
    title: 'A-to-z Guarantee Claims',
    shortTitle: 'A-to-z Claims',
    query: 'A-to-z',
    categoryKey: 'fulfillment_marketplace',
    description: 'Mandatory 48-hour seller response window, 90-day filing cutoff from EDD, covered conditions & resolutions.',
    badge: 'Claims & Protection'
  },
  {
    id: 'wms',
    number: 2,
    title: 'Where\'s My Stuff? (WMS / WIS)',
    shortTitle: 'WMS / Order Tracking',
    query: 'WMS',
    categoryKey: 'order_delivery',
    description: 'Carrier status messages, tracking milestone scans, warehouse fulfillment states (FC Pick/Pack/Ship), and DNR buffer.',
    badge: 'Logistics & Tracking'
  },
  {
    id: 'returns_refunds_exceptions',
    number: 3,
    title: 'Return & Refund Policies, Methods & Exceptions',
    shortTitle: 'Returns & Exceptions',
    query: 'Return',
    categoryKey: 'returns_refunds',
    description: 'The UPS Store / Kohl\'s box-free QR drop-offs, Extended Holiday Return Policy (Nov 1 - Jan 31), and non-returnable hazmat exceptions.',
    badge: 'Returns & Concessions'
  },
  {
    id: 'order_item_types',
    number: 4,
    title: 'Types of Orders & Types of Items',
    shortTitle: 'Order & Item Types',
    query: 'Types of',
    categoryKey: 'security_fundamentals',
    description: 'Physical vs digital items, Hazmat ground restrictions, High-value OTP delivery, Pre-orders & $0 replacement orders.',
    badge: 'Fulfillment & Models'
  },
  {
    id: 'subscribe_save',
    number: 5,
    title: 'Subscribe & Save (S&S)',
    shortTitle: 'Subscribe & Save',
    query: 'Subscribe',
    categoryKey: 'prime_subscriptions',
    description: '5% vs 15% discount tiers, recurring delivery frequencies (2wk - 6mo), skip/cancel flexibility, and price notifications.',
    badge: 'Subscriptions'
  },
  {
    id: 'payment_charges',
    number: 6,
    title: 'Payment Charges (Backup, Retro & Unknown)',
    shortTitle: 'Payment Charges',
    query: 'Charges',
    categoryKey: 'payments_concessions',
    description: 'Backup payment card failsafe, 30-day retro charges for unreturned replacements, and unknown statement charge PII lookup.',
    badge: 'Billing & Charges'
  },
  {
    id: 'amazon_prime_types',
    number: 7,
    title: 'Amazon Prime & Its Types',
    shortTitle: 'Prime Tiers & Types',
    query: 'Prime',
    categoryKey: 'prime_subscriptions',
    description: 'Standard Annual ($139), Monthly ($14.99), Prime Student (50% off), Prime Access ($6.99/mo), Prime Video, and Household sharing.',
    badge: 'Memberships'
  },
  {
    id: 'payment_methods',
    number: 8,
    title: 'Payment Methods & Types',
    shortTitle: 'Payment Methods',
    query: 'Payment',
    categoryKey: 'payments_concessions',
    description: 'Accepted major cards, Amazon Store Card, SNAP EBT, HSA/FSA, Affirm BNPL, split payments, and prohibited COD/checks.',
    badge: 'Payment Methods'
  }
]

export const VOICE_CATEGORIES: VoiceCategoryMeta[] = [
  // ================= 10 OFFICIAL MASTER SYLLABUS MODULES =================
  {
    key: 'security_fundamentals',
    title: '1. Security and Order Fundamentals',
    shortTitle: 'Security & Fundamentals',
    badge: 'Module 1',
    description: 'Security Authentication, Social Engineering, Data Handling, PII Masking, Order Life Cycle, Types of Items (Retail, FBA, MFN, Digital, Hazmat, High-Value OTP), and Types of Orders (Standard, Subscribe & Save, Pre-orders, Digital Orders, Replacement $0 Orders, Multi-Shipment Split Orders).',
    topics: [
      '1. Security Authentication',
      '2. Social Engineering',
      '3. Data Handling',
      '4. PII (Personally Identifiable Information)',
      '5. Order Life Cycle',
      '6. Unauthorized Orders and Security Concerns',
      '7. Types of Items (Retail, FBA, MFN, Digital, Hazmat, High-Value OTP, Heavy & Bulky, Gift Cards)',
      '7b. Types of Orders (Standard Retail, Subscribe & Save, Pre-orders, Digital Orders, Replacement $0 Orders, Multi-Shipment Split Orders, Exchange Orders)'
    ],
    iconName: 'Shield',
    color: {
      accent: '#6366f1',
      border: 'border-indigo-500/20',
      bgLight: 'bg-indigo-50',
      bgDark: 'dark:bg-indigo-950/20',
      text: 'text-indigo-600 dark:text-indigo-400'
    }
  },
  {
    key: 'order_delivery',
    title: '2. Order Issues and Delivery',
    shortTitle: 'Order Issues & Delivery',
    badge: 'Module 2',
    description: 'Problems with an Order (PWAO), Where Is My Stuff (WMS / WIS), Delivery Status Messages, Delivery Methods, Shipping Speeds, Late Delivery, DNR (24-48h buffer), Missing Items, Switcheroo, Damaged/Defective, EDD/RDD, and Cancellations.',
    topics: [
      '8. Problems with an Order',
      '9. Where Is My Stuff? (WMS / WIS - Order Tracking, Carrier Milestones & Warehouse Fulfillment Scans)',
      '10. Delivery Status Messages',
      '11. Types of Delivery Methods',
      '12. Shipping Speeds and Shipping Methods',
      '13. Late Delivery',
      '14. Delivered Not Received (DNR)',
      '15. Missing Items',
      '16. Wrong Items / Switcheroo',
      '17. Damaged Products',
      '18. Defective Products',
      '19. Product Not as Expected',
      '20. Product Mismatch',
      '21. Order Cancellation',
      '22. Estimated Delivery Date (EDD)',
      '23. Revised Delivery Date (RDD)',
      '24. Replacement Eligibility and Buffer Time'
    ],
    iconName: 'Package',
    color: {
      accent: '#f97316',
      border: 'border-orange-500/20',
      bgLight: 'bg-orange-50',
      bgDark: 'dark:bg-orange-950/20',
      text: 'text-orange-600 dark:text-orange-400'
    }
  },
  {
    key: 'returns_refunds',
    title: '3. Returns, Refunds, and Replacements',
    shortTitle: 'Returns & Refunds',
    badge: 'Module 3',
    description: 'Return Methods (The UPS Store QR drop-off, Kohl’s box-free, Lockers, Whole Foods, UPS Pickup), Return Policies & Extended Holiday Windows (Nov 1 - Jan 31), Return Exceptions & Non-Returnable Items (Hazmat, Perishables, Digital), Refund Policies, Refund Methods & SLA Timelines (GC 2-3h, CC 3-5d, Debit up to 10d), Refund Not Received, and Returnless Refunds.',
    topics: [
      '25. Return Methods (The UPS Store QR Drop-off, Kohl\'s, Amazon Locker, Whole Foods, UPS Pickup)',
      '26. Return Policies & Extended Holiday Return Policy (Nov 1 - Jan 31)',
      '27. Return Windows',
      '28. Return Eligibility & Non-Returnable Exceptions (Hazmat, Flammables, Perishables, Digital Software)',
      '29. Refund Policies, Exceptions & Timelines (Gift Card 2-3h, Credit Card 3-5d, Debit Card up to 10d)',
      '30. Refund Methods',
      '31. Refund Processing Timelines',
      '32. Refund Not Received',
      '33. Refund Status and Tracking',
      '34. Replacement Policies',
      '35. Replacement Timelines',
      '36. Returnless Refunds, Where Eligible (Damaged Hazmat & Perishables)',
      '37. FBA vs. MFN Return and Refund Handling',
      '38. Refund and Replacement Resolutions'
    ],
    iconName: 'RotateCcw',
    color: {
      accent: '#10b981',
      border: 'border-emerald-500/20',
      bgLight: 'bg-emerald-50',
      bgDark: 'dark:bg-emerald-950/20',
      text: 'text-emerald-600 dark:text-emerald-400'
    }
  },
  {
    key: 'payments_concessions',
    title: '4. Payments and Concessions',
    shortTitle: 'Payments & Concessions',
    badge: 'Module 4',
    description: 'Payment Methods & Types (Credit/Debit, Amazon Store Card, Prime Visa, Gift Cards/Balance, SNAP EBT, HSA/FSA, Affirm, Prohibited Methods), Payment Charges (Backup Payment Methods, Retro Charges for Unreturned Items, Unknown/Unrecognized Charges & PII Lookup SOP), Authorization Holds vs Declined Payments, and Concessions.',
    topics: [
      '39. Payment Methods and Types (Credit/Debit, Amazon Store Card, Prime Visa, Gift Cards, SNAP EBT, HSA/FSA, Affirm, Prohibited Methods)',
      '40. Payment Policies',
      '41. Payment Authorization and Declined Payments',
      '41b. Payment Charges (Backup Payment Methods, Retro Charges for Unreturned Items, and Unknown/Unrecognized Charges)',
      '42. Payment-Related Resolutions',
      '43. Concessions',
      '44. Concession Eligibility and Authorization',
      '45. Partial Refunds and Other Approved Adjustments'
    ],
    iconName: 'CreditCard',
    color: {
      accent: '#ec4899',
      border: 'border-pink-500/20',
      bgLight: 'bg-pink-50',
      bgDark: 'dark:bg-pink-950/20',
      text: 'text-pink-600 dark:text-pink-400'
    }
  },
  {
    key: 'fulfillment_marketplace',
    title: '5. Amazon Fulfillment and Marketplace',
    shortTitle: 'Fulfillment & Marketplace',
    badge: 'Module 5',
    description: 'Amazon FBA (Fulfillment by Amazon), MFN (Merchant Fulfillment Network), MFN Prime (SFP), Amazon Retail, Marketplace Sellers, MPM (Marketplace Merchant), Seller-Fulfilled vs Amazon-Fulfilled, and A-to-z Guarantee Claims (Eligibility, 48-Hour Seller Contact SLA, 90-Day Filing Rule, Resolutions & Appeals).',
    topics: [
      '46. Amazon FBA (Fulfillment by Amazon)',
      '47. MFN (Merchant Fulfillment Network)',
      '48. MFN Prime',
      '49. Amazon Retail',
      '50. Marketplace Sellers',
      '51. MPM (Marketplace Merchant)',
      '52. Seller-Fulfilled vs. Amazon-Fulfilled Orders',
      '53. A-to-z Guarantee Claims (Eligibility, 48-Hour Seller Window, 90-Day Filing Rule, Covered Conditions, Associate Support & Seller Appeals)'
    ],
    iconName: 'Truck',
    color: {
      accent: '#06b6d4',
      border: 'border-cyan-500/20',
      bgLight: 'bg-cyan-50',
      bgDark: 'dark:bg-cyan-950/20',
      text: 'text-cyan-600 dark:text-cyan-400'
    }
  },
  {
    key: 'prime_subscriptions',
    title: '6. Amazon Prime and Subscriptions',
    shortTitle: 'Prime & Subscriptions',
    badge: 'Module 6',
    description: 'Amazon Prime & Its Types (Standard Annual $139, Monthly $14.99, Prime Student, Prime Access Government Assistance, Prime Video Standalone, Household Sharing), Prime Billing, Cancellation & 100% Refund Eligibility, and Amazon Subscribe & Save (S&S Discounts 5% vs 15%, Delivery Frequencies 2wk-6mo, Skip/Modify/Cancel, Price Fluctuation Rules, Out-of-Stock Substitutions).',
    topics: [
      '54. Amazon Prime',
      '55. Types of Amazon Prime Subscriptions (Standard Annual, Standard Monthly, Prime Student, Prime Access, Prime Video Standalone)',
      '56. Prime Membership Benefits and Amazon Household Sharing',
      '57. Prime Billing and Charges',
      '58. Prime Membership Cancellation',
      '59. Prime Refund Eligibility (Full Refund if 0 Benefits Used)',
      '60. Amazon Subscribe & Save',
      '61. Subscribe & Save Discounts (5% for 1-4 items, 15% for 5+ items)',
      '62. Recurring Deliveries (Frequencies from 2 Weeks to 6 Months)',
      '63. Skipping, Modifying, and Cancelling Subscriptions (Zero Fee Flexibility)'
    ],
    iconName: 'Crown',
    color: {
      accent: '#3b82f6',
      border: 'border-blue-500/20',
      bgLight: 'bg-blue-50',
      bgDark: 'dark:bg-blue-950/20',
      text: 'text-blue-600 dark:text-blue-400'
    }
  },
  {
    key: 'international_shipping',
    title: '7. International Shipping',
    shortTitle: 'International Shipping',
    badge: 'Module 7',
    description: 'Amazon Global Store, Freight Logistics, International Shipping, Import Fees & Customs Duties, Customs Clearance, International Delivery Delays, and Import Fees Deposit (IFD).',
    topics: [
      '64. Amazon Global Store',
      '65. Freight',
      '66. International Shipping',
      '67. Import Fees and Duties',
      '68. Customs Clearance',
      '69. International Delivery Delays',
      '70. Import Fees Deposit, Where Applicable'
    ],
    iconName: 'Globe',
    color: {
      accent: '#0284c7',
      border: 'border-sky-500/20',
      bgLight: 'bg-sky-50',
      bgDark: 'dark:bg-sky-950/20',
      text: 'text-sky-600 dark:text-sky-400'
    }
  },
  {
    key: 'transfers_operations',
    title: '8. Transfers and Support Operations',
    shortTitle: 'Transfers & Operations',
    badge: 'Module 8',
    description: 'Inline Transfers, Global Warm Transfers, Transfer Eligibility & Procedures, Correct Team Routing (Billing, Logistics, Tech, CAP), Escalation & Handoff, Knowledge Base / SOP Navigation in AC3 and Support Tools.',
    topics: [
      '71. Inline Transfers',
      '72. Global Transfers',
      '73. Transfer Eligibility and Procedures',
      '74. Correct Team Routing',
      '75. Escalation and Handoff Procedures',
      '76. Knowledge Base / SOP Navigation',
      '77. Finding Policy Information in AC3 or Support Tools'
    ],
    iconName: 'PhoneForwarded',
    color: {
      accent: '#14b8a6',
      border: 'border-teal-500/20',
      bgLight: 'bg-teal-50',
      bgDark: 'dark:bg-teal-950/20',
      text: 'text-teal-600 dark:text-teal-400'
    }
  },
  {
    key: 'call_handling',
    title: '9. Call Handling and Communication',
    shortTitle: 'Call Handling & Comm',
    badge: 'Module 9',
    description: 'The 9-Stage Call Flow (Opening, Acknowledging, Paraphrasing, Probing, Hold Etiquette 1-2m, Providing Resolution, Further Assistance, Power Closing), Empathy & Active Listening (ACA), Professional Communication, and Avoiding Assumptions.',
    topics: [
      '78. Call Opening',
      '79. Acknowledging the Customer',
      '80. Paraphrasing the Customer\'s Concern',
      '81. Probing Questions',
      '82. Putting the Customer on Hold',
      '83. Providing the Resolution',
      '84. Asking Whether Further Assistance Is Needed',
      '85. Call Closing',
      '86. Empathy and Active Listening',
      '87. Professional Communication',
      '88. Avoiding Assumptions and Never Guessing',
      '89. Explaining Systematic Issues',
      '90. Customer-Friendly Policy Explanations'
    ],
    iconName: 'Headphones',
    color: {
      accent: '#8b5cf6',
      border: 'border-purple-500/20',
      bgLight: 'bg-purple-50',
      bgDark: 'dark:bg-purple-950/20',
      text: 'text-purple-600 dark:text-purple-400'
    }
  },
  {
    key: 'assessment_performance',
    title: '10. Assessment and Performance Preparation',
    shortTitle: 'Assessment & Performance',
    badge: 'Module 10',
    description: 'MCQs, Knowledge Checks, Reading Comprehension, AC3 Ticketing & Documentation, Customer Scenario Questions, Policy-Based Decision Making, Resolution Accuracy, First Contact Resolution (FCR), and CSAT/AHT Metrics.',
    topics: [
      '91. MCQs and Knowledge Checks',
      '92. Reading Comprehension',
      '93. Essay Writing',
      '94. Customer Scenario-Based Questions',
      '95. Mock Voice Calls',
      '96. Role-Play Assessments',
      '97. Policy-Based Decision Making',
      '98. Resolution Accuracy',
      '99. Transfer Decisions',
      '100. Customer Satisfaction and Call Quality'
    ],
    iconName: 'Award',
    color: {
      accent: '#eab308',
      border: 'border-yellow-500/20',
      bgLight: 'bg-yellow-50',
      bgDark: 'dark:bg-yellow-950/20',
      text: 'text-yellow-600 dark:text-yellow-400'
    }
  },

  // ================= LEGACY / GRANULAR CATEGORIES FOR COMPATIBILITY =================
  {
    key: 'order_issues',
    title: 'Order-Related Issues (DNR & WMS)',
    shortTitle: 'Order Issues',
    badge: 'Legacy Category A',
    description: 'Master Delivered Not Received (DNR) buffer rules, Where Is My Stuff (WMS), late deliveries, switcheroo claims, and address tracking.',
    topics: ['Delivered Not Received (DNR)', 'Where Is My Stuff (WIS/WMS)', 'Late Delivery & Concessions', 'Switcheroo & Item Substitution', 'Order Cancellation & Routing'],
    iconName: 'Package',
    color: {
      accent: '#f97316',
      border: 'border-orange-500/20',
      bgLight: 'bg-orange-50',
      bgDark: 'dark:bg-orange-950/20',
      text: 'text-orange-600 dark:text-orange-400'
    }
  },
  {
    key: 'product_issues',
    title: 'Product-Related Issues & Defects',
    shortTitle: 'Product Issues',
    badge: 'Legacy Category B',
    description: 'Handle damaged, defective, or mis-shipped merchandise, missing accessories, compatibility inquiries, and replacement protocols.',
    topics: ['Damaged Goods', 'Defective Hardware', 'Wrong Product Shipped', 'Missing Parts', 'Compatibility & Return Eligibility'],
    iconName: 'AlertTriangle',
    color: {
      accent: '#ef4444',
      border: 'border-red-500/20',
      bgLight: 'bg-red-50',
      bgDark: 'dark:bg-red-950/20',
      text: 'text-red-600 dark:text-red-400'
    }
  },
  {
    key: 'fulfillment_seller',
    title: 'Fulfilment & Seller Operations (FBA vs MFN)',
    shortTitle: 'Fulfillment & Seller',
    badge: 'Legacy Category D',
    description: 'Navigate operational differences between Fulfilled by Amazon (FBA) and Merchant Fulfilled Network (MFN), plus A-to-z Claims.',
    topics: ['FBA CS Responsibilities', 'MFN Third-Party Seller Routing', 'A-to-z Guarantee Filing', 'Drop-ship Inquiries', 'Seller Contact Windows'],
    iconName: 'Truck',
    color: {
      accent: '#06b6d4',
      border: 'border-cyan-500/20',
      bgLight: 'bg-cyan-50',
      bgDark: 'dark:bg-cyan-950/20',
      text: 'text-cyan-600 dark:text-cyan-400'
    }
  },
  {
    key: 'amazon_prime',
    title: 'Amazon Prime Subscriptions & Benefits',
    shortTitle: 'Amazon Prime',
    badge: 'Legacy Category E',
    description: 'Membership tiers, fee adjustments, annual vs monthly renewals, cancellation prorated refunds, and delivery benefit troubleshooting.',
    topics: ['Prime Shipping SLA', 'Membership Cancellation & Prorated Refunds', 'Payment Decline Handling', 'Household Sharing', 'Prime Video Inquiries'],
    iconName: 'Crown',
    color: {
      accent: '#3b82f6',
      border: 'border-blue-500/20',
      bgLight: 'bg-blue-50',
      bgDark: 'dark:bg-blue-950/20',
      text: 'text-blue-600 dark:text-blue-400'
    }
  },
  {
    key: 'ring_troubleshooting',
    title: 'Ring & Smart Device Troubleshooting',
    shortTitle: 'Ring Support',
    badge: 'Legacy Category F',
    description: 'Step-by-step Ring Video Doorbell & Cam diagnostic workflows: Wi-Fi channels, hard resets, offline state, and Ring L2 tech escalation.',
    topics: ['Ring App Setup & 2.4GHz Wi-Fi', 'Offline Device Reboot Sequence', 'Live View Latency & RSSI', 'Factory Reset Procedures', 'Ring Community / Tech Escalation'],
    iconName: 'Radio',
    color: {
      accent: '#8b5cf6',
      border: 'border-purple-500/20',
      bgLight: 'bg-purple-50',
      bgDark: 'dark:bg-purple-950/20',
      text: 'text-purple-600 dark:text-purple-400'
    }
  },
  {
    key: 'call_structure',
    title: 'Call Structure & Communication (9-Stage Flow)',
    shortTitle: 'Call Flow & Comm',
    badge: 'Legacy Category G',
    description: 'Execute the strict 9-phase telephone anatomy: Professional Greeting, PII Verification, ACA, Probing, Hold Etiquette, and Power Closing.',
    topics: ['Greeting & Verification', 'ACA (Acknowledge, Concern, Assurance)', 'Hold Etiquette (1-2 Min Max)', 'Empathy & Active Listening', 'Power Closing & Confirmation'],
    iconName: 'Headphones',
    color: {
      accent: '#ec4899',
      border: 'border-pink-500/20',
      bgLight: 'bg-pink-50',
      bgDark: 'dark:bg-pink-950/20',
      text: 'text-pink-600 dark:text-pink-400'
    }
  },
  {
    key: 'customer_scenarios',
    title: 'Customer Service Scenarios & De-escalation',
    shortTitle: 'Scenarios & Escalation',
    badge: 'Legacy Category H',
    description: 'Navigate highly tense, escalated calls: irate buyers demanding immediate refunds, supervisor demands, and firm policy boundaries.',
    topics: ['Irate Customer De-escalation', 'Demanding Immediate Refund (Pre-Buffer)', 'Supervisor Request Triage', 'Policy Exceptions Management', 'Multi-Order Complications'],
    iconName: 'Users',
    color: {
      accent: '#eab308',
      border: 'border-yellow-500/20',
      bgLight: 'bg-yellow-50',
      bgDark: 'dark:bg-yellow-950/20',
      text: 'text-yellow-600 dark:text-yellow-400'
    }
  },
  {
    key: 'process_knowledge',
    title: 'Process Knowledge, Internal Tools & KPIs',
    shortTitle: 'Tools & Metrics',
    badge: 'Legacy Category I',
    description: 'Internal operations: AC3 customer lookup, CSC/Heartbeat SOP adherence, KRI metrics (FCR, AHT, CSAT/DSAT, Concessions), and PII security.',
    topics: ['First Contact Resolution (FCR)', 'Average Handling Time (AHT) Balancing', 'CSAT & Customer Experience (CSX)', 'AC3 Tool Navigation', 'Zero-Tolerance PII Security'],
    iconName: 'BarChart',
    color: {
      accent: '#14b8a6',
      border: 'border-teal-500/20',
      bgLight: 'bg-teal-50',
      bgDark: 'dark:bg-teal-950/20',
      text: 'text-teal-600 dark:text-teal-400'
    }
  }
]

export const VERIFIED_QUESTION_BANK: VoiceQuizQuestion[] = [
  // ================= 1. SECURITY AND ORDER FUNDAMENTALS =================
  {
    id: 'sec-001',
    category: 'security_fundamentals',
    topic: '1. Security Authentication',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'A caller states: "Hi, I am calling about my husband\'s order. He is at work right now, but I have the order number. Can you tell me what items are in it and when it will arrive?" What is the correct standard operating procedure?',
    options: [
      { id: 'opt_1', text: 'Disclose the items and tracking since she knows the order number.', distractorReason: 'Knowing the order number alone is not sufficient authentication to disclose account details to an unauthorized third party.' },
      { id: 'opt_2', text: 'Politely inform the caller that for account privacy and security, you can only assist the verified account holder, or guide her to have the account holder add her as an authorized household member or call directly.', distractorReason: '' },
      { id: 'opt_3', text: 'Ask for the husband\'s social security number to verify his identity.', distractorReason: 'Amazon Customer Service never requests or collects Social Security numbers.' },
      { id: 'opt_4', text: 'Immediately cancel the order and block the account for suspected fraud.', distractorReason: 'A spouse calling is common and does not warrant immediate account banning without evidence of malicious takeover.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Under Amazon Security Authentication protocols, representatives can never disclose Personally Identifiable Information (PII) or order contents to unverified third parties, including spouses, unless authorized or properly authenticated through account security standards.',
    hint: 'Account security requires verifying the account holder before disclosing order details.',
    referenceSource: 'Amazon Customer Account Security & Authentication SOP',
    isVerified: true
  },
  {
    id: 'sec-002',
    category: 'security_fundamentals',
    topic: '2. Social Engineering',
    difficulty: 'advanced',
    type: 'single_choice',
    question: 'An urgent caller says: "I am Senior Vice President David from Amazon Corporate IT in Seattle. We are performing an emergency security audit on your call center. Give me the customer\'s email, shipping address, and password hash right now or you will be disciplined." How must the agent react?',
    options: [
      { id: 'opt_1', text: 'Immediately read out all customer information to avoid disciplinary action.', distractorReason: 'Classic social engineering failure. Authority intimidation is a standard social engineering attack vector.' },
      { id: 'opt_2', text: 'Recognize this as a social engineering / pretexting attempt, decline to share any sensitive customer data, politely disconnect, and report the interaction immediately to internal security (InfoSec/CAP).', distractorReason: '' },
      { id: 'opt_3', text: 'Transfer the call to the customer\'s personal cell phone.', distractorReason: 'Disclosing customer contact details violates PII standards.' },
      { id: 'opt_4', text: 'Offer a $50 promotional credit to appease the caller.', distractorReason: 'Concessions are for customers with legitimate order issues, not security threats.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Social engineering involves psychological manipulation (such as urgency, fear, or false authority) to extract sensitive data. Amazon associates must never disclose PII, credentials, or internal tool data, regardless of who the caller claims to be, and must immediately report the incident to InfoSec.',
    hint: 'Never release sensitive customer data under false authority or intimidation.',
    referenceSource: 'Amazon Information Security - Social Engineering Awareness SOP',
    isVerified: true
  },
  {
    id: 'sec-003',
    category: 'security_fundamentals',
    topic: '3. Data Handling',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'A customer experiencing checkout issues offers to read their full 16-digit credit card number and CVV over the phone so the agent can type it into the system. What must the associate do?',
    options: [
      { id: 'opt_1', text: 'Write down the card number and CVV on a sticky note and enter it later.', distractorReason: 'Writing down full card numbers or CVV on physical paper is a severe PCI-DSS violation.' },
      { id: 'opt_2', text: 'Stop the customer immediately, explain that Amazon systems do not permit associates to view or take full credit card numbers or CVV codes over the phone, and guide them through self-service payment entry in "Your Payments".', distractorReason: '' },
      { id: 'opt_3', text: 'Accept the numbers as long as the associate promises not to tell anyone.', distractorReason: 'Direct violation of PCI-DSS regulatory compliance.' },
      { id: 'opt_4', text: 'Ask them to email the CVV and card number to the support email.', distractorReason: 'Transmitting unencrypted card numbers via email is prohibited.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'PCI-DSS (Payment Card Industry Data Security Standard) strictly forbids agents from requesting, listening to, writing down, or manually keying in full credit card numbers or 3-4 digit CVV security codes over the phone. Customers must enter payment details securely via their online Amazon account.',
    hint: 'Agents are strictly prohibited from taking full card numbers or CVV codes over phone calls.',
    referenceSource: 'PCI-DSS Compliance & Secure Data Handling Standards',
    isVerified: true
  },
  {
    id: 'sec-004',
    category: 'security_fundamentals',
    topic: '4. PII (Personally Identifiable Information)',
    difficulty: 'beginner',
    type: 'single_choice',
    question: 'Which of the following actions constitutes a violation of Amazon Personally Identifiable Information (PII) handling policy during a customer call?',
    options: [
      { id: 'opt_1', text: 'Asking the customer to state their full billing address for verification purposes.', distractorReason: 'Asking the customer to provide their address is a standard verification procedure.' },
      { id: 'opt_2', text: 'Reciting the customer\'s full residential address and email address aloud to the caller before verification is complete.', distractorReason: '' },
      { id: 'opt_3', text: 'Referring to the customer by their verified last name.', distractorReason: 'Using the customer\'s last name is professional call etiquette.' },
      { id: 'opt_4', text: 'Confirming the last two digits of the payment method on file (e.g. Visa ending in 42).', distractorReason: 'Confirming masked last 2 or 4 digits is standard and approved.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Agents must never read out full PII (full street address, phone number, or email) to a caller. The customer must state their details to verify ownership. Reciting unverified PII aloud enables identity theft and breaches zero-tolerance PII rules.',
    hint: 'The customer must provide the information; the agent should never volunteer unverified full details.',
    referenceSource: 'Amazon Customer Trust & PII Protection Guidelines',
    isVerified: true
  },
  {
    id: 'sec-005',
    category: 'security_fundamentals',
    topic: '5. Order Life Cycle',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'A customer placed an order 15 minutes ago and the order status is currently "Pending / Payment Authorized". What does this stage in the Order Life Cycle indicate?',
    options: [
      { id: 'opt_1', text: 'The package has already left the fulfillment center on an Amazon Logistics truck.', distractorReason: 'Pending occurs before fulfillment and dispatch.' },
      { id: 'opt_2', text: 'Amazon is validating payment authorization with the issuing financial institution and preparing the order for fulfillment center allocation. The customer can still modify or cancel the order freely online.', distractorReason: '' },
      { id: 'opt_3', text: 'The customer\'s account has been permanently suspended for payment fraud.', distractorReason: 'Pending is a normal operational order stage for all orders.' },
      { id: 'opt_4', text: 'The item is permanently out of stock and cannot be shipped.', distractorReason: 'Pending does not mean out of stock.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'During the initial "Pending / Payment Authorized" stage of the Amazon Order Life Cycle, payment details are being verified with the bank, and items are queued for warehouse dispatch. During this window, customers can easily cancel or modify shipping addresses directly in "Your Orders".',
    hint: 'Pending is the initial order window where payment validates and modifications can occur.',
    referenceSource: 'Amazon Order Life Cycle Management Guide',
    isVerified: true
  },
  {
    id: 'sec-006',
    category: 'security_fundamentals',
    topic: '6. Unauthorized Orders and Security Concerns',
    difficulty: 'advanced',
    type: 'single_choice',
    question: 'A customer calls panicking: "I received an email confirmation for five $1,000 laptops shipped to an unknown address in another state! I never placed this order!" What is the mandatory immediate security action?',
    options: [
      { id: 'opt_1', text: 'Tell the customer to dispute it with their bank and disconnect.', distractorReason: 'Dismissive and fails to protect the customer\'s Amazon account from ongoing abuse.' },
      { id: 'opt_2', text: 'Treat this as a suspected Account Takeover (ATO): cancel pending shipments if possible, initiate an Account Security / CAP (Customer Account Protection) escalation to secure the account, advise the customer to change passwords and enable Two-Step Verification.', distractorReason: '' },
      { id: 'opt_3', text: 'Issue a $5,000 cash concession directly to their checking account.', distractorReason: 'Agents cannot issue unauthorized multi-thousand dollar cash concessions.' },
      { id: 'opt_4', text: 'Call the recipient in the other state to ask them why they placed the order.', distractorReason: 'Agents do not contact third-party fraud recipients.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'When unauthorized orders suggest an Account Takeover (ATO), the associate must immediately take steps to cancel in-progress orders, flag the incident to Customer Account Protection (CAP) to terminate compromised sessions, and guide the customer on security remediation.',
    hint: 'Suspected compromised accounts require immediate CAP security escalation.',
    referenceSource: 'Amazon Customer Account Protection (CAP) - ATO Escalation SOP',
    isVerified: true
  },
  {
    id: 'sec-007',
    category: 'security_fundamentals',
    topic: '7. Types of Items and Selling/Fulfillment Models',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'Which of the following correctly pairs the Amazon Selling / Fulfillment Model with Customer Service responsibilities?',
    options: [
      { id: 'opt_1', text: 'Merchant Fulfilled Network (MFN): Amazon CS handles all packaging, carrier tracking, and return labels directly.', distractorReason: 'For MFN, the third-party merchant is responsible for packaging and dispatching the item.' },
      { id: 'opt_2', text: 'Fulfilled by Amazon (FBA): The item is stored in an Amazon fulfillment center and shipped by Amazon; Amazon CS handles all delivery inquiries, returns, and replacements.', distractorReason: '' },
      { id: 'opt_3', text: 'Sold and Fulfilled by Amazon: The third-party merchant decides whether a refund is permitted.', distractorReason: 'Amazon Retail orders are governed entirely by Amazon policies.' },
      { id: 'opt_4', text: 'Amazon Retail: Customers must message the manufacturer for return labels.', distractorReason: 'Amazon handles all retail returns within the standard return window.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Under the FBA (Fulfilled by Amazon) model, independent sellers supply the inventory, but Amazon handles warehousing, packaging, shipping, customer service inquiries, and return logistics. For MFN, the merchant fulfills and manages direct customer messaging.',
    hint: 'When Amazon fulfills the item (FBA), Amazon CS takes full ownership of shipping and returns.',
    referenceSource: 'Amazon Selling Models & Customer Care Matrix',
    isVerified: true
  },
  {
    id: 'sec-008',
    category: 'security_fundamentals',
    topic: '7. Types of Items (Retail, FBA, MFN, Digital, Hazmat, High-Value OTP)',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'How does Amazon\'s return and cancellation policy differ between standard physical merchandise and digital purchases (such as Kindle eBooks or Prime Video rentals)?',
    options: [
      { id: 'opt_1', text: 'Physical merchandise cannot be returned, whereas digital purchases can be returned for up to 2 years.', distractorReason: 'Inverted and false; physical items have standard return windows.' },
      { id: 'opt_2', text: 'Physical goods generally have a 30-day return window from delivery; accidental Kindle eBook purchases have a strict 7-day return window if unread, and accidental Prime Video rentals can be refunded within 48 hours if not streamed.', distractorReason: '' },
      { id: 'opt_3', text: 'Digital purchases can never be refunded under any circumstances even if bought by an infant on 1-Click.', distractorReason: 'Accidental 1-Click digital purchases have designated return windows.' },
      { id: 'opt_4', text: 'Digital video purchases must be returned by mailing an empty flash drive to Amazon.', distractorReason: 'Digital content licenses are revoked electronically via account tools.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Digital content policies differ from physical retail: accidental Kindle eBook purchases made via 1-Click can be returned within 7 days through "Manage Your Content and Devices" if unread or only minimally read. Unstreamed Prime Video rentals/purchases can be cancelled within 48 hours. Physical retail items adhere to the standard 30-day window.',
    hint: 'Kindle eBooks have a 7-day accidental purchase return window; unwatched Prime Video within 48h.',
    referenceSource: 'Amazon Digital Services - Kindle & Prime Video Return Policies',
    isVerified: true
  },
  {
    id: 'sec-009',
    category: 'security_fundamentals',
    topic: '7. Types of Items (Retail, FBA, MFN, Digital, Hazmat, High-Value OTP)',
    difficulty: 'advanced',
    type: 'single_choice',
    question: 'What special shipping limitations and carrier restrictions apply to orders containing Hazardous Materials (Hazmat, e.g. lithium-ion power banks, aerosol hairsprays, perfume, or paint)?',
    options: [
      { id: 'opt_1', text: 'They must be shipped via hot air balloon within 2 hours.', distractorReason: 'Absurd distractor.' },
      { id: 'opt_2', text: 'Hazmat items are restricted to Ground Transportation, are strictly ineligible for expedited Air Shipping (Next-Day Air / Two-Day Air), and cannot be shipped to freight forwarders or APO/FPO military addresses.', distractorReason: '' },
      { id: 'opt_3', text: 'Hazmat items can only be bought by licensed government contractors.', distractorReason: 'Everyday consumer products like batteries and perfumes are classified as Hazmat.' },
      { id: 'opt_4', text: 'There are zero restrictions on any hazardous materials.', distractorReason: 'Violates FAA and DOT federal transportation laws.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Federal transportation safety regulations (FAA/DOT) prohibit air transport of flammable liquids, pressurized aerosols, and high-capacity lithium batteries. These items must travel exclusively via Ground shipping, cannot qualify for Next-Day Air, and cannot be shipped to APO/FPO or remote offshore islands.',
    hint: 'Hazmat items travel strictly by ground shipping and cannot be shipped by air or to military APO/FPO addresses.',
    referenceSource: 'Amazon Logistics - Dangerous Goods & Hazmat Transportation SOP',
    isVerified: true
  },
  {
    id: 'sec-010',
    category: 'security_fundamentals',
    topic: '7. Types of Items (Retail, FBA, MFN, Digital, Hazmat, High-Value OTP)',
    difficulty: 'advanced',
    type: 'single_choice',
    question: 'A customer calls stating: "The delivery driver is at my front door with my new $1,200 iPhone, but he refuses to hand it to me unless I give him a 6-digit One-Time Password (OTP)! I don\'t have it! Override this code in your computer right now so he gives me my phone!" How must the voice associate respond?',
    options: [
      { id: 'opt_1', text: 'Override the security protocol and command the driver to drop the phone immediately.', distractorReason: 'Voice associates have no technical capability or authority to override driver delivery OTPs.' },
      { id: 'opt_2', text: 'Explain that for high-value merchandise, the 6-digit OTP is an automated security protection sent to the customer\'s registered email and visible under "Track Package" in their Amazon account; guide the customer to locate the OTP in their email/app to read to the driver.', distractorReason: '' },
      { id: 'opt_3', text: 'Advise the customer to physically tackle the delivery driver.', distractorReason: 'Dangerous, illegal, and unacceptable advice.' },
      { id: 'opt_4', text: 'Change the customer\'s password and cancel the delivery.', distractorReason: 'Disrupts account access and fails to resolve the active delivery.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'High-value items (such as smartphones, laptops, expensive cameras) require an OTP (One-Time Password) upon delivery to prevent package theft and misdelivery. The associate cannot override or bypass the OTP. The representative calmly guides the customer to check their registered email inbox or tap "Track Package" in the Amazon app to read the 6-digit code to the driver.',
    hint: 'Associates cannot bypass OTPs; guide the customer to find the OTP in their email or Track Package screen.',
    referenceSource: 'Amazon Logistics - High-Value Item One-Time Password (OTP) Delivery SOP',
    isVerified: true
  },
  {
    id: 'sec-011',
    category: 'security_fundamentals',
    topic: '7. Types of Items (Retail, FBA, MFN, Digital, Hazmat, High-Value OTP)',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'What delivery requirements distinguish "Heavy and Bulky" merchandise (such as 75-inch TVs, treadmills, or sectional sofas) from standard parcel deliveries?',
    options: [
      { id: 'opt_1', text: 'Heavy and bulky orders are delivered by standard postal carriers and placed in standard mailboxes.', distractorReason: 'Oversized freight cannot fit into residential mailboxes.' },
      { id: 'opt_2', text: 'They require Scheduled Delivery where the customer selects a specific delivery date and time window, are handled by specialized freight carriers, and require an adult (18+) signature upon delivery.', distractorReason: '' },
      { id: 'opt_3', text: 'The customer must provide their own forklift at the curb.', distractorReason: 'Freight line delivery vehicles include liftgate equipment.' },
      { id: 'opt_4', text: 'Heavy items are always delivered in separate pieces over 12 months.', distractorReason: 'Items are delivered as complete freight shipments.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Heavy & Bulky items (over 50-70 lbs or oversized dimensions) utilize specialized freight carriers (e.g. Amazon Freight, CEVA). The customer must schedule an appointment delivery window, an adult must be present to sign, and optional services (Room of Choice delivery, unboxing, haul-away) can be selected.',
    hint: 'Heavy & Bulky orders require scheduled delivery appointment windows and adult signatures.',
    referenceSource: 'Amazon Special Delivery - Heavy & Bulky Freight Delivery Guidelines',
    isVerified: true
  },
  {
    id: 'sec-012',
    category: 'security_fundamentals',
    topic: '7b. Types of Orders (Standard Retail, Pre-orders, S&S, Replacement $0, Split)',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'A customer places a "Pre-Order" for an upcoming video game scheduled for release in 3 months. When will the customer\'s card be charged, and how does the "Pre-Order Price Guarantee" protect them?',
    options: [
      { id: 'opt_1', text: 'The card is charged immediately, and if the price drops later, Amazon keeps the difference as a processing fee.', distractorReason: 'Pre-orders bill upon shipment, and price guarantee passes savings to the customer.' },
      { id: 'opt_2', text: 'The card is charged only when the item enters the shipping process; the Pre-Order Price Guarantee ensures the customer is automatically billed the lowest price offered on Amazon between the order date and release date.', distractorReason: '' },
      { id: 'opt_3', text: 'Pre-orders must be paid with physical gold coins delivered by courier.', distractorReason: 'Absurd distractor.' },
      { id: 'opt_4', text: 'Pre-orders are charged double the retail price to reserve stock.', distractorReason: 'Deceptive and untrue.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'For physical pre-orders, Amazon never charges the customer\'s credit or debit card until the item enters fulfillment and is dispatched. Furthermore, Amazon\'s Pre-Order Price Guarantee automatically charges the lowest price displayed on Amazon.com between the time the customer ordered and the release date.',
    hint: 'Cards bill upon shipment; customers automatically pay the lowest price offered prior to release.',
    referenceSource: 'Amazon Pre-Order Policy & Pre-Order Price Guarantee (POPG) SOP',
    isVerified: true
  },
  {
    id: 'sec-013',
    category: 'security_fundamentals',
    topic: '7b. Types of Orders (Standard Retail, Pre-orders, S&S, Replacement $0, Split)',
    difficulty: 'advanced',
    type: 'single_choice',
    question: 'When Amazon Customer Service generates a "Zero-Cost Replacement Order" ($0.00 total) for a customer whose original item arrived defective, what critical return policy and consequence must be communicated to the customer?',
    options: [
      { id: 'opt_1', text: 'The customer can keep both items indefinitely with zero obligation to return the defective one.', distractorReason: 'Replacements require returning the original within 30 days unless a returnless concession is authorized.' },
      { id: 'opt_2', text: 'The customer must return the original defective item using the prepaid return label within 30 days; otherwise, Amazon will automatically charge their original payment method for the price of the replacement item (Retro Charge).', distractorReason: '' },
      { id: 'opt_3', text: 'The customer must pay a $50 administrative fee upon receipt.', distractorReason: 'Zero-cost replacements carry no administrative fees.' },
      { id: 'opt_4', text: 'The customer must destroy both units on a live video stream.', distractorReason: 'Unreasonable and absurd.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'When a zero-cost replacement order is dispatched, an automated 30-day return window is assigned to the original item. The customer must drop off the original unit using the provided prepaid return method within 30 days. If the warehouse does not scan the return within 30 days, a retroactive charge ("Retro Charge") is automatically levied.',
    hint: 'Customers must return the original unit within 30 days to avoid a retro charge for the replacement.',
    referenceSource: 'Amazon Customer Service - Zero-Cost Replacement & Return Window SOP',
    isVerified: true
  },

  // ================= 2. ORDER ISSUES AND DELIVERY =================
  {
    id: 'ord-001',
    category: 'order_delivery',
    topic: '14. Delivered Not Received (DNR)',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'A North American customer calls stating their Amazon package is marked "Delivered" 3 hours ago by Amazon Logistics (AMZL), but they cannot locate it. What is the mandatory standard operating procedure (SOP) before issuing any concession or replacement?',
    options: [
      { id: 'opt_1', text: 'Immediately process an advanced next-day replacement to maintain high CSAT.', distractorReason: 'Violates standard SOP; replacements without observing the mandatory buffer period lead to duplicate deliveries and concession waste.' },
      { id: 'opt_2', text: 'Instruct the customer to check surroundings (porch, garage, neighbors) and enforce the mandatory 24-48 hour buffer period from the delivery timestamp before processing a concession.', distractorReason: '' },
      { id: 'opt_3', text: 'Direct the customer to file a police report immediately before Amazon can assist.', distractorReason: 'Police reports are only requested for suspicious high-value investigation cases after buffer expiration, not during initial 3-hour check.' },
      { id: 'opt_4', text: 'Issue an immediate full refund to their original credit card without checking tracking details.', distractorReason: 'Concessions cannot be issued within the active delivery buffer without authorized system override.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Under Amazon NA Voice SOP for DNR (Delivered Not Received), carriers frequently scan packages prematurely as delivered while still on the truck. The representative must empathize, guide the customer to inspect safe drop locations and with household members, and explain that a 24 to 48-hour buffer period must elapse before initiating a replacement or refund.',
    hint: 'Carriers sometimes mark packages delivered before physical handoff. Standard SOP requires waiting a specific buffer period.',
    referenceSource: 'Amazon NA Voice Process SOP - DNR Buffer Guidelines',
    isVerified: true
  },
  {
    id: 'ord-002',
    category: 'order_delivery',
    topic: '9. Where Is My Stuff? (WIS)',
    difficulty: 'beginner',
    type: 'single_choice',
    question: 'An order is in "Shipped" status with an estimated delivery date for today by 8:00 PM. The customer calls at 2:00 PM asking why it has not arrived yet. What is the correct response?',
    options: [
      { id: 'opt_1', text: 'Cancel the order and reorder with expedited overnight shipping.', distractorReason: 'Shipped orders cannot be canceled by CS, and the package is currently on time.' },
      { id: 'opt_2', text: 'Inform the customer that carriers deliver up to 8:00 PM local time, provide the latest tracking checkpoint, and reassure them that the order is on schedule.', distractorReason: '' },
      { id: 'opt_3', text: 'Call the AMZL driver directly on their personal mobile to speed up the stop.', distractorReason: 'Customer service agents cannot dispatch or alter driver routes directly during active transit.' },
      { id: 'opt_4', text: 'Offer a $20 promotional credit immediately because the customer is impatient.', distractorReason: 'Concessions should not be issued for orders that are still within their promised delivery window.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Promised delivery windows for residential deliveries extend until 8:00 PM local carrier time. The representative should confirm the tracking status, verify the shipping address, and set clear expectations that the carrier still has until 8:00 PM to deliver.',
    hint: 'Check the delivery window promised at checkout before escalating.',
    referenceSource: 'Standard Call Flow - Tracking & Delivery Windows',
    isVerified: true
  },
  {
    id: 'ord-003',
    category: 'order_delivery',
    topic: '16. Wrong Items / Switcheroo',
    difficulty: 'advanced',
    type: 'single_choice',
    question: 'A customer ordered an expensive Apple iPad but received a box containing a cheap brick/toy instead. In internal process terminology, this suspected item substitution or tamper is referred to as what, and what action is required?',
    options: [
      { id: 'opt_1', text: 'Switcheroo / Mispack; tag the account and follow the specific high-value Incident Verification protocol rather than an instant no-return concession.', distractorReason: '' },
      { id: 'opt_2', text: 'Minor PWAO; ask the customer to keep the brick and refund the $900 immediately.', distractorReason: 'High-value item substitutions require strict asset protection escalation to prevent fraudulent returns.' },
      { id: 'opt_3', text: 'Fulfillment Error; instruct the customer to ship the item back to the third-party seller directly.', distractorReason: 'Amazon FBA orders are inspected via Amazon return centers with specific hazardous/tampered package logging.' },
      { id: 'opt_4', text: 'System Glitch; reorder the iPad as a complimentary gift order without logging.', distractorReason: 'Circumventing SOP auditing violates internal security compliance.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'When a customer receives an entirely different, suspicious item in place of a high-value unit (often called a switcheroo or suspect mispack), agents must not issue casual blind refunds. They must document serial numbers, photograph packaging if required by SOP, create an escalation ticket, and guide the customer through the authorized verification pipeline.',
    hint: 'High-value discrepancies require security logging rather than instant concession issuance.',
    referenceSource: 'Amazon Customer Service Escalation & Asset Protection Guidelines',
    isVerified: true
  },
  {
    id: 'ord-004',
    category: 'order_delivery',
    topic: '10. Delivery Status Messages',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'A customer\'s tracking detail reads: "Delivery Exception: Business closed / Access code needed." The customer lives in a gated apartment complex. What is the best troubleshooting guidance?',
    options: [
      { id: 'opt_1', text: 'Tell the customer the driver will never return and their order will be destroyed.', distractorReason: 'False; carriers re-attempt delivery.' },
      { id: 'opt_2', text: 'Explain that the driver attempted delivery but could not access the gate or building, verify and update their delivery instructions with gate codes in their account, and confirm that delivery will re-attempt on the next business day.', distractorReason: '' },
      { id: 'opt_3', text: 'Instruct the customer to wait by the gate all night.', distractorReason: 'Unreasonable and unprofessional advice.' },
      { id: 'opt_4', text: 'Cancel the order and issue a store credit.', distractorReason: 'Premature cancellation when the carrier can re-attempt with updated gate instructions.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Delivery Exception messages indicate obstacles such as secure gates, missing key fob access, or closed businesses. Agents should review delivery notes, add access codes, and reassure the caller that the carrier automatically re-attempts on the next business day.',
    hint: 'Access code exceptions require updating carrier gate instructions.',
    referenceSource: 'Amazon Logistics (AMZL) Delivery Exception Management',
    isVerified: true
  },
  {
    id: 'ord-005',
    category: 'order_delivery',
    topic: '15. Missing Items',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'A customer ordered 3 items in a single order. The cardboard box arrived completely sealed and undamaged, but upon opening, only 2 of the 3 items were inside. What is this scenario called and how is it resolved?',
    options: [
      { id: 'opt_1', text: 'Shortage / Missing Item from Package; verify whether the missing item was split into a separate tracking parcel. If all 3 were marked in this single parcel, process a replacement or refund for the missing item.', distractorReason: '' },
      { id: 'opt_2', text: 'DNR; make the customer wait 48 hours for the missing item to materialize in the box.', distractorReason: 'DNR applies when the entire parcel is missing, not for an item omitted from a delivered box.' },
      { id: 'opt_3', text: 'Charge the customer a fee for reporting a missing item.', distractorReason: 'Violates company policy.' },
      { id: 'opt_4', text: 'Instruct the customer to return the two items they did receive before helping.', distractorReason: 'The customer keeps what they received; only the missing item is remediated.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'Warehouse fulfillment sometimes consolidates multiple items into one box, but occasionally an item is omitted (shortage) or shipped separately. The associate must first check if a separate tracking number exists. If confirmed missing from the delivered parcel, issue a replacement or refund for that specific item.',
    hint: 'Check for split shipments first, then replace or refund the omitted item.',
    referenceSource: 'Amazon Problem with an Order (PWAO) - Missing Item SOP',
    isVerified: true
  },
  {
    id: 'ord-006',
    category: 'order_delivery',
    topic: '21. Order Cancellation',
    difficulty: 'beginner',
    type: 'single_choice',
    question: 'A customer calls to cancel an order, but tracking in the system indicates the status is already "Preparing for Shipment" or "Shipped". Can the representative guarantee immediate cancellation?',
    options: [
      { id: 'opt_1', text: 'Yes, representatives can remotely stop any delivery truck instantly.', distractorReason: 'Customer service cannot alter dispatched transit instantly.' },
      { id: 'opt_2', text: 'No; once an order enters the shipping process, cancellation cannot be guaranteed. The agent can submit a cancellation request or instruct the customer to refuse delivery upon arrival or use the online return center once delivered.', distractorReason: '' },
      { id: 'opt_3', text: 'Agents should promise delivery is cancelled and hang up.', distractorReason: 'Misleading the customer creates repeat contacts and DSAT.' },
      { id: 'opt_4', text: 'Tell the customer that cancellations are illegal.', distractorReason: 'Completely false.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Once an order has advanced to the fulfillment pipeline ("Preparing for Shipment" or "Shipped"), system automation prevents instant cancellation. Associates can request carrier return-to-sender or advise the customer to refuse delivery or initiate a standard return upon receipt.',
    hint: 'Dispatched orders cannot be guaranteed for cancellation; advise return upon delivery.',
    referenceSource: 'Amazon Order Cancellation SOP',
    isVerified: true
  },
  {
    id: 'ord-007',
    category: 'order_delivery',
    topic: '22. Estimated Delivery Date (EDD)',
    difficulty: 'beginner',
    type: 'single_choice',
    question: 'What is the standard promise window associated with an Estimated Delivery Date (EDD) for residential addresses?',
    options: [
      { id: 'opt_1', text: 'Deliveries must arrive before 12:00 PM noon.', distractorReason: 'Standard residential deliveries are not restricted to noon.' },
      { id: 'opt_2', text: 'Carriers are authorized to deliver residential packages up to 8:00 PM local customer time on the promised date.', distractorReason: '' },
      { id: 'opt_3', text: 'The delivery window extends indefinitely for 30 days without explanation.', distractorReason: 'EDD specifies an exact promised arrival date.' },
      { id: 'opt_4', text: 'Deliveries only happen between 2:00 AM and 5:00 AM.', distractorReason: 'Only specialized overnight slots use early morning delivery.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Amazon standard residential deliveries provide an EDD promise through 8:00 PM local time. Packages are not officially categorized as late until after 8:00 PM on the promised date.',
    hint: 'Residential delivery windows extend through 8:00 PM local carrier time.',
    referenceSource: 'Amazon Delivery Promise Guidelines - EDD',
    isVerified: true
  },
  {
    id: 'ord-008',
    category: 'order_delivery',
    topic: '8. Problems with an Order',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'A customer calls stating that an order containing multiple household items arrived with several issues: one jar of coffee is smashed, a pack of paper towels is missing, and the box arrived 3 days after the promised date. What is the correct standard operating procedure for handling a compound Problem With An Order (PWAO)?',
    options: [
      { id: 'opt_1', text: 'Instruct the customer to place three separate phone calls so three different agents can handle each issue separately.', distractorReason: 'Fragmenting issues harms First Contact Resolution (FCR) and severely degrades customer experience.' },
      { id: 'opt_2', text: 'Take full ownership of the call, systematically log and verify each issue in AC3, process a returnless replacement/refund for the smashed coffee, replace or refund the missing paper towels, and refund any paid shipping or apply an eligible late delivery concession.', distractorReason: '' },
      { id: 'opt_3', text: 'Tell the customer that Amazon only permits resolving one single defect per order.', distractorReason: 'Completely false; representatives must address all verified defects on the contact.' },
      { id: 'opt_4', text: 'Demand that the customer photograph every item and mail the crushed jar of liquid coffee back immediately.', distractorReason: 'Returning broken glass or leaking liquids violates hazardous return policies.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Under Amazon PWAO (Problem with an Order) workflow, the representative must take complete ownership of compound issues: break down each item concern methodically, check fulfillment records, remediate damaged/missing items according to hazard and shortage SOPs, and address delivery delay concessions.',
    hint: 'Take holistic ownership: address each item defect systematically without forcing repeat calls.',
    referenceSource: 'Amazon Customer Service - Compound PWAO Resolution Guide',
    isVerified: true
  },
  {
    id: 'ord-009',
    category: 'order_delivery',
    topic: '11. Types of Delivery Methods',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'A customer who is away on vacation calls asking about Amazon Hub Locker pickup rules. Their package arrived at an Amazon Locker today. What are the pickup window rules and what happens if they do not collect the parcel in time?',
    options: [
      { id: 'opt_1', text: 'The customer has 3 calendar days to pick up the package using their 6-digit code or barcode; if uncollected after 3 days, the locker automatically returns the package to Amazon for a full refund.', distractorReason: '' },
      { id: 'opt_2', text: 'The package remains in the locker for 6 months with a daily holding fee of $5.', distractorReason: 'Lockers have tight turnover windows to accommodate other customer deliveries.' },
      { id: 'opt_3', text: 'Lockers are discarded and emptied after 24 hours with no refund issued.', distractorReason: 'Locker orders are returned and refunded automatically after the pickup window expires.' },
      { id: 'opt_4', text: 'The customer can extend the locker reservation indefinitely by calling customer service.', distractorReason: 'Locker reservation windows are automated and cannot be manually extended by tier-1 CS.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'Amazon Hub Locker orders allow a strict 3-day pickup window from delivery notification. If the customer does not retrieve the order within 3 business days, the carrier automatically returns the parcel to the fulfillment center, and an automatic refund is triggered.',
    hint: 'Amazon Hub Lockers hold packages for 3 calendar days before auto-returning for refund.',
    referenceSource: 'Amazon Hub Locker & Pickup Location Operations SOP',
    isVerified: true
  },
  {
    id: 'ord-010',
    category: 'order_delivery',
    topic: '12. Shipping Speeds and Shipping Methods',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'How do Amazon Shipping Speeds (Same-Day, One-Day, Two-Day, and Standard Shipping) operate regarding order cut-off times and delivery guarantees?',
    options: [
      { id: 'opt_1', text: 'Shipping speeds only depend on when the package leaves the warehouse, with no promised calendar date provided at checkout.', distractorReason: 'Amazon provides an explicit Guaranteed or Estimated Delivery Date at checkout based on order placement time.' },
      { id: 'opt_2', text: 'Each shipping speed displays an "order within" countdown timer; orders placed before the cut-off qualify for the promised delivery date, whereas orders placed after the cut-off roll forward to the next business delivery slot.', distractorReason: '' },
      { id: 'opt_3', text: 'Same-Day delivery guarantees delivery within 30 minutes of pressing the checkout button.', distractorReason: 'Same-day delivery operates across designated morning or evening carrier delivery windows, not 30 minutes.' },
      { id: 'opt_4', text: 'Standard shipping is guaranteed to arrive faster than One-Day delivery.', distractorReason: 'One-Day delivery is an expedited tier faster than Standard.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Shipping speeds at Amazon are tied to regional fulfillment cut-off times shown as "Order within X hrs Y mins". Orders placed prior to cut-off meet the promised delivery date. Missed cut-offs automatically adjust the promised delivery date on the order summary.',
    hint: 'Delivery promises depend on regional order cut-off countdowns displayed at checkout.',
    referenceSource: 'Amazon Logistics - Shipping Speeds & Order Cut-Off Guidelines',
    isVerified: true
  },
  {
    id: 'ord-011',
    category: 'order_delivery',
    topic: '13. Late Delivery',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'A customer paid $9.99 for Priority One-Day Shipping for an essential baby monitor. The guaranteed delivery date was yesterday by 8:00 PM, but the package is still in transit with a regional carrier. The customer calls frustrated. What resolution is mandatory according to Amazon Guaranteed Delivery policy?',
    options: [
      { id: 'opt_1', text: 'Refuse any compensation because carrier delays are beyond Amazon\'s control.', distractorReason: 'Amazon guarantees delivery dates when expedited fees are charged.' },
      { id: 'opt_2', text: 'Apologize empathetically using ACA, automatically refund the $9.99 paid shipping fee, provide tracking updates with the latest transit checkpoint, and offer a policy-compliant courtesy credit if warranted.', distractorReason: '' },
      { id: 'opt_3', text: 'Tell the customer to purchase another baby monitor at a local store and send the receipt to Amazon for cash reimbursement.', distractorReason: 'Amazon does not reimburse external retail purchases.' },
      { id: 'opt_4', text: 'Cancel the in-transit truck delivery immediately.', distractorReason: 'Dispatched in-transit trucks cannot be instantly canceled.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Under the Amazon Guaranteed Delivery policy, if an order with paid expedited shipping arrives after the guaranteed delivery date, the customer is entitled to a full refund of the shipping fee charged. The agent also provides updated tracking and empathetic assurance.',
    hint: 'Paid shipping fees must be refunded if guaranteed delivery dates are missed.',
    referenceSource: 'Amazon Guaranteed Delivery & Late Package SOP',
    isVerified: true
  },
  {
    id: 'ord-012',
    category: 'order_delivery',
    topic: '17. Damaged Products',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'A customer receives a heavy box of laundry detergent and olive oil. The box arrived soaked through, crushed, with glass shards and liquid detergent leaking out. The customer asks: "Do I really have to tape up this leaking box and take it to UPS?" What is the correct protocol?',
    options: [
      { id: 'opt_1', text: 'Yes, Amazon requires all merchandise, including broken glass and leaking caustic liquids, to be shipped back before any refund.', distractorReason: 'Violates carrier safety regulations and Amazon hazardous materials policies.' },
      { id: 'opt_2', text: 'Instruct the customer to safely dispose of the broken glass and leaking liquid locally, waive the physical return (Returnless Resolution), and immediately issue a replacement or refund.', distractorReason: '' },
      { id: 'opt_3', text: 'Instruct the customer to drink the olive oil to prove it was authentic.', distractorReason: 'Absurd and hazardous distractor.' },
      { id: 'opt_4', text: 'Advise the customer to bring the leaky box into an Amazon corporate office in Seattle.', distractorReason: 'Unprofessional.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Carrier safety regulations (UPS, FedEx, USPS) and Amazon internal policies prohibit customers from shipping packages containing leaking fluids, shattered glass, or chemical hazards. Representatives must initiate a Returnless Replacement or Refund and advise safe domestic disposal.',
    hint: 'Hazardous liquids and broken glass must never be returned through postal carriers.',
    referenceSource: 'Amazon Customer Service - Damaged & Hazardous Goods Handling SOP',
    isVerified: true
  },
  {
    id: 'ord-013',
    category: 'order_delivery',
    topic: '18. Defective Products',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'A customer purchased an Amazon Echo smart speaker 18 days ago. It has suddenly stopped powering on despite trying multiple wall outlets. What is the correct customer service procedure?',
    options: [
      { id: 'opt_1', text: 'Inform the customer that electronics cannot be returned once plugged in.', distractorReason: 'False; electronics are covered by standard 30-day return/replacement policies.' },
      { id: 'opt_2', text: 'Perform basic device troubleshooting (power cycle/outlet test); if unresolved, since the purchase is within the 30-day window, create a zero-cost replacement order or provide a prepaid return label for a full refund.', distractorReason: '' },
      { id: 'opt_3', text: 'Instruct the customer to sue the factory manufacturer in court.', distractorReason: 'Unprofessional and unhelpful.' },
      { id: 'opt_4', text: 'Demand that the customer open the device with a screwdriver and solder the motherboard.', distractorReason: 'CS agents never advise unauthorized electrical tampering.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'For defective products reported within the standard 30-day post-delivery window, Amazon CS assists with basic troubleshooting. If the defect persists, the customer is entitled to a zero-cost replacement or full return for refund under Amazon standard warranty coverage.',
    hint: 'Items defective within 30 days are fully eligible for replacement or return.',
    referenceSource: 'Amazon Device Support & Defective Merchandise Guidelines',
    isVerified: true
  },
  {
    id: 'ord-014',
    category: 'order_delivery',
    topic: '19. Product Not as Expected',
    difficulty: 'beginner',
    type: 'single_choice',
    question: 'A customer orders an area rug described as "Deep Navy Blue" on the product detail page. When unpacked, the color appears distinctly greenish-teal. The customer calls saying the product is not as expected. What is the appropriate guidance?',
    options: [
      { id: 'opt_1', text: 'Blame the customer for having poor room lighting and refuse assistance.', distractorReason: 'Blaming customer perception violates empathy and professional standards.' },
      { id: 'opt_2', text: 'Explain that color variations can occur, reassure the customer that items in original condition are eligible for return within 30 days under the reason "Product not as expected / different from website", and generate a prepaid return drop-off label.', distractorReason: '' },
      { id: 'opt_3', text: 'Require the customer to repaint their living room to match the teal rug.', distractorReason: 'Ridiculous and unacceptable advice.' },
      { id: 'opt_4', text: 'Charge the customer a 50% dissatisfaction penalty fee.', distractorReason: 'Amazon does not penalize customers for returns within policy.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'When an item received does not match the customer\'s aesthetic expectation or listing depiction, Amazon\'s 30-day return policy allows the customer to return the item in original condition for a full refund. The associate should facilitate the return smoothly.',
    hint: 'Products not matching customer expectations are fully returnable within 30 days.',
    referenceSource: 'Amazon Online Return Center - Reason Codes & Policies',
    isVerified: true
  },
  {
    id: 'ord-015',
    category: 'order_delivery',
    topic: '20. Product Mismatch',
    difficulty: 'advanced',
    type: 'single_choice',
    question: 'A customer ordered a Samsung 1TB Portable SSD (ASIN: B08GTY...), but upon opening the shipping box, the retail packaging inside is clearly labeled "Samsung 500GB Portable SSD". What is this issue called and what actions should the agent take?',
    options: [
      { id: 'opt_1', text: 'Product Mismatch / ASIN Bin Check issue: Apologize, process an immediate zero-cost replacement for the correct 1TB item, issue a prepaid return label for the mismatched 500GB unit, and flag the ASIN for an inventory bin check to prevent repeat warehouse mispicks.', distractorReason: '' },
      { id: 'opt_2', text: 'Customer Theft: Accuse the customer of trying to scam Amazon and suspend their account.', distractorReason: 'Warehouse mislabeling or mispicking is common; accusing customers is a severe QA violation.' },
      { id: 'opt_3', text: 'Instruct the customer to keep the 500GB unit and buy an extra 500GB flash drive with their own money.', distractorReason: 'Does not resolve the customer\'s paid order fulfillment error.' },
      { id: 'opt_4', text: 'Tell the customer that 500GB is close enough to 1TB so no action is warranted.', distractorReason: 'Unacceptable handling of a hardware specification mismatch.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'A Product Mismatch occurs when the physical item received does not match the ordered ASIN specifications (often due to warehouse bin check errors or supplier mislabeling). The associate arranges a replacement for the correct model, provides return instructions, and submits an inventory bin check in internal tools.',
    hint: 'Mismatched products require replacement, return of the wrong item, and an inventory bin check.',
    referenceSource: 'Amazon Customer Service - Product Mismatch & Bin Check SOP',
    isVerified: true
  },
  {
    id: 'ord-016',
    category: 'order_delivery',
    topic: '23. Revised Delivery Date (RDD, if used in your training)',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'A customer\'s order tracking updates with a notification: "Severe weather delay: Revised Delivery Date (RDD) is now Friday by 8:00 PM (originally Wednesday)". The customer calls on Thursday morning demanding an immediate full refund and replacement because the original date passed. What is the correct SOP?',
    options: [
      { id: 'opt_1', text: 'Issue an instant refund and order a replacement simultaneously right now.', distractorReason: 'Premature concession while the parcel is actively moving towards the Revised Delivery Date leads to duplicate delivery waste.' },
      { id: 'opt_2', text: 'Explain empathetically that carrier tracking updated with an official Revised Delivery Date due to transit delays, set expectations to allow delivery through the RDD (Friday 8:00 PM), and assure the customer that if not delivered by then, lost-in-transit resolutions will be initiated.', distractorReason: '' },
      { id: 'opt_3', text: 'Tell the customer that snowstorms are illegal and the carrier driver will be fired.', distractorReason: 'Unprofessional and irrational.' },
      { id: 'opt_4', text: 'Hang up immediately because the order has an RDD.', distractorReason: 'Hanging up violates call flow standards.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'When carriers issue an official Revised Delivery Date (RDD) due to weather or logistics bottlenecks, the active delivery SLA shifts to the RDD. Associates must educate the customer, set expectations through the new date, and only process lost-package concessions if the RDD passes without delivery.',
    hint: 'Allow the package to arrive within the updated Revised Delivery Date window before issuing concessions.',
    referenceSource: 'Amazon Logistics - RDD & Weather Delay Guidelines',
    isVerified: true
  },
  {
    id: 'ord-017',
    category: 'order_delivery',
    topic: '24. Replacement Eligibility and Buffer Time',
    difficulty: 'advanced',
    type: 'single_choice',
    question: 'An associate attempts to create a zero-cost replacement for a damaged coffee grinder in AC3, but the internal tool displays an error: "Item currently out of stock / No fulfillment inventory available". What is the compliant procedure?',
    options: [
      { id: 'opt_1', text: 'Order the item from Walmart.com using a personal credit card.', distractorReason: 'Circumventing Amazon internal systems with personal funds is strictly prohibited.' },
      { id: 'opt_2', text: 'Inform the customer that because fulfillment centers are currently out of inventory for an exact replacement, the approved resolution is to issue a full refund upon return drop-off (or returnless if eligible), allowing the customer to re-order once restocked or choose an alternate model.', distractorReason: '' },
      { id: 'opt_3', text: 'Tell the customer to check back every 5 minutes until inventory appears.', distractorReason: 'Unreasonable expectation for a customer.' },
      { id: 'opt_4', text: 'Cancel the customer\'s Prime subscription without permission.', distractorReason: 'Completely unrelated and abusive.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Replacement eligibility requires active inventory in Amazon fulfillment centers. If an item is out of stock across all fulfillment nodes, the system cannot generate a replacement order. The associate must transition to the alternative resolution: processing a full refund so the customer can select an alternative.',
    hint: 'When replacement stock is unavailable, process a full refund as the compliant resolution.',
    referenceSource: 'Amazon Order Management - Out of Stock Replacement Protocol',
    isVerified: true
  },
  {
    id: 'ord-018',
    category: 'order_delivery',
    topic: '9. Where Is My Stuff? (WMS / WIS - Order Tracking, Carrier Milestones & Warehouse Fulfillment Scans)',
    difficulty: 'beginner',
    type: 'single_choice',
    question: 'During a "Where\'s My Stuff?" (WMS / WIS) inbound voice call, what is the first operational step an associate must execute after completing the professional greeting and authenticating the customer?',
    options: [
      { id: 'opt_1', text: 'Immediately issue a full refund to end the call before checking tracking.', distractorReason: 'Premature refunding without checking status violates concession integrity and financial compliance.' },
      { id: 'opt_2', text: 'Locate the specific Order ID in AC3, check the latest carrier tracking milestone, verify the Estimated Delivery Date (EDD), and identify the current physical scan location and status of the parcel.', distractorReason: '' },
      { id: 'opt_3', text: 'Tell the caller that shipping logistics details are classified corporate secrets.', distractorReason: 'Absurd and deceptive.' },
      { id: 'opt_4', text: 'Place the customer on hold for 45 minutes to see if the driver arrives.', distractorReason: 'Severe hold time and handling time violation.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'WMS / WIS call handling requires systematic investigation: identify the order, check the current carrier scan (e.g. Carrier Facility, Out for Delivery, Delayed), compare against the Estimated Delivery Date (EDD) promise, and provide a clear, empathetic explanation to the customer.',
    hint: 'Check the Order ID in AC3, verify tracking milestones, and compare against the EDD promise.',
    referenceSource: 'Amazon NA Voice Process - WIS/WMS Inbound Call Handling SOP',
    isVerified: true
  },
  {
    id: 'ord-019',
    category: 'order_delivery',
    topic: '10. Delivery Status Messages',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'An order\'s WMS tracking displays the status message: "Delivery Attempted - Business Closed / Front Door Inaccessible" at 5:30 PM. The customer calls at 6:00 PM asking what will happen next. What should the associate advise?',
    options: [
      { id: 'opt_1', text: 'The package was incinerated and the customer must re-purchase at full price.', distractorReason: 'False and panic-inducing.' },
      { id: 'opt_2', text: 'The carrier attempted delivery but could not access the location safely; the carrier will automatically re-attempt delivery on the next business day, and the customer can provide delivery instructions (gate code/safe spot) in their account.', distractorReason: '' },
      { id: 'opt_3', text: 'The customer must rent a helicopter to intercept the delivery van immediately.', distractorReason: 'Unprofessional nonsense.' },
      { id: 'opt_4', text: 'An immediate fraud report will be filed against the customer\'s address.', distractorReason: 'Delivery attempts do not trigger fraud reports.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'When tracking indicates a delivery attempt failed due to access issues (closed business, locked gate, loose dog), carriers automatically re-attempt on the following business day. The associate should reassure the caller, verify the address, and help add carrier delivery instructions in "Your Addresses".',
    hint: 'Carriers re-attempt delivery on the next business day when an attempt was inaccessible.',
    referenceSource: 'Amazon Logistics (AMZL) - Delivery Exceptions & Re-Attempt Guidelines',
    isVerified: true
  },
  {
    id: 'ord-020',
    category: 'order_delivery',
    topic: '9. Where Is My Stuff? (WMS / WIS - Order Tracking, Carrier Milestones & Warehouse Fulfillment Scans)',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'In Amazon fulfillment logistics and Warehouse Management Systems (WMS), an order moves from "Order Placed" to "Preparing for Dispatch" (Picking / Packing in the FC). Why can an associate generally NO LONGER guarantee cancellation at this stage?',
    options: [
      { id: 'opt_1', text: 'Because cancellation fees are strictly 100% of the item cost.', distractorReason: 'Amazon never charges cancellation fees.' },
      { id: 'opt_2', text: 'Because the items have been assigned to warehouse robotic pickers, packaged into shipping cartons, and staged for carrier loading docks; cancelling is no longer possible once processed into the automated fulfillment stream.', distractorReason: '' },
      { id: 'opt_3', text: 'Because Amazon employees are legally forbidden from modifying orders on weekdays.', distractorReason: 'Completely untrue.' },
      { id: 'opt_4', text: 'Because the item has already been delivered to the customer\'s house yesterday.', distractorReason: 'An order preparing for dispatch has not been delivered.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Once an order reaches the automated warehouse fulfillment phase (Pick, Pack, Slap, Ship), physical units are sealed inside boxes among hundreds of thousands of parcels moving along high-speed sorting conveyors. The system cannot intercept the specific box, so customers must use the standard return process or refuse the package upon delivery.',
    hint: 'Warehouse automation seals and routes cartons for carrier dispatch, preventing manual cancellation.',
    referenceSource: 'Amazon Fulfillment Operations - FC Warehouse Picking & Cancellation Boundaries',
    isVerified: true
  },
  {
    id: 'ord-021',
    category: 'order_delivery',
    topic: '11. Types of Delivery Methods',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'A customer tracking a package in WMS notices that tracking originated with Amazon Logistics (AMZL / TBA tracking) but shows a handoff: "Package transferred to local post office (USPS) for final delivery." What is this hybrid delivery method, and what tracking details should the associate explain?',
    options: [
      { id: 'opt_1', text: 'This is a system glitch indicating the package was lost in a river.', distractorReason: 'False and alarming.' },
      { id: 'opt_2', text: 'This represents a carrier handoff (last-mile injection), where Amazon Logistics or a freight line transports the package to the customer\'s local postal facility, and USPS completes the final delivery to the customer\'s mailbox or door.', distractorReason: '' },
      { id: 'opt_3', text: 'The customer must pay $50 cash to the USPS mail carrier to release the item.', distractorReason: 'Delivery is prepaid; postal carriers do not charge ransom fees.' },
      { id: 'opt_4', text: 'The order has been canceled by the government.', distractorReason: 'Completely false.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Amazon frequently uses hybrid carrier services (such as AMZL Last Mile Injection, UPS Mail Innovations, or FedEx SmartPost), where the primary logistics carrier handles long-haul hub transit and hands the package to the local post office (USPS) for final-mile delivery. Associates can provide both tracking IDs if needed.',
    hint: 'Primary carriers transport packages to local postal facilities for USPS to complete final-mile delivery.',
    referenceSource: 'Amazon Transportation Services - Hybrid Carrier Handoff & Last-Mile SOP',
    isVerified: true
  },
  {
    id: 'ord-022',
    category: 'order_delivery',
    topic: '14. Delivered Not Received (DNR)',
    difficulty: 'advanced',
    type: 'single_choice',
    question: 'In a WMS "Where\'s My Stuff" inquiry, what is the critical policy difference between an order that is "Delayed in Transit past EDD by 3+ days" versus an order that was "Marked Delivered 4 hours ago but not found by customer"?',
    options: [
      { id: 'opt_1', text: 'Both situations must wait 6 months before any customer service interaction.', distractorReason: 'Violates all customer satisfaction and SLA standards.' },
      { id: 'opt_2', text: 'A package marked "Delivered" requires a mandatory 24-48 hour buffer period (to account for premature carrier scans), whereas a package stuck "In Transit" with no tracking scans for 3+ business days past EDD can be declared Lost in Transit, allowing immediate replacement or refund.', distractorReason: '' },
      { id: 'opt_3', text: 'Delayed in transit orders require calling 911 immediately.', distractorReason: '911 is strictly for life-threatening emergencies.' },
      { id: 'opt_4', text: 'Delivered packages are never refunded under any circumstances even after 30 days.', distractorReason: 'DNR orders are refunded or replaced once the buffer expires.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Operating rules distinguish between premature delivery scans and lost packages: a package scanned "Delivered" may still be on the carrier van and requires the 24-48 hour DNR buffer. Conversely, an order with stagnant tracking that has failed to deliver 3+ days past the original promise date is classified as "Lost in Transit" (LIT), enabling immediate replacement or refund without further waiting.',
    hint: 'Delivered packages need the 24-48h buffer; stagnant shipments 3+ days past EDD can be resolved as lost in transit immediately.',
    referenceSource: 'Amazon Voice Process - DNR Buffer vs. Lost in Transit (LIT) Guidelines',
    isVerified: true
  },

  // ================= 3. RETURNS, REFUNDS, AND REPLACEMENTS =================
  {
    id: 'ret-001',
    category: 'returns_refunds',
    topic: '31. Refund Processing Timelines',
    difficulty: 'beginner',
    type: 'single_choice',
    question: 'According to official Amazon North America financial policy, what are the accurate refund timelines that an agent MUST quote to a customer?',
    options: [
      { id: 'opt_1', text: 'Amazon Gift Card: 2-3 hours; Credit Card: 3-5 business days; Debit Card / Bank Account: up to 10 business days.', distractorReason: '' },
      { id: 'opt_2', text: 'All refund methods process instantaneously within 5 minutes.', distractorReason: 'Banking settlement networks require multi-day clearance windows.' },
      { id: 'opt_3', text: 'Credit Card: 30 days; Gift Card: 7 days; Debit Card: 24 hours.', distractorReason: 'Inaccurate timeline inversion; gift cards are the fastest method.' },
      { id: 'opt_4', text: 'Amazon does not quote refund timelines; agents must tell customers to contact their local branch.', distractorReason: 'Agents must set clear, accurate SLA expectations per standard call flow.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'Quoting accurate financial timelines is a critical QA parameter: Amazon Gift Cards reflect in 2 to 3 hours; Credit Card refunds take 3 to 5 business days; Debit Cards and direct bank transfers can take up to 10 business days depending on banking institutions.',
    hint: 'Gift cards process in a few hours, credit cards take 3-5 business days, debit cards take up to 10 business days.',
    referenceSource: 'Amazon Financial SLA & Payment Processing Guidelines',
    isVerified: true
  },
  {
    id: 'ret-002',
    category: 'returns_refunds',
    topic: '27. Return Windows',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'What is the standard return window for most physical products purchased on Amazon.com under standard retail policy?',
    options: [
      { id: 'opt_1', text: '14 days from the order date.', distractorReason: '14 days is typical for European digital cooling-off periods, not standard US physical goods.' },
      { id: 'opt_2', text: '30 days from the date of delivery.', distractorReason: '' },
      { id: 'opt_3', text: '90 days for all items without exception.', distractorReason: '90 days applies to Renewed products and baby registries, not general retail items.' },
      { id: 'opt_4', text: 'Indefinite, as long as the customer maintains an active Prime subscription.', distractorReason: 'Prime membership does not eliminate return window limits.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Standard Amazon policy allows returns of most items within 30 days of delivery. Extended holiday return policies may apply seasonally (e.g., items bought in Nov/Dec returnable through Jan 31).',
    hint: 'The benchmark standard return window is counted from delivery date.',
    referenceSource: 'Amazon Returns Policy - Standard 30-Day Window',
    isVerified: true
  },
  {
    id: 'ret-003',
    category: 'returns_refunds',
    topic: '25. Return Methods',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'When a customer initiates a return for an eligible item via UPS Store or Kohl\'s drop-off, what requirement is generally communicated regarding packaging?',
    options: [
      { id: 'opt_1', text: 'The customer must purchase a wooden crate and seal it with certified customs tape.', distractorReason: 'Fabricated requirement.' },
      { id: 'opt_2', text: 'Most QR-code eligible drop-offs (The UPS Store, Whole Foods, Kohl\'s) offer label-free, box-free returns where the carrier packs the item upon scanning the mobile QR code.', distractorReason: '' },
      { id: 'opt_3', text: 'The customer must pay the drop-off clerk in cash upfront.', distractorReason: 'Prepaid authorized returns do not require retail counter cash payments.' },
      { id: 'opt_4', text: 'The customer must ship the item directly to Jeff Bezos’ office in Seattle.', distractorReason: 'Humorous distractor; returns route to regional return centers.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Amazon partnerships with The UPS Store, Kohl\'s, and Whole Foods offer convenient "No box, no label needed" returns where the customer simply presents a digital QR code generated on their Amazon account.',
    hint: 'Modern Amazon drop-off locations provide box-free, label-free convenience with a QR code.',
    referenceSource: 'Amazon Customer Returns - Carrier Drop-Off Program',
    isVerified: true
  },
  {
    id: 'ret-004',
    category: 'returns_refunds',
    topic: '28. Return Eligibility',
    difficulty: 'advanced',
    type: 'single_choice',
    question: 'Which of the following items is categorized as non-returnable under standard Amazon North America retail policy for safety or regulatory reasons?',
    options: [
      { id: 'opt_1', text: 'Men\'s winter jackets.', distractorReason: 'Apparel is eligible for standard 30-day returns.' },
      { id: 'opt_2', text: 'Hardback textbooks.', distractorReason: 'Books are eligible for return.' },
      { id: 'opt_3', text: 'Downloadable digital software, grocery items, and hazardous materials (e.g. flammable liquids, standalone lithium batteries).', distractorReason: '' },
      { id: 'opt_4', text: 'Computer monitors.', distractorReason: 'Electronics are returnable within 30 days.' }
    ],
    correctAnswerIds: ['opt_3'],
    explanation: 'Hazardous materials, flammables, grocery/perishable items, and opened software/digital keys are non-returnable for safety and copyright compliance. If defective, customers receive a refund or replacement without shipping the item back.',
    hint: 'Flammables, perishables, and digital downloads cannot be returned physically.',
    referenceSource: 'Amazon Non-Returnable Items Policy',
    isVerified: true
  },
  {
    id: 'ret-005',
    category: 'returns_refunds',
    topic: '32. Refund Not Received',
    difficulty: 'advanced',
    type: 'single_choice',
    question: 'A customer calls 12 business days after Amazon issued a debit card refund, stating their bank statement still shows no credit. The system confirms the refund completed 12 days ago. What is the correct next step?',
    options: [
      { id: 'opt_1', text: 'Issue another refund immediately, resulting in a duplicate payout.', distractorReason: 'Issuing duplicate refunds without investigation causes financial loss and violates audit controls.' },
      { id: 'opt_2', text: 'Locate the Acquirer Reference Number (ARN) in internal tools and provide it to the customer so their banking institution can trace the transaction directly.', distractorReason: '' },
      { id: 'opt_3', text: 'Tell the customer that banks frequently steal refunds and Amazon cannot help.', distractorReason: 'Unprofessional accusation that destroys customer trust.' },
      { id: 'opt_4', text: 'Close the customer\'s account for excessive contacts.', distractorReason: 'Violates conduct policy.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'When a refund has passed the maximum SLA timeline (10 business days for debit) and the customer has not received funds, agents retrieve the ARN (Acquirer Reference Number) from the financial gateway details in AC3. The customer takes this ARN to their bank to manually locate the settlement batch.',
    hint: 'The Acquirer Reference Number (ARN) enables banks to locate settled transactions.',
    referenceSource: 'Amazon Payments Support - Refund Trace & ARN SOP',
    isVerified: true
  },
  {
    id: 'ret-006',
    category: 'returns_refunds',
    topic: '36. Returnless Refunds, Where Eligible',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'Under what circumstances may an Amazon Customer Service representative provide a "Returnless Refund" to a customer?',
    options: [
      { id: 'opt_1', text: 'Whenever a customer speaks aggressively to the agent.', distractorReason: 'Aggression is never an authorized eligibility criterion for concessions.' },
      { id: 'opt_2', text: 'When the item is broken glass/hazardous, low-cost merchandise where return shipping cost exceeds item value, or when system authorization explicitly prompts that return is waived.', distractorReason: '' },
      { id: 'opt_3', text: 'For all Apple iPhones and MacBook computers.', distractorReason: 'High-value items always require physical return inspection.' },
      { id: 'opt_4', text: 'Every time an order is placed on a weekend.', distractorReason: 'Irrelevant.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Returnless refunds are granted when an item is dangerous to return (e.g. shattered glass, leaking chemicals), for select low-value merchandise where return shipping exceeds item cost, or when authorized by internal customer service tools.',
    hint: 'Hazardous broken items and low-value merchandise qualify for return waiver.',
    referenceSource: 'Amazon Customer Service Returnless Concessions SOP',
    isVerified: true
  },
  {
    id: 'ret-007',
    category: 'returns_refunds',
    topic: '26. Return Policies',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'A customer purchased a warm winter jacket on November 12th as a holiday gift. On January 8th of the new year, the recipient tries it on and discovers it is the wrong size. Is the customer eligible to return this item under Amazon Return Policies?',
    options: [
      { id: 'opt_1', text: 'No, because standard 30-day returns expired on December 12th.', distractorReason: 'Ignores the official Amazon Extended Holiday Return Policy.' },
      { id: 'opt_2', text: 'Yes, under the Amazon Extended Holiday Return Policy, most physical items purchased between November 1 and December 31 can be returned until January 31 of the following year.', distractorReason: '' },
      { id: 'opt_3', text: 'Only if the customer pays a $40 winter reinstatement penalty.', distractorReason: 'Amazon does not charge holiday return penalties.' },
      { id: 'opt_4', text: 'Holiday returns are only permitted for Amazon employees.', distractorReason: 'Applies to all retail customer purchases.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Under Amazon\'s Extended Holiday Return Policy, most items purchased between November 1 and December 31 can be returned through January 31 of the subsequent year. This allows gift recipients ample time after the holidays to return or exchange items.',
    hint: 'Amazon extends return windows for purchases made in Nov/Dec through January 31.',
    referenceSource: 'Amazon Customer Service - Extended Holiday Return Policy',
    isVerified: true
  },
  {
    id: 'ret-008',
    category: 'returns_refunds',
    topic: '29. Refund Policies',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'What is "Refund at First Scan" (RFS) in Amazon return processing, and how does it protect the customer\'s financial experience?',
    options: [
      { id: 'opt_1', text: 'The refund is issued the millisecond the customer clicks "Submit Return" online without leaving their couch.', distractorReason: 'That describes returnless refunds, not Refund at First Scan.' },
      { id: 'opt_2', text: 'The moment the carrier (e.g. UPS Store, Kohl\'s) scans the return package label or QR code into custody, the refund is automatically initiated rather than waiting for the item to travel across the country to the return fulfillment center.', distractorReason: '' },
      { id: 'opt_3', text: 'The customer must scan their credit card on the driver\'s phone when handing over the box.', distractorReason: 'Nonsensical distractor.' },
      { id: 'opt_4', text: 'RFS is an internal acronym for refusing all refunds.', distractorReason: 'RFS stands for Refund at First Scan.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Refund at First Scan (RFS) initiates the refund the moment an authorized carrier drop-off clerk scans the return QR code or tracking barcode. This drastically shortens the customer\'s wait time, eliminating the 5-7 day transit wait before the warehouse physically inspects the package.',
    hint: 'Refund at First Scan triggers funds as soon as the carrier scans the parcel into custody.',
    referenceSource: 'Amazon Returns & Financial Operations - RFS SOP',
    isVerified: true
  },
  {
    id: 'ret-009',
    category: 'returns_refunds',
    topic: '30. Refund Methods',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'A customer paid for an order using a bank debit card that was compromised and closed by their bank last week. The customer asks: "Can you refund my Amazon Gift Card balance instead, or will the money vanish into a closed account?" What is the correct protocol?',
    options: [
      { id: 'opt_1', text: 'Tell the customer Amazon cannot help and closed cards result in total loss of funds.', distractorReason: 'Customer funds are protected and never confiscated.' },
      { id: 'opt_2', text: 'Explain that the representative can route the refund directly to the customer\'s Amazon Gift Card balance (processed in 2-3 hours), which avoids delays; or explain that if refunded to the card, the bank legally routes the credit to their new card or sends a paper check.', distractorReason: '' },
      { id: 'opt_3', text: 'Send cash in an envelope via standard mail.', distractorReason: 'Amazon does not mail physical cash.' },
      { id: 'opt_4', text: 'Transfer money directly into the agent\'s personal checking account to wire it.', distractorReason: 'Gross security violation.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'When a customer\'s original card is closed or canceled, customer service representatives can select Amazon Gift Card balance as the refund destination, making funds available within 2-3 hours. If refunded to the original card, the customer\'s financial institution handles routing to the active account.',
    hint: 'Amazon Gift Card balance is an approved refund alternative when original cards are expired/closed.',
    referenceSource: 'Amazon Payment Operations - Closed Account Refund SOP',
    isVerified: true
  },
  {
    id: 'ret-010',
    category: 'returns_refunds',
    topic: '33. Refund Status and Tracking',
    difficulty: 'beginner',
    type: 'single_choice',
    question: 'A customer calls asking how they can track the status of an ongoing return and verify whether their refund was issued without calling customer service. What guidance should the agent provide?',
    options: [
      { id: 'opt_1', text: 'Instruct them to go to "Your Orders" > locate the specific order > click "View Return/Refund Status", where carrier transit milestones and refund completion timestamps are displayed in real time.', distractorReason: '' },
      { id: 'opt_2', text: 'Tell the customer self-service tracking is impossible and they must call CS every morning.', distractorReason: 'Contradicts Amazon\'s self-service empowering philosophy.' },
      { id: 'opt_3', text: 'Tell them to search Twitter for carrier updates.', distractorReason: 'Unprofessional.' },
      { id: 'opt_4', text: 'Direct them to visit the local post office and speak with the postmaster.', distractorReason: 'Inefficient and unhelpful.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'Customers have real-time visibility into their returns and refunds through "Your Orders" > "View Return/Refund Status". The tracking portal details return label creation, carrier transit scans, warehouse receipt, and financial processing status.',
    hint: 'Customers can view full return and refund status under Your Orders online.',
    referenceSource: 'Amazon Customer Service - Self-Service Portal Guidelines',
    isVerified: true
  },
  {
    id: 'ret-011',
    category: 'returns_refunds',
    topic: '34. Replacement Policies',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'When an Amazon Customer Service representative creates an advanced zero-cost replacement order for a damaged item, what is the customer\'s mandatory return timeline for the original item?',
    options: [
      { id: 'opt_1', text: 'The customer must return the original item within 24 hours or police will be dispatched.', distractorReason: 'Absurd threat.' },
      { id: 'opt_2', text: 'The customer is granted a 30-day window from the replacement creation date to drop off the original item; if not received by the return deadline, Amazon automatically charges the customer\'s default payment method for the replacement.', distractorReason: '' },
      { id: 'opt_3', text: 'The customer has 10 years to return the original item.', distractorReason: 'Unrealistic timeframe.' },
      { id: 'opt_4', text: 'Amazon never requires the original item to be returned under any replacement order.', distractorReason: 'Unless specifically designated returnless, standard replacements require return of the original within 30 days.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Cross-ship replacements provide immediate customer satisfaction, but the customer must return the original item within 30 calendar days. The system clearly warns that failure to return the original item within 30 days will result in a charge for the cost of the replacement.',
    hint: 'Customers have 30 days to return the original item before being charged for the replacement.',
    referenceSource: 'Amazon Customer Service - Replacement Order Return Obligations SOP',
    isVerified: true
  },
  {
    id: 'ret-012',
    category: 'returns_refunds',
    topic: '35. Replacement Timelines',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'What shipping speed does Amazon assign to an authorized replacement order generated for a damaged or defective product?',
    options: [
      { id: 'opt_1', text: 'Replacements are shipped via the slowest bulk freight method taking 4 to 6 weeks.', distractorReason: 'Amazon prioritizes customer recovery on defective orders.' },
      { id: 'opt_2', text: 'Replacements are processed at zero additional cost and dispatched using the fastest available shipping method matching or exceeding the original order promise speed.', distractorReason: '' },
      { id: 'opt_3', text: 'The customer must pay a $15 expedite surcharge for replacement dispatch.', distractorReason: 'Customer service replacements for defects are free of charge.' },
      { id: 'opt_4', text: 'Replacements are only delivered on national holidays.', distractorReason: 'Irrelevant.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'When customer service creates a replacement order for an order defect or damage, the system assigns the fastest eligible transit speed (e.g. Next-Day or Two-Day delivery) without charging the customer any shipping fee.',
    hint: 'Replacements dispatch using expedited shipping matching or exceeding original speed at zero charge.',
    referenceSource: 'Amazon Customer Care - Replacement Dispatch Speed Guidelines',
    isVerified: true
  },
  {
    id: 'ret-013',
    category: 'returns_refunds',
    topic: '37. FBA vs. MFN Return and Refund Handling',
    difficulty: 'advanced',
    type: 'single_choice',
    question: 'A customer wants to return an expensive winter coat purchased from a Merchant Fulfilled Network (MFN) third-party seller. The customer demands that the Amazon Voice agent immediately issue a prepaid UPS label and cash refund. How must the agent handle this interaction?',
    options: [
      { id: 'opt_1', text: 'Process an immediate cash refund from Amazon\'s retail account without notifying the seller.', distractorReason: 'Violates marketplace accounting boundaries; third-party merchant funds govern MFN orders.' },
      { id: 'opt_2', text: 'Explain that for merchant-fulfilled orders, return requests must be submitted to the seller through "Your Orders"; guide the customer through submitting the request, explain that sellers must provide a return address/label within 48 hours, and explain A-to-z protection if the seller fails to comply.', distractorReason: '' },
      { id: 'opt_3', text: 'Tell the customer that third-party sellers never accept returns under any circumstances.', distractorReason: 'Marketplace sellers are required by Amazon policy to match or exceed Amazon retail return windows.' },
      { id: 'opt_4', text: 'Order the customer to fly to the seller\'s city to return it in person.', distractorReason: 'Unacceptable and absurd.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'For MFN items, independent merchants manage their own return inventory and labels. Customer service agents cannot generate Amazon prepaid labels or issue immediate refunds on behalf of the merchant unless the seller fails to respond within 48 hours or denies an in-policy return (triggering A-to-z claim eligibility).',
    hint: 'MFN returns require routing through the seller with a 48-hour response window before A-to-z escalation.',
    referenceSource: 'Amazon Marketplace Policy - MFN vs FBA Return Management',
    isVerified: true
  },
  {
    id: 'ret-014',
    category: 'returns_refunds',
    topic: '38. Refund and Replacement Resolutions',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'A customer calls because an electric blender arrived with a cracked pitcher. The customer is hosting a dinner party tomorrow night and urgently needs a working blender. Which resolution should the agent recommend first?',
    options: [
      { id: 'opt_1', text: 'Advise a standard return for refund, which will take 5 to 7 days before they get money back to reorder.', distractorReason: 'Fails to solve the customer\'s immediate need for tomorrow\'s event.' },
      { id: 'opt_2', text: 'Probe if an expedited replacement can arrive before tomorrow\'s party; if inventory allows same-day or next-day arrival, initiate a zero-cost replacement immediately; if delivery cannot make the timeline, issue a refund to Gift Card balance (2-3 hrs) so the customer can purchase locally.', distractorReason: '' },
      { id: 'opt_3', text: 'Advise the customer to glue the cracked pitcher with superglue and make soup.', distractorReason: 'Dangerous and completely unacceptable advice.' },
      { id: 'opt_4', text: 'Transfer the call to Amazon Web Services (AWS).', distractorReason: 'Incorrect team transfer.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Customer-centric resolution accuracy requires probing for customer urgency. If the customer needs the item immediately and inventory supports next-day arrival, zero-cost expedited replacement is optimal. If delivery cannot arrive in time, a fast gift card refund (2-3 hours) enables alternative arrangements.',
    hint: 'Balance replacement arrival speed against urgent customer needs to choose the best resolution.',
    referenceSource: 'Amazon Voice Process - Customer-Centric Resolution Guidelines',
    isVerified: true
  },
  {
    id: 'ret-015',
    category: 'returns_refunds',
    topic: '25. Return Methods (The UPS Store QR Drop-off, Kohl\'s, Amazon Locker, Whole Foods, UPS Pickup)',
    difficulty: 'beginner',
    type: 'single_choice',
    question: 'When a North American customer initiates an eligible return for standard clothing or small electronics on Amazon.com, which drop-off method offers a "Label-Free, Box-Free" experience via a smartphone QR code?',
    options: [
      { id: 'opt_1', text: 'Dropping the loose product off at an authorized The UPS Store or Kohl\'s location where associates scan the Amazon QR code and package the item for them.', distractorReason: '' },
      { id: 'opt_2', text: 'Throwing the item into a public street mailbox with a sticky note.', distractorReason: 'Postal mailboxes reject unlabelled, unboxed packages.' },
      { id: 'opt_3', text: 'Handing the bare item to any passing delivery driver without packaging or documentation.', distractorReason: 'Delivery drivers cannot accept unscheduled loose returns without return manifests.' },
      { id: 'opt_4', text: 'Dropping the merchandise at an airport luggage carousel.', distractorReason: 'Unrelated and absurd.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'Amazon\'s label-free, box-free return partnership with The UPS Store and Kohl\'s allows customers to simply bring the unboxed item and display the mobile return QR code. The store associate scans the code, inspects the product, bags/boxes it, and prints the shipping manifest.',
    hint: 'The UPS Store and Kohl\'s provide box-free, label-free returns using a simple mobile QR code.',
    referenceSource: 'Amazon Returns - Carrier Drop-off & QR Code Workflows SOP',
    isVerified: true
  },
  {
    id: 'ret-016',
    category: 'returns_refunds',
    topic: '26. Return Policies & Extended Holiday Return Policy (Nov 1 - Jan 31)',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'Under Amazon\'s official "Extended Holiday Return Policy", what is the return eligibility window for items purchased between November 1 and December 25 of a given calendar year?',
    options: [
      { id: 'opt_1', text: 'The items must still be returned strictly within 14 days of purchase.', distractorReason: 'Standard holiday returns are extended, not shortened.' },
      { id: 'opt_2', text: 'Eligible physical items purchased between November 1 and December 25 can be returned through January 31 of the following calendar year for a full refund.', distractorReason: '' },
      { id: 'opt_3', text: 'The items can be returned anytime over the next 10 years.', distractorReason: 'Holiday extension ends January 31.' },
      { id: 'opt_4', text: 'Holiday purchases cannot be returned under any circumstances.', distractorReason: 'Violates customer promise.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Amazon\'s Extended Holiday Return Policy gives gift recipients and holiday shoppers peace of mind: items dispatched between November 1 and December 25 can be returned until January 31 of the subsequent year, rather than adhering to the standard 30-day window.',
    hint: 'Holiday purchases (Nov 1 - Dec 25) can be returned through January 31 of the next year.',
    referenceSource: 'Amazon Customer Service Policy - Extended Holiday Return Window',
    isVerified: true
  },
  {
    id: 'ret-017',
    category: 'returns_refunds',
    topic: '28. Return Eligibility & Non-Returnable Exceptions (Hazmat, Flammables, Perishables, Digital Software)',
    difficulty: 'advanced',
    type: 'single_choice',
    question: 'Which of the following product categories is strictly classified as NON-RETURNABLE due to safety regulations, transport restrictions, or hygiene guidelines?',
    options: [
      { id: 'opt_1', text: 'Brand new unopened paperback fiction novels.', distractorReason: 'Standard returnable physical merchandise.' },
      { id: 'opt_2', text: 'Hazardous materials (hazmat) such as flammable liquids, combustible gases, or damaged lithium batteries, as well as downloadable digital software, gift cards, and live insects.', distractorReason: '' },
      { id: 'opt_3', text: 'Standard cotton t-shirts in the wrong size.', distractorReason: 'Fully returnable within 30 days.' },
      { id: 'opt_4', text: 'Standard USB computer charging cables.', distractorReason: 'Fully returnable within 30 days.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Federal transport safety (DOT/FAA) prohibits consumers from shipping hazardous materials (e.g. gasoline-powered items, aerosol sprays, flammable chemicals, bare damaged lithium batteries) via standard consumer parcel drop-offs. Additionally, digital game codes/software and gift cards are non-returnable.',
    hint: 'Hazardous materials (flammables, chemicals), downloadable digital items, and gift cards cannot be returned.',
    referenceSource: 'Amazon Non-Returnable Items & Hazmat Return SOP',
    isVerified: true
  },
  {
    id: 'ret-018',
    category: 'returns_refunds',
    topic: '36. Returnless Refunds, Where Eligible (Damaged Hazmat & Perishables)',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'A customer receives a bottle of liquid bleach or automotive motor oil that arrived punctured and leaking chemical fluid everywhere inside the shipping box. What is the approved Amazon Customer Service resolution?',
    options: [
      { id: 'opt_1', text: 'Order the customer to pour the leaking chemical into a plastic bag, take it to the UPS Store, and ship it back immediately.', distractorReason: 'Shipping leaking hazardous chemicals violates federal transit law and carrier safety.' },
      { id: 'opt_2', text: 'Because the leaking chemical item is classified as hazardous and damaged in transit, issue a Returnless Refund or Returnless Replacement directly in AC3, and advise the customer to safely dispose of the item in accordance with local environmental guidelines.', distractorReason: '' },
      { id: 'opt_3', text: 'Tell the customer to drink the bleach to verify it is real.', distractorReason: 'Extremely dangerous and unhinged.' },
      { id: 'opt_4', text: 'Deny all assistance because the customer should have caught the box before it touched the ground.', distractorReason: 'Blaming the customer violates basic customer service.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Amazon associates must NEVER instruct a customer to ship back leaking chemicals, broken glass, or hazardous materials. Carriers will reject leaking hazardous packages. Customer service representatives process a Returnless Refund or replacement and instruct safe local disposal.',
    hint: 'Never require shipping back damaged hazardous or leaking chemicals; issue a returnless resolution.',
    referenceSource: 'Amazon Environmental Health & Safety - Hazmat Concession & Returnless SOP',
    isVerified: true
  },
  {
    id: 'ret-019',
    category: 'returns_refunds',
    topic: '29. Refund Policies, Exceptions & Timelines (Gift Card 2-3h, Credit Card 3-5d, Debit Card up to 10d)',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'A customer returned an item and chose to receive their refund back to their original debit card. How long does Amazon\'s financial processing take before the funds reflect in the customer\'s bank account, and how does it compare to an Amazon Gift Card refund?',
    options: [
      { id: 'opt_1', text: 'Both debit cards and gift cards take exactly 90 business days.', distractorReason: 'Vastly exceeds actual SLA.' },
      { id: 'opt_2', text: 'Amazon Gift Card refunds process within 2 to 3 hours (often instantaneous); Debit Card refunds process from Amazon within 3 to 5 business days, but can take up to 10 business days depending on the customer\'s financial institution.', distractorReason: '' },
      { id: 'opt_3', text: 'Debit cards refund instantaneously within 3 seconds, while gift cards take 6 weeks.', distractorReason: 'Inverted timelines.' },
      { id: 'opt_4', text: 'Banks keep all refunds as government donations.', distractorReason: 'Deceptive falsehood.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Financial processing timelines: Amazon Gift Card balance refunds are issued within 2 to 3 hours of return scan. Credit card refunds take 3 to 5 business days. Debit card refunds typically take up to 10 business days for the customer\'s bank to post the funds to their checking account.',
    hint: 'Gift Card balance takes 2-3 hours; debit card refunds can take up to 10 business days.',
    referenceSource: 'Amazon Finance - Customer Refund SLA & Payment Processing Guidelines',
    isVerified: true
  },

  // ================= 4. PAYMENTS AND CONCESSIONS =================
  {
    id: 'pay-001',
    category: 'payments_concessions',
    topic: '39. Payment Methods and Types',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'A customer wants to purchase an order using an Amazon Gift Card balance of $30 and pay the remaining $45 with their Visa credit card. Does Amazon allow split-tender payments of this type?',
    options: [
      { id: 'opt_1', text: 'No, Amazon orders must be paid with one single payment method exclusively.', distractorReason: 'Amazon supports split tender between gift card balances and one credit/debit card.' },
      { id: 'opt_2', text: 'Yes, Amazon fully supports split payments combining an Amazon Gift Card balance or promotional credit with a single valid credit/debit card.', distractorReason: '' },
      { id: 'opt_3', text: 'Only if the customer pays in cryptocurrency.', distractorReason: 'Amazon does not accept cryptocurrency.' },
      { id: 'opt_4', text: 'Only if the customer has Prime Student.', distractorReason: 'Split payment with gift cards is available to all account holders.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Amazon allows customers to split the total purchase balance between an Amazon Gift Card balance (or promotional credit) and one secondary credit, debit, or store card. Customers cannot split payments across two separate credit cards.',
    hint: 'Gift cards can be combined with one credit/debit card at checkout.',
    referenceSource: 'Amazon Payment Methods & Split-Tender Guidelines',
    isVerified: true
  },
  {
    id: 'pay-002',
    category: 'payments_concessions',
    topic: '41. Payment Authorization and Declined Payments',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'A customer receives an email stating: "Payment Revision Needed: We could not authorize your payment." The customer calls worried that their order will be cancelled. What should the agent advise?',
    options: [
      { id: 'opt_1', text: 'Tell the customer the order is already deleted and they must start over.', distractorReason: 'Orders remain in payment revision status for a retention window.' },
      { id: 'opt_2', text: 'Explain that the bank declined the authorization; guide the customer to "Your Orders" > "Revise Payment Method" to select a new card or verify card details, which retries authorization without losing their order reservation.', distractorReason: '' },
      { id: 'opt_3', text: 'Take the new credit card number and CVV over the phone.', distractorReason: 'Violates PCI-DSS compliance.' },
      { id: 'opt_4', text: 'Offer a 100% discount so the bank is bypassed.', distractorReason: 'Unapproved concession.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'When payment authorization fails (due to expiration, insufficient funds, or fraud locks), Amazon reserves the order and allows the customer to update their payment method in "Your Orders" without placing a duplicate order.',
    hint: 'Customers can revise payments directly in Your Orders without placing a new order.',
    referenceSource: 'Amazon Payments - Payment Revision & Retry SOP',
    isVerified: true
  },
  {
    id: 'pay-003',
    category: 'payments_concessions',
    topic: '44. Concession Eligibility and Authorization',
    difficulty: 'advanced',
    type: 'single_choice',
    question: 'What is the primary operational rule regarding the issuance of courtesy concessions (promotional credits, shipping refunds) by customer service representatives?',
    options: [
      { id: 'opt_1', text: 'Representatives may issue $100 credits on every call to maximize CSAT surveys.', distractorReason: 'Concession abuse without business justification leads to account review and disciplinary action.' },
      { id: 'opt_2', text: 'Concessions must be appropriate, policy-compliant, within associate authorized discretionary limits, directly related to verified customer dissatisfaction/delay, and documented in AC3 contact notes.', distractorReason: '' },
      { id: 'opt_3', text: 'Concessions are strictly illegal and never permitted at Amazon.', distractorReason: 'Concessions are legitimate tools within authorized guidelines.' },
      { id: 'opt_4', text: 'Only warehouse managers can authorize any courtesy credit.', distractorReason: 'Associates have configured discretionary concession limits.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Customer concessions (such as courtesy credits or waived shipping fees) must adhere to strict business rules: they must be tied to verified service failures (such as delayed guaranteed deliveries), remain within authorized financial tiers, and have complete ticket documentation in AC3.',
    hint: 'Concessions must be justified, within limits, and documented in contact notes.',
    referenceSource: 'Amazon Customer Service Concession & Discretionary Credit SOP',
    isVerified: true
  },
  {
    id: 'pay-004',
    category: 'payments_concessions',
    topic: '40. Payment Policies',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'When placing an order for physical merchandise on Amazon.com, at what exact stage is the customer\'s credit or debit card officially charged for the purchase?',
    options: [
      { id: 'opt_1', text: 'The card is officially charged the instant the customer adds the item to their shopping cart.', distractorReason: 'Items in carts are unpurchased and incur zero holds or charges.' },
      { id: 'opt_2', text: 'Amazon authorizes payment at order placement, but the card is officially charged only when the items enter the physical shipping process and are dispatched from the fulfillment center.', distractorReason: '' },
      { id: 'opt_3', text: 'The card is only charged 60 days after delivery if the customer doesn\'t return it.', distractorReason: 'Payments settle upon order shipment, not 60 days later.' },
      { id: 'opt_4', text: 'Amazon charges the card on the 1st of every month regardless of order date.', distractorReason: 'Physical orders bill upon shipment.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Under Amazon payment policy, placing an order triggers an initial authorization check to verify available funds. The actual financial charge is billed only when individual packages are packed and handed over to the carrier for shipment.',
    hint: 'Cards are authorized at checkout, but officially charged only when the items ship.',
    referenceSource: 'Amazon Billing Policy - Order Settlement & Dispatch Billing',
    isVerified: true
  },
  {
    id: 'pay-005',
    category: 'payments_concessions',
    topic: '42. Payment-Related Resolutions',
    difficulty: 'advanced',
    type: 'single_choice',
    question: 'A panicked customer calls stating: "Amazon charged me twice for my $120 order! I see two $120 line items on my mobile banking app right now! Reverse this fraud immediately!" How should the agent explain and resolve this concern?',
    options: [
      { id: 'opt_1', text: 'Agree that Amazon stole the money and advise the customer to file a fraud lawsuit against Amazon.', distractorReason: 'Completely unhinged and false.' },
      { id: 'opt_2', text: 'Clarify the difference between a temporary bank authorization hold and the final charge; explain that banks place a pre-authorization hold when the order is placed, and when the order ships, the final charge settles and the temporary hold drops off within 3 to 5 business days per banking rules.', distractorReason: '' },
      { id: 'opt_3', text: 'Immediately issue an unverified $240 cash refund.', distractorReason: 'Concession fraud and double refunding without authorization.' },
      { id: 'opt_4', text: 'Tell the customer that duplicate charges are mandatory Amazon taxes.', distractorReason: 'False and deceptive.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'What looks like a duplicate charge is almost always an initial temporary authorization hold existing alongside the settled dispatch charge. The associate should educate the customer with empathy, verify that only one order exists in AC3, and explain that their bank automatically releases the pending hold within 3 to 5 business days.',
    hint: 'Explain pre-authorization holds versus settled charges to alleviate duplicate billing panic.',
    referenceSource: 'Amazon Payments - Authorization Holds & Banking Settlement SOP',
    isVerified: true
  },
  {
    id: 'pay-006',
    category: 'payments_concessions',
    topic: '43. Concessions',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'Which of the following is an authorized type of Customer Service Concession that can be issued by a frontline Amazon NA Voice associate within policy limits?',
    options: [
      { id: 'opt_1', text: 'Direct wire transfers to the customer\'s foreign crypto wallet.', distractorReason: 'Amazon does not support crypto transfers.' },
      { id: 'opt_2', text: 'Courtesy Promotional Credit applied to the customer\'s Amazon account balance, or a refund of paid shipping fees for a verified service failure.', distractorReason: '' },
      { id: 'opt_3', text: 'Free airline tickets to Seattle.', distractorReason: 'Irrelevant.' },
      { id: 'opt_4', text: 'A lifetime exemption from paying sales tax.', distractorReason: 'Tax laws cannot be waived by CS associates.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Approved customer concessions include Courtesy Credit (promotional balance applied to future Amazon purchases) and Fee Concessions (such as refunding expedited shipping charges) when justified by a service delay or delivery defect.',
    hint: 'Authorized concessions include courtesy account credits and shipping fee refunds.',
    referenceSource: 'Amazon Customer Service - Concession Types & Policy Guidelines',
    isVerified: true
  },
  {
    id: 'pay-007',
    category: 'payments_concessions',
    topic: '45. Partial Refunds and Other Approved Adjustments',
    difficulty: 'advanced',
    type: 'single_choice',
    question: 'A customer receives a large 150-lb wooden bookcase that arrived with a shallow 1-inch scratch on the bottom base molding. The bookcase is otherwise sturdy and functional. The customer does not want to dismantle and carry a 150-lb package to UPS, but asks if Amazon can offer any accommodation. What is the approved resolution?',
    options: [
      { id: 'opt_1', text: 'Insist that unless the customer completely disassembles and ships the heavy bookcase back, zero dollars can ever be refunded.', distractorReason: 'Rigid handling results in high return logistics costs and severe customer frustration.' },
      { id: 'opt_2', text: 'Offer an approved partial refund / cosmetic discount (e.g. 15-20% partial concession within associate discretionary limits) to acknowledge the minor defect and allow the customer to keep the furniture, saving significant return freight costs.', distractorReason: '' },
      { id: 'opt_3', text: 'Refund the entire $800 bookcase and send 5 more free bookcases.', distractorReason: 'Excessive concession violating business controls.' },
      { id: 'opt_4', text: 'Instruct the customer to abandon the bookcase on the highway curb.', distractorReason: 'Unprofessional.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'For heavy or bulky goods with minor cosmetic damage where the customer prefers keeping the product rather than undergoing difficult return logistics, associates can authorize a partial refund percentage within their discretionary limits. This balances customer satisfaction with operational freight savings.',
    hint: 'Partial refunds are approved for minor cosmetic flaws on bulky items to avoid heavy return freight.',
    referenceSource: 'Amazon Customer Care - Partial Refund & Cosmetic Adjustment SOP',
    isVerified: true
  },
  {
    id: 'pay-008',
    category: 'payments_concessions',
    topic: '41b. Payment Charges (Backup, Retro, and Unknown Charges)',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'What is the purpose of Amazon\'s "Back-Up Payment Method" feature, and how does it function when a customer\'s primary payment method is declined?',
    options: [
      { id: 'opt_1', text: 'It immediately opens a new credit card line with an outside bank without the customer\'s knowledge.', distractorReason: 'Illegal and impossible.' },
      { id: 'opt_2', text: 'If the customer\'s default payment method is declined or expired during order dispatch or Prime renewal, Amazon automatically attempts to charge any designated backup payment card saved in the customer\'s wallet to prevent order cancellation or service interruption.', distractorReason: '' },
      { id: 'opt_3', text: 'It forces the customer to pay using a neighbor\'s credit card.', distractorReason: 'Completely false.' },
      { id: 'opt_4', text: 'It charges a $50 penalty fee every time a card is declined.', distractorReason: 'Amazon does not charge decline fees.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Backup payment methods ensure smooth continuity: if an order or Prime membership renewal cannot be charged to the customer\'s primary card (due to card expiration, credit limit, or temporary bank lock), Amazon charges designated backup payment cards stored in the customer\'s Amazon Wallet.',
    hint: 'Backup payment methods automatically pay for orders or memberships if the default card declines.',
    referenceSource: 'Amazon Payments - Backup Payment Method Terms & Operations SOP',
    isVerified: true
  },
  {
    id: 'pay-009',
    category: 'payments_concessions',
    topic: '41b. Payment Charges (Backup, Retro, and Unknown Charges)',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'A customer calls stating: "Amazon charged my secondary debit card for my Prime membership when my main credit card expired. I don\'t want Amazon charging secondary cards without asking me!" What should the associate explain and guide the customer to do?',
    options: [
      { id: 'opt_1', text: 'Tell the customer that Amazon has legal rights to charge any card in the world without consent.', distractorReason: 'Customer maintains control over wallet settings.' },
      { id: 'opt_2', text: 'Explain that the Backup Payment Method setting was active on their account; guide the customer to "Your Account" > "Your Payments" > "Manage Backup Payment Method" where they can disable the feature or deselect specific cards.', distractorReason: '' },
      { id: 'opt_3', text: 'Take the customer\'s bank routing and account numbers to cancel their bank account.', distractorReason: 'Severe PII and compliance violation.' },
      { id: 'opt_4', text: 'Issue a $500 cash gift to silence the customer.', distractorReason: 'Unauthorized concession.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Backup payment method is an optional feature enabled in the customer\'s Amazon Wallet settings. Associates should explain how it works, guide the customer to "Manage Backup Payment Method" to turn it off or customize which cards are eligible, and handle any refund requests if benefits were unused.',
    hint: 'Guide the customer to Your Payments > Manage Backup Payment Method to disable or customize backup cards.',
    referenceSource: 'Amazon Wallet - Backup Payment Configuration & Customer Preferences',
    isVerified: true
  },
  {
    id: 'pay-010',
    category: 'payments_concessions',
    topic: '41b. Payment Charges (Backup, Retro, and Unknown Charges)',
    difficulty: 'advanced',
    type: 'single_choice',
    question: 'What is a "Retro Charge" (Retroactive Charge) in Amazon customer operations, and what sequence of events causes it to appear on a customer\'s statement?',
    options: [
      { id: 'opt_1', text: 'A retro charge is a tax charged on vintage 1980s retro clothing items.', distractorReason: 'Humorous but false.' },
      { id: 'opt_2', text: 'When Amazon sends an advance replacement item at zero upfront cost, the customer is given 30 days to return the original defective unit. If the warehouse does not receive and scan the returned unit within 30 days, the automated system retroactively charges the customer\'s card for the replacement.', distractorReason: '' },
      { id: 'opt_3', text: 'It is an annual fee for using the Amazon mobile app.', distractorReason: 'The Amazon app is free.' },
      { id: 'opt_4', text: 'It occurs when a customer cancels an order within 5 minutes of placing it.', distractorReason: 'Cancellations before shipping incur zero charges.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'When Amazon issues an advance replacement or advance refund, an automated 30-day return tracker is attached to the original item. If the return tracking is not scanned as received at the Amazon return center within 30 days, the system triggers a "Retro Charge" to bill the customer for the unreturned merchandise.',
    hint: 'Occurs when an advance replacement is dispatched but the original item is not received within 30 days.',
    referenceSource: 'Amazon Returns Operations - Advance Replacements & Retro Charge Policy SOP',
    isVerified: true
  },
  {
    id: 'pay-011',
    category: 'payments_concessions',
    topic: '41b. Payment Charges (Backup, Retro, and Unknown Charges)',
    difficulty: 'advanced',
    type: 'single_choice',
    question: 'A customer calls furious: "You recharged my credit card $89 for an item I already returned 3 weeks ago! Here is my UPS drop-off receipt tracking number!" The associate checks carrier tracking and confirms the package was dropped off at The UPS Store 20 days ago and is currently in transit to the FC. What is the approved resolution?',
    options: [
      { id: 'opt_1', text: 'Refuse to help until the package physically touches the warehouse floor in 2 more months.', distractorReason: 'Punishes customer who complied with return rules.' },
      { id: 'opt_2', text: 'Confirm that the customer dropped off the package within the 30-day window via verified carrier tracking, and immediately process a full refund for the retro charge in AC3.', distractorReason: '' },
      { id: 'opt_3', text: 'Accuse the customer of stealing the replacement.', distractorReason: 'Severe behavioral violation.' },
      { id: 'opt_4', text: 'Tell the customer to go to the UPS warehouse and find the truck.', distractorReason: 'Deflecting to carrier.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'If carrier tracking confirms that the customer dropped off the return package within the 30-day window, carrier shipping delays cannot be penalized against the customer. The associate must immediately refund the retro charge and document the carrier tracking number in the AC3 contact notes.',
    hint: 'If carrier tracking confirms on-time drop-off, immediately process a refund for the retro charge.',
    referenceSource: 'Amazon Voice Process - Retro Charge Dispute Resolution SOP',
    isVerified: true
  },
  {
    id: 'pay-012',
    category: 'payments_concessions',
    topic: '41b. Payment Charges (Backup, Retro, and Unknown Charges)',
    difficulty: 'advanced',
    type: 'single_choice',
    question: 'A caller states: "I see an unknown charge of $139 from \'AMZN Mktp US\' on my credit card statement. I don\'t remember buying anything!" Under Amazon Security and PII masking standards, what information can the associate collect to locate the charge?',
    options: [
      { id: 'opt_1', text: 'The customer\'s full 16-digit credit card number, CVV code, and ATM PIN.', distractorReason: 'Zero-tolerance PCI-DSS violation.' },
      { id: 'opt_2', text: 'Only the charge date, the exact charge amount, and the last 4 digits of the card charged, which are entered into the designated internal Payment Finder tool.', distractorReason: '' },
      { id: 'opt_3', text: 'The customer\'s mother\'s maiden name and online banking password.', distractorReason: 'Severe security breach.' },
      { id: 'opt_4', text: 'The associate cannot look up any charges under any circumstances.', distractorReason: 'Associates have authorized payment lookup tools.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Zero-Tolerance Security Rule: Associates must NEVER ask for or accept full credit card numbers, expiration dates, or CVV codes. To locate an unrecognized charge in Payment Finder / AC3, the associate asks strictly for the transaction date, the exact dollar amount, and the last 4 digits of the card.',
    hint: 'Only request the charge date, exact amount, and the last 4 digits of the card.',
    referenceSource: 'Amazon Security & PCI Compliance - Unknown Charge Investigation Protocol',
    isVerified: true
  },
  {
    id: 'pay-013',
    category: 'payments_concessions',
    topic: '41b. Payment Charges (Backup, Retro, and Unknown Charges)',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'When investigating an "Unknown Charge" for a customer, which of the following represents the most frequent causes that an associate should probe before escalating to fraud?',
    options: [
      { id: 'opt_1', text: 'International space agency satellite rental fees.', distractorReason: 'Ridiculous.' },
      { id: 'opt_2', text: 'Amazon Prime annual ($139) or monthly ($14.99) renewals, digital subscriptions (Prime Video Channels like Paramount+ or Starz, Kindle Unlimited, Audible), household family members sharing payment cards, or a $1 temporary authorization hold.', distractorReason: '' },
      { id: 'opt_3', text: 'Hidden Amazon taxes on internet usage.', distractorReason: 'No such fees exist.' },
      { id: 'opt_4', text: 'Computer viruses purchased automatically by the modem.', distractorReason: 'False.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Most "unknown charges" are legitimate account activities: automated Prime renewals, free digital trials that converted to monthly subscriptions (Prime Video Channels, Audible, Kindle Unlimited), family members making purchases using 1-Click on smart devices (Fire TV / Alexa), or temporary pre-auth holds.',
    hint: 'Check for Prime renewals, digital subscriptions (Prime Video Channels, Audible), or family 1-Click orders.',
    referenceSource: 'Amazon Customer Service - Unknown Charges Root-Cause Analysis SOP',
    isVerified: true
  },
  {
    id: 'pay-014',
    category: 'payments_concessions',
    topic: '39. Payment Methods and Types (Credit/Debit, Amazon Store Card, Prime Visa, Gift Cards, SNAP EBT, HSA/FSA, Affirm, Prohibited Methods)',
    difficulty: 'beginner',
    type: 'single_choice',
    question: 'Which of the following credit and store cards are accepted for purchases on Amazon.com?',
    options: [
      { id: 'opt_1', text: 'Major credit cards (Visa, MasterCard, American Express, Discover, Diners Club, JCB), as well as the Amazon Store Card, Amazon Secured Card, and Amazon Prime Visa Signature Card.', distractorReason: '' },
      { id: 'opt_2', text: 'Only handwritten IOUs signed by a notary public.', distractorReason: 'Unaccepted.' },
      { id: 'opt_3', text: 'Only cards issued by banks physically located in Seattle, Washington.', distractorReason: 'Global card networks accepted.' },
      { id: 'opt_4', text: 'Credit cards are not accepted; only physical cash delivered in person is allowed.', distractorReason: 'Inverted.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'Amazon.com accepts all major card networks: Visa, MasterCard, American Express, Discover, JCB, and Diners Club. Amazon also offers co-branded credit products: the Amazon Prime Visa (Chase) with 5% cash back, the Amazon Store Card (Synchrony Bank), and the Amazon Secured Card for credit building.',
    hint: 'Accepts all major networks (Visa, MC, Amex, Discover, JCB) and Amazon co-branded cards.',
    referenceSource: 'Amazon Accepted Payment Methods - Card Networks & Store Cards',
    isVerified: true
  },
  {
    id: 'pay-015',
    category: 'payments_concessions',
    topic: '39. Payment Methods and Types (Credit/Debit, Amazon Store Card, Prime Visa, Gift Cards, SNAP EBT, HSA/FSA, Affirm, Prohibited Methods)',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'What are the primary terms, restrictions, and expiration rules governing Amazon Gift Cards and Gift Card Balances?',
    options: [
      { id: 'opt_1', text: 'Amazon Gift Cards expire after 30 days and have a $5 monthly inactivity fee.', distractorReason: 'Amazon Gift Cards never expire and have zero fees.' },
      { id: 'opt_2', text: 'Amazon Gift Card balances never expire, incur zero maintenance or dormancy fees, but cannot be used to purchase other Amazon or third-party gift cards and cannot be redeemed for cash (except where required by law).', distractorReason: '' },
      { id: 'opt_3', text: 'Gift cards can only be redeemed to buy fresh fruits.', distractorReason: 'Valid across Amazon\'s catalog.' },
      { id: 'opt_4', text: 'Gift cards can be withdrawn at any ATM as physical hundred-dollar bills.', distractorReason: 'Cannot be redeemed for cash.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Under Amazon policy and federal gift card laws, Amazon.com Gift Cards have no expiration dates and no service fees. However, anti-money laundering regulations prohibit using an Amazon Gift Card balance to purchase other Amazon Gift Cards or third-party gift cards (e.g. Apple, Google Play), and balances are non-refundable for cash.',
    hint: 'Gift cards never expire and have zero fees, but cannot purchase other gift cards or be redeemed for cash.',
    referenceSource: 'Amazon Gift Card Terms and Conditions & Compliance Guidelines',
    isVerified: true
  },
  {
    id: 'pay-016',
    category: 'payments_concessions',
    topic: '39. Payment Methods and Types (Credit/Debit, Amazon Store Card, Prime Visa, Gift Cards, SNAP EBT, HSA/FSA, Affirm, Prohibited Methods)',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'How does Amazon accept and process SNAP EBT (Supplemental Nutrition Assistance Program) payments on Amazon Fresh and Whole Foods Market?',
    options: [
      { id: 'opt_1', text: 'SNAP EBT can be used to buy electronics, televisions, and alcoholic beverages.', distractorReason: 'SNAP EBT is strictly restricted to USDA-eligible grocery items.' },
      { id: 'opt_2', text: 'SNAP EBT cards can be used to purchase eligible food and grocery items; however, non-food items, delivery fees, and tips must be paid with a secondary payment method (such as a credit/debit card or gift card).', distractorReason: '' },
      { id: 'opt_3', text: 'SNAP EBT cannot be split with any other payment card.', distractorReason: 'Amazon supports split payments for SNAP baskets.' },
      { id: 'opt_4', text: 'SNAP EBT is only accepted on Amazon on Sundays.', distractorReason: 'Accepted 24/7.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Customers can link valid SNAP EBT cards to purchase USDA-eligible food items on Amazon.com, Amazon Fresh, and Whole Foods. Federal regulations prohibit using SNAP EBT for non-food items, alcohol, delivery fees, or driver tips; Amazon\'s checkout allows customers to pay those ineligible portions with a secondary card.',
    hint: 'SNAP EBT pays for eligible food items only; non-food items, fees, and tips require a secondary payment method.',
    referenceSource: 'Amazon Grocery - SNAP EBT Payment Guidelines & Split-Tender Rules',
    isVerified: true
  },
  {
    id: 'pay-017',
    category: 'payments_concessions',
    topic: '39. Payment Methods and Types (Credit/Debit, Amazon Store Card, Prime Visa, Gift Cards, SNAP EBT, HSA/FSA, Affirm, Prohibited Methods)',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'What terms and conditions apply when a customer uses an HSA (Health Savings Account) or FSA (Flexible Spending Account) card to purchase items on Amazon?',
    options: [
      { id: 'opt_1', text: 'HSA/FSA cards can be used to buy video games and jewelry.', distractorReason: 'Limited to IRS-eligible healthcare.' },
      { id: 'opt_2', text: 'HSA/FSA cards can only be used to pay for IRS-eligible medical, diagnostic, first-aid, optical, and healthcare products designated as "HSA/FSA Eligible" on Amazon; ineligible items in the same basket must be paid with another card.', distractorReason: '' },
      { id: 'opt_3', text: 'HSA/FSA cards are only accepted if the customer mails a doctor\'s note to Seattle headquarters.', distractorReason: 'Eligibility is determined automatically at checkout.' },
      { id: 'opt_4', text: 'HSA/FSA cards incur a 50% Amazon processing penalty.', distractorReason: 'No fees charged.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Amazon has an extensive HSA/FSA Store. Products designated as HSA/FSA Eligible (e.g. prescription glasses, sunscreen SPF 15+, first aid kits, glucose monitors) can be purchased using an HSA/FSA debit card. If a customer\'s cart contains mixed items, checkout splits the eligible items to the HSA/FSA card.',
    hint: 'HSA/FSA cards can only pay for IRS-designated healthcare items; other items require a separate card.',
    referenceSource: 'Amazon HSA/FSA Store Guidelines & IRS Compliance',
    isVerified: true
  },
  {
    id: 'pay-018',
    category: 'payments_concessions',
    topic: '40. Payment Policies',
    difficulty: 'beginner',
    type: 'single_choice',
    question: 'A customer calls asking to pay for an order on Amazon.com (US) using Cash on Delivery (COD), a personal paper check, or a money order sent by mail. What must the associate explain?',
    options: [
      { id: 'opt_1', text: 'The customer can mail cash in an unmarked envelope to the local warehouse.', distractorReason: 'Never mail cash; not accepted.' },
      { id: 'opt_2', text: 'Amazon.com (US) does NOT accept Cash on Delivery (COD), personal paper checks, cashier\'s checks, money orders, or direct cash by mail; payments must be made using accepted electronic methods (cards, Amazon Gift Card, SNAP EBT, or Affirm).', distractorReason: '' },
      { id: 'opt_3', text: 'Paper checks are accepted if written in purple ink.', distractorReason: 'False.' },
      { id: 'opt_4', text: 'COD is mandatory for all orders over $10.', distractorReason: 'COD does not exist on Amazon.com US.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'On Amazon.com (US), Cash on Delivery (COD), personal checks, cashier\'s checks, and money orders are strictly not accepted. Payment must be transacted electronically via valid credit/debit cards, Amazon Store Card, Amazon Gift Cards, SNAP EBT, HSA/FSA, or Affirm financing.',
    hint: 'Amazon.com (US) does NOT accept COD, personal checks, cashier\'s checks, or money orders.',
    referenceSource: 'Amazon Payments - Unacceptable Payment Methods Policy SOP',
    isVerified: true
  },

  // ================= 5. AMAZON FULFILLMENT AND MARKETPLACE =================
  {
    id: 'ful-001',
    category: 'fulfillment_marketplace',
    topic: '46. Amazon FBA (Fulfillment by Amazon)',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'A customer calls regarding an order marked "Ships from and sold by Acme Electronics" (Merchant Fulfilled Network - MFN). The package is delayed. Can the Amazon Voice agent issue an immediate replacement on behalf of the third-party seller?',
    options: [
      { id: 'opt_1', text: 'Yes, Amazon agents can re-ship third-party seller inventory at will.', distractorReason: 'Amazon does not own or store MFN inventory and cannot dispatch seller stock.' },
      { id: 'opt_2', text: 'No; for MFN orders, the seller manages fulfillment. The agent guides the customer to contact the seller via Buyer-Seller Messaging, allowing 48 hours for response before escalating to an A-to-z Guarantee claim if needed.', distractorReason: '' },
      { id: 'opt_3', text: 'Immediately ban the third-party seller from Amazon.', distractorReason: 'Customer service agents do not take disciplinary enforcement actions without seller performance review.' },
      { id: 'opt_4', text: 'Tell the customer that Amazon does not care about third-party purchases.', distractorReason: 'Violates professional communication standards.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'For MFN (Merchant Fulfilled Network), the independent third-party merchant holds inventory and handles shipping. Amazon CS assists by helping the buyer message the seller. If the seller does not resolve the issue within 48 hours, the customer is eligible to submit an A-to-z Guarantee Claim.',
    hint: 'Distinguish between Fulfilled by Amazon (FBA) and seller-managed inventory (MFN).',
    referenceSource: 'Amazon Marketplace Seller & A-to-z Guarantee Policy',
    isVerified: true
  },
  {
    id: 'ful-002',
    category: 'fulfillment_marketplace',
    topic: '53. A-to-z Guarantee Claims',
    difficulty: 'advanced',
    type: 'single_choice',
    question: 'What is the mandatory condition that must be met before a customer is eligible to file an A-to-z Guarantee Claim for an MFN (Merchant Fulfilled) order?',
    options: [
      { id: 'opt_1', text: 'The customer must wait 1 year from the purchase date.', distractorReason: 'A-to-z claims must be filed within 90 days of Estimated Delivery Date.' },
      { id: 'opt_2', text: 'The customer must first contact the third-party seller via Buyer-Seller Messaging and allow a mandatory 48-hour response window for the seller to provide resolution.', distractorReason: '' },
      { id: 'opt_3', text: 'The customer must travel to the seller\'s physical warehouse.', distractorReason: 'Nonsensical requirement.' },
      { id: 'opt_4', text: 'The customer must surrender their Prime membership.', distractorReason: 'Completely false.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Under Amazon Marketplace policies, buyers must first contact the merchant through official Buyer-Seller Messaging and wait 48 hours for the merchant to resolve the matter. If the merchant fails to respond or refuses an eligible refund/return, an A-to-z Claim can be initiated.',
    hint: 'A 48-hour contact window with the seller is required before filing an A-to-z claim.',
    referenceSource: 'Amazon A-to-z Guarantee - Seller Contact & Eligibility SOP',
    isVerified: true
  },
  {
    id: 'ful-003',
    category: 'fulfillment_marketplace',
    topic: '47. MFN (Merchant Fulfillment Network)',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'A customer ordered a specialty custom watch sold and shipped directly by an independent Merchant Fulfilled Network (MFN) seller. The seller uploaded a tracking number, but tracking has not updated in 5 days. What is the correct procedure for the Amazon voice associate?',
    options: [
      { id: 'opt_1', text: 'Call the local police department in the seller\'s county.', distractorReason: 'Unprofessional escalation.' },
      { id: 'opt_2', text: 'Guide the customer to send a message to the seller through Buyer-Seller Messaging in "Your Orders", explain that the merchant directly coordinates with their carrier, and reassure the customer that Amazon protects them if the seller fails to reply within 48 hours.', distractorReason: '' },
      { id: 'opt_3', text: 'Immediately debit the seller\'s personal checking account for $5,000.', distractorReason: 'Frontline CS has no capability or authority to perform arbitrary banking debits.' },
      { id: 'opt_4', text: 'Tell the customer that MFN orders have zero buyer protection.', distractorReason: 'Completely false; MFN orders are backed by Amazon\'s A-to-z Guarantee.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'For MFN orders, the third-party merchant holds physical inventory and manages the carrier dispatch. The associate assists by facilitating communication through Amazon\'s official Buyer-Seller Messaging portal, setting the mandatory 48-hour response SLA before escalating to an A-to-z claim.',
    hint: 'Guide the customer to message the merchant and enforce the 48-hour response timeline.',
    referenceSource: 'Amazon Marketplace Operations - MFN Tracking Inquiries SOP',
    isVerified: true
  },
  {
    id: 'ful-004',
    category: 'fulfillment_marketplace',
    topic: '48. MFN Prime',
    difficulty: 'advanced',
    type: 'single_choice',
    question: 'What is "MFN Prime" (also known as Seller-Fulfilled Prime / SFP), and who is responsible for post-order customer service inquiries (such as tracking, delivery inquiries, and returns)?',
    options: [
      { id: 'opt_1', text: 'The merchant fulfills the order from their own facility while meeting Prime shipping speed benchmarks; Amazon Customer Service directly handles all post-order customer service, tracking inquiries, and returns.', distractorReason: '' },
      { id: 'opt_2', text: 'The seller is exempt from all Amazon return policies.', distractorReason: 'SFP sellers must adhere to rigorous Prime return policies.' },
      { id: 'opt_3', text: 'Amazon employees work inside the seller\'s home garage.', distractorReason: 'Absurd distractor.' },
      { id: 'opt_4', text: 'MFN Prime orders never have tracking numbers.', distractorReason: 'SFP requires tracked valid shipment rates over 99%.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'Seller-Fulfilled Prime (SFP / MFN Prime) allows approved sellers to display the Prime badge on items shipped from their own fulfillment locations, provided they meet strict fast-shipping metrics. Crucially, Amazon Customer Service handles post-order support, tracking inquiries, and returns for SFP orders just as with FBA.',
    hint: 'Under Seller-Fulfilled Prime (SFP), Amazon CS handles customer service even though the merchant ships it.',
    referenceSource: 'Amazon Seller-Fulfilled Prime (SFP) Customer Service Matrix',
    isVerified: true
  },
  {
    id: 'ful-005',
    category: 'fulfillment_marketplace',
    topic: '49. Amazon Retail',
    difficulty: 'beginner',
    type: 'single_choice',
    question: 'An order in AC3 indicates: "Ships from: Amazon.com, Sold by: Amazon.com LLC". What fulfillment and selling category does this represent?',
    options: [
      { id: 'opt_1', text: 'Amazon Retail (First-Party / 1P): Amazon purchased the wholesale inventory directly from the manufacturer, sells it on the marketplace, ships it from an Amazon fulfillment center, and provides full direct customer support.', distractorReason: '' },
      { id: 'opt_2', text: 'Drop-shipped from an unauthorized garage.', distractorReason: '1P is official Amazon retail inventory.' },
      { id: 'opt_3', text: 'Third-party MFN where the seller operates under the pseudonym "Amazon.com".', distractorReason: 'Third parties cannot use Amazon.com LLC credentials.' },
      { id: 'opt_4', text: 'An auction listing.', distractorReason: 'Amazon does not operate auction bidding.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'Items labeled "Ships from and sold by Amazon.com" are Amazon Retail (First-Party / 1P) products. Amazon owns the inventory, handles fulfillment, sets pricing, honors manufacturer warranties, and manages all customer service resolutions directly.',
    hint: '1P (Amazon Retail) means Amazon owns, sells, and fulfills the merchandise directly.',
    referenceSource: 'Amazon Retail vs 3P Marketplace Taxonomy',
    isVerified: true
  },
  {
    id: 'ful-006',
    category: 'fulfillment_marketplace',
    topic: '50. Marketplace Sellers',
    difficulty: 'advanced',
    type: 'single_choice',
    question: 'A customer calls reporting that an independent marketplace seller messaged them saying: "Our card machine is down on Amazon. Please wire $45 directly via Zelle or Western Union to our personal bank account to complete delivery of your order." What is the mandatory immediate action?',
    options: [
      { id: 'opt_1', text: 'Advise the customer to send the money via Zelle quickly to avoid delivery delays.', distractorReason: 'Severe failure; sending off-platform funds exposes customer to fraud and has zero purchase protection.' },
      { id: 'opt_2', text: 'Inform the customer firmly that off-platform payment requests violate Amazon policy, warn them NEVER to send payments outside Amazon, flag and report the seller message to Seller Abuse / Fraud Investigation immediately, and reassure the customer that their order is protected.', distractorReason: '' },
      { id: 'opt_3', text: 'Offer to split the wire transfer fee with the customer.', distractorReason: 'Violates financial compliance.' },
      { id: 'opt_4', text: 'Ignore the message because marketplace sellers can do whatever they want.', distractorReason: 'Frontline associates are obligated to report anti-fraud violations.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Attempts by marketplace sellers to solicit payments outside Amazon (via wire, Zelle, PayPal, or crypto) violate Amazon\'s core Terms of Service and indicate fraud. Representatives must instruct the customer not to pay, explain that all transactions must remain on Amazon, and submit a Seller Abuse report.',
    hint: 'Off-platform payment solicitations violate Amazon policy and must be reported immediately.',
    referenceSource: 'Amazon Customer Protection - Off-Platform Payment Solicitation SOP',
    isVerified: true
  },
  {
    id: 'ful-007',
    category: 'fulfillment_marketplace',
    topic: '51. MPM (Marketplace Merchant, according to your training terminology)',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'In Amazon customer service nesting and SOP documentation, what does the acronym "MPM" represent, and what is their mandatory SLA for responding to customer inquiries?',
    options: [
      { id: 'opt_1', text: 'Multi-Product Manager; 10 minutes SLA.', distractorReason: 'Incorrect expansion.' },
      { id: 'opt_2', text: 'Marketplace Merchant (independent third-party seller on the Amazon platform); they are required to respond to buyer messages within a 48-hour SLA window.', distractorReason: '' },
      { id: 'opt_3', text: 'Master Package Manifest; 30 days SLA.', distractorReason: 'Incorrect terminology.' },
      { id: 'opt_4', text: 'Mobile Payment Method; instantaneous SLA.', distractorReason: 'Incorrect terminology.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'In Amazon contact center training, "MPM" stands for Marketplace Merchant (third-party seller). Under Amazon seller performance policies, MPMs must respond to customer messages via Buyer-Seller Messaging within 48 hours.',
    hint: 'MPM = Marketplace Merchant; their response window SLA is 48 hours.',
    referenceSource: 'Amazon Voice Training Glossary - MPM & Seller Standards',
    isVerified: true
  },
  {
    id: 'ful-008',
    category: 'fulfillment_marketplace',
    topic: '52. Seller-Fulfilled vs. Amazon-Fulfilled Orders',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'Which of the following scenarios allows a Tier-1 Customer Service Voice representative to issue an immediate zero-cost replacement directly in AC3?',
    options: [
      { id: 'opt_1', text: 'A damaged book on an MFN order shipped directly by a small independent bookstore in Ohio.', distractorReason: 'Amazon CS cannot dispatch stock belonging to an independent MFN merchant.' },
      { id: 'opt_2', text: 'A defective headphone order marked "Sold by SoundTech, Fulfilled by Amazon" (FBA), where replacement stock is available in an Amazon fulfillment center.', distractorReason: '' },
      { id: 'opt_3', text: 'An item that was purchased 3 years ago on eBay.', distractorReason: 'External platform purchases cannot be serviced on Amazon.' },
      { id: 'opt_4', text: 'An MFN order where the seller explicitly refused to answer any messages.', distractorReason: 'In this case, an A-to-z claim or refund is processed, not an MFN replacement from Amazon warehouse stock.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Because Fulfilled by Amazon (FBA) items are warehoused and shipped by Amazon logistics, Amazon CS has full administrative authority to dispatch zero-cost replacements directly. For MFN orders, replacement stock resides with the merchant, so Amazon CS cannot issue direct replacements.',
    hint: 'FBA orders allow direct Amazon CS replacements; MFN orders do not.',
    referenceSource: 'Amazon Customer Service Fulfillment Capabilities SOP',
    isVerified: true
  },
  {
    id: 'ful-009',
    category: 'fulfillment_marketplace',
    topic: '53. A-to-z Guarantee Claims (Eligibility, 48-Hour Seller Window, 90-Day Filing Rule, Covered Conditions, Associate Support & Seller Appeals)',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'Under Amazon\'s A-to-z Guarantee policy for Merchant Fulfilled Network (MFN) orders, what prerequisite action MUST a customer complete before they or a representative can submit a valid claim?',
    options: [
      { id: 'opt_1', text: 'The customer must file a complaint with their local municipal government.', distractorReason: 'Government filings are unrelated to Amazon customer care.' },
      { id: 'opt_2', text: 'The customer must contact the third-party seller through Buyer-Seller Messaging in "Your Orders" and allow 48 full hours for the seller to resolve the issue.', distractorReason: '' },
      { id: 'opt_3', text: 'The customer must cancel their Amazon Prime membership.', distractorReason: 'Prime membership is unrelated to A-to-z eligibility.' },
      { id: 'opt_4', text: 'The customer must wait at least 180 days before contacting anyone.', distractorReason: '180 days exceeds the standard 90-day filing window.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'The fundamental prerequisite for an A-to-z Guarantee Claim is contacting the seller directly through Amazon\'s Buyer-Seller Messaging service. The seller must be allowed a mandatory 48-hour SLA window to respond and offer a remedy before Amazon intervenes with an A-to-z Guarantee Claim.',
    hint: 'The buyer must message the third-party seller and wait 48 hours for a resolution.',
    referenceSource: 'Amazon Marketplace Policy - A-to-z Guarantee Customer Eligibility SOP',
    isVerified: true
  },
  {
    id: 'ful-010',
    category: 'fulfillment_marketplace',
    topic: '53. A-to-z Guarantee Claims (Eligibility, 48-Hour Seller Window, 90-Day Filing Rule, Covered Conditions, Associate Support & Seller Appeals)',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'What is the official filing time limit for a customer to submit an Amazon A-to-z Guarantee Claim for an MFN order?',
    options: [
      { id: 'opt_1', text: 'Up to 14 days after placing the initial order.', distractorReason: 'Too short; many orders haven\'t even completed delivery.' },
      { id: 'opt_2', text: 'Up to 90 days from the maximum Estimated Delivery Date (EDD).', distractorReason: '' },
      { id: 'opt_3', text: 'Strictly within 24 hours of package dispatch.', distractorReason: 'Packages cannot be claimed before delivery occurs.' },
      { id: 'opt_4', text: 'Indefinitely with no expiration deadline ever.', distractorReason: 'Claims must adhere to the 90-day filing cutoff.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Amazon customers have up to 90 days from the maximum estimated delivery date (EDD) to submit an A-to-z Guarantee Claim. In rare exceptional circumstances (e.g., ongoing fraud investigations or verified shipping carrier errors), Amazon CS leadership may grant exceptions, but 90 days is the standard policy window.',
    hint: 'The standard window extends up to 90 days from the maximum estimated delivery date.',
    referenceSource: 'Amazon Customer Service Guidelines - A-to-z Claim Timelines & Windows',
    isVerified: true
  },
  {
    id: 'ful-011',
    category: 'fulfillment_marketplace',
    topic: '53. A-to-z Guarantee Claims (Eligibility, 48-Hour Seller Window, 90-Day Filing Rule, Covered Conditions, Associate Support & Seller Appeals)',
    difficulty: 'advanced',
    type: 'single_choice',
    question: 'Which of the following customer situations qualifies for coverage and reimbursement under Amazon\'s A-to-z Guarantee?',
    options: [
      { id: 'opt_1', text: 'The customer received an item from Amazon Retail and simply changed their mind after 60 days.', distractorReason: 'A-to-z applies to third-party seller MFN purchases, not out-of-policy Amazon Retail buyer\'s remorse.' },
      { id: 'opt_2', text: 'The MFN item has not arrived 3 calendar days after the maximum estimated delivery date, or the item arrived damaged/materially different, and the seller has failed to provide a resolution within 48 hours of contact.', distractorReason: '' },
      { id: 'opt_3', text: 'The customer bought an item from an external competitor\'s website using cash.', distractorReason: 'Amazon cannot protect off-platform transactions.' },
      { id: 'opt_4', text: 'The customer wants a refund because the price of the item on Amazon dropped a week later.', distractorReason: 'Price matching after purchase is not covered by A-to-z.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'The A-to-z Guarantee protects buyers when: 1) the order hasn\'t arrived 3 days past the latest EDD; 2) the product is defective, damaged, or materially different from the ASIN description; 3) the buyer returned the item with tracking but the seller didn\'t refund within 48 hours; or 4) the seller charged unauthorized customs/shipping fees. In all cases, the 48-hour contact window applies.',
    hint: 'Covers orders missing 3+ days past EDD or materially defective/different MFN items after 48h seller silence.',
    referenceSource: 'Amazon Buyer Protection - A-to-z Guarantee Covered Conditions SOP',
    isVerified: true
  },
  {
    id: 'ful-012',
    category: 'fulfillment_marketplace',
    topic: '53. A-to-z Guarantee Claims (Eligibility, 48-Hour Seller Window, 90-Day Filing Rule, Covered Conditions, Associate Support & Seller Appeals)',
    difficulty: 'advanced',
    type: 'single_choice',
    question: 'A customer calls stating: "I returned an MFN lawnmower to the seller 5 business days ago. The UPS return tracking shows \'Delivered to Seller\' on Monday, but the seller has not refunded my $400. I messaged them 3 days ago with no answer." How must the voice associate handle this call?',
    options: [
      { id: 'opt_1', text: 'Tell the customer that returned merchandise is forfeited if the seller refuses to reply.', distractorReason: 'Completely false and harmful to customer trust.' },
      { id: 'opt_2', text: 'Verify the carrier return tracking showing delivery to the seller, confirm that more than 48 hours have elapsed since delivery/contact without a refund, and assist the customer in submitting an A-to-z Guarantee Claim for the full refund.', distractorReason: '' },
      { id: 'opt_3', text: 'Transfer the customer directly to the local post office in the seller\'s state.', distractorReason: 'Deflecting to external carriers is an FCR failure.' },
      { id: 'opt_4', text: 'Ask the customer to drive to the seller\'s business location to demand cash in person.', distractorReason: 'Violates safety and customer service policies.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'When a customer returns an MFN item with verifiable tracking, sellers are required by Amazon policy to issue a refund within 48 hours of receiving the returned package. If 48 hours have elapsed and the seller has not refunded or responded to messages, the associate initiates an A-to-z Guarantee Claim for the buyer.',
    hint: 'When return delivery to the seller is verified and 48 hours have passed without refund, initiate an A-to-z claim.',
    referenceSource: 'Amazon Marketplace Returns & A-to-z Claim Resolution SOP',
    isVerified: true
  },
  {
    id: 'ful-013',
    category: 'fulfillment_marketplace',
    topic: '53. A-to-z Guarantee Claims (Eligibility, 48-Hour Seller Window, 90-Day Filing Rule, Covered Conditions, Associate Support & Seller Appeals)',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'When an A-to-z Guarantee Claim is decided in favor of the customer and Amazon issues a refund, what rights and timeline does the third-party seller have if they believe the claim was granted erroneously?',
    options: [
      { id: 'opt_1', text: 'The seller has zero appeal rights and is automatically banned from Amazon permanently.', distractorReason: 'Amazon provides due process and an appeals window for sellers.' },
      { id: 'opt_2', text: 'The seller has 30 calendar days to submit an appeal with supporting evidence (such as signed proof of delivery or return inspection notes) to Seller Performance.', distractorReason: '' },
      { id: 'opt_3', text: 'The seller must call the customer\'s personal cell phone to negotiate a cash settlement.', distractorReason: 'Direct off-Amazon contact violates Buyer-Seller Messaging policies.' },
      { id: 'opt_4', text: 'The seller can reverse the customer\'s bank deposit within 1 hour.', distractorReason: 'Sellers have no direct access to customer banking.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Sellers are notified when an A-to-z claim is granted and have 30 calendar days to appeal the decision in Seller Central. If the seller provides proof of signature delivery or evidence that the buyer\'s claim was inaccurate, Amazon may reverse the defect or fund the claim from Amazon\'s own reserves rather than debiting the merchant.',
    hint: 'Sellers have 30 calendar days to submit an appeal with valid supporting documentation.',
    referenceSource: 'Amazon Seller Performance - A-to-z Claim Appeals & Adjudication Rules',
    isVerified: true
  },

  // ================= 6. AMAZON PRIME AND SUBSCRIPTIONS =================
  {
    id: 'prm-001',
    category: 'prime_subscriptions',
    topic: '58. Prime Membership Cancellation',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'A customer noticed their annual Amazon Prime membership renewed yesterday for $139, but they do not wish to continue. They have NOT used any Prime benefits (no shipping, no Prime Video streaming) since the renewal. Are they eligible for a full refund upon cancellation?',
    options: [
      { id: 'opt_1', text: 'No, all Prime membership charges are strictly non-refundable under all circumstances.', distractorReason: 'Amazon Prime policy provides full refunds when benefits have not been used in the active billing period.' },
      { id: 'opt_2', text: 'Yes; if the member has not utilized any Prime benefits during the renewed period, the system will automatically issue a full refund upon cancellation.', distractorReason: '' },
      { id: 'opt_3', text: 'Only 10% can be refunded as Amazon store credit.', distractorReason: 'Not compliant with standard automated Prime refund logic.' },
      { id: 'opt_4', text: 'Only if they agree to sign up for an Amazon credit card.', distractorReason: 'Coercive marketing violates CS compliance.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'If a member cancels their Prime subscription and has not used Prime benefits since the latest billing cycle, they are entitled to a full refund. If benefits were partially utilized, a prorated refund or end-of-term cancellation applies.',
    hint: 'Benefit utilization dictates whether the cancellation produces a full or prorated refund.',
    referenceSource: 'Amazon Prime Membership Terms & Cancellation Rules',
    isVerified: true
  },
  {
    id: 'prm-002',
    category: 'prime_subscriptions',
    topic: '60. Amazon Subscribe & Save',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'How does Amazon Subscribe & Save (S&S) tier its savings discounts for recurring household deliveries?',
    options: [
      { id: 'opt_1', text: 'All subscriptions receive a flat 50% discount regardless of quantity.', distractorReason: '50% is not an Amazon Subscribe & Save discount tier.' },
      { id: 'opt_2', text: 'Subscribers save a baseline 5% on recurring deliveries; when 5 or more subscription items are scheduled to arrive in a single monthly delivery to the same address, savings escalate up to 15% (or 20% on select diapers/baby food).', distractorReason: '' },
      { id: 'opt_3', text: 'Discounts only apply if the customer orders during Prime Day.', distractorReason: 'Subscribe & Save is a continuous recurring delivery service year-round.' },
      { id: 'opt_4', text: 'Subscribe & Save charges extra fees for recurring deliveries.', distractorReason: 'Subscribe & Save deliveries include free standard shipping.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Amazon Subscribe & Save offers regular automatic deliveries with up to 15% savings when 5 or more products arrive in a single monthly shipment. Customers can skip or cancel upcoming orders anytime before dispatch without penalties.',
    hint: '5 or more subscriptions arriving in the same monthly delivery unlocks the 15% discount tier.',
    referenceSource: 'Amazon Subscribe & Save Program Guidelines',
    isVerified: true
  },
  {
    id: 'prm-003',
    category: 'prime_subscriptions',
    topic: '63. Skipping, Modifying, and Cancelling Subscriptions',
    difficulty: 'beginner',
    type: 'single_choice',
    question: 'A customer calls asking: "I have too much coffee right now from my monthly subscription. Can I skip next month\'s delivery without losing my subscription or paying a cancellation penalty?" What is the correct guidance?',
    options: [
      { id: 'opt_1', text: 'No, skipping an order incurs a $25 breach of contract fee.', distractorReason: 'Amazon Subscribe & Save does not charge cancellation or skip fees.' },
      { id: 'opt_2', text: 'Yes, customers can easily skip an upcoming delivery, change delivery frequencies, adjust item quantities, or cancel the subscription anytime online under "Your Subscribe & Save" with zero fees.', distractorReason: '' },
      { id: 'opt_3', text: 'The customer must donate the coffee to their neighbors.', distractorReason: 'Unprofessional response.' },
      { id: 'opt_4', text: 'The customer must delete their Amazon account to stop a shipment.', distractorReason: 'Account deletion is unnecessary for managing subscription deliveries.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Subscribe & Save offers complete self-service flexibility. Subscribers can skip deliveries, adjust delivery intervals (from 2 weeks to 6 months), or cancel individual subscriptions at any time without fees.',
    hint: 'Subscribe & Save deliveries can be skipped or canceled anytime with zero penalties.',
    referenceSource: 'Amazon Customer Support - Subscribe & Save Management',
    isVerified: true
  },
  {
    id: 'prm-004',
    category: 'prime_subscriptions',
    topic: '54. Amazon Prime',
    difficulty: 'beginner',
    type: 'single_choice',
    question: 'A caller is considering joining Amazon Prime and asks what the primary core benefits included in a standard North American Prime membership are. What is the comprehensive answer?',
    options: [
      { id: 'opt_1', text: 'Free unlimited international flights and free hotel stays.', distractorReason: 'Amazon Prime does not offer free airline flights.' },
      { id: 'opt_2', text: 'Fast, free delivery on millions of eligible items (Same-Day, One-Day, Two-Day), Prime Video streaming, Amazon Music, exclusive Prime Day deals, Prime Reading, and unlimited Amazon Photos storage.', distractorReason: '' },
      { id: 'opt_3', text: 'Exemption from paying state and federal sales taxes.', distractorReason: 'Prime membership does not waive statutory sales taxes.' },
      { id: 'opt_4', text: 'A guaranteed free Kindle device sent in the mail every month.', distractorReason: 'Prime includes digital reading, not free monthly hardware devices.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Amazon Prime delivers a multi-benefit subscription ecosystem including fast shipping (Same-Day, 1-Day, 2-Day), Prime Video digital streaming, Amazon Music Prime, Prime Gaming, cloud photo backup with Amazon Photos, and members-only savings events like Prime Day.',
    hint: 'Prime encompasses fast shipping, Prime Video, music, photos, and exclusive member deals.',
    referenceSource: 'Amazon Prime Membership Overview Guide',
    isVerified: true
  },
  {
    id: 'prm-005',
    category: 'prime_subscriptions',
    topic: '55. Types of Amazon Prime Subscriptions',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'A college student with a valid university email address (.edu) and a customer receiving government assistance (SNAP / EBT card) both call inquiring about discounted Prime rates. What specific membership tiers are available for them?',
    options: [
      { id: 'opt_1', text: 'Discounted Prime is strictly prohibited; all customers must pay $500 per year.', distractorReason: 'False; Amazon offers dedicated discounted inclusivity tiers.' },
      { id: 'opt_2', text: 'Prime Student (offers a 6-month trial followed by approximately 50% discount on monthly/annual rates with student verification) and Prime Access (offers a discounted monthly rate for qualifying government assistance recipients with valid EBT/Medicaid cards).', distractorReason: '' },
      { id: 'opt_3', text: 'Prime is free for anyone who signs up on a Tuesday.', distractorReason: 'Absurd distractor.' },
      { id: 'opt_4', text: 'They must work at an Amazon fulfillment center for 6 months to qualify.', distractorReason: 'Prime Student and Prime Access are open to eligible public consumers.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Amazon provides two dedicated discount subscription tiers: Prime Student (for enrolled higher education students with proof of enrollment, offering a 6-month trial and 50% discount) and Prime Access (discounted monthly membership for recipients of eligible government assistance such as SNAP, Medicaid, or SSI).',
    hint: 'Prime Student and Prime Access offer substantial discounts for students and government assistance recipients.',
    referenceSource: 'Amazon Prime Tiers - Student and Prime Access Programs',
    isVerified: true
  },
  {
    id: 'prm-006',
    category: 'prime_subscriptions',
    topic: '56. Prime Membership Benefits',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'A customer asks: "Can my spouse share my Amazon Prime delivery and Prime Video benefits without sharing my credit card number or seeing what I order for their birthday?" What Amazon feature enables this?',
    options: [
      { id: 'opt_1', text: 'The customer must give their spouse their personal password and allow joint login.', distractorReason: 'Sharing passwords compromises account security and does not keep order history private.' },
      { id: 'opt_2', text: 'Amazon Household: Allows two adults to link their separate Amazon accounts to share Prime shipping, Prime Video, and digital library benefits while keeping separate payment methods, recommendations, and order histories private.', distractorReason: '' },
      { id: 'opt_3', text: 'Sharing Prime benefits outside of one single account is illegal and terminates the account.', distractorReason: 'Amazon Household is an officially supported feature of Prime.' },
      { id: 'opt_4', text: 'They must purchase two full-price separate Prime memberships.', distractorReason: 'Amazon Household eliminates the need for separate paid memberships.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Amazon Household allows two adults with separate Amazon accounts to form a digital household, sharing Prime shipping, Prime Video streaming, and Kindle Family Library benefits while maintaining distinct account logins, separate payment cards, and private order histories.',
    hint: 'Amazon Household links two adult accounts to share benefits while keeping orders private.',
    referenceSource: 'Amazon Household & Family Benefit Sharing Guidelines',
    isVerified: true
  },
  {
    id: 'prm-007',
    category: 'prime_subscriptions',
    topic: '57. Prime Billing and Charges',
    difficulty: 'advanced',
    type: 'single_choice',
    question: 'A customer is charged $139 for their annual Prime renewal, but the charge appeared on a secondary credit card they do not use often. The customer is confused. What explains this charge behavior under Amazon Wallet policies?',
    options: [
      { id: 'opt_1', text: 'Amazon randomly picks random cards across different customer accounts.', distractorReason: 'False; Amazon only charges cards stored inside the customer\'s own authenticated wallet.' },
      { id: 'opt_2', text: 'The "Backup Payment Method" feature in Amazon Wallet was active; when the customer\'s primary card expired or failed authorization, the system automatically attempted their designated backup card on file to prevent lapse of membership benefits.', distractorReason: '' },
      { id: 'opt_3', text: 'The bank forced Amazon to bill that specific card.', distractorReason: 'Card authorization retry logic is managed by Amazon Wallet preferences.' },
      { id: 'opt_4', text: 'Customer service agents manually selected the card.', distractorReason: 'Billing renewals are fully automated.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Under Amazon Prime membership terms, if the primary payment method is declined or expired upon annual renewal, Amazon\'s Backup Payment Method setting authorizes charging any other valid card on file in the customer\'s Amazon Wallet to maintain uninterrupted Prime access.',
    hint: 'Backup payment methods stored in the wallet are charged if primary billing authorization fails.',
    referenceSource: 'Amazon Wallet & Prime Backup Payment Method SOP',
    isVerified: true
  },
  {
    id: 'prm-008',
    category: 'prime_subscriptions',
    topic: '59. Prime Refund Eligibility',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'A customer\'s annual Prime membership renewed 10 days ago for $139. Since the renewal, the customer used Prime Free Two-Day Shipping on one small order of batteries ($10 value). The customer now calls wanting to cancel. What is their refund eligibility?',
    options: [
      { id: 'opt_1', text: 'Because they used one shipping benefit, zero refund of any kind is possible.', distractorReason: 'Amazon Prime policy provides prorated refunds when benefits have been minimally used.' },
      { id: 'opt_2', text: 'The customer is eligible for a prorated refund (or refund adjusted for the value of the benefit used) upon immediate cancellation, or can choose to turn off auto-renew and keep Prime active through the remainder of the paid year.', distractorReason: '' },
      { id: 'opt_3', text: 'The customer must pay a $50 early termination fine.', distractorReason: 'Amazon does not charge cancellation penalties.' },
      { id: 'opt_4', text: 'The customer receives a 200% refund as a courtesy.', distractorReason: 'Exceeds authorized financial resolution.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'If a customer cancels after utilizing Prime benefits during the billing cycle, the system calculates a prorated refund or deducts the monetary value of the benefits consumed. Alternatively, the customer can elect to keep benefits active until the expiration date without renewing.',
    hint: 'When Prime benefits were used during the active billing period, a prorated refund applies.',
    referenceSource: 'Amazon Prime Cancellation & Prorated Refund Policy',
    isVerified: true
  },
  {
    id: 'prm-009',
    category: 'prime_subscriptions',
    topic: '61. Subscribe & Save Discounts',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'A customer currently receives 3 Subscribe & Save recurring items in their monthly delivery, saving 5% on each item. They ask: "How can I get the maximum 15% discount on all my items?" What is the exact qualifying threshold?',
    options: [
      { id: 'opt_1', text: 'They must spend at least $1,000 every week.', distractorReason: 'Subscribe & Save tier discounts are based on item counts in a single monthly delivery, not spending $1,000.' },
      { id: 'opt_2', text: 'When 5 or more subscription products arrive in a single monthly delivery to the same address, the discount tier automatically escalates from 5% to 15% across all eligible subscription items in that delivery.', distractorReason: '' },
      { id: 'opt_3', text: 'They must cancel and re-subscribe 10 times in one day.', distractorReason: 'Nonsensical distractor.' },
      { id: 'opt_4', text: 'The 15% discount only exists for Amazon employees.', distractorReason: 'Available to all Subscribe & Save customers.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Amazon Subscribe & Save offers a tiered savings model: 1 to 4 items in a monthly delivery qualify for the baseline 5% discount; reaching 5 or more subscription items scheduled for delivery on the same monthly delivery date unlocks the 15% tier across all eligible products.',
    hint: '5 or more subscriptions scheduled for the same monthly delivery unlocks the 15% discount tier.',
    referenceSource: 'Amazon Subscribe & Save Tiered Discount SOP',
    isVerified: true
  },
  {
    id: 'prm-010',
    category: 'prime_subscriptions',
    topic: '62. Recurring Deliveries',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'For Subscribe & Save recurring orders, when does Amazon lock the order against further changes (such as skipping, quantity changes, or address updates) before monthly dispatch?',
    options: [
      { id: 'opt_1', text: 'Orders lock 30 days before the delivery date.', distractorReason: 'Subscribers can edit their subscriptions until a few days before shipment.' },
      { id: 'opt_2', text: 'Amazon sends a reminder email several days prior to shipment with a designated "Last day to edit" deadline (typically 3 to 5 days before the monthly delivery date), after which the order is locked for picking and packing.', distractorReason: '' },
      { id: 'opt_3', text: 'Subscriptions can be edited even after the driver delivers the package.', distractorReason: 'Physical fulfillment prevents changes after dispatch.' },
      { id: 'opt_4', text: 'Subscriptions never lock and can be altered mid-transit.', distractorReason: 'Dispatched orders cannot be modified.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Subscribers receive a monthly reminder email notifying them that their subscription is preparing to ship. This email specifies the "Last day to review or change items". Once this cut-off deadline passes, the order locks into the warehouse packing queue and charges are processed upon dispatch.',
    hint: 'Subscriptions lock a few days before delivery on the "Last day to edit" cutoff date.',
    referenceSource: 'Amazon Subscribe & Save Order Lock & Fulfillment Guidelines',
    isVerified: true
  },
  {
    id: 'prm-011',
    category: 'prime_subscriptions',
    topic: '61. Subscribe & Save Discounts (5% for 1-4 items, 15% for 5+ items)',
    difficulty: 'beginner',
    type: 'single_choice',
    question: 'What is the official tiered discount structure for Amazon Subscribe & Save (S&S) orders delivered to the same address on the customer\'s recurring monthly delivery day?',
    options: [
      { id: 'opt_1', text: 'All subscriptions always receive a flat 50% discount regardless of quantity.', distractorReason: 'Unsustainable and false.' },
      { id: 'opt_2', text: '1 to 4 subscriptions delivered together receive a 5% base discount; reaching 5 or more subscriptions delivered together on the same monthly delivery day unlocks the tiered 15% discount (up to 20% on select diapers/wipes with Prime).', distractorReason: '' },
      { id: 'opt_3', text: 'There are no discounts; Subscribe & Save costs 10% more than standard one-time purchases.', distractorReason: 'S&S offers savings, not surcharges.' },
      { id: 'opt_4', text: 'Only corporate business accounts can receive any Subscribe & Save discount.', distractorReason: 'S&S is available to all consumer accounts.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Amazon Subscribe & Save rewards bundled recurring deliveries: 1 to 4 eligible subscriptions arriving on the same monthly delivery day earn a 5% discount. Subscribing to 5 or more items in the same monthly delivery unlocks the 15% tier discount across all items. Prime members can also unlock up to 20% off on diapers and baby food.',
    hint: '1-4 items earn 5% discount; 5 or more items unlock 15% discount.',
    referenceSource: 'Amazon Subscribe & Save Terms - Tiered Volume Discounts SOP',
    isVerified: true
  },
  {
    id: 'prm-012',
    category: 'prime_subscriptions',
    topic: '62. Recurring Deliveries (Frequencies from 2 Weeks to 6 Months)',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'How flexible are delivery frequencies for Amazon Subscribe & Save subscriptions, and who controls the scheduling?',
    options: [
      { id: 'opt_1', text: 'The customer can choose delivery frequencies ranging from every 2 weeks up to every 6 months, and can adjust the frequency at any time in "Your Subscribe & Save".', distractorReason: '' },
      { id: 'opt_2', text: 'Deliveries must occur every single day, with no option to change.', distractorReason: 'Daily subscriptions do not exist.' },
      { id: 'opt_3', text: 'Amazon algorithms decide the date without notifying the customer.', distractorReason: 'Customers select and manage delivery frequencies.' },
      { id: 'opt_4', text: 'Frequencies can only be changed once every 5 years.', distractorReason: 'Modifications can be made every billing cycle.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'Subscribe & Save offers extensive flexibility: customers select repeat intervals (every 2 weeks, or monthly from 1 to 6 months). Customers can change their frequency, alter quantities, or group multiple subscriptions onto a unified monthly delivery day directly in their account settings.',
    hint: 'Frequencies range from every 2 weeks up to every 6 months and can be adjusted anytime.',
    referenceSource: 'Amazon Customer Service - Subscribe & Save Scheduling & Cadence',
    isVerified: true
  },
  {
    id: 'prm-013',
    category: 'prime_subscriptions',
    topic: '63. Skipping, Modifying, and Cancelling Subscriptions (Zero Fee Flexibility)',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'A customer has an upcoming Subscribe & Save shipment scheduled for next week, but they still have plenty of laundry detergent left from their previous order. What options does the customer have?',
    options: [
      { id: 'opt_1', text: 'The customer is legally forced to accept the shipment or face account termination.', distractorReason: 'False and hostile.' },
      { id: 'opt_2', text: 'The customer can easily "Skip" the upcoming delivery or cancel the subscription completely with zero fees or penalties prior to the order processing cutoff date.', distractorReason: '' },
      { id: 'opt_3', text: 'The customer must pay a $25 subscription cancellation penalty.', distractorReason: 'Amazon charges zero fees to cancel or skip.' },
      { id: 'opt_4', text: 'The customer must return their entire washing machine to cancel.', distractorReason: 'Absurd distractor.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Customers maintain full control over their Subscribe & Save subscriptions: they can skip individual deliveries, change the next delivery date, modify item quantities, or cancel subscriptions entirely at any time without fees, as long as the change is made before the order enters shipping.',
    hint: 'Customers can skip deliveries or cancel subscriptions anytime with zero fees before shipping cutoff.',
    referenceSource: 'Amazon Subscribe & Save Management - Skip and Cancellation Guidelines',
    isVerified: true
  },
  {
    id: 'prm-014',
    category: 'prime_subscriptions',
    topic: '60. Amazon Subscribe & Save',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'A customer calls complaining: "When I set up my coffee subscription 4 months ago, it was $10 a bag. On this month\'s renewal, I was charged $12! Why didn\'t Amazon keep the price locked at $10 forever?" What is Amazon\'s policy regarding Subscribe & Save pricing?',
    options: [
      { id: 'opt_1', text: 'All Subscribe & Save prices are constitutionally guaranteed never to change for 50 years.', distractorReason: 'Prices fluctuate based on market retail price.' },
      { id: 'opt_2', text: 'Subscribe & Save charges the current price of the item on the day the order is processed (minus the 5% or 15% discount); Amazon sends a reminder email listing the price before the order ships, allowing the customer to review, skip, or cancel.', distractorReason: '' },
      { id: 'opt_3', text: 'The agent should refund all past coffee purchases over the last 4 months.', distractorReason: 'Concession policy violation.' },
      { id: 'opt_4', text: 'Third-party sellers can charge whatever they want without notice.', distractorReason: 'Amazon always sends advance pricing notifications.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Subscribe & Save item prices fluctuate with general Amazon marketplace pricing. The price charged is the product\'s selling price on the day the subscription order is generated, minus the applicable 5% or 15% S&S discount. Amazon sends an advance email reminder several days before order processing displaying the current price.',
    hint: 'S&S charges the current item price on the date the order processes, with an advance email reminder sent.',
    referenceSource: 'Amazon Subscribe & Save Terms - Price Fluctuations & Notification SOP',
    isVerified: true
  },
  {
    id: 'prm-015',
    category: 'prime_subscriptions',
    topic: '60. Amazon Subscribe & Save',
    difficulty: 'advanced',
    type: 'single_choice',
    question: 'What happens when a product enrolled in a customer\'s Subscribe & Save subscription is temporarily out of stock at Amazon fulfillment centers on their scheduled delivery date?',
    options: [
      { id: 'opt_1', text: 'The customer\'s entire Amazon account is closed.', distractorReason: 'Out of stock inventory does not affect account standing.' },
      { id: 'opt_2', text: 'Amazon notifies the customer and automatically skips that item for the delivery cycle without charging the customer; or, if the customer enabled automatic substitutions, Amazon may substitute a similar item of equal or better value at no extra cost.', distractorReason: '' },
      { id: 'opt_3', text: 'Amazon charges the customer full price and sends an empty envelope.', distractorReason: 'Fraudulent and impossible.' },
      { id: 'opt_4', text: 'The customer is charged a restocking penalty fee.', distractorReason: 'Amazon never charges penalties for out-of-stock items.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'When an S&S item is temporarily unavailable, Amazon will attempt to ship it as soon as inventory arrives, or skip the delivery for that month with zero charge to the customer. For eligible everyday essentials, customers can opt into automatic substitution where a similar brand/size is provided.',
    hint: 'Out-of-stock S&S deliveries are skipped with zero charge or fulfilled with an approved substitution.',
    referenceSource: 'Amazon S&S Operations - Out of Stock & Product Substitution Guidelines',
    isVerified: true
  },
  {
    id: 'prm-016',
    category: 'prime_subscriptions',
    topic: '55. Types of Amazon Prime Subscriptions (Standard Annual, Standard Monthly, Prime Student, Prime Access, Prime Video Standalone)',
    difficulty: 'beginner',
    type: 'single_choice',
    question: 'What are the primary consumer tiers and pricing structures available for Amazon Prime memberships in North America?',
    options: [
      { id: 'opt_1', text: 'Standard Prime Annual ($139/year), Standard Prime Monthly ($14.99/month), Prime Student ($69/year or $7.49/month), Prime Access / Qualified Assistance ($6.99/month), and Prime Video-only ($8.99/month).', distractorReason: '' },
      { id: 'opt_2', text: 'Only one single tier exists: $500 per month for everyone.', distractorReason: 'False.' },
      { id: 'opt_3', text: 'Prime is completely free for everyone in the world with no tiers.', distractorReason: 'Prime is a paid membership program.' },
      { id: 'opt_4', text: 'Subscriptions can only be paid by trading used electronics.', distractorReason: 'Absurd.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'Amazon Prime in the US features multiple tiers tailored to customer demographics: Standard Annual ($139/yr), Standard Monthly ($14.99/mo), Prime Student (50% off for verified college students), Prime Access ($6.99/mo for government assistance recipients), and a standalone Prime Video streaming subscription ($8.99/mo).',
    hint: 'Includes Standard Annual ($139), Monthly ($14.99), Student ($69/$7.49), Prime Access ($6.99), and Prime Video ($8.99).',
    referenceSource: 'Amazon Prime Pricing Matrix & Subscription Tiers',
    isVerified: true
  },
  {
    id: 'prm-017',
    category: 'prime_subscriptions',
    topic: '55. Types of Amazon Prime Subscriptions (Standard Annual, Standard Monthly, Prime Student, Prime Access, Prime Video Standalone)',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'What are the specific eligibility requirements and benefits associated with the "Prime Student" membership tier?',
    options: [
      { id: 'opt_1', text: 'Available to any person of any age who reads a book once a year.', distractorReason: 'Requires student status.' },
      { id: 'opt_2', text: 'Requires an active .edu college/university email address or proof of current higher education enrollment; includes a 6-month sponsored trial, followed by a 50% discounted membership rate ($7.49/mo or $69/yr) for up to 4 years or until graduation.', distractorReason: '' },
      { id: 'opt_3', text: 'Requires attending kindergarten in Washington state.', distractorReason: 'Designed for higher education.' },
      { id: 'opt_4', text: 'Only offers free shipping on textbooks, with zero video or music access.', distractorReason: 'Prime Student includes Prime Video, Music, and gaming.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Prime Student provides college and university students with a 6-month free trial, after which the membership renews at 50% off standard Prime ($7.49/month or $69/year). Students verify eligibility with a valid .edu email address or official enrollment documentation, valid for up to 4 years or graduation.',
    hint: 'Requires active college enrollment (.edu email), provides a 6-month trial and 50% off for up to 4 years.',
    referenceSource: 'Amazon Prime Student Terms & Verification Guidelines',
    isVerified: true
  },
  {
    id: 'prm-018',
    category: 'prime_subscriptions',
    topic: '55. Types of Amazon Prime Subscriptions (Standard Annual, Standard Monthly, Prime Student, Prime Access, Prime Video Standalone)',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'What is "Prime Access" (Government Assistance Discount), and which customers qualify for this discounted membership tier?',
    options: [
      { id: 'opt_1', text: 'It is a special tier for Amazon corporate executives only.', distractorReason: 'Designed for qualifying assistance recipients.' },
      { id: 'opt_2', text: 'It is a discounted Prime membership at $6.99/month for recipients of qualifying government assistance programs (such as SNAP EBT, Medicaid, SSI, TANF, WIC, or Direct Express), requiring document verification renewed every 12 months.', distractorReason: '' },
      { id: 'opt_3', text: 'A free tier for anyone who asks for a discount on voice calls.', distractorReason: 'Requires verified program documentation.' },
      { id: 'opt_4', text: 'A tier that only works between 2 AM and 4 AM.', distractorReason: 'Full 24/7 Prime access.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Amazon Prime Access provides all standard Prime shipping, video, and shopping benefits at a reduced price of $6.99/month to ensure equitable access. Qualification requires uploading proof of participation in government programs (e.g. SNAP EBT card, Medicaid card, SSI letter), with annual re-verification.',
    hint: '$6.99/month for recipients of qualifying government assistance programs like SNAP EBT and Medicaid.',
    referenceSource: 'Amazon Prime Access - Government Assistance Discount SOP',
    isVerified: true
  },
  {
    id: 'prm-019',
    category: 'prime_subscriptions',
    topic: '55. Types of Amazon Prime Subscriptions (Standard Annual, Standard Monthly, Prime Student, Prime Access, Prime Video Standalone)',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'A customer calls asking why they are being charged for shipping on their Amazon order even though they subscribe to the "$8.99/month Prime Video" plan. What must the associate explain?',
    options: [
      { id: 'opt_1', text: 'Shipping is free, but the associate must manually push a secret button for every order.', distractorReason: 'False.' },
      { id: 'opt_2', text: 'The $8.99/month standalone Prime Video subscription provides access strictly to the Prime Video streaming catalog; it does NOT include free Prime shipping or shopping benefits, which require upgrading to standard Prime.', distractorReason: '' },
      { id: 'opt_3', text: 'The customer\'s package was stolen by the carrier.', distractorReason: 'Unrelated to subscription tier.' },
      { id: 'opt_4', text: 'The customer must pay $1,000 to unlock shipping.', distractorReason: 'Standard Prime upgrade is $14.99/mo.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'The standalone Prime Video plan ($8.99/month) is designed exclusively for video streaming customers who do not shop on Amazon. It does not include free fast delivery, Prime Reading, Prime Music, or early access to deals. To receive free shipping, the customer must upgrade to full Prime.',
    hint: 'Prime Video-only plan ($8.99/mo) includes streaming only, not free shipping benefits.',
    referenceSource: 'Amazon Digital Video - Prime Video Standalone Plan Policies',
    isVerified: true
  },
  {
    id: 'prm-020',
    category: 'prime_subscriptions',
    topic: '56. Prime Membership Benefits and Amazon Household Sharing',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'How does "Amazon Household" allow customers to share Prime benefits, and what account boundaries are maintained?',
    options: [
      { id: 'opt_1', text: 'Both users must merge into a single account and share the same password and email.', distractorReason: 'Accounts remain completely separate.' },
      { id: 'opt_2', text: 'Up to two adults can link their separate Amazon accounts to share Prime shipping, Prime Video, and digital books, while keeping their personal browsing history, order history, and payment cards private.', distractorReason: '' },
      { id: 'opt_3', text: 'Anyone on the same street gets free shipping automatically.', distractorReason: 'Household requires linking accounts.' },
      { id: 'opt_4', text: 'Household sharing costs $50 per month extra.', distractorReason: 'Household sharing is a free Prime benefit.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Amazon Household allows two adults with individual Amazon accounts to link together in a household. They share Prime benefits (free fast shipping, Prime Video streaming, digital library sharing via Family Library) while maintaining full account privacy (separate login, order history, and payment wallets).',
    hint: 'Allows 2 adults to share Prime benefits while keeping accounts, orders, and payment cards separate.',
    referenceSource: 'Amazon Household - Benefits Sharing & Account Separation SOP',
    isVerified: true
  },

  // ================= 7. INTERNATIONAL SHIPPING =================
  {
    id: 'int-001',
    category: 'international_shipping',
    topic: '70. Import Fees Deposit, Where Applicable',
    difficulty: 'advanced',
    type: 'single_choice',
    question: 'When a North American customer purchases an item shipped from the Amazon Global Store or internationally, what is the purpose of the "Import Fees Deposit" (IFD)?',
    options: [
      { id: 'opt_1', text: 'It is a mandatory tip for the international delivery pilot.', distractorReason: 'IFD is not a personal courier tip.' },
      { id: 'opt_2', text: 'It is an estimate of customs duties, taxes, and fees collected at checkout to pay border authorities on the recipient\'s behalf; if actual customs fees are lower, the difference is automatically refunded to the customer\'s payment method after 60 days.', distractorReason: '' },
      { id: 'opt_3', text: 'It is a penalty fine for buying non-American products.', distractorReason: 'Import Fees Deposit covers legitimate cross-border customs regulations.' },
      { id: 'opt_4', text: 'It is retained by Amazon as extra revenue under all circumstances.', distractorReason: 'Unused deposit amounts are refunded automatically.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'The Import Fees Deposit (IFD) estimates customs duties and import taxes due upon international border entry. Amazon pays these fees on behalf of the customer. If the actual fees charged by customs authorities are less than the deposit, the remaining balance is refunded to the buyer within 60 days.',
    hint: 'IFD estimates customs duties and refunds any surplus after 60 days.',
    referenceSource: 'Amazon Global Store - Import Fees Deposit Guidelines',
    isVerified: true
  },
  {
    id: 'int-002',
    category: 'international_shipping',
    topic: '65. Freight',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'A customer ordered a commercial refrigerator delivered via Amazon Freight Services. The tracking shows "Scheduled Delivery Appointment Required". Why is this required?',
    options: [
      { id: 'opt_1', text: 'Heavy and bulky freight items require a scheduled delivery window because an adult signature and physical unloading inspection at the destination are mandatory.', distractorReason: '' },
      { id: 'opt_2', text: 'The carrier lost the package and needs the customer to search the highway.', distractorReason: 'Freight appointments are standard logistics procedure for oversized items.' },
      { id: 'opt_3', text: 'The driver wants to inspect the customer\'s living room decor.', distractorReason: 'Inappropriate and irrelevant.' },
      { id: 'opt_4', text: 'Freight delivery only happens if the customer owns a forklift.', distractorReason: 'Liftgate residential delivery options exist without customer forklift ownership.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'Heavy and bulky items handled through Amazon Freight or white-glove carriers require a pre-scheduled delivery window. A designated adult must be present to inspect the exterior condition and sign for the oversized freight.',
    hint: 'Oversized freight requires adult presence and scheduled appointment windows.',
    referenceSource: 'Amazon Heavy & Bulky Freight Delivery SOP',
    isVerified: true
  },
  {
    id: 'int-003',
    category: 'international_shipping',
    topic: '64. Amazon Global Store',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'A customer in the United States purchases an item on Amazon.com that displays: "Ships from and sold by Amazon Global Store UK". How does customer service and return handling work for Amazon Global Store orders?',
    options: [
      { id: 'opt_1', text: 'Amazon.com CS cannot assist; the customer must dial an international toll number to London at their own expense.', distractorReason: 'Amazon.com CS provides full direct support for Global Store items bought on the US portal.' },
      { id: 'opt_2', text: 'Amazon.com CS provides unified support, and returns are sent to an Amazon domestic return center or processed with a prepaid international carrier label / return postage refund.', distractorReason: '' },
      { id: 'opt_3', text: 'Global Store purchases are strictly non-returnable under international maritime treaty.', distractorReason: 'False; standard return policies apply with adjusted cross-border logistics.' },
      { id: 'opt_4', text: 'The customer must personally deliver the return to Heathrow Airport.', distractorReason: 'Humorous distractor.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'The Amazon Global Store allows customers to buy products from international Amazon marketplaces directly on their domestic Amazon site. Domestic Customer Service handles all inquiries, and returns are routed to local hubs or supported with prepaid international return labels.',
    hint: 'Amazon Global Store orders bought on the domestic site receive seamless domestic CS and return support.',
    referenceSource: 'Amazon Global Store - Customer Care & Returns Policy',
    isVerified: true
  },
  {
    id: 'int-004',
    category: 'international_shipping',
    topic: '66. International Shipping',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'When an order is shipped internationally from the US to Canada or Mexico, how does carrier tracking handoff typically appear in customer tracking tools?',
    options: [
      { id: 'opt_1', text: 'Tracking permanently terminates the second the package leaves US soil.', distractorReason: 'Amazon global logistics provides end-to-end milestone tracking across borders.' },
      { id: 'opt_2', text: 'Tracking shows export customs scan, international linehaul transit, border customs clearance, and handoff to the destination local carrier (e.g. Canada Post, DHL Express, or local postal operator) with cross-referenced tracking IDs.', distractorReason: '' },
      { id: 'opt_3', text: 'Tracking only updates if the customer calls the carrier pilot directly.', distractorReason: 'Completely ungrounded.' },
      { id: 'opt_4', text: 'International orders are only moved by passenger trains.', distractorReason: 'Irrelevant.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'International shipments undergo structured logistics milestones: export scan, transit flight, destination customs clearance, and handoff to in-country last-mile carriers (such as Canada Post or local courier partners). Tracking tools display both original and partner tracking numbers.',
    hint: 'International tracking displays export, border customs clearance, and destination courier handoff.',
    referenceSource: 'Amazon Cross-Border Logistics & Carrier Handoff Guide',
    isVerified: true
  },
  {
    id: 'int-005',
    category: 'international_shipping',
    topic: '67. Import Fees and Duties',
    difficulty: 'advanced',
    type: 'single_choice',
    question: 'Why does Amazon collect the Import Fees Deposit (IFD) at checkout rather than letting the carrier collect customs fees upon delivery at the customer\'s door (Delivery Duty Paid / DDP model)?',
    options: [
      { id: 'opt_1', text: 'To surprise customers with extra unexpected charges after delivery.', distractorReason: 'DDP prevents surprise doorstep fees.' },
      { id: 'opt_2', text: 'To ensure a seamless delivery experience where customs clearance is expedited and recipients do not face surprise doorstep brokerage invoices or delivery refusal fees.', distractorReason: '' },
      { id: 'opt_3', text: 'Amazon is legally prohibited from using commercial couriers.', distractorReason: 'Amazon uses major international commercial couriers.' },
      { id: 'opt_4', text: 'To prevent customers from opening the package.', distractorReason: 'Nonsensical distractor.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Amazon utilizes the Delivery Duty Paid (DDP) model: collecting estimated customs duties and taxes upfront via the Import Fees Deposit prevents surprise brokerage fees, avoids carrier collection delays at the doorstep, and ensures smooth border customs processing.',
    hint: 'Pre-collecting import fees (DDP) prevents unexpected doorstep customs bills for the customer.',
    referenceSource: 'Amazon International Shipping - Customs Duty Architecture',
    isVerified: true
  },
  {
    id: 'int-006',
    category: 'international_shipping',
    topic: '68. Customs Clearance',
    difficulty: 'advanced',
    type: 'single_choice',
    question: 'An international customer calls because their tracking status displays: "Clearance Delay: Recipient Tax Identification Number / National ID required by destination customs authorities". What guidance should the agent provide?',
    options: [
      { id: 'opt_1', text: 'Tell the customer that the package has been confiscated and destroyed by customs.', distractorReason: 'False; customs is awaiting required compliance information before clearing the parcel.' },
      { id: 'opt_2', text: 'Explain that the destination country\'s customs laws require the recipient\'s national tax ID or personal ID to clear import regulations; direct the customer to click the carrier secure update link or upload their ID on Amazon to allow release of the shipment.', distractorReason: '' },
      { id: 'opt_3', text: 'Tell the customer to forge a fake government ID.', distractorReason: 'Illegal and strictly prohibited.' },
      { id: 'opt_4', text: 'Cancel the shipment and refund the customer immediately without attempting clearance.', distractorReason: 'Premature cancellation when customer ID submission clears the parcel.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Many destination nations (e.g. Brazil, Mexico, Saudi Arabia, India) mandate that customs imports match the recipient\'s national tax ID or citizen ID. Associates direct the customer to the secure compliance link so the carrier can submit documents to customs officials for prompt release.',
    hint: 'Guide the customer to provide their required national tax ID through the secure carrier/Amazon link.',
    referenceSource: 'Amazon Global Logistics - Customs Clearance Documentation SOP',
    isVerified: true
  },
  {
    id: 'int-007',
    category: 'international_shipping',
    topic: '69. International Delivery Delays',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'An international order shipped from the US to the UK has exceeded its Estimated Delivery Date by 4 business days due to severe customs inspection congestion at London Heathrow. At what point does Amazon SOP permit declaring the international parcel lost in transit for a full refund or replacement?',
    options: [
      { id: 'opt_1', text: 'Declare lost after 10 minutes of shipping.', distractorReason: 'Absurd timeframe.' },
      { id: 'opt_2', text: 'Allow a standard customs buffer window (typically 3 to 5 business days past EDD for international routes); if the package shows zero tracking scans and passes the delay buffer, initiate a full refund or free replacement.', distractorReason: '' },
      { id: 'opt_3', text: 'Never issue a refund for international orders under any circumstances.', distractorReason: 'International purchases are fully covered by Amazon delivery guarantees.' },
      { id: 'opt_4', text: 'Charge the customer a late penalty fee.', distractorReason: 'Completely false.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'International routes encounter occasional border customs inspection holds. Amazon guidelines enforce an international buffer window (3-5 business days beyond original EDD). If tracking has stalled and the buffer expires, customer service issues a full refund or replacement for lost-in-transit packages.',
    hint: 'International delay buffers require waiting 3-5 business days past EDD before declaring lost in transit.',
    referenceSource: 'Amazon International Customer Care - Lost in Transit SOP',
    isVerified: true
  },

  // ================= 8. TRANSFERS AND SUPPORT OPERATIONS =================
  {
    id: 'ops-001',
    category: 'transfers_operations',
    topic: '73. Transfer Eligibility and Procedures',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'What is the mandatory protocol when performing a "Warm Transfer" to a specialized department (such as Ring Technical Support or Carrier Logistics)?',
    options: [
      { id: 'opt_1', text: 'Drop the call immediately into the transfer queue without saying a word to the customer or receiving agent (cold blind drop).', distractorReason: 'Blind drops cause customer frustration, repeat disclosures, and violate QA transfer standards.' },
      { id: 'opt_2', text: 'Inform the customer of the transfer destination, place them on a brief hold, connect with the receiving associate to brief them on customer name, order ID, and summarized issue, then complete the handoff smoothly.', distractorReason: '' },
      { id: 'opt_3', text: 'Give the customer the direct personal phone number of the CEO.', distractorReason: 'Unprofessional and unauthorized.' },
      { id: 'opt_4', text: 'Tell the customer that transfers cost $10 per transfer.', distractorReason: 'Customer transfers are free.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'A compliant Warm Transfer requires: 1) Asking permission and explaining why the specialized department is best suited, 2) Placing the customer on hold, 3) Briefing the receiving associate with order details and issue summary, and 4) Introducing the receiving agent before disconnecting.',
    hint: 'Warm transfers require briefing the receiving agent before dropping off the call.',
    referenceSource: 'Amazon Customer Service Operations - Warm Transfer Protocol',
    isVerified: true
  },
  {
    id: 'ops-002',
    category: 'transfers_operations',
    topic: '77. Finding Policy Information in AC3 or Your Designated Support Tool',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'In customer contact center tools like AC3 (Amazon Customer Care Console) or Heartbeat/CSC, where should an associate look to verify the most up-to-date Standard Operating Procedure (SOP)?',
    options: [
      { id: 'opt_1', text: 'Public Reddit forums and social media posts.', distractorReason: 'External social media is unverified and often violates internal policy.' },
      { id: 'opt_2', text: 'Search the internal Knowledge Base (CSC / Heartbeat) using specific order keywords, verify the policy effective date, and check related SOP workflow trees directly embedded in AC3.', distractorReason: '' },
      { id: 'opt_3', text: 'Make up policies based on personal feelings.', distractorReason: 'Never guess policy; always consult official knowledge repositories.' },
      { id: 'opt_4', text: 'Ask other trainees in a chat group who may also be learning.', distractorReason: 'Peer hearsay is not an approved reference source.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Internal tools such as AC3 connect directly with CSC/Heartbeat standard operating procedures. Associates must navigate official knowledge trees, verify recent updates, and execute workflows according to verified corporate guidance.',
    hint: 'Always search official internal Knowledge Base tools (CSC/Heartbeat) for policy verification.',
    referenceSource: 'AC3 Navigation and Knowledge Management Guide',
    isVerified: true
  },
  {
    id: 'ops-003',
    category: 'transfers_operations',
    topic: '71. Inline Transfers',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'In contact center operations, what is an "Inline Transfer", and when is it executed?',
    options: [
      { id: 'opt_1', text: 'Disconnecting the call and hoping the customer calls back.', distractorReason: 'Blind disconnect is a severe QA failure.' },
      { id: 'opt_2', text: 'Transferring an active customer within the same contact session directly into a specialized skill-based queue (such as Spanish Language Support or Heavy & Bulky Freight) while retaining all IVR authentication and order screen pop data for the next agent.', distractorReason: '' },
      { id: 'opt_3', text: 'Giving the caller the personal cellphone number of the agent sitting next to you.', distractorReason: 'Violates operations security and PII rules.' },
      { id: 'opt_4', text: 'Transferring the customer to an automated advertising recording.', distractorReason: 'Unacceptable handling.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'An Inline Transfer routes the caller seamlessly across telephony skill groups (such as language lines or specialized logistics). The telephony platform preserves authentication status, customer identity, and AC3 screen context so the receiving agent has full background without re-verification.',
    hint: 'Inline transfers move callers between internal skill queues while preserving account context.',
    referenceSource: 'Amazon Customer Service Operations - Telephony Skill Routing SOP',
    isVerified: true
  },
  {
    id: 'ops-004',
    category: 'transfers_operations',
    topic: '72. Global Transfers',
    difficulty: 'advanced',
    type: 'single_choice',
    question: 'A North American Amazon.com customer service agent receives a call from a customer inquiring about an order placed on Amazon.co.uk (United Kingdom marketplace). What is the mandatory standard operating procedure for handling this cross-marketplace contact?',
    options: [
      { id: 'opt_1', text: 'Hang up immediately because UK orders are not American.', distractorReason: 'Abruptly hanging up on international customers violates global CS standards.' },
      { id: 'opt_2', text: 'Acknowledge the customer respectfully, explain that Amazon operates separate national marketplaces with distinct currency and carrier systems, and initiate an authorized Global Transfer to the Amazon UK Customer Support queue with contact summary notes.', distractorReason: '' },
      { id: 'opt_3', text: 'Attempt to guess UK currency conversion rates and issue a US dollar refund on an unrelated US order.', distractorReason: 'Financial cross-marketplace cross-contamination violates accounting controls.' },
      { id: 'opt_4', text: 'Advise the customer to take a ship across the Atlantic Ocean.', distractorReason: 'Inappropriate distractor.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Each Amazon marketplace (.com, .ca, .co.uk, .de, etc.) maintains separate logistics and billing systems. When a customer reaches the wrong regional queue, associates must explain the separation professionally and execute a Global Transfer to connect them directly to the appropriate regional team.',
    hint: 'Cross-marketplace contacts require an authorized Global Transfer to the regional queue.',
    referenceSource: 'Amazon Global Operations - Marketplace Routing & Transfer Guide',
    isVerified: true
  },
  {
    id: 'ops-005',
    category: 'transfers_operations',
    topic: '74. Correct Team Routing',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'A customer calls general retail customer service stating that their Ring Video Doorbell Pro will not power on and their existing doorbell transformer chime is humming loudly. To which specialized team must the frontline agent route this customer?',
    options: [
      { id: 'opt_1', text: 'Amazon Grocery / Whole Foods team.', distractorReason: 'Grocery has zero hardware troubleshooting capability.' },
      { id: 'opt_2', text: 'Ring Technical Support / Digital & Device Support (D2AS) team with dedicated hardware and electrical troubleshooting tools.', distractorReason: '' },
      { id: 'opt_3', text: 'Amazon Web Services (AWS) Cloud Architecture team.', distractorReason: 'AWS enterprise cloud support does not troubleshoot home consumer doorbells.' },
      { id: 'opt_4', text: 'Amazon Books Editorial team.', distractorReason: 'Irrelevant.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Hardware and smart device issues (Ring, Echo, Kindle, Fire TV) require specialized technical diagnostics, voltage checks, and Wi-Fi band configuration provided exclusively by the Ring Technical Support or Digital & Device Support (D2AS) organizations.',
    hint: 'Smart home hardware defects must be routed to specialized Digital & Device Technical Support.',
    referenceSource: 'Amazon Customer Service Routing Directory - D2AS & Ring Escalations',
    isVerified: true
  },
  {
    id: 'ops-006',
    category: 'transfers_operations',
    topic: '75. Escalation and Handoff Procedures',
    difficulty: 'advanced',
    type: 'single_choice',
    question: 'An irate customer demands: "I refuse to speak with you! Put your manager or supervisor on the line right now!" What is the mandatory Amazon de-escalation procedure before executing a supervisor transfer?',
    options: [
      { id: 'opt_1', text: 'Instantly transfer the call to the supervisor queue on the first word without responding.', distractorReason: 'Frontline agents must attempt at least one de-escalation and take personal ownership first.' },
      { id: 'opt_2', text: 'Use ACA (Acknowledge the frustration, express Concern, give Assurance of personal ownership), politely inform the customer that you have full authority to assist, and ask what specific issue needs resolving; if the customer persists after two de-escalation attempts, initiate a warm transfer to a Team Lead / Supervisor.', distractorReason: '' },
      { id: 'opt_3', text: 'Argue with the customer and tell them supervisors do not exist.', distractorReason: 'Unprofessional and dishonest.' },
      { id: 'opt_4', text: 'Place the customer on mute indefinitely until they disconnect.', distractorReason: 'Dead air failure.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Frontline representatives are trained to take personal ownership: deliver an ACA empathy statement, explain that they have access to the same tools and policies as supervisors, and attempt to diagnose the issue. If the customer insists twice, initiate a warm handoff to Leadership.',
    hint: 'Attempt professional de-escalation with ACA first; warm transfer if the customer persists.',
    referenceSource: 'Amazon NA Voice QA Standards - Supervisor Escalation Protocol',
    isVerified: true
  },
  {
    id: 'ops-007',
    category: 'transfers_operations',
    topic: '76. Knowledge Base / SOP Navigation',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'When searching internal knowledge bases (CSC / Heartbeat) in AC3 for policy updates, what is the best practice for ensuring you are following the current standard operating procedure?',
    options: [
      { id: 'opt_1', text: 'Rely on handwritten personal notes written 6 months ago during new-hire training.', distractorReason: 'Policies frequently change; relying on stale notes causes compliance failures.' },
      { id: 'opt_2', text: 'Search using exact policy keywords (e.g. "DNR Buffer", "Returnless Refund"), verify the document version and "Last Updated" timestamp, and follow the active workflow decision tree embedded in AC3.', distractorReason: '' },
      { id: 'opt_3', text: 'Pick whichever policy sounds easiest and shortest.', distractorReason: 'Compliance requires adhering to the specific applicable SOP.' },
      { id: 'opt_4', text: 'Ignore internal tools and search public Google results.', distractorReason: 'Public search does not contain internal operational guidelines.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Amazon standard operating procedures are continuously refined. Representatives must search official repositories (CSC/Heartbeat) using precise keywords, check the active effective date, and follow the decision trees rather than relying on outdated notes or memory.',
    hint: 'Use precise keywords and verify the latest effective date in Heartbeat/CSC.',
    referenceSource: 'Amazon Knowledge Management - SOP Search & Adherence SOP',
    isVerified: true
  },

  // ================= 9. CALL HANDLING AND COMMUNICATION =================
  {
    id: 'cal-001',
    category: 'call_handling',
    topic: '78. Call Opening',
    difficulty: 'beginner',
    type: 'single_choice',
    question: 'What is the correct chronological sequence of the Amazon NA Voice Standard Call Flow?',
    options: [
      { id: 'opt_1', text: '1. Greeting → 2. Verification → 3. ACA (Acknowledge, Concern, Assurance) → 4. Probing & Research → 5. Resolution → 6. Confirm Resolution → 7. Further Assistance → 8. Power Closing', distractorReason: '' },
      { id: 'opt_2', text: '1. Resolution → 2. Greeting → 3. Verification → 4. Closing', distractorReason: 'Cannot provide resolution before greeting or account verification.' },
      { id: 'opt_3', text: '1. Greeting → 2. Place on Hold for 15 minutes → 3. Hang up', distractorReason: 'Unacceptable call handling.' },
      { id: 'opt_4', text: '1. Ask for Credit Card CVV → 2. Resolution → 3. Greeting', distractorReason: 'Requesting CVV violates PCI-DSS compliance and call structure.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'The 8/9-stage call flow is the bedrock of Amazon voice support: Professional Greeting, Customer Verification, ACA Empathy bridge, Probing and Research (with proper Hold etiquette), Delivering Resolution, Confirming Understanding, Offering further assistance, and the Power Closing.',
    hint: 'Greeting precedes verification, empathy comes before research, and power closing completes the call.',
    referenceSource: 'Amazon CS Call Flow Guide - Standard 9-Phase Anatomy',
    isVerified: true
  },
  {
    id: 'cal-002',
    category: 'call_handling',
    topic: '82. Putting the Customer on Hold',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'When placing a North American caller on hold to investigate tracking or consult internal SOPs, what are the mandatory hold rules an agent must follow?',
    options: [
      { id: 'opt_1', text: 'Never ask for permission; simply mute your headset and stay silent for 10 minutes.', distractorReason: 'Dead air creates customer frustration and violates QA metrics.' },
      { id: 'opt_2', text: 'Always state the reason for the hold, ask for the customer’s permission, keep the hold duration to a maximum of 1 to 2 minutes, and thank the customer by name upon returning.', distractorReason: '' },
      { id: 'opt_3', text: 'Hold is only permitted if the caller is abusive.', distractorReason: 'Hold is a standard operational research tool for all call types when needed.' },
      { id: 'opt_4', text: 'Maximum hold time is 15 minutes before refreshing.', distractorReason: '15 minutes of uninterrupted hold will trigger an immediate QA failure.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Quality Assurance requires asking permission ("May I place you on a brief 1 to 2 minute hold while I verify this tracking status with our carrier team?"), checking back every 1-2 minutes if research takes longer, and thanking the caller by name upon returning.',
    hint: 'Hold duration should never exceed 1-2 minutes without checking back with the customer.',
    referenceSource: 'Amazon NA Voice QA Standards - Hold & Dead Air Policies',
    isVerified: true
  },
  {
    id: 'cal-003',
    category: 'call_handling',
    topic: '86. Empathy and Active Listening',
    difficulty: 'beginner',
    type: 'single_choice',
    question: 'Which of the following phrases is the BEST example of the "ACA" (Acknowledge, Concern, Assurance) technique for a customer who missed a delivery for a birthday gift?',
    options: [
      { id: 'opt_1', text: '"It\'s not Amazon\'s fault that UPS is late."', distractorReason: 'Blaming third parties destroys trust and lacks empathy.' },
      { id: 'opt_2', text: '"I understand you haven\'t received your gift today (Acknowledge). I know how disappointing this is especially for an important birthday (Concern). Rest assured, I am taking personal ownership right now to find your package and get this sorted out for you (Assurance)."', distractorReason: '' },
      { id: 'opt_3', text: '"Please hold."', distractorReason: 'Dismissive without any empathy.' },
      { id: 'opt_4', text: '"You should have ordered it a week earlier if it was that important."', distractorReason: 'Rude and unprofessional.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'ACA stands for Acknowledge (restate the fact), Concern (express genuine emotional understanding of the impact), and Assurance (promise ownership of the resolution without overpromising policy violations).',
    hint: 'ACA contains three clear components: acknowledging the issue, showing empathy for the situation, and assuring resolution.',
    referenceSource: 'Amazon Customer Service Excellence - ACA Methodology',
    isVerified: true
  },
  {
    id: 'cal-004',
    category: 'call_handling',
    topic: '87. Professional Communication',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'Which communication practice is strictly discouraged when speaking with North American customers during a voice support interaction?',
    options: [
      { id: 'opt_1', text: 'Using clear, conversational English without slang.', distractorReason: 'Professional conversational English is expected.' },
      { id: 'opt_2', text: 'Using internal contact center jargon and acronyms such as "I am checking your AC3 CRM tool to verify if your CSC SOP allows an MFN concession."', distractorReason: '' },
      { id: 'opt_3', text: 'Addressing the customer respectfully by name.', distractorReason: 'Addressing customers by name builds rapport.' },
      { id: 'opt_4', text: 'Expressing genuine gratitude for their membership.', distractorReason: 'Expressing gratitude is standard closing practice.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Associates must avoid internal company jargon, technical acronyms (AC3, CSC, SOP, FCR, AHT, CRM), and robotic corporate phrases. Customers should experience clear, human, empathetic explanations of policies in plain language.',
    hint: 'Never use internal acronyms (AC3, CSC, SOP, MFN) with customers.',
    referenceSource: 'Amazon Voice Process Communication Standards',
    isVerified: true
  },
  {
    id: 'cal-005',
    category: 'call_handling',
    topic: '79. Acknowledging the Customer',
    difficulty: 'beginner',
    type: 'single_choice',
    question: 'A customer explains an emotionally stressful situation involving a lost medical supply package. The representative remains completely silent on the line for 7 seconds while typing in AC3. What is this silence called and how does QA score it?',
    options: [
      { id: 'opt_1', text: 'Active Listening; scored as 100% compliant.', distractorReason: 'Silence without verbal acknowledgment is Dead Air, not active listening.' },
      { id: 'opt_2', text: 'Dead Air / Failure to Acknowledge; scored as a communication defect because agents must provide an immediate verbal acknowledgment within 1 to 2 seconds to validate the customer\'s message.', distractorReason: '' },
      { id: 'opt_3', text: 'Mandatory thinking pause.', distractorReason: 'Typing without verbal signposting is a dead air infraction.' },
      { id: 'opt_4', text: 'A technical telephony failure.', distractorReason: 'The representative deliberately chose not to speak.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Dead Air (unannounced silence exceeding 2-3 seconds) makes callers feel ignored or disconnected. Associates must immediately acknowledge the customer ("I hear you, Mrs. Smith, and I am right here with you...") before typing or researching.',
    hint: 'Acknowledge the customer immediately within 1-2 seconds to eliminate dead air.',
    referenceSource: 'Amazon NA Voice QA Standards - Dead Air & Verbal Nods',
    isVerified: true
  },
  {
    id: 'cal-006',
    category: 'call_handling',
    topic: '80. Paraphrasing the Customer\'s Concern',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'A customer speaks rapidly for two minutes describing how their order was marked delivered, but their apartment security guard says no delivery driver arrived today. Which statement represents exemplary Paraphrasing?',
    options: [
      { id: 'opt_1', text: '"Okay, so your package is gone. Hold on."', distractorReason: 'Blunt, lacks empathy and comprehensive clarification.' },
      { id: 'opt_2', text: '"Just to make sure I have every detail right: your package is marked as delivered today, but your apartment building security has no record of the driver dropping it off, and you have not received it yet. Is that correct?"', distractorReason: '' },
      { id: 'opt_3', text: '"Why didn\'t you ask the driver yourself?"', distractorReason: 'Combative and accusatory.' },
      { id: 'opt_4', text: '"Repeat everything you just said slower."', distractorReason: 'Rude and unprofessional.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Paraphrasing synthesizes the customer\'s statements in the representative\'s own words, confirming accurate mutual understanding before research begins. It reassures the customer that their concern was heard accurately.',
    hint: 'Paraphrasing reflects the core facts clearly and asks for confirmation ("Is that correct?").',
    referenceSource: 'Amazon Customer Service Communication Excellence - Paraphrasing SOP',
    isVerified: true
  },
  {
    id: 'cal-007',
    category: 'call_handling',
    topic: '81. Probing Questions',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'A customer calls saying: "My delivery is damaged." What is the most effective probing question the representative should ask to determine the correct SOP workflow?',
    options: [
      { id: 'opt_1', text: '"Why did you break it?"', distractorReason: 'Accusing the customer violates core communication standards.' },
      { id: 'opt_2', text: '"Could you share a bit more detail—is the outer cardboard shipping box damaged, or is the actual product inside broken or leaking?"', distractorReason: '' },
      { id: 'opt_3', text: '"Is it blue or red?"', distractorReason: 'Irrelevant to assessing transit damage vs hazard.' },
      { id: 'opt_4', text: '"Can you call back tomorrow?"', distractorReason: 'Deflecting contacts violates FCR.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Effective probing distinguishes whether damage is purely cosmetic to the shipping carton (product intact) versus damage to the merchandise itself (e.g. shattered glass, leaking chemicals). This dictates whether standard return, returnless refund, or replacement applies.',
    hint: 'Probe whether the damage affects the outer shipping carton or the physical merchandise itself.',
    referenceSource: 'Amazon Customer Care - Diagnostic Probing Questioning Guide',
    isVerified: true
  },
  {
    id: 'cal-008',
    category: 'call_handling',
    topic: '83. Providing the Resolution',
    difficulty: 'beginner',
    type: 'single_choice',
    question: 'When presenting a resolution to a customer, what communication style achieves the highest customer confidence and QA scores?',
    options: [
      { id: 'opt_1', text: 'Hesitant and uncertain: "Well, I guess maybe the system might give you a refund if you get lucky, but I\'m not really sure."', distractorReason: 'Weak, uncertain phrasing undermines customer trust in Amazon.' },
      { id: 'opt_2', text: 'Clear, confident, and proactive: "I have processed a full refund of $49.99 back to your original Visa card. You will receive an email confirmation shortly, and the funds will reflect in 3 to 5 business days per banking schedules."', distractorReason: '' },
      { id: 'opt_3', text: 'Aggressive: "I refunded you. Be happy with that."', distractorReason: 'Rude and unprofessional.' },
      { id: 'opt_4', text: 'Overpromising: "I guarantee the CEO will personally deliver a gold watch to your door in 5 minutes."', distractorReason: 'False promises create extreme dissatisfaction.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Delivering resolutions with confidence, clarity, and specific timelines reinforces customer trust. Associates state what has been executed, provide transaction reference expectations, and quote accurate financial timelines.',
    hint: 'State the resolution with confidence, clarity, and exact timelines.',
    referenceSource: 'Amazon Voice Process - Delivering Resolution Confidently',
    isVerified: true
  },
  {
    id: 'cal-009',
    category: 'call_handling',
    topic: '84. Asking Whether Further Assistance Is Needed',
    difficulty: 'beginner',
    type: 'single_choice',
    question: 'Why is asking "Have I resolved everything for you today, or is there anything else I can assist you with?" a mandatory QA step before concluding a call?',
    options: [
      { id: 'opt_1', text: 'It is a filler question designed to inflate Average Handling Time (AHT).', distractorReason: 'It is an essential QA quality parameter, not a time-wasting tactic.' },
      { id: 'opt_2', text: 'It ensures First Contact Resolution (FCR) by confirming no secondary concerns remain unaddressed, preventing repeat contacts and ensuring complete customer closure.', distractorReason: '' },
      { id: 'opt_3', text: 'Agents are required by federal law to ask this.', distractorReason: 'It is an internal Amazon QA excellence standard.' },
      { id: 'opt_4', text: 'To trick the customer into hanging up.', distractorReason: 'Unethical distractor.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Asking if further assistance is needed guarantees that the associate did not overlook any secondary issues (e.g. another pending order or billing question), directly protecting First Contact Resolution (FCR) and customer satisfaction.',
    hint: 'Asking if further help is needed confirms complete issue resolution before closing.',
    referenceSource: 'Amazon Standard Call Flow - Phase 7 Further Assistance SOP',
    isVerified: true
  },
  {
    id: 'cal-010',
    category: 'call_handling',
    topic: '85. Call Closing',
    difficulty: 'beginner',
    type: 'single_choice',
    question: 'What are the mandatory elements of an Amazon "Power Closing" at the end of a voice interaction?',
    options: [
      { id: 'opt_1', text: 'Immediately slamming the phone receiver down before the customer replies.', distractorReason: 'Abrupt disconnection is a severe QA failure.' },
      { id: 'opt_2', text: 'Thanking the customer by name for being a valued Amazon (or Prime) member, wishing them a great day/weekend, and allowing the customer to disconnect the call first.', distractorReason: '' },
      { id: 'opt_3', text: 'Asking the customer to wire $5 as a personal tip.', distractorReason: 'Soliciting tips is grounds for immediate termination.' },
      { id: 'opt_4', text: 'Reading a 15-minute legal disclaimer from memory.', distractorReason: 'Unnecessary and inflates handling time.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'An Amazon Power Closing leaves a lasting positive impression: personalized gratitude (mentioning Prime membership if applicable), warm professional closing sentiments, and following customer-first etiquette by allowing the customer to hang up first.',
    hint: 'Thank the customer by name, express appreciation for their membership, and let them hang up first.',
    referenceSource: 'Amazon Standard Call Flow - Phase 8 Power Closing Guidelines',
    isVerified: true
  },
  {
    id: 'cal-011',
    category: 'call_handling',
    topic: '88. Avoiding Assumptions and Never Guessing',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'A customer asks: "Will this computer monitor definitely be back in stock tomorrow at 9:00 AM?" The inventory tool shows "Currently unavailable / Restock date unknown". How must the associate answer?',
    options: [
      { id: 'opt_1', text: 'Guess "Yes, absolutely!" so the customer feels happy right now.', distractorReason: 'Never guess or provide false hope; guessing creates repeat calls and deep dissatisfaction.' },
      { id: 'opt_2', text: 'Be honest and transparent: explain that our fulfillment system does not currently have a confirmed restock date, and guide the customer to click "Email me when available" on the detail page or recommend similar available models.', distractorReason: '' },
      { id: 'opt_3', text: 'Tell the customer that the factory was burned down.', distractorReason: 'Fabricating dramatic falsehoods violates code of conduct.' },
      { id: 'opt_4', text: 'Put the customer on hold for 30 minutes hoping they disconnect.', distractorReason: 'Unacceptable behavior.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Amazon associates operate under the core behavioral rule: "Never Assume, Never Guess". When internal tools do not provide an exact restock date, associates communicate transparently, explain self-service restock notifications, and offer available alternatives.',
    hint: 'Never guess; state verified system facts transparently and offer practical alternatives.',
    referenceSource: 'Amazon Customer Service Excellence - Truthful Communication SOP',
    isVerified: true
  },
  {
    id: 'cal-012',
    category: 'call_handling',
    topic: '89. Explaining Systematic Issues',
    difficulty: 'advanced',
    type: 'single_choice',
    question: 'During a major nationwide AWS cloud event, the "Your Orders" page is temporarily inaccessible to customers and agents alike. Callers are anxious. How should the voice associate explain this systematic issue professionally?',
    options: [
      { id: 'opt_1', text: '"Our IT developers in Seattle crashed everything and they are incompetent."', distractorReason: 'Blaming internal departments destroys company reputation and violates professional decorum.' },
      { id: 'opt_2', text: '"We are currently experiencing a temporary technical glitch across our account systems. Our specialized engineering teams are actively resolving this with top priority. Rest assured your order and payment details remain completely secure, and we expect full access restored shortly."', distractorReason: '' },
      { id: 'opt_3', text: '"Your account was hacked by international cyber terrorists."', distractorReason: 'Panic-inducing fabrication.' },
      { id: 'opt_4', text: '"I cannot talk to you until tomorrow, goodbye."', distractorReason: 'Dismissive customer handling.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'When systemic outages occur, representatives represent Amazon as a unified entity: acknowledge the issue calmly, reassure the customer regarding data/account security, explain that engineering teams are actively resolving it, and provide reasonable follow-up expectations without blaming internal colleagues.',
    hint: 'Acknowledge systemic issues calmly and reassure data security without blaming internal teams.',
    referenceSource: 'Amazon Operations Incident Management - Customer Messaging SOP',
    isVerified: true
  },
  {
    id: 'cal-013',
    category: 'call_handling',
    topic: '90. Customer-Friendly Policy Explanations',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'A customer wants to return an opened bottle of luxury skin serum, which is non-returnable under hazardous/sanitary health regulations. Which phrasing explains this policy in the most customer-friendly manner?',
    options: [
      { id: 'opt_1', text: '"Policy section 4.1 says cosmetics are forbidden. No refund, period."', distractorReason: 'Cold, robotic, and bureaucratic.' },
      { id: 'opt_2', text: '"For your health, hygiene, and safety, we cannot accept physical returns of opened personal care products once delivered; however, because the bottle arrived damaged/defective, I am happy to process a full refund for you today without requiring you to return it."', distractorReason: '' },
      { id: 'opt_3', text: '"I will do it this one time even though you are breaking our laws."', distractorReason: 'Condescending and guilt-tripping.' },
      { id: 'opt_4', text: '"Go sell it to your friends."', distractorReason: 'Rude and dismissive.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Customer-friendly policy delivery emphasizes customer benefit (health, safety, hygiene) rather than rigid legalistic rules, and pairs the explanation with an approved resolution (such as a returnless refund if defective or damaged).',
    hint: 'Explain policies from the perspective of customer safety and pair with an approved resolution.',
    referenceSource: 'Amazon Customer Service - Empathetic Policy Translation SOP',
    isVerified: true
  },

  // ================= 10. ASSESSMENT AND PERFORMANCE PREPARATION =================
  {
    id: 'ast-001',
    category: 'assessment_performance',
    topic: '98. Resolution Accuracy',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'What does "First Contact Resolution" (FCR) mean in Amazon Customer Service performance evaluations?',
    options: [
      { id: 'opt_1', text: 'Ending the call within 60 seconds no matter what the customer asked.', distractorReason: 'Prematurely ending calls damages FCR and triggers repeat contacts.' },
      { id: 'opt_2', text: 'Resolving the customer\'s complete issue accurately during their initial contact, eliminating the need for the customer to call or chat back about the same problem.', distractorReason: '' },
      { id: 'opt_3', text: 'Giving the customer whatever money they request immediately.', distractorReason: 'Concessions must adhere to policy and do not substitute for genuine resolution.' },
      { id: 'opt_4', text: 'Transferring every call to a senior lead.', distractorReason: 'Unnecessary transfers decrease FCR.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'First Contact Resolution (FCR) measures whether a customer\'s issue is resolved thoroughly on the first contact so they do not need to reach out again. High FCR directly elevates Customer Satisfaction (CSAT) and decreases repeat volume.',
    hint: 'FCR means resolving the issue on the very first contact without follow-up.',
    referenceSource: 'Amazon Customer Operations Performance Metrics - FCR Standards',
    isVerified: true
  },
  {
    id: 'ast-002',
    category: 'assessment_performance',
    topic: '93. Essay Writing',
    difficulty: 'advanced',
    type: 'single_choice',
    question: 'When entering contact documentation notes in AC3 after a call has ended (After Call Work / ACW), which of the following represents an exemplary, audit-compliant contact note?',
    options: [
      { id: 'opt_1', text: '"Customer was mad. Refunded $20. Bye."', distractorReason: 'Incomplete, emotional, lacks verification details and policy rationale.' },
      { id: 'opt_2', text: '"Issue: Customer called re DNR for order #114-1234567-8901234 (Coffee maker). Verified: Name & billing address. Action: Tracking shows AMZL scan delivered 2 hrs ago; explained mandatory 24-48h buffer period. Customer checked patio. Advised callback tomorrow if unlocated. FCR achieved."', distractorReason: '' },
      { id: 'opt_3', text: '"No notes needed."', distractorReason: 'Empty notes result in QA audit deductions.' },
      { id: 'opt_4', text: '"The delivery driver stole it. Customer is innocent."', distractorReason: 'Unprofessional subjective accusations.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'High-quality AC3 contact notes follow the standard IVR structure: Issue (reason for contact), Verification (how identity was authenticated), Action/Resolution (exact policy guidance and actions taken), and Next Steps. This ensures seamless continuity if the customer contacts support again.',
    hint: 'Quality contact notes document the issue, verification, policy action, and next steps.',
    referenceSource: 'Amazon Quality Assurance - AC3 Contact Documentation Standards',
    isVerified: true
  },
  {
    id: 'ast-003',
    category: 'assessment_performance',
    topic: '100. Customer Satisfaction and Call Quality',
    difficulty: 'advanced',
    type: 'single_choice',
    question: 'How should an associate balance Average Handling Time (AHT) with Customer Satisfaction (CSAT)?',
    options: [
      { id: 'opt_1', text: 'Prioritize hanging up quickly over answering questions to achieve lowest AHT.', distractorReason: 'Sacrificing customer satisfaction for speed causes repeat calls and low CSAT.' },
      { id: 'opt_2', text: 'Stay on the phone for 45 minutes discussing weather and sports to make the customer happy.', distractorReason: 'Severely inflates handling time and harms customer queue availability.' },
      { id: 'opt_3', text: 'Provide warm, empathetic, and thorough resolution while navigating tools efficiently and minimizing dead air, ensuring FCR without unnecessary conversational detours.', distractorReason: '' },
      { id: 'opt_4', text: 'AHT and CSAT do not matter in call centers.', distractorReason: 'Both are core performance indicators.' }
    ],
    correctAnswerIds: ['opt_3'],
    explanation: 'Top-performing voice associates balance efficiency and empathy: they use active listening, avoid dead air through proper hold protocols, navigate AC3 fluently, and resolve concerns thoroughly on first contact, achieving both high CSAT and optimal AHT.',
    hint: 'Balance empathetic thoroughness with efficient tool navigation to optimize both metrics.',
    referenceSource: 'Amazon Operations Quality & Efficiency Balancing Guide',
    isVerified: true
  },
  {
    id: 'ast-004',
    category: 'assessment_performance',
    topic: '91. MCQs and Knowledge Checks',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'When answering multiple-choice questions (MCQs) during Amazon voice certification and nesting assessments, what critical evaluation technique guarantees selecting the policy-compliant answer?',
    options: [
      { id: 'opt_1', text: 'Select whichever option promises the customer the largest cash gift.', distractorReason: 'Unauthorized concessions violate financial compliance.' },
      { id: 'opt_2', text: 'Analyze each option against official SOP rules: eliminate options that violate SLA timelines (e.g. DNR buffer, 48h seller window), eliminate options disclosing PII, and select the response that couples policy adherence with empathetic customer communication.', distractorReason: '' },
      { id: 'opt_3', text: 'Always select option A regardless of question text.', distractorReason: 'Arbitrary guessing fails assessments.' },
      { id: 'opt_4', text: 'Select options that tell the customer to call back next week.', distractorReason: 'Deflecting contacts harms FCR.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Knowledge check mastery requires systematic deduction: discard options containing policy violations (premature DNR refunds before 24-48h, skipping MFN 48h messaging, asking for full card numbers) and select the choice reflecting verified SOP and empathetic phrasing.',
    hint: 'Eliminate options violating SOP timelines or PII rules, and choose compliant, empathetic solutions.',
    referenceSource: 'Amazon Training & Nesting Assessment Methodology',
    isVerified: true
  },
  {
    id: 'ast-005',
    category: 'assessment_performance',
    topic: '92. Reading Comprehension',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'A voice associate opens an AC3 contact record containing a 500-word previous agent chat transcript. To formulate an accurate resolution within 30 seconds, which key data points must the associate extract first?',
    options: [
      { id: 'opt_1', text: 'The customer\'s astrological zodiac sign and favorite color.', distractorReason: 'Completely irrelevant.' },
      { id: 'opt_2', text: 'The specific Order ID, the Selling/Fulfillment model (Retail, FBA, or MFN), the latest carrier delivery status/timestamp, and any prior commitments or concessions documented by previous agents.', distractorReason: '' },
      { id: 'opt_3', text: 'Only the date the customer first opened their Amazon account.', distractorReason: 'Account creation date does not diagnose current order issues.' },
      { id: 'opt_4', text: 'The agent\'s personal biography.', distractorReason: 'Irrelevant.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Effective contact reading comprehension prioritizes critical operational metadata: Order Number, Fulfillment Channel (governing what CS can do), Carrier Milestone Status, and Prior Agent Notes (to avoid broken promises or conflicting resolutions).',
    hint: 'Prioritize Order ID, fulfillment model (FBA vs MFN), tracking status, and prior agent notes.',
    referenceSource: 'Amazon Customer Operations - AC3 Contact Comprehension Guidelines',
    isVerified: true
  },
  {
    id: 'ast-006',
    category: 'assessment_performance',
    topic: '94. Customer Scenario-Based Questions',
    difficulty: 'advanced',
    type: 'single_choice',
    question: 'Scenario: A customer ordered an artisanal desk from an MFN third-party seller. The desk arrived with a missing drawer. The customer messaged the seller 72 hours ago through Buyer-Seller Messaging, but the seller has completely ignored the message. What is the approved resolution?',
    options: [
      { id: 'opt_1', text: 'Instruct the customer to wait another 30 days for the seller to reply.', distractorReason: 'The seller\'s 48-hour response window has already passed; stalling harms the customer.' },
      { id: 'opt_2', text: 'Because the mandatory 48-hour seller response window has elapsed without resolution, assist the customer in submitting an Amazon A-to-z Guarantee Claim for a full refund under buyer protection.', distractorReason: '' },
      { id: 'opt_3', text: 'Tell the customer to build the wooden drawer themselves.', distractorReason: 'Unacceptable and absurd.' },
      { id: 'opt_4', text: 'Order a replacement desk from Amazon Retail inventory.', distractorReason: 'Amazon Retail does not stock independent MFN merchandise.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'When an MFN seller fails to respond to a defective/damaged order within the required 48-hour SLA, the customer qualifies for an immediate A-to-z Guarantee claim. The customer service representative assists in initiating the claim to protect the buyer.',
    hint: 'After 48 hours without seller response, assist the customer with an A-to-z claim.',
    referenceSource: 'Amazon Marketplace - A-to-z Scenario Resolution SOP',
    isVerified: true
  },
  {
    id: 'ast-007',
    category: 'assessment_performance',
    topic: '95. Mock Voice Calls',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'During a Mock Voice Call evaluation with a QA trainer, what is the target operational handling pace and conversational structure expected of a high-performing associate?',
    options: [
      { id: 'opt_1', text: 'Speak as fast as possible in 45 seconds and hang up without verification.', distractorReason: 'Rushing triggers verification failures and repeat calls.' },
      { id: 'opt_2', text: 'Maintain a steady, professional pace, execute the full 8/9 call stages, actively listen and probe without dead air, navigate AC3 efficiently, and achieve First Contact Resolution within balanced target handling benchmarks (typically 5 to 7 minutes).', distractorReason: '' },
      { id: 'opt_3', text: 'Stay on the phone for 2 hours reading recipes to the caller.', distractorReason: 'Severe handling time deviation.' },
      { id: 'opt_4', text: 'Transfer the mock call to an external phone number.', distractorReason: 'Evasion of evaluation.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Mock voice evaluations assess holistic capability: professional tone, adhering to call flow stages, verifying identity compliantly, minimizing dead air, delivering accurate SOP resolution, and closing warmly within standard handling benchmarks.',
    hint: 'Execute the full call flow structure smoothly within the 5-7 minute benchmark.',
    referenceSource: 'Amazon Voice Training - Mock Call Performance Rubric',
    isVerified: true
  },
  {
    id: 'ast-008',
    category: 'assessment_performance',
    topic: '96. Role-Play Assessments',
    difficulty: 'advanced',
    type: 'single_choice',
    question: 'In a behavioral role-play assessment, the trainer role-plays an aggressive, yelling customer whose package was delayed before a wedding. How must the trainee maintain professionalism and de-escalate the call?',
    options: [
      { id: 'opt_1', text: 'Yell back louder than the customer to establish authority.', distractorReason: 'Matching aggression results in immediate termination.' },
      { id: 'opt_2', text: 'Stay calm, lower your vocal pitch slightly to project stability, allow the customer to vent without interruption, deliver an authentic ACA empathy statement, and pivot the conversation to concrete solutions.', distractorReason: '' },
      { id: 'opt_3', text: 'Laugh at the customer\'s misfortune.', distractorReason: 'Unprofessional behavior.' },
      { id: 'opt_4', text: 'Disconnect the call immediately without speaking.', distractorReason: 'Unlawful disconnection.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Handling escalated role-plays requires emotional intelligence: lowering voice tone, active listening through venting, acknowledging the emotional gravity of the event (ACA), and steering the caller steadily toward actionable resolutions.',
    hint: 'Lower your vocal pitch, validate emotions with ACA, and steer calmly toward actionable solutions.',
    referenceSource: 'Amazon Behavioral Excellence - De-Escalation Role-Play Standards',
    isVerified: true
  },
  {
    id: 'ast-009',
    category: 'assessment_performance',
    topic: '97. Policy-Based Decision Making',
    difficulty: 'advanced',
    type: 'single_choice',
    question: 'An impatient customer threatens to leave a 1-star survey unless the associate immediately deposits $200 in promotional credit into their account for a 1-day delivery delay on a $12 paperback book. How does a policy-aligned associate decide?',
    options: [
      { id: 'opt_1', text: 'Issue the $200 credit to ensure a 5-star survey and save personal metrics.', distractorReason: 'Extortion compliance and unauthorized concession abuse.' },
      { id: 'opt_2', text: 'Politely and firmly decline the unauthorized $200 concession; explain Amazon\'s standard late delivery policy (refund of paid expedited shipping or standard eligible courtesy credit within associate limits), and document the interaction accurately in AC3 contact notes.', distractorReason: '' },
      { id: 'opt_3', text: 'Close the customer\'s Amazon account in anger.', distractorReason: 'Retaliatory actions violate company code.' },
      { id: 'opt_4', text: 'Tell the customer that Amazon went bankrupt.', distractorReason: 'Deceptive falsehood.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Associates must never yield to metric coercion or issue policy-violating concessions to avoid poor surveys. Standard operating procedure must be upheld with courtesy, offering legitimate remedies (shipping refund/standard courtesy credit) while maintaining business integrity.',
    hint: 'Never issue unauthorized concessions to avoid bad surveys; adhere to authorized policy limits.',
    referenceSource: 'Amazon Customer Operations - Concession Integrity & Survey Coercion SOP',
    isVerified: true
  },
  {
    id: 'ast-010',
    category: 'assessment_performance',
    topic: '99. Transfer Decisions',
    difficulty: 'advanced',
    type: 'single_choice',
    question: 'Which of the following scenarios justifies transferring a voice customer, rather than resolving the contact yourself as First Contact Resolution (FCR)?',
    options: [
      { id: 'opt_1', text: 'The customer has a simple return request for an FBA shoe order.', distractorReason: 'Tier-1 CS has full tools and authority to process FBA returns; transferring fails FCR.' },
      { id: 'opt_2', text: 'The customer is inquiring about account lockouts and suspected unauthorized credential changes handled exclusively by Customer Account Protection (CAP / Buyer Fraud).', distractorReason: '' },
      { id: 'opt_3', text: 'The customer asks what the weather is like in Seattle.', distractorReason: 'Irrelevant chit-chat does not warrant transfers.' },
      { id: 'opt_4', text: 'The agent is feeling tired and wants to take a break.', distractorReason: 'Transfer avoidance violates operations policy.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Transfers are strictly reserved for situations where specialized organizations have exclusive system privileges (such as CAP/Fraud investigating compromised accounts or Ring Tier-2 hardware diagnostics). Simple returns, tracking checks, and general retail inquiries must be resolved directly to preserve FCR.',
    hint: 'Transfers are only justified when specialized system permissions (e.g. CAP/Fraud) are required.',
    referenceSource: 'Amazon Customer Operations - Transfer Avoidance & FCR Guidelines',
    isVerified: true
  }
]


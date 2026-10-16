import { VoiceCategoryKey, VoiceCategoryMeta, VoiceQuizQuestion } from '../types/amazonVoice'

export const VOICE_CATEGORIES: VoiceCategoryMeta[] = [
  // ================= 10 OFFICIAL MASTER SYLLABUS MODULES =================
  {
    key: 'security_fundamentals',
    title: '1. Security and Order Fundamentals',
    shortTitle: 'Security & Fundamentals',
    badge: 'Module 1',
    description: 'Security Authentication, Social Engineering, Data Handling, PII Masking, Order Life Cycle, Unauthorized Orders, and Selling/Fulfillment Models (FBA, Retail, MFN).',
    topics: [
      '1. Security Authentication',
      '2. Social Engineering',
      '3. Data Handling',
      '4. PII (Personally Identifiable Information)',
      '5. Order Life Cycle',
      '6. Unauthorized Orders and Security Concerns',
      '7. Types of Items and Selling/Fulfillment Models (Sold by Seller Fulfilled by Amazon, Sold & Fulfilled by Amazon, MFN)'
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
    description: 'Problems with an Order (PWAO), Where Is My Stuff (WIS), Delivery Status Messages, Delivery Methods, Shipping Speeds, Late Delivery, DNR (24-48h buffer), Missing Items, Switcheroo, Damaged/Defective, EDD/RDD, and Cancellations.',
    topics: [
      '8. Problems with an Order',
      '9. Where Is My Stuff? (WIS)',
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
    description: 'Return Methods (UPS, Kohl’s), Return Policies, 30-Day Windows, Return Eligibility, Refund Policies, Refund Methods, SLA Timelines (GC 2-3h, CC 3-5d, Debit up to 10d), Refund Not Received, Returnless Refunds, and FBA vs MFN handling.',
    topics: [
      '25. Return Methods',
      '26. Return Policies',
      '27. Return Windows',
      '28. Return Eligibility',
      '29. Refund Policies',
      '30. Refund Methods',
      '31. Refund Processing Timelines',
      '32. Refund Not Received',
      '33. Refund Status and Tracking',
      '34. Replacement Policies',
      '35. Replacement Timelines',
      '36. Returnless Refunds, Where Eligible',
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
    description: 'Payment Methods & Types, Payment Policies, Authorization Holds vs Declined Payments, Payment Resolutions, Concession Eligibility & Authorization, and Partial Refunds / Approved Adjustments.',
    topics: [
      '39. Payment Methods and Types',
      '40. Payment Policies',
      '41. Payment Authorization and Declined Payments',
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
    description: 'Amazon FBA (Fulfillment by Amazon), MFN (Merchant Fulfillment Network), MFN Prime (SFP), Amazon Retail, Marketplace Sellers, MPM (Marketplace Merchant), Seller-Fulfilled vs Amazon-Fulfilled, and A-to-z Guarantee Claims.',
    topics: [
      '46. Amazon FBA (Fulfillment by Amazon)',
      '47. MFN (Merchant Fulfillment Network)',
      '48. MFN Prime',
      '49. Amazon Retail',
      '50. Marketplace Sellers',
      '51. MPM (Marketplace Merchant)',
      '52. Seller-Fulfilled vs. Amazon-Fulfilled Orders',
      '53. A-to-z Guarantee Claims'
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
    description: 'Amazon Prime Tiers & Benefits, Prime Billing & $139 Fee, Cancellation & Refund Eligibility, Amazon Subscribe & Save (S&S), 5% vs 15% Tier Discounts, Recurring Deliveries, and Skipping/Modifying/Cancelling.',
    topics: [
      '54. Amazon Prime',
      '55. Types of Amazon Prime Subscriptions',
      '56. Prime Membership Benefits',
      '57. Prime Billing and Charges',
      '58. Prime Membership Cancellation',
      '59. Prime Refund Eligibility',
      '60. Amazon Subscribe & Save',
      '61. Subscribe & Save Discounts',
      '62. Recurring Deliveries',
      '63. Skipping, Modifying, and Cancelling Subscriptions'
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


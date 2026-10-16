import { VoiceCategoryKey, VoiceCategoryMeta, VoiceQuizQuestion } from '../types/amazonVoice'

export const VOICE_CATEGORIES: VoiceCategoryMeta[] = [
  {
    key: 'order_issues',
    title: 'Order-Related Issues (DNR & WMS)',
    shortTitle: 'Order Issues',
    badge: 'Category A',
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
    badge: 'Category B',
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
    key: 'returns_refunds',
    title: 'Returns, Refunds & Replacements',
    shortTitle: 'Returns & Refunds',
    badge: 'Category C',
    description: 'SOP return windows, drop-off carriers (UPS, Kohl’s), advanced replacements, and mandatory financial refund timelines.',
    topics: ['Standard 30-Day Return Windows', 'Gift Card Refund (2-3 hrs)', 'Credit Card (3-5 business days)', 'Debit/Bank (up to 10 days)', 'Partial Refunds & Restocking'],
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
    key: 'fulfillment_seller',
    title: 'Fulfilment & Seller Operations (FBA vs MFN)',
    shortTitle: 'Fulfillment & Seller',
    badge: 'Category D',
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
    badge: 'Category E',
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
    badge: 'Category F',
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
    badge: 'Category G',
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
    badge: 'Category H',
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
    badge: 'Category I',
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
  // --- Category A: Order Issues (DNR & WMS) ---
  {
    id: 'ord-001',
    category: 'order_issues',
    topic: 'Delivered Not Received (DNR)',
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
    category: 'order_issues',
    topic: 'Where Is My Stuff (WIS/WMS)',
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
    category: 'order_issues',
    topic: 'Switcheroo & Item Substitution',
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

  // --- Category B: Product Issues ---
  {
    id: 'prd-001',
    category: 'product_issues',
    topic: 'Damaged Goods',
    difficulty: 'beginner',
    type: 'single_choice',
    question: 'A customer receives a ceramic dining set that arrived shattered inside the package. The item was shipped and sold by Amazon.com. What is the primary standard resolution?',
    options: [
      { id: 'opt_1', text: 'Require the customer to assemble the shards and return them via standard mail before any replacement is shipped.', distractorReason: 'Dangerous or broken glass/ceramics are often classified as non-returnable hazardous items to prevent injury.' },
      { id: 'opt_2', text: 'Acknowledge the situation with empathy (ACA), verify product details in the order, and initiate an advanced replacement or returnless refund if categorized as unsafe to ship back per SOP.', distractorReason: '' },
      { id: 'opt_3', text: 'Instruct the customer to contact the ceramic manufacturer directly for warranty claims.', distractorReason: 'Items shipped and sold by Amazon damaged on arrival are Amazon CS responsibility within the 30-day window.' },
      { id: 'opt_4', text: 'Transfer the customer to the freight team without checking order status.', distractorReason: 'Standard parcel orders are fully handled within primary customer service without inappropriate transfers.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Damaged on arrival (DOA) items are resolved with an immediate ACA acknowledgment. For safety reasons, hazardous broken glass or shattered ceramics may have the return waived under system-approved guidelines, or an advanced replacement is generated.',
    hint: 'Safety and customer convenience take priority when handling broken sharp objects.',
    referenceSource: 'Amazon CS Damaged Merchandise SOP',
    isVerified: true
  },
  {
    id: 'prd-002',
    category: 'product_issues',
    topic: 'Missing Parts',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'A customer purchased a flat-pack computer desk fulfilled by Amazon, but screws and assembly hardware were missing from the box. What is the most compliant initial troubleshooting step?',
    options: [
      { id: 'opt_1', text: 'Inform the customer that Amazon never provides hardware and they must purchase bolts at a local hardware store out of pocket.', distractorReason: 'Unprofessional and fails to resolve the missing component issue.' },
      { id: 'opt_2', text: 'Check if the manufacturer provides direct parts fulfillment; if not or if the customer prefers, offer a free replacement order or a full return for a refund.', distractorReason: '' },
      { id: 'opt_3', text: 'Close the account for reporting partial items.', distractorReason: 'Reporting missing parts is a legitimate buyer inquiry.' },
      { id: 'opt_4', text: 'Demand that the customer wait 30 days for Amazon to manufacture the screws.', distractorReason: 'Amazon does not manufacture component screws.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'When items have missing pieces, the representative offers manufacturer direct part support (if linked in the catalog) or offers the standard Amazon solution: replacement unit or full return/refund within the 30-day window.',
    hint: 'Offer customer-centric options between replacement, return, or manufacturer spare parts.',
    referenceSource: 'Problem with an Order (PWAO) Guidelines',
    isVerified: true
  },

  // --- Category C: Returns, Refunds & Replacements ---
  {
    id: 'ret-001',
    category: 'returns_refunds',
    topic: 'Refund Timelines',
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
    topic: 'Standard Return Windows',
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
    topic: 'Drop-off & Return Shipping',
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

  // --- Category D: Fulfilment & Seller Operations ---
  {
    id: 'ful-001',
    category: 'fulfillment_seller',
    topic: 'FBA vs MFN Responsibilities',
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
    category: 'fulfillment_seller',
    topic: 'A-to-z Guarantee',
    difficulty: 'advanced',
    type: 'single_choice',
    question: 'What is the primary purpose of the Amazon A-to-z Guarantee?',
    options: [
      { id: 'opt_1', text: 'To protect buyers when purchasing items sold and fulfilled by third-party sellers (MFN) regarding timely delivery and condition of items.', distractorReason: '' },
      { id: 'opt_2', text: 'To guarantee that every product bought on Amazon will last 10 years without breaking.', distractorReason: 'A-to-z Guarantee is a purchase protection mechanism for marketplace fulfillment, not an indefinite warranty.' },
      { id: 'opt_3', text: 'To grant free Prime memberships to unhappy customers.', distractorReason: 'Unrelated program.' },
      { id: 'opt_4', text: 'To allow sellers to sue customers who leave 1-star reviews.', distractorReason: 'Completely false.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'The Amazon A-to-z Guarantee covers situations where a third-party seller fails to deliver on time, delivers defective/damaged items, or fails to refund an eligible return after the mandatory 48-hour contact window.',
    hint: 'It is the safety net for marketplace third-party purchases.',
    referenceSource: 'Amazon A-to-z Guarantee Guidelines',
    isVerified: true
  },

  // --- Category E: Amazon Prime ---
  {
    id: 'prm-001',
    category: 'amazon_prime',
    topic: 'Prime Cancellation & Refund Eligibility',
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
    category: 'amazon_prime',
    topic: 'Prime Delivery Benefits',
    difficulty: 'beginner',
    type: 'single_choice',
    question: 'Does an Amazon Prime membership guarantee same-day or two-day delivery on EVERY single item sold on Amazon.com?',
    options: [
      { id: 'opt_1', text: 'Yes, every product on the website qualifies for free 1-hour delivery.', distractorReason: 'Delivery speed is subject to inventory placement, fulfillment type, and carrier logistics.' },
      { id: 'opt_2', text: 'No; Prime shipping benefits apply exclusively to eligible items marked with the Prime logo, subject to destination zip code and inventory availability.', distractorReason: '' },
      { id: 'opt_3', text: 'Only if the order exceeds $500.', distractorReason: 'Prime delivery does not impose a $500 threshold.' },
      { id: 'opt_4', text: 'Only for digital Kindle books.', distractorReason: 'Prime covers physical merchandise fulfilled by Amazon and Seller-Fulfilled Prime.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Prime delivery benefits apply only to items displaying the Prime badge and are influenced by inventory location, carrier operational constraints, and geographic region.',
    hint: 'Look for the Prime checkmark badge on product detail pages.',
    referenceSource: 'Amazon Prime Shipping Benefits Overview',
    isVerified: true
  },

  // --- Category F: Ring Device Troubleshooting ---
  {
    id: 'rng-001',
    category: 'ring_troubleshooting',
    topic: 'Wi-Fi Connectivity & Setup',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'A customer is attempting to connect their new Ring Video Doorbell (2nd Gen) to their home Wi-Fi network, but setup consistently fails at the network join step. What is the most common technical reason and troubleshooting advice?',
    options: [
      { id: 'opt_1', text: 'Ring doorbells only work on 5GHz networks; instruct the customer to disable 2.4GHz entirely.', distractorReason: 'Most basic Ring devices require 2.4GHz b/g/n Wi-Fi and do not support 5GHz bands.' },
      { id: 'opt_2', text: 'Most Ring devices operate on the 2.4GHz Wi-Fi band; verify that the router broadcasts a distinct 2.4GHz SSID, password is typed correctly without special character corruption, and Wi-Fi signal (RSSI) at the door is adequate.', distractorReason: '' },
      { id: 'opt_3', text: 'Tell the customer that Ring doorbells require satellite internet to function.', distractorReason: 'False; standard residential broadband is required.' },
      { id: 'opt_4', text: 'Advise them to hit the doorbell with a hammer to reset the internal sensor.', distractorReason: 'Dangerous and destructive.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'The majority of Ring entry-level devices rely on standard 2.4GHz b/g/n networks. Dual-band mesh routers frequently attempt to steer the device to 5GHz, causing setup failure. Separating SSIDs, checking Wi-Fi passwords, and verifying RSSI signal strength are primary SOP steps.',
    hint: 'Ring devices predominantly require 2.4GHz frequency bands.',
    referenceSource: 'Ring Device Diagnostic Workflow - Wi-Fi Setup',
    isVerified: true
  },
  {
    id: 'rng-002',
    category: 'ring_troubleshooting',
    topic: 'Offline Device Reset',
    difficulty: 'advanced',
    type: 'single_choice',
    question: 'A customer’s Ring Floodlight Cam has been "Offline" for 2 days. Power to the breaker is on. What is the proper sequence to perform a hard factory reset on the device?',
    options: [
      { id: 'opt_1', text: 'Press and hold the setup button on the device firmly for 20 seconds, release it, allow the device to reboot into setup mode (light will flash), then tap "Reconnect to Wi-Fi" in the Ring app.', distractorReason: '' },
      { id: 'opt_2', text: 'Delete the customer’s entire Amazon account.', distractorReason: 'Deleting account destroys customer data and does not reset hardware.' },
      { id: 'opt_3', text: 'Turn off the water supply in their bathroom.', distractorReason: 'Nonsensical distractor.' },
      { id: 'opt_4', text: 'Send a replacement immediately without conducting any power cycling or reset.', distractorReason: 'Violates Ring first-contact troubleshooting standards.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'A Ring device hard reset requires holding the physical setup button for 20-30 seconds until the status indicator flashes indicating factory reset, followed by re-entering the setup flow in the Ring app.',
    hint: 'Factory resetting Ring hardware involves holding the setup button for 20-30 seconds.',
    referenceSource: 'Ring Hardware Troubleshooting Guide',
    isVerified: true
  },

  // --- Category G: Call Structure & Communication ---
  {
    id: 'cal-001',
    category: 'call_structure',
    topic: 'Standard Call Flow Sequence',
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
    category: 'call_structure',
    topic: 'Hold Etiquette & Timelines',
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
    category: 'call_structure',
    topic: 'ACA (Acknowledge, Concern, Assurance)',
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

  // --- Category H: Customer Service Scenarios & De-escalation ---
  {
    id: 'scn-001',
    category: 'customer_scenarios',
    topic: 'Demanding Immediate Refund (Pre-Buffer)',
    difficulty: 'advanced',
    type: 'scenario',
    question: 'A furious customer shouts: "My tracking says delivered an hour ago! I checked my porch and it\'s empty! You people stole my money! I want my $400 refunded RIGHT NOW or I am cancelling my Prime and reporting you to the Better Business Bureau!" How must the agent handle this high-stress interaction?',
    options: [
      { id: 'opt_1', text: 'Argue back and tell the customer they are lying because AMZL scanned it as delivered.', distractorReason: 'Escalates confrontation and guarantees a DSAT.' },
      { id: 'opt_2', text: 'Issue the $400 refund immediately to make the customer stop shouting.', distractorReason: 'Violates SOP; concessions cannot be issued before the 24-48 hr buffer expires without system approval.' },
      { id: 'opt_3', text: 'Remain calm, apply active de-escalation with ACA, explain the carrier pre-scan behavior politely, ask them to check specific secure locations, explain why the 24-36 hour buffer protects their delivery, and assure them you will follow up or assist if it remains missing.', distractorReason: '' },
      { id: 'opt_4', text: 'Hang up the call immediately without saying anything.', distractorReason: 'Abrupt call disconnection is a severe zero-tolerance conduct breach.' }
    ],
    correctAnswerIds: ['opt_3'],
    explanation: 'When facing angry callers demanding immediate concessions before buffer expiration, agents must stay calm, de-escalate with tone control, validate their anger without accepting fault, explain carrier scanner habits empathetically, and uphold policy firmly and politely.',
    hint: 'Never capitulate to non-compliant demands under pressure, but never argue back.',
    referenceSource: 'De-escalation & Concession Integrity SOP',
    isVerified: true
  },
  {
    id: 'scn-002',
    category: 'customer_scenarios',
    topic: 'Supervisor Escalation Triage',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'A customer demands: "Give me your manager right now! I am tired of talking to you!" What is the standard protocol for handling supervisor requests?',
    options: [
      { id: 'opt_1', text: 'Transfer immediately to the highest level executive queue without speaking.', distractorReason: 'Cold blind transfers without triage violate call-handling SLAs.' },
      { id: 'opt_2', text: 'Attempt a respectful First Contact Resolution (FCR) de-escalation first: acknowledge their frustration, clarify that you have the same tools and authority as a supervisor, and ask for one opportunity to solve their concern. If they still insist, arrange an appropriate supervisor transfer or callback per site policy.', distractorReason: '' },
      { id: 'opt_3', text: 'Tell the customer that supervisors do not exist at Amazon.', distractorReason: 'False and dishonest.' },
      { id: 'opt_4', text: 'Put the customer on mute until they hang up out of exhaustion.', distractorReason: 'Call avoidance tactic that triggers disciplinary review.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'SOP requires agents to attempt de-escalation by asserting their authority to help ("I completely understand your frustration. As a customer care specialist, I have access to the exact same resources and tools as our leadership team. Please allow me the opportunity to resolve this for you directly"). If the customer still refuses, proceed with standard warm escalation.',
    hint: 'Agents should attempt one polite FCR de-escalation before transferring to leadership.',
    referenceSource: 'Amazon CS Escalation Management & Supervisor Triage',
    isVerified: true
  },

  // --- Category I: Process Knowledge & KPIs ---
  {
    id: 'prc-001',
    category: 'process_knowledge',
    topic: 'First Contact Resolution (FCR)',
    difficulty: 'beginner',
    type: 'single_choice',
    question: 'What does the Key Performance Indicator (KPI) "FCR" stand for, and why is it critical in Amazon Customer Support?',
    options: [
      { id: 'opt_1', text: 'Fast Call Return; measuring how quickly an agent can hang up.', distractorReason: 'Incorrect metric definition.' },
      { id: 'opt_2', text: 'First Contact Resolution; resolving the customer’s entire inquiry during the first interaction so they do not need to call or chat again.', distractorReason: '' },
      { id: 'opt_3', text: 'Federal Concession Rate; measuring legal tax compliance.', distractorReason: 'Fabricated term.' },
      { id: 'opt_4', text: 'Frequent Customer Reward; a bonus system for heavy spenders.', distractorReason: 'Not a CS performance metric.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'FCR (First Contact Resolution) measures the percentage of customer contacts resolved during the very first encounter. High FCR drives high CSAT (Customer Satisfaction) and prevents repeat contacts, reducing overall contact center load.',
    hint: 'Resolving issues in a single interaction without follow-up calls.',
    referenceSource: 'Amazon Customer Service Operations Metrics Guide - FCR',
    isVerified: true
  },
  {
    id: 'prc-002',
    category: 'process_knowledge',
    topic: 'Average Handling Time (AHT) Balancing',
    difficulty: 'intermediate',
    type: 'single_choice',
    question: 'Average Handling Time (AHT) is a core efficiency metric. Which components comprise the total AHT calculation?',
    options: [
      { id: 'opt_1', text: 'Total Talk Time + Total Hold Time + After Call Work (ACW / wrap-up time).', distractorReason: '' },
      { id: 'opt_2', text: 'Only the time the customer spends listening to hold music.', distractorReason: 'Hold time is only one element of AHT.' },
      { id: 'opt_3', text: 'The time it takes for shipping trucks to drive to the customer’s house.', distractorReason: 'Logistics delivery transit time is not CS AHT.' },
      { id: 'opt_4', text: 'The agent’s lunch break duration.', distractorReason: 'Irrelevant.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'AHT = Talk Time + Hold Time + After Call Work (ACW). Agents must balance empathetic, thorough resolution with efficient navigation of internal SOPs to avoid needlessly inflated handling times.',
    hint: 'Talk time, hold time, and post-call wrap-up combined.',
    referenceSource: 'Amazon Voice Performance Metrics - AHT Breakdown',
    isVerified: true
  },
  {
    id: 'prc-003',
    category: 'process_knowledge',
    topic: 'Security & PII Zero-Tolerance',
    difficulty: 'advanced',
    type: 'single_choice',
    question: 'A caller asks the agent: "Can you confirm the full 16-digit credit card number and expiration date on my account so I know which card was billed?" What is the strict security protocol?',
    options: [
      { id: 'opt_1', text: 'Read out all 16 digits and CVV aloud if the caller sounds honest.', distractorReason: 'Catastrophic PCI-DSS security violation that causes immediate termination.' },
      { id: 'opt_2', text: 'Explain politely that Amazon systems mask sensitive payment data for customer privacy and security; agents can only see and confirm the last 2, 3, or 4 digits and card brand (e.g. Visa ending in 1234).', distractorReason: '' },
      { id: 'opt_3', text: 'Send the customer a text message with their full bank routing number.', distractorReason: 'Severe security breach.' },
      { id: 'opt_4', text: 'Guess the numbers randomly.', distractorReason: 'Unacceptable.' }
    ],
    correctAnswerIds: ['opt_2'],
    explanation: 'Amazon upholds strict PCI-DSS and PII compliance. Internal tools mask full card data. Representatives can never view or disclose full card numbers or sensitive credentials, only the last digits to help the customer recognize their payment method.',
    hint: 'PCI compliance strictly forbids seeing or disclosing full 16-digit credit card numbers.',
    referenceSource: 'Amazon Information Security & Customer Privacy Standards',
    isVerified: true
  }
]

export interface BeginnerVoiceTopic {
  id: string
  number: number
  title: string
  shortTitle: string
  badge: string
  iconName: string
  color: {
    accent: string
    border: string
    bgLight: string
    bgDark: string
    text: string
  }
  description: string
  questionCount?: number
}

export interface BeginnerMCQQuestion {
  id: string
  topicId: string
  topicTitle: string
  question: string
  questionType: 'what' | 'how' | 'which' | 'when' | 'basic'
  options: {
    id: string
    text: string
    distractorReason?: string
  }[]
  correctAnswerId: string
  explanation: string
  hint: string
  keyTakeaway: string
}

export const BEGINNER_VOICE_TOPICS: BeginnerVoiceTopic[] = [
  {
    id: 'a_to_z',
    number: 1,
    title: 'A-to-z Guarantee Claims',
    shortTitle: 'A-to-z Claims',
    badge: 'Claims & Protection',
    iconName: 'ShieldCheck',
    color: {
      accent: '#06b6d4',
      border: 'border-cyan-500/20',
      bgLight: 'bg-cyan-50',
      bgDark: 'dark:bg-cyan-950/20',
      text: 'text-cyan-600 dark:text-cyan-400'
    },
    description: 'What is the A-to-z Guarantee, how to file, when are claims eligible, and how seller appeals work.'
  },
  {
    id: 'wms',
    number: 2,
    title: 'Where\'s My Stuff? (WMS / WIS)',
    shortTitle: 'WMS / Tracking',
    badge: 'Logistics & Tracking',
    iconName: 'PackageSearch',
    color: {
      accent: '#f97316',
      border: 'border-orange-500/20',
      bgLight: 'bg-orange-50',
      bgDark: 'dark:bg-orange-950/20',
      text: 'text-orange-600 dark:text-orange-400'
    },
    description: 'What is WMS/WIS, how to check tracking, carrier milestone messages, and the 24-48h DNR buffer.'
  },
  {
    id: 'returns_refunds_exceptions',
    number: 3,
    title: 'Return & Refund Policies, Methods & Exceptions',
    shortTitle: 'Returns & Refunds',
    badge: 'Returns & SLA',
    iconName: 'RotateCcw',
    color: {
      accent: '#10b981',
      border: 'border-emerald-500/20',
      bgLight: 'bg-emerald-50',
      bgDark: 'dark:bg-emerald-950/20',
      text: 'text-emerald-600 dark:text-emerald-400'
    },
    description: 'What is the return window, how QR drop-offs work, non-returnable items, and refund processing speeds.'
  },
  {
    id: 'order_item_types',
    number: 4,
    title: 'Types of Orders & Types of Items',
    shortTitle: 'Order & Item Types',
    badge: 'Catalog & Fulfilled',
    iconName: 'Layers',
    color: {
      accent: '#6366f1',
      border: 'border-indigo-500/20',
      bgLight: 'bg-indigo-50',
      bgDark: 'dark:bg-indigo-950/20',
      text: 'text-indigo-600 dark:text-indigo-400'
    },
    description: 'What are Hazmat items, OTP deliveries, physical vs digital goods, pre-orders, and $0 replacement orders.'
  },
  {
    id: 'subscribe_save',
    number: 5,
    title: 'Subscribe & Save (S&S)',
    shortTitle: 'Subscribe & Save',
    badge: 'Auto-Delivery',
    iconName: 'Repeat',
    color: {
      accent: '#3b82f6',
      border: 'border-blue-500/20',
      bgLight: 'bg-blue-50',
      bgDark: 'dark:bg-blue-950/20',
      text: 'text-blue-600 dark:text-blue-400'
    },
    description: 'What is Subscribe & Save, how the 5% vs 15% discount works, scheduling, and skip/cancel flexibility.'
  },
  {
    id: 'payment_charges',
    number: 6,
    title: 'Payment Charges (Backup, Retro & Unknown)',
    shortTitle: 'Payment Charges',
    badge: 'Billing & Charges',
    iconName: 'CreditCard',
    color: {
      accent: '#ec4899',
      border: 'border-pink-500/20',
      bgLight: 'bg-pink-50',
      bgDark: 'dark:bg-pink-950/20',
      text: 'text-pink-600 dark:text-pink-400'
    },
    description: 'What is a backup card, when retro charges apply, and how to safely identify unknown bank charges.'
  },
  {
    id: 'amazon_prime_types',
    number: 7,
    title: 'Amazon Prime & Its Types',
    shortTitle: 'Prime & Memberships',
    badge: 'Subscriptions',
    iconName: 'Crown',
    color: {
      accent: '#eab308',
      border: 'border-yellow-500/20',
      bgLight: 'bg-yellow-50',
      bgDark: 'dark:bg-yellow-950/20',
      text: 'text-yellow-600 dark:text-yellow-400'
    },
    description: 'What are the Prime subscription types (Standard, Student, Access, Video) and how cancellation refunds work.'
  },
  {
    id: 'payment_methods',
    number: 8,
    title: 'Payment Methods & Types',
    shortTitle: 'Payment Methods',
    badge: 'Payment Types',
    iconName: 'Wallet',
    color: {
      accent: '#a855f7',
      border: 'border-purple-500/20',
      bgLight: 'bg-purple-50',
      bgDark: 'dark:bg-purple-950/20',
      text: 'text-purple-600 dark:text-purple-400'
    },
    description: 'Which payment methods are accepted, what is SNAP EBT and HSA/FSA, and which payment methods are prohibited.'
  }
]

export const BEGINNER_MCQ_BANK: BeginnerMCQQuestion[] = [
  // ==========================================
  // TOPIC 1: A-TO-Z GUARANTEE CLAIMS (6 Questions)
  // ==========================================
  {
    id: 'beg-atoz-001',
    topicId: 'a_to_z',
    topicTitle: 'A-to-z Guarantee Claims',
    question: 'What is the Amazon A-to-z Guarantee?',
    questionType: 'what',
    options: [
      { id: 'opt_1', text: 'A buyer protection program that covers orders purchased from third-party marketplace sellers when sold and fulfilled by the seller (MFN).', distractorReason: '' },
      { id: 'opt_2', text: 'A warranty that only covers Kindle and Echo smart electronics.', distractorReason: 'The A-to-z Guarantee covers physical marketplace orders, not manufacturer device warranties.' },
      { id: 'opt_3', text: 'An insurance program that guarantees delivery within 1 hour or gives a $100 cash prize.', distractorReason: 'Absurd distractor.' },
      { id: 'opt_4', text: 'An internal loan program for Amazon fulfillment warehouse workers.', distractorReason: 'Completely unrelated to customer order protection.' }
    ],
    correctAnswerId: 'opt_1',
    explanation: 'The A-to-z Guarantee protects Amazon customers when buying items sold and fulfilled directly by third-party marketplace sellers (Merchant Fulfilled Network / MFN). It covers both timely delivery and product condition.',
    hint: 'Think about customer protection when buying from independent third-party marketplace sellers.',
    keyTakeaway: 'The A-to-z Guarantee protects buyers on third-party (MFN) orders for non-delivery or defective items.'
  },
  {
    id: 'beg-atoz-002',
    topicId: 'a_to_z',
    topicTitle: 'A-to-z Guarantee Claims',
    question: 'How long must a customer wait for a third-party seller to respond before filing an A-to-z Guarantee Claim?',
    questionType: 'how',
    options: [
      { id: 'opt_1', text: '48 hours after contacting the seller via Buyer-Seller Messaging.', distractorReason: '' },
      { id: 'opt_2', text: '10 business days.', distractorReason: '10 business days is the bank debit refund SLA, not the seller messaging window.' },
      { id: 'opt_3', text: 'There is no waiting period; claims can be filed immediately without messaging the seller.', distractorReason: 'Contacting the seller and allowing 48 hours is a mandatory prerequisite.' },
      { id: 'opt_4', text: '30 calendar days.', distractorReason: '30 days is the standard return window, not the seller response window.' }
    ],
    correctAnswerId: 'opt_1',
    explanation: 'Under Amazon policy, customers must first contact the third-party seller through Buyer-Seller Messaging and give them 48 hours to resolve the problem before an A-to-z Guarantee claim can be submitted.',
    hint: 'Sellers are given a mandatory 2-day (48-hour) grace period to make things right directly with the customer.',
    keyTakeaway: 'Customers must give third-party sellers 48 hours to resolve issues before an A-to-z claim can be submitted.'
  },
  {
    id: 'beg-atoz-003',
    topicId: 'a_to_z',
    topicTitle: 'A-to-z Guarantee Claims',
    question: 'What is the standard time limit for a customer to file an A-to-z Guarantee Claim?',
    questionType: 'what',
    options: [
      { id: 'opt_1', text: 'Within 90 days after the Estimated Delivery Date (EDD).', distractorReason: '' },
      { id: 'opt_2', text: 'Within 7 calendar days from placing the order.', distractorReason: '7 days is too short and represents accidental Kindle return windows.' },
      { id: 'opt_3', text: 'Within 365 days of package shipment.', distractorReason: 'Standard A-to-z filing eligibility ends at 90 days from the EDD.' },
      { id: 'opt_4', text: 'Within 24 hours of package arrival.', distractorReason: '24 hours is part of the delivery buffer, not the maximum claim cutoff.' }
    ],
    correctAnswerId: 'opt_1',
    explanation: 'Customers have up to 90 days from the Estimated Delivery Date (EDD) to submit an A-to-z Guarantee claim on eligible third-party seller orders.',
    hint: 'The standard claim window is approximately 3 months (90 days) from the promised delivery date.',
    keyTakeaway: 'The standard deadline to file an A-to-z claim is 90 days from the Estimated Delivery Date (EDD).'
  },
  {
    id: 'beg-atoz-004',
    topicId: 'a_to_z',
    topicTitle: 'A-to-z Guarantee Claims',
    question: 'Which of the following situations is covered under the Amazon A-to-z Guarantee?',
    questionType: 'which',
    options: [
      { id: 'opt_1', text: 'The customer received a damaged or materially different item from a third-party seller and the seller refused to refund or replace it.', distractorReason: '' },
      { id: 'opt_2', text: 'The customer found the exact same item cheaper on another website 3 weeks later.', distractorReason: 'Price matching or buyer remorse does not qualify for A-to-z Guarantee claims.' },
      { id: 'opt_3', text: 'The customer purchased an item sold and shipped directly by Amazon Retail.', distractorReason: 'Amazon Retail orders are handled directly by Amazon customer service, not the third-party A-to-z program.' },
      { id: 'opt_4', text: 'The customer changed their mind after 6 months of normal use.', distractorReason: 'Normal wear-and-tear and late remorse are not covered.' }
    ],
    correctAnswerId: 'opt_1',
    explanation: 'The A-to-z Guarantee covers situations where the item did not arrive, arrived defective/damaged/materially different, or the seller failed to refund an authorized return.',
    hint: 'Look for an unresolved issue with item condition or delivery from an independent seller.',
    keyTakeaway: 'A-to-z claims cover non-delivery, damaged/defective merchandise, or unrefunded returns from third-party sellers.'
  },
  {
    id: 'beg-atoz-005',
    topicId: 'a_to_z',
    topicTitle: 'A-to-z Guarantee Claims',
    question: 'How many days does a third-party seller have to appeal an A-to-z Guarantee claim decision if it was granted in favor of the customer?',
    questionType: 'how',
    options: [
      { id: 'opt_1', text: '30 calendar days to appeal with additional evidence.', distractorReason: '' },
      { id: 'opt_2', text: '24 hours only.', distractorReason: '24 hours is too brief for formal seller dispute submissions.' },
      { id: 'opt_3', text: 'Decisions are final and can never be appealed under any circumstances.', distractorReason: 'Sellers have formal appeal rights under Seller Central policies.' },
      { id: 'opt_4', text: '180 calendar days.', distractorReason: '180 days is far beyond the 30-day seller appeal window.' }
    ],
    correctAnswerId: 'opt_1',
    explanation: 'If an A-to-z claim is granted in the buyer\'s favor, the third-party seller has 30 calendar days to file an appeal in Seller Central by providing proof of delivery (POD) or return tracking documentation.',
    hint: 'Sellers have a 30-day window to submit proof or contest an adverse claim decision.',
    keyTakeaway: 'Third-party sellers have 30 calendar days to appeal an adverse A-to-z claim ruling.'
  },
  {
    id: 'beg-atoz-006',
    topicId: 'a_to_z',
    topicTitle: 'A-to-z Guarantee Claims',
    question: 'When should an Amazon Customer Service voice associate help a customer file an A-to-z claim?',
    questionType: 'when',
    options: [
      { id: 'opt_1', text: 'When the order is from a third-party seller (MFN), 48 hours have passed since the customer messaged the seller, and the issue remains unresolved.', distractorReason: '' },
      { id: 'opt_2', text: 'Immediately on the very first contact without checking whether the seller was messaged.', distractorReason: 'Skipping the mandatory 48-hour seller messaging window violates SOP.' },
      { id: 'opt_3', text: 'Only when the customer threatens to close their Amazon account.', distractorReason: 'Claim eligibility is based on objective policy rules, not customer escalation.' },
      { id: 'opt_4', text: 'Only for orders delivered by Amazon Prime vans.', distractorReason: 'Orders delivered by Amazon Logistics are usually FBA, not MFN seller claims.' }
    ],
    correctAnswerId: 'opt_1',
    explanation: 'Associates guide or assist the customer in submitting an A-to-z claim only after verifying that the order is MFN (seller fulfilled), the 48-hour seller contact window has elapsed, and no resolution was reached.',
    hint: 'Both conditions must be met: MFN order and 48+ hours elapsed since messaging the seller.',
    keyTakeaway: 'A-to-z claims require an MFN order, 48 hours of unanswered seller messaging, and unresolved delivery/item issues.'
  },

  // ==========================================
  // TOPIC 2: WMS / WHERE'S MY STUFF (6 Questions)
  // ==========================================
  {
    id: 'beg-wms-001',
    topicId: 'wms',
    topicTitle: 'Where\'s My Stuff? (WMS / WIS)',
    question: 'What does "WMS" or "WIS" stand for in Amazon Customer Service contacts?',
    questionType: 'what',
    options: [
      { id: 'opt_1', text: 'Where\'s My Stuff? / Where Is Stuff? (calls regarding order status, package tracking, and delivery updates).', distractorReason: '' },
      { id: 'opt_2', text: 'Warehouse Master System only.', distractorReason: 'In customer contact center terminology, WIS/WMS denotes customer package tracking inquiries.' },
      { id: 'opt_3', text: 'Worldwide Merchandise Shipment.', distractorReason: 'Not an Amazon customer service acronym.' },
      { id: 'opt_4', text: 'Warranty Management Service.', distractorReason: 'Fictional acronym in this context.' }
    ],
    correctAnswerId: 'opt_1',
    explanation: 'In Amazon voice customer service, WMS ("Where\'s My Stuff?") or WIS is the industry-standard term for customer inquiries regarding shipment progress, tracking status, and late deliveries.',
    hint: 'It describes customer calls asking where their package or order is currently located.',
    keyTakeaway: 'WMS / WIS refers to "Where\'s My Stuff?", the most common customer tracking and shipment inquiry.'
  },
  {
    id: 'beg-wms-002',
    topicId: 'wms',
    topicTitle: 'Where\'s My Stuff? (WMS / WIS)',
    question: 'How long is the mandatory delivery buffer before an Amazon parcel can be marked as Delivered Not Received (DNR)?',
    questionType: 'how',
    options: [
      { id: 'opt_1', text: '24 to 48 hours past the marked delivery timestamp.', distractorReason: '' },
      { id: 'opt_2', text: 'Exactly 30 minutes.', distractorReason: '30 minutes is premature; carriers frequently scan before reaching the doorway.' },
      { id: 'opt_3', text: '7 business days.', distractorReason: '7 business days is excessive and causes severe customer dissatisfaction.' },
      { id: 'opt_4', text: 'There is zero buffer; instant refunds must be issued if the customer calls immediately.', distractorReason: 'Issuing refunds prior to the 24-48h buffer violates concession integrity policies.' }
    ],
    correctAnswerId: 'opt_1',
    explanation: 'Amazon policy strictly requires waiting 24 to 48 hours after a delivery scan before declaring a parcel DNR (Delivered Not Received), because carriers often scan items prematurely or deliver to neighbors/mailrooms.',
    hint: 'Standard carrier delivery buffer is 1 to 2 days (24 to 48 hours).',
    keyTakeaway: 'Amazon enforces a mandatory 24-48 hour buffer from the delivery scan before issuing DNR concessions.'
  },
  {
    id: 'beg-wms-003',
    topicId: 'wms',
    topicTitle: 'Where\'s My Stuff? (WMS / WIS)',
    question: 'Which carrier tracking status means the delivery vehicle is actively en route to the customer\'s address today?',
    questionType: 'which',
    options: [
      { id: 'opt_1', text: '"Out for Delivery"', distractorReason: '' },
      { id: 'opt_2', text: '"Package Departed Fulfillment Center"', distractorReason: 'This means the package is still in transit between distribution hubs, not on the local truck.' },
      { id: 'opt_3', text: '"Order Received"', distractorReason: 'This is the initial checkout confirmation, not delivery day status.' },
      { id: 'opt_4', text: '"Returned to Sender"', distractorReason: 'This means delivery failed and the package is heading back to Amazon.' }
    ],
    correctAnswerId: 'opt_1',
    explanation: '"Out for Delivery" indicates the package has been scanned onto the local courier van or delivery vehicle and is scheduled for drop-off by the end of the day (typically by 8:00 PM or 9:00 PM).',
    hint: 'Look for the status indicating the parcel is currently on the delivery truck.',
    keyTakeaway: '"Out for Delivery" means the package is with the local driver for delivery today.'
  },
  {
    id: 'beg-wms-004',
    topicId: 'wms',
    topicTitle: 'Where\'s My Stuff? (WMS / WIS)',
    question: 'What does the tracking status "Delivery Attempted - Front Door Inaccessible" mean?',
    questionType: 'what',
    options: [
      { id: 'opt_1', text: 'The carrier arrived at the address but could not safely access the doorstep (e.g. locked security gate, loose dog, or lack of access code).', distractorReason: '' },
      { id: 'opt_2', text: 'The package was destroyed by the driver.', distractorReason: 'False and panic-inducing.' },
      { id: 'opt_3', text: 'The customer\'s account has been permanently closed.', distractorReason: 'Unrelated to delivery access issues.' },
      { id: 'opt_4', text: 'The order was delivered to the wrong state.', distractorReason: 'Delivery attempted confirms the driver was at the local destination address.' }
    ],
    correctAnswerId: 'opt_1',
    explanation: 'This status indicates the driver reached the location but faced physical barriers (locked gate, security callbox, loose pet, or closed commercial building). The carrier will automatically re-attempt on the next business day.',
    hint: 'Think about physical obstacles like locked building doors or missing gate codes.',
    keyTakeaway: '"Delivery Attempted" means access was blocked; the carrier will re-attempt delivery on the next business day.'
  },
  {
    id: 'beg-wms-005',
    topicId: 'wms',
    topicTitle: 'Where\'s My Stuff? (WMS / WIS)',
    question: 'What is an "EDD" in Amazon order tracking?',
    questionType: 'what',
    options: [
      { id: 'opt_1', text: 'Estimated Delivery Date — the promised arrival date displayed to the customer at checkout.', distractorReason: '' },
      { id: 'opt_2', text: 'Early Dispatch Document.', distractorReason: 'Fictional logistics acronym.' },
      { id: 'opt_3', text: 'Emergency Distribution Driver.', distractorReason: 'Incorrect.' },
      { id: 'opt_4', text: 'Electronic Data Designation.', distractorReason: 'Incorrect.' }
    ],
    correctAnswerId: 'opt_1',
    explanation: 'EDD stands for Estimated Delivery Date, which represents the delivery promise made to the customer during checkout and visible in "Your Orders".',
    hint: 'EDD refers to the promised delivery date.',
    keyTakeaway: 'EDD stands for Estimated Delivery Date, the promised arrival timeframe for an order.'
  },
  {
    id: 'beg-wms-006',
    topicId: 'wms',
    topicTitle: 'Where\'s My Stuff? (WMS / WIS)',
    question: 'How should an associate advise a customer whose package tracking shows "Delivery Attempted"?',
    questionType: 'how',
    options: [
      { id: 'opt_1', text: 'Reassure them that a re-attempt will occur on the next business day, and help add delivery instructions or gate access codes to their account.', distractorReason: '' },
      { id: 'opt_2', text: 'Tell the customer they must drive to the regional airport immediately to pick it up.', distractorReason: 'Customers cannot retrieve packages from airport transfer hubs.' },
      { id: 'opt_3', text: 'Immediately issue a full cash refund on the spot without checking next-day re-attempt schedules.', distractorReason: 'Violates concession SOP; carrier re-attempts must be allowed.' },
      { id: 'opt_4', text: 'Instruct the customer to place 5 new duplicate orders.', distractorReason: 'Extremely poor advice that causes duplicate billing.' }
    ],
    correctAnswerId: 'opt_1',
    explanation: 'Associates must inform the caller that carriers automatically re-attempt delivery on the following business day and assist them in updating delivery instructions (gate codes, safe drop locations) to ensure successful delivery.',
    hint: 'Help the customer prepare for the carrier\'s next-day re-attempt by verifying delivery instructions.',
    keyTakeaway: 'Advise that a second attempt will occur next business day and update delivery instructions or access codes.'
  },

  // ==========================================
  // TOPIC 3: RETURN & REFUND POLICIES & METHODS (6 Questions)
  // ==========================================
  {
    id: 'beg-ret-001',
    topicId: 'returns_refunds_exceptions',
    topicTitle: 'Return & Refund Policies, Methods & Exceptions',
    question: 'What is Amazon\'s standard return window for most items purchased on Amazon.com?',
    questionType: 'what',
    options: [
      { id: 'opt_1', text: '30 days from the date of delivery.', distractorReason: '' },
      { id: 'opt_2', text: '7 days from placing the order.', distractorReason: '7 days applies to accidental Kindle eBook returns, not general physical merchandise.' },
      { id: 'opt_3', text: '90 days for all items across the store.', distractorReason: '90 days is for refurbished Amazon Renewed products or the A-to-z filing window.' },
      { id: 'opt_4', text: '1 full year.', distractorReason: 'Standard retail items do not have a 1-year return window.' }
    ],
    correctAnswerId: 'opt_1',
    explanation: 'Amazon\'s standard return policy allows customers to return most unopened or gently inspected items within 30 days of package delivery.',
    hint: 'The baseline return period for physical retail goods is 30 days.',
    keyTakeaway: 'The standard Amazon return window is 30 days from the date of delivery.'
  },
  {
    id: 'beg-ret-002',
    topicId: 'returns_refunds_exceptions',
    topicTitle: 'Return & Refund Policies, Methods & Exceptions',
    question: 'What is Amazon\'s Extended Holiday Return Policy?',
    questionType: 'what',
    options: [
      { id: 'opt_1', text: 'Items purchased between November 1 and December 31 can be returned until January 31 of the following year.', distractorReason: '' },
      { id: 'opt_2', text: 'Items can be kept for free without returning if bought in December.', distractorReason: 'Holiday returns still require sending the item back unless granted a returnless refund.' },
      { id: 'opt_3', text: 'A policy allowing returns for up to 10 years during Christmas.', distractorReason: 'Absurd distractor.' },
      { id: 'opt_4', text: 'A policy that doubles return shipping fees during peak season.', distractorReason: 'Amazon does not charge double return fees for holiday returns.' }
    ],
    correctAnswerId: 'opt_1',
    explanation: 'Each holiday season, Amazon extends the return window: eligible items purchased between November 1 and December 31 may be returned through January 31 of the next year.',
    hint: 'Holiday purchases from Nov 1 to Dec 31 can be returned through the end of January.',
    keyTakeaway: 'Items bought between Nov 1 and Dec 31 can be returned until January 31 under the Extended Holiday Return Policy.'
  },
  {
    id: 'beg-ret-003',
    topicId: 'returns_refunds_exceptions',
    topicTitle: 'Return & Refund Policies, Methods & Exceptions',
    question: 'Which return method allows customers to return merchandise without needing a cardboard box or printed shipping label?',
    questionType: 'which',
    options: [
      { id: 'opt_1', text: 'QR code drop-off at The UPS Store, Kohl\'s, or Whole Foods Market.', distractorReason: '' },
      { id: 'opt_2', text: 'Leaving the unwrapped item on the curbside for a mail carrier.', distractorReason: 'Carriers will not collect loose items from curbsides without labels.' },
      { id: 'opt_3', text: 'Dropping loose merchandise in a public blue USPS collection mailbox.', distractorReason: 'Violates postal regulations.' },
      { id: 'opt_4', text: 'Mailing the item in an unaddressed grocery bag.', distractorReason: 'Will result in lost merchandise.' }
    ],
    correctAnswerId: 'opt_1',
    explanation: 'Amazon provides label-free, box-free returns at participating partners like The UPS Store, Kohl\'s, and Whole Foods. Customers bring the item and a QR code on their smartphone; the store packs and ships it for free.',
    hint: 'Customers simply show a digital QR code on their smartphone at partner retail drop-offs.',
    keyTakeaway: 'The UPS Store, Kohl\'s, and Whole Foods offer label-free, box-free QR code drop-off returns.'
  },
  {
    id: 'beg-ret-004',
    topicId: 'returns_refunds_exceptions',
    topicTitle: 'Return & Refund Policies, Methods & Exceptions',
    question: 'Which of the following items are generally NON-RETURNABLE due to public health and safety regulations?',
    questionType: 'which',
    options: [
      { id: 'opt_1', text: 'Perishable groceries, live plants, prescription medications, and hazardous flammable liquids.', distractorReason: '' },
      { id: 'opt_2', text: 'Hardcover books and new clothing.', distractorReason: 'Books and apparel are fully returnable under standard 30-day rules.' },
      { id: 'opt_3', text: 'Unopened computer monitors and keyboards.', distractorReason: 'Electronics are returnable within 30 days.' },
      { id: 'opt_4', text: 'Kitchen pots, pans, and dining utensils.', distractorReason: 'Cookware is returnable under standard policies.' }
    ],
    correctAnswerId: 'opt_1',
    explanation: 'Due to health, safety, and transportation laws, perishable food, prescription drugs, live plants, and flammable chemicals/gases cannot be mailed back. Customers receive replacements or returnless refunds if defective.',
    hint: 'Think about items that spoil, medications, or dangerous flammable chemicals.',
    keyTakeaway: 'Perishables, prescription medications, live plants, and hazardous liquids cannot be returned by mail.'
  },
  {
    id: 'beg-ret-005',
    topicId: 'returns_refunds_exceptions',
    topicTitle: 'Return & Refund Policies, Methods & Exceptions',
    question: 'What is a "Returnless Refund"?',
    questionType: 'what',
    options: [
      { id: 'opt_1', text: 'A concession where Amazon issues a full refund to the customer without requiring them to ship the item back.', distractorReason: '' },
      { id: 'opt_2', text: 'A penalty charge where Amazon keeps the customer\'s money and the item.', distractorReason: 'That would be a forfeiture, not a refund.' },
      { id: 'opt_3', text: 'A refund that can only be spent on digital Kindle eBooks.', distractorReason: 'Refunds return to the original payment method or gift card balance.' },
      { id: 'opt_4', text: 'An unauthorized transaction made by a rogue driver.', distractorReason: 'Completely incorrect.' }
    ],
    correctAnswerId: 'opt_1',
    explanation: 'A Returnless Refund is granted when an item is low-cost, damaged, broken glass, or hazardous to ship back. Amazon refunds the purchase amount while instructing the customer to safely dispose of or keep the item.',
    hint: 'The customer gets their money back and does not have to mail the item.',
    keyTakeaway: 'A Returnless Refund refunds the buyer without requiring them to mail the physical product back.'
  },
  {
    id: 'beg-ret-006',
    topicId: 'returns_refunds_exceptions',
    topicTitle: 'Return & Refund Policies, Methods & Exceptions',
    question: 'How long does a refund take to reflect on an Amazon Gift Card balance compared to a Credit Card?',
    questionType: 'how',
    options: [
      { id: 'opt_1', text: '2 to 3 hours for an Amazon Gift Card; 3 to 5 business days for a Credit Card.', distractorReason: '' },
      { id: 'opt_2', text: '30 days for a Gift Card; 1 hour for a Credit Card.', distractorReason: 'Inverted and inaccurate; gift cards are much faster.' },
      { id: 'opt_3', text: 'Both payment methods take exactly 14 calendar days.', distractorReason: 'Gift cards process in hours, not 2 weeks.' },
      { id: 'opt_4', text: 'Gift cards take 6 months to credit.', distractorReason: 'False; Amazon gift card credits are nearly instantaneous.' }
    ],
    correctAnswerId: 'opt_1',
    explanation: 'Gift card balance refunds post in 2 to 3 hours once processed. Credit card refunds take 3 to 5 business days, and debit cards take up to 10 business days depending on the financial institution.',
    hint: 'Gift Card credits are fast (2-3 hours); credit card bank processing takes 3-5 business days.',
    keyTakeaway: 'Gift Card refunds take 2-3 hours; Credit Card refunds take 3-5 business days (Debit up to 10 days).'
  },

  // ==========================================
  // TOPIC 4: TYPES OF ORDERS & TYPES OF ITEMS (6 Questions)
  // ==========================================
  {
    id: 'beg-item-001',
    topicId: 'order_item_types',
    topicTitle: 'Types of Orders & Types of Items',
    question: 'What is a "Hazmat" item in Amazon logistics and customer support?',
    questionType: 'what',
    options: [
      { id: 'opt_1', text: 'An item classified as Hazardous Material (e.g. lithium-ion batteries, aerosols, perfumes, paints) requiring special ground transport.', distractorReason: '' },
      { id: 'opt_2', text: 'Any package weighing more than 100 pounds.', distractorReason: 'Heavy items are "Heavy and Bulky", not necessarily Hazmat.' },
      { id: 'opt_3', text: 'An order that was reported lost by the customer.', distractorReason: 'Lost orders are DNR, not Hazmat.' },
      { id: 'opt_4', text: 'A package with expired food.', distractorReason: 'Expired food is perishable, not Hazmat.' }
    ],
    correctAnswerId: 'opt_1',
    explanation: 'Hazmat (Hazardous Materials / Dangerous Goods) items contain regulated substances like pressurized gases, alcohol-based perfumes, or lithium-ion batteries that require ground-only transit under DOT safety laws.',
    hint: 'Think of dangerous goods like lithium power banks, aerosols, and flammable liquids.',
    keyTakeaway: 'Hazmat refers to items containing flammable, pressurized, or chemical substances subject to ground shipping rules.'
  },
  {
    id: 'beg-item-002',
    topicId: 'order_item_types',
    topicTitle: 'Types of Orders & Types of Items',
    question: 'Which transportation method is strictly prohibited for Hazmat merchandise?',
    questionType: 'which',
    options: [
      { id: 'opt_1', text: 'Air transportation (Next-Day Air / Two-Day Air); they must ship exclusively by Ground.', distractorReason: '' },
      { id: 'opt_2', text: 'Truck transportation on federal highways.', distractorReason: 'Ground trucking is the authorized transport method.' },
      { id: 'opt_3', text: 'Delivery to suburban residential addresses.', distractorReason: 'Hazmat consumer items are routinely delivered to residences via ground vans.' },
      { id: 'opt_4', text: 'Transport during morning hours.', distractorReason: 'Absurd distractor.' }
    ],
    correctAnswerId: 'opt_1',
    explanation: 'Federal Aviation Administration (FAA) laws strictly forbid air freight for flammable liquids, aerosols, and certain batteries due to cabin pressurization fire risks. They must ship exclusively via Ground.',
    hint: 'Hazmat cannot be loaded onto airplanes (air shipping).',
    keyTakeaway: 'Hazmat items cannot travel via air shipping and are restricted to Ground Transportation.'
  },
  {
    id: 'beg-item-003',
    topicId: 'order_item_types',
    topicTitle: 'Types of Orders & Types of Items',
    question: 'What is an "OTP" order and when is it required at delivery?',
    questionType: 'what',
    options: [
      { id: 'opt_1', text: 'One-Time Password delivery: a 6-digit security code the customer must provide to the driver in person for high-value items.', distractorReason: '' },
      { id: 'opt_2', text: 'Online Tracking Portal: a web page where the driver uploads photos.', distractorReason: 'Photo on delivery is standard, not an OTP requirement.' },
      { id: 'opt_3', text: 'Overnight Transit Priority: a shipping speed for groceries.', distractorReason: 'Incorrect acronym.' },
      { id: 'opt_4', text: 'Order Termination Process: an automatic cancellation protocol.', distractorReason: 'Incorrect.' }
    ],
    correctAnswerId: 'opt_1',
    explanation: 'For high-value items (smartphones, laptops, luxury watches), Amazon sends a 6-digit One-Time Password (OTP) to the customer\'s email/app. The driver cannot release the package without entering this code into their handheld device.',
    hint: 'High-value items require a 6-digit code shared with the driver in person.',
    keyTakeaway: 'OTP (One-Time Password) requires giving a 6-digit code to the delivery driver for high-value orders.'
  },
  {
    id: 'beg-item-004',
    topicId: 'order_item_types',
    topicTitle: 'Types of Orders & Types of Items',
    question: 'How does Amazon\'s return policy differ between physical merchandise and digital purchases (like Kindle eBooks)?',
    questionType: 'how',
    options: [
      { id: 'opt_1', text: 'Physical merchandise generally has 30 days to return; accidental Kindle eBook purchases have a strict 7-day return window if unread.', distractorReason: '' },
      { id: 'opt_2', text: 'Digital eBooks have a 2-year return window while physical books cannot be returned.', distractorReason: 'Inverted and incorrect.' },
      { id: 'opt_3', text: 'Digital purchases can never be refunded under any circumstance, even if bought accidentally.', distractorReason: 'Accidental digital 1-Click purchases are refundable within designated windows.' },
      { id: 'opt_4', text: 'Physical items must be returned within 1 hour of delivery.', distractorReason: 'Physical returns have a standard 30-day window.' }
    ],
    correctAnswerId: 'opt_1',
    explanation: 'Physical goods have a 30-day window. In contrast, accidental Kindle eBook purchases can be returned within 7 days via "Manage Your Content and Devices" if unread or barely read, and unstreamed Prime Video rentals within 48 hours.',
    hint: 'Kindle eBooks have a 7-day accidental return window; physical items get 30 days.',
    keyTakeaway: 'Physical items have 30 days; accidental Kindle eBooks have 7 days; unstreamed Prime Video has 48 hours.'
  },
  {
    id: 'beg-item-005',
    topicId: 'order_item_types',
    topicTitle: 'Types of Orders & Types of Items',
    question: 'What is Amazon\'s Pre-Order Price Guarantee?',
    questionType: 'what',
    options: [
      { id: 'opt_1', text: 'A policy ensuring the customer is charged the lowest price offered by Amazon between the time they place the pre-order and the release date.', distractorReason: '' },
      { id: 'opt_2', text: 'A guarantee that pre-order prices will always increase by $20 on release day.', distractorReason: 'False and anti-consumer.' },
      { id: 'opt_3', text: 'A rule that forces customers to pay the highest price reached during the pre-order period.', distractorReason: 'Amazon guarantees the lowest price, not the highest.' },
      { id: 'opt_4', text: 'An insurance policy that prevents customers from cancelling pre-orders.', distractorReason: 'Pre-orders can be cancelled anytime before dispatch.' }
    ],
    correctAnswerId: 'opt_1',
    explanation: 'Whenever a customer pre-orders a book, video game, or electronic item, the Pre-Order Price Guarantee ensures they will automatically be billed the lowest price offered on Amazon between order placement and release.',
    hint: 'The customer always receives the lowest price reached during the pre-order period.',
    keyTakeaway: 'The Pre-Order Price Guarantee charges customers the lowest price offered prior to release date.'
  },
  {
    id: 'beg-item-006',
    topicId: 'order_item_types',
    topicTitle: 'Types of Orders & Types of Items',
    question: 'What is a "Zero-Cost Replacement Order"?',
    questionType: 'what',
    options: [
      { id: 'opt_1', text: 'A replacement order dispatched at a $0.00 charge when an original item is damaged, defective, or missing in transit.', distractorReason: '' },
      { id: 'opt_2', text: 'An order placed by a customer using stolen coupons.', distractorReason: 'Unrelated to authorized CS replacement workflows.' },
      { id: 'opt_3', text: 'A marketing gift sent to all Amazon Prime members annually.', distractorReason: 'Replacements are customer service concessions for damaged or lost goods.' },
      { id: 'opt_4', text: 'A digital order that contains empty files.', distractorReason: 'Absurd distractor.' }
    ],
    correctAnswerId: 'opt_1',
    explanation: 'When an order arrives damaged or is confirmed lost, customer service associates can generate a zero-cost replacement order ($0.00) that ships a new unit to the customer without recharging their card.',
    hint: 'A replacement unit sent out without charging the customer additional money ($0.00).',
    keyTakeaway: 'A Zero-Cost Replacement sends a new product at $0.00 to resolve damaged, defective, or lost orders.'
  },

  // ==========================================
  // TOPIC 5: SUBSCRIBE & SAVE (6 Questions)
  // ==========================================
  {
    id: 'beg-sub-001',
    topicId: 'subscribe_save',
    topicTitle: 'Subscribe & Save (S&S)',
    question: 'What is Amazon Subscribe & Save (S&S)?',
    questionType: 'what',
    options: [
      { id: 'opt_1', text: 'A recurring auto-delivery service offering tiered discounts and free standard shipping on frequently purchased household and grocery essentials.', distractorReason: '' },
      { id: 'opt_2', text: 'A paid streaming music subscription.', distractorReason: 'That is Amazon Music Unlimited.' },
      { id: 'opt_3', text: 'A bank savings account managed by Amazon.', distractorReason: 'Subscribe & Save is a product re-order program, not a bank.' },
      { id: 'opt_4', text: 'A mandatory contract that locks customers in for 5 years.', distractorReason: 'Subscribe & Save has zero contracts and can be cancelled anytime.' }
    ],
    correctAnswerId: 'opt_1',
    explanation: 'Subscribe & Save allows customers to receive scheduled, automatic deliveries of everyday essentials (coffee, diapers, detergents, vitamins) with free shipping and discounts of 5% to 15%.',
    hint: 'Think of recurring auto-deliveries of household supplies at a discount.',
    keyTakeaway: 'Subscribe & Save provides scheduled auto-deliveries of everyday items with 5%–15% discounts.'
  },
  {
    id: 'beg-sub-002',
    topicId: 'subscribe_save',
    topicTitle: 'Subscribe & Save (S&S)',
    question: 'How does a customer qualify for the higher 15% discount on their Subscribe & Save delivery?',
    questionType: 'how',
    options: [
      { id: 'opt_1', text: 'By having 5 or more active subscription products arriving on the same monthly delivery day to a single address.', distractorReason: '' },
      { id: 'opt_2', text: 'By spending at least $5,000 on electronics.', distractorReason: 'The discount tier is based on item count (5+ items), not dollar thresholds.' },
      { id: 'opt_3', text: 'By having an Amazon Prime membership for 10 consecutive years.', distractorReason: 'Longevity of membership does not govern the 5-item S&S threshold.' },
      { id: 'opt_4', text: 'By paying an extra $50 activation fee.', distractorReason: 'There are zero activation fees for Subscribe & Save.' }
    ],
    correctAnswerId: 'opt_1',
    explanation: 'Base subscriptions (1 to 4 items) receive a 5% discount. When a monthly delivery contains 5 or more subscription items sent to the same address, the discount tier automatically increases to 15%.',
    hint: 'The magic threshold is 5 or more subscription items arriving on the same delivery day.',
    keyTakeaway: 'Subscribing to 5 or more items in a single monthly delivery unlocks the 15% discount tier.'
  },
  {
    id: 'beg-sub-003',
    topicId: 'subscribe_save',
    topicTitle: 'Subscribe & Save (S&S)',
    question: 'How often can Subscribe & Save deliveries be scheduled?',
    questionType: 'how',
    options: [
      { id: 'opt_1', text: 'Any interval from every 2 weeks up to every 6 months.', distractorReason: '' },
      { id: 'opt_2', text: 'Only once every 12 months.', distractorReason: 'Subscribe & Save offers frequent delivery intervals.' },
      { id: 'opt_3', text: 'Every single morning only.', distractorReason: 'Daily frequencies are not available for S&S.' },
      { id: 'opt_4', text: 'Strictly on the first day of each calendar year.', distractorReason: 'Customers choose their preferred delivery schedule.' }
    ],
    correctAnswerId: 'opt_1',
    explanation: 'Customers have extensive cadence flexibility, choosing delivery intervals from every 2 weeks, every month, or every 2, 3, 4, 5, or 6 months to match their consumption rate.',
    hint: 'Delivery intervals range from 2 weeks up to 6 months.',
    keyTakeaway: 'Subscribe & Save cadences range from every 2 weeks up to every 6 months.'
  },
  {
    id: 'beg-sub-004',
    topicId: 'subscribe_save',
    topicTitle: 'Subscribe & Save (S&S)',
    question: 'Can a customer skip an upcoming Subscribe & Save delivery or cancel a subscription without paying a fee?',
    questionType: 'which',
    options: [
      { id: 'opt_1', text: 'Yes, customers can skip an upcoming delivery or cancel their subscription at any time with zero penalty or cancellation fees.', distractorReason: '' },
      { id: 'opt_2', text: 'No, skipping requires paying a $15 administrative fee.', distractorReason: 'Skipping is completely free.' },
      { id: 'opt_3', text: 'No, subscriptions are binding legal contracts that cannot be cancelled for 1 year.', distractorReason: 'False; there are no contracts or commitments.' },
      { id: 'opt_4', text: 'Only if they obtain permission from the manufacturer.', distractorReason: 'Customers manage all subscriptions directly in their Amazon account.' }
    ],
    correctAnswerId: 'opt_1',
    explanation: 'Subscribe & Save provides 100% flexibility. Customers can skip a single delivery, change quantities, swap items, or cancel the subscription entirely at zero cost anytime before the order begins processing.',
    hint: 'There are no contracts, fees, or penalties for skipping or cancelling.',
    keyTakeaway: 'Customers can skip deliveries or cancel Subscribe & Save subscriptions anytime for free.'
  },
  {
    id: 'beg-sub-005',
    topicId: 'subscribe_save',
    topicTitle: 'Subscribe & Save (S&S)',
    question: 'What happens if the price of an item changes before a recurring Subscribe & Save order ships?',
    questionType: 'what',
    options: [
      { id: 'opt_1', text: 'Amazon sends an email notification before the order ships showing the updated price, giving the customer time to review, skip, or cancel.', distractorReason: '' },
      { id: 'opt_2', text: 'The customer is automatically billed $1,000 as a penalty.', distractorReason: 'Absurd distractor.' },
      { id: 'opt_3', text: 'Amazon cancels the customer\'s credit card.', distractorReason: 'Nonsensical.' },
      { id: 'opt_4', text: 'The price can never change because prices are frozen forever.', distractorReason: 'Subscribe & Save prices fluctuate with Amazon retail pricing.' }
    ],
    correctAnswerId: 'opt_1',
    explanation: 'Product prices may vary from month to month. Amazon sends a pre-shipment reminder email listing the items and current price, allowing customers to skip or cancel if they do not agree with the updated price.',
    hint: 'Amazon notifies the customer by email with the current price before dispatching the order.',
    keyTakeaway: 'Amazon sends a pre-shipment notification email showing the current price before recurring items ship.'
  },
  {
    id: 'beg-sub-006',
    topicId: 'subscribe_save',
    topicTitle: 'Subscribe & Save (S&S)',
    question: 'Which Amazon account page allows customers to manage, change delivery dates, or cancel Subscribe & Save items?',
    questionType: 'which',
    options: [
      { id: 'opt_1', text: '"Manage Your Subscriptions" (or "Subscribe & Save" in Your Account).', distractorReason: '' },
      { id: 'opt_2', text: '"Amazon Web Services Management Console".', distractorReason: 'AWS Console is for cloud computing enterprise clients.' },
      { id: 'opt_3', text: '"Kindle Direct Publishing Dashboard".', distractorReason: 'KDP is for self-publishing authors.' },
      { id: 'opt_4', text: '"Amazon Careers Portal".', distractorReason: 'Unrelated to customer shopping management.' }
    ],
    correctAnswerId: 'opt_1',
    explanation: 'Customers can view upcoming shipments, edit quantities, swap delivery dates, skip months, or cancel items by visiting "Manage Your Subscriptions" under their Amazon account settings.',
    hint: 'Navigate to "Manage Your Subscriptions" within Your Account.',
    keyTakeaway: 'Subscribe & Save items are managed and modified through "Manage Your Subscriptions" in Your Account.'
  },

  // ==========================================
  // TOPIC 6: PAYMENT CHARGES - BACKUP, RETRO, UNKNOWN (6 Questions)
  // ==========================================
  {
    id: 'beg-chg-001',
    topicId: 'payment_charges',
    topicTitle: 'Payment Charges (Backup, Retro & Unknown)',
    question: 'What is a "Backup Payment Method" on Amazon?',
    questionType: 'what',
    options: [
      { id: 'opt_1', text: 'A secondary card saved in the customer\'s Amazon wallet that is automatically charged if their primary card expires or is declined.', distractorReason: '' },
      { id: 'opt_2', text: 'An emergency loan from an external payday lender.', distractorReason: 'Not a retail credit feature.' },
      { id: 'opt_3', text: 'Cash stored in an Amazon envelope at home.', distractorReason: 'Amazon does not use physical cash envelopes.' },
      { id: 'opt_4', text: 'A payment method only usable on Prime Day.', distractorReason: 'Backup payment methods work year-round across subscriptions and orders.' }
    ],
    correctAnswerId: 'opt_1',
    explanation: 'A Backup Payment Method prevents service interruptions for Prime memberships, digital subscriptions, and orders: if the primary card fails authorization, Amazon automatically attempts the designated backup card in their wallet.',
    hint: 'A secondary card used as a safety net when the main card gets declined.',
    keyTakeaway: 'A Backup Payment Method charges a secondary card if the primary card is declined or expired.'
  },
  {
    id: 'beg-chg-002',
    topicId: 'payment_charges',
    topicTitle: 'Payment Charges (Backup, Retro & Unknown)',
    question: 'What is a "Retro Charge" (Retrospective Charge)?',
    questionType: 'what',
    options: [
      { id: 'opt_1', text: 'A charge applied to the customer\'s card when they received a free replacement item but failed to return the original item within 30 days.', distractorReason: '' },
      { id: 'opt_2', text: 'A fee charged for buying vintage or retro 1980s merchandise.', distractorReason: 'Humorous distractor; retro refers to retrospective billing.' },
      { id: 'opt_3', text: 'An interest charge applied to Amazon Gift Card balances.', distractorReason: 'Amazon Gift Cards have no interest or fees.' },
      { id: 'opt_4', text: 'A surcharge applied when delivery drivers arrive early.', distractorReason: 'Absurd distractor.' }
    ],
    correctAnswerId: 'opt_1',
    explanation: 'When Amazon sends an upfront zero-cost replacement, the customer is required to return the defective or original item within 30 days. If the return is not scanned by the carrier deadline, Amazon retroactively charges the card for the second item.',
    hint: 'Charged when a customer keeps both the original item and the replacement without returning one.',
    keyTakeaway: 'A Retro Charge bills the customer for a replacement item if the original is not returned within 30 days.'
  },
  {
    id: 'beg-chg-003',
    topicId: 'payment_charges',
    topicTitle: 'Payment Charges (Backup, Retro & Unknown)',
    question: 'How should an associate resolve a situation where a customer was retro-charged, but they actually dropped off the return at UPS 5 days ago?',
    questionType: 'how',
    options: [
      { id: 'opt_1', text: 'Verify the return tracking number or drop-off receipt showing the carrier took possession, and issue a refund for the retro charge.', distractorReason: '' },
      { id: 'opt_2', text: 'Tell the customer they lost their money permanently and refuse to check tracking.', distractorReason: 'Violates basic customer service standards and concession SOP.' },
      { id: 'opt_3', text: 'Instruct the customer to drive to the UPS warehouse and take the package back.', distractorReason: 'Customers cannot take back packages already in transit.' },
      { id: 'opt_4', text: 'Hang up the call immediately.', distractorReason: 'Unprofessional call abandonment.' }
    ],
    correctAnswerId: 'opt_1',
    explanation: 'If carrier tracking confirms the customer dropped off the package before or around the cutoff, the associate verifies carrier possession in AC3 and immediately reverses the retro charge.',
    hint: 'Verify the return drop-off tracking scan in AC3 and refund the retro charge.',
    keyTakeaway: 'Reimburse retro charges once drop-off carrier tracking or receipt confirms the return was dispatched.'
  },
  {
    id: 'beg-chg-004',
    topicId: 'payment_charges',
    topicTitle: 'Payment Charges (Backup, Retro & Unknown)',
    question: 'When a caller asks about an "Unknown Charge" on their bank statement, which information is an Amazon associate STRICTLY FORBIDDEN from asking?',
    questionType: 'which',
    options: [
      { id: 'opt_1', text: 'The full 16-digit card number and the 3-digit CVV security code on the back.', distractorReason: '' },
      { id: 'opt_2', text: 'The exact dollar amount of the charge.', distractorReason: 'Associates are allowed and required to verify the exact transaction amount.' },
      { id: 'opt_3', text: 'The date the charge appeared on their statement.', distractorReason: 'Transaction date is permitted for lookup.' },
      { id: 'opt_4', text: 'The last 4 digits of the payment card.', distractorReason: 'The last 4 digits are permitted under PCI-DSS compliance.' }
    ],
    correctAnswerId: 'opt_1',
    explanation: 'Under strict PCI-DSS and Amazon Zero-Tolerance Security policies, associates must NEVER request or record the full 16-digit card number or CVV code. Only the date, exact dollar amount, and last 4 digits are permitted for charge investigation.',
    hint: 'Never ask for the full credit card number or CVV security code.',
    keyTakeaway: 'Associates must NEVER ask for full 16-digit card numbers or CVVs; only date, amount, and last 4 digits.'
  },
  {
    id: 'beg-chg-005',
    topicId: 'payment_charges',
    topicTitle: 'Payment Charges (Backup, Retro & Unknown)',
    question: 'Which of the following is a common root cause of an "Unknown" or "Unrecognized" Amazon charge on a bank statement?',
    questionType: 'which',
    options: [
      { id: 'opt_1', text: 'An annual or monthly Prime membership auto-renewal, a digital subscription (e.g. Prime Video channel/Audible), or a family member using the card on a separate account.', distractorReason: '' },
      { id: 'opt_2', text: 'Amazon billing random website maintenance fees to anyone who browses Amazon.com.', distractorReason: 'Amazon never charges fees for browsing.' },
      { id: 'opt_3', text: 'Delivery drivers adding tips without customer permission.', distractorReason: 'Amazon does not allow unauthorized driver tipping fees on standard retail.' },
      { id: 'opt_4', text: 'Computer viruses that generate Amazon orders automatically.', distractorReason: 'Unlikely and speculative.' }
    ],
    correctAnswerId: 'opt_1',
    explanation: 'The vast majority of unrecognized charges stem from automatic Prime renewals, Prime Video add-on subscriptions (Paramount+, Starz), Kindle Unlimited, or household members using the card on another profile.',
    hint: 'Think of recurring subscriptions like Prime renewals or digital add-on video channels.',
    keyTakeaway: 'Most unknown charges are recurring Prime renewals, digital subscriptions, or household member purchases.'
  },
  {
    id: 'beg-chg-006',
    topicId: 'payment_charges',
    topicTitle: 'Payment Charges (Backup, Retro & Unknown)',
    question: 'How can a customer check what an unknown Amazon charge on their credit card statement was for without calling customer service?',
    questionType: 'how',
    options: [
      { id: 'opt_1', text: 'By visiting "Your Payments" -> "Transactions" in their Amazon account to see all itemized charges and order IDs matching that date and amount.', distractorReason: '' },
      { id: 'opt_2', text: 'By resetting their computer to factory settings.', distractorReason: 'Irrelevant.' },
      { id: 'opt_3', text: 'By filing a lawsuit against their local bank.', distractorReason: 'Extreme and counterproductive.' },
      { id: 'opt_4', text: 'Amazon does not provide any billing history online.', distractorReason: 'Amazon provides complete itemized order and invoice histories online.' }
    ],
    correctAnswerId: 'opt_1',
    explanation: 'Customers can navigate to "Your Payments" -> "Transactions" or check "Your Orders" to view every transaction, invoice, and subscription billing record corresponding to their statement.',
    hint: 'Customers can see itemized charge details under "Your Payments" -> "Transactions".',
    keyTakeaway: 'Customers can view itemized billing breakdowns under "Your Payments" -> "Transactions" in their account.'
  },

  // ==========================================
  // TOPIC 7: AMAZON PRIME & ITS TYPES (6 Questions)
  // ==========================================
  {
    id: 'beg-prm-001',
    topicId: 'amazon_prime_types',
    topicTitle: 'Amazon Prime & Its Types',
    question: 'What is the standard price of an Amazon Prime membership in the United States?',
    questionType: 'what',
    options: [
      { id: 'opt_1', text: '$139 per year (or $14.99 per month).', distractorReason: '' },
      { id: 'opt_2', text: '$49 per year.', distractorReason: 'Outdated historical price from over a decade ago.' },
      { id: 'opt_3', text: '$300 per year.', distractorReason: 'Significantly higher than actual price.' },
      { id: 'opt_4', text: 'Prime is 100% free with no membership fee.', distractorReason: 'Prime is a paid membership subscription.' }
    ],
    correctAnswerId: 'opt_1',
    explanation: 'The standard US Amazon Prime subscription is $139 annually or $14.99 monthly, offering free two-day/one-day shipping, Prime Video, Amazon Music Prime, and Prime Day deals.',
    hint: 'Annual membership is $139; monthly is $14.99.',
    keyTakeaway: 'Standard US Amazon Prime costs $139 per year or $14.99 per month.'
  },
  {
    id: 'beg-prm-002',
    topicId: 'amazon_prime_types',
    topicTitle: 'Amazon Prime & Its Types',
    question: 'What is "Prime Student" and what discount does it provide?',
    questionType: 'what',
    options: [
      { id: 'opt_1', text: 'A discounted Prime membership for actively enrolled college students featuring a 6-month free trial followed by 50% off regular Prime pricing.', distractorReason: '' },
      { id: 'opt_2', text: 'A program that only allows students to buy spiral notebooks.', distractorReason: 'Prime Student includes full Prime shipping and streaming perks.' },
      { id: 'opt_3', text: 'A membership that costs twice as much as standard Prime.', distractorReason: 'Prime Student provides a discount, not a premium.' },
      { id: 'opt_4', text: 'A program exclusively for elementary school teachers.', distractorReason: 'Prime Student requires college/university enrollment proof.' }
    ],
    correctAnswerId: 'opt_1',
    explanation: 'Prime Student requires a valid `.edu` email address or enrollment proof. It offers a 6-month free trial, then renews at a 50% discount ($7.49/month or $69/year) for up to 4 years or until graduation.',
    hint: 'College students receive a 6-month trial and 50% discount on Prime.',
    keyTakeaway: 'Prime Student offers college students a 6-month trial and 50% off regular membership costs.'
  },
  {
    id: 'beg-prm-003',
    topicId: 'amazon_prime_types',
    topicTitle: 'Amazon Prime & Its Types',
    question: 'What is "Prime Access" and who is eligible to receive it?',
    questionType: 'what',
    options: [
      { id: 'opt_1', text: 'A discounted tier ($6.99/month) for qualifying recipients of government assistance programs such as SNAP EBT, Medicaid, or SSI.', distractorReason: '' },
      { id: 'opt_2', text: 'An invite-only tier for Hollywood celebrities.', distractorReason: 'Humorous distractor.' },
      { id: 'opt_3', text: 'A tier for Amazon delivery van drivers only.', distractorReason: 'Prime Access is designed for low-income consumers receiving assistance.' },
      { id: 'opt_4', text: 'A business membership for Fortune 500 corporations.', distractorReason: 'Business memberships are Amazon Business Prime.' }
    ],
    correctAnswerId: 'opt_1',
    explanation: 'Prime Access provides all standard Prime benefits for $6.99/month to individuals receiving government assistance (SNAP, Medicaid, SSI, WIC, TANF) upon uploading verification documentation.',
    hint: 'A $6.99/month tier for individuals receiving government assistance programs like SNAP EBT or Medicaid.',
    keyTakeaway: 'Prime Access offers a $6.99/month membership for qualifying government assistance recipients.'
  },
  {
    id: 'beg-prm-004',
    topicId: 'amazon_prime_types',
    topicTitle: 'Amazon Prime & Its Types',
    question: 'What is "Prime Video Standalone"?',
    questionType: 'what',
    options: [
      { id: 'opt_1', text: 'A standalone video streaming subscription ($8.99/month) that includes Prime Video streaming but excludes shopping and free shipping benefits.', distractorReason: '' },
      { id: 'opt_2', text: 'A movie theater in Seattle owned by Amazon.', distractorReason: 'Incorrect.' },
      { id: 'opt_3', text: 'A DVD rental by mail service like old Netflix.', distractorReason: 'Prime Video is a digital streaming service.' },
      { id: 'opt_4', text: 'A video editing app for YouTube creators.', distractorReason: 'Incorrect.' }
    ],
    correctAnswerId: 'opt_1',
    explanation: 'Prime Video Standalone costs $8.99/month for viewers who only want movies and TV series streaming without paying for Amazon Prime delivery or shopping benefits.',
    hint: 'A video-only streaming tier ($8.99/mo) with no shipping benefits.',
    keyTakeaway: 'Prime Video Standalone ($8.99/mo) provides streaming content without free shipping benefits.'
  },
  {
    id: 'beg-prm-005',
    topicId: 'amazon_prime_types',
    topicTitle: 'Amazon Prime & Its Types',
    question: 'How many adult accounts can share Amazon Prime shipping benefits in an Amazon Household?',
    questionType: 'how',
    options: [
      { id: 'opt_1', text: 'Up to two adults (each maintaining their own separate password and payment cards).', distractorReason: '' },
      { id: 'opt_2', text: 'Up to 20 adults.', distractorReason: 'Amazon Household is limited to 2 adults.' },
      { id: 'opt_3', text: 'Only 1 adult; sharing shipping benefits is strictly prohibited.', distractorReason: 'Amazon Household explicitly allows 2 adults to share benefits.' },
      { id: 'opt_4', text: 'Unlimited adults across different continents.', distractorReason: 'Household members must reside in the same country.' }
    ],
    correctAnswerId: 'opt_1',
    explanation: 'Amazon Household lets up to 2 adults (ages 18+) link accounts to share Prime shipping, Prime Video, and digital books while keeping their order histories, passwords, and payment wallets private.',
    hint: 'Up to 2 adults can link their accounts through Amazon Household.',
    keyTakeaway: 'Amazon Household allows up to two adults to link accounts and share Prime benefits.'
  },
  {
    id: 'beg-prm-006',
    topicId: 'amazon_prime_types',
    topicTitle: 'Amazon Prime & Its Types',
    question: 'When is a customer eligible for a full 100% refund upon cancelling an auto-renewed Prime membership?',
    questionType: 'when',
    options: [
      { id: 'opt_1', text: 'When the customer has not used any Prime benefits (no shipping, no video streaming, no music) during the new billing period.', distractorReason: '' },
      { id: 'opt_2', text: 'Refunds are never granted under any circumstance once billed.', distractorReason: 'Amazon automatically refunds unused Prime renewals.' },
      { id: 'opt_3', text: 'Even if the customer used Prime shipping 50 times that week.', distractorReason: 'Using Prime benefits forfeits a 100% full refund.' },
      { id: 'opt_4', text: 'Only if they trade in an Amazon Kindle device.', distractorReason: 'Device trade-ins are unrelated to Prime membership refunds.' }
    ],
    correctAnswerId: 'opt_1',
    explanation: 'Amazon\'s automated system and customer service policy grant a full 100% refund if a customer cancels and has not used any Prime shipping, streaming, or digital perks during the renewal period.',
    hint: 'A full refund is issued if zero Prime benefits were used during the billing cycle.',
    keyTakeaway: 'Cancelling Prime yields a 100% refund if no Prime shipping or streaming benefits were used.'
  },

  // ==========================================
  // TOPIC 8: PAYMENT METHODS & TYPES (6 Questions)
  // ==========================================
  {
    id: 'beg-pay-001',
    topicId: 'payment_methods',
    topicTitle: 'Payment Methods & Types',
    question: 'Which of the following payment methods is ACCEPTED on Amazon.com?',
    questionType: 'which',
    options: [
      { id: 'opt_1', text: 'Major credit and debit cards (Visa, MasterCard, American Express, Discover), Amazon Store Card, and Amazon Gift Cards.', distractorReason: '' },
      { id: 'opt_2', text: 'Cash on Delivery (COD) in the United States.', distractorReason: 'COD is not accepted for US orders.' },
      { id: 'opt_3', text: 'Paper checks mailed through the postal service.', distractorReason: 'Personal mailed checks are not accepted.' },
      { id: 'opt_4', text: 'Cryptocurrency transfers directly at checkout.', distractorReason: 'Amazon does not accept Bitcoin or crypto directly at checkout.' }
    ],
    correctAnswerId: 'opt_1',
    explanation: 'Amazon accepts major credit and debit cards, prepaid cards, the Amazon Store Card, Prime Visa, and Amazon Gift Card balances.',
    hint: 'Credit/debit cards, Amazon Store Card, and Gift Cards are standard accepted methods.',
    keyTakeaway: 'Amazon accepts major credit/debit cards, Amazon Store Cards, Prime Visa, and Amazon Gift Cards.'
  },
  {
    id: 'beg-pay-002',
    topicId: 'payment_methods',
    topicTitle: 'Payment Methods & Types',
    question: 'Can an Amazon Gift Card balance be used to purchase another Amazon Gift Card?',
    questionType: 'which',
    options: [
      { id: 'opt_1', text: 'No, Amazon Gift Card balances cannot be used to purchase other Amazon Gift Cards or select third-party gift cards.', distractorReason: '' },
      { id: 'opt_2', text: 'Yes, you can buy unlimited Amazon Gift Cards with existing gift card balances.', distractorReason: 'Gift cards cannot buy gift cards due to anti-money-laundering regulations.' },
      { id: 'opt_3', text: 'Yes, but only during Prime Day.', distractorReason: 'The restriction applies at all times.' },
      { id: 'opt_4', text: 'Yes, if the customer calls and asks an associate for a special override.', distractorReason: 'Associates cannot override this strict system restriction.' }
    ],
    correctAnswerId: 'opt_1',
    explanation: 'To prevent financial fraud and comply with Anti-Money Laundering (AML) laws, Amazon terms strictly prohibit using Amazon Gift Card balances to buy Amazon or third-party gift cards.',
    hint: 'Gift cards cannot be used to buy other gift cards.',
    keyTakeaway: 'Amazon Gift Card balances cannot be used to purchase other gift cards.'
  },
  {
    id: 'beg-pay-003',
    topicId: 'payment_methods',
    topicTitle: 'Payment Methods & Types',
    question: 'What items can a customer purchase on Amazon using a SNAP EBT payment card?',
    questionType: 'what',
    options: [
      { id: 'opt_1', text: 'Eligible food and grocery items sold directly by Amazon Fresh, Whole Foods Market, and Amazon.com (produce, meat, dairy, pantry staples).', distractorReason: '' },
      { id: 'opt_2', text: 'Laptops, video game consoles, and electronics.', distractorReason: 'SNAP EBT federal guidelines strictly prohibit non-food purchases.' },
      { id: 'opt_3', text: 'Alcohol, tobacco, and hot prepared meals.', distractorReason: 'Alcohol and tobacco are illegal to buy with SNAP EBT.' },
      { id: 'opt_4', text: 'Amazon Prime annual memberships.', distractorReason: 'EBT cannot pay for Prime memberships; members can get Prime Access at $6.99/mo with a debit card.' }
    ],
    correctAnswerId: 'opt_1',
    explanation: 'Under USDA federal rules, SNAP EBT funds can only buy qualifying food essentials (fruits, vegetables, dairy, meat, bread, pantry items). Delivery fees and non-food goods require a secondary payment card.',
    hint: 'SNAP EBT can only be used for qualifying food and grocery essentials.',
    keyTakeaway: 'SNAP EBT cards can only purchase eligible food and grocery items, not electronics or delivery fees.'
  },
  {
    id: 'beg-pay-004',
    topicId: 'payment_methods',
    topicTitle: 'Payment Methods & Types',
    question: 'What is an HSA or FSA payment card on Amazon and what can it be used to buy?',
    questionType: 'what',
    options: [
      { id: 'opt_1', text: 'Health Savings Account / Flexible Spending Account cards used to purchase IRS-qualified medical supplies, first aid, and over-the-counter health items.', distractorReason: '' },
      { id: 'opt_2', text: 'Student loan cards used to buy college textbooks.', distractorReason: 'HSA/FSA is for healthcare expenses, not student financial aid.' },
      { id: 'opt_3', text: 'Discount cards that provide 50% off all clothing.', distractorReason: 'Incorrect.' },
      { id: 'opt_4', text: 'Cards used to purchase video games and movie tickets.', distractorReason: 'HSA/FSA funds can only be spent on IRS-approved health products.' }
    ],
    correctAnswerId: 'opt_1',
    explanation: 'Customers can link HSA or FSA debit cards to purchase thousands of eligible healthcare products (bandages, contact lens solution, blood pressure monitors, sunscreen) in the Amazon FSA/HSA store.',
    hint: 'HSA/FSA cards pay for eligible health and medical supplies in the HSA/FSA store.',
    keyTakeaway: 'HSA/FSA cards can be used to buy IRS-eligible healthcare, medical, and first aid products.'
  },
  {
    id: 'beg-pay-005',
    topicId: 'payment_methods',
    topicTitle: 'Payment Methods & Types',
    question: 'Which of the following payment methods is STRICTLY PROHIBITED on Amazon.com for US orders?',
    questionType: 'which',
    options: [
      { id: 'opt_1', text: 'Physical cash, personal paper checks, money orders, and Cash on Delivery (COD).', distractorReason: '' },
      { id: 'opt_2', text: 'Visa credit and debit cards.', distractorReason: 'Visa is fully accepted.' },
      { id: 'opt_3', text: 'Amazon Gift Card balances.', distractorReason: 'Gift cards are accepted.' },
      { id: 'opt_4', text: 'Discover and American Express cards.', distractorReason: 'Discover and Amex are accepted.' }
    ],
    correctAnswerId: 'opt_1',
    explanation: 'Amazon does not accept physical cash, mailed checks, money orders, or COD for US shipments. All transactions must be processed electronically through recognized banking methods.',
    hint: 'Physical cash, paper checks, money orders, and COD are not accepted.',
    keyTakeaway: 'Cash, personal checks, money orders, and Cash on Delivery (COD) are strictly prohibited.'
  },
  {
    id: 'beg-pay-006',
    topicId: 'payment_methods',
    topicTitle: 'Payment Methods & Types',
    question: 'What is a "Split Tender" payment transaction on Amazon?',
    questionType: 'what',
    options: [
      { id: 'opt_1', text: 'Using two different payment methods for a single order (for example, combining an Amazon Gift Card balance or SNAP EBT with a credit card).', distractorReason: '' },
      { id: 'opt_2', text: 'Splitting an order into two shipments sent to different addresses.', distractorReason: 'That is multi-address delivery, not split tender.' },
      { id: 'opt_3', text: 'Paying half the price today and half next year without interest.', distractorReason: 'Incorrect.' },
      { id: 'opt_4', text: 'Splitting the cost of an item between two strangers on Amazon.', distractorReason: 'Nonsensical.' }
    ],
    correctAnswerId: 'opt_1',
    explanation: 'Split tender occurs when a customer covers part of an order with an Amazon Gift Card, promotional balance, or SNAP EBT, and pays the remaining balance using a credit or debit card.',
    hint: 'Combining two payment methods (like a gift card + credit card) for a single order.',
    keyTakeaway: 'Split tender combines two payment methods (e.g. Gift Card or EBT + Credit Card) for one order.'
  }
]

import { CallFlowScenario } from '../types/amazonVoice'

export const CALL_FLOW_SCENARIOS: CallFlowScenario[] = [
  {
    id: 'scen-dnr-buffer',
    title: 'High-Tension DNR: Missing $350 Coffee Maker Within Buffer Period',
    category: 'order_issues',
    difficulty: 'intermediate',
    customerPersona: {
      name: 'David Miller',
      tone: 'Irate',
      summary: 'Package marked delivered 2 hours ago by AMZL. Customer needs the item for an event tonight and demands an immediate $350 refund or instant replacement.'
    },
    initialPrompt: 'Caller is David Miller. Order #114-8923412-9018231 (DeLonghi Espresso Machine, $349.99). Delivered 2 hours ago by AMZL, but buyer insists it is not outside.',
    context: {
      orderId: '114-8923412-9018231',
      trackingStatus: 'Delivered (AMZL) 2 hours ago - Left near front door',
      item: 'DeLonghi Magnifica Espresso Machine',
      itemPrice: '$349.99',
      deliveryBufferMet: false,
      primeMember: true
    },
    stages: [
      {
        stage: 'greeting',
        stageTitle: 'Phase 1: Opening & Professional Greeting',
        customerDialogue: '[Beep] "Yeah, hello?! Someone better help me right now because your delivery driver just ripped me off!"',
        options: [
          {
            id: 'opt_g1',
            agentUtterance: 'Thank you for calling Amazon Customer Service. My name is Alex. May I have your name and who do I have the pleasure of speaking with today?',
            complianceRating: 'exemplary',
            feedback: 'Polite, calm, sets professional tone and maintains control without matching the caller’s agitation.',
            empathyScore: 4,
            fcrScore: 5,
            complianceNote: 'Standard greeting formula adhered to cleanly.'
          },
          {
            id: 'opt_g2',
            agentUtterance: 'Whoa, calm down sir! Nobody ripped you off. What is your order number?',
            complianceRating: 'critical_fail',
            feedback: 'Telling an irate customer to "calm down" inflames anger and violates de-escalation standards.',
            empathyScore: 1,
            fcrScore: 2,
            complianceNote: 'Severely non-compliant customer interaction.'
          },
          {
            id: 'opt_g3',
            agentUtterance: 'Amazon Support. Order number?',
            complianceRating: 'non_compliant',
            feedback: 'Blunt, abrupt, robotic, and lacks standard greeting protocols.',
            empathyScore: 1,
            fcrScore: 3,
            complianceNote: 'Lacks required branding and representative introduction.'
          }
        ]
      },
      {
        stage: 'verification',
        stageTitle: 'Phase 2: Customer Account & Security Verification',
        customerDialogue: '"My name is David Miller! I ordered an espresso machine. I want to know why it says delivered when my porch is completely empty!"',
        options: [
          {
            id: 'opt_v1',
            agentUtterance: 'Thank you Mr. Miller. For your account security, could you please confirm the billing address and the email address associated with your Amazon account?',
            complianceRating: 'exemplary',
            feedback: 'Crucial verification completed before disclosing order specifics or financial details. Demonstrates zero-tolerance PII compliance.',
            empathyScore: 4,
            fcrScore: 5,
            complianceNote: 'Accurately verifies account credentials.'
          },
          {
            id: 'opt_v2',
            agentUtterance: 'Sure, can you give me your 16 digit card number and security CVV code so I can refund you right away?',
            complianceRating: 'critical_fail',
            feedback: 'Asking for full card numbers or CVV is a critical PCI-DSS security violation.',
            empathyScore: 1,
            fcrScore: 1,
            complianceNote: 'Immediate security compliance failure.'
          },
          {
            id: 'opt_v3',
            agentUtterance: 'Don’t worry about verifying, I see your order right here on my screen David.',
            complianceRating: 'non_compliant',
            feedback: 'Bypassing verification before assisting is a security risk.',
            empathyScore: 3,
            fcrScore: 3,
            complianceNote: 'Fails mandatory account security protocol.'
          }
        ]
      },
      {
        stage: 'aca',
        stageTitle: 'Phase 3: ACA (Acknowledge, Concern, Assurance)',
        customerDialogue: '"124 Pine Crest Way, Austin, TX. Now listen to me: I paid 350 bucks for this espresso maker. I need it tonight for a dinner party. I want my money back or another one sent right now!"',
        options: [
          {
            id: 'opt_a1',
            agentUtterance: 'I understand that your espresso machine shows delivered, but you cannot locate it on your property (Acknowledge). I realize how stressful this is, especially when you are hosting guests tonight (Concern). Rest assured, I will personally review the carrier scan and guide us to the right solution (Assurance).',
            complianceRating: 'exemplary',
            feedback: 'Textbook ACA execution. Validates the emotional pressure point without overpromising an unverified refund.',
            empathyScore: 5,
            fcrScore: 5,
            complianceNote: 'Exemplary empathy and active listening.'
          },
          {
            id: 'opt_a2',
            agentUtterance: 'Well, tracking says it was left at your front door, so maybe someone stole it off your porch. Have you checked your Ring camera?',
            complianceRating: 'non_compliant',
            feedback: 'Blaming theft or dismissing the customer without empathy increases frustration.',
            empathyScore: 2,
            fcrScore: 2,
            complianceNote: 'Lacks ACA bridge.'
          },
          {
            id: 'opt_a3',
            agentUtterance: 'I will refund you the $350 right this second Mr. Miller!',
            complianceRating: 'non_compliant',
            feedback: 'Premature concession commitment without probing or checking the required 24-48 hr buffer.',
            empathyScore: 4,
            fcrScore: 1,
            complianceNote: 'Process violation: concessions cannot be promised before buffer check.'
          }
        ]
      },
      {
        stage: 'probing_hold',
        stageTitle: 'Phase 4: Probing & Hold Etiquette',
        customerDialogue: '"So what are you going to do about it right now?"',
        options: [
          {
            id: 'opt_p1',
            agentUtterance: 'May I place you on a brief 1 to 2 minute hold while I check the delivery coordinates, carrier photo scan, and fulfillment status in our system Mr. Miller?',
            complianceRating: 'exemplary',
            feedback: 'Adheres strictly to the 1-2 minute maximum hold rule, requests caller permission, and states exact rationale.',
            empathyScore: 4,
            fcrScore: 5,
            complianceNote: 'Complies with Hold and Dead-Air SLA.'
          },
          {
            id: 'opt_p2',
            agentUtterance: 'Hang on, don\'t talk for 10 minutes while I look this up.',
            complianceRating: 'critical_fail',
            feedback: 'Unprofessional, violates hold permission rules.',
            empathyScore: 1,
            fcrScore: 1,
            complianceNote: 'Severe communication deficiency.'
          },
          {
            id: 'opt_p3',
            agentUtterance: 'Hold on.',
            complianceRating: 'non_compliant',
            feedback: 'Abrupt hold without permission or time limit.',
            empathyScore: 2,
            fcrScore: 2,
            complianceNote: 'Hold etiquette failure.'
          }
        ]
      },
      {
        stage: 'resolution',
        stageTitle: 'Phase 5: SOP Compliant Resolution & Buffer Explanation',
        customerDialogue: '"Thanks for getting back. Did you find where your driver dumped it?"',
        options: [
          {
            id: 'opt_r1',
            agentUtterance: 'Thank you for waiting, Mr. Miller. I reviewed the tracking details. The driver completed a scan 2 hours ago. Often, AMZL carriers scan packages in advance while finishing their neighborhood route, or place items in secondary sheltered areas such as side doors or back patios. Could you check those spots? Under our delivery policy, if the package has not shown up within 24 to 36 hours from this delivery timestamp, we will be able to immediately reissue a replacement or full refund.',
            complianceRating: 'exemplary',
            feedback: 'Accurately explains the carrier pre-scan behavior, guides thorough physical checking, and upholds the mandatory buffer period firmly yet respectfully.',
            empathyScore: 5,
            fcrScore: 5,
            complianceNote: '100% compliant with DNR SOP buffer guidelines.'
          },
          {
            id: 'opt_r2',
            agentUtterance: 'SOP says wait 48 hours. Call back in two days. Bye.',
            complianceRating: 'critical_fail',
            feedback: 'Cold, robotic, zero helpful guidance or explanation.',
            empathyScore: 1,
            fcrScore: 1,
            complianceNote: 'Violates helpfulness and de-escalation standards.'
          },
          {
            id: 'opt_r3',
            agentUtterance: 'I went ahead and refunded $350 to your card, you will see it in 10 minutes.',
            complianceRating: 'critical_fail',
            feedback: 'Blatant policy failure. Not only was the buffer ignored, but quoted credit card refund timeline (10 min) is factually wrong.',
            empathyScore: 3,
            fcrScore: 1,
            complianceNote: 'Financial timeline misstatement and concession breach.'
          }
        ]
      },
      {
        stage: 'power_closing',
        stageTitle: 'Phase 6: Power Closing & Assurance',
        customerDialogue: '"Alright, I will look around the back patio and wait until tomorrow afternoon. But if it isn\'t there, I\'m calling back."',
        options: [
          {
            id: 'opt_c1',
            agentUtterance: 'I completely understand Mr. Miller. I have documented our conversation with notes and incident ID #9281. If it does not arrive by tomorrow, simply quote that ID and any specialist will assist you immediately. Have I fully addressed all of your concerns today? Thank you for choosing Amazon, and have a wonderful evening!',
            complianceRating: 'exemplary',
            feedback: 'Outstanding closing: logs reference notes, offers incident ID, executes the power closing question, and reinforces brand trust.',
            empathyScore: 5,
            fcrScore: 5,
            complianceNote: 'Perfect execution of Power Closing.'
          },
          {
            id: 'opt_c2',
            agentUtterance: 'Yeah okay, whatever. Bye.',
            complianceRating: 'critical_fail',
            feedback: 'Unprofessional dismissal.',
            empathyScore: 1,
            fcrScore: 1,
            complianceNote: 'Severely unprofessional.'
          },
          {
            id: 'opt_c3',
            agentUtterance: 'Okay, thanks, call back tomorrow.',
            complianceRating: 'acceptable',
            feedback: 'Acceptable but misses the formal Power Closing question and incident documentation offer.',
            empathyScore: 3,
            fcrScore: 3,
            complianceNote: 'Incomplete closing.'
          }
        ]
      }
    ]
  },
  {
    id: 'scen-prime-dispute',
    title: 'Subscription Dispute: Accidental Prime Renewal & Immediate Cancellation',
    category: 'amazon_prime',
    difficulty: 'beginner',
    customerPersona: {
      name: 'Sarah Jenkins',
      tone: 'Anxious',
      summary: 'Senior customer billed $139 for Prime annual renewal yesterday. On a fixed budget and panicked about overdraft.'
    },
    initialPrompt: 'Caller Sarah Jenkins was billed $139 for Prime membership renewal. She has not placed any orders or used Prime Video.',
    context: {
      orderId: 'PRIME-2026-SUBSCRIPTION',
      trackingStatus: 'Annual Renewal - Active as of yesterday',
      item: 'Amazon Prime Annual Plan',
      itemPrice: '$139.00',
      deliveryBufferMet: true,
      primeMember: true
    },
    stages: [
      {
        stage: 'greeting',
        stageTitle: 'Greeting & Empathy',
        customerDialogue: '"Hi dear... I just saw a charge on my bank statement for $139 from Amazon Prime. I live on Social Security and this is going to overdraw my checking account. Can you please help me?"',
        options: [
          {
            id: 'opt_sp1',
            agentUtterance: 'Thank you for reaching out to Amazon Customer Service. My name is Maya. I can certainly help you look into that charge right away Mrs. Jenkins. Please do not worry, we will review this together.',
            complianceRating: 'exemplary',
            feedback: 'Warm, compassionate tone that immediately relieves caller anxiety.',
            empathyScore: 5,
            fcrScore: 5,
            complianceNote: 'Excellent tone calibration.'
          },
          {
            id: 'opt_sp2',
            agentUtterance: 'You should have turned off auto-renew in your settings if you didn’t want it.',
            complianceRating: 'critical_fail',
            feedback: 'Blaming an anxious customer destroys customer trust.',
            empathyScore: 1,
            fcrScore: 1,
            complianceNote: 'Disrespectful customer interaction.'
          }
        ]
      },
      {
        stage: 'resolution',
        stageTitle: 'Resolution & Precise Financial Timelines',
        customerDialogue: '"I haven\'t used Amazon in months! Can I get this cancelled and my money returned to my bank?"',
        options: [
          {
            id: 'opt_sr1',
            agentUtterance: 'I checked your account, and since no Prime benefits have been used since yesterday’s renewal, I have processed an immediate cancellation and full refund of the $139.00. Because this was charged to your debit card/bank account, please note that it takes up to 10 business days depending on your bank\'s processing cycle to reflect back into your account balance.',
            complianceRating: 'exemplary',
            feedback: 'Accurately executes Prime cancellation policy for unused benefits and quotes the exact debit/bank SLA timeline (up to 10 business days).',
            empathyScore: 5,
            fcrScore: 5,
            complianceNote: '100% compliant with Prime terms and financial SLA.'
          },
          {
            id: 'opt_sr2',
            agentUtterance: 'I refunded it. You’ll have the cash in your pocket in 5 minutes.',
            complianceRating: 'critical_fail',
            feedback: 'Misquoting debit card refund timelines sets false expectations that lead to repeat contacts and bank disputes.',
            empathyScore: 3,
            fcrScore: 1,
            complianceNote: 'Financial timeline misstatement.'
          }
        ]
      }
    ]
  }
]

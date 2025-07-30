/**
 * This file contains the core content for all services offered.
 * It's structured as an array of Service objects. To add, remove, or edit a service,
 * you can modify the `services` array below.
 */

import { Service } from './types';

export const services: Service[] = [
  {
    id: 'modern-workspace',
    title: 'Modern Workspace',
    pageTitle: 'The Modern Workspace: Beyond Collaboration.',
    introduction: "Your team is sharp, but their tools are dull. Outdated software running on aging on-premise servers creates a web of inefficiency. It's a constant cycle of slow load times, compatibility issues, and security patches that feels less like a workspace and more like a work-against.",
    complication: "This isn't just an inconvenience; it's a trap. As your business grows, this rigid infrastructure can't keep up. It leads to lost hours, frustrated employees, and eventually, a costly emergency when the system inevitably fails. You're not just losing productivity; you're risking business continuity.",
    solution: "We break the cycle by migrating you to a seamless Microsoft 365 ecosystem. We implement the right tier for your needs, often starting with Microsoft 365 Business Premium, which includes advanced security features out-of-the-box. The result is a unified platform where communication flows, collaboration is effortless, and your data is secure and accessible from anywhere.",
    transformation: "The result is a fluid, intelligent environment where technology accelerates your work instead of hindering it. Your team gains the tools to innovate freely, backed by enterprise-grade security from Microsoft Defender for Business and a scalable foundation ready for future growth.",
    cardImageUrl: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=800&auto=format&fit=crop',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    deeperDive: {
      keyFeatures: [
        { title: 'Unified Communication Hub', replaces: "Fragmented chat apps, endless email chains, and separate video conferencing tools.", with: "Microsoft Teams as your central hub for chat, meetings, calls (with optional Teams Phone), and collaboration. Enjoy features like real-time transcription, background blur, and seamless file sharing within conversations." },
        { title: 'Intelligent Document Management', replaces: "Local file servers, scattered USB drives, and the chaos of 'final_v2_final.docx'.", with: "Microsoft SharePoint and OneDrive for secure, cloud-native file storage. Benefit from co-authoring in real-time, automatic version history, granular permissions, and powerful search. We can also leverage Microsoft Syntex to apply content AI for document processing." },
        { title: 'Streamlined Project & Task Management', replaces: "Whiteboards, sticky notes, and disparate project management software.", with: "Integrated tools like Microsoft Planner and To Do within Teams. Assign tasks, track progress, and manage deadlines in the same place you collaborate, ensuring nothing falls through the cracks." },
        { title: 'Enterprise-Grade Email & Security', replaces: "Outdated on-premise Exchange servers with basic spam filtering.", with: "Exchange Online with a 99.9% uptime guarantee, protected by Exchange Online Protection (EOP) and advanced phishing/malware defense from Microsoft Defender for Office 365." },
      ],
      modernAdvantage: [
        'Boosted Productivity: A single, unified platform reduces context-switching and streamlines workflows.',
        'Enhanced Collaboration: Real-time co-authoring and integrated communication tools foster teamwork.',
        'Advanced Security: Protect users, data, and devices with an integrated security suite from a single vendor.',
        'Simplified IT Management: Consolidate vendors and manage your entire workspace from a single admin center, with device management via Microsoft Intune.',
      ],
      howItWorks: "We begin with a discovery workshop to understand your workflows. Next, we design a phased migration plan for your data and communications to Microsoft 365. We configure the environment for security and efficiency, then provide hands-on training to ensure your team hits the ground running.",
      components: ['Microsoft 365 Business Premium', 'Microsoft Teams & SharePoint', 'Exchange Online', 'Microsoft Defender for Business', 'Microsoft Intune (MDM/MAM)', 'Data Migration Services', 'User Adoption & Training'],
    },
    cta: 'Build Your Modern Workspace',
    faqs: [
        { question: "What's the difference between Microsoft 365 Business Standard and Premium?", answer: "Business Standard provides the core Office apps and cloud services. Business Premium includes everything in Standard plus advanced cyber threat protection and device management. It adds services like Microsoft Defender for Business and Intune, which are crucial for securing a modern, remote workforce. We almost always recommend Premium for this reason." },
        { question: "Is our data secure in the Microsoft Cloud?", answer: "Yes. Microsoft invests over a billion dollars annually in cybersecurity. We supplement this by configuring advanced security policies like Multi-Factor Authentication (MFA), Conditional Access, and data loss prevention (DLP) to meet your specific security and compliance needs." },
    ]
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation',
    pageTitle: 'Intelligent Automation: Beyond Efficiency.',
    introduction: "Are your best employees—in finance, HR, or operations—stuck performing repetitive, manual tasks? From chasing invoices to generating weekly reports, these processes drain resources, invite human error, and prevent your team from focusing on high-value, strategic work.",
    complication: "This manual drag is more than just inefficient; it's a growth ceiling. It makes scaling your operations expensive and difficult. Every new client or project adds a proportional amount of administrative burden, limiting your potential and burning out your best talent.",
    solution: "We deploy intelligent automation using Azure AI and the Microsoft Power Platform. We build smart systems that handle the mundane—from intelligently scanning documents to automating complex business processes—freeing your team to innovate and drive the business forward.",
    transformation: "Your operations become streamlined and scalable. Tedious tasks are handled instantly and accurately by AI, providing your team with the time and data-driven insights they need to make smarter decisions, enhance customer service, and uncover new growth opportunities.",
    cardImageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    imageUrl: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    deeperDive: {
      keyFeatures: [
        { title: 'Intelligent Document Processing', replaces: "Manually reading invoices, sifting through scanned contracts, or searching for information in PDFs.", with: "An AI-powered system using Azure AI Document Intelligence (OCR). We can even use Azure OpenAI Service to build a Retrieval-Augmented Generation (RAG) engine, creating a private 'Google' for your business that can instantly answer questions based on your company's own data." },
        { title: 'Automated Business Workflows', replaces: "Manual data entry, copy-pasting between applications, and repetitive approval processes.", with: "Microsoft Power Automate to create 'flows' that connect your apps (like QuickBooks, Salesforce, etc.) and services. Automate everything from saving email attachments to SharePoint, to complex, multi-stage approval workflows." },
        { title: 'Custom Business Applications', replaces: "Outdated spreadsheets, paper forms, or expensive off-the-shelf software that doesn't fit.", with: "Microsoft Power Apps to build low-code/no-code custom applications for your specific needs, like inventory management, site inspections, or employee onboarding, accessible on any device." },
        { title: 'Interactive Data Dashboards', replaces: "Static, out-of-date reports and tedious data compilation in Excel.", with: "Microsoft Power BI to connect to your data sources and create stunning, interactive dashboards. Gain real-time insights, drill down into data, and make informed decisions instantly." },
      ],
      modernAdvantage: [
        'Unlock Your Data: Make scanned documents and unstructured data fully searchable and useful.',
        'Massive Time Savings: Automate tasks that take hours and reduce them to minutes, freeing up valuable employee time.',
        'Reduced Human Error: Automation ensures consistency and accuracy in data entry and processing.',
        'Empowered Employees: Enable non-technical staff to build solutions and automate their own workflows.',
      ],
      howItWorks: "Our process starts with identifying your most impactful automation opportunities. We then design and build robust solutions using Azure AI and the Power Platform, integrating with your existing systems. We test thoroughly and deploy, providing documentation and training to empower your team.",
      components: ['Microsoft Power Platform', 'Azure AI Document Intelligence', 'Azure OpenAI Service (RAG)', 'Power Automate & Power Apps', 'Power BI', 'AI Builder', 'Custom API Connectors'],
    },
    industryExamples: [
      { industry: "Professional Services", useCase: "Automate client onboarding by using Power Automate to create dedicated SharePoint sites, send welcome emails, and assign introductory tasks in Planner whenever a new client is marked 'won' in your CRM." },
      { industry: "Retail & E-commerce", useCase: "Build a Power BI dashboard to track sales against inventory in real-time. Use AI-powered forecasting to predict stock needs and prevent stockouts of popular items, directly impacting your bottom line." },
      { industry: "Manufacturing", useCase: "Build a Power App for quality control inspections on the factory floor, allowing workers to log issues with photos, which automatically creates a ticket in the maintenance system." },
      { industry: "Finance", useCase: "Automatically process invoices by extracting key information (vendor, amount, due date) with Azure AI Document Intelligence and routing them for approval via a Power Automate workflow." },
    ],
    cta: 'Automate Your Business',
    faqs: [
        { question: "Do we need to be developers to use this?", answer: "No, and that's the beauty of it. The Microsoft Power Platform is designed for 'citizen developers.' While we build the core, complex solutions, we can also train your power users to create their own simple automations and reports, fostering a culture of innovation." },
        { question: "Is this only for large enterprises?", answer: "Not at all. Automation provides immense value to SMBs by allowing them to scale operations without proportionally increasing headcount. We can design and implement affordable, high-impact AI solutions tailored for any size business." },
    ]
  },
  {
    id: 'infrastructure-modernization',
    title: 'Infrastructure Modernization',
    pageTitle: 'Cloud Infrastructure: Beyond Storage.',
    introduction: "Is your business still anchored by on-premise servers? The costs of maintenance, the risks of hardware failure, the constant worry about ransomware, and the limitations on scalability and remote access are holding you back in a cloud-first world.",
    complication: "That aging hardware isn't just a cost center; it's a ticking time bomb. A single hardware failure can lead to days of downtime and lost revenue. A security breach could be catastrophic. You're constantly pouring money into a depreciating asset that actively increases your business risk.",
    solution: "We architect and execute a seamless transition to Microsoft Azure. This shifts your spending from unpredictable Capital Expenditure (CapEx) on hardware to a predictable, scalable Operational Expenditure (OpEx) model. We provide a foundation that is not only more secure and resilient but also infinitely scalable and cost-effective.",
    transformation: "Your infrastructure becomes a strategic asset, not a liability. You gain enterprise-grade security and reliability, the agility to scale on demand, and a predictable, operational expense model. You're free from the hardware lifecycle and empowered to focus on your core business.",
    cardImageUrl: 'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=800&auto=format&fit=crop',
    imageUrl: 'https://images.unsplash.com/photo-1590955359339-236d3289758e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    deeperDive: {
      keyFeatures: [
        { title: 'Server & Application Migration', replaces: "Physical on-premise servers requiring maintenance, cooling, and physical security.", with: "Azure Virtual Machines and App Services. We use proven methodologies and tools like Azure Migrate to 'lift and shift' or re-architect your servers and applications to run efficiently in the Azure cloud." },
        { title: 'Cloud-Native Storage & Files', replaces: "On-premise file servers and SANs with limited capacity and high maintenance.", with: "Azure Storage solutions like Azure Files for traditional file shares and Blob Storage for object data. Highly available, durable, and scalable storage that you only pay for as you use it." },
        { title: 'Advanced Backup & Disaster Recovery', replaces: "Tape backups, external hard drives, and slow, unreliable recovery processes.", with: "Azure Backup for secure, offsite, and automated backups. For critical systems, we implement Azure Site Recovery, replicating entire servers to a secondary Azure region for near-instant failover in a disaster." },
        { title: 'Cloud Security & Threat Detection', replaces: "A simple firewall and basic antivirus protection.", with: "Microsoft Defender for Cloud for a comprehensive view of your security posture and threat protection. We can also implement Microsoft Sentinel (a cloud-native SIEM) for proactive threat hunting." },
      ],
      modernAdvantage: [
        'Shift from CapEx to OpEx: Eliminate large hardware purchases and move to a predictable monthly cost.',
        'Enhanced Security: Leverage Microsoft\'s multi-billion dollar security investment for enterprise-grade protection.',
        'Business Resiliency: High availability and robust disaster recovery solutions minimize downtime.',
        'Global Scalability: Instantly scale your computing resources up or down to meet business demand.',
      ],
      howItWorks: "We begin with a comprehensive assessment of your current infrastructure using tools like Azure Migrate. We then design a tailored Azure migration strategy (e.g., rehost, refactor, rearchitect). The migration is performed in carefully planned phases to minimize disruption, followed by ongoing optimization and management.",
      components: ['Microsoft Azure IaaS & PaaS', 'Azure Migrate', 'Azure Virtual Machines', 'Azure Storage & Networking', 'Azure Backup & Site Recovery', 'Microsoft Defender for Cloud', 'Microsoft Sentinel'],
    },
    cta: 'Modernize Your Infrastructure',
     faqs: [
        { question: "Is the cloud really cheaper than our current servers?", answer: "When you factor in the total cost of ownership—including hardware refreshes, maintenance, power, cooling, and staff time—the cloud is often significantly more cost-effective. The pay-as-you-go model of Azure means you avoid large capital expenses and only pay for what you use." },
        { question: "How do you ensure our data is secure in Azure?", answer: "Azure's security is world-class. We build on that by implementing a 'least privilege' access model using Microsoft Entra ID. We also configure Microsoft Defender for Cloud to continuously monitor for threats and vulnerabilities, and can even set up Microsoft Sentinel (a cloud-native SIEM) for advanced threat hunting." },
    ]
  },
  {
    id: 'work-from-anywhere',
    title: 'Work From Anywhere',
    pageTitle: 'Secure Access: Beyond the VPN.',
    introduction: "Your team needs to work from anywhere, but traditional VPNs are slow, clunky, and a massive security risk. Once a hacker is on your VPN, they have broad access to your entire network, making them a prime target for cyberattacks.",
    complication: "Relying on a VPN creates a false sense of security. It's like having a single key that unlocks every door in your building. One compromised password or device can lead to a full-scale data breach, exposing sensitive company and client information and putting your reputation on the line.",
    solution: "We implement a modern Zero Trust Network Access (ZTNA) solution using the Cloudflare Zero Trust platform. This approach ditches the outdated VPN model entirely. Instead of trusting users on a network, we verify every single connection request to every application, ensuring only the right people get access to the right data.",
    transformation: "Your remote access becomes both seamless and hyper-secure. Your team gets faster, more reliable connections to the tools they need via the lightweight Cloudflare WARP client, while your attack surface is drastically reduced. You can confidently enable a 'work from anywhere' culture without compromising on security.",
    cardImageUrl: 'https://images.unsplash.com/photo-1586953208448-3073a032d16c?q=80&w=800&auto=format&fit=crop',
    imageUrl: 'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    deeperDive: {
      keyFeatures: [
        { title: 'VPN-less Application Access', replaces: "Slow, cumbersome, and insecure corporate VPNs.", with: "Cloudflare Zero Trust to provide secure, direct access to your internal applications (web apps, SSH, RDP) without connecting users to the entire corporate network." },
        { title: 'Granular Access Policies', replaces: "Broad network access where one breach compromises everything.", with: "Context-aware access policies. Grant access based on user identity (via Microsoft Entra ID integration), device posture, location, and more. A contractor can be given access to a single app, not the whole network." },
        { title: 'Secure Web Gateway (SWG)', replaces: "Basic web filters that fail to stop modern threats.", with: "Cloudflare's global network to protect users from malware, phishing, and other internet threats, no matter where they are connecting from. All traffic is filtered before it reaches the user." },
        { title: 'Faster User Experience', replaces: "Traffic backhauled through a central VPN concentrator, creating bottlenecks.", with: "Direct-to-application connections through Cloudflare's global edge network, resulting in a faster, more responsive experience for your remote and hybrid teams." },
      ],
      modernAdvantage: [
        'Dramatically Reduced Attack Surface: Users connect to applications, not networks, preventing lateral movement by attackers.',
        'Superior Security: Every request is verified, protecting against a wide range of modern cyber threats.',
        'Seamless User Experience: Faster, more reliable connections than traditional VPNs, with no clunky software to manage.',
        'Simplified Management: A single control plane to manage access policies for all your users and applications.',
      ],
      howItWorks: "We start by inventorying your applications and defining user groups. We then deploy the Cloudflare WARP agent to your devices and connect your applications to the Cloudflare network. Finally, we craft and enforce granular access policies with Microsoft Entra ID, and methodically decommission your legacy VPN.",
      components: ['Cloudflare Zero Trust Platform', 'Cloudflare WARP Client', 'Secure Web Gateway (SWG)', 'ZTNA Tunnels', 'Microsoft Entra ID Integration', 'Device Posture Checks', 'Policy Implementation & Rollout'],
    },
    cta: 'Secure Your Workforce',
    faqs: [
        { question: "Is this difficult for our employees to use?", answer: "No, it's significantly easier. Once the lightweight Cloudflare WARP agent is installed on their device, it works silently in the background. Users simply access their applications through a secure portal or directly via their browser, without the hassle of connecting and disconnecting from a VPN." },
        { question: "Does this work for applications still on our on-premise servers?", answer: "Yes. Cloudflare's connector technology allows you to securely expose on-premise applications to authorized users through the Zero Trust platform without opening inbound ports on your firewall, making it a perfect solution for hybrid environments." },
    ]
  },
];

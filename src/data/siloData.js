// Comprehensive Silo Information Architecture & Content for SECERA

export const SERVICES_DATA = [
  {
    id: "vapt-penetration-testing",
    title: "VAPT & Penetration Testing",
    shortTitle: "VAPT",
    slug: "/services/vapt-penetration-testing",
    icon: "ShieldAlert",
    tagline: "Offensive Security & Real-World Adversary Simulation",
    description: "Battle-tested penetration testing uncovering critical business logic flaws, zero-days, and perimeter weaknesses before threat actors exploit them.",
    highlightMetric: "99.4%",
    metricLabel: "Logic Flaw Catch Rate",
    overview: "Our Penetration Testing & Vulnerability Assessment (VAPT) practice simulates sophisticated nation-state and criminal threat actors. Moving far beyond automated scanning, our certified red teamers perform in-depth manual exploitation of complex business logic, authorization matrices, and perimeter defense systems.",
    subServices: [
      {
        id: "web-application-penetration-testing",
        title: "Web Application Penetration Testing",
        slug: "/services/vapt-penetration-testing/web-application-penetration-testing",
        shortDesc: "In-depth manual assessment of OWASP Top 10, complex business logic flaws, broken object level authorization (BOLA), and race conditions in modern single-page apps.",
        whatItIs: "A deep manual security assessment of web applications, SPAs, multi-tenant SaaS platforms, and enterprise portals to detect vulnerabilities that automated scanners miss.",
        whoItsFor: "SaaS providers, financial applications, healthcare portals, e-commerce platforms, and enterprises deploying public-facing or internal web assets.",
        process: [
          { step: "01", name: "Target Reconnaissance", desc: "Passive/active surface discovery, tech-stack fingerprinting, API mapping, and client-side architecture review." },
          { step: "02", name: "Threat Modeling & Auth Matrix", desc: "Mapping privilege matrices, multi-tenant boundaries, session tokens, and cryptographic handshakes." },
          { step: "03", name: "Manual Exploitation & PoC", desc: "Weaponizing injection points, IDOR/BOLA bypasses, SSRF attacks, and custom business logic subversions." },
          { step: "04", name: "Risk Prioritization & Reporting", desc: "Generating executive summary, CVSS v3.1 technical proofs-of-concept, and line-of-code remediation." },
          { step: "05", name: "Verification Re-Testing", desc: "Validating engineering fixes with zero extra charges to certify vulnerability eradication." }
        ],
        deliverables: [
          "Executive Summary for Board & Stakeholders with Attestation Letter",
          "Comprehensive Technical Report with CVSS v3.1 Scores & Reproducible PoCs",
          "Raw Vulnerability Data & JSON/CSV Artifacts for Jira/GitHub Issues",
          "Live Remediation Consultation Call with Lead Red Team Engineers",
          "Certificate of Completed Security Assessment (SOC 2 & ISO compliant)"
        ],
        faqs: [
          { q: "How long does a Web Application Penetration Test take?", a: "Standard assessments take 5 to 10 business days depending on asset complexity, number of dynamic roles, and API endpoint volume." },
          { q: "Will penetration testing disrupt our production services?", a: "No. We coordinate non-destructive testing windows, employ strict rate limiting, and can execute tests on staging/UAT environments." },
          { q: "Do you test against custom business logic vulnerabilities?", a: "Yes. 80% of our test duration is dedicated to manual business logic verification (e.g. price tampering, state machine skips, authorization bypasses) which scanners cannot detect." }
        ]
      },
      {
        id: "network-penetration-testing",
        title: "Network Penetration Testing",
        slug: "/services/vapt-penetration-testing/network-penetration-testing",
        shortDesc: "Full-spectrum offensive testing across network segments, perimeter firewalls, routing protocols, and active directory infrastructure.",
        whatItIs: "Rigorous simulation of adversary tactics to identify misconfigured switches, outdated firmware, insecure protocols, and privilege escalation pathways.",
        whoItsFor: "Enterprises with hybrid on-prem/cloud networks, data centers, branch offices, and distributed corporate WANs.",
        process: [
          { step: "01", name: "Network Mapping & Port Enumeration", desc: "Discovering live hosts, listening daemons, unauthenticated services, and legacy endpoints." },
          { step: "02", name: "Service Exploitation & Credential Spraying", desc: "Attacking weak cipher suites, default credentials, VPN vulnerabilities, and SNMP leaks." },
          { step: "03", name: "Lateral Movement & Pivoting", desc: "Moving across VLANs, leveraging compromised machines, and cracking Active Directory trusts." },
          { step: "04", name: "Remediation & Hardening Roadmap", desc: "Prioritizing port closures, firewall rule adjustments, and zero-trust network segmentation." }
        ],
        deliverables: [
          "Network Topology Threat Heatmap",
          "Active Directory Attack Path Visualization",
          "Detailed Exploit Artifacts & Configuration Remediation Steps",
          "Executive Risk Matrix"
        ],
        faqs: [
          { q: "What is the difference between external and internal network tests?", a: "External tests target your public IP footprint from the outside internet; internal tests simulate an insider threat or an attacker who has already breached the perimeter." }
        ]
      },
      {
        id: "external-penetration-testing",
        title: "External Penetration Testing",
        slug: "/services/vapt-penetration-testing/external-penetration-testing",
        shortDesc: "Assessing all publicly exposed digital assets, domain records, shadow IT, mail servers, and external gateway interfaces.",
        whatItIs: "A black-box or grey-box assessment simulating an external cyber criminal probing internet-facing infrastructure for initial access vectors.",
        whoItsFor: "Organizations seeking continuous perimeter security and compliance validation for external attack surfaces.",
        process: [
          { step: "01", name: "OSINT & Attack Surface Enumeration", desc: "Scraping exposed subdomains, leaked credentials on dark web repositories, and ASN ranges." },
          { step: "02", name: "Perimeter Vulnerability Analysis", desc: "Testing edge routers, WAF configurations, VPN gateways, and DNS configuration weaknesses." },
          { step: "03", name: "Exploitation & Initial Access Simulation", desc: "Executing precision payloads to achieve remote command execution or sensitive data exfiltration." }
        ],
        deliverables: [
          "Attack Surface Exposure Index",
          "Perimeter Weakness Inventory",
          "Defensive WAF & Firewall Tuning Guide"
        ],
        faqs: [
          { q: "Is OSINT included in external penetration testing?", a: "Yes, we evaluate leaked employee credentials, exposed code repositories, and DNS anomalies during reconnaissance." }
        ]
      },
      {
        id: "internal-penetration-testing",
        title: "Internal Penetration Testing",
        slug: "/services/vapt-penetration-testing/internal-penetration-testing",
        shortDesc: "Simulating assumed-breach scenarios, rogue insiders, and compromised workstations to measure lateral spread and data blast radius.",
        whatItIs: "Testing your organization's internal network from within to determine how far an attacker can move once an employee workstation or VPN credential is compromised.",
        whoItsFor: "Mature security teams, enterprises preparing for SOC 2 / ISO 27001, and organizations guarding proprietary IP or sensitive financial data.",
        process: [
          { step: "01", name: "Assumed Breach Staging", desc: "Connecting from a non-privileged internal endpoint or guest network segment." },
          { step: "02", name: "Internal Recon & Kerberoasting", desc: "Querying Active Directory, hunting for unconstrained delegation, and capturing service tickets." },
          { step: "03", name: "Domain Escalation & Crown Jewel Access", desc: "Compromising Domain Admin rights, extracting sensitive databases, and bypassing internal EDR." }
        ],
        deliverables: [
          "AD Security Architecture Audit",
          "Privilege Escalation Graph",
          "Zero-Trust Segmentation Recommendations"
        ],
        faqs: [
          { q: "Do you test our Endpoint Detection and Response (EDR) during internal tests?", a: "Yes, we evaluate whether internal alerts trigger SOC responses during credential harvesting and lateral movement." }
        ]
      }
    ]
  },
  {
    id: "application-product-security",
    title: "Application & Product Security",
    shortTitle: "AppSec & Product",
    slug: "/services/application-product-security",
    icon: "Code2",
    tagline: "Shift-Left Engineering & Full-Lifecycle Software Resilience",
    description: "End-to-end security for modern codebases, REST/GraphQL APIs, mobile ecosystems, and hardware-integrated software stacks.",
    highlightMetric: "100%",
    metricLabel: "Code Level Remediation",
    overview: "Our Application & Product Security suite integrates security directly into your software development lifecycle (SDLC). We review source code, dissect microservices, audit GraphQL/REST gateways, and reverse-engineer mobile binaries to ensure security is built into the product DNA.",
    subServices: [
      {
        id: "application-security-testing",
        title: "Application Security Testing",
        slug: "/services/application-product-security/application-security-testing",
        shortDesc: "Comprehensive SAST, DAST, and manual architectural inspection for mission-critical software.",
        whatItIs: "Full-lifecycle assessment combining automated static/dynamic tooling with rigorous manual code inspection and logical verification.",
        whoItsFor: "Engineering teams building high-velocity software with continuous deployment pipelines.",
        process: [
          { step: "01", name: "Architecture Assessment", desc: "Evaluating data flows, boundary controls, and encryption mechanisms across microservices." },
          { step: "02", name: "Static & Dynamic Analysis", desc: "Running AST tooling augmented by custom rulesets tailored to your framework." },
          { step: "03", name: "Manual Deep-Dive", desc: "Verifying all findings manually to eliminate false positives and reveal hidden logic gaps." }
        ],
        deliverables: ["Framework-specific Remediation Code Snippets", "CI/CD Integration Security Matrix"],
        faqs: [{ q: "How do you eliminate false positives?", a: "Every finding is manually reproduced and validated in an isolated testing environment by our senior researchers." }]
      },
      {
        id: "api-security-testing",
        title: "API Security Testing",
        slug: "/services/application-product-security/api-security-testing",
        shortDesc: "Deep evaluation of REST, GraphQL, gRPC, and WebSocket interfaces against OWASP API Top 10.",
        whatItIs: "Specialized offensive testing targeting Broken Object Level Authorization (BOLA), Broken Object Property Level Authorization (BOPLA), mass assignment, and rate limiting bypasses.",
        whoItsFor: "Fintechs, B2B SaaS platforms, mobile backends, and microservice architectures communicating via public or partner APIs.",
        process: [
          { step: "01", name: "Endpoint & Schema Enumeration", desc: "Importing OpenAPI / Swagger specs and discovering undocumented zombie/shadow APIs." },
          { step: "02", name: "Authorization & Token Tampering", desc: "Manipulating JWT claims, forging API keys, and testing cross-account data leakage." },
          { step: "03", name: "Payload Injection & Rate Limit Fuzzing", desc: "Injecting malformed payloads, testing GraphQL query depth attacks, and DoS resilience." }
        ],
        deliverables: ["OWASP API Security Scorecard", "Postman / Curl Replay Scripts", "API Gateway Policy Rules"],
        faqs: [{ q: "Do you require OpenAPI / Swagger documentation?", a: "While Swagger specs accelerate testing, our team also performs black-box endpoint discovery and reverse engineering." }]
      },
      {
        id: "mobile-application-penetration-testing",
        title: "Mobile Application Penetration Testing",
        slug: "/services/application-product-security/mobile-application-penetration-testing",
        shortDesc: "Static and dynamic analysis of iOS and Android applications, binary protections, and mobile API communication.",
        whatItIs: "Evaluating mobile binaries for local storage leakage, insecure IPC, reverse engineering risks, jailbreak/root bypasses, and SSL pinning evasion.",
        whoItsFor: "Mobile banking apps, crypto wallets, consumer apps, healthcare trackers, and enterprise enterprise mobility solutions.",
        process: [
          { step: "01", name: "Binary Reverse Engineering", desc: "Decompiling APKs/IPAs, reviewing source obfuscation, and auditing hardcoded keys." },
          { step: "02", name: "Runtime Dynamic Instrumentation", desc: "Hooking runtime methods via Frida/Objection to bypass root detection and biometric auth." },
          { step: "03", name: "Local Data & Keychain Audit", desc: "Inspecting SQLite databases, shared preferences, and encrypted keystores for sensitive PII." }
        ],
        deliverables: ["OWASP MASVS Compliance Report", "Binary Hardening Recommendations", "Runtime Exploit Proofs"],
        faqs: [{ q: "Do you test on physical devices?", a: "Yes, we test on rooted/jailbroken and non-jailbroken physical iOS and Android hardware across multiple OS versions." }]
      },
      {
        id: "secure-code-review",
        title: "Secure Code Review",
        slug: "/services/application-product-security/secure-code-review",
        shortDesc: "Line-by-line manual code audit in Python, Go, Node.js, Java, Rust, C#, and TypeScript.",
        whatItIs: "Human-led inspection of source repositories to identify subtle cryptographic flaws, memory leaks, concurrency race conditions, and backdoors.",
        whoItsFor: "High-security products, smart contract architectures, payment gateways, and core cryptographic systems.",
        process: [
          { step: "01", name: "Threat Modeling Codebase", desc: "Mapping data inputs, sanitization pipelines, and database abstraction layers." },
          { step: "02", name: "Manual Code Walkthrough", desc: "Scrutinizing authentication handlers, crypto primitives, and authorization middleware." },
          { step: "03", name: "Pull Request & Patch Drafting", desc: "Providing exact Git patch diffs and pull requests ready for engineering merge." }
        ],
        deliverables: ["Line-by-Line Code Audit Report", "Ready-to-Merge Security Patches", "Developer Security Guidelines"],
        faqs: [{ q: "How do you protect our proprietary source code?", a: "We work under strict NDAs, use encrypted ephemeral containers, and can perform the audit directly on your self-hosted GitLab/GitHub instance." }]
      },
      {
        id: "product-security-assessment",
        title: "Product Security Assessment",
        slug: "/services/application-product-security/product-security-assessment",
        shortDesc: "Holistic evaluation of IoT devices, hardware controllers, firmware, and connected ecosystems.",
        whatItIs: "Complete threat analysis of consumer and industrial hardware devices, firmware binaries, and cloud sync protocols.",
        whoItsFor: "IoT hardware manufacturers, medical device creators, smart automotive systems, and consumer electronics.",
        process: [
          { step: "01", name: "Firmware Extraction & Emulation", desc: "Dumping flash memory, analyzing bootloaders, and emulating firmware architectures." },
          { step: "02", name: "Hardware Interface Probing", desc: "Analyzing UART, JTAG, and I2C debug ports for root shell access." },
          { step: "03", name: "Cloud & App Sync Validation", desc: "Testing MQTT, BLE, and cloud telemetry transmission security." }
        ],
        deliverables: ["Hardware & Firmware Security Ledger", "Hardware Tamper-Resistance Analysis"],
        faqs: [{ q: "Do we need to ship physical devices to you?", a: "Yes, physical hardware units can be shipped to our secure hardware analysis lab." }]
      }
    ]
  },
  {
    id: "cloud-infrastructure-security",
    title: "Cloud & Infrastructure Security",
    shortTitle: "Cloud & Infra",
    slug: "/services/cloud-infrastructure-security",
    icon: "Cloud",
    tagline: "Immutable Defense for AWS, Azure, GCP & Kubernetes",
    description: "Hardening cloud-native environments against IAM privilege escalation, bucket leaks, cluster escapes, and lateral network compromise.",
    highlightMetric: "Zero",
    metricLabel: "Cloud Misconfiguration Tolerated",
    overview: "Modern cloud architectures introduce complex permission graphs and distributed attack surfaces. SECERA's cloud specialists conduct exhaustive audits of AWS, GCP, Azure, and Kubernetes infrastructures to eradicate misconfigurations and establish robust Zero-Trust posture.",
    subServices: [
      {
        id: "cloud-security-assessment",
        title: "Cloud Security Assessment",
        slug: "/services/cloud-infrastructure-security/cloud-security-assessment",
        shortDesc: "In-depth audit of AWS, Azure, and Google Cloud IAM roles, storage policies, VPC peering, and KMS keys.",
        whatItIs: "Configuration and threat audit across all cloud service providers against CIS Cloud Benchmarks and cloud-specific attack techniques.",
        whoItsFor: "Cloud-first companies, multi-cloud enterprises, and SaaS providers.",
        process: [
          { step: "01", name: "IAM & Role Graph Analysis", desc: "Discovering over-permissive IAM policies, cross-account assumptions, and privilege escalation paths." },
          { step: "02", name: "Data Store & Bucket Audit", desc: "Testing S3, Blob Storage, and database configurations for unauthorized exposure." },
          { step: "03", name: "Cloud Threat Simulation", desc: "Simulating compromised credentials to verify guardrails, AWS GuardDuty, and Azure Sentinel." }
        ],
        deliverables: ["CIS Cloud Benchmark Compliance Matrix", "IAM Policy Least-Privilege Terraform Templates"],
        faqs: [{ q: "Do we need to provide admin cloud access?", a: "We only require read-only / SecurityAuditor IAM permissions for the configuration audit, and scoped roles for simulation." }]
      },
      {
        id: "infrastructure-security-assessment",
        title: "Infrastructure Security Assessment",
        slug: "/services/cloud-infrastructure-security/infrastructure-security-assessment",
        shortDesc: "Securing bare-metal servers, hypervisors, load balancers, and Linux/Windows enterprise fleets.",
        whatItIs: "Deep evaluation of core OS configurations, patch management, kernel parameters, and remote access systems.",
        whoItsFor: "Data center operators, hybrid enterprise IT infrastructures, and private cloud providers.",
        process: [
          { step: "01", name: "Host Baseline Review", desc: "Auditing SSH/RDP policies, PAM configurations, and kernel sysctl parameters." },
          { step: "02", name: "Privilege Escalation Testing", desc: "Checking SUID binaries, cron jobs, vulnerable drivers, and service accounts." }
        ],
        deliverables: ["Host Hardening Ansible / Puppet Playbooks", "OS Baseline Security Report"],
        faqs: [{ q: "Can this be run against air-gapped systems?", a: "Yes, we provide specialized offline auditing scripts and on-premise review protocols." }]
      },
      {
        id: "security-configuration-review",
        title: "Security Configuration Review",
        slug: "/services/cloud-infrastructure-security/security-configuration-review",
        shortDesc: "Auditing WAFs, API gateways, database clusters, Kafka, Redis, and Elasticsearch clusters.",
        whatItIs: "Validating configuration posture for middleware, databases, caches, and networking equipment.",
        whoItsFor: "High-scale platforms handling millions of transactions daily.",
        process: [
          { step: "01", name: "Middleware & DB Audit", desc: "Reviewing database TLS, encryption-at-rest, access control, and logging." },
          { step: "02", name: "WAF & CDN Rule Optimization", desc: "Tuning Cloudflare, AWS WAF, or Akamai rules against sophisticated bypass vectors." }
        ],
        deliverables: ["Middleware Hardening Specifications", "WAF Rule Tuning Matrix"],
        faqs: [{ q: "Do you review database encryption keys?", a: "Yes, including KMS envelope encryption and key rotation policies." }]
      },
      {
        id: "security-hardening",
        title: "Security Hardening",
        slug: "/services/cloud-infrastructure-security/security-hardening",
        shortDesc: "Actionable hardening for Kubernetes clusters, Docker daemons, and operating systems.",
        whatItIs: "Hands-on implementation and automation of security baselines to prevent container escapes, root execution, and network sniffing.",
        whoItsFor: "DevOps and Platform Engineering teams moving to zero-trust container environments.",
        process: [
          { step: "01", name: "K8s RBAC & Pod Security Standards", desc: "Enforcing PSS Restricted profiles, NetworkPolicies, and Admission Controllers." },
          { step: "02", name: "Container Image Hardening", desc: "Eliminating root users, stripping debug binaries, and creating minimal distroless images." }
        ],
        deliverables: ["Kubernetes Security Policies (Kyverno / OPA Gatekeeper)", "Hardened Dockerfile Baselines"],
        faqs: [{ q: "Do you support Kubernetes on EKS, GKE, and self-hosted?", a: "Yes, we support all managed and self-managed Kubernetes distributions." }]
      }
    ]
  },
  {
    id: "cybersecurity-compliance",
    title: "Cybersecurity Compliance",
    shortTitle: "Compliance & Audits",
    slug: "/services/cybersecurity-compliance",
    icon: "FileCheck2",
    tagline: "Frictionless Audit Readiness & Continuous Governance",
    description: "Accelerate your certification for PCI DSS v4.0, ISO 27001:2022, SOC 2 Type II, HIPAA, and GDPR with zero guesswork.",
    highlightMetric: "100%",
    metricLabel: "First-Time Audit Pass Rate",
    overview: "Compliance is not just a checkbox; it is a competitive moat. SECERA bridges technical cybersecurity controls with rigorous compliance standards, translating engineering realities into audit-ready documentation and automated evidence pipelines.",
    subServices: [
      {
        id: "pci-dss-compliance",
        title: "PCI DSS Compliance",
        slug: "/services/cybersecurity-compliance/pci-dss-compliance",
        shortDesc: "Full readiness, scope reduction, and technical penetration testing for PCI DSS v4.0.1 requirements.",
        whatItIs: "Comprehensive guidance and mandatory annual penetration testing to achieve and maintain Payment Card Industry Data Security Standard certification.",
        whoItsFor: "Payment processors, fintechs, merchants, payment gateways, and banking infrastructure providers.",
        process: [
          { step: "01", name: "Cardholder Data Environment (CDE) Scoping", desc: "Mapping cardholder data flows and identifying opportunities for tokenization scope reduction." },
          { step: "02", name: "Gap Assessment & Technical Testing", desc: "Executing required external/internal VAPT, ASV scans, segmentation tests, and code reviews." },
          { step: "03", name: "Report on Compliance (RoC) Preparation", desc: "Compiling formal evidence packages and Attestation of Compliance (AoC) documentation." }
        ],
        deliverables: ["PCI DSS v4.0 Technical Gap Analysis", "Segmentation Validation Test Report", "Audit-Ready AoC Package"],
        faqs: [{ q: "What changed in PCI DSS v4.0?", a: "Version 4.0 introduces mandatory multi-factor authentication for all CDE access, stricter e-commerce script monitoring, and customized validation approaches." }]
      },
      {
        id: "iso-27001",
        title: "ISO 27001 Certification Readiness",
        slug: "/services/cybersecurity-compliance/iso-27001",
        shortDesc: "End-to-end ISMS design, risk management implementation, and lead auditor prep under ISO/IEC 27001:2022.",
        whatItIs: "Establishing an Information Security Management System (ISMS) tailored to your operational realities to attain global ISO 27001 certification.",
        whoItsFor: "SaaS companies, technology service providers, and global enterprises selling to enterprise customers.",
        process: [
          { step: "01", name: "ISMS Framework Alignment", desc: "Defining ISMS scope, Statement of Applicability (SoA), and Information Security Policy Suite." },
          { step: "02", name: "Annex A Controls Implementation", desc: "Operationalizing the 93 controls across organizational, people, physical, and technological themes." },
          { step: "03", name: "Internal Mock Audit", desc: "Conducting rigorous mock Stage 1 and Stage 2 audits before the external registrar assessment." }
        ],
        deliverables: ["Customized ISMS Policy Pack (30+ Policies)", "Statement of Applicability (SoA)", "Risk Treatment Plan (RTP)"],
        faqs: [{ q: "How long does ISO 27001 preparation take?", a: "Typical readiness takes 6 to 12 weeks depending on current maturity and organization size." }]
      },
      {
        id: "soc-2",
        title: "SOC 2 Type I & Type II",
        slug: "/services/cybersecurity-compliance/soc-2",
        shortDesc: "Trust Services Criteria alignment (Security, Availability, Confidentiality) with automated evidence collection.",
        whatItIs: "Structuring your technical controls and operational workflows to obtain clean SOC 2 Type I and Type II auditor attestation reports.",
        whoItsFor: "B2B SaaS companies, cloud vendors, and data processing platforms closing enterprise deals.",
        process: [
          { step: "01", name: "Trust Criteria Scoping", desc: "Selecting relevant criteria (Security, Availability, Confidentiality, Processing Integrity, Privacy)." },
          { step: "02", name: "Control Mapping & Tool Integration", desc: "Configuring continuous compliance tools (Vanta, Drata, Secureframe) and cloud monitoring." },
          { step: "03", name: "Observation Window Support", desc: "Guiding your team through the 3 to 12 month audit observation period with continuous evidence QA." }
        ],
        deliverables: ["SOC 2 Control Matrix & Evidence Repository", "SOC 2 Penetration Test Report", "Auditor-Facing Defense Support"],
        faqs: [{ q: "What is the difference between Type I and Type II?", a: "Type I validates control design at a single point in time; Type II evaluates operational effectiveness over a sustained period (typically 3 to 6 months)." }]
      }
    ]
  },
  {
    id: "cyber-risk-assessment",
    title: "Cyber Risk Assessment",
    shortTitle: "Risk & Governance",
    slug: "/services/cyber-risk-assessment",
    icon: "Activity",
    tagline: "Quantified Risk Intelligence & Threat Modeling",
    description: "Transforming technical vulnerabilities into quantified financial and operational business risk metrics for executive leadership.",
    highlightMetric: "360°",
    metricLabel: "Enterprise Risk Visibility",
    overview: "Security leaders must communicate risk in the language of the boardroom. SECERA provides rigorous risk modeling, vendor ecosystem scrutiny, and architectural reviews aligned with NIST CSF, FAIR, and ISO 31000 frameworks.",
    subServices: [
      {
        id: "cybersecurity-risk-assessment",
        title: "Cybersecurity Risk Assessment",
        slug: "/services/cyber-risk-assessment/cybersecurity-risk-assessment",
        shortDesc: "Quantitative enterprise threat assessments evaluating likelihood, impact, and defensive resilience.",
        whatItIs: "Structured analysis of organizational threat exposure, asset criticality, and defensive capabilities.",
        whoItsFor: "CISOs, CTOs, and Risk Committees preparing annual security strategies and board presentations.",
        process: [
          { step: "01", name: "Asset & Crown Jewel Identification", desc: "Cataloging core data assets, revenue-generating engines, and operational dependencies." },
          { step: "02", name: "Threat Scenario Simulation", desc: "Evaluating ransomware resilience, supply chain compromise, and credential stuffing vectors." },
          { step: "03", name: "Financial Risk Quantification (FAIR)", desc: "Translating technical risk into annualized loss expectancy (ALE) dollar figures." }
        ],
        deliverables: ["Enterprise Risk Heatmap & Matrix", "Financial Impact Loss Model", "3-Year Strategic Cybersecurity Roadmap"],
        faqs: [{ q: "What frameworks do you use?", a: "We primarily utilize NIST CSF 2.0, ISO 27005, and the FAIR quantitative risk modeling standard." }]
      },
      {
        id: "third-party-risk-assessment",
        title: "Third-Party & Vendor Risk Assessment",
        slug: "/services/cyber-risk-assessment/third-party-risk-assessment",
        shortDesc: "Vetting vendor supply chains, SaaS integrations, and third-party API exposure.",
        whatItIs: "Systematic auditing of your supply chain partners and software vendors to prevent vendor-induced security breaches.",
        whoItsFor: "Enterprises with extensive vendor ecosystems and outsourced engineering teams.",
        process: [
          { step: "01", name: "Vendor Tiering & Classification", desc: "Segmenting vendors based on data access level and operational criticality." },
          { step: "02", name: "Security Posture Verification", desc: "Auditing vendor SOC 2 reports, penetration tests, and technical security questionnaires." }
        ],
        deliverables: ["Vendor Risk Scoring Dashboard", "Third-Party Governance Policy"],
        faqs: [{ q: "Can SECERA conduct direct penetration tests on vendor products?", a: "Yes, provided proper authorization and testing agreements are executed with the third-party." }]
      },
      {
        id: "security-architecture-review",
        title: "Security Architecture Review",
        slug: "/services/cyber-risk-assessment/security-architecture-review",
        shortDesc: "Deep-dive architectural review of network topologies, identity systems, and cryptographic boundaries.",
        whatItIs: "Strategic assessment of high-level system designs to ensure defensibility, isolation, and zero-trust principles before code is written.",
        whoItsFor: "Architects and engineering leads designing new cloud platforms or re-architecting legacy monoliths.",
        process: [
          { step: "01", name: "STRIDE Threat Modeling", desc: "Identifying Spoofing, Tampering, Repudiation, Information Disclosure, DoS, and Elevation of Privilege risks." },
          { step: "02", name: "Trust Boundary Validation", desc: "Auditing ingress/egress filtering, service mesh mTLS, and secrets management." }
        ],
        deliverables: ["Architectural Threat Model Blueprint", "Security Design Principles Document"],
        faqs: [{ q: "When is the best time for an architecture review?", a: "During the design or pre-production sprint, saving significant re-engineering costs later." }]
      },
      {
        id: "vulnerability-management",
        title: "Vulnerability Management Program",
        slug: "/services/cyber-risk-assessment/vulnerability-management",
        shortDesc: "Continuous asset discovery, vulnerability prioritization, SLA tracking, and remediation workflows.",
        whatItIs: "Transforming ad-hoc scanning into an automated, continuous vulnerability lifecycle management program.",
        whoItsFor: "Growing organizations needing scalable security operations without expanding headcount.",
        process: [
          { step: "01", name: "Continuous Asset Discovery", desc: "Automating discovery of new shadow assets, cloud instances, and subdomains." },
          { step: "02", name: "Risk-Based Prioritization", desc: "Correlating CVSS scores with EPSS (Exploit Prediction Scoring System) and threat intelligence." }
        ],
        deliverables: ["Automated Vulnerability Dashboard Setup", "Remediation SLA Policy & Escalation Matrix"],
        faqs: [{ q: "Do you integrate with Jira and GitHub?", a: "Yes, we build bi-directional synchronization with your issue tracking and CI/CD tools." }]
      }
    ]
  },
  {
    id: "devsecops-security",
    title: "DevSecOps Security",
    shortTitle: "DevSecOps",
    slug: "/services/devsecops-security",
    icon: "GitBranch",
    tagline: "Automated Pipeline Guardrails & Infrastructure-as-Code Audits",
    description: "Embedding automated SAST, DAST, secrets scanning, and container verification into GitLab, GitHub Actions, and Jenkins pipelines.",
    highlightMetric: "<2min",
    metricLabel: "CI/CD Pipeline Security Gate Latency",
    overview: "Speed should never sacrifice security. SECERA builds frictionless DevSecOps pipelines that empower developers with real-time feedback in pull requests, automated dependency scanning, and zero-friction security gates.",
    subServices: [
      {
        id: "ci-cd-pipeline-hardening",
        title: "CI/CD Pipeline Security Hardening",
        slug: "/services/devsecops-security",
        shortDesc: "Securing runner environments, build artifacts, and deployment secrets against supply chain attacks.",
        whatItIs: "Auditing build systems, deployment pipelines, and third-party dependencies to ensure software supply chain integrity.",
        whoItsFor: "Modern engineering teams practicing continuous integration and continuous deployment.",
        process: [
          { step: "01", name: "Pipeline Architecture Audit", desc: "Reviewing GitHub Actions, GitLab CI, and runner privilege models." },
          { step: "02", name: "Automated Security Gate Implementation", desc: "Integrating Semgrep, Trufflehog, and Trivy directly into PR checks with zero noise." }
        ],
        deliverables: ["Production-Ready CI/CD Security Workflows", "Software Bill of Materials (SBOM) Generation Pipeline"],
        faqs: [{ q: "Will DevSecOps gates slow down our pull request merges?", a: "No. We implement asynchronous scans and optimized rule sets that execute in under 90 seconds." }]
      }
    ]
  },
  {
    id: "data-protection",
    title: "Data Protection & Privacy",
    shortTitle: "Data Protection",
    slug: "/services/data-protection",
    icon: "Lock",
    tagline: "Zero-Knowledge Encryption & Global Privacy Architecture",
    description: "Safeguarding PII, PHI, and financial records with end-to-end cryptographic architecture, DLP systems, and privacy regulation compliance.",
    highlightMetric: "256-bit",
    metricLabel: "Hardware-Enforced Cryptography",
    overview: "Data is your most valuable asset and your greatest liability. We design resilient data protection strategies encompassing envelope encryption, tokenization, database rights management, and automated Data Loss Prevention (DLP).",
    subServices: [
      {
        id: "cryptographic-architecture",
        title: "Data Encryption & Privacy Engineering",
        slug: "/services/data-protection",
        shortDesc: "Implementing envelope encryption, HSM key management, and privacy-enhancing technologies.",
        whatItIs: "Engineering comprehensive encryption-at-rest, encryption-in-transit, and field-level tokenization.",
        whoItsFor: "Enterprises handling sensitive customer records, biometric data, and health information.",
        process: [
          { step: "01", name: "Data Discovery & Classification", desc: "Locating and classifying sensitive data across databases, object storage, and memory stores." },
          { step: "02", name: "Key Management & HSM Architecture", desc: "Implementing AWS KMS, HashiCorp Vault, or Azure Key Vault with automatic rotation." }
        ],
        deliverables: ["Cryptographic Architecture Blueprint", "DLP Enforcement Policies"],
        faqs: [{ q: "Can you help us comply with GDPR and CCPA technical controls?", a: "Yes, we design technical deletion, consent logging, and data anonymization systems." }]
      }
    ]
  }
];

export const INDUSTRIES_DATA = [
  {
    id: "fintech-cybersecurity",
    title: "Fintech & Banking",
    slug: "/industries/fintech-cybersecurity",
    icon: "Landmark",
    heroHeadline: "Military-Grade Defense for High-Volume Financial Systems",
    summary: "Protecting digital banks, neobanks, payment rails, and wealth management platforms against transaction manipulation, API exploitation, and account takeovers.",
    risks: [
      "Broken Object Level Authorization (BOLA) leading to unauthorized fund transfers",
      "API parameter tampering in real-time settlement rails",
      "Sophisticated credential stuffing & MFA bypass techniques",
      "Regulatory non-compliance penalties under PCI DSS v4.0 and central banking regulations"
    ],
    recommendedServices: [
      "Web Application Penetration Testing",
      "API Security Testing",
      "PCI DSS Compliance",
      "Cyber Risk Assessment"
    ],
    caseStudySnippet: "How SECERA uncovered a critical race condition in a Tier-1 Fintech payment switch, preventing potential multi-million dollar ledger discrepancies."
  },
  {
    id: "payment-security",
    title: "Payment Processors & Gateways",
    slug: "/industries/payment-security",
    icon: "CreditCard",
    heroHeadline: "Bulletproof Cardholder Data Environments & Merchant Rails",
    summary: "Zero-compromise security testing for card tokenization engines, POS hardware terminals, and payment aggregator infrastructure.",
    risks: [
      "Magecart-style client-side JavaScript injection on checkout pages",
      "Cryptographic key exposure in HSM middleware",
      "Man-in-the-middle attacks on webhooks and payment settlement notifications"
    ],
    recommendedServices: [
      "PCI DSS Compliance",
      "Web Application Penetration Testing",
      "Secure Code Review",
      "Cloud Security Assessment"
    ],
    caseStudySnippet: "Scoped and audited a global payment gateway processing $4B+ annually, achieving 100% first-pass PCI DSS v4.0 certification."
  },
  {
    id: "saas-cybersecurity",
    title: "B2B SaaS & Cloud Platforms",
    slug: "/industries/saas-cybersecurity",
    icon: "Layers",
    heroHeadline: "Multi-Tenant Isolation & Enterprise Deal Acceleration",
    summary: "Empowering fast-growing SaaS startups and enterprise platforms to close Fortune 500 deals by eliminating multi-tenant data leaks and passing security reviews.",
    risks: [
      "Cross-tenant data exposure through flawed database queries",
      "Over-permissive OAuth scopes and third-party webhook exploitation",
      "SOC 2 Type II audit roadblocks delaying 7-figure enterprise enterprise sales cycles"
    ],
    recommendedServices: [
      "Web Application Penetration Testing",
      "SOC 2 Compliance",
      "API Security Testing",
      "Cloud Security Assessment"
    ],
    caseStudySnippet: "Enabled an AI SaaS scaleup to remediate 14 authorization vulnerabilities in 7 days, unblocking a key Fortune 50 enterprise contract."
  },
  {
    id: "ecommerce-cybersecurity",
    title: "E-Commerce & Retail",
    slug: "/industries/ecommerce-cybersecurity",
    icon: "ShoppingBag",
    heroHeadline: "High-Traffic Resilience & Cart Integrity Protection",
    summary: "Defending global e-commerce storefronts against coupon tampering, inventory hoarding bots, price manipulations, and customer PII theft.",
    risks: [
      "Price and currency parameter tampering during cart checkout",
      "Automated inventory scraping and bot-driven denial of inventory",
      "Supply-chain malware injection into analytics and tracking scripts"
    ],
    recommendedServices: [
      "Web Application Penetration Testing",
      "External Penetration Testing",
      "Data Protection",
      "Vulnerability Management"
    ],
    caseStudySnippet: "Protected a retail enterprise during peak Black Friday traffic by pre-emptively securing shopping cart APIs and edge CDN configurations."
  },
  {
    id: "startup-cybersecurity",
    title: "Startups & Scaleups",
    slug: "/industries/startup-cybersecurity",
    icon: "Rocket",
    heroHeadline: "Rapid Scoping, Fixed Budgets, Fast Turnarounds",
    summary: "Pragmatic cybersecurity assessments designed specifically for seed-to-Series-B tech startups preparing for investor due diligence and enterprise pilot rollouts.",
    risks: [
      "Failed enterprise vendor security questionnaires holding back product launches",
      "Unrestricted cloud IAM keys exposed in public git histories",
      "Lack of formal security documentation for investors and enterprise buyers"
    ],
    recommendedServices: [
      "Web Application Penetration Testing",
      "SOC 2 Compliance",
      "Secure Code Review"
    ],
    caseStudySnippet: "Delivered a comprehensive VAPT assessment and verified remediation within 5 business days for a Series-A healthtech startup."
  },
  {
    id: "product-company-security",
    title: "Connected Devices & IoT Hardware",
    slug: "/industries/product-company-security",
    icon: "Cpu",
    heroHeadline: "Silicon-to-Cloud Hardware & Firmware Fortification",
    summary: "Assessing connected hardware, automotive ECUs, smart medical monitors, and industrial telemetry systems against hardware hacking and binary reverse engineering.",
    risks: [
      "Unauthenticated UART/JTAG debugging access on physical circuit boards",
      "Insecure Over-The-Air (OTA) firmware update flashing",
      "Hardcoded cryptographic root keys in flash memory chips"
    ],
    recommendedServices: [
      "Product Security Assessment",
      "API Security Testing",
      "Mobile Application Penetration Testing"
    ],
    caseStudySnippet: "Audited an industrial smart meter ecosystem, finding and securing 3 remote firmware command injection vectors before factory mass production."
  },
  {
    id: "enterprise-cybersecurity",
    title: "Large Enterprises & Conglomerates",
    slug: "/industries/enterprise-cybersecurity",
    icon: "Building2",
    heroHeadline: "Global Attack Surface Management & Red Teaming",
    summary: "Comprehensive defensive posture management, assumed-breach exercises, and continuous risk quantification across sprawling multi-subsidiary enterprise networks.",
    risks: [
      "Shadow IT and uncatalogued digital assets in acquired subsidiaries",
      "Complex Active Directory trust relationships allowing domain-wide takeover",
      "Strict regulatory reporting demands across multiple global jurisdictions"
    ],
    recommendedServices: [
      "Network Penetration Testing",
      "Cyber Risk Assessment",
      "Cloud Security Assessment",
      "ISO 27001 Readiness"
    ],
    caseStudySnippet: "Mapped and evaluated over 10,000 public IP endpoints across 14 subsidiaries for a global conglomerate, consolidating their perimeter defense."
  }
];

export const METHODOLOGY_STEPS = [
  {
    step: "01",
    phase: "RECONNAISSANCE",
    subtitle: "OSINT & Surface Mapping",
    description: "Non-intrusive intelligence gathering, subdomain enumeration, tech-stack fingerprinting, exposed metadata analysis, and dark web credential hunting.",
    deliverables: ["Asset Inventory Map", "Attack Surface Exposure Report", "Threat Persona Profile"],
    tools: ["Custom OSINT Frameworks", "Amass", "Nuclei Custom Templates", "Shodan/Censys API"]
  },
  {
    step: "02",
    phase: "VULNERABILITY ASSESSMENT",
    subtitle: "Architectural & Surface Scanning",
    description: "Automated scanning combined with human architectural review to detect misconfigurations, outdated libraries, and unpatched CVEs across the target perimeter.",
    deliverables: ["Initial Vulnerability Ledger", "Threat Modeling Matrix", "Service Mapping"],
    tools: ["Burp Suite Pro", "Nessus Enterprise", "SonarQube Enterprise", "Custom Scanners"]
  },
  {
    step: "03",
    phase: "MANUAL EXPLOITATION",
    subtitle: "Real-World Adversary Simulation",
    description: "Manual ethical exploitation targeting deep business logic flaws, authorization bypasses (BOLA/IDOR), cryptographic weaknesses, and multi-step attack chains.",
    deliverables: ["Weaponized PoC Scripts", "CVSS v3.1 Severity Scoring", "Data Blast Radius Map"],
    tools: ["Burp Suite Enterprise", "Frida / Objection", "Custom Exploit Tooling", "Metasploit Pro"]
  },
  {
    step: "04",
    phase: "RISK ANALYSIS & REPORTING",
    subtitle: "Executive & Engineering Deliverables",
    description: "Compiling actionable reports featuring executive risk scorecards, reproduction steps with video/screenshots, and exact line-of-code remediation guidance.",
    deliverables: ["Executive Summary for Board", "Detailed Technical Report", "JSON/CSV Jira Import"],
    tools: ["SECERA Portal", "CVSS Calculator v3.1", "Secure Delivery Vault"]
  },
  {
    step: "05",
    phase: "REMEDIATION GUIDANCE",
    subtitle: "Direct Engineering Collaboration",
    description: "Direct consultative video call with your lead developers and DevOps engineers to walk through the findings and review proposed code patches.",
    deliverables: ["1-on-1 Engineering Debrief", "Terraform / Code Patch Snippets", "WAF Mitigation Rules"],
    tools: ["Live Debugging Sessions", "Git Pull Request Reviews"]
  },
  {
    step: "06",
    phase: "RE-TESTING & CERTIFICATION",
    subtitle: "Zero-Cost Fix Verification",
    description: "Free comprehensive re-testing of all identified vulnerabilities within 60 days, followed by the issuance of the official SECERA Attestation Letter.",
    deliverables: ["Clean Attestation Letter", "Final Audit Certificate", "Vendor Security Badge"],
    tools: ["Automated Regression Scripts", "Manual Verification Testing"]
  }
];

export const STATS_DATA = [
  { value: "500+", label: "Security Assessments Delivered", desc: "Across 14 countries" },
  { value: "150+", label: "Critical Flaws Identified Monthly", desc: "Zero false-positive guarantee" },
  { value: "100%", label: "Manual Logic Verification", desc: "No scanner-only assessments" },
  { value: "24/7", label: "Threat Research & Response", desc: "Continuous vulnerability intelligence" },
  { value: "99.8%", label: "Remediation Verification Rate", desc: "Zero-cost re-testing within 60 days" }
];

export const TESTIMONIALS_DATA = [
  {
    quote: "SECERA's red team discovered a critical authentication bypass in our GraphQL gateway that three previous penetration testing firms had completely missed. Their line-by-line remediation code saved us weeks.",
    author: "Alexander Wright",
    role: "Chief Information Security Officer",
    company: "Apex Fintech Global",
    industry: "Financial Technology"
  },
  {
    quote: "When our largest enterprise client demanded a SOC 2 Type II assessment report on an aggressive timeline, SECERA conducted the penetration testing and guided our team to a flawless pass.",
    author: "Elena Rostova",
    role: "VP of Engineering",
    company: "CloudVanguard AI",
    industry: "Enterprise SaaS"
  },
  {
    quote: "Their focus on manual business logic flaws rather than automated PDF outputs is what sets SECERA in an entirely different league. Best cybersecurity partner we've worked with.",
    author: "Marcus Chen",
    role: "Head of Infrastructure & Security",
    company: "PayNova Solutions",
    industry: "Payment Infrastructure"
  }
];

export const BLOG_POSTS = [
  {
    id: "owasp-api-top-10-deep-dive-2026",
    title: "OWASP API Security Top 10: Defending GraphQL & REST in Modern Microservices",
    category: "Application, API & Product Security",
    slug: "/resources/blog/owasp-api-top-10-deep-dive-2026",
    readTime: "8 min read",
    date: "August 2026",
    author: "Vikram Malhotra",
    authorRole: "Principal Offensive Security Researcher, SECERA",
    excerpt: "An architectural guide to identifying and mitigating Broken Object Level Authorization (BOLA), mass assignment vulnerabilities, and query depth DOS in distributed API meshes.",
    tableOfContents: [
      { id: "intro", title: "The Modern API Attack Surface" },
      { id: "bola-threat", title: "Why BOLA Remains #1 in 2026" },
      { id: "graphql-risks", title: "GraphQL Specific Attack Vectors" },
      { id: "defense-strategy", title: "Zero-Trust API Defense Architecture" }
    ],
    content: `
      ## The Modern API Attack Surface
      As organizations migrate from monolithic systems to distributed microservices, APIs have become the primary attack surface. Attackers no longer target firewalls; they query exposed REST and GraphQL endpoints directly.
      
      ## Why BOLA Remains #1 in 2026
      Broken Object Level Authorization (BOLA) occurs when an application receives user input to retrieve an object without validating whether the requesting user actually owns that resource. In a typical microservices gateway, tokens validate user *identity* (authentication), but individual downstream services often fail to validate *resource ownership* (authorization).
      
      ### Real-World Example:
      An attacker changes the user ID in a JSON body or URL parameter from \`/api/v1/accounts/10294/statements\` to \`/api/v1/accounts/10295/statements\`. Without database-level policy checks, the server returns confidential financial records.

      ## GraphQL Specific Attack Vectors
      GraphQL introduces unique security considerations:
      1. **Nested Query Depth DOS:** Attackers submit deeply recursive queries that exhaust backend database connections.
      2. **Introspection Leaks:** Leaving introspection enabled in production exposes private internal schema mutations and test endpoints.
      3. **Batching Attacks:** Submitting multiple queries in a single request to bypass rate-limiting controls.

      ## Zero-Trust API Defense Architecture
      To build resilient APIs:
      - Implement attribute-based access control (ABAC) at the database ORM layer.
      - Enforce strict query complexity and depth limits on all GraphQL gateways.
      - Conduct recurring manual API penetration testing before major version releases.
    `
  },
  {
    id: "cloud-iam-privilege-escalation",
    title: "Cloud IAM Privilege Escalation: 5 Critical Misconfigurations in AWS & Azure",
    category: "Cloud & Infrastructure Security",
    slug: "/resources/blog/cloud-iam-privilege-escalation",
    readTime: "6 min read",
    date: "July 2026",
    author: "Sarah Lindqvist",
    authorRole: "Lead Cloud Security Architect, SECERA",
    excerpt: "How attackers transition from a compromised low-privilege Lambda role to full AWS Organization Administrator access through policy chaining.",
    tableOfContents: [
      { id: "intro", title: "The Complexity of Cloud IAM" },
      { id: "policy-chaining", title: "The Art of Policy Chaining" },
      { id: "remediation", title: "Implementing Least Privilege Automated Guardrails" }
    ],
    content: `
      ## The Complexity of Cloud IAM
      In large-scale AWS and Azure environments, IAM policies grow exponentially. Over time, developers assign wildcard permissions for rapid debugging, leaving latent privilege escalation paths open to attackers.
      
      ## The Art of Policy Chaining
      An attacker gaining access to an instance with \`iam:CreatePolicyVersion\` or \`iam:AttachUserPolicy\` permissions can silently create a new policy with Administrator privileges and attach it to their own principal.
      
      ## Implementing Least Privilege Automated Guardrails
      Utilize AWS IAM Access Analyzer and Azure Policy to enforce permission boundaries, mandate short-lived STS tokens, and continuously scan for wildcard policies.
    `
  },
  {
    id: "pci-dss-v4-readiness-checklist",
    title: "PCI DSS v4.0.1 Transition: The Engineering Lead's Action Checklist",
    category: "Compliance & Regulations",
    slug: "/resources/blog/pci-dss-v4-readiness-checklist",
    readTime: "10 min read",
    date: "June 2026",
    author: "David Vance",
    authorRole: "Director of Compliance & Governance, SECERA",
    excerpt: "A technical breakdown of PCI DSS v4.0.1 requirements including client-side script integrity, targeted risk analyses, and multi-factor authentication mandates.",
    tableOfContents: [
      { id: "intro", title: "What Changed in PCI DSS v4.0.1" },
      { id: "script-monitoring", title: "Requirement 6.4.3: Script Integrity" },
      { id: "mfa-mandates", title: "Requirement 8.4.2: Universal MFA" }
    ],
    content: `
      ## What Changed in PCI DSS v4.0.1
      PCI DSS v4.0.1 represents the most significant evolution in payment security standards in a decade. It moves from prescriptive checklists to outcome-driven customized validation.
      
      ## Requirement 6.4.3: Script Integrity
      All payment pages must now implement mechanisms to verify the integrity of every script executing in the consumer browser (Content Security Policy, Subresource Integrity, and script inventory management).
    `
  }
];

export const FAQS_HOMEPAGE = [
  {
    q: "Why choose SECERA over automated scanning tools?",
    a: "Automated vulnerability scanners catch only known CVEs and syntax anomalies—they fail on 95% of business logic vulnerabilities, authorization bypasses, multi-step race conditions, and complex privilege escalations. SECERA combines elite offensive security researchers with proprietary tooling to deliver comprehensive manual penetration testing with zero false positives."
  },
  {
    q: "What certifications do SECERA security researchers hold?",
    a: "Our offensive security team holds industry-recognized credentials including OSCP (Offensive Security Certified Professional), OSWE (Offensive Security Web Expert), CISSP (Certified Information Systems Security Professional), CEH, AWS Certified Security Specialist, and CISA."
  },
  {
    q: "How does SECERA guarantee zero disruption to live production environments?",
    a: "We work with your technical team to define strict Rules of Engagement (RoE). Our testing uses calibrated rate-limiting, non-destructive payloads, and off-peak execution windows. We can also perform assessments on dedicated staging or UAT mirror environments."
  },
  {
    q: "Is re-testing included after we fix the vulnerabilities?",
    a: "Yes. Every SECERA penetration test includes 100% free verification re-testing within 60 days of report delivery. Once verified, we issue a formal Attestation Letter for your board, clients, and compliance auditors."
  },
  {
    q: "How fast can an assessment kick off?",
    a: "We can initiate scoping and execute the Non-Disclosure Agreement (NDA) within 24 hours. For critical incidents or urgent compliance deadlines, expedited testing can begin in under 48 hours."
  }
];

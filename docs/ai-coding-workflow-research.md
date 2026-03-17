# COMPREHENSIVE RESEARCH: AGILE PRE-DEVELOPMENT PREPARATION PHASE

## Executive Summary

The pre-development preparation phase in agile software projects—often called "Inception," "Sprint 0," or "Iteration 0"—represents a critical yet often abbreviated period before active development begins. This phase is where teams establish vision, validate assumptions, assess technical feasibility, and create the foundation for iterative delivery. The modern approach balances the lean principle of deferring decisions with the practical necessity of alignment and minimal architectural commitment.

---

## 1. AGILE PROJECT INCEPTION / DISCOVERY PHASE

### 1.1 Sprint 0 / Iteration 0: Definition & Debate

**What it is:**
Sprint Zero (also called Iteration Zero) is a phase before the first development sprint where teams establish foundations for the project. While not an official Scrum term, it's a recognized practice for handling activities that standard agile frameworks typically overlook—project chartering, environment setup, and vision alignment.

**Is it good practice?**
The consensus is nuanced:
- **Yes, with caveats**: Inception activities are necessary, but teams should keep Sprint 0 short (1-2 weeks maximum)
- **Lean principle applies**: The official Scrum view recommends keeping inception as lean as possible so teams quickly move to delivering value
- **Key warning**: Don't use Sprint 0 as an excuse to slip into waterfall-style planning—the goal is rapid alignment, not comprehensive documentation

**Best practices for Sprint 0:**
- Set clear objectives upfront
- Involve the whole team + stakeholders (Product Owner, customers, sponsors)
- Deliver something tangible (prototype, POC, skeleton architecture)
- Document critical decisions only
- Avoid jumping into feature development
- Apply the "Last Responsible Moment" principle—defer decisions when uncertainty is high

Sources:
- [Scrum.org - Concept of Sprint Zero](https://www.scrum.org/forum/scrum-forum/7331/concept-sprint-zero)
- [ProjectManagement.com - The Benefits of Sprint 0](https://www.projectmanagement.com/blog-post/40664/the-benefits-of-sprint-0)
- [Scrum.org - Scrum Myths on Sprint 0](https://www.scrum.org/resources/blog/scrum-myths-it-ok-have-sprint-0-design-sprint-hardening-sprint)

### 1.2 The Inception Deck (Jonathan Rasmusson's "The Agile Samurai")

**What it is:**
The Inception Deck is a set of 10 structured questions developed at ThoughtWorks to answer critical project questions before coding begins. It's one of the most practical pre-development tools in agile.

**The 10 Questions:**
1. **Why are we here?** - Project motivation and business context
2. **Create an Elevator Pitch** - 30-second product description (see section 2.3)
3. **Design a Product Box** - Imagine your product on a magazine cover—what's the headline?
4. **Create a NOT List** - What are we explicitly *not* doing?
5. **Identify Stakeholders** - Who cares about this project?
6. **User Archetypes** - Who will use this? (Related to personas)
7. **Show the Solution** - High-level architecture or mockup
8. **Determine Success Criteria** - How will we know this project succeeds?
9. **Identify Risks** - What could go wrong?
10. **Timeline & Budget** - What are the constraints?

**Why it matters:**
- Ensures alignment among all stakeholders before development begins
- Provides early visibility into risks and dependencies
- Takes only 2-3 days to complete with the full team

Sources:
- [The Agile Warrior - The Agile Inception Deck](https://agilewarrior.wordpress.com/2010/11/06/the-agile-inception-deck/)
- [O'Reilly - The Agile Samurai: Enter the Inception Deck](https://www.oreilly.com/library/view/the-agile-samurai/9781680500066/f_0026.html)

### 1.3 Discovery Phase vs. Delivery Phase

In modern agile (especially "Dual-Track Agile"), these run in parallel rather than sequentially:

**Discovery Phase (parallel to delivery):**
- Continuous customer research and validation
- Building understanding of user needs
- Testing assumptions through prototypes, interviews, testing
- Refining the backlog based on learning
- Identifying the next "most valuable" features to build

**Delivery Phase:**
- Sprints focused on building, testing, and deploying working software
- Converting validated discoveries into increments
- Gathering real-world usage feedback

**The integration challenge:** Companies struggle to balance these. Solution: Use a single integrated team with balanced time allocation, or maintain parallel but tightly synchronized tracks.

Sources:
- [Beyond the Backlog - Product Discovery Frameworks Evolution](https://beyondthebacklog.com/2025/10/07/product-discovery-frameworks/)
- [How Blending Lean, Agile, and Design Thinking Will Transform Your Team](https://jeffgothelf.com/blog/how-blending-lean-agile-and-design-thinking-will-transform-your-team/)

### 1.4 Lean Startup's Build-Measure-Learn Cycle & Project Inception

**Connection to inception:**
The Build-Measure-Learn cycle, defined by Eric Ries, is the theoretical foundation for why agile inception exists:

1. **Build** - Create an MVP with just enough features to test the core hypothesis
2. **Measure** - Gather quantitative and qualitative feedback from real users
3. **Learn** - Analyze data to decide: persevere, pivot, or abandon

**How it relates to inception:**
- Project inception establishes *what* hypothesis you're testing
- The MVP definition comes from inception activities
- The inception deck's "Success Criteria" define your learning goals
- Lean Startup principles encourage minimal upfront planning—just enough to start the loop

**Key insight:** Don't plan the entire product before the first Build-Measure-Learn cycle. Plan enough to start learning quickly.

Sources:
- [The Lean Startup - Principles](https://theleanstartup.com/principles)
- [Lean Startup Co - What Is an MVP?](https://leanstartup.co/resources/articles/what-is-an-mvp/)
- [Altar.io - Lean Product Development 101](https://altar.io/lean-product-development-build-measure-learn/)

---

## 2. PRODUCT VISION & STRATEGY

### 2.1 Creating a Product Vision Statement

A product vision answers: "What problem are we solving, for whom, and why does it matter?"

**Key characteristics of a strong vision:**
- **Aspirational**: Inspiring and compelling
- **Clear**: Everyone understands it the same way
- **Concise**: Can be communicated in one paragraph
- **Authentic**: Reflects genuine customer needs, not invented problems
- **Actionable**: Guides prioritization and decision-making

**Timing:** Defined during inception, revisited quarterly

Sources:
- [Atlassian - Product Management: Requirements](https://www.atlassian.com/agile/product-management/requirements)
- [Creating Vision and Goals with an Elevator Pitch](https://www.scrum.org/resources/creating-vision-and-goals-elevator-pitch)

### 2.2 Product Vision Board (Roman Pichler's Approach)

**What it is:**
A one-page visual template that captures the strategic product direction in five sections:

1. **Vision** - The ultimate purpose of the product
2. **Target Group** - Primary users/customers and their characteristics
3. **Needs** - Problems the product solves or benefits it provides
4. **Key Features** - Top 3-5 standout capabilities that differentiate
5. **Business Goals** - Desired business outcomes (revenue, market share, etc.)

**Extended version** adds:
- Competitors
- Revenue sources
- Cost factors
- Distribution channels

**When to use:**
- During inception to align stakeholders on strategy
- As a north star during backlog prioritization
- Reviewed quarterly to adapt to market changes

**Key practice:** The board is NOT static. Review and update at least every 3 months as market conditions and customer insights evolve.

Sources:
- [Roman Pichler - The Official Product Vision Board](https://www.romanpichler.com/tools/product-vision-board/)
- [Roman Pichler Medium - Product Vision Board Checklist](https://romanpichler.medium.com/product-vision-board-checklist-af23c599cae6)

### 2.3 Elevator Pitch Format

**Template (30 seconds):**
> For **[target customer]** who **[statement of the need/opportunity]**, the **[product name]** is a **[product category]** that **[key benefit/compelling reason to buy]**. Unlike **[primary competitive alternative]**, our product **[primary differentiation]**.

**Example:**
> For busy professionals who struggle to stay organized, Notion is a productivity platform that combines note-taking, databases, and project management. Unlike separate tools like Evernote and Asana, Notion provides an all-in-one workspace that can be customized for any workflow.

**Purpose:**
- Clarifies product essence
- Ensures all stakeholders share understanding
- Used throughout inception deck (exercise #2)
- Foundation for marketing and communication

**Variation:** Some teams use a simpler format:
> We help [target customer] [do something valuable] by [key mechanism/approach].

Sources:
- [Atlassian - Elevator Pitch](https://www.atlassian.com/team-playbook/plays/elevator-pitch)
- [Bigger Impact - Elevator Pitch Template and Tips](https://www.boost.co.nz/blog/2017/04/elevator-pitch-template)

### 2.4 Lean Canvas vs. Business Model Canvas

**When to use each:**

| **Lean Canvas** | **Business Model Canvas** |
|---|---|
| Startups with high uncertainty | Established companies validating/evolving |
| Product-focused, rapid iteration | Infrastructure/partnership focused |
| Problem-solution emphasis | Full business model view |
| Filled quickly (less than a day) | Comprehensive cross-functional effort |
| Built for learning and pivoting | Built for communication and planning |

**Lean Canvas Components (9 blocks):**
- Problem, Solution, Key Metrics, Unique Value Proposition
- Unfair Advantage, Channels, Customer Segments, Cost Structure, Revenue Streams

**Key difference:** Lean Canvas emphasizes "Problem" and "Unfair Advantage" (competitive moat), while BMC emphasizes partnerships and relationships.

**Modern practice:** Many startups use Lean Canvas first to validate core assumptions, then graduate to BMC as the business model stabilizes.

Sources:
- [Miro - Lean Canvas vs Business Model Canvas](https://miro.com/strategic-planning/lean-canvas-vs-business-model-canvas/)
- [Creately - Lean Canvas vs Business Model Canvas](https://creately.com/guides/lean-canvas-vs-business-model-canvas/)

### 2.5 Product Goals and OKRs (Objectives & Key Results)

**OKRs structure:**
- **Objective** - Qualitative, inspirational goal ("Become the easiest-to-use CRM")
- **Key Results** - 2-5 quantifiable measures of progress (e.g., "Increase user retention to 85%")
- **Cycle:** Typically quarterly, reviewed regularly

**How OKRs integrate with agile:**
- Connect sprint work to strategic objectives
- Inform backlog prioritization
- Enable transparency about what matters most
- Support outcome-driven delivery (vs. output-focused)

**OKRs vs. KPIs:**
- **OKRs:** Forward-looking, aspirational targets for the period ahead
- **KPIs:** Monitoring metrics for ongoing health (may not change monthly)

**Example OKR for a startup:**
- Objective: "Reduce customer onboarding friction"
  - KR1: Reduce time from signup to first action from 15 min to 3 min
  - KR2: Increase post-signup tutorial completion from 40% to 75%
  - KR3: Achieve NPS of 45+ from new users

Sources:
- [Atlassian - OKRs: The Ultimate Guide](https://www.atlassian.com/agile/agile-at-scale/okr)
- [How OKR and Agile Work Together](https://quantive.com/resources/articles/okr-and-agile)

---

## 3. REQUIREMENTS & DISCOVERY

### 3.1 PRD (Product Requirements Document) in Agile: Not Dead, Just Evolved

**The debate:**
- **Traditional view:** PRDs are anti-agile (too rigid, discourage iteration)
- **Modern consensus:** PRDs exist, but in lightweight form, emphasizing shared understanding over specification

**When PRDs are useful:**
- Complex products with many dependencies
- Regulated industries requiring documentation
- Products with long development timelines
- Distributed teams needing written alignment

**When PRDs are overkill:**
- Simple MVPs with a co-located, tightly-aligned team
- Rapid prototyping/validation cycles
- Research phases where requirements are still unclear

**Modern agile PRD approach:**
- **Focus on shared understanding**, not specification perfection
- **Keep it concise** (1-5 pages, not 50+)
- **Treat as evolving artifact**, not gospel truth
- **Prioritize working software** over documentation, but don't skip docs entirely
- **Live document** that changes as learning occurs

**Content for an agile PRD:**
1. Problem statement & business context
2. Target users & personas
3. Success metrics
4. Core features (high-level, not granular)
5. Out of scope (the NOT list)
6. Assumptions & risks
7. Dependencies & constraints

Sources:
- [Atlassian - Product Management: Requirements](https://www.atlassian.com/agile/product-management/requirements)
- [Is the Product Requirements Document Dead? A Debate](https://uservoice.com/blog/is-the-product-requirements-document-dead)
- [How To (Not) Write A PRD For Agile Development](https://www.linkedin.com/pulse/how-write-prd-agile-development-dorian-simpson)

### 3.2 User Research Methods

**Personas:**
- Semi-fictional character representing a user type
- Built from research: interviews, surveys, behavioral data
- Captures goals, pain points, motivations, context of use
- Used to: evaluate features, prioritize, write user stories
- **Key point:** Multiple personas required (primary, secondary, negative)

**Journey Maps:**
- Visual representation of user experience over time
- Shows touchpoints, emotions, pain points, moments of delight
- Timeline: step-by-step experience with a product/service
- Used to: identify optimization opportunities, empathize with users
- Different from personas (maps the experience, not the person)

**Empathy Maps:**
- 4-quadrant tool (Says, Thinks, Does, Feels) centered on a user/persona
- Reveals what users express vs. what they actually think/feel
- Quick to create (1-2 hours in a workshop)
- Used to: kick off discovery, challenge assumptions, build shared understanding
- Lightweight alternative to full journey mapping

**Flow in inception:**
1. Conduct user research (interviews, observations, surveys)
2. Create personas from research
3. Map journeys for key personas
4. Build empathy maps to deepen understanding
5. Use these in feature ideation and story writing

Sources:
- [NN/G - Empathy Mapping: The First Step in Design Thinking](https://www.nngroup.com/articles/empathy-mapping/)
- [UserPilot - Empathy Map vs Persona](https://userpilot.com/blog/empathy-map-vs-persona/)
- [Easy Agile - User Journey Map](https://www.easyagile.com/blog/user-journey-map)

### 3.3 Impact Mapping (Gojko Adzic)

**What it is:**
A collaborative planning technique that starts from business goals and works backward to identify features that drive impact.

**Structure (4 levels):**
1. **Goal** - The business outcome we want (e.g., "Increase customer lifetime value by 40%")
2. **Actors** - Who influences or is affected by this goal? (e.g., end users, partners, competitors)
3. **Impacts** - What behavior change in actors would move the goal? (e.g., "Users adopt premium features")
4. **Deliverables** - What features/improvements drive that behavior? (e.g., "AI-powered recommendations")

**Why it's powerful:**
- Forces alignment between business strategy and delivery
- Identifies assumptions and risks early
- Creates a traceability map: business goal → feature impact
- Naturally identifies what to *not* build (low-impact features)

**Used for:**
- Release planning
- Backlog prioritization
- Scope validation
- Risk identification

**Comparison to other methods:**
- Story Mapping: focuses on user workflows
- Impact Mapping: focuses on business outcomes and what drives them
- Often used *together* for complete understanding

Sources:
- [Impact Mapping - Making a Big Impact](https://www.impactmapping.org/)
- [Gojko Adzic - Impact Mapping Book](https://gojko.net/books/impact-mapping/)

### 3.4 Story Mapping (Jeff Patton)

**What it is:**
A technique for capturing the user's end-to-end experience as a sequence of stories, then prioritizing which stories build the MVP.

**Structure:**
- **Horizontal axis (left to right):** User journey (chronological steps)
- **Vertical axis (top to bottom):** User stories for each step, stacked by priority
- **Visual:** Creates a "spine" of critical stories, with supporting stories below

**Example for an e-commerce site:**
```
SPINE:        Browse → Select → Add to Cart → Checkout → Pay → Confirm
                 ↓        ↓         ↓            ↓       ↓       ↓
             Filter   View      Choose    Enter      Choose  Receive
             Search   Reviews   Quantity  Address    Payment Shipping
             Sort     Photos    Change    Edit       Invoice Email
```

**MVP extraction:**
- The MVP is the minimal "walking skeleton" of the spine
- Includes only critical stories needed for the user to achieve core goal
- Removes nice-to-haves and edge cases

**Why it matters:**
- Keeps team focused on user value, not feature list
- Makes priorities visible to stakeholders
- Prevents building features in isolation
- Facilitates conversation about what "done" looks like

**When to use:**
- Early discovery phase (before backlog creation)
- Clarifying scope with stakeholders
- Prioritizing release content

Sources:
- [Jeff Patton - User Story Mapping](https://jpattonassociates.com/story-mapping/)
- [O'Reilly - User Story Mapping Book](https://www.oreilly.com/library/view/user-story-mapping/9781491904893/)
- [Agile Alliance - User Story Mapping](https://agilealliance.org/resources/books/user-story-mapping/)

### 3.5 Event Storming (Alberto Brandolini)

**What it is:**
A workshop-based technique for modeling complex business domains quickly, using sticky notes on a wall to capture events and processes.

**How it works:**
- **Participants:** Cross-functional team (domain experts, developers, analysts, stakeholders)
- **Materials:** Sticky notes (usually orange for "events"), wall space, no computers
- **Process:** Collaboratively identify events ("User Signed Up," "Payment Failed"), then map cause-and-effect relationships

**Event Storming outputs:**
- Visual model of the entire business process
- Identified aggregates (Domain-Driven Design boundaries)
- Questions and uncertainty exposed
- Shared understanding across disciplines

**Key benefits:**
- Massive learning in hours instead of weeks
- Cross-functional alignment on complex domains
- Aligns well with Event Sourcing architecture
- Identifies context boundaries (for bounded contexts)

**Variants:**
- **Big Picture:** End-to-end domain discovery (half-day to full-day workshop)
- **Design-level:** Focused on a specific scenario or problem
- **Implementation-level:** Deep dive on one specific area

**When to use:**
- Complex product domains (e-commerce, financial systems, healthcare)
- Redesigning legacy systems
- Multiparty negotiation/integration (multiple actors, processes)

Sources:
- [EventStorming - Introducing EventStorming](https://www.eventstorming.com/book/)
- [Event Storming - Wikipedia](https://en.wikipedia.org/wiki/Event_storming)
- [DDD Academy - Event Storming](https://ddd.academy/event-storming-master-class/)

### 3.6 Design Thinking Integration with Agile

**The relationship:**
- **Design Thinking** answers: "What is the right problem to solve?"
- **Agile** answers: "How do we build the right solution efficiently?"

**Key difference:**
- Design Thinking is divergent (explore many ideas) then convergent (narrow focus)
- Agile is iterative and incremental (build-measure-learn cycles)

**Integration pattern (Dual-Track approach):**
```
Week 1-2:    Research & Discovery (Design Thinking)
             ↓
Week 3-4:    Prototyping & Validation (Design Thinking + light Agile)
             ↓
Week 5+:     Delivery sprints with continuous discovery in parallel
             (Agile with ongoing Design Thinking research)
```

**When Design Thinking is especially valuable:**
- Uncertain user needs or new markets
- Complex behavioral change required
- Stakeholders have conflicting assumptions
- High risk of building the wrong thing

**Anti-pattern:** Waterfall Design Thinking (finish all research → then start development). Instead, continuous discovery + iterative building.

Sources:
- [How Product Discovery Frameworks Like Design Thinking Have Evolved](https://beyondthebacklog.com/2025/10/07/product-discovery-frameworks/)
- [Agile vs Design Thinking: Key Differences and Similarities](https://www.hotjar.com/design-thinking/agile/)
- [Combining Design Thinking & Agile for Software Engineering](https://tblocks.com/articles/integrating-design-thinking-and-agile-methodology-for-software-engineering/)

---

## 4. ARCHITECTURE & TECHNICAL FOUNDATION

### 4.1 Architecture Decision Records (ADRs)

**What it is:**
A brief document capturing a single architectural decision, including context, the decision made, and consequences.

**Why it matters:**
- Creates a log of *why* decisions were made, not just *what*
- Aids onboarding (new team members understand rationale)
- Enables future reversals (document why a decision could change)
- Supports learning from past mistakes

**Standard format (Michael Nygard's template):**
```
# ADR-001: Use PostgreSQL for primary database

## Status: Accepted

## Context
The application requires reliable, scalable data storage with complex queries.
We evaluated PostgreSQL, MySQL, and MongoDB.

## Decision
We will use PostgreSQL as our primary database.

## Consequences
+ Advanced query capabilities (window functions, CTEs)
+ ACID guarantees out of the box
+ Strong community support
- Slower horizontal scaling than NoSQL
- Higher operational complexity than managed solutions
```

**Key sections:**
- **Title:** Short, decision-focused
- **Status:** Proposed / Accepted / Deprecated / Superseded
- **Context:** Forces at play, constraints, alternatives considered
- **Decision:** What was decided and why
- **Consequences:** Both positive and negative outcomes

**Alternative formats:**
- **MADR** (Markdown ADR): Streamlined format with optional sections
- **Y-statements:** "In the context of [context], facing [concern], we decided for [option] and against [other option], to achieve [outcome]"

**Storage & maintenance:**
- Stored in git repo (often `/docs/adr/`)
- Numbered sequentially (ADR-001, ADR-002, etc.)
- Immutable (don't edit old ADRs; create new ones if decision changes)
- Referenced in code comments and documentation

Sources:
- [GitHub - Architecture Decision Record examples](https://github.com/joelparkerhenderson/architecture-decision-record)
- [adr.github.io - Architectural Decision Records](https://adr.github.io/)
- [Microsoft Azure - Maintain an ADR](https://learn.microsoft.com/en-us/azure/well-architected/architect-role/architecture-decision-record)

### 4.2 Last Responsible Moment (LRM) for Architecture Decisions

**Principle:**
Delay commitment on architectural decisions until the moment when failing to decide costs more than making the decision.

**Why it matters in agile:**
- Architecture decisions are expensive to reverse
- Requirements change; premature decisions lock in outdated assumptions
- Deferring reduces risk and increases information available for decision-making

**The decision curve:**
```
Cost of NOT deciding ↗        
                    /
                   /
                  /
Cost of deciding ↘

       ← LRM sweet spot
```

**Practical examples:**

| **Decision** | **When to make it (LRM)** | **Why wait?** |
|---|---|---|
| Database tech | When performance/scale requirements are clear (weeks/months in) | Early choice locks you in; see actual usage patterns first |
| Microservices vs. Monolith | After first release; evaluate actual communication patterns | Early splitting adds complexity; prove need for separation first |
| Caching strategy | When you have performance metrics showing bottlenecks | Premature optimization; measure first |
| Third-party integrations | When you've validated actual integration needs | Partner APIs may change; requirements may shift |

**Common mistake:**
Deferring decisions *beyond* LRM (decision made by default through drift). This is worse than proactive decision-making. Watch for: "We never officially decided, so we're stuck with legacy choice X."

**Applying LRM in inception:**
- Make decisions about things that MUST be decided now (org structure, core platform choice, Go/No-Go)
- Defer technical decisions where uncertainty is high
- Plan spikes (research activities) to gather info needed for future decisions

Sources:
- [The Last Responsible Moment](https://blog.codinghorror.com/the-last-responsible-moment/)
- [Agile Decision-Making: The Last Responsible Moment](https://www.revgenpartners.com/insight-posts/the-last-responsible-moment-decision-making-in-agile-environments/)
- [O'Reilly - Software Architects Handbook](https://www.oreilly.com/library/view/software-architects-handbook/9781788624060/)

### 4.3 Walking Skeleton (Alistair Cockburn)

**What it is:**
A tiny, end-to-end implementation of the core architecture, proving the tech stack works together before major development.

**Not a prototype**, but a working slice:
- Links main architectural components
- Can be deployed and demonstrates data flow
- Minimal features (may be trivial)
- Example: "User can sign up, log in, and create one item"

**Why it matters:**
- Validates architecture assumptions early
- Identifies integration issues before building 100 features
- Provides a starting point for parallel feature development
- De-risks major technical bets

**Walking Skeleton vs. MVP:**
- **Skeleton:** Architectural proof of concept, minimal functionality
- **MVP:** Minimal set of features to test business hypothesis

**They often overlap:** Build a skeleton that's also an MVP.

**Example timeline:**
```
Week 1: Create walking skeleton
  - Wire up API → Database → Frontend
  - Implement user signup + one simple feature
  - Deploy to staging
  - Result: Low-risk, proven architecture
  
Week 2+: Build features in parallel
  - Teams develop features using skeleton as foundation
  - Architecture proven, teams move faster
```

**Key characteristic:** The architecture and functionality can evolve in parallel. The skeleton validates *that* evolution is possible.

Sources:
- [Medium - Walking Skeletons in Software Architecture](https://medium.com/@jorisvdaalsvoort/walking-skeletons-in-software-architecture-894168276e3f)
- [Start Your Project With a Walking Skeleton](https://www.henricodolfing.com/2018/04/start-your-project-with-walking-skeleton.html)
- [O'Reilly - 97 Things Every Software Architect Should Know](https://www.oreilly.com/library/view/97-things-every/9780596800611/ch60.html)

### 4.4 C4 Model for Architecture Visualization (Simon Brown)

**What it is:**
A hierarchical model for visualizing software architecture at four levels of detail:

**Level 1 - Context:**
- Scope: System as a black box
- Who uses it? External systems it talks to?
- Audience: Non-technical stakeholders
- Example: "User → [System] → Database, Email Service, Payment Gateway"

**Level 2 - Container:**
- Scope: Major structural components (apps, services, databases)
- Shows how responsibility is split
- Audience: Technical leadership, architects
- Example: "Web App | Mobile App | API | Database | Cache | Queue"

**Level 3 - Component:**
- Scope: Major building blocks within containers
- Shows internal structure, dependencies
- Audience: Developers on this component
- Example: Within API: "Auth Component | User Service | Order Service | Payment Service"

**Level 4 - Code:**
- Scope: Individual classes, interfaces, code structure
- Audience: Developers writing code
- Tool: IDE, UML diagrams

**Key principle:** Build diagrams top-down. Start at Level 1 for alignment; only zoom in if helpful for the audience.

**When to create C4 diagrams:**
- Inception: Level 1-2 to show system context and main components
- Design: Level 2-3 for detailed architecture decisions
- Ongoing: Use for onboarding and communication

**Tools for creating C4 diagrams:**
- [Structurizr](https://structurizr.com/) - Dedicated C4 diagramming tool
- Miro, Lucidchart, Draw.io, PlantUML with C4 template

Sources:
- [C4 Model - Home](https://c4model.com/)
- [O'Reilly - The C4 Model: Visualizing Software Architecture](https://www.oreilly.com/library/view/the-c4-model/9798341660113/)
- [Simon Brown - C4 Model Intro](https://sammancoaching.org/learning_hours/architecture/simon_brown_4c_context.html)

### 4.5 Tech Stack Selection Criteria

**Factors to evaluate (during inception):**

1. **Team expertise:** Do we have (or can we quickly hire) people who know this tech?
2. **Community & ecosystem:** How mature? How much third-party support?
3. **Performance requirements:** Does it meet our load/latency targets?
4. **Operational burden:** How hard to deploy, monitor, secure?
5. **Cost:** Licensing, hosting, human resources?
6. **Long-term viability:** Will this be maintained in 5 years?
7. **Learning curve:** How long to productivity?
8. **Interoperability:** How well does it work with other systems we depend on?

**Avoid common traps:**
- **Resume-driven development:** Choosing tech because it's trendy or because developers want to learn it
- **Copy-pasting architecture:** "X uses this, so should we"
- **Over-engineering:** Choosing for scale when you're small
- **Vendor lock-in:** Proprietary tools with poor alternatives

**Decision framework:**
Create a simple scoring matrix (team expertise: 5 pts, community support: 4 pts, etc.) and rate candidates. Use this to fuel discussion, not as absolute truth.

**When to decide:**
- Core platform (language, runtime): Early, before major architecture decisions depend on it
- Libraries/frameworks: Can often be evaluated after walking skeleton works
- Infrastructure (cloud, containers): Early enough to inform deployment design

### 4.6 Spikes for Technical Exploration

**What it is:**
A time-boxed research activity (usually 1-3 days) to answer a technical question or validate an approach.

**Example spikes during inception:**
- "Can we integrate with Salesforce API in our architecture?"
- "Will WebSockets support our real-time messaging requirements?"
- "Is open-source library X performant enough for our use case?"
- "What's the easiest way to do single sign-on?"

**Spike output:**
- **Not** production code (though you may keep learnings)
- Report: "Here's what we learned, here's the recommendation"
- Decision: "Proceed with approach X" or "This is not viable"
- Often captures a small ADR or decision

**Spike vs. Prototype:**
- **Spike:** Answer a question about feasibility
- **Prototype:** Build a demo to validate UX/requirements
- **Both:** Can be combined (test architecture *and* UX together)

**Recommended during inception:**
- Spikes on biggest technical unknowns
- Spikes on risky architectural decisions
- Typical budget: 5-10% of inception time

**Key constraint:** Time-box it. "We'll spend 2 days researching X, then decide."

Sources:
- [Scaled Agile Framework - Spikes](https://framework.scaledagile.com/spikes)
- [What is a Spike in Agile? Types, Benefits and Examples](https://agilemania.com/what-is-a-spike-in-agile/)
- [Running Spike Stories to De-risk Architecture Choices](https://agileseekers.com/blog/running-spike-stories-to-de-risk-architecture-choices)

---

## 5. TEAM FORMATION & SETUP

### 5.1 Cross-Functional Team Composition

**Definition:**
A team with all skills necessary to define, build, test, and deliver value—without depending on external specialists.

**Common composition:**
- **Developers** (backend, frontend, full-stack)
- **QA/Testers**
- **Product Owner** (or Product Manager)
- **Designer/UX specialist**
- Optional: Business analyst, technical writer, DevOps engineer

**Important misconception:**
Cross-functional does NOT mean everyone knows everything. It means:
- Diverse skill sets represented
- Each person has a primary specialty + broader understanding of other disciplines
- T-shaped skills: deep expertise in one area, working knowledge of others

**Why it matters:**
- **Faster delivery:** Fewer handoffs between specialists
- **Better decisions:** Multiple perspectives available synchronously
- **Shared ownership:** Everyone feels responsible for product success
- **Reduced rework:** Designers, devs, and QA collaborate from the start

**Team size:**
- Ideal: 5-9 people (Scrum guideline)
- Smaller: Fast decisions, but skills may be thin
- Larger: More skills, but communication overhead increases

**Distributed team considerations:**
- Time zone overlap needed for daily sync
- Asynchronous documentation more important
- Written decision-making protocols

Sources:
- [TechFAR Hub - The Agile Team](https://techfarhub.usds.gov/pre-solicitation/the-agile-team/)
- [Mountain Goat Software - Cross-Functional Doesn't Mean Everyone Can Do Everything](https://www.mountaingoatsoftware.com/blog/cross-functional-doesnt-mean-everyone-can-do-everything)
- [Scrum.org - The Timeless Power of Cross-Functional Teams](https://www.scrum.org/resources/blog/timeless-power-cross-functional-teams-product-development)

### 5.2 Team Topology Patterns (Matthew Skelton & Manuel Pais)

**Four core team types:**

**1. Stream-Aligned Team**
- Aligned to a single value stream (product, user journey, customer segment)
- End-to-end ownership (define → build → test → deploy)
- Closest to customers
- Empowered to make decisions independently
- Typical size: 5-9 people

**2. Platform Team**
- Provides internal services/tools to reduce cognitive load of stream-aligned teams
- Examples: API infrastructure, testing tools, deployment platform
- Measures success by: adoption by other teams, reduction in handoffs
- Enables stream-aligned teams to remain independent

**3. Enabling Team**
- Temporary (3-6 months) support to help other teams adopt new skills/technologies
- Examples: cloud migration team, observability team
- Dissolves once capability is embedded in stream-aligned team
- Prevents knowledge silos

**4. Complicated Subsystem Team**
- Handles complex technical components requiring specialist knowledge
- Examples: machine learning team, security team, graphics engine team
- Usually small (3-4 specialists)
- Interacts with stream-aligned teams for feature integration

**Team topology design principle:**
- Org structure should reflect software architecture
- Minimize team dependencies
- Each team owns a bounded domain (aligned with DDD)
- Friction points reveal design problems

**Inception question:** What team topology will our organization need? Consider:
- Will you have one team or many?
- What platforms/shared services are needed?
- Where will specialized expertise live?

Sources:
- [Team Topologies - Key Concepts](https://teamtopologies.com/key-concepts)
- [Atlassian - Team Topologies](https://www.atlassian.com/devops/frameworks/team-topologies)
- [Martin Fowler - Team Topologies](https://martinfowler.com/bliki/TeamTopologies.html)

### 5.3 Working Agreements / Team Charter

**What it is:**
A shared agreement on *how* the team will work together—communication norms, meeting structure, decision-making, conflict resolution.

**Typical sections:**

1. **Purpose & Values**
   - Why does this team exist?
   - What do we value? (transparency, customer focus, continuous learning?)

2. **Communication**
   - Meeting cadence (daily standup, sprint planning, retros)
   - Channels (Slack for quick questions, docs for decisions)
   - Response time expectations
   - Remote work practices

3. **Working Practices**
   - Code review process
   - Definition of Done (see below)
   - How we handle disagreements
   - Focus time / interrupt policy

4. **Decision-Making**
   - Who decides what? (Product Owner for prioritization, team for technical approach)
   - How do we escalate when blocked?

5. **Feedback & Learning**
   - Retrospective structure
   - How we celebrate wins
   - Blameless postmortems for failures

**Creation process:**
- Facilitated workshop (2-4 hours) during inception
- Full team input (doesn't work if imposed)
- Document and share visibly
- Review and adapt quarterly

**Evolution:**
- Agreements should change as team matures
- "We agreed to X, but it's not working—let's discuss" is healthy
- Revisit in retrospectives

**Not the same as:**
- **Working agreements** = how we interact
- **Definition of Done** = what makes work "complete"
- **Team charter** = both + overall team mission/goals

Sources:
- [Easy Agile - Team Charter, Working Agreement, Social Contract](https://www.easyagile.com/blog/team-charter-working-agreement-social-contract-template-guide/)
- [Miro - Team Charter: The Ultimate Guide](https://miro.com/organizational-chart/what-is-a-team-charter/)

### 5.4 Definition of Done (Team-Level)

**What it is:**
A shared checklist of criteria that must be met for any work item to be considered "complete" and shippable.

**Example Definition of Done:**
```
[ ] Code written and committed to main branch
[ ] Code reviewed and approved by at least one peer
[ ] Unit tests written and passing (>80% coverage)
[ ] Integration tests passing
[ ] Manual QA testing completed
[ ] Performance acceptable (< 2s load time)
[ ] Documentation updated (code comments, README)
[ ] No security vulnerabilities (passed scan)
[ ] Deployment to staging successful
[ ] Product Owner acceptance received
[ ] Story closed in tracker
```

**Levels of Done:**
- **Team level:** What must be true for a sprint story
- **Sprint level:** Done stories → releasable increment
- **Release level:** Shippable to production

**Anti-pattern:** Different DoD for different team members. Everyone uses the *same* checklist.

**Evolution:**
- Start simple (code, test, review)
- Add more criteria as quality issues emerge
- Remove criteria that become automatic (CI/CD may eliminate some manual checks)

**How it enables agile:**
- Prevents "almost done" work that drags into next sprint
- Ensures predictable quality
- Clear acceptance criteria = fewer disputes
- Supports sustainable pace (no rushing to close stories)

**During inception:**
Team should draft a preliminary DoD covering:
- Code quality (review, standards)
- Testing (unit, integration, manual)
- Documentation
- Deployment readiness
- Security/compliance basics

Refine it after the first few sprints when you understand your actual rhythm.

Sources:
- [Easy Agile - Team Charter, Working Agreement & Social Contract](https://www.easyagile.com/blog/team-charter-working-agreement-social-contract-template-guide/)
- [Scrum.org - Definition of Done in Scrum](https://www.scrum.org/resources/scrum-definition-done-artifact)

---

## 6. PROJECT SETUP ACTIVITIES

### 6.1 Development Environment Setup

**Goals:**
- Every developer can run the full system locally in < 30 minutes
- Consistent dev environments (no "works on my machine")
- Easy onboarding for new team members

**Key components:**

1. **Version Control**
   - Repo initialized and hosted (GitHub, GitLab, Bitbucket)
   - Branching strategy defined (Git Flow, GitHub Flow, trunk-based)
   - Initial structure created (src/, tests/, docs/, etc.)

2. **Development Tools**
   - Language runtime(s) installed and pinned
   - Package managers configured (npm, pip, gradle, etc.)
   - IDEs configured (shared settings/extensions)
   - Build tools set up (Maven, Webpack, Gradle, Make)

3. **Local Database & Services**
   - Docker Compose or similar for local environment
   - Seed data for development
   - Easy reset/cleanup commands

4. **Dependency Management**
   - Lock files committed (package-lock.json, Gemfile.lock, go.sum)
   - Clear documentation of required versions
   - Script to install/update all dependencies

5. **Documentation**
   - README with quick-start instructions
   - Architecture overview (links to C4 diagrams)
   - Common commands (build, test, run, deploy)
   - Troubleshooting guide

**Automation:**
Create a simple `setup.sh` or `make setup` that automates:
```
- Clone repo
- Install dependencies  
- Set up database
- Run first tests
```

**Definition of success:** New developer can:
- Clone repo
- Run one setup command
- Run tests locally
- Start the app
- Make a small code change
- See it work

All in < 1 hour on first day.

### 6.2 CI/CD Pipeline Initial Setup

**Phases:**
1. **Source** - Code checked in
2. **Build** - Compiled/bundled
3. **Test** - Automated tests run
4. **Deploy** - Deployed to environments (staging → production)

**Minimal inception CI/CD:**

**Stage 1: Build & Test**
```yaml
On every commit to main:
  - Run linter
  - Run unit tests
  - Run integration tests
  - Generate coverage report
  - Block merge if tests fail
```

**Stage 2: Deploy to Staging**
```yaml
On every merged commit to main:
  - Deploy to staging environment
  - Run smoke tests
  - Notify team
```

**Stage 3: Deploy to Production** (optional at inception)
```yaml
Manual trigger or scheduled:
  - Deploy to production
  - Run health checks
  - Smoke tests
```

**Tools to consider:**
- GitHub Actions (free with GitHub)
- GitLab CI (free with GitLab)
- Jenkins (self-hosted, more powerful)
- CircleCI, Travis CI (third-party, good for open-source)

**Inception setup:**
- Get Source → Build → Test phase working (automated)
- Manual staging deployment is OK to start
- Document deployment process
- Plan: who can deploy? when? rollback procedures?

**Key principle:** If it's not automated, it won't happen consistently. Automate early.

Sources:
- [Digital.ai - Building a CI/CD Pipeline](https://digital.ai/catalyst-blog/building-cicd-pipeline/)
- [JetBrains - CI/CD Pipeline Guide](https://www.jetbrains.com/teamcity/ci-cd-guide/ci-cd-pipeline/)
- [Codefresh - Complete Guide to CI/CD Pipelines](https://codefresh.io/learn/ci-cd-pipelines/)

### 6.3 Repository Structure Decisions

**Example structure (polyrepo - single codebase):**
```
my-project/
├── src/                 # Source code
│   ├── api/
│   ├── ui/
│   ├── common/
│   └── ...
├── tests/               # Test code
├── docs/                # Documentation
│   ├── adr/             # Architecture Decision Records
│   ├── design/
│   └── api.md
├── infra/               # Infrastructure as Code
│   ├── docker/
│   ├── k8s/
│   └── terraform/
├── tools/               # Build scripts, utilities
├── .github/             # GitHub config (CI/CD, templates)
├── README.md
├── CONTRIBUTING.md
├── Makefile or package.json
└── .gitignore
```

**Monorepo vs. Polyrepo decision:**
- **Polyrepo (separate repos per team/service):** Easier permissions, independent deployment, but harder to share code
- **Monorepo (single repo with multiple projects):** Easier code sharing, atomic commits, but coordination overhead

For inception: Start with **polyrepo (single codebase)**. Simplicity wins.

**Key decisions:**
- Where does each type of code live? (source, tests, docs, infrastructure)
- Naming conventions for files/directories
- What gets committed to git? (not node_modules, not .env with secrets)
- Where are deployment scripts?
- Where is documentation?

**Tool setup:**
- `.gitignore` file (prevent committing build artifacts, secrets, IDE files)
- `.editorconfig` (consistent whitespace across IDEs)
- `.pre-commit` hooks (prevent obvious mistakes before commit)

Sources:
- [GitHub - Git Best Practices](https://github.com)
- [Martin Fowler - Monorepos](https://martinfowler.com/articles/monorepo.html)

### 6.4 Coding Standards & Conventions

**Why it matters:**
- Code is read more often than written
- Consistency reduces cognitive load
- Easier code review when style is standardized
- New team members get orientation from the codebase itself

**What to standardize:**

1. **Naming**
   - Variables/functions: camelCase or snake_case?
   - Classes: PascalCase
   - Constants: UPPER_SNAKE_CASE
   - Be consistent *within* your codebase

2. **Formatting**
   - Indentation: spaces or tabs? 2 or 4?
   - Line length: 80, 100, 120 chars?
   - Brace style: `{ }` placement
   - Use auto-formatters (Prettier, Black, gofmt)

3. **Organization**
   - How are imports ordered?
   - Where do helper functions go?
   - File naming conventions (kebab-case or camelCase)?

4. **Documentation**
   - When do functions need comments?
   - Docstring format (JSDoc, Sphinx, Godoc)
   - Inline comment style

5. **Architecture**
   - Layering (controllers, services, repositories)
   - Dependency direction
   - Error handling approach

6. **Security**
   - How to handle secrets? (never commit, use env vars)
   - Validation/sanitization standards
   - Authentication approach

**Tools to automate:**
- **Linters** (ESLint, pylint, golangci-lint): Catch style violations
- **Formatters** (Prettier, Black, gofmt): Auto-fix formatting
- **Pre-commit hooks**: Run linter/formatter before commit
- **CI/CD checks**: Fail build if style violations

**Inception approach:**
- Set up linter + formatter
- Create a CODING_STANDARDS.md document (or CONTRIBUTING.md)
- Commit example "good" code
- Configure IDE to follow standards automatically
- Don't spend days debating style; pick reasonable defaults and move on

### 6.5 Monitoring & Observability Strategy

**Why plan this at inception:**
- Easier to instrument code from the start than retrofit monitoring
- Need to plan logging/metrics structure before data explodes
- Observability is prerequisite for sustainable operations

**Three pillars:**

1. **Logging**
   - What to log? (INFO: major events, DEBUG: detailed flow, ERROR: failures)
   - Where logs go? (stdout for containers, centralized logging service)
   - Log format (structured JSON for parsing)
   - Retention policy (how long to keep logs?)
   - Example: "User 123 created post 456" vs. cryptic error code

2. **Metrics**
   - What to measure? (request count, latency, error rate, business metrics like "signups/day")
   - Cardinality management (avoid explosion of unique label values)
   - Aggregation (e.g., p50, p99 latencies)
   - Alerting thresholds (when do we get paged?)

3. **Tracing (Distributed Tracing)**
   - For microservices: track request across services
   - Example: "User click" → "API call" → "Database query" → "Cache hit/miss"
   - Identify bottlenecks in complex flows

**Inception setup:**
- Choose a logging aggregation service (ELK, Splunk, DataDog, CloudWatch)
- Establish structured logging format from day one
- Add metrics to critical paths (request/response, database calls)
- Plan alerts (what warrants immediate attention?)
- Document: "How do we debug a performance issue?"

**Common pit:** "We'll add monitoring later." Result: Production outages with no visibility.

**Practical start:**
- Logs → stdout (captured by container orchestration)
- Metrics → Prometheus or CloudWatch
- Errors → error tracking service (Sentry, Rollbar, DataDog)
- Plan distributed tracing if microservices

---

## 7. INITIAL PLANNING

### 7.1 Release Planning vs. Sprint Planning

**Release Planning:**
- **Scope:** What features ship in the next 2-6 months?
- **Output:** Release roadmap (e.g., "v1.0 in Q2")
- **Cadence:** Done once per major release
- **Participants:** Product, architecture, leadership
- **Questions answered:**
  - What's the MVP for first release?
  - How many sprints until we can ship?
  - What's the minimum viable feature set?

**Sprint Planning:**
- **Scope:** What work happens in the next 1-2 weeks?
- **Output:** Sprint backlog (specific tasks)
- **Cadence:** Every sprint (weekly or bi-weekly)
- **Participants:** Full team
- **Questions answered:**
  - Which backlog items will we commit to?
  - How will we break them into tasks?
  - What's the capacity?

**Hierarchy:**
```
Release Plan (e.g., v1.0)
├── Sprint 1 (Week 1-2)
│   ├── Story 1
│   ├── Story 2
│   └── Story 3
├── Sprint 2 (Week 3-4)
│   └── ...
├── Sprint 3 (Week 5-6)
│   └── ...
└── (4-6 sprints per release typical)
```

**Inception focus:**
- Do release planning to define MVP and target date
- Draft first sprint backlog
- Don't plan all sprints in detail (too much guessing)

Sources:
- [Mountain Goat Software - Agile Planning Process](https://www.mountaingoatsoftware.com/agile/agile-planning)
- [MPUG - Agile Release Planning](https://mpug.com/agile-release-planning-lets-break-it-down/)

### 7.2 MVP Definition

**Minimum Viable Product:**
- Smallest set of features that allows testing the core hypothesis
- Not the worst possible product, but a testable version
- Different from walking skeleton (which is architectural)

**MVP characteristics:**
- Solves the primary user problem
- Works well enough to get honest feedback
- Delivers value users will pay for (if applicable)
- Excludes "nice-to-have" features
- Can be built in 1-3 months typically

**MVP vs. Minimum Lovable Product (MLP):**
- **MVP:** Minimum to validate (Lean Startup focus)
- **MLP:** Minimum to delight (Lean UX focus)
- **Tension:** Speed to validate vs. User satisfaction
- **Resolution:** Build MVP quickly, then iterate toward lovable

**MVP for inception:**
1. What's our core hypothesis? ("Users want to save restaurant favorites")
2. What's the minimum product that tests it? ("Save/list favorites, that's it")
3. What's success criteria? ("50 signups, 20% weekly retention")
4. What features are in MVP vs. v2? (MVP: save/list; v2: share, recommendations)

**Example:**
- **Full vision:** Instagram-like photo app with filters, stories, reels, DMs, shopping, ads, etc.
- **MVP:** Upload photo, apply 3 basic filters, view feed of friends' photos
- **Time to MVP:** 8 weeks (not 1+ years)

### 7.3 MLP (Minimum Lovable Product)

**Concept:**
Rather than minimally viable, build something users *love* from the first encounter.

**MLP characteristics:**
- Delightful user experience even if feature-limited
- Solves core problem exceptionally well
- Users feel cared for, not beta-tested
- Polish & attention to detail matter

**MLP vs. MVP:**
| | MVP | MLP |
|---|---|---|
| Timeline | Fast (4-12 weeks) | Slightly longer (8-16 weeks) |
| Focus | Validation | Delight |
| Polish | Functional | Refined |
| Risk | "Will users want this?" | "Will users love this?" |
| When to use | High uncertainty | Lower uncertainty, competitive market |

**Practical approach:**
- Start with MVP validation
- If validation succeeds, iterate toward MLP
- Don't invest in polish before proving need

**Example:**
- MVP: "Bare-bones note app" (just works, not pretty)
- MLP: "Beautiful note app with thoughtful details" (typography, spacing, animations, keyboard shortcuts)
- Airbnb MLP: Professional photography + detailed descriptions (not just listings)

### 7.4 NOW-NEXT-LATER Roadmap

**Framework (created by Janna Bastow):**

**NOW (Current Sprint/Quarter):**
- Actively in progress or about to start
- High confidence in scope and timeline
- Specific, named features/goals
- Example: "Improve checkout performance" (not vague)

**NEXT (1-2 Quarters Out):**
- Planned but not started
- Direction is clear, details may evolve
- "We commit to working on this soon"
- Example: "Add wishlist feature"

**LATER (Beyond 3 Months):**
- Strategic initiatives we believe in
- High uncertainty on timing/scope
- Low commitment ("if conditions allow")
- Example: "Explore subscription model"

**Key principle:**
- Only NOW has commitment
- NEXT = direction (not a promise)
- LATER = thinking ahead (not a promise)
- Items move up and down the roadmap based on learning

**Structure example:**
```
NOW (This Month)
├── Fix login performance
├── Add two-factor auth
└── Migrate to new payment processor

NEXT (1-2 Months)
├── Wishlist feature
├── Email notifications
└── Mobile app beta

LATER (Future)
├── Subscription pricing model
├── International expansion
└── AI recommendations
```

**Inception use:**
- Define NOW (MVP features)
- Sketch NEXT (post-MVP features)
- List LATER (longer-term direction)
- Update roadmap every sprint based on learning

**Tools:**
- Spreadsheet
- Miro, Figma
- Specialized roadmap tools (ProductPlan, Aha!)

Sources:
- [Savio - Now Next Later Roadmaps](https://www.savio.io/product-roadmap/now-next-later-roadmaps/)
- [Why I Invented the Now-Next-Later Roadmap](https://www.prodpad.com/blog/invented-now-next-later-roadmap/)

### 7.5 Initial Backlog Creation & Prioritization

**From discovery to backlog:**

1. **Translate stories into backlog items**
   - User story format: "As a [role], I want [feature], so that [benefit]"
   - Example: "As a user, I want to save restaurants I like, so I can revisit them later"

2. **Define acceptance criteria**
   - What must be true for story to be done?
   - Example for above: "Can save restaurant, see saved list, remove from saved"

3. **Initial prioritization**
   - Use impact mapping, story mapping, roadmap to order items
   - Question: "What must be true first before other work unblocks?"
   - Dependencies matter: Payment processing before subscription features

4. **Estimate (optional at inception)**
   - Story points or t-shirt sizing (S, M, L, XL)
   - Don't over-invest in accuracy yet
   - First estimate refines with team knowledge

**Epic to story hierarchy:**
```
Epic: "Wishlist Management"
├── Story: "Create a wishlist"
├── Story: "Add item to wishlist"
├── Story: "View wishlist"
├── Story: "Share wishlist"
└── Story: "Remove item from wishlist"
```

**Inception backlog structure:**
- Top 20-30 stories ordered by priority
- First 1-2 sprints' worth detailed (acceptance criteria)
- Remaining items roughed in (details later)
- Epic groupings clear

**Avoid anti-patterns:**
- Backlog of 200 items (overwhelm, no priority)
- All items equally important (no prioritization)
- Items too large/vague to estimate or start

Sources:
- [User Stories in Agile](https://www.atlassian.com/agile/project-management/user-stories)

### 7.6 Risk Assessment & Mitigation

**During inception, identify risks:**

**Technical risks:**
- "Can we build the architecture we designed?"
- "Can we meet performance requirements?"
- "Will the third-party API work as expected?"
- *Mitigation:* Spikes, walking skeleton, proof of concepts

**Market risks:**
- "Do customers actually want this?"
- "Will they pay for it?"
- *Mitigation:* User interviews, MVP validation, landing page validation

**Resource risks:**
- "Can we hire experienced developers?"
- "Will key people leave during the project?"
- *Mitigation:* Knowledge sharing, redundancy, mentoring

**Schedule risks:**
- "Can we ship MVP in 3 months?"
- "What if we underestimated complexity?"
- *Mitigation:* Build buffer into timeline, de-scope aggressively if needed

**Risk assessment framework:**

| Risk | Probability | Impact | Mitigation |
|---|---|---|---|
| Third-party API integration delays | Medium | High | Spike in Sprint 1 |
| Key developer leaves | Low | High | Cross-train backup, doc architecture |
| Market demand lower than expected | Medium | Critical | Validate with customers weekly |
| Database performance at scale | Medium | High | Load testing spike, choose proven tech |

**Documentation:**
- Create a risk register (simple spreadsheet)
- Review risks in retros and adjust
- "We assumed X, but learned Y" → adjust future plans

Sources:
- [ISACA - Risk Management in Agile Projects](https://www.isaca.org/resources/isaca-journal/issues/2016/volume-2/risk-management-in-agile-projects)
- [Agile Project Inception Planning](https://www.andycleff.com/2015/07/agile-project-inception-planning-the-think-it-stage/)

---

## 8. MODERN APPROACHES (2024-2026)

### 8.1 Shape Up (Basecamp)

**Overview:**
An alternative to Scrum developed by Basecamp that emphasizes longer cycles (6 weeks), clear appetite-driven scope, and betting instead of planning.

**Three phases:**

**Phase 1: Shaping**
- Product/design team defines the problem and rough solution (not detailed spec)
- Key element: Set an **appetite** ("How much time can we spend?")
- Different from waterfall: not a 100-page spec, more like a 2-4 page narrative
- Identify rabbit holes (things to avoid)
- Output: A "shaped" project ready to pitch

**Phase 2: Pitching**
- Write a formal pitch (1-2 pages):
  - Problem statement
  - Solution (sketches, wireframes)
  - Appetite (6 weeks? 3 weeks?)
  - Rabbit holes & limitations
  - No time wasted on detailed requirements
- Pitch to decision-makers (betting table)

**Phase 3: Betting**
- Leadership team meets (Basecamp: CEO, CTO, CFO, senior dev)
- Discuss pitched projects and constraints
- **Bet** on which projects to fund for next 6 weeks
- Not all projects get built (unlike Scrum sprints where all committed items go)
- Teams that lose bets know why and wait for next cycle

**Key differences from Scrum:**

| Scrum | Shape Up |
|---|---|
| 1-2 week sprints | 6-week cycles |
| Plan at sprint start | Shape, then pitch, then bet |
| All committed work ships | Only bet projects ship |
| Story points | Appetite (time budget) |
| Continuous delivery | Discrete 6-week releases |
| Team owns tasks | Team owns whole project |

**When Shape Up shines:**
- Products with clear business goals
- Mature organizations (not scrappy startups)
- Discrete, shippable projects
- Leadership confidence to say "no"

**Inception with Shape Up:**
- Define company appetite ("6 weeks = one cycle")
- Identify first major projects to shape
- Set up betting table structure
- Create initial project pitches for feedback

Sources:
- [Basecamp - Shape Up](https://basecamp.com/shapeup)
- [Shape Up Methodology Guide](https://uxcam.com/blog/shape-up-methodology/)
- [The Shape Up Software Development Process](https://workwithopal.com/about/blog/why-opal-adopted-the-shape-up-methodology/)

### 8.2 Dual-Track Agile (Discovery + Delivery Running in Parallel)

**Concept:**
Instead of discovery → delivery waterfall, run continuous discovery in parallel with delivery sprints.

**Structure:**
```
Sprint 1:     [Delivery: v0.9] [Discovery: Learning about v1.1 features]
Sprint 2:     [Delivery: v1.0] [Discovery: Learning about v1.2 features]
Sprint 3:     [Delivery: v1.1] [Discovery: Learning about v1.3 features]
                (Next release based on discovery)
```

**Advantages:**
- Faster feedback loops
- Delivery team not blocked waiting for research
- Real-world usage informs next features
- Prevents "big bang" feature drop

**Challenges:**
- Requires separate tracks (more coordination)
- Two teams may lack context for each other
- Sync points needed (daily? weekly?)

**Solution: Integrated team**
- Single team allocates time across discovery and delivery
- 70% delivery, 30% discovery (example allocation)
- Product Manager runs discovery interviews
- Developers help validate prototypes
- Designers iterate based on usage data

**Inception question:**
- Will discovery and delivery be in same team or separate?
- How will learning get back to delivery team?
- Who owns discovery activities?

Sources:
- [Beyond the Backlog - Product Discovery Frameworks](https://beyondthebacklog.com/2025/10/07/product-discovery-frameworks/)
- [Blending Lean, Agile, and Design Thinking](https://jeffgothelf.com/blog/how-blending-lean-agile-and-design-thinking-will-transform-your-team/)

### 8.3 Continuous Discovery Habits (Teresa Torres)

**Concept:**
Build discovery into the weekly team rhythm, not as separate phase before development.

**Core practice: Weekly customer touchpoints**
- Product team (1-2 people) meets with 1-3 customers/users per week
- Goal: Learn about problem space, not pitch solutions
- Structured but not heavy (conversation, not survey)
- Results shared with delivery team

**Five core discovery habits:**
1. **Continuous problem discovery** - Understand user needs deeply
2. **Deep customer empathy** - Walk in their shoes
3. **Outcome-focused solutions** - Design for impact, not output
4. **Relentless experimentation** - Test assumptions frequently
5. **Evidence-based prioritization** - Decide based on learning, not opinion

**Weekly rhythm:**
- Product Manager: 3-4 hours customer interviews
- Delivery team: 1-2 hour synthesis meeting (what did we learn?)
- Backlog refinement: Updated based on learnings

**Benefits:**
- Faster course corrections
- Fewer surprises ("customers hate this feature")
- Team feels connected to customer problems
- Discovery is ongoing, not a gate

**Inception approach:**
- Identify early customers/users to interview
- Schedule weekly touchpoints starting week 1
- Create simple template for recording learnings
- Decide: who synthesizes learnings? how often?
- Define decision criteria ("When do we pivot based on discovery?")

Sources:
- [Teresa Torres - Continuous Discovery Habits](https://www.agile-academy.com/en/agile-leader/teresa-torres-continuous-discovery-habits/)
- [IxDF - What Is Continuous Discovery](https://ixdf.org/literature/topics/continuous-discovery)

### 8.4 AI-Assisted Project Inception

**Emerging opportunity (2024-2026):**
AI can help with aspects of inception, but cannot replace human judgment.

**Where AI helps:**
1. **Drafting documents**
   - Inception deck questions → outline
   - Elevator pitch → multiple variants
   - ADR templates → populated template
   - PRD structure → initial draft

2. **User research synthesis**
   - Interview transcripts → personas (rough draft)
   - Customer feedback → themes/patterns
   - Competitive analysis → summary

3. **Risk identification**
   - Common risks for project type (e.g., "SaaS marketplace")
   - Checklists (what have we forgotten?)
   - What-if analysis

4. **Documentation**
   - Process documentation
   - Glossary of terms
   - Architecture documentation

**Where AI struggles:**
- **Strategy decisions** (should we build this at all?)
- **Priority ranking** (what matters most?)
- **Team alignment** (building shared understanding)
- **Cultural decisions** (how do we want to work together?)
- **Novel problems** (genuinely new territory)

**Practical inception use:**
- Use AI to draft, not decide
- "Give me 5 versions of our elevator pitch" → choose best, iterate
- "What risks should we assess?" → vet against actual project
- "Summarize these interviews" → validate themes with team
- Never outsource team discussion to AI output

**Anti-pattern:** "ChatGPT wrote our product strategy." Human judgment required.

---

## 9. THE COMPLETE INCEPTION SEQUENCE (Synthesis)

### Typical Inception Timeline: 1-2 Weeks

**Day 1: Vision & Strategy**
- Inception deck workshop (all 10 questions)
- Create elevator pitch
- Product Vision Board draft
- Confirm "why are we here?"

**Day 2-3: Discovery & Users**
- User research (if not done pre-inception)
- Create personas, empathy maps
- Story mapping session (user journey)
- Define success criteria

**Day 4-5: Technical & Architecture**
- Tech stack selection (decision made)
- Walking skeleton design
- Architecture Decision Records for critical choices
- Identify spikes needed

**Day 5-6: Team & Planning**
- Team charter workshop
- Definition of Done draft
- Working agreements
- Development environment setup (in parallel)

**Day 7-8: Execution Planning**
- Release planning (when can we ship MVP?)
- Initial backlog creation & estimation
- Risk assessment
- First sprint planning

**Parallel activities:**
- Repository setup, CI/CD basics
- Development environment scaffolding
- Documentation structure

**End-of-inception deliverables:**
- Shared vision (written + team alignment)
- Architecture sketches + decisions documented
- MVP definition + release plan
- Prioritized backlog (first 2 sprints detailed)
- Team charter & working agreements
- Risk register
- Development environment working
- First sprint ready to start

---

## 10. RESOURCES FOR FURTHER LEARNING

**Foundational Books:**
- "The Agile Samurai" by Jonathan Rasmusson (inception, agile principles)
- "User Story Mapping" by Jeff Patton (discovery to delivery)
- "Continuous Discovery Habits" by Teresa Torres (ongoing learning)
- "Impact Mapping" by Gojko Adzic (requirements from business goals)
- "Shape Up" by Ryan Singer (alternative to Scrum)
- "Team Topologies" by Skelton & Pais (team organization)
- "The C4 Model" by Simon Brown (architecture visualization)

**Practical Templates:**
- [Inception Deck - O'Reilly](https://www.oreilly.com/library/view/the-agile-samurai/9781680500066/)
- [ADR Templates - adr.github.io](https://adr.github.io/adr-templates/)
- [Product Vision Board - Roman Pichler](https://www.romanpichler.com/tools/product-vision-board/)
- [Lean Canvas - Ash Maurya](https://leancanvas.com/)
- [NOW-NEXT-LATER Template - Miro](https://miro.com/templates/agile-product-roadmap-now-next-later/)

**Online Resources:**
- [Scrum.org](https://www.scrum.org/) - Authoritative Scrum guidance
- [Agile Alliance](https://agilealliance.org/) - Agile best practices
- [Martin Fowler's Bliki](https://martinfowler.com/bliki/) - Architecture & agile
- [Atlassian - Agile Resources](https://www.atlassian.com/agile) - Practical guides

---

## CONCLUSION

Pre-development preparation in agile is about **achieving informed alignment quickly**, not building perfect plans. The modern approach balances:

1. **Lightweight structure** (avoid waterfall-style planning)
2. **Rapid decision-making** (defer decisions when uncertain, commit when clarity is required)
3. **Cross-functional collaboration** (designers, devs, product, ops in same room)
4. **Early risk mitigation** (spikes, walking skeleton, technical proofs)
5. **Continuous learning** (inception isn't done; discovery continues in every sprint)

The goal is not a 100-page document, but a team that:
- Understands the vision
- Believes in the mission
- Knows the technical approach
- Can start building with confidence
- Is ready to learn and adapt

Done well, inception takes 1-2 weeks. Done poorly, it takes months and still leaves teams misaligned.

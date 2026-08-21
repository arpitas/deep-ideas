export type Bridge = { label: string; trigger: string; bridge: string };
export type Source = { title: string; author: string; note?: string; url?: string };
export type Idea = {
  slug: string;
  number: number;
  title: string;
  kicker: string;
  rating: string;
  status: "today" | "queued";
  infographic: string;
  oneLiner: string;
  hook: string;
  explanation: string[];
  distinctions: { label: string; text: string }[];
  bridges: Bridge[];
  partyLevels: string[];
  critiques: string[];
  pocketLine: string;
  blogSeeds: { title: string; thesis: string; outline: string[]; personalPrompts: string[] }[];
  sources: Source[];
};

export const ideas: Idea[] = [
  {
    slug: "accountability-sinks",
    number: 1,
    title: "Accountability Sinks",
    kicker: "Cybernetics, bureaucracy & the sentence “the system won’t let me.”",
    rating: "5/5",
    status: "today",
    infographic: "accountability",
    oneLiner: "An accountability sink lets an organization make decisions while making it strangely hard for affected people to reach anyone capable of changing them.",
    hook: "The most interesting failure is sometimes the one where every individual is behaving reasonably and the system is still behaving stupidly.",
    explanation: [
      "Dan Davies’ useful move is to stop treating accountability only as a moral question — who deserves blame? — and treat it as an information problem. Does feedback about a bad outcome travel to somewhere with enough authority to change the rule that caused it?",
      "That is the cybernetic frame. A thermostat does not work because it is smart; it works because consequences loop back into action. Organizations also need sensing, correction and escalation. An accountability sink cuts that return path.",
      "Scale makes the problem harder. Rules and automation are necessary because no institution can improvise every decision. But the real world contains more variety than any finite rulebook. Good systems therefore need places where judgment can re-enter — without making every rule optional.",
      "AI makes the concept newly urgent. A model can automate a decision while a human operator becomes merely the interface to the model. The dangerous design is not necessarily 'AI replaces humans'; it is 'AI gives humans a reason not to exercise judgment.'"
    ],
    distinctions: [
      { label: "Blame", text: "Who should answer for what happened?" },
      { label: "Accountability", text: "Can information about failure reach a place where future behavior changes?" },
      { label: "Insulation", text: "Protect decisions from arbitrary pressure." },
      { label: "Permeability", text: "Still let useful information travel upstream." }
    ],
    bridges: [
      { label: "Date · travel", trigger: "Someone tells an airline or customer-service horror story.", bridge: "“The most maddening version is when the employee completely agrees with you but literally can’t do anything. I learned there’s a systems term for that: an accountability sink.”" },
      { label: "Work · software", trigger: "A team talks about an approval flow, AI automation, or a rigid KPI.", bridge: "“I wonder if we automated the work, or just automated the ability to say no. Edge cases are sometimes where the organization learns.”" },
      { label: "Community · city", trigger: "A discussion turns to permits, housing, transit, or five departments approving one thing.", bridge: "“I’m curious which parts are legitimate safeguards and which parts have become places where responsibility disappears.”" },
      { label: "Friends · everyday", trigger: "Gym cancellation, insurance, delivery app, medical billing, landlord portal.", bridge: "“Platform businesses are almost accountability-sink machines — every participant can point at another participant.”" },
      { label: "News · AI", trigger: "A story about algorithmic decisions, benefits, insurance, hiring, moderation, or fraud.", bridge: "“The question I’ve started asking is: where does the decision actually live, and can a weird outcome travel backward into the system?”" }
    ],
    partyLevels: [
      "There’s a term I love: an accountability sink. It’s when everybody agrees something stupid is happening and somehow nobody has the authority to stop it.",
      "The deeper idea is that accountability is a feedback mechanism. If the consequences can’t get back to someone who can change the rule, the organization can’t really learn.",
      "It comes from cybernetics: complex systems survive by sensing their environment and correcting themselves. A bureaucracy with no meaningful appeal path is a bit like a thermostat with the thermometer disconnected."
    ],
    critiques: [
      "Rules often exist because unstructured human discretion produced bias, favoritism, inconsistency, or corruption.",
      "Not every decision should be contestable by whoever complains loudest. Courts, central banks, safety systems and standardized procedures sometimes need insulation.",
      "The interesting design problem is therefore not 'rules versus humans.' It is how to be resistant to arbitrary influence while remaining permeable to useful information."
    ],
    pocketLine: "A healthy system doesn’t merely make decisions. It has to be able to hear what those decisions did.",
    blogSeeds: [
      {
        title: "We keep automating decisions when we should be automating feedback",
        thesis: "Software is excellent at turning organizational judgment into rules. The harder engineering problem is the reverse operation: turning anomalous outcomes back into information that changes those rules.",
        outline: [
          "Open with the modern sentence: ‘I understand, but the system won’t let me.’",
          "Notice the oddity: both humans agree, yet the decision persists as if authored by nobody.",
          "Introduce accountability sinks as a name for the pattern — briefly.",
          "Make the engineering turn: abstraction is normally elegant, but organizations can abstract away precisely the information they need.",
          "Propose ‘feedback-in-the-loop’ as a better design question than merely ‘human-in-the-loop.’",
          "Steelman the other side: discretion can mean bias and favoritism.",
          "End with the new question you now ask whenever a system produces an absurd result: can anyone inside it learn that the result was absurd?"
        ],
        personalPrompts: [
          "What product or engineering decision have you seen where an edge case was dismissed as noise but actually revealed something structural?",
          "Where have you personally encountered a kind employee with no agency? What exact phrase did they use?",
          "When have you built an abstraction that later hid something important from you?",
          "Where would you deliberately refuse to add an escape hatch because consistency matters more than individual judgment?"
        ]
      },
      {
        title: "The nicest employee in the world can be the interface to an inhuman system",
        thesis: "Modern institutions often separate empathy from agency: the person who hears your pain is not the person with power, and the person with power rarely sees the consequences.",
        outline: ["Start with a sympathetic frontline worker.", "Map the split between empathy and authority.", "Connect it to organizational alienation and platform businesses.", "Ask what humane escalation actually looks like at scale.", "End on the paradox: nicer interfaces can make structural powerlessness less visible."],
        personalPrompts: ["A support interaction where the person clearly cared but could not act.", "A moment as a manager or founder when you had authority but were insulated from frontline consequences."]
      }
    ],
    sources: [
      { title: "The Unaccountability Machine", author: "Dan Davies", note: "Contemporary entry point into accountability sinks, management cybernetics and organizational failure." },
      { title: "Brain of the Firm", author: "Stafford Beer", note: "The Viable System Model and the question of how large organizations remain adaptive." },
      { title: "An Introduction to Cybernetics", author: "W. Ross Ashby", note: "Useful for the idea of requisite variety." },
      { title: "Thinking in Systems", author: "Donella Meadows", note: "The friendliest foundation for feedback loops, stocks, flows and intervention points." }
    ]
  },
  {
    slug: "abundance-state-capacity",
    number: 2,
    title: "Abundance & State Capacity",
    kicker: "What if good intentions and actual capacity are different political variables?",
    rating: "4/5",
    status: "queued",
    infographic: "abundance",
    oneLiner: "A society can accumulate individually sensible safeguards and collectively lose the ability to build housing, transit, clean energy, infrastructure, or public goods quickly.",
    hook: "The interesting tension is not ‘regulation good or bad?’ It is how to preserve safeguards without turning every safeguard into a veto point.",
    explanation: [
      "The modern abundance argument asks progressives in particular to distinguish distribution from production: deciding who should receive goods is different from ensuring enough homes, clean power, transit, health capacity, or infrastructure exists in the first place.",
      "Its strongest systems insight is cumulative. A single review, hearing, appeal, environmental rule or local veto may be defensible. But complex systems are shaped by interactions; a stack of individually reasonable constraints can produce collectively unreasonable latency.",
      "The counterargument matters just as much: many procedures exist because powerful actors historically externalized costs onto weaker communities. 'Build faster' can become a euphemism for removing voice. The productive question is which procedures actually improve outcomes and which merely diffuse responsibility."
    ],
    distinctions: [
      { label: "Values", text: "What should society want?" },
      { label: "Capacity", text: "Can institutions actually produce it?" },
      { label: "Safeguard", text: "Prevents a known harm." },
      { label: "Veto point", text: "Can halt action, sometimes without owning the final outcome." }
    ],
    bridges: [
      { label: "Date · neighborhood", trigger: "Someone talks about rent, a new building, or why a favorite neighborhood never changes.", bridge: "“I’ve gotten interested in the gap between having the right values and actually having institutions capable of executing them.”" },
      { label: "Work · execution", trigger: "A team has many reviewers and no clear owner.", bridge: "“This feels like the organizational version of state capacity: everyone has a veto, but nobody quite owns throughput.”" },
      { label: "Community", trigger: "Transit, bike lanes, housing, clean-energy projects.", bridge: "“I’m trying to get better at asking two questions separately: what protections are legitimate, and what process would still let us build the thing?”" },
      { label: "News · politics", trigger: "A story about infrastructure delays or permitting reform.", bridge: "“What I like about the state-capacity frame is that it lets you be pro-safeguard without assuming every existing procedure is sacred.”" }
    ],
    partyLevels: ["I’m fascinated by how a society can get very good at preventing bad action and accidentally make good action hard too.", "I think state capacity is a useful variable because it separates political intention from execution.", "The systems question is whether many locally rational veto points create a globally irrational outcome."],
    critiques: ["Abundance rhetoric can underweight distribution and power.", "Procedural protections often emerged from real histories of exclusion and environmental harm.", "Faster execution is not automatically better execution; capacity should include competence, legitimacy, and learning."],
    pocketLine: "Good intentions are not a substitute for institutional throughput.",
    blogSeeds: [{ title: "The politics of throughput", thesis: "Maybe one missing political axis is not left versus right, but how much useful state capacity a system can generate per unit of procedure.", outline: ["Start with a small local project everyone claims to support.", "Count the handoffs rather than the ideologies.", "Separate legitimate safeguards from accumulated vetoes.", "Ask what a high-capacity progressive institution would look like.", "End with a test: who owns the outcome, not just the procedure?"], personalPrompts: ["A San Francisco process that felt slower than the underlying problem warranted.", "A startup process where review multiplied but accountability did not."] }],
    sources: [{ title: "Abundance", author: "Ezra Klein & Derek Thompson" }, { title: "Seeing Like a State", author: "James C. Scott", note: "Useful counterweight on the danger of high-modernist state simplification." }]
  },
  {
    slug: "ai-as-normal-technology",
    number: 3,
    title: "AI as Normal Technology",
    kicker: "Maybe capability is fast and society is slow.",
    rating: "5/5",
    status: "queued",
    infographic: "ai",
    oneLiner: "AI can be historically transformative without behaving like an autonomous social force; real impact is mediated by institutions, workflows, regulation, complementary technologies, and adoption.",
    hook: "Maybe the most interesting AI bottleneck is no longer model intelligence. It is how slowly organizations can redesign themselves around intelligence that became cheap.",
    explanation: ["The 'normal technology' frame resists both magical utopianism and magical doom. Electricity was transformative, but factories, cities, labor practices and regulation had to reorganize around it. AI may be similar: capability can jump while social diffusion remains lumpy and slow.", "That makes organizational design unexpectedly central. A model that can perform a task does not imply the task disappears; workflows, incentives, liability, trust and complementary data decide whether capability becomes productivity."],
    distinctions: [{ label: "Capability", text: "What the model can do in principle." }, { label: "Diffusion", text: "How quickly institutions turn capability into routine practice." }],
    bridges: [{ label: "Date · work", trigger: "Someone asks whether AI will replace their job.", bridge: "“I’m increasingly interested in the gap between what AI can technically do and what an organization can actually absorb.”" }, { label: "News · model launch", trigger: "A new frontier model drops.", bridge: "“Model capability is moving absurdly fast; I wonder whether the slow variable is now institutions.”" }, { label: "Founder · product", trigger: "A company adds an AI feature.", bridge: "“The feature is easy. The interesting question is whether the surrounding workflow changes enough to capture the capability.”" }],
    partyLevels: ["I think AI might be revolutionary in a very normal way.", "The electricity analogy is useful: invention is not the same thing as diffusion.", "Maybe institutional adaptation is becoming the binding constraint on AI impact."],
    critiques: ["Analogies to prior technologies may understate the speed or autonomy of advanced AI systems.", "Some AI capabilities can diffuse through software much faster than physical infrastructure did."],
    pocketLine: "Capability can be exponential while adoption remains institutional.",
    blogSeeds: [{ title: "AI’s slow variable", thesis: "As model intelligence becomes abundant, organizational redesign may become the scarce resource.", outline: ["Open with a task AI can already do that your industry still performs manually.", "Separate technical capability from adoption.", "Describe the organizational complements required.", "Ask what happens when the model improves faster than the institution.", "End with the inversion: AI strategy becomes organization design."], personalPrompts: ["A workflow you have seen where the model was not the bottleneck.", "A place you deliberately keep a human because trust or liability matters." ] }],
    sources: [{ title: "AI as Normal Technology", author: "Arvind Narayanan & Sayash Kapoor" }]
  },
  {
    slug: "information-is-not-truth",
    number: 4,
    title: "Information ≠ Truth",
    kicker: "Networks also exist to coordinate us.",
    rating: "5/5",
    status: "queued",
    infographic: "information",
    oneLiner: "Information can be socially useful because it coordinates people — even when its relationship to literal truth is imperfect, symbolic, or constructed.",
    hook: "A map, a currency, a rumor and a ritual can all change behavior before you even ask whether they are ‘true’ in the same sense.",
    explanation: ["A useful distinction in information theory and social thought is that information is not identical to truth. Some messages matter because they reduce uncertainty, synchronize expectations, create common knowledge, or coordinate action.", "Money is the easy example: a banknote does not describe the world like a scientific proposition, but shared confidence in it coordinates strangers at enormous scale."],
    distinctions: [{ label: "Truth", text: "Does the claim accurately describe reality?" }, { label: "Coordination", text: "Does shared information align expectations and behavior?" }],
    bridges: [{ label: "Date · gossip", trigger: "A story about gossip or social media.", bridge: "“It’s funny how some information matters less because it’s true than because everybody knows everybody else has heard it.”" }, { label: "Work · culture", trigger: "Company values, narratives, strategy decks.", bridge: "“Some internal narratives are coordination technologies as much as descriptions.”" }, { label: "Friends · money", trigger: "Crypto, currencies, luxury brands.", bridge: "“A lot of social value comes from synchronized belief rather than intrinsic properties.”" }],
    partyLevels: ["Information and truth aren’t synonyms.", "Some information is valuable because it coordinates people.", "Common knowledge is powerful: what matters is not only what I know, but what I know you know."],
    critiques: ["The distinction must not become an excuse for relativism; factual accuracy remains crucial in domains where beliefs collide with physical reality.", "Coordination built on falsehood can be stable for a while and still become catastrophic."],
    pocketLine: "Some information describes the world; some information organizes it.",
    blogSeeds: [{ title: "Some information organizes reality instead of describing it", thesis: "The internet debate over misinformation is incomplete because it treats information only as representation, not as coordination infrastructure.", outline: ["Start with a rumor that changed behavior before anyone verified it.", "Separate representation from coordination.", "Use money or social norms as clean examples.", "Return to social media and common knowledge.", "End with the question: what behavior does a message coordinate?"], personalPrompts: ["A group chat where something became socially real because everyone saw it.", "A company narrative that changed action before it was fully true." ] }],
    sources: [{ title: "Nexus", author: "Yuval Noah Harari" }, { title: "The Secret of Our Success", author: "Joseph Henrich" }]
  },
  {
    slug: "gift-economies",
    number: 5,
    title: "Gift Economies & Reciprocity",
    kicker: "Not every durable exchange needs an invoice.",
    rating: "5/5",
    status: "queued",
    infographic: "gift",
    oneLiner: "Some systems coordinate generosity through open-ended reciprocity rather than exact transactions — value circulates because relationships persist.",
    hook: "Friendship would be unbearable if every dinner, favor and introduction were settled like a Stripe invoice.",
    explanation: ["Anthropology has long distinguished market exchange from forms of gifting where the ledger is deliberately fuzzy. The fuzziness is not necessarily inefficiency; it can encode trust, relationship, status and future obligation.", "Modern examples include open source, Wikipedia, mutual-aid networks, knowledge communities and many friendships. These systems still have economics — just not always explicit prices."],
    distinctions: [{ label: "Transaction", text: "The exchange is settled now." }, { label: "Reciprocity", text: "The relationship carries value through time." }],
    bridges: [{ label: "Date · paying", trigger: "Who paid for dinner, Venmo culture, splitting checks.", bridge: "“I think there’s something psychologically different between reciprocity and settling every interaction immediately.”" }, { label: "Work · open source", trigger: "Someone uses an open-source project.", bridge: "“Open source is economically strange in a lovely way — huge value emerges without pricing every contribution.”" }, { label: "Community", trigger: "Neighbors lend tools or help each other.", bridge: "“That’s almost a tiny gift economy: the ledger exists, but nobody wants it to become exact.”" }],
    partyLevels: ["Not every healthy exchange wants a precise ledger.", "Reciprocity works partly because repayment is open-ended.", "A gift can create relationship in a way a transaction deliberately closes."],
    critiques: ["Gift systems can hide coercive obligations, status hierarchies and unequal burdens.", "Markets are often liberating precisely because they let strangers exchange without owing each other socially."],
    pocketLine: "A transaction closes the ledger; reciprocity keeps the relationship open.",
    blogSeeds: [{ title: "Why Venmo changes the emotional texture of friendship", thesis: "Frictionless settlement is economically efficient but can quietly convert some reciprocal relationships into transactional ones.", outline: ["Open with a comically tiny Venmo request.", "Describe why exact settlement feels different from taking turns.", "Introduce reciprocity versus transaction.", "Steelman exact splitting as fairness and accessibility.", "Ask where precision improves relationships and where it impoverishes them."], personalPrompts: ["A friend group with a strong norm around splitting or not splitting.", "A time generosity felt better precisely because it was not immediately repaid." ] }],
    sources: [{ title: "The Serviceberry", author: "Robin Wall Kimmerer" }, { title: "The Gift", author: "Marcel Mauss" }]
  },
  {
    slug: "moral-ambition",
    number: 6,
    title: "Moral Ambition",
    kicker: "Why do we moralize coffee more readily than careers?",
    rating: "5/5",
    status: "queued",
    infographic: "moral",
    oneLiner: "If work consumes a huge share of our capable adult lives, choosing what to work on may deserve more moral attention than many consumer choices we obsess over.",
    hook: "It is odd that buying the wrong coffee can feel like an ethical choice while spending forty hours a week on something is treated as morally neutral.",
    explanation: ["Moral ambition reframes career choice as a question of impact, not only status, salary or self-expression. The compelling part is not maximal self-sacrifice; it is noticing the scale mismatch between tiny ethical consumer choices and tens of thousands of work hours.", "The hard part is pluralism. Impact is uncertain, people have obligations to family and self, and a healthy society needs ordinary competent work too."],
    distinctions: [{ label: "Ethical consumption", text: "How do I spend my money?" }, { label: "Moral ambition", text: "How do I spend my agency?" }],
    bridges: [{ label: "Date · career", trigger: "‘What would you do if money didn’t matter?’", bridge: "“I’ve been thinking about career choice as one of the biggest moral allocations we make, not just a self-actualization decision.”" }, { label: "Friends · burnout", trigger: "Someone wants to quit a prestigious job.", bridge: "“Maybe ambition is not the problem; maybe the interesting question is what the ambition is pointed at.”" }],
    partyLevels: ["We moralize consumption more than labor allocation.", "Your career is one of the largest blocks of agency you control.", "The useful question may be not ‘am I ambitious?’ but ‘what is my ambition pointed at?’"],
    critiques: ["It can become moral perfectionism or status competition in altruistic clothing.", "Impact is difficult to measure and often depends on unglamorous maintenance work.", "People legitimately owe care to themselves, families and communities, not only abstract causes."],
    pocketLine: "The moral question is not whether to be ambitious, but what your ambition is pointed at.",
    blogSeeds: [{ title: "The ethics of where attention goes", thesis: "Work is not only labor; it is a repeated allocation of attention, competence and social power.", outline: ["Start with an ethical purchase you have overthought.", "Contrast its scale with a year of work.", "Introduce the idea of agency allocation.", "Add the critique: not every career must maximize measurable impact.", "End with a softer test: what deserves your best hours?"], personalPrompts: ["A career turn where meaning mattered more or less than expected.", "Something socially useful you did that looked unimpressive on paper." ] }],
    sources: [{ title: "Moral Ambition", author: "Rutger Bregman" }]
  },
  {
    slug: "metamodern-sincerity",
    number: 7,
    title: "Metamodern Sincerity",
    kicker: "After irony, can self-awareness and earnestness coexist?",
    rating: "4/5",
    status: "queued",
    infographic: "metamodern",
    oneLiner: "A metamodern sensibility oscillates between skepticism and sincerity: you can know a story is constructed, imperfect, or a little ridiculous and still choose to care.",
    hook: "Maybe detachment used to signal sophistication; now being able to care without losing self-awareness can feel more sophisticated.",
    explanation: ["Postmodern critique trained us to see how identities, institutions and narratives are constructed. A metamodern response does not erase that critique; it asks what happens after you already know. Can you commit without pretending certainty?", "That is why the idea appears in culture as a blend of irony and earnestness, nostalgia and futurism, skepticism and hope."],
    distinctions: [{ label: "Naïveté", text: "I care because I do not see the construction." }, { label: "Irony", text: "I see the construction, so I refuse commitment." }, { label: "Metamodern sincerity", text: "I see the construction and choose commitment anyway." }],
    bridges: [{ label: "Date · taste", trigger: "Someone admits loving something uncool.", bridge: "“I kind of think being able to love something after you understand why it’s ridiculous is more interesting than pretending not to care.”" }, { label: "Friends · cringe", trigger: "Someone calls earnestness cringe.", bridge: "“Maybe cringe is partly the social tax on sincerity.”" }, { label: "Culture", trigger: "A movie or artist mixes camp with genuine emotion.", bridge: "“That oscillation between knowingness and sincerity feels very contemporary.”" }],
    partyLevels: ["Sincerity after irony is different from naïveté.", "You can deconstruct a story and still decide it is worth inhabiting.", "The posture is oscillation rather than synthesis: skepticism and commitment remain in tension."],
    critiques: ["The concept can become a vague label for ordinary mixed feelings.", "Claims about historical cultural eras can overgeneralize across subcultures and geographies."],
    pocketLine: "The interesting move is not believing without doubt; it is caring without requiring certainty.",
    blogSeeds: [{ title: "Cringe is the tax we charge for visible sincerity", thesis: "Online culture made detachment cheap and public commitment risky; the next status move may be caring without pretending not to know how it looks.", outline: ["Open with a harmless thing people performatively disclaim liking.", "Describe irony as social armor.", "Introduce sincerity-after-irony.", "Ask when detachment protects taste and when it impoverishes it.", "End with one thing you now refuse to apologize for caring about."], personalPrompts: ["A taste or hobby you once softened with irony.", "A moment someone’s sincere enthusiasm made them more attractive rather than less." ] }],
    sources: [{ title: "Notes on Metamodernism", author: "Timotheus Vermeulen & Robin van den Akker" }]
  },
  {
    slug: "legibility-lossy-compression",
    number: 8,
    title: "Legibility as Lossy Compression",
    kicker: "The map becomes dangerous when we forget what got compressed away.",
    rating: "4/5",
    status: "queued",
    infographic: "legibility",
    oneLiner: "Institutions need simplified representations of messy reality to operate at scale; the failure mode is treating the simplified representation as the whole thing.",
    hook: "A résumé, credit score, dating profile and KPI are all lossy compression: useful because they throw information away.",
    explanation: ["James C. Scott used 'legibility' to describe how states simplify populations, land and activity into categories they can see and administer. The software analogy is lossy compression: scale becomes possible by discarding detail.", "That simplification is not automatically oppressive. Without categories there is no census, taxation, public-health planning or large-scale administration. But the category can become self-fulfilling when institutions optimize the person toward the metric."],
    distinctions: [{ label: "Reality", text: "High-dimensional, contextual, messy." }, { label: "Legible representation", text: "A few fields the institution can process." }],
    bridges: [{ label: "Date · apps", trigger: "Someone complains about dating profiles.", bridge: "“Dating apps are basically lossy compression for people. The profile is useful precisely because it throws almost everything away.”" }, { label: "Work · metrics", trigger: "Performance reviews or KPIs.", bridge: "“Every metric is a compression scheme. The question is what information it discards and whether people start optimizing for the compressed version.”" }, { label: "Friends · credit", trigger: "Credit scores, rankings, school admissions.", bridge: "“Institutions need a map to make decisions at scale, but sometimes the map starts disciplining the territory.”" }],
    partyLevels: ["Bureaucracy is basically lossy compression.", "Scale requires simplification.", "The dangerous moment is not simplification itself; it is forgetting that the representation was designed by throwing information away."],
    critiques: ["Some simplification is essential for fairness and scalable administration.", "Local knowledge can itself encode exclusion, bias, and opaque power."],
    pocketLine: "Every scalable system throws information away; wisdom is remembering what you chose not to see.",
    blogSeeds: [{ title: "Your résumé is a compression algorithm", thesis: "Modern life is full of representations optimized for institutional readability; the psychological danger is beginning to optimize ourselves for the representation.", outline: ["Open with the absurdity of compressing a career into one page.", "Explain why compression is useful rather than merely dehumanizing.", "Move through résumé, dating profile, KPI and credit score.", "Introduce the recursive effect: people change to fit the metric.", "End by asking which parts of yourself are important precisely because they are hard to render legibly."], personalPrompts: ["A résumé bullet that was technically accurate but missed what mattered.", "A metric that changed your behavior after it became visible." ] }],
    sources: [{ title: "Seeing Like a State", author: "James C. Scott" }, { title: "The Tyranny of Metrics", author: "Jerry Z. Muller" }]
  }
];

export function getIdea(slug: string) {
  return ideas.find((idea) => idea.slug === slug);
}

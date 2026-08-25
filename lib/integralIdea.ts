import type { Idea } from "@/lib/ideas";

export const integralIdea: Idea = {
  slug: "integral-theory",
  number: 9,
  title: "Integral Theory",
  kicker: "What changes when you stop asking which explanation is right and ask what each one can see?",
  rating: "NEW",
  status: "queued",
  infographic: "integral",
  oneLiner: "Integral Theory is a meta-framework for holding subjective experience, observable behavior, culture, and systems in view at the same time instead of letting one explanatory lens impersonate the whole world.",
  hook: "A surprising number of arguments are not disagreements about facts; they are fights between people looking at different quadrants of the same thing.",
  explanation: [
    "Ken Wilber's best-known move is AQAL — 'all quadrants, all levels' — an attempt to build a map spacious enough to include first-person experience, third-person observation, shared culture, and social systems without reducing one to another.",
    "The four-quadrant version is the most immediately useful. Take burnout. You can look inward at meaning and emotion; outward at sleep, workload and physiology; collectively inward at team culture and status norms; or collectively outward at incentives, staffing, process and labor markets. Each view can be valid while still being incomplete.",
    "Integral Theory then adds developmental stages, temporary states, capacities or 'lines' of development, and different types. The ambition is enormous: explain how multiple valid perspectives can coexist and develop without collapsing them into one master variable.",
    "That ambition is also the danger. A framework that can classify almost anything can become hard to falsify. The useful practice is therefore not 'believe the map.' It is to use the map as a missing-lens detector: what dimension of this situation am I systematically leaving out?"
  ],
  distinctions: [
    { label: "Interior · individual", text: "What does this feel like from inside? Meaning, intention, identity, emotion." },
    { label: "Exterior · individual", text: "What can be observed or measured? Behavior, biology, performance, actions." },
    { label: "Interior · collective", text: "What shared meanings organize the group? Culture, norms, language, legitimacy." },
    { label: "Exterior · collective", text: "What structures shape behavior? Institutions, incentives, networks, technology, economics." },
    { label: "State", text: "A temporary condition you can enter — flow, panic, awe, concentration." },
    { label: "Stage", text: "A more durable structure of sense-making or development; a much stronger claim and one that needs more empirical caution." }
  ],
  bridges: [
    { label: "Work · debugging people problems", trigger: "A team is debating whether a problem is motivation, process, culture, or incentives.", bridge: "“I’ve started wondering whether those are competing explanations at all. Sometimes they’re just different levels of the same system — the person, the behavior, the culture, and the structure.”" },
    { label: "Date · relationships", trigger: "Someone tells a story where both people have convincing explanations for the same conflict.", bridge: "“There’s a framework I like that asks what’s true from the inside, what’s observable from the outside, and what the relationship or culture is rewarding. It’s surprisingly good at making arguments less binary.”" },
    { label: "Health · habits", trigger: "A conversation turns to why people fail to change a habit.", bridge: "“We tend to pick one story — discipline, biology, identity, environment. I’m increasingly suspicious when one level claims to explain the whole person.”" },
    { label: "Politics · social problems", trigger: "Someone reduces a social problem entirely to bad individuals or entirely to systems.", bridge: "“I usually get nervous when an explanation has only people in it or only structures in it. Most durable problems seem to reproduce across both.”" },
    { label: "Founder · product", trigger: "A product metric is bad and the team is looking for a single root cause.", bridge: "“Before we pick the cause, I’d want to know whether we have an individual-behavior problem, a user-meaning problem, a community-norm problem, or a system-design problem. They require completely different interventions.”" }
  ],
  partyLevels: [
    "I like frameworks that make you ask what your explanation is leaving out. Integral Theory is basically an aggressively systematic version of that.",
    "Its cleanest idea is four perspectives: inner experience, observable behavior, shared culture, and external systems. A lot of arguments happen because each side has evidence from one quadrant and thinks it has explained the whole thing.",
    "Wilber calls the broader framework AQAL — quadrants plus developmental levels, states, lines and types. I find the quadrants much more robust than some of the developmental hierarchy claims, but the meta-question is excellent: which valid perspective has your model made invisible?"
  ],
  critiques: [
    "Integral Theory's scope is also its epistemic weakness: a sufficiently flexible meta-framework can absorb counterexamples instead of being disciplined by them.",
    "Wilber's developmental stage models synthesize traditions with very different empirical foundations. Treating the resulting hierarchy as settled science would be a mistake.",
    "The language can become status-coded and self-sealing — people can start classifying disagreement as evidence that the other person is at a 'lower stage.' That is almost the opposite of the perspectival humility the framework is best at encouraging.",
    "Not every problem needs four quadrants. Sometimes the elegant systems move is to use the simplest causal explanation that actually predicts and changes the outcome."
  ],
  pocketLine: "The point of a bigger map is not to explain everything. It is to notice what your favorite explanation cannot see.",
  blogSeeds: [
    {
      title: "Your favorite explanation is probably a quadrant",
      thesis: "Smart people often become attached not just to beliefs but to preferred kinds of explanation — psychological, behavioral, cultural, or structural — and then mistake explanatory fluency for completeness.",
      outline: [
        "Open with one problem four intelligent people explain four different ways.",
        "Show that each explanation predicts something real.",
        "Introduce the four quadrants without introducing Wilber first.",
        "Use one personal founder or relationship example where changing quadrants changed the intervention.",
        "Push back on Integral Theory's totalizing temptation: more categories are not automatically more truth.",
        "End with a diagnostic you now use: what would someone standing in the missing quadrant notice immediately?"
      ],
      personalPrompts: [
        "Which kind of explanation do you reach for first: psychology, measurable behavior, culture, or systems?",
        "A disagreement where you later realized both people were describing different layers of the same thing.",
        "A product problem where changing the level of analysis changed what you built.",
        "Where has systems thinking tempted you to overcomplicate a problem that had a simple cause?"
      ]
    }
  ],
  sources: [
    { title: "A Theory of Everything", author: "Ken Wilber", note: "The most compact entry point to Wilber's integral project and AQAL framing." },
    { title: "A Brief History of Everything", author: "Ken Wilber", note: "A more conversational introduction to the broader developmental and integrative worldview." },
    { title: "Integral Spirituality", author: "Ken Wilber", note: "Useful for AQAL's quadrants, states, stages, lines and types — and for seeing how ambitious the framework becomes." },
    { title: "The Listening Society", author: "Hanzi Freinacht", note: "A later metamodern/developmental project influenced by integral thought; useful as an adjacent rather than neutral source." }
  ]
};

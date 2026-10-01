import type { Idea } from "@/lib/ideas";

export const maintenanceIdea: Idea = {
  slug: "broken-world-thinking",
  number: 10,
  title: "Broken World Thinking",
  kicker: "Maintenance, repair & the invisible labor that makes ‘working’ look natural.",
  rating: "5/5",
  status: "today",
  infographic: "accountability",
  oneLiner: "Broken World Thinking starts from a less glamorous premise than innovation culture: complex worlds are always decaying, and functioning is an ongoing achievement produced by maintenance, repair, care, and adaptation.",
  hook: "A system that looks stable may not be robust at all; it may simply have excellent people constantly repairing the gap between the design and reality.",
  explanation: [
    "Steven J. Jackson coined ‘broken world thinking’ as a way to reverse technology studies’ usual camera angle. Instead of beginning with invention, novelty and growth, begin with erosion, breakdown and the work required to keep things going.",
    "That sounds like an argument for maintenance budgets. The more interesting claim is epistemic: breakdown and repair reveal how a system actually works. Architecture diagrams show intended dependencies; maintainers discover the real ones.",
    "A 2026 Oxford Research Encyclopedia synthesis describes maintenance as an ongoing achievement that keeps a changing world together, while repair is the more concrete work that follows breakdown. The distinction matters because a system can be ‘up’ only because people are continuously absorbing its defects.",
    "The founder-level implication is uncomfortable: hidden repair labor can counterfeit product quality. Support agents, operators, SREs, customers, partners, spouses, or communities can make a brittle system look healthy by compensating for it faster than your metrics can notice."
  ],
  distinctions: [
    { label: "Innovation", text: "Creates a new capability, artifact, institution, or arrangement." },
    { label: "Maintenance", text: "Continuously preserves useful function as conditions, components and people change." },
    { label: "Repair", text: "Responds to a concrete breakdown — sometimes restoring the old order, sometimes creating a new one." },
    { label: "Resilience", text: "Not merely avoiding failure, but retaining the capacity to notice, adapt, improvise and recover." }
  ],
  bridges: [
    { label: "Work · legacy systems", trigger: "Someone complains that an old system is ugly but mysteriously indispensable.", bridge: "“I’ve started thinking the interesting question isn’t why the system is old; it’s what invisible maintenance has kept it useful this long. The org chart usually doesn’t show that.”" },
    { label: "Date · household life", trigger: "You talk about chores, hosting, planning, or who remembers everything.", bridge: "“There’s a whole field that treats maintenance as invisible infrastructure. A household can look effortlessly functional because somebody is constantly noticing tiny failures before anyone else sees them.”" },
    { label: "City · infrastructure", trigger: "Potholes, Muni, water, bridges, public-space upkeep.", bridge: "“We celebrate ribbon cuttings much more than the people who make the thing still work twenty years later. There’s a surprisingly deep politics hidden in maintenance.”" },
    { label: "AI · product", trigger: "A team celebrates an AI workflow’s success rate.", bridge: "“Before I trust that metric, I want the repair rate: how often did a human quietly rescue the output? Hidden maintenance can make automation look much better than it is.”" }
  ],
  partyLevels: [
    "I learned a phrase I love: broken world thinking. Instead of asking how things get invented, ask why anything keeps working at all.",
    "The fun part is that maintenance isn’t just boring upkeep. Repair is often where you discover the system’s real architecture, because failure exposes dependencies the design diagram hid.",
    "STS scholars call this an infrastructural inversion: turn the system inside out by looking at the people and practices that sustain it. It changes reliability from a property of an object into an ongoing sociotechnical accomplishment."
  ],
  critiques: [
    "Maintenance can preserve bad systems as efficiently as good ones. Keeping something functioning is not evidence that it deserves to continue.",
    "The frame can romanticize care and repair labor instead of asking why particular people — often lower-status workers or women — are expected to absorb systemic defects indefinitely.",
    "Innovation and maintenance are complements, not enemies. Some legacy systems should be replaced precisely because their maintenance burden has become pathological.",
    "Not every rescue is evidence of brittleness. Redundancy and graceful recovery can be intentional properties of robust systems; the question is whether the compensating work is visible, bounded and sustainable."
  ],
  pocketLine: "Reliability is often not a property of the thing. It is a property of the repair system around the thing.",
  blogSeeds: [
    {
      title: "Your product may be worse than your metrics say because your users are too competent",
      thesis: "Human adaptation is a hidden reliability layer: users learn workarounds, support fixes ambiguity, and operators patch edge cases, causing measured success to overstate the quality of the underlying system.",
      outline: ["Open with a product that seems to work because everyone knows the workaround.", "Notice that successful outcomes erase evidence of the rescue.", "Introduce broken-world thinking as a change of camera angle.", "Show how repair labor becomes a hidden dependency.", "Propose measuring rescue load alongside failure rate.", "Distinguish healthy redundancy from exploitative compensation.", "End by asking what would break if the most competent maintainer took a month off."],
      personalPrompts: ["Where have you seen customers adapt around a product defect so effectively that the team stopped noticing it?", "Which person on a team have you known who functioned as undocumented infrastructure?", "What recurring support action should have become a product signal months earlier?"]
    },
    {
      title: "The most dangerous person to lose is sometimes the one who ‘doesn’t own’ anything",
      thesis: "Organizations systematically undervalue integrators and maintainers because their output is the absence of visible failure; success destroys the evidence of the work that produced it.",
      outline: ["Start with the employee whose work is hard to put on a roadmap.", "Explain the measurement asymmetry: launches create artifacts; maintenance creates non-events.", "Connect this to reliability engineering and care work.", "Use Apollo 13 to show how tiny change-management seams can dominate glamorous engineering.", "Ask how organizations should price avoided failure.", "End with a different promotion question: whose absence would reveal hidden dependencies?"],
      personalPrompts: ["Who have you worked with whose value became obvious only when they were away?", "Which invisible forms of coordination do you personally perform that never become tickets or roadmap items?"]
    }
  ],
  sources: [
    { title: "Rethinking Repair", author: "Steven J. Jackson", url: "https://doi.org/10.7551/mitpress/9780262525374.003.0011", note: "The foundational 2014 essay introducing broken world thinking." },
    { title: "Breakdown, Maintenance, and Repair", author: "Alejandro de Coss Corzo", url: "https://doi.org/10.1093/9780197852712.003.0114", note: "Fresh 2026 synthesis in the Oxford Research Encyclopedia of Science, Technology, and Society." },
    { title: "The Innovation Delusion", author: "Lee Vinsel & Andrew L. Russell", url: "https://www.penguinrandomhouse.com/books/566589/the-innovation-delusion-by-lee-vinsel-and-andrew-l-russell/", note: "A broader argument for rebalancing innovation culture toward maintenance and care." }
  ]
};

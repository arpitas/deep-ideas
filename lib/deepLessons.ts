export type DeepSource = {
  title: string;
  author: string;
  url: string;
  note?: string;
};

export type DeepLesson = {
  origin: string[];
  goingDeep: {
    title: string;
    paragraphs: string[];
    mechanism: string;
    diagnostic: string;
  };
  applications: {
    label: string;
    oldFrame: string;
    deeperQuestion: string;
  }[];
  current: string[];
  critiqueAdditions: string[];
  sources: DeepSource[];
};

export const todaySlug = "broken-world-thinking";

const deepLessons: Record<string, DeepLesson> = {
  "ai-as-normal-technology": {
    origin: [
      "Arvind Narayanan and Sayash Kapoor's 2025 'AI as Normal Technology' is not an argument that AI is boring. Their claim is almost the opposite: even transformative general-purpose technologies become socially powerful through applications, adoption, institutions, incentives, regulation, and complementary invention — not because capability automatically rewrites society.",
      "That distinction is becoming measurable. In a randomized field experiment across 66 firms and 7,137 knowledge workers, people were given generative AI inside tools they already used for email, documents, and meetings. Active users eventually spent about two fewer hours per week on email and worked less outside regular hours, yet researchers detected no broader shift in the quantity or composition of their work. The individual changed faster than the organization.",
      "This gives the thesis a sharper form: capability can move at software speed while collective workflows move at coordination speed. You can change how you write an email by yourself. You cannot unilaterally abolish the meeting, approval chain, staffing model, incentive system, or regulatory process around it."
    ],
    goingDeep: {
      title: "The factory owners who installed the future — and kept the past",
      paragraphs: [
        "Around 1900, a factory was physically organized around power. One steam engine or large motor drove line shafts; leather belts descended to individual machines. Power had geometry. Machines had to sit where mechanical energy could reach them, not necessarily where the production sequence made the most sense.",
        "Early electrification could therefore be strangely disappointing. A factory owner could replace the steam engine with one large electric motor while preserving the shafts, belts, multistory layout, maintenance patterns, and workflow. The energy source was futuristic; the architecture was inherited. Paul David's classic history of electrification made this the central lesson of general-purpose technologies: the large gains required complementary co-invention, not merely substitution.",
        "The consequential move was unit drive: putting smaller electric motors on individual machines. Once machines no longer had to orbit a central shaft, designers could arrange them around the flow of work. Factories could spread horizontally, reduce mechanical transmission losses and downtime, improve material handling, and redesign production itself. Electricity's deepest contribution was not doing the old factory's job more cheaply. It removed a constraint around which the old factory had been designed.",
        "Now look again at the 66-firm AI experiment. AI was integrated into email, meetings, and writing. People used it; email time fell. But the surrounding job largely stayed intact. That is almost a controlled demonstration of the electric-steam-factory problem: improve a component while preserving the coordination architecture. The bottleneck migrated from cognition to collective redesign.",
        "A second study makes the possible redesign visible. Researchers followed 5,179 customer-support agents using a generative-AI assistant. Productivity rose 14% on average, but 34% for novice and lower-skilled workers, with minimal benefit for the most experienced workers. The authors found suggestive evidence that AI was transmitting practices associated with strong agents and helping newer workers move down the experience curve faster.",
        "The interesting question is not 'how many more tickets per hour?' It is: which pieces of supervision, onboarding, escalation, specialization, and geographic concentration existed because expert judgment was expensive to transmit? If that scarcity changes, the optimal organization may change too.",
        "That yields a design pattern: identify the scarce resource that shaped the workflow; identify the compensating structure built around that scarcity; then ask what becomes unnecessary if AI makes the resource cheaper. If senior-engineer attention was scarce, do not stop at having AI draft review comments. Ask whether every class of change still needs the same review topology. If physician documentation time was scarce, do not stop at faster notes; ask which parts of the encounter were organized around documentation rather than care.",
        "Call this the Steam Factory Test: after adding AI, does the surrounding workflow look basically identical? If yes, you may have found a useful productivity feature — but you probably have not yet found the AI-native system."
      ],
      mechanism: "General-purpose technologies often create their biggest gains by changing what is scarce. Once a constraint becomes cheap, structures built to ration, transmit, or compensate for that scarce resource can become obsolete.",
      diagnostic: "What constraint caused this workflow to have this shape — and if that constraint disappeared, would we design the workflow this way today?"
    },
    applications: [
      {
        label: "Software engineering",
        oldFrame: "Use AI to draft the senior engineer's review comment faster.",
        deeperQuestion: "Which review paths exist because senior-engineer attention is scarce? If routine judgment becomes cheap, should the review topology itself change?"
      },
      {
        label: "Customer support",
        oldFrame: "Use AI so each agent resolves more tickets per hour.",
        deeperQuestion: "If expert tacit knowledge becomes widely available, what happens to training, escalation tiers, specialization, and the experience curve?"
      },
      {
        label: "Medicine",
        oldFrame: "Use AI to write the doctor's note faster.",
        deeperQuestion: "Which parts of the visit exist because physician attention and documentation capacity are scarce — and which parts genuinely require physician judgment?"
      },
      {
        label: "Education",
        oldFrame: "Use AI to grade 200 versions of the same essay faster.",
        deeperQuestion: "If individualized feedback becomes cheap, why are 200 students producing the same artifact for one scarce grader in the first place?"
      }
    ],
    current: [
      "The idea has stayed live rather than becoming a 2025 curiosity. In May 2026, Narayanan and Kapoor extended the framework into AI-risk governance, arguing that societies should invest in distributed resilience — cybersecurity, auditing, transparency, safe harbors, and institutional competence — rather than assume every powerful AI capability requires an extraordinary centralized intervention.",
      "That debate sharpens the core disagreement around 'normal technology.' The normal-tech camp expects the effects of AI to be strongly mediated by institutions and complementary systems. Critics worry that cyber, bio, autonomous-agent, or recursive capability gains could outrun those slow institutions. So the useful position is not 'AI will be slow.' It is: capability curves and diffusion curves are different objects, and you should not infer one directly from the other."
    ],
    critiqueAdditions: [
      "The electricity analogy can become a sedative. Software diffuses much faster than physical plant, and capable agents may themselves automate pieces of coordination and organizational redesign.",
      "A workflow surviving AI does not prove the workflow is obsolete; it may encode trust, liability, redundancy, craft, or social coordination that a task-level benchmark does not measure.",
      "Organizational redesign is not automatically liberating. Making expertise easier to transmit can flatten craft, deskill workers, concentrate managerial control, or remove useful redundancy. The goal is not to delete every old constraint, but to understand what function it was serving."
    ],
    sources: [
      {
        title: "AI as Normal Technology",
        author: "Arvind Narayanan & Sayash Kapoor",
        url: "https://knightcolumbia.org/content/ai-as-normal-technology",
        note: "The foundational 2025 essay: methods, applications, adoption, and institutions move on different clocks."
      },
      {
        title: "Shifting Work Patterns with Generative AI",
        author: "Eleanor W. Dillon, Sonia Jaffe, Nicole Immorlica & Christopher Stanton",
        url: "https://www.aeaweb.org/articles?id=10.1257/aeri.20250275",
        note: "Randomized field experiment across 66 firms and 7,137 workers: email time fell, but broader task composition did not measurably reorganize."
      },
      {
        title: "Generative AI at Work",
        author: "Erik Brynjolfsson, Danielle Li & Lindsey R. Raymond",
        url: "https://www.nber.org/papers/w31161",
        note: "5,179 support agents; productivity gains were much larger for novice and lower-skilled workers, suggesting transmission of expert practices."
      },
      {
        title: "The Dynamo and the Computer",
        author: "Paul A. David",
        url: "https://www.jstor.org/stable/2006600",
        note: "Classic historical argument that electrification needed complementary organizational co-invention."
      },
      {
        title: "Do AI Risks Require Extraordinary Government Intervention?",
        author: "Sayash Kapoor & Arvind Narayanan",
        url: "https://www.knightcolumbia.org/blog/do-ai-risks-require-extraordinary-government-intervention",
        note: "Their May 2026 extension of the normal-technology frame into resilience and AI governance."
      }
    ]
  }
};

export function getDeepLesson(slug: string) {
  return deepLessons[slug];
}

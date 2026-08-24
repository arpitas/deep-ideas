export type SupplementalDeepLesson = {
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
  sources: {
    title: string;
    author: string;
    url: string;
    note?: string;
  }[];
};

export type DeepPresentation = {
  applicationOverline: string;
  applicationTitle: string;
  applicationIntro: string;
  oldLabel: string;
  newLabel: string;
  pocketLabel: string;
};

export type MediaRecommendation = {
  title: string;
  creator: string;
  format: "Video" | "Audio" | "Video / audio";
  duration: string;
  url: string;
  why: string;
  pick?: string;
};

const supplementalDeepLessons: Record<string, SupplementalDeepLesson> = {
  "accountability-sinks": {
    origin: [
      "An accountability sink is more than a frustrating rule or an absent manager. Dan Davies' cybernetic framing asks whether negative feedback can travel from the people experiencing a decision to somewhere with enough authority and memory to change the system that produced it.",
      "That changes the design question. Large organizations need rules, automation, metrics, and delegated authority; otherwise they cannot scale. The pathology begins when those abstractions absorb the complaint as an individual exception while preventing the exception from becoming information about the rule.",
      "The deepest version of the idea therefore is not 'bureaucracies are bad.' It is that a system can repair outcomes locally while remaining structurally unable to learn globally."
    ],
    goingDeep: {
      title: "The plane crash where the warning had already arrived",
      paragraphs: [
        "On December 1, 1974, TWA Flight 514 was approaching Washington Dulles through cloud and turbulence. The crew misunderstood an air-traffic-control clearance, descended too early, and struck a Virginia mountain. Everyone aboard was killed.",
        "The disturbing discovery came afterward. Six weeks earlier, a United Airlines crew had made essentially the same interpretation on the same approach and narrowly missed the same mountain. They landed, realized what had happened, and reported the near-miss through United's internal safety program. United warned its own pilots. The information existed. It simply stopped at the organizational boundary.",
        "That is a much more interesting accountability failure than 'somebody should have been punished.' A living system had generated a weak signal of catastrophe, but the architecture could not propagate it to the wider system that needed to learn. The later crash contained little information that the near-miss had not already supplied; what changed was the price paid for noticing it.",
        "The response eventually helped produce the FAA/NASA Aviation Safety Reporting System. Its design is counterintuitive: NASA, which does not regulate or enforce aviation rules, administers a confidential, voluntary reporting channel. The FAA recognized that if the enforcement authority directly collected confessions, rational pilots would suppress exactly the information the system needed. So aviation separated one learning channel from the punishment channel.",
        "This yields the first solution pattern: change the incentives around weak signals. If admitting a near-miss is personally dangerous, the organization selects for silence. Confidentiality and limited non-punitive protections do not eliminate accountability; they make a different kind of accountability possible — accountability to future system performance.",
        "Toyota solves a different part of the same problem. In jidoka, an abnormality can stop production automatically, or a worker can pull the stop cord and summon help through the andon system. Instead of requiring information to climb a hierarchy before anything happens, authority temporarily moves toward the anomaly. The worker closest to the signal is not merely a sensor; the sensor has interrupt power.",
        "Google SRE adds the third piece with blameless postmortems. After a significant incident, the point is not merely to restore service or identify who touched the wrong command. The organization records contributing conditions and creates preventive actions, then shares and aggregates postmortems so one team's failure can become another team's prior knowledge. The signal becomes institutional memory.",
        "Put the three together and you get a reusable architecture: INTERRUPT — can the person nearest the anomaly stop damage? CONFESS — can people reveal mistakes and near-misses without making concealment the rational strategy? LEARN — is there a mechanism that changes code, rules, training, or incentives afterward? Most organizations have one of these. High-reliability systems deliberately connect all three.",
        "For software founders, the most useful extension is to instrument rescues, not only failures. If a retry, guardrail, moderator, support agent, or user correction repeatedly prevents an upstream defect from surfacing, your headline success rate can improve while the underlying architecture becomes more fragile. A safeguard that works perfectly can make the defect it is compensating for invisible.",
        "So a mature system should ask not only 'what failed?' but 'what almost failed, what saved it, and is that rescue becoming a hidden dependency?' Near-misses are often cheaper and more abundant training data than disasters. Success, paradoxically, can be the thing that hides fragility."
      ],
      mechanism: "Reliable systems do not merely collect feedback. They engineer the path from weak signal to authority to institutional memory — while designing incentives so people do not suppress the signal before the system can see it.",
      diagnostic: "Where does this system capture near-misses, protect truthful reporting, and convert what it learns into changed behavior?"
    },
    applications: [
      {
        label: "1 · INTERRUPT",
        oldFrame: "Frontline people can report the anomaly, but the process continues until somebody higher up decides it is serious.",
        deeperQuestion: "What classes of anomaly should give the person or subsystem closest to the signal the power to pause, rollback, quarantine, or escalate immediately?"
      },
      {
        label: "2 · CONFESS",
        oldFrame: "The same channel that asks what went wrong also determines who gets blamed, disciplined, or performance-managed.",
        deeperQuestion: "Where do we need a protected learning channel so that revealing a mistake is more rational than hiding it — while still excluding recklessness, fraud, or intentional harm?"
      },
      {
        label: "3 · LEARN",
        oldFrame: "A customer, operator, or engineer fixes the immediate problem and the system returns to green.",
        deeperQuestion: "What artifact makes this incident reusable knowledge: an eval, postmortem, policy change, automated check, training update, or cross-team alert?"
      },
      {
        label: "4 · COUNT RESCUES",
        oldFrame: "We measure final success and visible failures, so a request rescued by a retry or human correction looks successful.",
        deeperQuestion: "What is our rescue rate? Which components look healthy only because another layer silently compensates for them?"
      }
    ],
    current: [
      "The framework has become more relevant, not less, as organizations insert AI between policy and action. Davies' warning is that adding a smarter decision engine to a badly designed decision system can simply create a more persuasive accountability sink: the human can point to the model, while the model has no institutional responsibility of its own.",
      "The deeper contemporary question is therefore not merely whether an AI decision is explainable. It is whether anomalies, overrides, near-misses, and disagreements have a designed route back into the model, policy, and organization — and whether anyone has both the authority and obligation to act on that information."
    ],
    critiqueAdditions: [
      "Blamelessness can become euphemistic if leaders use 'the system' to avoid consequences for negligence or repeated reckless behavior. Learning channels and disciplinary channels should be distinguishable, not mutually exclusive.",
      "Giving frontline actors stop authority has costs: false alarms, local optimization, delay, and strategic misuse. The design problem is to create interruptibility without making every participant an unlimited veto point.",
      "Near-miss data is selected data. People report what they notice and what they feel safe reporting, so confidential reporting should complement telemetry, audits, mandatory reporting, and independent investigation rather than replace them."
    ],
    sources: [
      {
        title: "The Unaccountability Machine",
        author: "Dan Davies",
        url: "https://press.uchicago.edu/ucp/books/book/chicago/U/bo252799883.html",
        note: "The contemporary systems/cybernetics framework behind accountability sinks."
      },
      {
        title: "Half a Million Incident Reports Later: The Origins of ASRS",
        author: "NASA Aviation Safety Reporting System",
        url: "https://asrs.arc.nasa.gov/publications/callback/cb_260.htm",
        note: "NASA's account of TWA 514, the United near-miss six weeks earlier, and why an independent confidential reporting system was created."
      },
      {
        title: "Toyota Production System — Jidoka",
        author: "Toyota Motor Corporation",
        url: "https://global.toyota/en/company/vision-and-philosophy/production-system/",
        note: "Toyota's own description of stop authority, andon, abnormality detection, and prevention of recurrence."
      },
      {
        title: "Postmortem Culture: Learning from Failure",
        author: "Google Site Reliability Engineering",
        url: "https://sre.google/sre-book/postmortem-culture/",
        note: "Blameless postmortems as a mechanism for turning incidents into preventive action and shared institutional memory."
      }
    ]
  }
};

const presentations: Record<string, DeepPresentation> = {
  "accountability-sinks": {
    applicationOverline: "The solution architecture",
    applicationTitle: "Interrupt → Confess → Learn",
    applicationIntro: "The common thread across aviation, Toyota, and SRE is not 'more feedback.' It is designing what happens to a weak signal after somebody notices it.",
    oldLabel: "COMMON FAILURE MODE",
    newLabel: "DESIGN QUESTION",
    pocketLabel: "THE SYSTEMS QUESTION"
  }
};

const mediaRecommendations: Record<string, MediaRecommendation[]> = {
  "accountability-sinks": [
    {
      title: "The Unaccountability Machine",
      creator: "Dan Davies with Martin Reeves · BCG Henderson Institute",
      format: "Video / audio",
      duration: "~20 min",
      url: "https://bcghendersoninstitute.com/the-unaccountability-machine-with-dan-davies/",
      why: "Best concise primer. Davies gets from failing information systems to cybernetics, repeated mistakes, AI, and concrete improvement ideas without requiring the book first.",
      pick: "START HERE"
    },
    {
      title: "Balancing control and chaos",
      creator: "Dan Davies with Patrick McKenzie · Complex Systems",
      format: "Audio",
      duration: "1h 24m",
      url: "https://www.complexsystemspodcast.com/episodes/dan-davies-organizations-fraud/",
      why: "Best founder/engineer version. The conversation gets into black boxes, AI, accountability sinks, empowering employees, fraudogenic environments, and organizational design."
    },
    {
      title: "Dan Davies on The Unaccountability Machine",
      creator: "The Decision-Making Studio",
      format: "Video",
      duration: "1h 18m",
      url: "https://www.youtube.com/watch?v=3pm8_ssLtdQ",
      why: "Best long-form explanation of the book itself, including Stafford Beer, variety engineering, management overload, and why large systems end up making nobody responsible."
    }
  ],
  "ai-as-normal-technology": [
    {
      title: "AI As Normal Technology",
      creator: "Sayash Kapoor with Kevin Frazier · Future Knowledge",
      format: "Video / audio",
      duration: "51 min",
      url: "https://futureknowledge.transistor.fm/episodes/ai-as-normal-technology",
      why: "Best direct explanation by a co-author. It stays close to the actual thesis: AI as infrastructure shaped by adoption, institutions, incentives, and governance rather than as an autonomous destiny.",
      pick: "START HERE"
    },
    {
      title: "Hard Fork Live: Differing Visions of an A.I. Future",
      creator: "Sayash Kapoor vs. Daniel Kokotajlo · The New York Times",
      format: "Audio",
      duration: "56 min",
      url: "https://www.iheart.com/podcast/326-hard-fork-71510947/episode/hard-fork-live-part-3-differing-337109761/",
      why: "Best counterpoint. Kapoor's normal-tech view is put directly against the AI-2027-style acceleration thesis, which is much better intellectual training than hearing only one camp."
    },
    {
      title: "Debunking AI's Existential Risk",
      creator: "Arvind Narayanan & Sayash Kapoor with Adam Conover · Factually!",
      format: "Video",
      duration: "Long-form",
      url: "https://www.youtube.com/watch?v=6Nd40xSudYA",
      why: "The most accessible and playful version. Useful after the core episode if you want to hear how the framework changes arguments about jobs, existential risk, and AI governance."
    }
  ]
};

export function getSupplementalDeepLesson(slug: string) {
  return supplementalDeepLessons[slug];
}

export function getDeepPresentation(slug: string) {
  return presentations[slug];
}

export function getMediaRecommendations(slug: string) {
  return mediaRecommendations[slug] ?? [];
}

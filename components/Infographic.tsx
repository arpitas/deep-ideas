export function Infographic({ kind }: { kind: string }) {
  if (kind === "accountability") {
    return (
      <div className="infographic" aria-label="Accountability sink infographic">
        <div className="info-title">A system can make decisions without anyone owning them</div>
        <div className="flow-row">
          <div className="flow-card"><span className="eyebrow">1</span><strong>Rule</strong><small>policy · metric · model</small></div>
          <div className="arrow">→</div>
          <div className="flow-card"><span className="eyebrow">2</span><strong>Decision</strong><small>the system acts</small></div>
          <div className="arrow">→</div>
          <div className="flow-card"><span className="eyebrow">3</span><strong>Reality</strong><small>a weird outcome appears</small></div>
        </div>
        <div className="feedback-row">
          <div className="feedback-label">feedback should travel back ↩</div>
          <div className="sink">🕳️<span>accountability sink</span></div>
          <div className="blocked">×</div>
          <div className="flow-card soft"><strong>Person who can change it</strong><small>never hears the anomaly</small></div>
        </div>
        <div className="info-thesis">Accountability is not just blame. It is whether consequences can change future decisions.</div>
      </div>
    );
  }

  const map: Record<string, { left: string; middle: string; right: string; thesis: string }> = {
    abundance: { left: "Good goals", middle: "More veto points", right: "Less capacity", thesis: "A society can be excellent at stopping bad things — and accidentally become bad at building good things." },
    ai: { left: "Model capability", middle: "Institutions adapt slowly", right: "Real-world impact", thesis: "The bottleneck may move from intelligence to adoption, workflow redesign, incentives, and trust." },
    information: { left: "Information", middle: "Shared belief", right: "Coordination", thesis: "Some information is powerful because it synchronizes behavior, not because it perfectly mirrors reality." },
    gift: { left: "I give", middle: "No exact ledger", right: "System persists", thesis: "Reciprocity can coordinate value without pricing every interaction." },
    moral: { left: "Tiny ethical choices", middle: "80,000 work hours", right: "Moral impact", thesis: "We moralize consumption more readily than the allocation of our productive lives." },
    metamodern: { left: "Irony", middle: "Self-awareness", right: "Sincerity", thesis: "Knowing something is constructed does not require refusing to care about it." },
    legibility: { left: "Messy person", middle: "Score / category / KPI", right: "Institutional decision", thesis: "Scale requires compression. Trouble starts when the compressed map is mistaken for the territory." },
    integral: { left: "Inner experience", middle: "Behavior · culture · systems", right: "Bigger diagnosis", thesis: "A useful explanation can still be incomplete. Integral Theory asks which valid perspective your favorite lens has made invisible." },
  };
  const item = map[kind] ?? map.legibility;
  return (
    <div className="infographic compact">
      <div className="flow-row">
        <div className="flow-card"><strong>{item.left}</strong></div>
        <div className="arrow">→</div>
        <div className="flow-card accent"><strong>{item.middle}</strong></div>
        <div className="arrow">→</div>
        <div className="flow-card"><strong>{item.right}</strong></div>
      </div>
      <div className="info-thesis">{item.thesis}</div>
    </div>
  );
}

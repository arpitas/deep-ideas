import Link from "next/link";
import { notFound } from "next/navigation";
import { Infographic } from "@/components/Infographic";
import { getIdea, ideas } from "@/lib/ideas";

export function generateStaticParams() {
  return ideas.map((idea) => ({ slug: idea.slug }));
}

export default async function IdeaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const idea = getIdea(slug);
  if (!idea) notFound();
  const nextIdea = ideas[(idea.number) % ideas.length];

  return (
    <main>
      <header className="shell article-nav"><Link href="/" className="brand">deep ideas<span className="dot">.</span></Link><Link href="/">All ideas</Link></header>
      <article className="shell article">
        <div className="article-head">
          <div className="article-meta"><span className="pill">IDEA {String(idea.number).padStart(2, "0")}</span><span>{idea.rating}</span>{idea.status === "today" && <span className="pill live">TODAY</span>}</div>
          <h1>{idea.title}</h1>
          <p className="dek">{idea.kicker}</p>
        </div>

        <Infographic kind={idea.infographic} />

        <section className="lead-section"><p className="overline">The idea in one sentence</p><h2>{idea.oneLiner}</h2><blockquote>{idea.hook}</blockquote></section>

        <section className="article-section two-col">
          <div><p className="overline">Go deeper</p><h2>What is actually going on?</h2></div>
          <div className="prose">{idea.explanation.map((p) => <p key={p}>{p}</p>)}</div>
        </section>

        <section className="article-section">
          <div className="section-head small"><p className="overline">Useful distinctions</p><h2>Keep these separate in your head.</h2></div>
          <div className="distinction-grid">{idea.distinctions.map((d) => <div className="distinction" key={d.label}><strong>{d.label}</strong><p>{d.text}</p></div>)}</div>
        </section>

        <section className="article-section bridge-section">
          <div className="section-head small"><p className="overline">Conversation bridges</p><h2>How this idea actually gets into a date.</h2><p>Do not introduce the theory. Wait for the doorway.</p></div>
          <div className="bridge-list">{idea.bridges.map((b) => <div className="bridge" key={b.label}><div className="bridge-label">{b.label}</div><div><small>THE DOORWAY</small><p>{b.trigger}</p></div><div><small>THE BRIDGE</small><p className="quote">{b.bridge}</p></div></div>)}</div>
        </section>

        <section className="article-section party-section">
          <div className="section-head small"><p className="overline">The three-level rule</p><h2>Earn the nerdiness.</h2></div>
          <div className="levels">{idea.partyLevels.map((level, index) => <div className="level" key={level}><span>LEVEL {index + 1}</span><p>{level}</p><small>{index === 0 ? "playful" : index === 1 ? "interesting" : "nerdy — only if they keep going"}</small></div>)}</div>
        </section>

        <section className="article-section two-col critique">
          <div><p className="overline">Don’t flatten it</p><h2>The strongest pushback.</h2></div>
          <div className="prose">{idea.critiques.map((c) => <p key={c}>{c}</p>)}</div>
        </section>

        <section className="pocket"><span>KEEP ONE LINE</span><p>“{idea.pocketLine}”</p></section>

        <section className="article-section blog-section">
          <div className="section-head small"><p className="overline">Blog seeds</p><h2>Use the thinker as a catalyst, not a book report.</h2><p>Scene → observation → distinction → your argument → source as supporting character → critique → personal ending.</p></div>
          <div className="seed-list">{idea.blogSeeds.map((seed) => <div className="seed" key={seed.title}><span className="pill">ANGLE</span><h3>{seed.title}</h3><p className="seed-thesis">{seed.thesis}</p><div className="seed-columns"><div><small>SCAFFOLD</small><ol>{seed.outline.map((x) => <li key={x}>{x}</li>)}</ol></div><div><small>MAKE IT YOURS</small><ul>{seed.personalPrompts.map((x) => <li key={x}>{x}</li>)}</ul></div></div></div>)}</div>
        </section>

        <section className="article-section sources">
          <div className="section-head small"><p className="overline">People & books</p><h2>Names worth knowing.</h2></div>
          <div className="source-grid">{idea.sources.map((s) => <div className="source" key={`${s.author}-${s.title}`}><strong>{s.title}</strong><span>{s.author}</span>{s.note && <p>{s.note}</p>}</div>)}</div>
        </section>

        <Link href={`/ideas/${nextIdea.slug}`} className="next-idea"><span>NEXT IDEA</span><strong>{nextIdea.title}</strong><span>→</span></Link>
      </article>
    </main>
  );
}

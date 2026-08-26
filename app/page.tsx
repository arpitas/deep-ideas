import Link from "next/link";
import { allIdeas } from "@/lib/allIdeas";
import { getDeepLesson, todaySlug } from "@/lib/deepLessons";
import { getSupplementalDeepLesson } from "@/lib/supplementalDeepLessons";

export default function Home() {
  const today = allIdeas.find((idea) => idea.slug === todaySlug)!;

  return (
    <main>
      <section className="hero shell">
        <div className="navline"><div className="brand">deep ideas<span className="dot">.</span></div><div className="tag">one useful lens a day</div></div>
        <div className="hero-grid">
          <div>
            <p className="overline">A small intellectual operating system</p>
            <h1>Sound interesting because you <em>notice better things.</em></h1>
          </div>
          <div className="hero-copy">
            <p>Current, cross-disciplinary ideas worth actually understanding — then translating into dates, work, friends, news, and ordinary life.</p>
            <p className="muted">No seminar voice. No fact-flexing. Start with the mundane thing everyone already cares about; go deeper only when the conversation earns it.</p>
          </div>
        </div>
      </section>

      <section className="shell today-card">
        <div className="today-meta"><span className="pill live">TODAY</span><span>Idea {String(today.number).padStart(2, "0")}</span></div>
        <div className="today-grid">
          <div><h2>{today.title}</h2><p>{today.kicker}</p></div>
          <div className="today-hook"><span>The hook</span><p>{today.hook}</p><Link href={`/ideas/${today.slug}`}>Go deep <span>↗</span></Link></div>
        </div>
      </section>

      <section className="shell catalog">
        <div className="section-head"><p className="overline">The queue</p><h2>Nine lenses worth keeping in your head.</h2></div>
        <div className="idea-grid">
          {allIdeas.map((idea) => {
            const isFullLesson = Boolean(getDeepLesson(idea.slug) ?? getSupplementalDeepLesson(idea.slug));
            return (
              <Link className="idea-card" href={`/ideas/${idea.slug}`} key={idea.slug}>
                <div className="card-top"><span>{String(idea.number).padStart(2, "0")}</span><span className="rating">{idea.rating}</span></div>
                <h3>{idea.title}</h3>
                <p>{idea.oneLiner}</p>
                <div className="card-bottom"><span>{isFullLesson ? "FULL LESSON" : "STARTER PAGE"}</span><span>↗</span></div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="shell method">
        <div><p className="overline">The conversational method</p><h2>Observation before theory.</h2></div>
        <div className="method-steps">
          <div><span>1</span><strong>Ordinary thing</strong><p>Airline. Date. KPI. News story. Friend drama.</p></div>
          <div><span>2</span><strong>Interesting distinction</strong><p>Offer the lens in one human sentence.</p></div>
          <div><span>3</span><strong>Only if they bite</strong><p>Bring in the theory, author, history, critique.</p></div>
        </div>
      </section>

      <footer className="shell footer">Built to make curiosity more portable.</footer>
    </main>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import { Infographic } from "@/components/Infographic";
import { allIdeas, getAllIdea } from "@/lib/allIdeas";
import { getDeepLesson, todaySlug } from "@/lib/deepLessons";
import {
  getDeepPresentation,
  getMediaRecommendations,
  getSupplementalDeepLesson,
} from "@/lib/supplementalDeepLessons";

export function generateStaticParams() {
  return allIdeas.map((idea) => ({ slug: idea.slug }));
}

export default async function IdeaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const idea = getAllIdea(slug);
  if (!idea) notFound();

  const deepLesson = getDeepLesson(slug) ?? getSupplementalDeepLesson(slug);
  const presentation = getDeepPresentation(slug);
  const media = getMediaRecommendations(slug);
  const nextIdea = allIdeas[idea.number % allIdeas.length];
  const isToday = slug === todaySlug;
  const publishedLabel = idea.publishedAt
    ? new Date(`${idea.publishedAt}T12:00:00`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
    : null;
  const critiques = deepLesson
    ? [...idea.critiques, ...deepLesson.critiqueAdditions]
    : idea.critiques;
  const sources = deepLesson?.sources ?? idea.sources;

  return (
    <main>
      <header className="shell article-nav">
        <Link href="/" className="brand">deep ideas<span className="dot">.</span></Link>
        <Link href="/">All ideas</Link>
      </header>

      <article className="shell article">
        <div className="article-head">
          <div className="article-meta">
            <span className="pill">IDEA {String(idea.number).padStart(2, "0")}</span>
            <span>{idea.rating}</span>
            {isToday ? <span className="pill live">TODAY</span> : null}
            {publishedLabel ? <span className="published-date">{publishedLabel}</span> : null}
          </div>
          <h1>{idea.title}</h1>
          <p className="dek">{idea.kicker}</p>
        </div>

        <Infographic kind={idea.infographic} />

        <section className="lead-section">
          <p className="overline">The idea in one sentence</p>
          <h2>{idea.oneLiner}</h2>
          <blockquote>{idea.hook}</blockquote>
        </section>

        <section className="article-section two-col">
          <div>
            <p className="overline">The frame</p>
            <h2>What is actually going on?</h2>
          </div>
          <div className="prose">
            {(deepLesson?.origin ?? idea.explanation).map((p) => <p key={p}>{p}</p>)}
          </div>
        </section>

        {deepLesson ? (
          <>
            <section className="article-section two-col">
              <div>
                <p className="overline">Going deep</p>
                <h2>{deepLesson.goingDeep.title}</h2>
              </div>
              <div className="prose">
                {deepLesson.goingDeep.paragraphs.map((p) => <p key={p}>{p}</p>)}
              </div>
            </section>

            <section className="article-section">
              <div className="section-head small">
                <p className="overline">The mechanism</p>
                <h2>What the story actually teaches.</h2>
              </div>
              <div className="distinction-grid">
                <div className="distinction">
                  <strong>The underlying mechanism</strong>
                  <p>{deepLesson.goingDeep.mechanism}</p>
                </div>
                <div className="distinction">
                  <strong>The diagnostic</strong>
                  <p>{deepLesson.goingDeep.diagnostic}</p>
                </div>
              </div>
            </section>

            <section className="article-section bridge-section">
              <div className="section-head small">
                <p className="overline">{presentation?.applicationOverline ?? "The Steam Factory Test"}</p>
                <h2>{presentation?.applicationTitle ?? "Apply it to systems you already know."}</h2>
                <p>{presentation?.applicationIntro ?? "Do not ask only where AI saves time. Ask which old scarcity created the workflow."}</p>
              </div>
              <div className="bridge-list">
                {deepLesson.applications.map((application) => (
                  <div className="bridge" key={application.label}>
                    <div className="bridge-label">{application.label}</div>
                    <div>
                      <small>{presentation?.oldLabel ?? "ELECTRIC STEAM FACTORY"}</small>
                      <p>{application.oldFrame}</p>
                    </div>
                    <div>
                      <small>{presentation?.newLabel ?? "DEEPER QUESTION"}</small>
                      <p className="quote">{application.deeperQuestion}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="article-section two-col">
              <div>
                <p className="overline">Why it matters now</p>
                <h2>The argument is still evolving.</h2>
              </div>
              <div className="prose">
                {deepLesson.current.map((p) => <p key={p}>{p}</p>)}
              </div>
            </section>
          </>
        ) : null}

        <section className="article-section">
          <div className="section-head small">
            <p className="overline">Useful distinctions</p>
            <h2>Keep these separate in your head.</h2>
          </div>
          <div className="distinction-grid">
            {idea.distinctions.map((d) => (
              <div className="distinction" key={d.label}>
                <strong>{d.label}</strong>
                <p>{d.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="article-section bridge-section">
          <div className="section-head small">
            <p className="overline">Conversation bridges</p>
            <h2>How this idea actually gets into a date.</h2>
            <p>Do not introduce the theory. Wait for the doorway.</p>
          </div>
          <div className="bridge-list">
            {idea.bridges.map((b) => (
              <div className="bridge" key={b.label}>
                <div className="bridge-label">{b.label}</div>
                <div><small>THE DOORWAY</small><p>{b.trigger}</p></div>
                <div><small>THE BRIDGE</small><p className="quote">{b.bridge}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section className="article-section party-section">
          <div className="section-head small">
            <p className="overline">The three-level rule</p>
            <h2>Earn the nerdiness.</h2>
          </div>
          <div className="levels">
            {idea.partyLevels.map((level, index) => (
              <div className="level" key={level}>
                <span>LEVEL {index + 1}</span>
                <p>{level}</p>
                <small>{index === 0 ? "playful" : index === 1 ? "interesting" : "nerdy — only if they keep going"}</small>
              </div>
            ))}
          </div>
        </section>

        <section className="article-section two-col critique">
          <div>
            <p className="overline">Don’t flatten it</p>
            <h2>The strongest pushback.</h2>
          </div>
          <div className="prose">{critiques.map((c) => <p key={c}>{c}</p>)}</div>
        </section>

        {deepLesson ? (
          <section className="pocket">
            <span>{presentation?.pocketLabel ?? "THE FOUNDER QUESTION"}</span>
            <p>“{deepLesson.goingDeep.diagnostic}”</p>
          </section>
        ) : (
          <section className="pocket"><span>KEEP ONE LINE</span><p>“{idea.pocketLine}”</p></section>
        )}

        {media.length > 0 ? (
          <section className="article-section sources media-section">
            <div className="section-head small">
              <p className="overline">Watch / listen</p>
              <h2>Worth your time.</h2>
              <p>Chosen for substance and conversational usefulness, not because a video happens to exist.</p>
            </div>
            <div className="source-grid">
              {media.map((item) => (
                <div className="source" key={item.url}>
                  {item.pick ? <span className="pill live">{item.pick}</span> : null}
                  <a href={item.url} target="_blank" rel="noreferrer"><strong>{item.title}</strong></a>
                  <span>{item.creator} · {item.format} · {item.duration}</span>
                  <p>{item.why}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <section className="article-section blog-section print-omit">
          <div className="section-head small">
            <p className="overline">Blog seeds</p>
            <h2>Use the thinker as a catalyst, not a book report.</h2>
            <p>Scene → observation → distinction → your argument → source as supporting character → critique → personal ending.</p>
          </div>
          <div className="seed-list">
            {idea.blogSeeds.map((seed) => (
              <div className="seed" key={seed.title}>
                <span className="pill">ANGLE</span>
                <h3>{seed.title}</h3>
                <p className="seed-thesis">{seed.thesis}</p>
                <div className="seed-columns">
                  <div><small>SCAFFOLD</small><ol>{seed.outline.map((x) => <li key={x}>{x}</li>)}</ol></div>
                  <div><small>MAKE IT YOURS</small><ul>{seed.personalPrompts.map((x) => <li key={x}>{x}</li>)}</ul></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="article-section sources">
          <div className="section-head small">
            <p className="overline">People, papers & books</p>
            <h2>Follow the trail.</h2>
          </div>
          <div className="source-grid">
            {sources.map((s) => (
              <div className="source" key={`${s.author}-${s.title}`}>
                {s.url ? (
                  <a href={s.url} target="_blank" rel="noreferrer"><strong>{s.title}</strong></a>
                ) : (
                  <strong>{s.title}</strong>
                )}
                <span>{s.author}</span>
                {s.note ? <p>{s.note}</p> : null}
              </div>
            ))}
          </div>
        </section>

        <Link href={`/ideas/${nextIdea.slug}`} className="next-idea">
          <span>NEXT IDEA</span><strong>{nextIdea.title}</strong><span>→</span>
        </Link>
      </article>
    </main>
  );
}

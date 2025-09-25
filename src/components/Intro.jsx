import { caseTitle, caseParagraphs } from '../content/case.js';
import { reflectiveQuestions } from '../content/reflections.js';
import { sources } from '../content/sources.js';

export default function Intro({ onStart }) {
  return (
    <article className="intro">
      <header>
        <h1>{caseTitle}</h1>
      </header>

      <section>
        <h2>Overview</h2>
        {caseParagraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </section>

      <section>
        <h2>Reflective Questions</h2>
        <ul>
          {reflectiveQuestions.map((q, i) => (
            <li key={i}>{q}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Sources</h2>
        <ul>
          {sources.map((s, i) => (
            <li key={i}>
              <a href={s.url} target="_blank" rel="noreferrer">{s.label}</a>
            </li>
          ))}
        </ul>
      </section>

      <p className="actions">
        <button type="button" className="btn-primary" onClick={onStart}>
          Start quiz
        </button>
      </p>
    </article>
  );
}

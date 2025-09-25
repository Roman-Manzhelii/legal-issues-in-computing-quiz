import { caseTitle, caseParagraphs } from '../content/case.js';
import { reflectiveItems } from '../content/reflections.js';
import { sources } from '../content/sources.js';
import { useState } from 'react';

function QAItem({ item, idx }) {
  const [open, setOpen] = useState(false);
  const panelId = `qa-panel-${idx}`;
  const btnId = `qa-btn-${idx}`;

  return (
    <li className="qa-item">
      <p className="qa-question"><strong>Q{idx + 1}.</strong> {item.q}</p>

      <button
        id={btnId}
        type="button"
        className="btn-secondary"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(v => !v)}
      >
        {open ? 'hide author\'s opinion' : 'see author\'s opinion'}
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        className="qa-answer"
        data-open={open ? 'true' : 'false'}
      >
        <p><strong>Author's view:</strong> {item.a}</p>
      </div>

    </li>
  );
}

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
        <ul className="qa-list">
          {reflectiveItems.map((item, i) => (
            <QAItem key={i} item={item} idx={i} />
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

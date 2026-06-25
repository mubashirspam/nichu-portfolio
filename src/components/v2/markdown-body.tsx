import React from "react";

// Minimal, dependency-free markdown renderer for blog bodies. Supports the
// subset the posts actually use: `### ` headings, paragraphs, `> ` blockquote
// CTAs, `**bold**`, and auto-linked wa.me / marketingnizam.com references.

const LINK_RE = /(https?:\/\/[^\s)]+|wa\.me\/\d+|marketingnizam\.com)/g;

function linkify(text: string, keyPrefix: string): React.ReactNode[] {
  const parts = text.split(LINK_RE);
  return parts.map((part, i) => {
    if (LINK_RE.test(part)) {
      LINK_RE.lastIndex = 0;
      const href = part.startsWith("http") ? part : `https://${part}`;
      return (
        <a
          key={`${keyPrefix}-l${i}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black underline decoration-[#9bbf2f] decoration-2 underline-offset-2 hover:decoration-black"
        >
          {part}
        </a>
      );
    }
    return <React.Fragment key={`${keyPrefix}-t${i}`}>{part}</React.Fragment>;
  });
}

function renderInline(text: string, keyPrefix: string): React.ReactNode[] {
  // Split on **bold** while keeping the surrounding text.
  const segments = text.split(/(\*\*[^*]+\*\*)/g);
  return segments.flatMap((seg, i) => {
    if (seg.startsWith("**") && seg.endsWith("**")) {
      return (
        <strong key={`${keyPrefix}-b${i}`} className="font-semibold text-black">
          {linkify(seg.slice(2, -2), `${keyPrefix}-b${i}`)}
        </strong>
      );
    }
    return linkify(seg, `${keyPrefix}-s${i}`);
  });
}

const MarkdownBody: React.FC<{ content: string }> = ({ content }) => {
  const blocks = content
    .trim()
    .split(/\n{2,}/)
    .map((b) => b.trim())
    .filter(Boolean);

  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        if (block.startsWith("### ")) {
          return (
            <h2
              key={i}
              className="text-2xl md:text-3xl font-semibold tracking-tight text-black pt-6 md:pt-8"
            >
              {renderInline(block.replace(/^###\s+/, ""), `h${i}`)}
            </h2>
          );
        }

        if (block.startsWith(">")) {
          const text = block.replace(/^>\s?/gm, "").replace(/\n/g, " ");
          return (
            <div
              key={i}
              className="rounded-3xl bg-black text-white p-6 md:p-8 my-8 md:my-10"
            >
              <p className="text-base md:text-lg leading-relaxed text-neutral-100">
                {renderInline(text, `q${i}`)}
              </p>
            </div>
          );
        }

        const text = block.replace(/\n/g, " ");
        return (
          <p
            key={i}
            className="text-neutral-700 text-base md:text-lg leading-relaxed"
          >
            {renderInline(text, `p${i}`)}
          </p>
        );
      })}
    </div>
  );
};

export default MarkdownBody;

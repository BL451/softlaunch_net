// ============================================================
//  Testimonials
//  Add new quotes to this list. Testimonials are shown without
//  attribution — just the quote text.
//
//  Each entry: { quote, tags }
//  `tags` is optional. Use it to mark a quote as specific to a
//  particular workshop (e.g. 'touchdesigner') so it can be
//  filtered in or out when pulling random testimonials.
// ============================================================
export const TESTIMONIALS = [
  {
    quote:
      'Sooooo awesome to start with 0 knowledge and come out feeling pretty confident about exploring on my own. I liked also working in smaller groups that were encouraged to collaborate/connect and help each other.',
    tags: [],
  },
  {
    quote:
      'I found it especially valuable how the workshop made TouchDesigner feel approachable by breaking things down into simple, understandable steps.',
    tags: ['touchdesigner'],
  },
  {
    quote: 'Super beginner friendly with lots of close instruction.',
    tags: [],
  },
  {
    quote:
      'This is a beginner-friendly workshop designed for anyone interested in exploring different media, especially those with no prior experience in TouchDesigner. It offers an accessible and supportive introduction to creative experimentation with new tools.',
    tags: ['touchdesigner'],
  },
  {
    quote:
      'A really cool, chill exploration of the possibilities of AI generated content (photo, video). The other participants were great collaborators and it was fun getting to know them.',
    tags: [],
  },
];

// Return `count` random testimonials.
// Options:
//   - tag:        only include quotes that have this tag
//   - excludeTags: array of tags to leave out (default: none)
export function getRandomTestimonials(count = 2, { tag = null, excludeTags = [] } = {}) {
  let pool = TESTIMONIALS.slice();

  if (tag) {
    pool = pool.filter((t) => (t.tags || []).includes(tag));
  }

  if (excludeTags.length) {
    pool = pool.filter((t) => !(t.tags || []).some((g) => excludeTags.includes(g)));
  }

  // Fisher–Yates shuffle, then take the first `count`.
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  return pool.slice(0, Math.min(count, pool.length));
}

// Blog posts live here. To add a post, copy one object and edit it.
// Content blocks: { type: "p" | "h2" | "code" | "ul" | "quote", text | items }
// NOTE: these are starter posts — replace them with your own writing.

export const posts = [
  {
    slug: "animating-react-with-framer-motion",
    title: "Animating React Interfaces with Framer Motion",
    excerpt:
      "How I approach motion on the web — subtle, purposeful animations that guide the user instead of distracting them.",
    date: "2026-11-20",
    readTime: "5 min read",
    tags: ["React", "Animation", "UI"],
    content: [
      {
        type: "p",
        text: "Good animation is mostly invisible. It tells the user where something came from, what just changed, and where to look next. When I rebuilt this portfolio, I moved every animation to Framer Motion because it lets me describe motion declaratively, right next to the markup.",
      },
      { type: "h2", text: "Start with variants" },
      {
        type: "p",
        text: "Instead of wiring up timelines by hand, I define a small set of reusable variants — fade up, fade in, stagger — and share them across sections. That keeps the motion language consistent across the whole site.",
      },
      {
        type: "code",
        text: `export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

<motion.div variants={fadeUp} initial="hidden" whileInView="show" />`,
      },
      { type: "h2", text: "Rules I follow" },
      {
        type: "ul",
        items: [
          "Keep durations short (200–700ms). Long animations feel sluggish.",
          "Animate transform and opacity — they are cheap for the browser.",
          "Use layout animations for things that move, like active tab indicators.",
          "Respect reduced-motion preferences.",
        ],
      },
      {
        type: "quote",
        text: "Motion should explain, not decorate.",
      },
      {
        type: "p",
        text: "With a few primitives in place, adding polish to a new section takes minutes instead of hours.",
      },
    ],
  },
  {
    slug: "from-idea-to-deploy-fullstack",
    title: "From Idea to Deploy: My Full-Stack Workflow",
    excerpt:
      "The process I use to take a project from a rough idea to a deployed, production-ready app — design, frontend, backend and shipping.",
    date: "2026-10-08",
    readTime: "6 min read",
    tags: ["Full-Stack", "Workflow"],
    content: [
      {
        type: "p",
        text: "Every project I build — from GoTickets to Velvet Plate — follows roughly the same path. Having a repeatable workflow means I spend less time deciding what to do next and more time building.",
      },
      { type: "h2", text: "1. Sketch the core flows" },
      {
        type: "p",
        text: "Before touching code I list the two or three flows that matter most: signing up, placing an order, buying a ticket. Everything else is secondary.",
      },
      { type: "h2", text: "2. Build the UI first" },
      {
        type: "p",
        text: "I build screens in React and Tailwind with mock data. This surfaces missing states early — empty lists, loading, errors — before the backend exists.",
      },
      { type: "h2", text: "3. Wire the backend" },
      {
        type: "ul",
        items: [
          "Node.js + MongoDB when I want full control over the API.",
          "Supabase when I need auth and a database quickly.",
          "Spring Boot + PostgreSQL for larger, more structured systems.",
        ],
      },
      { type: "h2", text: "4. Ship early" },
      {
        type: "p",
        text: "I deploy as soon as the first flow works. Seeing the app live on a real URL changes how you think about it — and it makes feedback much easier to collect.",
      },
    ],
  },
  {
    slug: "lessons-from-react-native",
    title: "What Building a React Native App Taught Me",
    excerpt:
      "Lessons from building Travelogue with React Native, Expo and Supabase — and how mobile thinking changed how I build for the web.",
    date: "2026-08-14",
    readTime: "4 min read",
    tags: ["React Native", "Mobile", "Supabase"],
    content: [
      {
        type: "p",
        text: "Travelogue started as a simple idea: a place where people share experiences of places they've been. Building it in React Native with Expo taught me a lot about constraints.",
      },
      { type: "h2", text: "Small screens force clarity" },
      {
        type: "p",
        text: "On mobile there is no room for clutter. Every screen has to do one thing well. That habit carried straight back into my web work.",
      },
      { type: "h2", text: "Expo makes iteration fast" },
      {
        type: "p",
        text: "Being able to preview changes on a real device instantly made the feedback loop incredibly tight. Paired with Supabase for auth and storage, I could focus almost entirely on the experience.",
      },
      {
        type: "ul",
        items: [
          "Design for thumbs, not cursors.",
          "Handle offline and slow network states.",
          "Keep navigation shallow and predictable.",
        ],
      },
    ],
  },
];

export const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

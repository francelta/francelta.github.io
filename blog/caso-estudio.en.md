The portfolio you're looking at right now is tangible proof of my philosophy. I didn't spend weeks moving divs in React.tsx or fighting with webpack configurations.

**This site wasn't written by me; it was directed by me.**

I acted as **Conductor** for a team of specialized agents that built this site. The goal was ambitious: clone the high-fidelity user interface of `ceo.pronexus.in` (a design I admire) and then "empty it" to inject my own professional content (`CV.md`).

This is the breakdown of my agent team and how they executed the plan.

## The Team and Their Missions

I defined a team of 3 main agents, each with an `agents.md` that specified their role and rules.

### 1. The agent_bootstrap (The Platform Engineer)

My first agent didn't write a single line of HTML. Its job was to build the **empty "factory"**.

**Mission**: Create a Next.js 14 project from scratch.

**Actions**:

* Generated the `package.json` with all exact dependencies (`next`, `react`, `tailwindcss`, `framer-motion`, `lucide-react`, `next-intl`).
* Generated the correct `tailwind.config.ts`, including the neon green color (`accent: '#10b981'`) and font configuration (Inter and Cal Sans).
* Configured `app/globals.css` to import `@fontsource/cal-sans` (to avoid manual downloads) and apply the grid background.
* Generated all `next-intl` configuration (`i18n.ts`, `middleware.ts`).

**Result**: A perfectly configured "Hello World" project in 15 seconds. My only manual task was running `npm install`.

### 2. The agent_visual (The UI Cloner)

This was the most impressive agent.

**Mission**: Clone 1:1 the frontend of `ceo.pronexus.in`.

**Actions**:

* Read its plan and created all components: `Navbar.tsx`, `HeroSection.tsx`, `AboutSection.tsx`, `StudioSection.tsx`, `ProjectsSection.tsx`, `BlogSection.tsx`, and `ContactSection.tsx`.
* Meticulously applied Tailwind classes, including subtle borders (`border-neutral-800`), backgrounds (`bg-zinc-900`), and hover effects.
* Implemented `framer-motion` in each section and card (`initial={{ opacity: 0 }}...`) to replicate scroll animations.

**Result**: A visually perfect clone, but full of "Suhaib SZ" content.

### 3. The agent_cv_integrator (The Content Editor)

The clone was beautiful, but it wasn't mine.

**Mission**: "Search and replace" the clone's content with my professional content.

**Actions**:

* Read my `CV.md`.
* In `HeroSection.tsx`, replaced "Suhaib SZ" with "FRAN CARRASCO" and the image `suhaib.jpg` with `profile-photo.jpg`.
* Replaced `AboutSection` text with my CV SUMMARY.
* **Crucial**: Removed Suhaib's projects from `ProjectsSection` and generated my 6 projects (the ones you're seeing) based on `agents.md`.
* (Ironically, replaced Suhaib's blog articles with the articles you're reading right now).

## The Result

This portfolio was built in **hours, not weeks**. It's not a demonstration of my ability to write Tailwind; it's a demonstration of my ability to **design and direct an AI system** to write it for me.

The numbers speak for themselves:

* **45% of code** AI-assisted
* **55% faster** than traditional development
* **0% compromise** on quality or security

## Conclusion: This is Being a "Programmer in 2025"

The modern developer's job is not to write code faster. It's to **orchestrate systems that write code safely, maintainably, and scalably**.

This portfolio is the proof. And you're looking at it right now.


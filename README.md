# Signallab Brief

> Transform messy bookmarks into a clean AI intelligence briefing.

**Signallab Brief** is a sophisticated AI research dashboard that aggregates, classifies, and synthesizes content from across the web into actionable intelligence reports. Built for researchers, developers, and knowledge workers who need to stay on top of rapidly evolving fields.

![Built with React](https://img.shields.io/badge/React-18-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-blue) ![Vite](https://img.shields.io/badge/Vite-5-purple)

---

## The Problem

Professionals juggle dozens of tabs, bookmarks, and newsletters daily. Critical insights get buried in noise. There's no unified way to **collect**, **organize**, and **synthesize** web content into a clear, prioritized intelligence brief — until now.

## What We Built

**Signallab Brief** is an AI-powered research command center that turns chaotic web content into structured intelligence. Paste any URL and watch it get classified, analyzed, and woven into a live briefing deck — complete with confidence scores, reading times, and exportable reports.

---

## Features

- **Quick Add Bar** — Paste any URL to instantly add articles to your research inbox
- **Content Inbox** — Cards for newly added links with AI "Simplify" buttons and key takeaway bullets
- **Briefing Deck** — AI-synthesized reports across 5 domains (LLM Trends, Market, Dev Tooling, Design Systems, Industry News) with live typewriter animation
- **Keyboard Shortcuts** — Press 1-5 to instantly switch between briefing topics
- **Export to Markdown** — One-click export of any briefing as a `.md` file
- **Reading Time Estimates** — Know how long each brief takes to read
- **Project Intelligence Hub** — Sidebar "Labs" to organize research by topic with live status indicators
- **Signal Strength Meter** — Visual gauge showing data density and confidence metrics
- **Source Terminal** — Real-time scrolling log of URLs scanned and insights extracted
- **Stats Overview Bar** — At-a-glance metrics for briefs generated, sources scanned, insights extracted, and topics tracked

## Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** | UI framework with hooks and functional components |
| **TypeScript** | Type-safe development |
| **Vite** | Fast build tool and dev server |
| **Tailwind CSS** | Utility-first styling with custom HSL design tokens |
| **shadcn/ui** | Pre-built accessible UI components (Card, Tabs, Progress, ScrollArea) |
| **Lucide React** | Icon library (Flask, Scan, Zap, Terminal, etc.) |
| **TanStack React Query** | Data fetching and state management |
| **React Router** | Client-side routing |

## Project Structure

```
src/
├── components/
│   ├── ui/                  # shadcn/ui base components
│   ├── BriefingDeck.tsx     # AI-synthesized reports with typewriter effect & export
│   ├── ContentInbox.tsx     # Inbox cards with simplify & takeaway features
│   ├── HeaderBar.tsx        # Navigation header with GitHub link
│   ├── ProjectHub.tsx       # Sidebar with research lab folders
│   ├── QuickAddBar.tsx      # URL input bar
│   ├── SignalStrength.tsx   # Data density progress meter
│   ├── SourceTerminal.tsx   # Live-scrolling scan log
│   └── StatsBar.tsx         # Overview metrics bar
├── hooks/                   # Custom React hooks
├── lib/                     # Utility functions
├── pages/
│   ├── Index.tsx            # Main dashboard layout
│   └── NotFound.tsx         # 404 page
├── App.tsx                  # Root app with routing
├── index.css                # Design system tokens & utilities
└── main.tsx                 # Entry point
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm, yarn, or bun

### Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd signallab-brief

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
npm run preview
```

## License

This project is licensed under the **MIT License**.

## Acknowledgements

- [shadcn/ui](https://ui.shadcn.com/) — Beautiful, accessible component library
- [Lucide](https://lucide.dev/) — Elegant open-source icon set
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework
- [Vite](https://vitejs.dev/) — Next-generation frontend tooling
- [Linear](https://linear.app/) — Design inspiration for the clean, modern aesthetic

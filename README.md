# Signallab Brief

> Transform messy bookmarks into a clean AI intelligence briefing.

**Signallab Brief** is a sophisticated AI research dashboard that aggregates, classifies, and synthesizes content from across the web into actionable intelligence reports.

![Built with React](https://img.shields.io/badge/React-18-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-blue) ![Vite](https://img.shields.io/badge/Vite-5-purple)

---

## Features

- **Quick Add Bar** — Paste any URL to instantly add articles to your research inbox
- **Content Inbox** — Cards for newly added links with AI "Simplify" buttons and key takeaway bullets
- **Briefing Deck** — AI-synthesized reports with a live typewriter animation effect
- **Project Intelligence Hub** — Sidebar "Labs" to organize research by topic (LLM Trends, Market Analysis, etc.)
- **Signal Strength Meter** — Visual gauge showing data density of the current brief
- **Source Terminal** — Real-time scrolling log of URLs scanned and insights extracted
- **Themes Cluster** — Auto-groups links by topic with colorful, minimalist badges

## Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** | UI framework with hooks and functional components |
| **TypeScript** | Type-safe development |
| **Vite** | Fast build tool and dev server |
| **Tailwind CSS** | Utility-first styling with custom design tokens |
| **shadcn/ui** | Pre-built accessible UI components (Card, Tabs, Progress, ScrollArea) |
| **Lucide React** | Icon library (Flask, Scan, Zap, Terminal, etc.) |
| **TanStack React Query** | Data fetching and state management |
| **React Router** | Client-side routing |

## Project Structure

```
src/
├── assets/                  # Static assets
├── components/
│   ├── ui/                  # shadcn/ui base components
│   ├── BriefingDeck.tsx     # AI-synthesized report panel with typewriter effect
│   ├── ContentInbox.tsx     # Inbox cards with simplify & takeaway features
│   ├── MorningBrief.tsx     # Daily intelligence summary hero
│   ├── ProjectHub.tsx       # Sidebar with research lab folders
│   ├── QuickAddBar.tsx      # URL input bar
│   ├── SignalStrength.tsx   # Data density progress meter
│   ├── SourceTerminal.tsx   # Live-scrolling scan log
│   └── ThemesCluster.tsx    # Topic grouping with badges
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

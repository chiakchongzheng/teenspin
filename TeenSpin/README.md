# 🎯 TeenSpin - Career Explorer

A fun Progressive Web App (PWA) to help teenagers discover their future careers through random occupation exploration.

## ✨ Features

- 🎲 **Spin the Wheel** - Random occupation discovery with fun animations
- 📖 **Job Overview** - Learn what each job actually does
- 📅 **Daily Tasks** - See what a typical workday looks like
- 🛠️ **Skills Needed** - Know what skills to develop
- ✅ **Benefits & Challenges** - See the pros and cons of each career
- 📚 **Free Resources** - Curated free courses, books, practice sites & communities
- 📱 **PWA Ready** - Installable on mobile devices
- 🎨 **Modern UI** - Built with shadcn/ui and Tailwind CSS

## 🚀 Deploy to GitHub

### Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **+** icon → **New repository**
3. Repository name: `teenspin` (or your preferred name)
4. Description: "A fun PWA to help teenagers discover their future careers"
5. Choose **Public** (for portfolio)
6. Click **Create repository** (don't initialize with README)

### Step 2: Push to GitHub

Run these commands in your terminal:

```bash
# Navigate to project
cd "C:\Users\Time Will Tell\TeenSpin"

# Initialize git
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit: TeenSpin - Career Explorer

Features:
- Spin wheel for random career discovery
- 50 occupations with detailed info
- Daily tasks, skills, benefits & challenges
- Free learning resources for each career
- Modern UI with shadcn/ui + Tailwind CSS
- Framer Motion animations
- PWA ready"

# Add GitHub remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/teenspin.git

# Push to GitHub
git push -u origin main
```

### Step 3: Verify

1. Refresh your GitHub repository page
2. You should see all files uploaded

---

## 🔄 Update Code Later

```bash
# Make changes, then:
git add .
git commit -m "Describe your changes"
git push origin main
```

---

## 📋 Optional: Add .gitignore

Create `C:\Users\Time Will Tell\TeenSpin\.gitignore`:

```
# Dependencies
node_modules/

# Next.js
.next/
out/

# Build
dist/
build/

# Environment
.env*
!.env.example

# IDE
.idea/
.vscode/
*.swp

# OS
.DS_Store
Thumbs.db

# Logs
npm-debug.log*
yarn-debug.log*
```

---

## 🎯 Quick Command Summary

| Action | Command |
|--------|---------|
| Initialize | `git init` |
| Stage all | `git add .` |
| Commit | `git commit -m "message"` |
| Add remote | `git remote add origin URL` |
| Push | `git push -u origin main` |
| Check status | `git status` |

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Framework** | Next.js 14 |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS + shadcn/ui |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |
| **UI Components** | Radix UI + shadcn/ui |
| **Database** | Supabase (ready for Phase 2) |
| **PWA** | Service Worker + Manifest |

## 📦 UI Packages Installed

### Core Dependencies
```json
{
  "tailwindcss-animate": "^1.0.7",
  "class-variance-authority": "^0.7.0",
  "clsx": "^2.1.0",
  "tailwind-merge": "^2.2.0",
  "@radix-ui/react-slot": "^1.0.2"
}
```

### Radix UI Components
```json
{
  "@radix-ui/react-tooltip": "^1.0.7",
  "@radix-ui/react-dialog": "^1.0.5",
  "@radix-ui/react-dropdown-menu": "^2.0.6",
  "@radix-ui/react-accordion": "^1.1.2",
  "@radix-ui/react-avatar": "^1.0.4",
  "@radix-ui/react-progress": "^1.0.3",
  "@radix-ui/react-tabs": "^1.0.4",
  "@radix-ui/react-switch": "^1.0.3",
  "@radix-ui/react-select": "^2.0.0",
  "@radix-ui/react-separator": "^1.0.3",
  "@radix-ui/react-scroll-area": "^1.0.5"
}
```

### Custom UI Components Created
- `src/components/ui/button.tsx` - Button with variants
- `src/components/ui/card.tsx` - Card components
- `src/components/ui/badge.tsx` - Badge/Label components

## 🎨 Design System

### CSS Variables (in globals.css)
```css
--primary: 239 84% 67%       /* Indigo */
--secondary: 160 84% 39%     /* Emerald */
--accent: 38 92% 50%         /* Amber */
--background: 0 0% 100%      /* White */
--foreground: 222 84% 4.9%   /* Dark slate */
--destructive: 0 84% 60%    /* Red */
```

### Color Palette
| Name | Hex | Usage |
|------|-----|-------|
| Primary | #6366F1 | Main buttons, links |
| Secondary | #10B981 | Success states |
| Accent | #F59E0B | Highlights |
| Background | #F8FAFC | Page background |
| Dark | #1E293B | Text |

## 📁 Project Structure

```
TeenSpin/
├── src/
│   ├── app/
│   │   ├── page.tsx           # Main landing page
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # CSS + variables
│   ├── components/
│   │   ├── SpinWheel.tsx      # 🎲 Spin component
│   │   ├── OccupationDetail.tsx
│   │   └── ui/               # shadcn components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       └── badge.tsx
│   ├── data/
│   │   └── occupations.ts     # 50 occupations + resources
│   └── lib/
│       └── utils.ts           # cn() utility
├── public/
│   ├── manifest.json
│   └── sw.js
├── package.json
└── tailwind.config.ts
```

## 📊 50 Occupations with Free Resources

Each occupation includes 5 curated free resources from top platforms like MIT OpenCourseWare, Khan Academy, freeCodeCamp, and more.

## 📱 PWA

The app is PWA-ready with:
- Offline support (service worker)
- Installable on mobile
- App-like experience

## 🔧 Installation

```bash
# Navigate to project
cd TeenSpin

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📝 License

MIT

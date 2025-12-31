# SCOPE_V1

## Purpose

Ship a usable v1 of a PARA-based second brain focused on daily execution.  
This version prioritizes clarity, consistency, and momentum over completeness.

If it does not directly improve what I do today, it does not belong in v1.

---

## V1 Core Outcome

A mobile-friendly web app where I can:
- See today’s goals
- Follow strong recommended actions
- Adjust time intentionally or rely on smart defaults
- Finish the day feeling guided, not overwhelmed

---

## V1 MUST (Non-negotiable)

### Daily Focus
- A Today view as the default screen
- Clear list of daily goals
- Single-column, mobile-first layout

### Recommended Actions
- Built-in recommended actions:
  - Meditation
  - Movement
  - Reflection
- Each action has:
  - Default average time
  - Optional manual time override
  - Simple toggle between default and manual

### Time Logic
- If user sets time manually, use that
- If not, use predefined averages
- No empty or undefined states

### Persistence
- Daily state is saved
- Reloading the app restores today’s plan

### Technology
- React frontend
- .NET backend
- Simple API
- SQLite or local persistence

---

## V1 SHOULD (If time allows)

### Weekly Template
- Simple weekly planning view
- Reuses daily goal components
- Limited to:
  - Top 3 focus goals
  - One personal habit
  - One reflection item

### Monthly Awareness
- Read-only monthly overview
- No editing or analytics

---

## V1 WILL NOT (Explicitly excluded)

### Planning Horizons
- Yearly goals
- Multi-year goals
- 5 to 100 year goals

### PARA Depth
- Full Projects, Areas, Resources, Archives management
- Cross-linking or tagging
- Knowledge graph or backlinks

### User Management
- Authentication
- Accounts
- Sync across devices

### Intelligence
- AI recommendations
- Adaptive learning
- Insights or scoring

### Polish
- Animations
- Theming
- Customization
- Notifications

---

## Non-Goals

- This is not a life OS
- This is not a productivity dashboard
- This is not a note-taking app
- This is not meant for other users yet

---

## Definition of Done

V1 is done when:
- The app works well on a phone
- Daily goals and recommendations load reliably
- Time toggle behavior is predictable
- Data persists across refreshes
- I would actually use this tomorrow morning

---

## Guardrail

If a feature causes me to ask:  
“Should this be configurable or smarter?”

It is out of scope for v1.

---

## Next After V1

Only after v1 is complete:
- Long-term horizons
- Deeper PARA structure
- Intelligence and automation
- Expansion beyond personal use

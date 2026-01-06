# Development Rules

## General
- Small commits only (ideally 1 logical change)
- Prefer clarity over cleverness
- No premature abstractions
- Delete dead code immediately

## Backend (.NET)
- Controllers are thin
- No business logic in controllers
- DTOs are request/response only (not domain models)
- Explicit response shapes, no “random anonymous objects”

## Frontend (React)
- Mobile-first layout first
- Keep components small and focused
- No global state until proven needed

## Scope Discipline
- If it’s not in SCOPE_V1.md, it does not ship

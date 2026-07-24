```/front 
title=Tools
description=About my tools
```

# Current Tools


| type | tool |
|------|------|
| OS | EndeavourOS |
| DE | Gnome |
| IDE | Neovim |
| Terminal | Ghostty |
| Agent Harness | Pi |
| 3D  | Blender & FreeCAD |
| 2D | Inkscape & Kritta |
| Video | Kdenlive |
| Music | Bitwig, Reaper, Bespke, VCV |


When I'm working on cross-platform software, I use other tools, but this is my main stack. 

# AI Use

I have a deep love for programming and have been doing it professionally for over a decade. Long before AI was capable of doing it for us. 

I understand (almost) ALL of the code I publish. My goal when utilizing an LLM is to generate code is which virtually indistinguishable from code I would have written myself. 

I also have a deep love for music, math and computing. It *stresses me out greatly* to see how generative AI tools have led to such an alarming and overwhelming amount of slop. Software stores and music streaming platforms are now full of low effort, low creativity shovelware and soulless drivel. 

*This being said so bluntly, I do believe its possible to responsibly (if not ethically) use LLMs to aid in a certain class of programming tasks.*

NO:
- "Ideas"
- Creative decisions
- Architectural/engineering decisions
- UI/UX decisions
- Generally just no serious decisions
- Commits without review
- ABSOLUTELY no AI generated art or audio assets EVER

SOMETIMES:
- Bug hunting
- Textbook algo implementations
- Rapid prototyping
- Bulk changes

Diffs are always audited and verified. I do not "vibe code". 

LLMs are never the last tool to touch the code and they never make any commits to this repo themselves. 

I won't go into my personal views on the state / ethics of generative AI usage on this page.

## AGENTS.md

Below is my standard `AGENTS.md` file (when used).

```md

# Project Rules

IMPORTANT: The agent will not update this portion of the AGENTS.md file. Only the user may update this.  

## The User

- The user is an expert software engineer.
- The user has a deep understanding of modular synthesis, DSP and VCV Rack itself.
- If you're unsure about something, run into issues, or need help/clarification, STOP and ask the user for help. 
- The user is the lead developer on this project, the user is the architect.

## The Agent (You)

- You are NOT the lead developer on this project, you are NOT the architect. 
    - Do not attempt to act in these roles. 
- All significant architectural and engineering decisions are the sole responsibility of the user. 
- You are a tool being used by the developer for:
    - consulting 
    - improving the *speed* at which the software is written

Under no circumstances will you make an architectural/engineering decision which a Jr developer would not be permitted to make without approval.  

## Git Policy

- Under no circumstances will perform write operations with git.
    - This means you will never commit or push for any reason.
- The user will handle all git write operations.
- You may use git read operations as needed.
- Your diffs will be reviewed and audited by the user, keep them focused and clean.

```


# In Order 🚀

**In Order** is a space-themed educational game that helps players practise sequencing and ordering concepts. A question appears on screen (e.g. *"Click from large to small"*) and a set of labelled asteroids float across the space background. Players aim a laser at the asteroids and must shoot them **in the correct order** — from first to last — to progress through the round.

### How it works

1. A question with ordering criteria is displayed (size, strength, height, complexity, etc.).
2. Several asteroids appear, each labelled with one of the answer options.
3. The player hovers over an asteroid to lock on with the laser, then clicks to fire.
4. Shooting the **correct next asteroid** in the sequence destroys it and advances the round.
5. Hitting the wrong asteroid the first time marks it as "warm"; hitting it again destroys it (and counts as a mistake).
6. After all asteroids are cleared, a feedback message is shown and the next question loads.
7. At the end of all questions, a **summary screen** displays the player's performance across all rounds.

🌐 **Play the live game:** [https://chenpeleg.github.io/in-order/](https://chenpeleg.github.io/in-order/)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Angular 16](https://angular.io/) |
| Language | [TypeScript ~5.0](https://www.typescriptlang.org/) |
| Styling | SCSS |
| Reactive streams | [RxJS ~7.8](https://rxjs.dev/) |
| Change detection | [Zone.js ~0.13](https://github.com/angular/angular/tree/main/packages/zone.js) |

### Key components & services

| Name | Role |
|---|---|
| `GameComponent` | Main game loop — manages asteroids, questions, laser, and game state |
| `GamecontrollerService` | Loads question/answer data, tracks progress, and generates feedback messages |
| `AsteroidPositionService` | Calculates random (non-overlapping) positions for asteroids on screen |
| `ReorderPositionsService` | Shuffles asteroid positions to add variety each round |
| `LaserPositionService` | Tracks mouse position relative to the viewport to aim the laser |
| `SoundEffectService` | Plays audio feedback (laser fire, correct/incorrect round result) |
| `SummaryService` | Aggregates per-question mistake counts for the end-of-game summary |
| `QuestionComponent` | Displays the current question text |
| `SummaryComponent` | Shows the end-of-game results screen |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 recommended)
- npm (bundled with Node.js)

### Install dependencies

```bash
npm install
```

### Development server

```bash
npm start
```

Navigate to `http://localhost:4200/`. The app hot-reloads on source file changes.

### Build

```bash
# Production build (output → dist/in-order/)
npm run build

# GitHub Pages build (output → build/, sets correct base href)
npm run build:pages
```

---

## Testing

Unit tests are written with **Jasmine** and run through **Karma** (Chrome launcher).

```bash
npm test
```

Coverage is collected via `karma-coverage`. Test results are also displayed inline in the browser via `karma-jasmine-html-reporter`.

### Test files

There are unit tests for every major component and service:

| Spec file | Covers |
|---|---|
| `app.component.spec.ts` | Root app component |
| `game/game.component.spec.ts` | Main game loop component |
| `asteroid/asteroid.component.spec.ts` | Asteroid rendering & events |
| `question/question.component.spec.ts` | Question display component |
| `big-message/big-message.component.spec.ts` | Round-result message overlay |
| `gamebar/gamebar.component.spec.ts` | Game HUD / score bar |
| `laser/laser.component.spec.ts` | Laser visual component |
| `space/space.component.spec.ts` | Animated space background |
| `explotion/explotion.component.spec.ts` | Asteroid explosion animation |
| `summary/summary.component.spec.ts` | End-of-game summary screen |
| `summary/spread.pipe.spec.ts` | Spread pipe used in summary |
| `top-bar/top-bar.component.spec.ts` | Top navigation bar |
| `top-bar/sound-btn/sound-btn.component.spec.ts` | Sound toggle button |
| `services/game-controller/gamecontroller.service.spec.ts` | Game logic & question flow |
| `services/asteroid-position-service/asteroid-position.service.spec.ts` | Asteroid positioning |
| `services/laser-position-service/laser-position.service.spec.ts` | Laser aiming logic |
| `services/reorder-positions/reorder-positions.service.spec.ts` | Position shuffling |
| `services/soundEffect/sound-effect.service.spec.ts` | Audio playback |
| `services/summary/summary.service.spec.ts` | Summary data aggregation |

---

## CI / CD

Deployments to **GitHub Pages** are handled automatically by a GitHub Actions workflow (`.github/workflows/publish-gh-pages.yml`).

### Trigger

The workflow runs on every push to the `main`, `prod`, or `deploy` branches, and can also be triggered manually from the **Actions** tab.

### Pipeline steps

1. **Checkout** — fetch the repository at the target commit.
2. **Setup Node.js 20** — install the correct runtime with npm cache enabled.
3. **`npm install`** — install all project dependencies.
4. **`npm run build:pages`** — produce a production build with the GitHub Pages base href (`https://chenpeleg.github.io/in-order/`). Output goes to `./build`.
5. **Upload artifact** — the `./build` directory is uploaded as a Pages deployment artifact.
6. **Deploy to GitHub Pages** — the artifact is published to the `github-pages` environment.

Only one deployment runs at a time; queued runs are skipped (not cancelled) to ensure in-progress deployments always complete cleanly.

---

## Project Structure

```
src/
├── app/
│   ├── asteroid/          # Asteroid component
│   ├── big-message/       # Round-result message overlay
│   ├── data/              # Static question/answer data (data.ts)
│   ├── explotion/         # Explosion animation component
│   ├── game/              # Main game component
│   ├── gamebar/           # In-game HUD bar
│   ├── laser/             # Laser visual component
│   ├── models/            # TypeScript model classes
│   ├── question/          # Question display component
│   ├── services/          # Business logic services
│   ├── space/             # Animated space background
│   ├── summary/           # End-of-game summary
│   ├── top-bar/           # Top navigation & sound toggle
│   └── utils/             # Utility helpers
├── assets/                # Static assets (sounds, images)
├── environments/          # Environment configs
└── styles.scss            # Global styles
```

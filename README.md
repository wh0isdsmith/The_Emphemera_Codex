# The Ephemera Codex

## Description

The Ephemera Codex is an interactive narrative experience exploring the intersection of technology, memory, and trauma through the lens of GregOS and Project Amoratus. This web-based application combines retro terminal aesthetics with modern web technologies to create an immersive story-driven interface.

## Table of Contents

- [Features](#features)
- [Technical Requirements](#technical-requirements)
- [Installation](#installation)
- [Development](#development)
- [Project Structure](#project-structure)
- [Component Architecture](#component-architecture)
- [Styling Guidelines](#styling-guidelines)
- [Testing](#testing)
- [Contributing](#contributing)
- [Documentation](#documentation)

## Features

### Core Features

- **GregOS Boot Interface**
  - Authentic terminal-style boot sequence
  - Dynamic error messages and system notifications
  - Retro ASCII art and animations
  - Simulated system diagnostics

- **Project Amoratus Interface**
  - Interactive technical diagrams
  - QuantumMind neural interface simulation
  - Technical documentation viewer
  - Blueprint exploration system

- **Narrative Elements**
  - Fragmented story delivery system
  - Multiple perspective viewing options
  - Dynamic text effects and glitch animations
  - Memory fragment collection system

### Advanced Features

- **User Experience**
  - Customizable terminal themes
  - Persistent user progress tracking
  - Adaptive difficulty system
  - Accessibility considerations

- **Technical Integration**
  - Real-time terminal emulation
  - Dynamic content loading
  - State persistence
  - Cross-component communication

## Technical Requirements

### Environment
- Node.js 16.x or higher
- NPM 8.x or higher
- Modern web browser with ES6+ support
- Bolt.new development environment

### Core Dependencies
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "tailwindcss": "^3.0.0",
  "@testing-library/react": "^13.0.0",
  "jest": "^29.0.0"
}
```

## Installation

1. **Clone the repository:**
   ```sh
   git clone [ephemera-codex](README.md)
   cd ephemera-codex
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment:**
   ```sh
   cp .env.example .env
   # Configure your environment variables
   ```

## Development

### Starting the Development Server
```sh
npm start
```

### Building for Production
```sh
npm run build
```

### Running Tests
```sh
npm test
npm run test:coverage
```

## Project Structure

```
ephemera-codex/
├── .github/
│   └── [copilot-instructions.md](.github/copilot-instructions.md)
├── .gitignore
├── [architectural-notes.md](architectural-notes.md)
├── [functional-requirements.md](functional-requirements.md)
├── [fileNames.md](fileNames.md)
├── [gemini/](gemini/gemini_system_prompt.md)
│   ├── [gemini_system_prompt.md](gemini/gemini_system_prompt.md)
│   └── [gregos_boot_prompt.md](gemini/gregos_boot_prompt.md)
├── [guide.md](guide.md)
├── [package.json](package.json)
├── public/
│   └── [index.html](public/index.html)
├── [README.md](README.md)
├── src/
│   ├── [App.js](src/App.js)
│   ├── components/
│   │   ├── [Dashboard.js](src/components/Dashboard.js)
│   │   ├── [EthicalConsiderations/](src/components/EthicalConsiderations/)
│   │   ├── [GregOSBootScreen.js](src/components/GregOSBootScreen.js)
│   │   ├── [INT3RN4L_3RR0R_ST0RY/](src/components/INT3RN4L_3RR0R_ST0RY/)
│   │   ├── [Navigation.js](src/components/Navigation.js)
│   │   └── [ProjectAmoratus/](src/components/ProjectAmoratus/)
│   ├── services/
│   │   └── [api.js](src/services/api.js)
│   ├── [index.js](src/index.js)
│   ├── [styles.css](src/styles.css)
│   └── utils/
│       ├── [bootSequence.js](src/utils/bootSequence.js)
│       ├── [constants.js](src/utils/constants.js)
│       └── ...
├── The_Emphemera_Codex/
└── ...
```

## Component Architecture

### Key Components

- **GregOSBootScreen**
  - Manages boot sequence simulation
  - Handles system message display
  - Controls terminal animations

- **ProjectAmoratus**
  - Technical diagram rendering
  - Interactive documentation
  - Neural interface simulation

- **INT3RN4L_3RR0R_ST0RY**
  - Story fragment management
  - Glitch effect system
  - Memory collection interface

## Styling Guidelines

### CSS Architecture
- Utilizes Tailwind CSS for utility-first styling
- BEM methodology for component-specific styles
- CSS variables for theme management
- Responsive design principles

### Theme Configuration
```css
:root {
  --gregos-primary: #00ff00;
  --gregos-background: #000000;
  --gregos-error: #ff0000;
  --terminal-font: 'VT323', monospace;
}
```

## Testing

### Unit Testing
- React Testing Library for component testing
- Jest for unit tests
- Cypress for end-to-end testing

### Test Coverage Goals
- Components: 85%
- Utilities: 90%
- Integration: 75%

## Documentation

### Key Documentation Files
- [architectural-notes.md](architectural-notes.md) - System architecture details
- [functional-requirements.md](functional-requirements.md) - Feature specifications
- [guide.md](guide.md) - Development guidelines
- [copilot-instructions.md](.github/copilot-instructions.md) - AI assistance setup

### API Documentation
- Component Props
- State Management
- Event Handlers
- Utility Functions

---


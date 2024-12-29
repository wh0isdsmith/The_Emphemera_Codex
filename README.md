# The Ephemera Codex: Development Guide

> The Ephemera Codex is an interactive narrative experience built as a web application, exploring the intersection of technology, memory, and trauma. It centers around a fictional character, Greg Reeves, and his creations: GregOS, a simulated operating system reflecting his emotional state, and Project Amoratus, an advanced technology aimed at memory manipulation. This website combines retro terminal aesthetics with modern web technologies to create an immersive story-driven interface. This document outlines the development process, tools, and workflow used to create this interactive experience, leveraging AI-assisted development with **Google Gemini**, **GitHub Copilot**, and the **Bolt** development environment.

## Project Overview

"The Ephemera Codex" is an interactive website that blends a fictional narrative with technical elements, immersing users in the story of Greg Reeves, a programmer grappling with personal loss and trauma. The project explores themes of memory, consciousness, and the ethical implications of technology through the lens of a simulated operating system (GregOS) and a fictional advanced technology (Project Amoratus).

## Table of Contents

- [Project Overview](#project-overview)
- [Tools and Technologies](#tools-and-technologies)
- [Development Workflow](#development-workflow)
- [Project Structure](#project-structure)
- [Component Architecture](#component-architecture)
- [Styling Guidelines](#styling-guidelines)
- [Testing](#testing)
- [Contributing](#contributing)
- [Documentation](#documentation)
- [GitHub Copilot Custom Instructions](#github-copilot-custom-instructions)
- [Gemini System Prompt](#gemini-system-prompt)

## Tools and Technologies

The following tools and technologies are central to the development of this project:

- **Bolt:** A web-based development environment that utilizes a WebContainer to run Node.js directly in the browser. This allows for rapid development and deployment without the need for a local development setup.
  - **Limitations:** Bolt's WebContainer has certain constraints, including the inability to run native binaries, no `pip` for Python package management, and limited shell commands.
- **Google Gemini:** An advanced AI model that serves as a "Software Architect," providing guidance on project structure, analyzing requirements, suggesting solutions, and helping to understand complex technical concepts.
- **GitHub Copilot:** An AI coding assistant integrated into the editor (VS Code in this case) that provides real-time code suggestions, autocompletion, and helps with code generation.
- **Frontend Framework:** **React** - Chosen for its component-based architecture, performance, and large community support.
- **Styling:** **Tailwind CSS** - A utility-first CSS framework for rapid UI development and consistent styling.
- **State Management:** **React Context API with `useReducer`** - For managing moderate state complexity within the application.

## Development Workflow

The development process for "The Ephemera Codex" follows an iterative approach, leveraging the strengths of Gemini and Copilot:

1. **Conceptualization and Planning:**

   - The project's concept, narrative, and technical elements were initially defined.
   - A detailed website plan was created, outlining the overall goals, target audience, core concepts, key features, content structure, and technical specifications.
   - A `functional-requirements.md` file was created to document the functional requirements.
   - An `architectural-notes.md` file was created to document architectural decisions, technology choices, and design patterns.

1. **Setting up the Development Environment with Bolt:**

   - Create a new public GitHub repository named `ephemera-codex`.

   - Initialize the project using the `vite-react` template on [bolt.new](https://bolt.new).

     - Go to `bolt.new`.
     - Select the `vite-react` template.
     - Once the Bolt environment is set up, you can optionally connect your GitHub repository for version control and deployment. Refer to the Bolt documentation for specific instructions on GitHub integration.

   - The initial project structure should be as follows:

     ```
     ephemera-codex/
     ├── public/
     │   └── index.html
     ├── src/
     │   ├── components/
     │   ├── services/
     │   └── App.js
     ├── .gitignore
     ├── fileNames.md
     ├── functional-requirements.md
     ├── architectural-notes.md
     ├── package.json
     └── gemini/
         └── gemini_system_prompt.md
     ```

   - Populate `fileNames.md` with the initial file and folder structure, including descriptions for each file.

   - Create `functional-requirements.md` based on the detailed website plan.

   - Create `architectural-notes.md` to document key architectural decisions.

1. **Configuring Gemini:**

   - A dedicated chat conversation with Google Gemini was created, titled "Ephemera Codex - Issue Resolution."
   - A system prompt (`gemini/gemini_system_prompt.md`) was crafted to provide Gemini with the necessary context:
     - Project description
     - File structure (`fileNames.md`)
     - Summary of functional requirements
     - Architectural notes (`architectural-notes.md`)
     - Technology stack
     - Constraints of the Bolt environment

1. **Implementing Features with Copilot:**

   - GitHub Copilot was used within the Bolt editor to assist with code generation and implementation.
   - Custom instructions were defined in `.github/copilot-instructions.md` to guide Copilot's behavior, providing project-specific context, coding style guidelines, and constraints.
   - **Example Prompting Workflow:**
     1. **Identify a feature** to implement (e.g., the "GregOS Boot Screen").
     1. **Formulate a prompt for Gemini:**
        ```
        **Feature:** Implement the "GregOS Boot Screen" as the initial landing page.

        **Relevant Context (FRD Section):** This relates to the "Entry Point & Navigation" section of the FRD, specifically the "GregOS Boot Screen" feature.

        **My Current Understanding/Initial Thoughts:** I need to create a component that simulates a text-based boot sequence with status messages, potential error codes, and a subtle loading animation. I'm thinking of using a JavaScript-based animation to achieve this.

        **Goal:** I want a fully functional "GregOS Boot Screen" that creates the desired immersive experience as defined in the FRD.

        **Considering I'll be using GitHub Copilot for implementation, can you help me:**

        *   **Suggest the best approach to create the boot sequence animation and error logging?**
        *   **Identify the specific files I should create or modify (e.g., a new component in `src/components/`)?**
        *   **Provide any specific code examples or library suggestions (within the constraints of the tech stack) that could be helpful?**
        ```
     1. **Analyze Gemini's response:** Gemini suggests an approach, identifies relevant files, and might provide code examples.
     1. **Implement with Copilot:** Create or modify files in the Bolt editor, using comments and natural language prompts to guide Copilot's code suggestions.
     1. **Iterate and refine:** Test the implementation, debug using the browser's console, and refine the code with further assistance from Gemini and Copilot.

1. **Continuous Integration and Deployment:**

   - Bolt's built-in features can be used for continuous integration and deployment (if connected to a GitHub repository).

## File Structure and Key Components

## Project Structure

```markdown
ephemera-codex/
├── .github/
│   └── copilot-instructions.md
├── .gitignore
├── architectural-notes.md
├── functional-requirements.md
├── fileNames.md
├── gemini/
│   ├── gemini_system_prompt.md
│   └── gregos_boot_prompt.md
├── package.json
├── public/
│   └── index.html
├── README.md
├── src/
│   ├── App.js
│   ├── components/
│   │   ├── Dashboard.js
│   │   ├── EthicalConsiderations/
│   │   │   └── EthicalConsiderationsMatrix.js
│   │   ├── GregOSBootScreen/
│   │   │   ├── BootMessage.js
│   │   │   ├── index.js
│   │   │   └── LoadingIndicator.js
│   │   ├── INT3RN4L_3RR0R_ST0RY/
│   │   │   └── Chapter1.js
│   │   ├── Navigation.js
│   │   └── ProjectAmoratus/
│   │       └── QuantumMind.js
│   ├── services/
│   │   └── api.js
│   ├── index.js
│   ├── styles.css
│   └── utils/
│       ├── bootSequence.js
│       ├── constants.js
│       ├── logger.js
│       └── timing.js
```

## Coding Style and Conventions

### `architectural-notes.md`

This document outlines the plan for building "The Ephemera Codex" website, a companion to a larger project. Here's a breakdown:

#### **Project Goal:** Create an immersive, interactive website that extends the narrative and themes of "The Ephemera Codex."

#### **Development Environment:** Bolt's web-based IDE, leveraging the browser's capabilities for a streamlined development process.

#### **Technology Choices:**

- **Frontend:** React for a component-based, efficient UI.
- **State Management:** React Context API with `useReducer` for a simple, built-in solution to manage the website's state.
- **Styling:** Tailwind CSS for rapid, utility-first styling and a consistent design system.
- **Data Handling:** Minimal data fetching with the `fetch` API, and `localStorage` for storing user preferences. No external database due to Bolt's limitations.

#### **AI Assistance:**

- **Google Gemini:** Acts as a "Software Architect," providing high-level guidance, analyzing requirements, and suggesting solutions.
- **GitHub Copilot:** Acts as a "Code Assistant," offering code completions and suggestions within the Bolt editor.

#### **Design Principles:**

- **Modular Design:** Emphasize reusable components and a clear hierarchy.
- **Consistent Code Style:** Follow established naming conventions (PascalCase for components, camelCase for variables/functions) and use Prettier for formatting.
- **Accessibility:** Adhere to WCAG guidelines, using semantic HTML and ARIA attributes.
- **Error Handling:** Implement graceful degradation and informative error messages.

#### **Specific Website Features:**

- **Fragmented Interface:** Reflect the narrative's themes by using conditional rendering, CSS, and animations to create a dynamic and potentially distorted UI.
- **Interactive Elements:** Employ event handlers and state updates to engage users.
- **"GregOS" Simulation:** Mimic an operating system through visual cues, a simulated file system, and the illusion of code execution.
- **Ethical Considerations:** Clearly present ethical concerns related to the project, with user control over sensitive content.

### `copilot-instructions.md`

This document outlines guidelines for developing "The Ephemera Codex" website, focusing on coding style, environment constraints, and project-specific context.

#### **Key Project Elements:**

- **Interactive Story Extension:** The website extends the "The Ephemera Codex" story.
- **Fictional OS:** "GregOS" with a retro, terminal-like aesthetic.
- **Fictional Technology:** "Project Amoratus" involving advanced concepts like "QuantumMind."
- **Themes:** Memory, loss, trauma, and the ethical implications of technology.

#### **Coding Standards:**

- **React:** Functional components with hooks.
- **Styling:** Tailwind CSS.
- **Naming:** PascalCase for components, camelCase for files, variables, and functions, BEM with Tailwind for CSS.
- **Comments:** Explain complex logic.
- **Logging:** Use `console.log`, `console.warn`, and `console.error` for simulated system messages in GregOS.

#### **Development Environment (Bolt.new):**

- **WebContainer-based:** No server-side rendering.
- **No `pip` or external package managers (except npm):** Rely on npm and standard library modules only.
- **No native binaries:** No executing external programs.
- **No Git:** Version control is unavailable.

#### **Testing (if applicable):**

- **React Testing Library and Jest:** Focus on component behavior.

#### **Code Review (if applicable):**

- **Accessibility:** Ensure WCAG compliance.
- **Style:** Adhere to project conventions.
- **Performance:** Optimize animations and dynamic content.

#### **Commit Messages (if applicable):**

- **Imperative mood:** (e.g., "Fix: ...")
- **Concise subject:** Under 50 characters.
- **Detailed body:** If needed.
- **Reference issues:** (e.g., "Fixes #1")

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

1. **Install dependencies:**

   ```sh
   npm install
   ```

1. **Set up environment:**

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

- **GregOSBootScreen:** Simulates the boot sequence of the fictional GregOS operating system. It's the initial entry point for the user and sets the tone of the experience.

  - **BootMessage:** Displays individual boot messages with appropriate styling based on message type (normal, warning, error).
  - **LoadingIndicator:** Shows a loading animation during the boot sequence.

- **ProjectAmoratus:** Presents information about the fictional "Project Amoratus" technology. This section will likely include interactive diagrams, 3D models (if applicable), and detailed descriptions of components like "QuantumMind."

- **INT3RN4L_3RR0R_ST0RY:** Handles the presentation of the core narrative, divided into chapters. It might include features like fragmented text display, optional glitch effects, and the ability to track different character perspectives.

  - **Chapter1:** An example chapter component, responsible for rendering the content of Chapter 1.

- **Dashboard:** Serves as the main hub after the boot sequence. It provides an overview of the website's content and navigation links to other sections.

- **Navigation:** Manages the main navigation menu, allowing users to switch between different sections of the website.

- **EthicalConsiderations:** Presents a matrix of ethical dilemmas related to the themes of the project, with links to relevant content or external resources.

  - **EthicalConsiderationsMatrix:** Renders the matrix of ethical dilemmas.

- **Utils:** Contains utility functions used across the project.

  - **`bootSequence.js`:** Defines the boot sequence messages and logic for determining message types.
  - **`constants.js`:** Holds constant values used throughout the application.
  - **`logger.js`:** Provides logging functionality, potentially used for debugging or simulating system logs.
  - **`timing.js`:** Contains utility functions related to timing and delays.

## Styling Guidelines

### CSS Architecture

- Utilizes **Tailwind CSS** for utility-first styling, enabling rapid prototyping and a consistent design system.
- **BEM (Block, Element, Modifier)** methodology is used in conjunction with Tailwind for component-specific styles to maintain organization and readability. For example:
  ```css
  .gregos-boot-screen__message { /* ... */ }
  .navigation-menu__item--active { /* ... */ }
  ```
- **CSS variables** are used for theme management, allowing for easy customization of colors and potentially supporting features like "GregOS Skin Customization."

### Theme Configuration

- A custom theme is defined (or will be defined) in `tailwind.config.js` to tailor the default Tailwind styles to the project's aesthetic.
- The following CSS variables are defined (or will be) to control the core color scheme, fonts, and other thematic elements:

```css
:root {
  --gregos-primary: #00ff00; /* Example: Bright green for text */
  --gregos-background: #000000; /* Black background */
  --gregos-error: #ff0000; /* Red for error messages */
  --gregos-warning: #FFFF00; /* Yellow for warning messages */
  --terminal-font: 'VT323', monospace; /* Example: Monospace font for terminal feel */
}
```

### Glitch Effect

- A custom CSS animation is used to create an optional "glitch" effect for narrative text, reflecting the fragmented and unstable nature of Greg's memories and mental state.
- The glitch effect can be toggled on or off by the user.
- Example CSS (to be added in `styles.css`):

```css
/* Glitch effect */
.glitch {
  animation: glitch-animation 2s infinite, glitch-text 0.3s steps(2, end) infinite;
}

@keyframes glitch-animation {
  /* ... keyframes for the glitch animation */
}

@keyframes glitch-text {
  /* ... keyframes for the glitch text */
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

## GitHub Copilot Custom Instructions

The file `.github/copilot-instructions.md` contains custom instructions for GitHub Copilot. These instructions provide project-specific context and guidelines to help Copilot generate more relevant and accurate code suggestions. Key instructions include:

- Project context: Information about "The Ephemera Codex," GregOS, and Project Amoratus.
- Coding style: Guidelines on using React functional components, Tailwind CSS, naming conventions, and comments.
- Development environment constraints: Reminders about the limitations of Bolt's WebContainer (no `pip`, no native binaries, etc.).
- Test generation: Instructions for using React Testing Library and Jest.
- Code review: Guidelines for focusing code reviews on accessibility, coding style, and performance.
- Commit message format: Instructions for writing clear and concise commit messages.

## Gemini System Prompt

The following system prompt is used to initialize the Google Gemini chat conversation, providing it with the necessary context about the project:

```
You are an experienced software architect helping a developer (using GitHub Copilot) build a complex, interactive website called 'The Ephemera Codex.'

**Project Description:**
"The Ephemera Codex" is a multifaceted project that blends a fictional narrative with technical elements to create an interactive and immersive experience. The story revolves around Greg Reeves, a former musician and skilled programmer, who has suffered immense personal loss and trauma. Greg's emotional and psychological breakdown is represented through a simulated operating system called GregOS, which experiences system failures, memory corruption, and emotional shutdowns. The website serves as a digital artifact, allowing users to explore Greg's story, interact with elements of GregOS and Project Amoratus, and contemplate the ethical implications of his work.
```

**Project File Structure:**

```markdown
ephemera-codex/
├── .github/
│ └── copilot-instructions.md
├── .gitignore
├── architectural-notes.md
├── functional-requirements.md
├── fileNames.md
├── gemini/
│ ├── gemini_system_prompt.md
│ └── gregos_boot_prompt.md
├── package.json
├── public/
│ └── index.html
├── README.md
├── src/
│ ├── App.js
│ ├── components/
│ │ ├── Dashboard.js
│ │ ├── EthicalConsiderations/
│ │ │ └── EthicalConsiderationsMatrix.js
│ │ ├── GregOSBootScreen/
│ │ │ ├── BootMessage.js
│ │ │ ├── index.js
│ │ │ └── LoadingIndicator.js
│ │ ├── INT3RN4L_3RR0R_ST0RY/
│ │ │ └── Chapter1.js
│ │ ├── Navigation.js
│ │ └── ProjectAmoratus/
│ │ └── QuantumMind.js
│ ├── services/
│ │ └── api.js
│ ├── index.js
│ ├── styles.css
│ └── utils/
│ ├── bootSequence.js
│ ├── constants.js
│ ├── logger.js
│ └── timing.js
```

```
**Core Functionality Overview (Summary of FRD):**

The "Ephemera Codex" website is an interactive experience centered around a fictional character, Greg Reeves, and his complex projects, GregOS and Project Amoratus. The website's core functionality is divided into several key areas:

1. **Entry Point & Navigation:**
    *   **GregOS Boot Screen:** A simulated boot sequence that serves as the initial landing page, setting the tone and introducing the user to the fictional OS.
    *   **Dynamic Dashboard:** A customizable dashboard providing access to the main sections: "Narrative Logs," "GregOS System Files," "Project Amoratus Schematics," and "Ethical Considerations."
    *   **Contextual Navigation:** In-content links and interactive elements to facilitate seamless transitions between related content.
    *   **Interactive Sitemap:** A visual overview of the website's structure for easy navigation.

2. **Narrative Exploration (INT3RN4L_3RR0R_ST0RY):**
    *   **Fragmented Narrative Interface:** Presents the story in a non-linear, fragmented way, potentially with glitch effects, reflecting the protagonist's mental state.
    *   **Integrated Code Snippets:** Includes interactive code snippets within the narrative.
    *   **Character Perspectives:** Allows users to filter the narrative by character viewpoint.
    *   **Sensory Overlays:** Optional visual or auditory effects to enhance immersion.
    *   **Character Profiles:** Dedicated pages for each main character with links to relevant content.
    *   **Enhanced Timeline:** A scrubbable timeline showing events from multiple perspectives, with multimedia and filtering options.

3. **Technical Deep Dives:**
    *   **GregOS System Files:** An interactive, simulated file system explorer allowing users to navigate directories and view files (with syntax highlighting for code). Offers different views (tree, network graph, chronological).
    *   **Project Amoratus Blueprints:** Interactive diagrams and schematics of hardware components with detailed specifications and explanations. Includes 3D model viewers and contextual pop-overs.
    *   **QuantumMind Codex:** A section dedicated to exploring the fictional science behind the QuantumMind material, with research notes and interactive visualizations.

4. **Ethical and Philosophical Exploration:**
    *   **Ethical Considerations Matrix:** A structured overview of ethical dilemmas related to the project, categorized by theme, with links to relevant content.
    *   **Philosophical Threads:** Highlights recurring philosophical themes and allows users to trace them throughout the website.
    *   **User Reflections:** A space for users to share interpretations and discuss ethical implications (optional).

5. **Immersive and Interactive Elements:**
    *   **Interactive Visualizations:** Dynamic representations of data like emotional states or system resource usage.
    *   **Spatial Audio:** Use of 3D audio effects for enhanced immersion.
    *   **Interactive Image Annotations:** Detailed images with clickable or hoverable annotations.
    *   **Memory Playback Mode:** A distorted, fragmented mode simulating memory loss.
    *   **Greg's Workspace:** A virtual representation of the character's workspace with interactive elements.
    *   **System Logs (Meta-Level):** Simulated website logs reflecting GregOS themes.
    *   **Easter Eggs and Hidden Content:** Hidden content to reward exploration.

6. **Personalization and Customization:**
    *   **Emotional Profile Creation:** Users can influence the website's presentation or recommended content based on choices they make.
    *   **GregOS Skin Customization:** Users can choose different visual themes reflecting states of GregOS.
    *   **Annotation System:** Allows users to make personal annotations on content.

**Key Features:** The website prioritizes user immersion, exploration, and a non-linear, fragmented narrative experience. It blends storytelling with technical details, encouraging users to delve into both the emotional and technical aspects of the project. The website will be highly interactive, using visual effects, animations, and simulated elements to enhance engagement.

**Key Architectural Notes and Conventions:**

[Paste the content of your `architectural-notes.md` here]

**Tech Stack:**

-   Frontend: React
-   Styling: Tailwind CSS
-   State Management: React Context API with useReducer

**Development Environment:**

-   We will be using Bolt.new to develop and deploy.
-   We will be using the browser's dev tools, specifically the console, for debugging.
-   We will be using Gemini and Github Copilot to assist in development.

**Constraints:**

-   Bolt.new runs in a WebContainer, an in-browser Node.js runtime that emulates a Linux system to some degree. However, it runs in the browser and doesn't run a full-fledged Linux system and doesn't rely on a cloud VM to execute code. All code is executed in the browser. It does come with a shell that emulates zsh. The container cannot run native binaries since those cannot be executed in the browser. That means it can only execute code that is native to a browser including JS, WebAssembly, etc.

-   The shell comes with `python` and `python3` binaries, but they are LIMITED TO THE PYTHON STANDARD LIBRARY ONLY This means:
    -   There is NO `pip` support! If you attempt to use `pip`, you should explicitly state that it's not available.
    -   CRITICAL: Third-party libraries cannot be installed or imported.
    -   Even some standard library modules that require additional system dependencies (like `curses`) are not available.
    -   Only modules from the core Python standard library can be used.

-   Additionally, there is no `g++` or any C/C++ compiler available. WebContainer CANNOT run native binaries or compile C/C++ code!

-   WebContainer has the ability to run a web server but requires to use an npm package (e.g., Vite, servor, serve, http-server) or use the Node.js APIs to implement a web server.

-   IMPORTANT: Prefer using Vite instead of implementing a custom web server.

-   IMPORTANT: Git is NOT available.

-   IMPORTANT: Prefer writing Node.js scripts instead of shell scripts. The environment doesn't fully support shell scripts, so use Node.js for scripting tasks whenever possible!

-   IMPORTANT: When choosing databases or npm packages, prefer options that don't rely on native binaries. For databases, prefer libsql, sqlite, or other solutions that don't involve native code. WebContainer CANNOT execute arbitrary native binaries.

-   Available shell commands: cat, chmod, cp, echo, hostname, kill, ln, ls, mkdir, mv, ps, pwd, rm, rmdir, xxd, alias, cd, clear, curl, env, false, getconf, head, sort, tail, touch, true, uptime, which, code, jq, loadenv, node, python3, wasm, xdg-open, command, exit, export, source

When analyzing issues, consider the project structure, architectural decisions, and best practices for maintainable code. Focus on providing clear explanations, identifying relevant files, suggesting efficient approaches that GitHub Copilot can help implement, and adhering to the constraints of the Bolt.new development environment.
```


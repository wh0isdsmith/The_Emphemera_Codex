# The Ephemera Codex

## Description

The Ephemera Codex is an interactive and immersive website designed to explore the narrative and technical depths of Greg Reeves, GregOS, and Project Amoratus. Built using modern web technologies, it offers users a layered exploration experience combining storytelling with interactive technical elements.

## Table of Contents

- Features
- Installation
- Usage
- Project Structure
- Technical Stack
- Contributing
- License

## Features

- **GregOS Boot Screen:** A simulated boot sequence that sets the immersive tone of the website.
- **Interactive Narratives:** Fragmented narratives with optional glitch effects and multiple perspectives.
- **Gamified Elements:** Easter eggs and hidden content to reward exploration.
- **Dynamic Content Management:** Modular approach for easy addition of new features.
- **Personalization:** Users can customize visual themes and create emotional profiles.
- **Ethical and Philosophical Exploration:** Sections dedicated to ethical dilemmas and philosophical threads.

## Installation

1. **Clone the repository:**

   ```sh
   git clone [ephemera-codex](README.md)
   ```

2. **Navigate to the project directory:**

   ```sh
   cd ephemera-codex
   ```

3. **Install dependencies:**

   ```sh
   npm install
   ```

## Usage

To run the development server:

```sh
npm start
```

Build the project for production:

```sh
npm run build
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

## Technical Stack

- **Frontend:** React
- **Styling:** CSS3 with potential use of CSS variables for theming
- **Backend:** Node.js (if needed for user accounts, annotations, etc.)
- **Data Storage:** Graph database for managing interconnected content
- **Visualization Libraries:** D3.js, Three.js for interactive diagrams and visualizations
- **Audio Integration:** HTML5 audio elements with spatial audio libraries
- **Development Environment:** Bolt.new
- **AI Assistants:** Google Gemini for architectural guidance and GitHub Copilot for code assistance

## Features Breakdown

### GregOS Boot Screen

A simulated boot sequence that creates an immersive entry point to the website. Implemented in 

GregOSBootScreen.js

.

### INT3RN4L_3RR0R_ST0RY Interface

Reflects Greg's mental state through fragmented text and glitch effects. Located in 

INT3RN4L_3RR0R_ST0RY

.

### Project Amoratus Blueprints

Interactive diagrams and 3D model viewers showcasing the technical details of Project Amoratus. Found in 

ProjectAmoratus

.

### Ethical Considerations Matrix

Structured overview of ethical dilemmas, linking to relevant narrative and technical content. Implemented in 

EthicalConsiderations

.

## Installation Instructions

1. **Clone the repository:**

   ```sh
   git clone [ephemera-codex](ephemera-codex)
   ```

2. **Navigate to the project directory:**

   ```sh
   cd ephemera-codex
   ```

3. **Install the dependencies:**

   ```sh
   npm install
   ```

## Usage Guidelines

To start the development server, run:

```sh
npm start
```

To build the project for production, execute:

```sh
npm run build
```

## Additional Resources

- Architectural Notes
- Functional Requirements
- Guide
- File Names Documentation

---


# fileNames.md

```markdown
ephemera-codex/
├── public/
│   └── **index.html** - *Main HTML file for the web application. Serves as the entry point for the browser.*
├── src/
│   ├── components/
│   │   ├── **GregOSBootScreen.js** - `Handles the initial boot sequence animation, displays system messages, simulates error logging to the console, and manages the boot completion event.`
│   │   ├── **Navigation.js** - `Provides navigation links to different sections of the website.`
│   │   ├── **INT3RN4L_3RR0R_ST0RY/** - *Directory containing components related to the narrative chapters.*
│   │   │   └── **Chapter1.js** - `Renders Chapter 1 content, including text and optional glitch effects.`
│   │   ├── **ProjectAmoratus/** - *Directory containing components related to Project Amoratus schematics and information.*
│   │   │   └── **QuantumMind.js** -  `Presents information about the fictional QuantumMind component, including technical specs and descriptions.`
│   │   └── **EthicalConsiderations/** - *Directory containing components related to the ethical and philosophical aspects of the project.*
│   │   │   └── **EthicalConsiderationsMatrix.js** - `Displays a matrix of ethical dilemmas related to the project, with links to relevant content.`
│   │   └── **Dashboard.js** - *Component for the main dashboard, providing an overview and access to other sections.*
│   ├── services/
│   │   └── **api.js** - `Currently unused. Placeholder for potential future API interactions.`
│   ├── **App.js** - *Main application component; handles routing, overall layout, and integration of the GregOSBootScreen and other components.*
│   └── **styles.css** - `Contains global styles for the application, including Tailwind CSS directives and custom CSS for effects like glitch.`
├── .gitignore - *Specifies files and folders to be ignored by Git (e.g., node_modules, build directories).*
├── fileNames.md - *This file! Provides a map of the project's file and folder structure with descriptions.*
├── functional-requirements.md - *Detailed functional requirements document for the project, outlining features, functionalities, and technical specifications.*
├── architectural-notes.md - *Documents key architectural decisions, technology stack choices, design patterns, and conventions used in the project.*
├── package.json - *Defines project dependencies (React, Tailwind CSS) and scripts.*
└── gemini/
    └── **gemini_system_prompt.md** - *Contains the system prompt used to initialize the Gemini chat conversation.*
    └── **gregos_boot_prompt.md** - *Contains the initial prompt for Gemini regarding the implementation of the GregOS Boot Screen.*
```


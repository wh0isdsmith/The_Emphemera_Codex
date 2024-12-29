# Project: The Ephemera Codex

## Project-Specific Context

This project is a website that extends the interactive story "The Ephemera Codex." It involves a fictional operating system called "GregOS" and a technology called "Project Amoratus."

When generating code related to GregOS, simulate its behavior as described in the functional requirements document. It should have a retro, terminal-like aesthetic.

When generating code related to Project Amoratus, keep in mind that it involves advanced, fictional technologies like "QuantumMind," which is a neural interface.

The narrative explores themes of memory, loss, trauma, and the ethical implications of technology.

## Coding Style and Conventions

- Use React functional components with hooks.
- Use Tailwind CSS for styling.
- Follow consistent naming conventions:
    - Components: PascalCase (e.g., `GregOSBootScreen`)
    - Files: camelCase (e.g., `gregOSBootScreen.js`)
    - Variables and Functions: camelCase (e.g., `bootSequence`)
    - CSS Classes: BEM in conjunction with Tailwind's utility classes (e.g., `gregos-boot-screen__message`)
- Add comments to explain complex logic.
- Use the `className` attribute for applying Tailwind CSS classes.
- Use `console.log`, `console.warn`, and `console.error` for logging in the GregOSBootScreen component to simulate system messages.

## Development Environment Constraints

- We are using Bolt.new, which is a WebContainer-based development environment.
- There is **NO** access to `pip` or any external package manager other than npm.
- **DO NOT** attempt to install Python packages that are not part of the standard library.
- Native binaries cannot be executed.
- Git is **NOT** available.

## Test Generation (if applicable)

- Use React Testing Library and Jest for testing components.
- Focus on testing component behavior and interactions.

## Code Review (if applicable)

- Pay close attention to accessibility when reviewing code. Ensure compliance with WCAG guidelines.
- Verify that the code adheres to the project's coding style and conventions.
- Check for potential performance issues, especially regarding animations and dynamic content.

## Commit Message Generation (if applicable)

- Use the imperative mood in the subject line (e.g., "Fix: Resolve boot sequence error").
- Keep the subject line under 50 characters.
- Provide a more detailed explanation in the body, if necessary.
- Reference related issues or components using keywords like "Fixes #1" or "Relates to INT3RN4L_3RR0R_ST0RY."
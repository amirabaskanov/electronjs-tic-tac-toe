# Valentine's Tic-Tac-Toe Desktop Application

![Electron Version](https://img.shields.io/badge/Electron-23.0.0-blue)

A cross-platform desktop implementation of Tic-Tac-Toe with Valentine's Day theme, built using ElectronJS. Features custom artwork and strategic AI opponent.

## Table of Contents
- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Installation](#installation)
- [Usage](#usage)
- [Technical Architecture](#technical-architecture)
- [Asset Attribution](#asset-attribution)

## Project Overview

This application provides a modern take on the classic Tic-Tac-Toe game with:

- Themed visual elements celebrating Valentine's Day
- Computer opponent with strategic decision-making capabilities
- Cross-platform desktop compatibility (Windows/macOS/Linux)
- Custom game states and animated transitions

## Key Features

### Gameplay Components
- **AI Implementation**: Minimax-inspired algorithm with priority-based decision making
- **Multi-Page System**: Separate view controllers for game states (Win/Lose/Draw)
- **Audio Feedback**: Contextual sound effects for game interactions
- **Visual Enhancements**:
  - Animated victory sequences
  - Responsive UI elements
  - Dynamic status updates

### Technical Components
- Electron Main/Renderer process architecture
- CSS transitions and keyframe animations
- Preload script security implementation
- Custom IPC event handling

## Installation

### Prerequisites
- Node.js v18+ 
- npm v9+

### Build Instructions
```bash
# Clone repository
git clone https://github.com/amirabaskanov/valentine-tic-tac-toe.git

# Install dependencies
npm install

# Launch development version
npm start

# Build platform-specific package
npm run make
```

**## Usage**
Game Controls
Action	Command
Place Marker	Left Click
Reset Game	Reset Button
Quit Application	Standard OS Close
AI Behavior Modes
Win Prevention: Blocks player's potential winning moves

Victory Pursuit: Prioritizes completing winning patterns

Strategic Placement: Selects optimal positions when no immediate threats

**##Technical Architecture**
Technology Stack
Component	Technology
Core Framework	Electron 23.0.0
UI Rendering	Chromium 110
Game Logic	ES6 JavaScript
Styling	CSS3
Directory Structure
Copy
src/
├── main-process/     # Electron main process files
├── renderer-process/ # Game logic and UI components
├── assets/           # Media resources
│   ├── audio/        # Sound effects
│   └── images/       # Visual assets
├── styles/           # CSS files
└── pages/            # Game state templates

**##Asset Attribution**
Visual Assets
Custom Artwork: Original pixel art created by me using Figma

Icon Design: SVG assets created specifically for this project

Audio Assets
Sound Effects: Licensed under Pixabay Content License

Source: Pixabay Sound Collection

Files modified for optimal playback performance

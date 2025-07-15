# 🎯 Number Guessing Game

A simple and interactive command‑line game where the player tries to guess a randomly generated number within a defined range.

---

## 📝 Table of Contents

- [Project Overview](#project-overview)  
- [Features](#features)  
- [Technologies](#technologies)  
- [Prerequisites](#prerequisites)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Example Gameplay](#example‑gameplay)  
- [Contributing](#contributing)  
- [License](#license)  
- [Author](#author)

---

## Project Overview

This command-line game generates a random number within a specified range (default: 1–100). The player submits guesses and receives feedback ("too high", "too low") until guessing correctly. Afterwards, the game reports the number of attempts it took.

## Features

- ✨ Random number generation  
- 🚀 Interactive input/output  
- ✅ Feedback on guess accuracy  
- 📊 Attempt count displayed  

## Technologies

- **Language**: Python 3  
- **Standard Modules**: `random`, `sys`

## Prerequisites

- Python 3.x installed on your system  
- Basic familiarity with running scripts via command line

## Installation

1. **Clone the repo:**
   ```bash
   git clone https://github.com/yourusername/number-guessing-game.git
   cd number-guessing-game
##run 
python3 number_guessing_game.py
##Example
$ python3 number_guessing_game.py
Welcome to the Number Guessing Game!
Guess a number between 1 and 100: 50  
Too high! Try again.  
Guess a number between 1 and 100: 30  
Too low! Try again.  
Guess a number between 1 and 100: 47  
🎉 Congrats! You guessed 47 in 3 attempts.


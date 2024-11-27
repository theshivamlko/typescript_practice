# Project Setup and Build

## Prerequisites

- Node.js (version 12.x or above)
- Fleet IDE

## Installation

1. Clone the repository:
   ```
   git clone <repository_url>
   ```
2. Navigate into the project directory:
   ```
   cd <project_directory>
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Build Project

1. Generate a production build:
   ```
   npm run build
   ```

## Run Locally

1. Start the development server:
   ```
   npm start
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```
3. IDE Configuration to run project
   ```{
    "configurations": [
        {
            "type": "command",
            "name": "Localhost",
            "program": "npm",
            "args": [
                "start"
            ],
        },
    ]
   }
```

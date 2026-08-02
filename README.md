# VectorShift | Pipeline Builder Assessment

A node-based visual pipeline builder utilizing React, React Flow, Zustand, and a FastAPI backend with Directed Acyclic Graph (DAG) validation.

## ✨ Features
- **Visual Pipeline Editor**: Drag, drop, and connect node interfaces (React Flow).
- **Dynamic Resizing**: Nodes automatically resize as content is added or modified.
- **Real-time Variable Extraction**: Text nodes extract `{{variables}}` via regex and dynamically generate input handles on the fly.
- **DAG Cycle Detection**: Backend algorithm that calculates if your pipeline contains infinite loops (cycles) or acts as a valid Directed Acyclic Graph.
- **Production-Ready Architecture**: Cleanly separated state management (`Zustand`), abstracted Node logic (`BaseNode` wrapper), and comprehensive test coverage.

---

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/MrinalGupta7890/VectorShift-FE-Tech-Assessment.git
cd VectorShift-FE-Tech-Assessment
```

### 2. Backend Setup (FastAPI)
The backend requires Python 3.9+ and is responsible for parsing your pipeline logic and returning its structural validity.

```bash
cd backend

# Create a virtual environment
python -m venv venv

# Activate the virtual environment
# On Windows:
.\venv\Scripts\Activate.ps1
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Start the API server
uvicorn main:app --reload
```
The backend API will be available at `http://localhost:8000`.

### 3. Frontend Setup (React)
Open a **new terminal window**, and navigate to the frontend directory:

```bash
cd frontend

# Install dependencies
npm install

# Start the development server
npm start
```
The frontend application will be available at `http://localhost:3000`.

---

## 🧪 Testing

We have built automated testing suites for both the frontend and backend to prevent regressions.

**Run Frontend Tests (Jest)**
Tests our regex parser (`extractVariables`) against edge cases and JS identifier compliance.
```bash
cd frontend
npm test
```

**Run Backend Tests (Pytest)**
Tests our DAG traversal algorithm (`is_dag`) against cyclic, acyclic, and disjointed graphs.
```bash
cd backend
# Make sure your virtual environment is active!
pytest
```

---

## 🏗️ Architecture Notes

### The `BaseNode` Abstraction
Rather than copying boilerplate code across 9 different node types, we built a central `<BaseNode />` wrapper. All node configurations (Input, Text, LLM, Database, etc.) are injected into this highly cohesive component. This achieves strict DRY compliance and makes adding new node types trivial.

### Environment & CORS
If deploying to production, simply create a `.env` file in the `/backend` folder (see `.env.example`) and map your `FRONTEND_URL` to properly handle secure CORS configurations.

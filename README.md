# VectorShift Frontend Technical Assessment

This repository contains the solution for the VectorShift Frontend Technical Assessment.

## Project Structure

- `frontend/`: React frontend application
- `backend/`: FastAPI Python backend application

## Running the Application

### Frontend

```bash
cd frontend
npm install
npm start
```
The frontend runs on `http://localhost:3000`.

### Backend

```bash
cd backend
# Create virtual environment (if not created)
python -m venv venv

# Activate virtual environment
# On Windows:
.\venv\Scripts\Activate.ps1
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install fastapi uvicorn python-multipart

# Run the server
python -m uvicorn main:app --reload
```
The backend runs on `http://127.0.0.1:8000`.

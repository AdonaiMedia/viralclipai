# ViralClip AI

# System Architecture

Version

MVP v0.1.0

---

# Overview

ViralClip AI is built using a modular architecture where every major responsibility is isolated into its own engine.

All engines work independently but are coordinated by the Workflow Engine.

---

# Core Engines

## Workflow Engine

Coordinates the complete application workflow.

Responsibilities

- Start processing
- Call AI services
- Coordinate pipelines
- Save progress
- Handle failures

---

## Video Engine

Responsibilities

- Upload videos
- Inspect videos
- Read metadata
- Prepare video pipeline

---

## Audio Engine

Responsibilities

- Extract audio
- Audio preprocessing
- Audio optimization

---

## Transcript Engine

Responsibilities

- Speech to Text
- Transcript storage
- Transcript cleanup

---

## AI Engine

Responsibilities

- Title Generation
- Hook Generation
- Caption Generation
- Hashtag Generation
- Translation
- Voice Over
- Publish Content

Current Provider

- Mock AI

Future Providers

- OpenAI
- Whisper

---

## Intelligence Engine

Responsibilities

- Viral Analysis
- Viral Score
- Engagement Prediction
- Clip Ranking
- Trend Detection

---

## Clip Engine

Responsibilities

- Detect Viral Moments
- Generate Clips
- Clip Ranking
- Clip Storage

---

## Export Engine

Responsibilities

- Download Clips
- Export Metadata
- Export Captions
- Future ZIP Export

---

## Social Engine

Responsibilities

- Publishing
- Social Platforms
- Scheduling
- Platform Integrations

---

## Database Engine

Responsibilities

- Save Videos
- Save Clips
- Save AI Results
- Save Analysis
- Save Processing Progress

Database

Supabase PostgreSQL

---

# Workflow

User

↓

Upload Video

↓

Workflow Engine

↓

Video Engine

↓

Audio Engine

↓

Transcript Engine

↓

Intelligence Engine

↓

AI Engine

↓

Clip Engine

↓

Database Engine

↓

Workspace

↓

Export Engine

↓

Social Engine

---

# Design Principles

- Modular
- Scalable
- AI First
- API Driven
- Cloud Native

---

Status

Production Architecture (In Progress)
# ViralClip AI

# API Documentation

Version

MVP v0.1.0

Architecture

REST API

Framework

Next.js Route Handlers

Authentication

Supabase Auth

Last Updated

July 2026

---

# Overview

The ViralClip AI API is responsible for connecting the frontend, AI services, processing pipelines, and the database.

All endpoints return JSON responses and follow RESTful principles.

---

# Current API Endpoints

## Upload

/api/upload

Responsibilities

- Upload videos
- Validate files
- Store videos
- Start processing pipeline

---

## Workspace Tools

/ api/tools

Responsibilities

- Generate AI Titles
- Generate Hooks
- Generate Captions
- Generate Hashtags
- Generate Transcript
- Translation
- Voice Over
- Viral Analysis
- Publish
- Save AI Results

---

## Dashboard

/ api/dashboard

Responsibilities

- Load dashboard statistics
- Load recent videos
- Load user activity

---

## Video

/ api/video

Responsibilities

- Get video information
- Update video
- Delete video

---

## Transcript

/ api/transcript

Responsibilities

- Generate transcript
- Save transcript
- Load transcript

---

## Analysis

/ api/analysis

Responsibilities

- Viral Analysis
- Engagement Analysis
- Viral Score

---

## Clips

/ api/clips

Responsibilities

- Generate clips
- Load clips
- Delete clips

---

## Export

/ api/export

Responsibilities

- Export clips
- Download files
- Export metadata

---

## Social

/ api/social

Responsibilities

- Publish content
- Platform integrations
- Future scheduling

---

## Authentication

/ api/auth

Provider

Supabase Auth

Future

- Google
- GitHub
- Microsoft

---

## Subscription

/ api/subscription

Future Responsibilities

- Billing
- Plans
- Payments
- Usage Limits

---

# API Flow

Frontend

↓

API Route

↓

AI Service

↓

Database

↓

JSON Response

↓

Frontend

---

# Response Format

Success

{
    success: true,
    message: "...",
    data: {}
}

Failure

{
    success: false,
    message: "...",
    error: {}
}

---

# Future API Modules

- Notifications
- Analytics
- Teams
- Admin
- Mobile API
- Public API

---

# Design Principles

- RESTful
- JSON Based
- Stateless
- Modular
- Secure
- Scalable

---

Status

Production Ready (MVP)
# ViralClip AI

# Database Documentation

Version

MVP v0.1.0

Database Provider

Supabase PostgreSQL

Last Updated

July 2026

---

# Overview

The ViralClip AI database is designed using a scalable relational architecture powered by Supabase PostgreSQL.

It stores uploaded videos, AI-generated content, processing progress, transcripts, clips, and future business data such as subscriptions, analytics, and team collaboration.

---

# Current Database Tables

## videos

Purpose

Stores uploaded videos and their metadata.

Main Information

- Video ID
- Title
- File Name
- Status
- Duration
- Created Date

---

## clips

Purpose

Stores generated viral clips.

Main Information

- Clip ID
- Video ID
- Start Time
- End Time
- Viral Score
- Storage Path

Relationship

Many clips belong to one video.

---

## transcription

Purpose

Stores speech-to-text transcripts.

Main Information

- Transcript ID
- Video ID
- Transcript
- Language
- Created Date

---

## viral_analysis

Purpose

Stores AI analysis results.

Main Information

- Viral Score
- Engagement
- Strengths
- Improvements

---

## processing_progress

Purpose

Tracks the progress of every processing stage.

Stages

- Upload
- Inspection
- Audio
- Transcription
- Analysis
- Clips
- Thumbnail
- Database

---

## ai_results

Purpose

Stores all AI-generated content.

Supported Results

- Generated Title
- Generated Hook
- Generated Caption
- Generated Hashtags
- Transcript
- Translation
- Voice Over
- Viral Analysis
- Publish Results

---

# Database Relationships

videos

↓

clips

videos

↓

transcription

videos

↓

viral_analysis

videos

↓

processing_progress

videos

↓

ai_results

---

# Storage

Supabase Storage Buckets

- videos
- clips
- thumbnails

---

# Planned Database Tables

These tables will be added in future releases.

- users
- subscriptions
- payments
- analytics
- exports
- social_posts
- teams
- notifications
- audit_logs

---

# Database Responsibilities

The database is responsible for:

- Storing uploaded videos
- Storing generated clips
- Storing transcripts
- Storing AI analysis
- Storing AI results
- Tracking processing progress
- Managing future subscriptions
- Supporting analytics
- Supporting publishing history

---

# Design Principles

- Scalable
- Relational
- Secure
- Cloud Native
- AI First
- Production Ready

---

Status

Production Ready (MVP)
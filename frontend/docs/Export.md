# Export Engine

## Purpose

The Export Engine prepares generated clips for download and publishing.

It converts clips into platform-specific formats.

---

## Components

### ExportEngine

Coordinates the export process.

### ExportMP4

Exports standard MP4 videos.

### ExportShorts

Optimizes videos for YouTube Shorts.

### ExportReels

Optimizes videos for Instagram Reels.

### ExportTikTok

Optimizes videos for TikTok.

### ThumbnailExporter

Creates thumbnails from generated clips.

### Watermark

Applies ViralClip AI watermark for Free users.

### ZipExporter

Bundles exported assets into ZIP archives.

---

## Workflow

Clip Generated

↓

Watermark (Optional)

↓

Thumbnail

↓

Platform Export

↓

ZIP Package

↓

Ready for Download
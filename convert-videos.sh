#!/bin/bash

# Script to convert videos to web-compatible H.264 format
# Usage: ./convert-videos.sh

set -e  # Exit on error

SLIDESHOW_DIR="assets/slideshow"
BACKUP_DIR="assets/slideshow/originals"
TEMP_DIR="assets/slideshow/temp"

echo "================================================"
echo "Video Conversion Script for Web Compatibility"
echo "================================================"
echo ""

# Create backup directory if it doesn't exist
mkdir -p "$BACKUP_DIR"
mkdir -p "$TEMP_DIR"

# Count total videos
total_videos=$(find "$SLIDESHOW_DIR" -maxdepth 1 -name "*.mp4" | wc -l | tr -d ' ')
current=0

echo "Found $total_videos videos to convert"
echo ""

# Convert each video
for video in "$SLIDESHOW_DIR"/*.mp4; do
    # Skip if file doesn't exist (in case no mp4 files found)
    [ -e "$video" ] || continue

    filename=$(basename "$video")
    current=$((current + 1))

    echo "[$current/$total_videos] Processing: $filename"

    # Skip if already backed up
    if [ -f "$BACKUP_DIR/$filename" ]; then
        echo "  ⚠️  Already backed up, skipping..."
        echo ""
        continue
    fi

    # Backup original
    echo "  📦 Backing up original..."
    cp "$video" "$BACKUP_DIR/$filename"

    # Convert to web-compatible format
    echo "  🔄 Converting to H.264..."
    ffmpeg -i "$video" \
        -c:v libx264 \
        -pix_fmt yuv420p \
        -profile:v baseline \
        -level 3.0 \
        -movflags +faststart \
        -c:a aac \
        -b:a 128k \
        -y \
        "$TEMP_DIR/$filename" \
        -loglevel error -stats

    # Replace original with converted version
    echo "  ✅ Replacing original..."
    mv "$TEMP_DIR/$filename" "$video"

    echo "  ✨ Done!"
    echo ""
done

# Cleanup temp directory
rmdir "$TEMP_DIR" 2>/dev/null || true

echo "================================================"
echo "✅ Conversion Complete!"
echo "================================================"
echo ""
echo "Original files backed up to: $BACKUP_DIR"
echo "All videos are now web-compatible (H.264)"
echo ""
echo "If you need to restore originals, they're in:"
echo "  $BACKUP_DIR/"
echo ""

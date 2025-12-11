#!/bin/bash

# Script to generate poster images from videos
# Extracts first frame of each video as JPG

set -e  # Exit on error

SLIDESHOW_DIR="assets/slideshow"

echo "================================================"
echo "Video Poster Generation Script"
echo "================================================"
echo ""

# Count total videos
total_videos=$(find "$SLIDESHOW_DIR" -maxdepth 1 -name "*.mp4" | wc -l | tr -d ' ')
current=0

echo "Found $total_videos videos"
echo ""

# Generate poster for each video
for video in "$SLIDESHOW_DIR"/*.mp4; do
    # Skip if file doesn't exist
    [ -e "$video" ] || continue

    filename=$(basename "$video")
    # Remove .mp4 extension and add -poster.jpg
    poster_name="${filename%.mp4}-poster.jpg"
    poster_path="$SLIDESHOW_DIR/$poster_name"

    current=$((current + 1))

    echo "[$current/$total_videos] Processing: $filename"

    # Skip if poster already exists
    if [ -f "$poster_path" ]; then
        echo "  ⚠️  Poster already exists, skipping..."
        echo ""
        continue
    fi

    # Extract first frame as JPG (high quality)
    # -vf scale=-1:-1 ensures correct aspect ratio is applied
    echo "  📸 Extracting poster frame..."
    ffmpeg -i "$video" \
        -vframes 1 \
        -vf "scale=iw*sar:ih,setsar=1" \
        -q:v 2 \
        -y \
        "$poster_path" \
        -loglevel error

    echo "  ✅ Created: $poster_name"
    echo ""
done

echo "================================================"
echo "✅ Poster Generation Complete!"
echo "================================================"
echo ""
echo "Generated $total_videos poster images in: $SLIDESHOW_DIR"
echo ""

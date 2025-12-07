#!/bin/bash

# Script to compress large videos in the slideshow directory
# Targets videos over 10MB and compresses them to web-friendly sizes

set -e  # Exit on error

SLIDESHOW_DIR="assets/slideshow"
SIZE_THRESHOLD_MB=10

echo "================================================"
echo "Video Compression Script"
echo "================================================"
echo ""

# Find videos larger than threshold
echo "Looking for videos larger than ${SIZE_THRESHOLD_MB}MB..."
large_videos=$(find "$SLIDESHOW_DIR" -name "*.mp4" -type f -size +${SIZE_THRESHOLD_MB}M)

if [ -z "$large_videos" ]; then
    echo "No large videos found!"
    exit 0
fi

count=$(echo "$large_videos" | wc -l | tr -d ' ')
echo "Found $count large video(s) to compress"
echo ""

current=0
for video in $large_videos; do
    current=$((current + 1))
    filename=$(basename "$video")
    size=$(du -h "$video" | cut -f1)

    echo "[$current/$count] Processing: $filename (Current size: $size)"

    # Create temp file
    temp_file="${video}.compressed.mp4"

    # Compress video with web-optimized settings:
    # - CRF 28 (good quality/size balance for web)
    # - Preset medium (good speed/compression balance)
    # - Scale to max 1920 width (maintain aspect ratio)
    # - Optimize for streaming
    echo "  Compressing..."
    ffmpeg -i "$video" \
        -vf "scale='min(1920,iw)':'-2'" \
        -c:v libx264 \
        -crf 28 \
        -preset medium \
        -movflags +faststart \
        -c:a aac \
        -b:a 128k \
        -y \
        "$temp_file" \
        -loglevel error -stats

    # Check if compression was successful and resulted in smaller file
    if [ -f "$temp_file" ]; then
        original_size=$(stat -f%z "$video")
        compressed_size=$(stat -f%z "$temp_file")

        if [ $compressed_size -lt $original_size ]; then
            # Replace original with compressed version
            mv "$temp_file" "$video"
            new_size=$(du -h "$video" | cut -f1)
            reduction=$((100 - (compressed_size * 100 / original_size)))
            echo "  ✅ Compressed: $size → $new_size (${reduction}% reduction)"
        else
            # Compressed version is larger, keep original
            rm "$temp_file"
            echo "  ⚠️  Skipped: compressed version was larger"
        fi
    else
        echo "  ❌ Failed to compress"
    fi

    echo ""
done

echo "================================================"
echo "✅ Compression Complete!"
echo "================================================"
echo ""

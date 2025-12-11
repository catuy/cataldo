#!/bin/bash

# Script to generate slideshow.yml from files in assets/slideshow

SLIDESHOW_DIR="assets/slideshow"
OUTPUT_FILE="_data/slideshow.yml"

echo "---" > "$OUTPUT_FILE"

# Process all media files (images and videos, excluding posters)
find "$SLIDESHOW_DIR" -maxdepth 1 -type f \( -name "*.mp4" -o -name "*.jpg" -o -name "*.png" -o -name "*.webp" \) ! -name "*-poster.jpg" | sort | while read -r file; do
    filename=$(basename "$file")
    
    # Determine type based on filename patterns
    type="image"
    if [[ $filename == *.mp4 ]]; then
        # Check if it looks like a web/browser screenshot
        if [[ $filename == *"anii"* || $filename == *"atlas"* || $filename == *"brecha"* || $filename == *"bus"* || $filename == *"goos"* || $filename == *"sbdg"* || $filename == *"ucu"* || $filename == *"sq"* || $filename == *"hostburo"* || $filename == *"gwick"* ]]; then
            type="web"
        else
            type="web"
        fi
    elif [[ $filename == *.png ]] || [[ $filename == *.jpg ]] || [[ $filename == *.webp ]]; then
        # Check patterns for mobile or web
        if [[ $filename == *"busqueda"* || $filename == *"cw"* ]]; then
            type="mobile"
        fi
    fi
    
    # Extract year if present in filename
    year=""
    
    # Extract title from filename (remove extension and numbers)
    title=$(echo "$filename" | sed 's/\.[^.]*$//' | sed 's/-[0-9]*$//' | sed 's/[0-9]*$//')
    
    cat >> "$OUTPUT_FILE" << ENTRY
- file: $filename
  year: $year
  title: $title
  description:
  link_text:
  link_url:
  type: $type
ENTRY
done

echo "✅ Generated $OUTPUT_FILE"

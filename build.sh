#!/bin/bash

# Build script for Cloudflare Pages
echo "Starting Jekyll build for Cloudflare Pages..."

# Install dependencies
echo "Installing Ruby dependencies..."
bundle install

# Build the site with production config
echo "Building Jekyll site with production configuration..."
JEKYLL_ENV=production bundle exec jekyll build --config _config.yml,_config_production.yml

echo "Build completed successfully!"
echo "Site built in _site directory"

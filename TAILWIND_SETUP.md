# Tailwind CSS Setup

This project uses Tailwind CSS v3 for styling.

## Development

### Building Tailwind CSS

To compile Tailwind CSS during development:

```bash
npm run build:css
```

To watch for changes and recompile automatically:

```bash
npm run watch:css
```

### Running Jekyll with Tailwind

1. In one terminal, run the Tailwind watcher:
   ```bash
   npm run watch:css
   ```

2. In another terminal, run Jekyll:
   ```bash
   bundle exec jekyll serve
   ```

## Production

Before deploying, make sure to build the CSS:

```bash
npm run build:css
```

The compiled CSS file (`assets/css/output.css`) is gitignored and must be built before deployment.

## Configuration

- **tailwind.config.js** - Tailwind configuration with custom colors and fonts
- **assets/css/tailwind.css** - Tailwind input file
- **assets/css/output.css** - Compiled CSS (gitignored)

## Custom Theme

The custom theme includes:
- Custom color palette (primary-bg, text-primary, border-light, etc.)
- Inter font family
- Support for dark theme utilities

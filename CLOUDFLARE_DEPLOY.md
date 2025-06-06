# Deploy en Cloudflare Pages

## Configuración del Proyecto

Este proyecto Jekyll está configurado para deployarse en Cloudflare Pages con las siguientes optimizaciones:

### Archivos de Configuración

1. **`_config_production.yml`** - Configuración específica para producción
2. **`build.sh`** - Script de build para Cloudflare Pages
3. **`_headers`** - Headers HTTP para optimización y seguridad
4. **`wrangler.toml`** - Configuración de Cloudflare Workers/Pages

### Configuración en Cloudflare Pages

#### 1. Configuración de Build

En la configuración de tu proyecto en Cloudflare Pages:

- **Build command**: `./build.sh`
- **Build output directory**: `_site`
- **Root directory**: `/` (raíz del proyecto)

#### 2. Variables de Entorno

Configura las siguientes variables de entorno en Cloudflare Pages:

```
GITHUB_CLIENT_ID=tu_github_client_id
GITHUB_CLIENT_SECRET=tu_github_client_secret
```

#### 3. Configuración de Dominio

- El sitio está configurado para usar `https://catuy-github-io.pages.dev`
- Para usar un dominio personalizado (`ctld.com`), actualiza la URL en `_config_production.yml`

### Problemas Comunes y Soluciones

#### 1. Error de Build
Si el build falla, verifica:
- Que Ruby y Bundler estén disponibles en el entorno de build
- Que todas las dependencias del Gemfile estén correctas
- Que el script `build.sh` tenga permisos de ejecución

**Problema específico con Ruby 3.4+**: El proyecto incluye las gemas `csv` y `logger` que son requeridas para Ruby 3.4+ y no están incluidas por defecto.

#### 2. Problemas de Rutas
- Verifica que `baseurl` esté configurado correctamente en `_config_production.yml`
- Asegúrate de que las rutas de assets sean relativas

#### 3. Funciones de Cloudflare
Las funciones en `/functions/api/` están configuradas para:
- Autenticación OAuth con GitHub
- Integración con Decap CMS (anteriormente Netlify CMS)

### Comandos Útiles

```bash
# Build local para testing
./build.sh

# Servir localmente
bundle exec jekyll serve

# Build con configuración de producción
JEKYLL_ENV=production bundle exec jekyll build --config _config.yml,_config_production.yml
```

### Estructura del Proyecto

```
├── _config.yml              # Configuración base de Jekyll
├── _config_production.yml   # Configuración para producción
├── build.sh                 # Script de build para Cloudflare
├── _headers                 # Headers HTTP para Cloudflare
├── wrangler.toml           # Configuración de Cloudflare
├── functions/              # Funciones de Cloudflare Pages
│   └── api/
│       ├── auth.js         # Autenticación OAuth
│       └── callback.js     # Callback OAuth
├── admin/                  # Configuración de Decap CMS
├── _posts/                 # Posts del blog
├── _layouts/               # Layouts de Jekyll
├── _includes/              # Includes de Jekyll
├── _sass/                  # Archivos Sass
└── assets/                 # Assets estáticos
```

### Notas Importantes

1. **Sass Deprecation Warning**: Las advertencias sobre `@import` en Sass no afectan el funcionamiento pero se pueden ignorar en producción.

2. **CMS Configuration**: El archivo `admin/config.yml` está configurado para usar GitHub como backend con autenticación OAuth.

3. **Performance**: Los headers en `_headers` están optimizados para cache y seguridad.

4. **SEO**: El sitio incluye Jekyll SEO Tag y Feed para optimización.

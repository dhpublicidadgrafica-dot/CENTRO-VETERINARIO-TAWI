# Centro Veterinario Tawi - Sitio Web Oficial

Sitio web empresarial para **Centro Veterinario Tawi** (Medellín, Colombia).

## 🚀 Despliegue en GitHub y Publicación en Dominio

### Opción 1: Despliegue Automático con GitHub Pages (Recomendado)

El repositorio incluye un flujo de trabajo preconfigurado en `.github/workflows/deploy.yml`.

1. **Subir el código a GitHub:**
   ```bash
   git init
   git add .
   git commit -m "feat: Centro Veterinario Tawi sitio oficial"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/TU-REPOSITORIO.git
   git push -u origin main
   ```

2. **Activar GitHub Pages:**
   * En tu repositorio de GitHub, ve a **Settings** (Configuración) > **Pages**.
   * En **Build and deployment** > **Source**, selecciona **GitHub Actions**.
   * Cada vez que hagas `git push` a `main`, el sitio se compilará y publicará automáticamente.

3. **Conectar tu Dominio Propio (ej. `centroveterinariotawi.com`):**
   * En GitHub: **Settings** > **Pages** > **Custom domain** ingresa tu dominio (ej: `centroveterinariotawi.com`).
   * Marca la casilla **Enforce HTTPS**.
   * En el panel de tu proveedor de dominio (GoDaddy, Namecheap, DonDominio, etc.), configura los registros DNS:
     * **Registros A (para el dominio raíz `@`):**
       * `185.199.108.153`
       * `185.199.109.153`
       * `185.199.110.153`
       * `185.199.111.153`
     * **Registro CNAME (para `www`):**
       * `TU-USUARIO.github.io`

---

### Opción 2: Despliegue en Vercel, Netlify o Cloudflare Pages

1. Conecta tu repositorio de GitHub en [Vercel](https://vercel.com) o [Netlify](https://netlify.com).
2. Los valores de configuración se detectan solos:
   * **Build Command:** `npm run build`
   * **Output Directory:** `dist`
   * **Install Command:** `npm install`
3. En la sección de dominios de la plataforma, añade tu dominio y sigue las instrucciones para apuntar los DNS.

---

### Comandos de Desarrollo Local

* Instalar dependencias: `npm install`
* Iniciar servidor de desarrollo: `npm run dev`
* Compilar para producción: `npm run build`
* Verificar tipos y sintaxis: `npm run lint`
* Previsualizar compilación: `npm run preview`

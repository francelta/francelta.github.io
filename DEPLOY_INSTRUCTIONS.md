# 🚀 Instrucciones de Despliegue a GitHub Pages

## ✅ Preparación Completada

- ✅ Proyecto buildead exitosamente (`npm run build`)
- ✅ Archivo `.gitignore` protege `.env` y `node_modules`
- ✅ Next.js configurado para export estático
- ✅ GitHub Actions workflow creado (`.github/workflows/deploy.yml`)
- ✅ Archivo `.nojekyll` creado para GitHub Pages

---

## 🔐 Paso 1: Autenticación con GitHub

Antes de hacer push, necesitas autenticarte. **No uses las credenciales del `.env` directamente**, usa el CLI de GitHub:

```bash
gh auth login
```

Selecciona:
- **Account:** GitHub.com
- **Protocol:** HTTPS
- **Authenticate:** Login with a web browser

---

## 📤 Paso 2: Subir el Código a GitHub

Ejecuta estos comandos en tu terminal:

```bash
# 1. Asegúrate de estar en el directorio del proyecto
cd /Users/Fran_1/Desktop/programacion/new_portfolio

# 2. Agregar todos los archivos
git add .

# 3. Crear commit
git commit -m "feat: Portafolio completo v1.0 - Fran Carrasco

- 8 componentes React con animaciones Framer Motion
- Contenido personalizado basado en CV real
- 3 artículos de blog completos
- Stack: Next.js 14, Tailwind CSS, TypeScript
- Proyectos reales (Red Neuronal OCR, Modernización Web, etc.)
- Deploy automatizado con GitHub Actions"

# 4. Subir a GitHub
git push origin main
```

---

## ⚙️ Paso 3: Configurar GitHub Pages

Después del push, ve a tu repositorio en GitHub y configura Pages:

1. Abre: https://github.com/francelta/francelta.github.io/settings/pages

2. En **"Build and deployment"** → **"Source"**, selecciona:
   - **Source:** GitHub Actions

3. Haz clic en **Save**

4. El workflow se ejecutará automáticamente

---

## 🎉 Paso 4: Verificar el Despliegue

1. Ve a la pestaña **"Actions"**: https://github.com/francelta/francelta.github.io/actions

2. Verás un workflow en ejecución (⚙️ amarillo) o completado (✅ verde)

3. El despliegue tarda ~2-3 minutos

4. Una vez completado, tu sitio estará en:
   - **https://francelta.github.io** (redirige automáticamente a /es)
   - **https://francelta.github.io/es** (versión en español)
   - **https://francelta.github.io/en** (versión en inglés)

---

## 🔧 Solución de Problemas

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/francelta/francelta.github.io.git
```

### Error: "failed to push some refs"
```bash
git pull origin main --rebase
git push origin main
```

### Error: "Authentication failed"
Asegúrate de haber ejecutado `gh auth login` correctamente.

---

## 🔄 Futuras Actualizaciones

Para actualizar tu portafolio en el futuro:

```bash
# 1. Hacer cambios en tu código

# 2. Commit
git add .
git commit -m "feat: descripción del cambio"

# 3. Push (el deploy es automático)
git push origin main
```

GitHub Actions hará el build y deploy automáticamente.

---

## 📊 Checklist Final

Antes de hacer push, verifica:

- [ ] El build local funciona: `npm run dev` (sin errores)
- [ ] No hay errores de linter: `npm run lint`
- [ ] El archivo `.env` NO está en el commit: `git status` (no debe aparecer)
- [ ] Has configurado `gh auth login`
- [ ] Estás en la rama `main`: `git branch`

---

## 🆘 ¿Necesitas Ayuda?

Si algo falla:

1. Revisa el log de GitHub Actions (pestaña Actions en GitHub)
2. Verifica que GitHub Pages esté configurado en "GitHub Actions"
3. Comprueba que el repositorio sea público
4. Si todo falla, puedes usar la **Opción 2** (ver abajo)

---

## 📦 Opción Alternativa: Deploy Manual del Build

Si prefieres subir solo el contenido estático (sin GitHub Actions):

```bash
# ⚠️ ADVERTENCIA: Esto borrará el contenido actual del repositorio

cd out
git init -b main
git add .
git commit -m "deploy: Portafolio v1.0"
git remote add origin https://github.com/francelta/francelta.github.io.git
git push -u -f origin main
cd ..
```

Con esta opción, tu sitio estará disponible inmediatamente, pero no tendrás el código fuente en GitHub (solo el HTML/CSS/JS generado).

---

## ✨ Tu Portafolio Incluye

- ✅ **Hero** con tu nombre y animación de typing
- ✅ **About** con tu stack (Python, Django, React, TensorFlow)
- ✅ **Filosofía** con tu enfoque de orquestación de agentes
- ✅ **6 Proyectos reales** de tu CV
- ✅ **3 Artículos de blog** completos
- ✅ **Contacto** con tus enlaces reales (GitHub, LinkedIn, Email)
- ✅ **Responsive** (móvil, tablet, desktop)
- ✅ **Animaciones suaves** con Framer Motion
- ✅ **Dark mode** con verde neón

---

**¡Felicidades! Tu portafolio está listo para publicarse. 🎉**

Ejecuta los comandos del Paso 2 cuando estés listo.


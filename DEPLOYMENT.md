# 🚀 Deployment Guide

## Deploy to GitHub Pages (Recommended)

### Step 1: Push to GitHub

Your repository is already set up with git. To push your changes:

```bash
git add .
git commit -m "Setup project with Tailwind CSS and deployment"
git push origin main
```

### Step 2: Enable GitHub Pages

1. Go to your GitHub repository
2. Click on **Settings** tab
3. In the left sidebar, click on **Pages**
4. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
5. Save the settings

### Step 3: Automatic Deployment

Once you push your code, the GitHub Actions workflow will automatically:
- Build your project
- Deploy it to GitHub Pages

Your site will be available at: `https://[your-username].github.io/[repository-name]/`

### Step 4: Setup Custom Domain (Optional)

If you own a custom domain, you can use it with GitHub Pages:

1. **In GitHub Repository Settings → Pages**:
   - Under "Custom domain", enter your domain (e.g., `cityquest.com` or `www.cityquest.com`)
   - Click "Save"
   - Check "Enforce HTTPS" (after DNS propagates)

2. **Configure DNS at Your Domain Registrar**:

   **Option A: Using Apex Domain** (e.g., `cityquest.com`):
   
   Add these **A records** pointing to GitHub's IPs:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

   **Option B: Using Subdomain** (e.g., `www.cityquest.com`):
   
   Add a **CNAME record**:
   ```
   CNAME: www → [your-username].github.io
   ```

   **Recommended: Use Both!**
   - Add the A records for apex domain
   - Add CNAME for www subdomain
   - This covers both `cityquest.com` and `www.cityquest.com`

3. **Create CNAME File** (automatic via GitHub UI, or manually):
   
   Create a file named `CNAME` in the `public/` directory with your domain:
   ```
   cityquest.com
   ```

4. **Wait for DNS Propagation** (5 minutes to 48 hours)
   - Check status: [whatsmydns.net](https://www.whatsmydns.net/)

5. **Enable HTTPS** in GitHub Pages settings once DNS propagates

---

## Alternative: Deploy to Vercel (Even Easier!)

Vercel offers the easiest deployment for React + Vite projects:

### Option 1: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy
vercel
```

Follow the prompts, and your site will be live in seconds!

### Option 2: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Import Project"
4. Select your repository
5. Vercel will auto-detect Vite and configure everything
6. Click "Deploy"

Done! Your site will be live with a `.vercel.app` domain.

---

## Alternative: Deploy to Netlify

### Option 1: Using Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build your project
npm run build

# Deploy
netlify deploy
```

### Option 2: Using Netlify Dashboard

1. Go to [netlify.com](https://netlify.com)
2. Sign in with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click "Deploy site"

---

## 🔧 Pre-Deployment Checklist

- ✅ All dependencies installed
- ✅ Tailwind CSS configured
- ✅ Vite config set for deployment
- ✅ GitHub Actions workflow created
- ✅ .gitignore properly configured
- ✅ Build tested locally (`npm run build`)

---

## 🧪 Test Build Locally

Before deploying, test the production build:

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

Open `http://localhost:4173` to see your production build.

---

## 📝 Notes

- **GitHub Pages**: Free, automatic deployment on push
- **Vercel**: Free, fastest deploys, great performance
- **Netlify**: Free, easy to use, great features

All three options are excellent for static sites like your landing page!

## 🎯 Recommendation

For this landing page, I recommend **Vercel** for the easiest setup and best performance. But GitHub Pages is great if you want everything in one place!


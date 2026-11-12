# Vyora Digital — Vercel & GitHub Deployment Guide

This project is fully optimized and ready for zero-configuration deployment to **Vercel** with full **Next.js 14 App Router** support, Three.js 3D WebGL animations, and custom domain setup for `vyoradigital.com`.

---

## 1. Quick Push to GitHub (`digitalmarkertingwebsite`)

### Step A: Create the Empty Repository on GitHub
1. Open [https://github.com/new](https://github.com/new) in your browser.
2. Set **Repository name** to: `digitalmarkertingwebsite`
3. Set Visibility to **Public** (or **Private**).
4. **Leave "Add a README file" unchecked** (the repository is already initialized locally).
5. Click **Create repository**.

### Step B: Link and Push from Terminal
Run the following commands in this directory (`E:\Antigravity\vyoradigital.com`):

```bash
# Link the remote repository (replace YOUR_GITHUB_USERNAME)
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/digitalmarkertingwebsite.git

# Ensure the main branch is selected
git branch -M main

# Push all files to GitHub
git push -u origin main
```

*(If you already have your GitHub username or Personal Access Token, you can share it and Antigravity can link the remote for you).*

---

## 2. Deploy to Vercel (1-Click Import)

1. Go to [https://vercel.com/new](https://vercel.com/new).
2. Connect your GitHub account and find `digitalmarkertingwebsite`.
3. Click **Import**.
4. Vercel will automatically detect **Next.js**:
   * **Framework Preset:** Next.js
   * **Root Directory:** `./`
   * **Build Command:** `npm run build` (or default `next build`)
   * **Output Directory:** `out` (or default)
5. Click **Deploy**.
6. Within ~60 seconds, your website will be live at `https://digitalmarkertingwebsite.vercel.app`.

---

## 3. Add Custom Domain (`vyoradigital.com`) on Vercel

1. In your Vercel Dashboard, select your `digitalmarkertingwebsite` project.
2. Go to **Settings** ➔ **Domains**.
3. Type `vyoradigital.com` and click **Add**.
4. Select the recommended option to also redirect `www.vyoradigital.com` to `vyoradigital.com`.
5. Vercel will show the required DNS records for your domain registrar (GoDaddy, Namecheap, Cloudflare, Hostinger, etc.):

### Required DNS Records:

| Type | Name / Host | Value / Target | TTL |
| :--- | :--- | :--- | :--- |
| **A** | `@` (apex domain) | `76.76.21.21` | Automatic / 300s |
| **CNAME** | `www` | `cname.vercel-dns.com` | Automatic / 300s |

6. Once your DNS records are saved at your domain registrar, Vercel will automatically verify the records and issue a free SSL certificate (Let's Encrypt). Your site will be secured with HTTPS at `https://vyoradigital.com`.

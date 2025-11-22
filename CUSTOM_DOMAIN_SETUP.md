# 🌐 Custom Domain Setup Guide

## Yes! You can absolutely use your own domain with GitHub Pages.

---

## 🚀 Quick Setup (3 Steps)

### 1️⃣ Configure DNS at Your Domain Registrar

Go to where you bought your domain (GoDaddy, Namecheap, Google Domains, etc.) and add these DNS records:

#### For Apex Domain (e.g., `cityquest.com`)

Add **4 A Records**:
```
Type: A    Name: @    Value: 185.199.108.153
Type: A    Name: @    Value: 185.199.109.153
Type: A    Name: @    Value: 185.199.110.153
Type: A    Name: @    Value: 185.199.111.153
```

#### For WWW Subdomain (e.g., `www.cityquest.com`)

Add **1 CNAME Record**:
```
Type: CNAME    Name: www    Value: [your-github-username].github.io
```

**💡 Best Practice**: Set up BOTH apex and www so your site works with both URLs!

---

### 2️⃣ Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Custom domain", enter your domain: `cityquest.com`
4. Click **Save**
5. Wait for DNS check to complete ✅
6. Enable **"Enforce HTTPS"** (after DNS propagates)

---

### 3️⃣ Create CNAME File (If Not Auto-Created)

Create a file in your project: `public/CNAME`

```
cityquest.com
```

Commit and push:
```bash
mkdir -p public
echo "cityquest.com" > public/CNAME
git add public/CNAME
git commit -m "Add custom domain"
git push origin main
```

---

## 📋 Popular Domain Registrars - Specific Instructions

### GoDaddy
1. Go to DNS Management
2. Add the 4 A records pointing to `@`
3. Add CNAME record for `www` pointing to `[username].github.io`
4. TTL: Default or 600 seconds

### Namecheap
1. Go to Advanced DNS
2. Add the 4 A records with Host: `@`
3. Add CNAME with Host: `www`, Target: `[username].github.io`
4. TTL: Automatic

### Google Domains (Now Squarespace)
1. Go to DNS settings
2. Add Custom Records
3. Add the 4 A records
4. Add CNAME for `www`

### Cloudflare
1. Go to DNS settings
2. Add the 4 A records (Proxy status: Proxied 🟠 or DNS only)
3. Add CNAME for `www`
4. Enable SSL/TLS: Full

---

## ⏱️ DNS Propagation Time

- **Minimum**: 5-10 minutes
- **Average**: 1-2 hours
- **Maximum**: 48 hours

Check propagation status: [whatsmydns.net](https://www.whatsmydns.net/)

---

## ✅ Verification Steps

After setup, verify:

1. **Check DNS**:
   ```bash
   # Check A records
   dig cityquest.com +noall +answer
   
   # Check CNAME
   dig www.cityquest.com +noall +answer
   ```

2. **Visit Your Site**:
   - `http://cityquest.com` → Should redirect to HTTPS
   - `http://www.cityquest.com` → Should work
   - `https://cityquest.com` ✅
   - `https://www.cityquest.com` ✅

3. **GitHub Pages Status**:
   - Go to Settings → Pages
   - Should show "Your site is published at https://cityquest.com"

---

## 🔒 HTTPS / SSL

GitHub Pages provides **FREE SSL certificates** automatically via Let's Encrypt!

- After DNS propagates, enable "Enforce HTTPS" in GitHub Pages settings
- Certificate auto-renews
- No configuration needed!

---

## 🚨 Troubleshooting

### "Domain does not resolve to GitHub Pages server"
- Wait longer for DNS propagation
- Verify A records are correct
- Check with `dig yourdomain.com`

### "HTTPS not working"
- Wait for DNS to fully propagate (24-48 hours max)
- Uncheck and re-check "Enforce HTTPS"
- Clear browser cache

### "404 Page Not Found"
- Make sure CNAME file exists in `public/` folder
- Rebuild and redeploy
- Check if GitHub Actions deployment succeeded

---

## 💰 Cost

- **GitHub Pages**: FREE
- **SSL Certificate**: FREE (included)
- **Your Domain**: Whatever you paid to your registrar (typically $10-15/year)

---

## 🎯 Example Configuration

If your domain is `cityquest.com` and GitHub username is `johndoe`:

**DNS Records**:
```
A      @      185.199.108.153
A      @      185.199.109.153
A      @      185.199.110.153
A      @      185.199.111.153
CNAME  www    johndoe.github.io
```

**CNAME file** (`public/CNAME`):
```
cityquest.com
```

**GitHub Pages Setting**:
```
Custom domain: cityquest.com
Enforce HTTPS: ✅ Checked
```

---

## 📚 Additional Resources

- [GitHub Pages Custom Domain Docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [DNS Propagation Checker](https://www.whatsmydns.net/)
- [GitHub Pages Status](https://www.githubstatus.com/)

---

Need help? Check the troubleshooting section or GitHub's official documentation!


# 🚀 Deployment Guide

## Frontend (Vercel)

### Prerequisites
- Vercel account
- GitHub repository

### Steps

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy Frontend**
   ```bash
   cd frontend
   vercel --prod
   ```

4. **Configure Environment Variables**
   - Go to Vercel dashboard
   - Add `NEXT_PUBLIC_API_URL` environment variable
   - Set it to your deployed backend URL

5. **Automatic Deployments**
   - Connect your GitHub repository to Vercel
   - Enable automatic deployments on push to main branch

### Vercel Configuration
The project includes `vercel.json` with:
- Next.js framework detection
- Build command: `npm run build`
- Output directory: `.next`

## Backend (Cloudflare Workers)

### Prerequisites
- Cloudflare account
- Wrangler CLI installed

### Steps

1. **Install Wrangler**
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare**
   ```bash
   wrangler login
   ```

3. **Deploy Backend**
   ```bash
   cd backend
   wrangler deploy
   ```

4. **Configure Custom Domain (Optional)**
   ```bash
   wrangler custom-domains add api.yourdomain.com
   ```

### Cloudflare Workers Configuration
The project includes `wrangler.toml` with:
- Worker name: `chronos-web-api`
- Entry point: `src/index.ts`
- Compatibility date: 2024-01-01

## 🌐 Environment Variables

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:3001  # Development
NEXT_PUBLIC_API_URL=https://your-api.workers.dev  # Production
```

### Backend (Wrangler)
```toml
[env.production.vars]
ENVIRONMENT = "production"
```

## 🔄 CI/CD Workflow

### GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy ChronosWeb

on:
  push:
    branches: [main]

jobs:
  deploy-frontend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Deploy Frontend
        run: |
          cd frontend
          npm install
          npm run build
          npx vercel --prod --token=${{ secrets.VERCEL_TOKEN }}

  deploy-backend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Deploy Backend
        run: |
          cd backend
          npm install
          npm run build
          npx wrangler deploy --compatibility-date=2024-01-01
        env:
          CLOUDFLARE_API_TOKEN: ${{ secrets.CLOUDFLARE_API_TOKEN }}
```

### Required Secrets
- `VERCEL_TOKEN`: Your Vercel API token
- `CLOUDFLARE_API_TOKEN`: Your Cloudflare API token

## 📊 Monitoring

### Vercel
- Built-in analytics and performance monitoring
- Real-time logs and error tracking
- Custom domain management

### Cloudflare Workers
- Real-time logs via Wrangler
- Analytics dashboard
- Edge performance metrics

## 🔧 Custom Domains

### Frontend (Vercel)
1. Go to Vercel dashboard
2. Select your project
3. Go to Settings → Domains
4. Add your custom domain

### Backend (Cloudflare Workers)
```bash
wrangler custom-domains add api.yourdomain.com
```

## 🚀 Production URLs

After deployment, you'll have:
- **Frontend**: `https://your-app.vercel.app` or your custom domain
- **Backend API**: `https://your-api.workers.dev` or your custom domain

## 📝 Post-Deployment Checklist

1. ✅ Update frontend environment variable with backend URL
2. ✅ Test all API endpoints
3. ✅ Verify frontend functionality
4. ✅ Set up monitoring and alerts
5. ✅ Configure custom domains
6. ✅ Test mobile responsiveness
7. ✅ Check SEO and meta tags
8. ✅ Set up analytics tracking
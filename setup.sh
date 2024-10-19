#!/bin/bash

# Meminta input dari user
echo "Masukkan username GitHub Anda:"
read github_username
echo "Masukkan nama repository:"
read repo_name

# Membuat direktori proyek
mkdir $repo_name
cd $repo_name

# Inisialisasi git
git init
git remote add origin https://github.com/$github_username/$repo_name.git

# Setup proyek React dengan Vite
npm create vite@latest . -- --template react
npm install

# Install dependencies
npm install lucide-react
npm install -D tailwindcss postcss autoprefixer gh-pages
npx tailwindcss init -p

# Update tailwind.config.js
cat > tailwind.config.js << EOL
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
EOL

# Update vite.config.js
cat > vite.config.js << EOL
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/${repo_name}/',
})
EOL

# Update package.json scripts
npm pkg set scripts.predeploy="npm run build"
npm pkg set scripts.deploy="gh-pages -d dist"

# Update src/index.css
echo "@tailwind base;
@tailwind components;
@tailwind utilities;" > src/index.css

# Commit semua perubahan
git add .
git commit -m "Initial setup"
git branch -M main
git push -u origin main

echo "Setup selesai! Langkah selanjutnya:"
echo "1. Salin kode ModernLanding ke src/ModernLanding.jsx"
echo "2. Update App.jsx untuk menggunakan ModernLanding"
echo "3. Jalankan 'npm run deploy' untuk deploy ke GitHub Pages"
echo "4. Aktifkan GitHub Pages di repository settings"

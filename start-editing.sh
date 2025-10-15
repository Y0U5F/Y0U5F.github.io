#!/bin/bash

# ================================
# Safe Portfolio Update Workflow
# ================================
# استخدم هذا السكريبت كل مرة تعدل فيها البورتفوليو

echo "🚀 Safe Portfolio Update Workflow"
echo "=================================="

# Step 1: Navigate to correct location
cd ~/github-portfolio || { echo "❌ Portfolio not found!"; exit 1; }
echo "✅ Working in: $(pwd)"

# Step 2: Make sure we're on main branch
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "main" ]; then
  echo "⚠️  You're on branch: $CURRENT_BRANCH"
  read -p "Switch to main? (y/n): " switch
  if [ "$switch" = "y" ]; then
    git checkout main
  fi
fi

# Step 3: Pull latest changes from GitHub
echo ""
echo "📥 Pulling latest changes from GitHub..."
git pull origin main

if [ $? -ne 0 ]; then
  echo "❌ Pull failed! Fix conflicts first."
  exit 1
fi

# Step 4: Check for uncommitted changes
if [[ -n $(git status -s) ]]; then
  echo ""
  echo "⚠️  You have uncommitted changes:"
  git status -s
  echo ""
  read -p "Continue anyway? (y/n): " continue
  if [ "$continue" != "y" ]; then
    exit 1
  fi
fi

# Step 5: Verify .gitignore is correct
echo ""
echo "🔍 Checking .gitignore..."
if ! grep -q "node_modules" .gitignore; then
  echo "⚠️  node_modules not in .gitignore! Adding..."
  echo "node_modules/" >> .gitignore
fi

if ! grep -q ".next" .gitignore; then
  echo "⚠️  .next not in .gitignore! Adding..."
  echo ".next/" >> .gitignore
fi

# Step 6: Clean build artifacts
echo ""
echo "🧹 Cleaning old build artifacts..."
rm -rf .next
rm -rf out

# Step 7: Test build BEFORE making changes
echo ""
echo "🏗️  Testing current build..."
npm run build

if [ $? -ne 0 ]; then
  echo ""
  echo "❌ CURRENT BUILD IS BROKEN!"
  echo "Fix it before making new changes."
  exit 1
fi

echo ""
echo "✅ Current build is working!"
echo ""
echo "=================================="
echo "✅ SAFE TO START EDITING NOW!"
echo "=================================="
echo ""
echo "Next steps:"
echo "1. Make your changes (add/edit project files)"
echo "2. Run: npm run build"
echo "3. If successful, run: bash commit.sh"
echo ""
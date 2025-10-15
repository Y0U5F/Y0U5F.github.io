#!/bin/bash

# ================================
# Safe Portfolio Commit Script
# ================================
# استخدم هذا السكريبت بعد ما تخلص تعديلاتك

echo "🚀 Safe Portfolio Commit Workflow"
echo "================================="

# Step 1: Navigate to correct location
cd ~/github-portfolio || { echo "❌ Portfolio not found!"; exit 1; }
echo "✅ Working in: $(pwd)"

# Step 2: Check git status
echo ""
echo "📋 Current git status:"
git status -s

# Step 3: Test build BEFORE committing
echo ""
echo "🏗️  Testing build..."
npm run build

if [ $? -ne 0 ]; then
  echo ""
  echo "❌ BUILD FAILED!"
  echo "Fix the errors before committing."
  exit 1
fi

echo ""
echo "✅ Build successful!"

# Step 4: Check for uncommitted changes
if [[ -z $(git status -s) ]]; then
  echo ""
  echo "⚠️  No changes to commit!"
  exit 1
fi

# Step 5: Show what will be committed
echo ""
echo "📦 Files to be committed:"
git diff --cached --name-only 2>/dev/null || git diff --name-only

# Step 6: Check for node_modules or build artifacts
echo ""
echo "🔍 Checking for unwanted files..."

UNWANTED_FILES=$(git status -s | grep -E "(node_modules|\.next|out)" | wc -l)
if [ "$UNWANTED_FILES" -gt 0 ]; then
  echo "❌ Found unwanted files!"
  git status -s | grep -E "(node_modules|\.next|out)"
  echo ""
  echo "Remove these files before committing."
  exit 1
fi

echo "✅ No unwanted files found!"

# Step 7: Add all changes
echo ""
echo "📥 Adding all changes..."
git add .

# Step 8: Get commit message
echo ""
echo "📝 Enter commit message:"
read -p "Commit message: " commit_message

if [ -z "$commit_message" ]; then
  echo "❌ Commit message cannot be empty!"
  exit 1
fi

# Step 9: Commit
echo ""
echo "💾 Committing..."
git commit -m "$commit_message"

if [ $? -ne 0 ]; then
  echo "❌ Commit failed!"
  exit 1
fi

# Step 10: Show commit info
echo ""
echo "✅ Commit successful!"
echo "Commit details:"
git log --oneline -1

# Step 11: Ask about pushing
echo ""
read -p "Push to GitHub? (y/n): " push_answer

if [ "$push_answer" = "y" ]; then
  echo ""
  echo "🚀 Pushing to GitHub..."
  git push origin main

  if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Push successful!"
    echo ""
    echo "🎉 Portfolio updated successfully!"
    echo ""
    echo "Next steps:"
    echo "1. Check GitHub Actions for build status"
    echo "2. Verify the site is updated"
  else
    echo ""
    echo "❌ Push failed! Check your connection and try again."
    exit 1
  fi
else
  echo ""
  echo "✅ Changes committed locally."
  echo "Run 'git push origin main' when ready to deploy."
fi

echo ""
echo "================================="
echo "✅ COMMIT WORKFLOW COMPLETED!"
echo "================================="
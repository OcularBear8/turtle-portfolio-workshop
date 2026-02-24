# 🐢 Turtle Club — Portfolio Template

A **ready-to-go personal portfolio website** for Turtle Club members. No coding experience needed — just follow the steps below, fill in your info, add your projects, and deploy your own portfolio site for free.

**Live demo →** *(add a link to a deployed example here)*

![Desktop preview](./website-demo-image/desktop.png)

---

## Table of Contents

1. [What You'll Need (Prerequisites)](#1-what-youll-need-prerequisites)
2. [Install Git](#2-install-git)
3. [Install a Code Editor (VS Code)](#3-install-a-code-editor-vs-code)
4. [Create a GitHub Account](#4-create-a-github-account)
5. [Fork This Repo (Make Your Own Copy)](#5-fork-this-repo-make-your-own-copy)
6. [Clone It To Your Computer](#6-clone-it-to-your-computer)
7. [Open the Project in VS Code](#7-open-the-project-in-vs-code)
8. [Customize Your Portfolio](#8-customize-your-portfolio)
9. [Customize Your Colors & Theme](#9-customize-your-colors--theme)
10. [Preview Your Changes Locally](#10-preview-your-changes-locally)
11. [Push Your Changes to GitHub](#11-push-your-changes-to-github)
12. [Deploy Your Site (Free with GitHub Pages)](#12-deploy-your-site-free-with-github-pages)
13. [Quick Reference: File Structure](#13-quick-reference-file-structure)
14. [Troubleshooting / FAQ](#14-troubleshooting--faq)

---

## 1. What You'll Need (Prerequisites)

You need three things installed on your computer:

| Tool | What It Does | Download Link |
|------|-------------|---------------|
| **Git** | Tracks changes to your code and lets you upload to GitHub | [git-scm.com/downloads](https://git-scm.com/downloads) |
| **VS Code** | A free code editor where you'll make changes | [code.visualstudio.com](https://code.visualstudio.com/) |
| **GitHub Account** | Where your code lives online (and where your site gets deployed) | [github.com/signup](https://github.com/signup) |

> **Don't have any of these yet?** That's totally fine — the next 3 sections walk you through installing each one.

---

## 2. Install Git

Git is a tool that runs in the background. You won't open it like a normal app — it works through the terminal (command line).

### Windows

1. Go to [git-scm.com/downloads](https://git-scm.com/downloads)
2. Click **"Download for Windows"**
3. Run the installer — **use all the default settings** (just keep clicking "Next")
4. When it's done, open the **Start menu**, search for **"Git Bash"**, and open it
5. Type the following and press Enter:
   ```
   git --version
   ```
6. If you see something like `git version 2.43.0`, you're good!

### Mac

1. Open **Terminal** (search for it in Spotlight with Cmd + Space)
2. Type:
   ```
   git --version
   ```
3. If Git isn't installed, macOS will prompt you to install it — click **"Install"** and follow the steps
4. Run the command again to confirm it worked

### After Installing Git (Everyone)

Set up your name and email (this tags your changes — use the same email as your GitHub account):

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

---

## 3. Install a Code Editor (VS Code)

1. Go to [code.visualstudio.com](https://code.visualstudio.com/)
2. Click the big **"Download"** button
3. Run the installer
4. Open VS Code once it's installed — you should see a welcome screen

> **Recommended extension:** Once VS Code is open, click the Extensions icon (puzzle piece on the left sidebar), search for **"Live Server"**, and install it. This lets you preview your website in the browser while you edit.

---

## 4. Create a GitHub Account

1. Go to [github.com/signup](https://github.com/signup)
2. Follow the steps to create a free account
3. **Remember your username** — you'll need it later

---

## 5. Fork This Repo (Make Your Own Copy)

"Forking" creates your own personal copy of this template on your GitHub account.

1. Make sure you're logged in to GitHub
2. Go to this repository's page on GitHub
3. Click the **"Fork"** button in the top-right corner

   ![Fork button location](https://docs.github.com/assets/cb-40742/mw-1440/images/help/repository/fork-button.webp)

4. On the next page, click **"Create fork"**
5. You now have your own copy at `github.com/YOUR-USERNAME/turtle-portfolio-workshop-template`

---

## 6. Clone It To Your Computer

"Cloning" downloads your fork to your computer so you can edit it.

1. Go to **your fork** on GitHub (not the original — it should say your username at the top)
2. Click the green **"Code"** button
3. Make sure **"HTTPS"** is selected
4. Click the **copy icon** (📋) to copy the URL

5. Open **Git Bash** (Windows) or **Terminal** (Mac)

6. Navigate to where you want the project folder. For example, to put it on your Desktop:
   ```bash
   cd ~/Desktop
   ```

7. Clone the repo:
   ```bash
   git clone https://github.com/YOUR-USERNAME/turtle-portfolio-workshop-template.git
   ```
   *(Replace `YOUR-USERNAME` with your actual GitHub username)*

8. You should now have a folder called `turtle-portfolio-workshop-template` on your Desktop!

---

## 7. Open the Project in VS Code

1. Open VS Code
2. Click **File → Open Folder**
3. Navigate to the `turtle-portfolio-workshop-template` folder and select it
4. You should see the file list in the left sidebar

---

## 8. Customize Your Portfolio

**You only need to edit ONE file: `index.html`**

Open `index.html` in VS Code. You'll see numbered **STEP** comments throughout the file that tell you exactly what to change. Here's a summary:

### Sidebar (Your Info Card)

| Step | What to Change | Where in the File |
|------|---------------|-------------------|
| **1** | Page title (browser tab) | Line near `<title>` tag |
| **2** | Your profile photo | `<img src="./assets/images/my-avatar.png">` |
| **3** | Your name | `<h1 class="name">` |
| **4** | Your title/role | `<p class="title">` |
| **5** | Email address | `<a href="mailto:...">` |
| **6** | Phone number | `<a href="tel:...">` |
| **7** | Birthday | `<time>` tag |
| **8** | Location | `<address>` tag |
| **9** | Social media links | `<a href="#">` in social-list |

### About Page

| Step | What to Change |
|------|---------------|
| **10** | Your "About Me" paragraphs |
| **11** | "What I'm Doing" skills/interests |
| **12** | Testimonials (or delete the section) |

### Resume Page

| Step | What to Change |
|------|---------------|
| **13** | Education history |
| **14** | Work experience |
| **15** | Skills & proficiency levels |

### Portfolio Page

| Step | What to Change |
|------|---------------|
| **16** | Filter category names |
| **17** | Your projects (image, title, category, description, tech, link) |

### Adding Your Images

1. Put your profile photo and project screenshots in the `assets/images/` folder
2. Update the `src="./assets/images/YOUR-FILE-NAME.jpg"` paths in `index.html`
3. Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`, `.svg`

> **Tip:** Keep image file sizes under 500KB for fast loading. You can compress images at [tinypng.com](https://tinypng.com).

### Adding / Removing Projects

Each project in the Portfolio section is a `<li class="project-item">` block. To:

- **Add a project:** Copy an existing `<li class="project-item">...</li>` block and paste it below the last one. Then update the data attributes and content.
- **Remove a project:** Delete the entire `<li class="project-item">...</li>` block.

**Important:** The `data-category` must match one of your filter button names (lowercase). For example, if your filter says "Web design", use `data-category="web design"`.

### Project Popup Details

When someone clicks a project, a popup appears with more info. This data comes from these attributes on each project `<li>`:

```html
data-project-title="My Cool Project"
data-project-description="A longer description of what this project does..."
data-project-tech="HTML, CSS, JavaScript, React"
data-project-link="https://github.com/you/project"
```

---

## 9. Customize Your Colors & Theme

Want to make the site YOUR color? Open `assets/css/style.css` and look at the very top — there's a section called **★ YOUR THEME**. Here's what you can change:

### The Quick Way: Change One Number

The fastest way to change the entire color scheme is to change the **accent hue** number. Find this line near the top of `style.css`:

```css
--accent-hue: 45;
```

Change `45` to any number from `0` to `360`. That's it — every accent color, button, icon, and glow on the entire site will update.

Here's a cheat sheet for hue numbers:

| Number | Color |
|--------|-------|
| `0` | Red |
| `15` | Orange-Red |
| `30` | Orange |
| `45` | Gold (default) |
| `60` | Yellow |
| `120` | Green |
| `160` | Teal |
| `200` | Sky Blue |
| `220` | Blue |
| `260` | Purple |
| `280` | Violet |
| `320` | Pink |
| `340` | Rose |

### Full Theme Customization

You can also change these other variables right below the accent hue:

```css
/* How vivid the accent color is (0% = gray, 100% = bright) */
--accent-saturation: 100%;

/* How light/dark the accent is (lower = darker, higher = lighter) */
--accent-lightness: 72%;

/* Page background (the color behind everything) */
--page-bg: hsl(0, 0%, 7%);

/* Card backgrounds (sidebar and content areas) */
--card-bg: hsl(240, 2%, 12%);

/* Border/line colors */
--border-color: hsl(0, 0%, 22%);

/* Text colors */
--text-white: hsl(0, 0%, 100%);     /* headings */
--text-body: hsl(0, 0%, 84%);       /* paragraphs */
```

### Copy-Paste Preset Themes

Don't want to figure out colors? Just copy one of these blocks and paste it into the `★ YOUR THEME` section of `style.css`, replacing the existing values:

---

**Ocean Blue** — Clean and professional
```css
--accent-hue: 210;
--accent-saturation: 90%;
--accent-lightness: 65%;
--page-bg: hsl(220, 15%, 6%);
--card-bg: hsl(220, 12%, 11%);
--card-bg-alt: hsl(220, 12%, 13%);
--border-color: hsl(220, 8%, 22%);
--surface-color: hsl(220, 10%, 16%);
```

**Emerald Green** — Fresh and modern
```css
--accent-hue: 160;
--accent-saturation: 85%;
--accent-lightness: 60%;
--page-bg: hsl(170, 10%, 5%);
--card-bg: hsl(170, 8%, 10%);
--card-bg-alt: hsl(170, 8%, 12%);
--border-color: hsl(170, 5%, 20%);
--surface-color: hsl(170, 6%, 15%);
```

**Rose Pink** — Bold and creative
```css
--accent-hue: 340;
--accent-saturation: 90%;
--accent-lightness: 70%;
--page-bg: hsl(330, 8%, 6%);
--card-bg: hsl(330, 6%, 11%);
--card-bg-alt: hsl(330, 6%, 13%);
--border-color: hsl(330, 4%, 22%);
--surface-color: hsl(330, 5%, 16%);
```

**Electric Purple** — Standout and techy
```css
--accent-hue: 270;
--accent-saturation: 85%;
--accent-lightness: 68%;
--page-bg: hsl(260, 12%, 6%);
--card-bg: hsl(260, 10%, 11%);
--card-bg-alt: hsl(260, 10%, 13%);
--border-color: hsl(260, 6%, 22%);
--surface-color: hsl(260, 8%, 16%);
```

**Sunset Orange** — Warm and inviting
```css
--accent-hue: 20;
--accent-saturation: 95%;
--accent-lightness: 65%;
--page-bg: hsl(15, 10%, 6%);
--card-bg: hsl(15, 8%, 11%);
--card-bg-alt: hsl(15, 8%, 13%);
--border-color: hsl(15, 5%, 22%);
--surface-color: hsl(15, 6%, 16%);
```

**Minimal Gray** — Subtle and sleek (no color accent)
```css
--accent-hue: 0;
--accent-saturation: 0%;
--accent-lightness: 80%;
--page-bg: hsl(0, 0%, 5%);
--card-bg: hsl(0, 0%, 10%);
--card-bg-alt: hsl(0, 0%, 12%);
--border-color: hsl(0, 0%, 20%);
--surface-color: hsl(0, 0%, 15%);
```

> **Tip:** Use [hslpicker.com](https://hslpicker.com) to visually pick any color and get the HSL numbers.

---

## 10. Preview Your Changes Locally

### Option A: Live Server Extension (Recommended)

If you installed the **Live Server** extension in VS Code:

1. Right-click on `index.html` in the file explorer
2. Click **"Open with Live Server"**
3. Your browser will open with your site — and it **auto-refreshes** when you save changes!

### Option B: Just Open the File

1. Find `index.html` in your file explorer (Finder on Mac, File Explorer on Windows)
2. Double-click it — it will open in your default browser
3. After making changes, save the file and refresh the browser (Ctrl+R or Cmd+R)

---

## 11. Push Your Changes to GitHub

After you're happy with your changes, you need to "push" them to GitHub so they go live.

1. Open **Git Bash** (Windows) or **Terminal** (Mac)
2. Navigate to your project folder:
   ```bash
   cd ~/Desktop/turtle-portfolio-workshop-template
   ```
3. Run these three commands **one at a time**:

   ```bash
   git add .
   ```
   *(This stages all your changes)*

   ```bash
   git commit -m "Add my portfolio info"
   ```
   *(This saves your changes with a description)*

   ```bash
   git push
   ```
   *(This uploads your changes to GitHub)*

4. If prompted for your username/password, enter your GitHub credentials
   > **Note:** GitHub no longer accepts passwords for command-line operations. You may need to set up a [Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) or use [GitHub CLI](https://cli.github.com/). If this is confusing, ask a club lead for help!

---

## 12. Deploy Your Site (Free with GitHub Pages)

GitHub Pages hosts your website for free. Here's how to turn it on:

1. Go to your repo on GitHub: `github.com/YOUR-USERNAME/turtle-portfolio-workshop-template`
2. Click **"Settings"** (gear icon, top menu bar)
3. In the left sidebar, click **"Pages"**
4. Under **"Source"**, select:
   - **Branch:** `master` (or `main`)
   - **Folder:** `/ (root)`
5. Click **"Save"**
6. Wait 1-2 minutes, then refresh the page
7. You'll see a green banner with your live URL:
   ```
   https://YOUR-USERNAME.github.io/turtle-portfolio-workshop-template/
   ```

**That's it — your portfolio is live on the internet!** 🎉

> **Custom domain (optional):** If you own a domain name, you can connect it in the Pages settings. But the `.github.io` URL works perfectly fine.

---

## 13. Quick Reference: File Structure

```
turtle-portfolio-workshop-template/
│
├── index.html              ← THE ONLY FILE YOU NEED TO EDIT
│
├── assets/
│   ├── css/
│   │   └── style.css       ← Theme & colors (change accent hue at the top!)
│   ├── js/
│   │   └── script.js       ← Interactivity (you don't need to touch this)
│   └── images/             ← PUT YOUR IMAGES HERE
│       ├── my-avatar.png   ← Replace with your profile photo
│       ├── project-1.jpg   ← Replace with your project screenshots
│       ├── project-2.png
│       └── ...
│
├── README.md               ← This file (instructions)
└── LICENSE                 ← Open source license
```

---

## 14. Troubleshooting / FAQ

### "git is not recognized as a command"
Git isn't installed or isn't in your system PATH. Reinstall Git and make sure to check "Add Git to PATH" during installation (Windows). On Mac, run `xcode-select --install`.

### "I pushed my changes but the site didn't update"
GitHub Pages can take 1-5 minutes to update. Clear your browser cache (Ctrl+Shift+R) and wait a bit.

### "My images aren't showing up"
- Make sure the file name in your `src="..."` matches **exactly** (including capitalization)
- Make sure the image file is actually in the `assets/images/` folder
- Check for typos in the file extension (`.jpg` vs `.jpeg` vs `.png`)

### "The project popup isn't working"
Make sure each project `<li>` has all four `data-project-*` attributes filled in. If even one is missing, the popup won't have content to show.

### "I accidentally broke something and the site looks messed up"
Don't panic! You can undo your changes:
```bash
git checkout -- index.html
```
This resets `index.html` to the last committed version. Your uncommitted changes will be lost, so only do this if you want to start over.

### "I want to change the colors"
See [Section 9: Customize Your Colors & Theme](#9-customize-your-colors--theme) above. The quickest change: open `assets/css/style.css` and change the `--accent-hue` number at the top. Or copy-paste one of the preset themes.

### "How do I add more pages (like a Blog)?"
This template supports three pages: About, Resume, and Portfolio. If you want to add more, you'd need to add a new `<article>` section in `index.html`, a corresponding nav button, and make sure the `data-page` name matches. Ask a club lead if you need help with this.

---

## Credits

- Original template by [codewithsadee](https://github.com/codewithsadee/vcard-personal-portfolio)
- Modified for Turtle Club workshops
- Icons by [Ionicons](https://ionic.io/ionicons)
- Font: [Poppins](https://fonts.google.com/specimen/Poppins) by Google Fonts

## License

MIT — feel free to use this for your personal portfolio!

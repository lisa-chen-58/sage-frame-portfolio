# Portfolio Template README

## 🚀 Overview
This is a **portfolio template** built with **React**, **Vite**, and **Tailwind CSS**. You can use this as a starting point for your own portfolio website.

## 📌 How to Use This Template
This repository is a **GitHub Template Repo**, meaning you can create your own copy without forking! Here's how:

1. Click the **"Use this template"** button at the top of this repository.
2. Create a new repository in your GitHub account.
3. Clone your newly created repository:
   ```sh
   git clone https://github.com/lisa-chen-58/portfolio-template-sage.git
   cd portfolio-template-sage
   ```
4. Install dependencies:
   ```sh
   npm install
   ```
5. Start the development server:
   ```sh
   npm run dev
   ```
6. Open your browser and navigate to the displayed local development URL (typically `http://localhost:5173/`).

## 🛠 Customizing Your Portfolio
All personal information and content for the portfolio are stored in the `src/data/data.json` file. Simply edit this file to customize your portfolio.

### ✏ Example `data.json` Structure
```json
{
   "pageInfo": {
      "LinkedIn": "https://www.linkedin.com/in/buffy-slayer/",
      "pageUrl": "",
      "title": "SlayCode() → Stake Vampire!",
      "tagline": "CODING IS COOL.",
      "startYear": 2025,
      "footerMessage": "Am I the foot? Or the face of this website?"
   },
   "user": {
      "avatar": "/assets/avatar.png",
      "avatarAlt": "avatar of vampire selfie",
      "profilePic": "/assets/selfie.jpg",
      "profilePicAlt": "slayer taking selfie",
      "logo": "/assets/logo.png",
      "name": "Dawn Braker",
      "title": "Vampire Slayer",
      "titleTagline1": "I put the ‘fun’ in funeral,",
      "titleTagline2": "bloodsuckers",
      "languages": ["ByteFang", "HexLang", "DemonScript"],
      "experience": {
         "currentCompany": "Slayer Extraordinaire"
      }
   },
   "projects": [
      {
         "name": "Hellmouth Mapper",
         "description": "A web app built with React & Tailwind that maps supernatural hotspots.",
         "stack": ["React", "Tailwind", "Firebase"],
         "status": "Completed",
         "github": "https://github.com/buffy/hellmouth-mapper",
         "liveDemo": "",
         "image": "/assets/hellmouth-mapper.png"
      },
      {
         "name": "Demon Karaoke Night",
         "description": "A karaoke platform for demons, vampires, and humans. Hosted on Wix. No biting allowed!",
         "stack": ["JavaScript", "Wix"],
         "status": "Completed",
         "github": "",
         "liveDemo": "https://demonkaraoke.com",
         "image": "/assets/default.png"
      },
      {
         "name": "Watcher’s Log",
         "description": "A full-stack app for tracking vampire activity, apocalypse schedules, and overdue slayer training.",
         "stack": ["Java", "Spring Boot", "PostgreSQL"],
         "status": "To Do",
         "github": "https://github.com/buffy/watchers-log",
         "liveDemo": "",
         "image": "/assets/default.png"
      }
   ]
}
```

### 🔧 How to Update Data
- Change **title, tagline, and startYear** in `pageInfo` to reflect your details.
- Update **name, title, and avatar** for your personal branding.
- Modify **languages** to list the technologies you are familiar with.
- Adjust **experience** to reflect your current or past positions.
- Edit **projects** to showcase your work, including technologies used and the status of each project.

## 🌟 Setting Up Tailwind CSS

To add Tailwind CSS to this project, follow the official documentation:
[Using Tailwind CSS with Vite](https://tailwindcss.com/docs/installation/using-vite)

## 🏗 Building for Production
To generate a production-ready build, run:
```sh
npm run build
```
This will create an optimized version of the site in the `dist/` folder.

## 🚀 Deployment
You can deploy this project using any static hosting service that supports Vite builds. Some options include:

- **[Vercel](https://vercel.com/)**
- **[Netlify](https://www.netlify.com/)**
- **[GitHub Pages](https://pages.github.com/)**
- **[Firebase Hosting](https://firebase.google.com/docs/hosting)**

To deploy using Vercel, simply install Vercel CLI and run:
```sh
vercel
```

## ⚡ Contributing
Since this is a template repository, users create independent copies. If you'd like to contribute, consider forking instead of using the template.

## 📜 License
This template is free to use and modify. If you make improvements, consider sharing them with the community!
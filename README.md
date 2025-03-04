# Portfolio Template README

## 🚀 Overview
​The Sage Frame Portfolio is a template designed to help developers create personal portfolios using React, Vite, and Tailwind CSS. This combination offers a modern development environment with efficient build processes and customizable styling.​

### Key Features:

**React**: A popular JavaScript library for building user interfaces, enabling the creation of reusable components.​

**Vite**: A build tool that provides a faster and leaner development experience compared to traditional bundlers.​

**Tailwind CSS**: A utility-first CSS framework that allows for rapid UI development with a consistent design system.

### What this portfolio looks like (Sample)
![SageFrame1](https://github.com/user-attachments/assets/3d441193-b46c-470a-bd4c-b8fd1aca1321)
* Check out the [Live Demo!](https://sage-frame.web.app/insertFormLink)


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
All personal information and content for the portfolio are stored in the `/src/data/data.json` file. Simply edit this file to customize your portfolio.

### ✏ Example `data.json` Structure
```json
{
   "pageInfo": {
      "LinkedIn": "https://www.linkedin.com/in/buffy-slayer/",
      "pageUrl": "insertDeployedPage",
      "title": "SlayCode() → Stake Vampire!",
      "tagline": "CODING IS COOL.",
      "header1": "About Me",
      "header2": "Projects",
      "header3": "Contact",
      "contactMessage": "Slayer? Student? I'm here",
      "formKey": "insertFormLink",
      "startYear": 2025,
      "defaultImage": "../../src/assets/default.jpg",
      "footerMessage": "Am I the foot? Or the face of this website?"
   },
   "user": {
      "avatar": "../../src/assets/avatar.jpg",
      "avatarAlt": "avatar of vampire selfie",
      "profilePic": "../../src/assets/selfie.jpg",
      "profilePicAlt": "slayer taking selfie",
      "logo": "../../src/assets/logo.jpg",
      "name": "Dawn Braker",
      "title": "Vampire Slayer",
      "titleTagline": "I put the ‘fun’ in funeral, bloodsuckers!",
      "aboutTagline": "I don't debug, I exterminate.",
      "languages": ["ByteFang", "HexLang", "DemonScript"],
      "paragraph1": "Being a vampire slayer means constantly walking the line between life and death, armed with nothing but wit, skill, and a well-placed stake.",
      "paragraph2": "It’s a lonely but necessary path, where the night is filled with lurking shadows and ancient enemies thirsting for blood.",
      "paragraph3": "At the end of the day, it’s not just about slaying monsters—it’s about protecting those who never even realize the darkness that almost consumed them."
   },
   "projects": [
      {
         "name": "Slayer Portfolio",
         "description": "Personal website built with React & Tailwind.",
         "stack": ["React", "Tailwind", "Firebase"],
         "status": "Completed",
         "github": "https://github.com/lisa-chen-58/portfolio-template-sage",
         "liveDemo": "",
         "image": ""
      },
      {
         "name": "Hellmouth Mapper",
         "description": "A web app built with React & Tailwind that maps supernatural hotspots.",
         "stack": ["Stake++", "Tailwind", "Hellbase"],
         "status": "Completed",
         "github": "https://github.com/lisa-chen-58/portfolio-template-sage",
         "liveDemo": "https://www.youtube.com/watch?v=xvFZjo5PgG0",
         "image": "../../src/assets/hellmouth-mapper.jpg"
      },
      {
         "name": "Demon Karaoke Night",
         "description": "A karaoke platform for demons, vampires, and humans. Hosted on Wix. No biting allowed!",
         "stack": ["JavaStake", "Wixcraft"],
         "status": "Completed",
         "github": "https://github.com/lisa-chen-58/portfolio-template-sage",
         "liveDemo": "https://www.youtube.com/watch?v=xvFZjo5PgG0",
         "image": "../../src/assets/demon-oke.jpg"
      },
      {
         "name": "Watcher’s Log",
         "description": "A full-stack app for tracking vampire activity, apocalypse schedules, and overdue slayer training.",
         "stack": ["HellLang", "Spring Fangwork", "CryptSQL"],
         "status": "Completed",
         "github": "https://github.com/lisa-chen-58/portfolio-template-sage",
         "liveDemo": "https://www.youtube.com/watch?v=xvFZjo5PgG0",
         "image": "../../src/assets/default.jpg"
      }
   ]
}
```

### ⚠️ Important: Public Data Warning

The `data.json` file contains **publicly accessible** information. If you commit personal details (such as emails, private links, or sensitive data), they will be visible to anyone accessing your repository.

If you need to **keep your data private**, consider:
- Moving your data to **Firestore** or another database.
- Implementing **authentication and access control** (e.g., requiring login before displaying certain content).
- Keeping sensitive details out of `data.json` and instead storing them in **environment variables** or a backend.

Be mindful of what you expose in version control!

### 🔧 How to Update Data
- __**You can change pretty much value on any key listed in data.json. Be cautious—this file is public! If you need private data, consider a database solution (see ⚠️ Important: Public Data Warning).**__
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

## ✉️ Setting Up Formspree for Contact Forms

To add a contact form to your portfolio, you can use [Formspree](https://formspree.io/). Follow these steps to set up a form:

1. Go to [Formspree](https://formspree.io/) and sign up for an account.
2. Create a new form and copy the endpoint URL provided.
- This form uses name, email and message and the format can be found under the ModalContactForm component.
- You can modify this to however you see fit.
3. Replace `insertFormLink` in `/src/data/data.json` file under pageInfo > formKey.

Formspree handles the backend processing and forwards form submissions to your email.

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
This project is licensed under the **MIT License** – you're free to use and modify it. If you improve the template, consider sharing your contributions with the community!

## 📝 Issues & Feedback
If you run into any issues using this template, feel free to open an issue on GitHub or suggest improvements!

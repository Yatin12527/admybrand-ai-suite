# ADmyBRAND AI Suite - Modern SaaS Landing Page

This repository contains the source code for a stunning and modern landing page for a fictional SaaS product, the "ADmyBRAND AI Suite". This project was developed as part of an assignment to showcase cutting-edge UI/UX design trends, a reusable component system, and advanced frontend animations.

**Live Demo:** [**https://admybrand-ai-suite-pi.vercel.app/**](https://admybrand-ai-suite-pi.vercel.app/)

\<br/\>

\<br/\>

-----

## ✨ Feature Overview

This landing page is not just a static design; it's a fully interactive experience built with modern web technologies to feel premium and engaging.

  * **Modern 2025 UI/UX Trends:** Implements **glassmorphism**, beautiful gradient texts, and a clean, dark-mode aesthetic for a professional feel.
  * **Advanced Animations:** Utilizes **Framer Motion** for smooth, performant animations, including:
      * On-scroll reveal animations for all sections.
      * Subtle hover effects on interactive elements.
      * A dynamic background with flowing particles for a lively feel.
  * **Fully Responsive Design:** A mobile-first approach ensures a flawless and intuitive experience across all devices, from mobile phones to widescreen desktops.
  * **Interactive Pricing Calculator:** A functional calculator that allows users to estimate costs based on their needs, fulfilling a bonus requirement of the project.
  * **Custom CSS Graphics:** The impressive dashboard graphic in the hero section is built purely with CSS, showcasing advanced styling capabilities.
  * **Complete Landing Page Sections:** Includes all essential SaaS landing page components:
      * **Hero Section:** A compelling headline with shiny text effects and a clear call-to-action.
      * **Features Section:** Detailed breakdown of the AI suite's capabilities.
      * **Pricing Tiers:** Clearly defined pricing cards.
      * **Testimonials:** A carousel for customer reviews.
      * **FAQ:** An accordion-style FAQ section for common questions.
      * **Contact Form:** A functional contact form with client-side validation and a mocked API call promise.
  * **Smooth Navigation:** A floating dock navigation bar provides easy, smooth-scrolling access to all sections of the page.

-----

## 🛠️ Tech Stack

This project leverages a modern, type-safe, and performant technology stack.

  * **Framework:** **Next.js 14** (App Router)
  * **Language:** **TypeScript**
  * **Styling:** **Tailwind CSS**
  * **Animations:** **Framer Motion**
  * **UI Components:** A custom-built library of reusable components in `src/app/components/ui`.
  * **Deployment:** **Vercel**

-----

## 📂 Project Structure

The codebase is organized logically, with a focus on reusability and maintainability.

```
/src
└── /app
    ├── /components
    │   ├── /animated  // folder for subcomponents 
    │   └── /ui        // Reusable UI components (Hero, Pricing, FAQ, etc.)
    ├── globals.css    // Global styles
    ├── layout.tsx     // Root layout
    └── page.tsx       // The main page entry point
```

The core logic is centered in `page.tsx`, which composes the page by assembling the various UI components from the `/components/ui` directory. This structure makes it easy to manage and update individual sections of the landing page.

-----

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js (version 18.x or later) and a package manager (npm, yarn, or pnpm) installed on your machine.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Yatin12527/admybrand-ai-suite.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd admybrand-ai-suite
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

### Running the Development Server

Once the dependencies are installed, you can run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) with your browser to see the result. The page will auto-update as you edit the code.

-----

## 👤 Author

  * **Yatinder**
  * **Email:** [chhoker.yatinder123@gmail.com](mailto:chhoker.yatinder123@gmail.com)

-----

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
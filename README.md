

# ADmyBRAND AI Suite - Modern SaaS Landing Page

This repository contains the source code for a modern and polished landing page for a fictional SaaS product, the "ADmyBRAND AI Suite". This project was developed to showcase contemporary UI/UX design, a reusable component system, and advanced frontend animations.

**Live Demo:** [**https://admybrand-ai-suite-pi.vercel.app/**](https://admybrand-ai-suite-pi.vercel.app/)

-----

##  Project Preview

Here is a glimpse of the landing page's design and key features.

*(Please replace the placeholder links below with direct links to your images in the repository)*

**Hero Section & Dashboard UI  **
<img width="7680" height="4320" alt="localhost_3000_(highresscreeshot)" src="https://github.com/user-attachments/assets/9c96ebc7-5164-46b2-902d-76f6f0bc13b3" />

**Component section and marquee graphic**
<img width="3180" height="2233" alt="localhost_3000_" src="https://github.com/user-attachments/assets/d303a6ce-8923-4b52-bb99-428149302b18" />


-----

## Key Features

This landing page provides a fully interactive and engaging user experience, built with a focus on modern design and performant animations.

  - **Contemporary UI/UX:** Implements current design trends like **glassmorphism**, beautiful gradient texts, and a clean, dark-mode aesthetic for a professional feel.
  - **Advanced Animations:** Utilizes **Framer Motion** for smooth, performant animations, including on-scroll reveal effects for all sections, subtle hover states, and a dynamic particle background.
  - **Fully Responsive Design:** A mobile-first approach ensures a flawless and intuitive experience across all devices, from mobile phones to widescreen desktops.
  - **Interactive Pricing Calculator:** A functional calculator that allows users to estimate costs based on their needs, fulfilling a key project requirement.
  - **Pure CSS Graphics:** The detailed dashboard graphic in the hero section is built entirely with CSS, demonstrating advanced styling capabilities without relying on image assets.
  - **Comprehensive Section Layout:** Includes all essential SaaS landing page components:
      - **Hero Section:** A compelling headline with a shiny text effect and a clear call-to-action.
      - **Features Section:** A detailed breakdown of the AI suite's capabilities.
      - **Pricing Tiers:** Clearly defined pricing cards.
      - **Testimonials:** An interactive carousel for customer reviews.
      - **FAQ:** An accordion-style FAQ section for common questions.
      - **Contact Form:** A functional contact form with client-side validation and a mocked API call promise.
  - **Smooth Navigation:** A floating dock navigation bar provides easy, smooth-scrolling access to all sections of the page.

-----

## Tech Stack

This project leverages a modern, type-safe, and performant technology stack.

  - **Framework:** **Next.js 14** (App Router)
  - **Language:** **TypeScript**
  - **Styling:** **Tailwind CSS**
  - **Animations:** **Framer Motion**
  - **UI Components:** A custom-built library of reusable components located in `src/app/components/ui`.
  - **Deployment:** **Vercel**

-----

## Design and Inspiration

The visual direction of this project was informed by contemporary design trends and several excellent resources from the web development community.

  - **General UI/UX:** The overall aesthetic for the dashboard and SaaS components was inspired by modern designs found on Dribbble, such as this [AI Website Builder Concept](https://dribbble.com/shots/25818341-AI-Website-Builder-Effortless-Website-Creation-with-AI).
  - **Animations & Background:** The dynamic particle background and the approach to component animations were heavily inspired by [React Bits](https://www.reactbits.dev/). Their use of Framer Motion encouraged its adoption in this project for creating fluid, interactive elements.
  - **Typography & Styling:** Some of the text styles and gradient effects were adapted and evolved from my previous work, which can be seen in my personal portfolio: [Yatinder's Portfolio](https://yatinder-portfolio.vercel.app/).

-----

## Project Structure

The codebase is organized logically, with a focus on reusability and maintainability.

```
/src
└── /app
    ├── /components
    │   ├── /animated   // Animation wrapper components
    │   └── /ui         // Reusable UI components (Hero, Pricing, FAQ, etc.)
    ├── globals.css     // Global styles
    ├── layout.tsx      // Root layout
    └── page.tsx        // The main page entry point
```

The core logic is centered in `page.tsx`, which composes the page by assembling the various UI components from the `/components/ui` directory. This structure makes it easy to manage and update individual sections of the landing page.

-----

## Getting Started

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

## AI Usage Report

As required by the project brief, a detailed report outlining the use of AI tools during development is available.

[**View the Full AI Usage Report (AI-USAGE-REPORT.pdf)**](https://github.com/user-attachments/files/21611768/AI-USAGE-REPORT.pdf)

-----

## Author

  - **Yatinder**
  - **Email:** [chhoker.yatinder123@gmail.com](mailto:chhoker.yatinder123@gmail.com)

-----

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

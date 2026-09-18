# WEDE5020 POE PART 1: The Elevated Collective

## 1. Student Information
*   **Name:** Clintina Johannes
*   **Student Number:** ST10521666
*   **Course:** WEDE5020 (Web Development)
*   **Portfolio of Evidence:** Part 1

---

## 2. Project Overview (complete)
Founded in 2024, **The Elevated Collective** began as a boutique local brand offering specialty artisanal confectionery and curated membership perks. Built on a passion for vibrant lifestyle culture, the brand focuses on accessible, high-vibe products delivered with maximum convenience.

### Mission Statement
To bring joy and happiness in a flash at affordable prices, offering a sublime customer experience while keeping our consumers covered, sorted out, and valued.

### Vision Statement
To become the premier lifestyle confectionery hub known for seamless digital ordering, high-quality sweet treats, and an exclusive, rewarding subscriber community.

### Target Audience
Young adults and modern consumers aged 18–35 who value convenience, affordable indulgence, artisanal products, and lifestyle membership perks.

---

## 3. Website Goals and Objectives
*   **Goal 1:** Streamline the digital sales process to allow customers to order single items and subscriptions effortlessly via a professional multi-page website.
*   **Goal 2:** Transition the brand from relying on informal social media ordering to an organized centralized platform.
*   **Goal 3:** Increase brand visibility and drive online customer engagement through modern design aesthetics.

### Key Performance Indicators (KPIs)
*   Achieve a 25% increase in monthly online sales transactions after launch.
*   Achieve a 15% conversion rate on new visitor subscriptions to the Members Club.
*   Maintain an average page load time under 2.5 seconds through asset optimization.

---

## 4. Key Features and Functionality
*   **Homepage (`index.html`):** Hero section featuring the brand philosophy highlight, featured specialty items, and clear call-to-action (CTA) buttons for new and returning members.
*   **About Us (`about.html`):** Detailed company background, mission, vision, core values, and introduction to "The Team."
*   **Products / Catalog (`products.html`):** Interactive product grid featuring single treats, multi-packs, and subscription tiers with dynamic call-to-action buttons.
*   **Enquiry Form (`enquiry.html`):** Custom interactive form allowing for bulk orders, event catering enquiries, and general customer questions. *[Fulfils specific POE form requirement]*
*   **Contact Us (`contact.html`):** direct store details, multiple simulated store/pickup locations, and an interactive Google Maps embed placeholder. *[Fulfils multiple location map requirement]*

---

## 5. Design Aesthetic & User Experience
*   **Theme:** Modern dark-mode aesthetic featuring bold, high-contrast accent colors and high-vibe lifestyle imagery.
*   **Layout:** Clean fixed top navigation bar, logical visual hierarchy, responsive flexbox layout, and sticky footer links.
*   **Color Scheme:**
    *   Background: Dark Charcoal / Off-Black (`#121212`)
    *   Primary Accent: Forest Green (`#2D6A4F`)
    *   Secondary Accent: Ruby Red (`#BA181B`)
    *   Text: Pure White (`#FFFFFF`) / Light Gray (`#E0E0E0`)

---

## 6. Technical Requirements
### Development Stack
*   **Languages:** HTML5 (Semantic Structure), CSS3 (Styling & Layout), JavaScript (Interactivity simulated).
*   **Hosting:** Development hosted via GitHub Pages.

### Development Tools
*   Visual Studio Code (IDE)
*   Git (Version Control)
*   GitHub Repository


PART 2:
## 🚀 Live Website
View the deployed site on GitHub Pages:  
👉 [https://clintina-johannes.github.io/The_Elevated_Collective/](https://clintina-johannes.github.io/The_Elevated_Collective/)

---

## 📋 Part 2 Updates & Implementation Changelog

### 1. Base Styling & Architecture
- **CSS Reset:** Implemented a universal box-sizing reset (`*`, `::before`, `::after`) and cleared default browser margins/paddings.
- **Brand Theme & Variables:** Set up `:root` CSS variables for the dark theme color palette (`#121212` dark background, `#2D6A4F` primary green, `#BA181B` accent red) and typography.
- **Typography:** Integrated Google Fonts (**Montserrat** for headings, **Inter** for body text) with scalable `rem` sizing and standardized line heights.

### 2. Layout & Flexbox/Grid Systems
- **Header & Navigation:** Structured main navigation with CSS Flexbox for alignment and spacing.
- **Card Grids:** Configured multi-column card displays using CSS Grid across the main content sections.
- **Page Assembly:** Linked `css/style.css` and added mobile viewport meta tags to all HTML pages (`index.html`, `About.html`, `Contact.html`, `Enquiry.html`, `Products.html`).

### 3. Interactive Pseudo-Classes
- Added `:hover` visual elevation effects and color shifts to navigation links, cards, and buttons.
- Configured `:active` color changes on buttons to provide clear click/tap feedback.
- Applied visible `:focus` outline rings to inputs and buttons for accessibility compliance.

### 4. Responsive Breakpoints (`@media` Queries)
- **Desktop (default):** 3-column grid layout with horizontal navigation bar.
- **Tablet (`max-width: 1024px`):** Scaled down root font size and shifted card grids from 3 columns to 2 columns.
- **Mobile (`max-width: 768px`):** Stacked navigation items vertically, reduced main content margins, and simplified card layouts to a single column.

The_Elevated_Collective/
│
├── css/
│   └── style.css              # Main stylesheet (reset, variables, typography, layouts)
│
├── images/
│   └── images/                # Image asset directory
│       ├── products/          # Product image assets
│       │   ├── goldencroissantd...
│       │   ├── macaron.seasonal...
│       │   ├── midnight.truffle.jpg
│       │   ├── pastelsixpack.jpg
│       │   ├── RubyCacaoBark.jpg
│       │   ├── rubymaracronset.j...
│       │   └── SundayDanishSet....
│       ├── pastry-pattern.s...# Graphic vector assets
│       └── wordmark-past...   # Brand SVG graphics
│
├── About.html                 # About Us page
├── Contact.html               # Contact page
├── Enquiry.html               # Enquiry form page
├── Index.html                 # Homepage
├── Products.html              # Products & services catalog
└── README.md                  # Project documentation & changelog
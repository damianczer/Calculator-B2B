<div align="center">

# Calculator B2B

*Smart B2B Financial Calculator*

[![GitHub stars](https://img.shields.io/github/stars/damianczer/Calculator-B2B?style=for-the-badge&color=gold)](https://github.com/damianczer/Calculator-B2B/stargazers)
[![GitHub watchers](https://img.shields.io/github/watchers/damianczer/Calculator-B2B?style=for-the-badge&color=blue)](https://github.com/damianczer/Calculator-B2B/watchers)
[![GitHub issues](https://img.shields.io/github/issues/damianczer/Calculator-B2B?style=for-the-badge&color=red)](https://github.com/damianczer/Calculator-B2B/issues)
[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://www.damianczerwinski.pl/calculator-b2b/)

| Technology | Version | Purpose |
|------------|---------|---------|
| ![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=flat-square&logo=react) | `19.2.3` | Modern UI Framework |
| ![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=flat-square&logo=typescript) | `5.9.3` | Type-safe development |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=flat-square&logo=tailwind-css) | `3.4.1` | Utility-first CSS framework |
| ![Vite](https://img.shields.io/badge/Vite-7.3.0-646CFF?style=flat-square&logo=vite) | `7.3.0` | Next generation frontend tooling |
| ![i18next](https://img.shields.io/badge/i18next-25.7.3-26A69A?style=flat-square&logo=i18next) | `25.7.3` | Internationalization framework |
| ![React Router](https://img.shields.io/badge/React_Router-7.11.0-CA4245?style=flat-square&logo=react-router) | `7.11.0` | Client-side routing |

Comprehensive B2B financial calculator with tax calculations, currency conversion, and detailed guides for Polish entrepreneurs.

</div>

**Key Features & Capabilities:**

- **Advanced Tax Calculator** - Calculate revenue, costs, and taxes for different business forms (Flat Tax, Tax Scale, Lump Sum).
- **Real-time Currency Converter** - Live exchange rates from NBP and CoinGecko APIs.
- **Comprehensive Tax Guide** - Detailed explanations of Polish tax systems for businesses.
- **Multi-page Application** - Dedicated pages for Calculator, Currencies, Company Info, and Tax Guide.
- **Dark & Light Mode** - Fully customizable theme with smooth transitions.
- **Polish & English Translations** - Complete internationalization support.
- **Persistent Settings** - Remembers your preferences across sessions.
- **100% Client-Side** - Your financial data never leaves your browser.
- **Optimized for Production** - Efficiency, safety, and accessibility.

## 📁 Project Architecture

```
Calculator-B2B/
├── application/
│   ├── public/                         # Static assets
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── calculator/
│   │   │   │   ├── CostsCard.tsx       # Business costs input
│   │   │   │   ├── ResultsCard.tsx     # Calculation results display
│   │   │   │   ├── RevenueCard.tsx     # Revenue input
│   │   │   │   └── SettingsCard.tsx    # Calculator settings
│   │   │   │
│   │   │   ├── common/
│   │   │   │   ├── Button.tsx          # Reusable button component
│   │   │   │   ├── Card.tsx            # Card container
│   │   │   │   ├── CardHeader.tsx      # Card header with title
│   │   │   │   ├── ComingSoonPage.tsx  # Coming soon placeholder
│   │   │   │   ├── CustomDropdown.tsx  # Dropdown selector
│   │   │   │   ├── EmptyState.tsx      # Empty state component
│   │   │   │   ├── ErrorBoundary.tsx   # Error handling wrapper
│   │   │   │   ├── FormField.tsx       # Form input field
│   │   │   │   ├── icons.tsx           # Icon components
│   │   │   │   ├── LegalPage.tsx       # Legal page template
│   │   │   │   └── LoadingSpinner.tsx  # Loading indicator
│   │   │   │
│   │   │   ├── currency/
│   │   │   │   ├── CurrencyCard.tsx    # Currency info card
│   │   │   │   └── CurrencyConverter.tsx # Currency conversion UI
│   │   │   │
│   │   │   ├── guide/
│   │   │   │   ├── ComparisonTable.tsx # Tax system comparison
│   │   │   │   ├── GuideSection.tsx    # Guide section wrapper
│   │   │   │   ├── InfoBox.tsx         # Information box
│   │   │   │   ├── ItemList.tsx        # List component
│   │   │   │   ├── TableOfContents.tsx # Navigation for guide
│   │   │   │   ├── TaxRateBox.tsx      # Tax rate display
│   │   │   │   └── sections/
│   │   │   │       ├── FlatTaxSection.tsx     # Flat tax guide
│   │   │   │       ├── IntroSection.tsx       # Introduction
│   │   │   │       ├── LumpSumSection.tsx     # Lump sum guide
│   │   │   │       ├── SummarySection.tsx     # Summary
│   │   │   │       ├── TaxScaleSection.tsx    # Tax scale guide
│   │   │   │       └── WhenSection.tsx        # When to use guide
│   │   │   │
│   │   │   └── layout/
│   │   │       ├── Footer.tsx          # App footer
│   │   │       ├── Header.tsx          # App header with navigation
│   │   │       └── Layout.tsx          # Main layout wrapper
│   │   │
│   │   ├── constants/
│   │   │   ├── app.ts                  # App-wide constants
│   │   │   ├── config.ts               # Configuration values
│   │   │   ├── currency.ts             # Currency constants
│   │   │   ├── routes.ts               # Route definitions
│   │   │   └── styles.ts               # Style constants
│   │   │
│   │   ├── contexts/
│   │   │   ├── LanguageContext.tsx     # Language state management
│   │   │   └── ThemeContext.tsx        # Theme provider & logic
│   │   │
│   │   ├── hooks/
│   │   │   ├── useActiveSection.ts     # Active section tracking
│   │   │   ├── useCalculatorOptions.ts # Calculator options hook
│   │   │   ├── useCurrencyConverter.ts # Currency conversion logic
│   │   │   ├── useCurrencyRates.ts     # Currency rates fetching
│   │   │   ├── useLanguage.ts          # Language management hook
│   │   │   └── useTheme.ts             # Theme state hook
│   │   │
│   │   ├── i18n/
│   │   │   ├── config.ts               # i18next configuration
│   │   │   └── locales/
│   │   │       ├── en.json             # English translations
│   │   │       └── pl.json             # Polish translations
│   │   │
│   │   ├── pages/
│   │   │   ├── CalculatorPage.tsx      # Main calculator page
│   │   │   ├── CompanyPage.tsx         # Company information page
│   │   │   ├── CurrenciesPage.tsx      # Currency converter page
│   │   │   ├── GuidePage.tsx           # Tax guide page
│   │   │   ├── PrivacyPolicyPage.tsx   # Privacy policy
│   │   │   ├── TermsOfServicePage.tsx  # Terms of service
│   │   │   └── UOPPage.tsx             # UOP calculator page
│   │   │
│   │   ├── services/
│   │   │   └── currency/
│   │   │       ├── currency.service.ts # Currency service facade
│   │   │       └── clients/
│   │   │           ├── base.client.ts      # Base API client
│   │   │           ├── coingecko.client.ts # CoinGecko API
│   │   │           └── nbp.client.ts       # NBP API client
│   │   │
│   │   ├── types/
│   │   │   ├── calculator.ts           # Calculator type definitions
│   │   │   ├── components.ts           # Component prop types
│   │   │   ├── currency.ts             # Currency types
│   │   │   ├── guide.ts                # Guide types
│   │   │   └── i18n.ts                 # i18n types
│   │   │
│   │   ├── utils/
│   │   │   ├── cache.ts                # Caching utilities
│   │   │   ├── cookies.ts              # Cookie management
│   │   │   ├── format.ts               # Formatting helpers
│   │   │   └── guideHelpers.ts         # Guide helper functions
│   │   │
│   │   ├── App.tsx                     # Root component with providers
│   │   ├── main.tsx                    # React DOM rendering entry point
│   │   └── index.css                   # Global styles & Tailwind imports
│   │
│   ├── index.html                      # HTML entry point
│   ├── package.json                    # Dependencies & scripts
│   ├── tsconfig.json                   # TypeScript configuration
│   ├── tsconfig.app.json               # App-specific TS config
│   ├── tsconfig.node.json              # Node-specific TS config
│   ├── vite.config.ts                  # Vite build configuration
│   ├── tailwind.config.js              # Tailwind CSS configuration
│   ├── postcss.config.js               # PostCSS configuration
│   ├── eslint.config.js                # ESLint rules & plugins
│   └── .gitignore
│
├── LICENSE                             # MIT License
└── README.md                           # Project documentation
```
  
## ⚒️ Installation & Setup

### Prerequisites

```bash
- Node.js 18.0.0 or higher
- npm 7.0.0 or higher (or yarn/pnpm equivalent)
- Modern web browser (Chrome, Firefox, Safari, Edge)
```

### Quick Start

```bash
# 1️⃣ Clone the repository
git clone https://github.com/damianczer/Calculator-B2B.git

# 2️⃣ Navigate to project directory
cd Calculator-B2B/application

# 3️⃣ Install dependencies
npm install

# 4️⃣ Start development server
npm run dev

# 🎉 Application will open at http://localhost:5173
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Production files will be in the 'dist' folder
# Deploy the entire dist folder to your web hosting

# Optional: Preview production build locally
npm run preview
```

### Additional Commands

```bash
# Run ESLint for code quality
npm run lint

# Type checking
npm run build
```

## 📜 License

```
Copyright © 2025 Damian Czerwiński

This project is copyrighted and proprietary software.
All rights reserved.

Unauthorized copying, modification, distribution, or use of this software,
via any medium, is strictly prohibited without explicit written permission
from the copyright holder.

For licensing inquiries or permission requests:
📧 Email: kontakt@damianczerwinski.pl
🌐 Web: https://www.damianczerwinski.pl
```

<br>

<div align="center">
  
**Made with ❤️ and ☕ by Damian Czerwiński**

*Building beautiful, functional web experiences one component at a time*

</div>

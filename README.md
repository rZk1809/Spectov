# SpectoV

To enhance user-friendliness and code quality on the **Spectov homepage**, I implemented internal routing and refactored the component structure for clarity and maintainability. The UI was redesigned for visual appeal, with a mobile-first, fully responsive layout (320px–1920px+) and optimized background assets via Tailwind CSS. Navigation improvements include scroll-to-top on mount, hash-based deep linking, and intelligent state management using useLocation, useState, and useEffect, ensuring smooth navigation and restoration. I introduced an auto-scrolling testimonials carousel, interactive feature cards via Tilt.js, and controlled forms for user engagement and lead generation. Component logic was reorganized for performance, with setTimeout safeguards to guarantee race-condition-free scroll calculations. These changes were made to increase engagement, accessibility, and discoverability, while future-proofing the architecture for analytics and A/B testing. The result is a more intuitive, engaging, and conversion-oriented experience, better aligned with modern UX and business goals.

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/defxv-product-platform.git
   cd defxv-product-platform
   npm install
   npm run dev
   ```

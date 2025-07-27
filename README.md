# SpectoV

**What I changed:**  
I refactored the Spectov homepage by implementing internal routing and restructuring the component hierarchy for clarity and maintainability. The UI was redesigned to be more visually appealing and fully responsive (320px–1920px+), with optimized background assets via Tailwind CSS. Navigation was enhanced with scroll-to-top on mount, hash-based deep linking, and intelligent state management using useLocation, useState, and useEffect. I also added an auto-scrolling testimonials carousel, interactive feature cards using Tilt.js, and controlled forms for streamlined user input.

**Why I changed it:**  
These changes were driven by the need for a more user-friendly, modern, and maintainable homepage. Improved routing and state management provide smoother navigation and support for deep-linking. The visual and interactive enhancements aim to better capture user attention, while performance optimizations and responsive design ensure accessibility and usability across all devices.

**How it improves the original:**  
The new homepage delivers a more intuitive and engaging user experience, making key information and actions easier to find and interact with. Accessibility is enhanced through semantic HTML and ARIA labels, supporting WCAG AA compliance. Improved navigation and dedicated product sections increase discoverability and conversion potential, while robust form management enables better lead generation. The refactored architecture also lays the groundwork for future analytics, SEO improvements, and A/B testing, aligning the platform with both user and business goals.


## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/defxv-product-platform.git
   cd defxv-product-platform
   npm install
   npm run dev
   ```

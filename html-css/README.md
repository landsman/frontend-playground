# Star Wars: A CSS Journey

An immersive Star Wars themed demo showcasing modern CSS techniques, responsive design, and interactive elements.

![Patience](https://media1.giphy.com/media/26DN48mfu3uWJ3J7y/giphy.gif)

## ✨ Features

### 🎨 Modern Design System
- **CSS Custom Properties**: Comprehensive design tokens for colors, spacing, and layout
- **Star Wars Color Palette**: Themed colors for Republic (blue/green) and Dark Side (red/black)
- **Responsive Typography**: Fluid font sizes using `clamp()` for optimal readability
- **Gradient Backgrounds**: Immersive space-themed gradients and visual effects

### 🎭 Character Showcase
- **Interactive Character Cards**: Hover effects with unique animations for each character
- **Luke Skywalker**: Twinkling star animation on hover
- **Master Yoda**: Wisdom-inspired rotating star effect
- **Darth Vader**: Menacing sword animation with red glow effects
- **Darth Maul**: Rage-inspired fire animation with color shifting

### 🎵 Interactive Sound Effects
- **Chewbacca Sound Trigger**: Click to hear Chewbacca's iconic roar
- **Vader Breathing Effect**: Interactive breathing sound with animated glow
- **Accessible Controls**: ARIA labels and live regions for screen readers

### 📱 Responsive Design
- **Mobile-First Approach**: Optimized for all screen sizes (320px+)
- **Flexible Grid Layout**: Auto-fitting character cards with CSS Grid
- **Adaptive Spacing**: Dynamic spacing that scales with screen size
- **Touch-Friendly**: Larger touch targets on mobile devices

### ♿ Accessibility Features
- **Semantic HTML**: Proper use of `main`, `section`, `article`, and `header` elements
- **ARIA Support**: Live regions for dynamic content and descriptive labels
- **Keyboard Navigation**: Full keyboard accessibility for interactive elements
- **Reduced Motion**: Respects `prefers-reduced-motion` user preference
- **High Contrast**: Sufficient color contrast ratios for readability

### 🎨 Visual Effects
- **CSS Animations**: Smooth entrance animations and hover effects
- **Backdrop Filters**: Modern blur effects for depth
- **Box Shadows**: Layered shadows with themed glow effects
- **Transform Effects**: Scale, rotate, and translate animations
- **Gradient Text**: Eye-catching gradient text effects for headings

### 🌓 Theme Support
- **Dark Mode**: Default space-themed dark interface
- **Light Mode**: Automatic adaptation for light mode preference
- **Color Scheme**: Respects system color scheme preferences

## 🚀 How to start

```bash
npm install
npm run start
```

## 🏗️ Project Structure

```
html-css/
├── index.html          # Main HTML file with semantic structure
├── css/
│   ├── style.css       # Main stylesheet (imports all others)
│   ├── theme.css       # Base theme, layout, and responsive styles
│   ├── republica.css   # Republic era specific styling
│   └── dark_side.css   # Dark Side specific styling
├── img/                # Character images
└── README.md          # This documentation
```

## 🎯 Design Improvements Made

1. **HTML Structure**: Complete rewrite with semantic HTML5 elements
2. **CSS Architecture**: Modular CSS with clear separation of concerns
3. **Interactive Elements**: Added JavaScript for sound effects and animations
4. **Responsive Layout**: Mobile-first responsive design with breakpoints
5. **Accessibility**: WCAG compliant with proper ARIA attributes
6. **Visual Polish**: Modern CSS effects, animations, and hover states
7. **Performance**: Optimized CSS with efficient selectors and animations

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and accessibility features
- **CSS3**: Modern features including Grid, Flexbox, Custom Properties, and Animations
- **Vanilla JavaScript**: Lightweight interactivity for sound effects
- **Responsive Design**: Mobile-first approach with CSS media queries

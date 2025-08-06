# SVG Icons Demo

A comprehensive demo project showcasing how to work with SVG icons using CSS mask technique. This approach provides excellent performance, customization options, and works across all modern frameworks without requiring a build step.

## Features

- **20 High-Quality SVG Icons**: Carefully crafted icons including gear, pencil, search, trash, folder, home, user, heart, star, download, upload, mail, phone, calendar, lock, unlock, arrows, plus, minus, and check
- **CSS Mask Technique**: Uses CSS `mask-image` for optimal performance and flexibility
- **Color Customization**: Easy color overrides using CSS custom properties and data attributes
- **Hover Effects**: Smooth transitions and interactive hover states
- **Responsive Design**: Mobile-friendly grid layout
- **Framework Agnostic**: Works with React, Vue, Angular, or vanilla HTML/CSS
- **No Build Step Required**: Direct browser compatibility

## Quick Start

1. Open `index.html` in your browser to see the demo
2. Copy the CSS and SVG files to your project
3. Include the stylesheets in your HTML:

```html
<link rel="stylesheet" href="styles/theme.css">
<link rel="stylesheet" href="styles/icon.css">
```

## Usage Examples

### Basic Icon Usage

```html
<div class="icon gear"></div>
<div class="icon search"></div>
<div class="icon heart"></div>
```

### Color Customization with Data Attributes

```html
<!-- Predefined color themes -->
<div class="icon heart" data-color="red"></div>
<div class="icon star" data-color="gold"></div>
<div class="icon check" data-color="green"></div>
<div class="icon trash" data-color="danger"></div>
<div class="icon lock" data-color="warning"></div>
<div class="icon mail" data-color="info"></div>
```

### Hover Effects

```html
<div class="icon gear hover-effect"></div>
<div class="icon heart hover-effect"></div>
```

### Custom Colors with CSS

```css
.icon.custom-color {
  background-color: #9b59b6 !important;
}

.icon.gradient {
  background: linear-gradient(45deg, #3498db, #e74c3c) !important;
}
```

## Available Icons

| Icon Name | Class | Description |
|-----------|-------|-------------|
| Gear | `.gear` | Settings/configuration |
| Pencil | `.pencil` | Edit/write |
| Search | `.search` | Search functionality |
| Trash | `.trash` | Delete/remove |
| Folder | `.folder` | File management |
| Home | `.home` | Home/dashboard |
| User | `.user` | User profile |
| Heart | `.heart` | Favorites/like |
| Star | `.star` | Rating/bookmark |
| Download | `.download` | Download action |
| Upload | `.upload` | Upload action |
| Mail | `.mail` | Email/messages |
| Phone | `.phone` | Contact/call |
| Calendar | `.calendar` | Date/schedule |
| Lock | `.lock` | Security/locked |
| Unlock | `.unlock` | Security/unlocked |
| Arrow Left | `.arrow-left` | Navigation |
| Arrow Right | `.arrow-right` | Navigation |
| Plus | `.plus` | Add/create |
| Minus | `.minus` | Remove/subtract |
| Check | `.check` | Success/complete |

## Color Themes

The following data attribute colors are available:

- `data-color="red"` - Red (#e74c3c)
- `data-color="gold"` - Gold (#f1c40f)
- `data-color="green"` - Green (#27ae60)
- `data-color="danger"` - Danger red (#e74c3c)
- `data-color="warning"` - Warning orange (#f39c12)
- `data-color="info"` - Info blue (#3498db)

## Customization

### CSS Custom Properties

The theme uses CSS custom properties for easy customization:

```css
:root {
  --text-icon-l: 2rem;          /* Desktop icon size */
  --text-icon-xl: 3rem;         /* Mobile icon size */
  --color-icon-default: #007bff; /* Default icon color */
  --color-icon-subtle: #646cff;  /* Subtle icon color */
}
```

### Adding New Icons

1. Create a new SVG file in the `img/` directory with `fill="currentColor"`
2. Add a new CSS class in `icon.css`:

```css
.my-icon {
  composes: common;
  mask-image: url("/img/my-icon.svg");
}
```

3. Use in HTML: `<div class="icon my-icon"></div>`

## Browser Support

- Chrome 53+
- Firefox 53+
- Safari 15.4+
- Edge 79+

## Why CSS Mask Technique?

1. **Performance**: SVGs are cached by the browser and reused
2. **Flexibility**: Easy color changes without modifying SVG files
3. **Scalability**: Vector graphics scale perfectly at any size
4. **Maintainability**: Centralized styling and easy theme changes
5. **Bundle Size**: Smaller than icon fonts or inline SVGs

## File Structure

```
svg-icons/
├── img/                 # SVG icon files
│   ├── gear.svg
│   ├── pencil.svg
│   └── ...
├── styles/
│   ├── theme.css       # CSS custom properties
│   ├── icon.css        # Icon definitions
│   └── demo.css        # Demo page styles
├── index.html          # Demo page
└── README.md          # This file
```

## License

This project is open source and available under the MIT License.

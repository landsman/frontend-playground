# SVG Icons Demo

A comprehensive demo project showcasing how to work with SVG icons using CSS mask technique. This approach provides excellent performance, customization options, and works across all modern frameworks without requiring a build step.

## Features

- **20 High-Quality SVG Icons**: Carefully crafted icons including gear, pencil, search, trash, folder, home, user, heart, star, download, upload, mail, phone, calendar, lock, unlock, arrows, plus, minus, and check
- **CSS Mask Technique**: Uses CSS `mask-image` for optimal performance and flexibility
- **Color Customization**: Easy color overrides using CSS custom properties and data attributes
- **Built-in Hover Effects**: All icons have default hover effects with smooth transitions and interactive states
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

All icons have built-in hover effects by default:

```html
<div class="icon icon-gear"></div>
<div class="icon icon-search"></div>
<div class="icon icon-heart"></div>
```

### Color Customization with Data Attributes

```html
<!-- Predefined color themes -->
<div class="icon icon-heart" data-color="red"></div>
<div class="icon icon-star" data-color="gold"></div>
<div class="icon icon-check" data-color="green"></div>
<div class="icon icon-trash" data-color="danger"></div>
<div class="icon icon-lock" data-color="warning"></div>
<div class="icon icon-mail" data-color="info"></div>
```


### Custom Colors with CSS

```css
@layer component {
  .icon.custom-color {
    background-color: #9b59b6;
  }

  .icon.gradient {
    background: linear-gradient(45deg, #3498db, #e74c3c);
  }
}
```

## Available Icons

| Icon Name | Class | Description |
|-----------|-------|-------------|
| Gear | `.icon-gear` | Settings/configuration |
| Pencil | `.icon-pencil` | Edit/write |
| Search | `.icon-search` | Search functionality |
| Trash | `.icon-trash` | Delete/remove |
| Folder | `.icon-folder` | File management |
| Home | `.icon-home` | Home/dashboard |
| User | `.icon-user` | User profile |
| Heart | `.icon-heart` | Favorites/like |
| Star | `.icon-star` | Rating/bookmark |
| Download | `.icon-download` | Download action |
| Upload | `.icon-upload` | Upload action |
| Mail | `.icon-mail` | Email/messages |
| Phone | `.icon-phone` | Contact/call |
| Calendar | `.icon-calendar` | Date/schedule |
| Lock | `.icon-lock` | Security/locked |
| Unlock | `.icon-unlock` | Security/unlocked |
| Arrow Left | `.icon-arrow-left` | Navigation |
| Arrow Right | `.icon-arrow-right` | Navigation |
| Plus | `.icon-plus` | Add/create |
| Minus | `.icon-minus` | Remove/subtract |
| Check | `.icon-check` | Success/complete |

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
    --icon-size-l: 2rem; /* Desktop icon size */
    --icon-size-xl: 3rem; /* Mobile icon size */
    --icon-color: #007bff; /* Default icon color */
    --icon-color-hover: #646cff; /* Default hover color */
}
```

### Adding New Icons

1. Create a new SVG file in the `img/` directory with `fill="currentColor"`
2. Add a new CSS class in `icon.css`:

```css
.icon-my-icon {
  mask-image: url("../img/my-icon.svg");
}
```

3. Use in HTML: `<div class="icon icon-my-icon"></div>`

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

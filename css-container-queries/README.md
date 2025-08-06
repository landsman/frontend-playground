# CSS Container Queries

A comprehensive demonstration of CSS Container Queries with interactive examples and multiple breakpoints.

## 🚀 Features

- **Interactive Demo**: Resizable container with visual feedback
- **Multiple Breakpoints**: 4 different container query breakpoints (500px, 700px, 900px)
- **Container Query Units**: Demonstrates usage of `cqi`, `cqw`, `cqh`, `cqb`, `cqmin`, `cqmax`
- **Visual Indicators**: Shows which breakpoint is currently active
- **Responsive Design**: Card layout and styling changes based on container size
- **Educational Content**: Built-in documentation of container query units

## 🎯 How to Use

1. Open `src/index.html` in a modern browser
2. Drag the right edge of the dashed container border to resize it
3. Watch how the card inside changes its:
   - Background color and gradient
   - Layout (row to column)
   - Font size (using container query units)
   - Padding and spacing
   - Visual indicators showing current breakpoint

## 📱 Breakpoints

- **< 500px**: Small container (red gradient, horizontal layout)
- **≥ 500px**: Medium container (teal gradient, vertical layout)
- **≥ 700px**: Large container (pink gradient, larger padding)
- **≥ 900px**: Extra large container (orange gradient, maximum styling)

## Can I use?

See the browser support: https://caniuse.com/?search=container-type

## Good to know

There are these neq cq units:

- `cqw` is 1% of a query container's width
- `cqh` is 1% of a query container's height
- `cqi` is 1% of a query container's inline size
- `cqb` is 1% of a query container's block size
- `cqmin` is the smaller value of either `cqi` or `cqb`
- `cqmax` is the larger value of either `cqi` or `cqb`

## Reading list

- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_container_queries
- https://css-tricks.com/say-hello-to-css-container-queries/
- https://www.vzhurudolu.cz/prirucka/container-queries

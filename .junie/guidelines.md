# Frontend Playground Development Guidelines

## Project Overview

This is a frontend playground monorepo designed for experimenting with web development features, tools, and techniques. 
It serves as both a learning environment and a reference resource for web development concepts.

## Project Structure

### Root Level
- **index.html**: Main navigation page that lists all demo projects with descriptions and links
- **package.json**: Simple configuration with http-server for local development
- **README.md**: Project documentation with useful development resources and links

### Demo Folders
Each demo folder represents a self-contained frontend experiment or demonstration:

- **Purpose**: Each folder focuses on a specific web technology, API, or technique (e.g., SVG icons, CSS container queries, cross-document messaging, dialog elements, popover API)
- **Structure**: Every demo folder must contain an `index.html` file in its root for easy GitHub Pages hosting
- **Content**: Demos include comprehensive examples with interactive elements, code samples, and documentation
- **Assets**: Supporting files are organized in subfolders (e.g., `styles/`, `img/`, `css/`, etc)

### Expected Demo Content
- **Interactive Examples**: Working demonstrations of the featured technology
- **Code Samples**: Clear usage examples with copy-to-clipboard functionality where applicable
- **Documentation**: Explanatory text describing the feature and its implementation
- **Styling**: Custom CSS for presentation and user experience
- **Self-contained**: Each demo should work independently without external dependencies

## Development Conventions

### File Organization
- Each demo folder is completely self-contained
- Use descriptive folder names that clearly indicate the technology or feature being demonstrated
- Maintain consistent naming conventions (kebab-case for folders)
- Include supporting assets in appropriately named subfolders

### HTML Structure
- Every demo folder must have `index.html` in the root for GitHub Pages compatibility
- Use semantic HTML elements and proper document structure
- Include responsive meta viewport tags
- Provide clear navigation back to the main index when appropriate

### Styling Approach
- Use vanilla CSS or minimal dependencies
- Focus on clean, readable presentation
- Include hover effects and interactive elements where relevant
- Maintain consistent visual design across demos

### Development Workflow
- Use `npm start` to run local http-server on port 8080
- Test each demo independently and as part of the overall navigation
- Ensure all demos work when hosted on GitHub Pages
- Keep dependencies minimal (currently only http-server for development)

## GitHub Pages Hosting

The project is designed for easy GitHub Pages deployment:
- Main `index.html` serves as the landing page
- Each demo folder's `index.html` can be accessed directly via URL paths
- No build process is required—all content is static
- Relative links ensure proper navigation in both local and hosted environments

## Adding New Demos

When adding a new demo:
1. Create a new folder with a descriptive kebab-case name
2. Add `index.html` in the folder root
3. Include supporting assets in appropriate subfolders
4. Update the main `index.html` to include the new demo in the project list
5. Ensure the demo works both locally and when hosted
6. Follow the established patterns for styling and interactivity

## Resources and References

The project maintains curated lists of useful development resources in the README.md:
- Web development blogs and newsletters
- Educational video channels
- Platform-specific documentation links
- Community resources for staying current with web technologies

This structure supports both individual learning and sharing knowledge with others in the web development community.

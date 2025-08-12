# Claude Memory for soft_launch

## Design Aesthetic Preferences

### Visual Style
- **Rounded corners**: 8px border-radius on all design elements for a softer, more approachable feel
- **Light backgrounds with dark text**: Consistent frosted glass aesthetic across all sections
- **Uniform styling**: All content sections use the same light background (rgba(255, 255, 255, 0.3)) with backdrop blur
- **Separated sections**: Each content area in its own distinct box to show sky background between sections

### Layout Structure
- **Title section**: Three separate components (title, subtitle, description) that can be styled independently
- **Individual content boxes**: Each section gets its own background box rather than one large container
- **Consistent spacing**: 2rem between all sections on desktop, 1rem on mobile

### Typography & Colors
- **Dark blue text on all sections**: `#0d1b33` for consistent readability on light backgrounds
- **No text shadows**: Clean, sharp text without drop shadows
- **Font choices**: 
  - `BPDots` for headings (already in use)
  - `ZxGamut` for body text (already in use)

### Mobile Optimization
- **Reduced vertical padding**: Prioritize screen space utilization
- **Maintain horizontal padding**: Need breathing room on sides (1rem)
- **Consistent responsive behavior**: All sections should scale uniformly

## Technical Preferences

### Form Handling
- **Simplified form layout**: Name and email on same line for desktop, stacked on mobile
- **Rounded form inputs**: 8px border-radius for consistency
- **Light backgrounds**: Matching the frosted glass aesthetic with backdrop blur
- **No optional fields**: Streamlined signup process

### Email Integration
- **Custom backend preferred**: Considering Render for unlimited submissions over services like Formspree
- **GitHub Pages deployment**: Current hosting choice

### Code Organization
- **Prefer editing existing files**: Don't create new files unless absolutely necessary
- **Semantic structure**: Applications section separate from other content sections

## Content Structure

### Page Hierarchy
1. **Title section** (outside boxes, with frosted glass backgrounds):
   - Main title: "soft_launch" 
   - Subtitle: "Creative Code Intensive for Artists & Technologists"
   - Description paragraph (shortened, removed "A bridge..." text)
2. **Applications Coming Soon** (first content box, simplified form)
3. **What We Believe** (second content box)
4. **Program sections** (overview, curriculum, facilities, etc.)
5. **Gallery** (image carousel with placeholder content)
6. **Partners** (InterAccess and UKAI logos)
7. **Contact section**

### Team Section
- **Photo placeholders**: Square aspect ratio (1:1), full width of container
- **Bio content**: Remove references to "NEW INC Y11 member" from Tara's bio

## Visual Effects
- **Backdrop blur**: 8px blur on frosted glass title sections
- **High contrast**: 0.9 opacity black backgrounds for content boxes
- **Consistent borders**: `rgba(255, 255, 255, 0.3)` for content, `rgba(255, 255, 255, 0.2)` for title sections

## Development Notes
- **p5.js background**: Sky animation runs behind all content
- **Flexbox centering**: Title sections use flex for perfect text centering
- **Grid layouts**: Team members, curriculum blocks, program details use CSS Grid
- **Mobile-first responsive**: Specific optimizations for screens under 768px width
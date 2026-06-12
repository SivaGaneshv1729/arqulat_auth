# Styling Handoff (For Siva Ganesh)

This document is for **Siva Ganesh** to apply high-end, dynamic, and premium styling to the authentication frontend.

## The Approach
The current styling (`src/styles/Auth.css`) is completely **structural and minimal**. It provides basic layout and flexbox centering so the app is visually testable, but it is **not** the final design.

Your objective is to overwrite `Auth.css` with a highly premium, dynamic interface (e.g., glassmorphism, tailored color palettes, subtle micro-animations).

## Semantic Classes Used
We have deliberately avoided tight coupling and inline styles. All HTML elements are tagged with clean, semantic class names. You do not need to modify the `.jsx` files; you only need to target these classes in `Auth.css`.

### Layout & Containers
- `.auth-container`: The main wrapper for the entire page (usually takes up `100vh`). Good for background gradients, images, or flex/grid centering.
- `.auth-form`: The actual card or form wrapper. Good for glassmorphic effects, shadows, borders, and padding.

### Typography
- `.auth-title`: The main heading (`h1` or `h2`) of the form. 
- `.auth-link`: Text links (e.g., "Don't have an account? Register here"). Good for hover states and brand colors.
- `.error-message`: Container for validation errors. Requires clear, distinct visual cues (e.g., red backgrounds, icons).

### Inputs & Buttons
- `.input-field`: Text and password inputs. Good for focus states, smooth transitions, and custom borders.
- `.primary-btn`: The main action button (Login / Register). Needs hover, active, and disabled states.
- `.google-btn`: The specific button for Google OAuth. Requires brand-specific styling (Google red or neutral white with shadow) and hover animations.

## Next Steps
1. Navigate to `src/styles/Auth.css`.
2. Clear out the existing structural styles.
3. Build the premium theme targeting the semantic classes listed above. 

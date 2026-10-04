==========================================================================
TRP4Next Café & Studio — One-Page Website Guide
==========================================================================

Welcome! Your one-page website for TRP4Next Café & Studio is ready.
It is built with plain HTML, CSS, and Vanilla JS — zero build step required.

--------------------------------------------------------------------------
1. HOW TO PREVIEW LOCALLY
--------------------------------------------------------------------------
Double-click `index.html` to open the website directly in any web browser 
(Chrome, Safari, Edge, Firefox).


--------------------------------------------------------------------------
2. WHERE TO EDIT CONTENT & SETTINGS
--------------------------------------------------------------------------

A) CHANGE COLORS:
- Open `style.css`
- Edit the HEX values at the very top under `:root`:
  --bg-color: #FAF8F5;        /* Page background */
  --text-color: #2C2623;      /* Main text color */
  --accent-color: #C85A32;    /* Buttons & accent highlights */
  --secondary-color: #EFEAE1; /* Card backgrounds & tags */

B) CHANGE PHONE NUMBER:
- Open `index.html` and search for comments: `<!-- EDIT PHONE NUMBER HERE -->`
- Update `+91 94262 12345` and the `tel:+919426212345` link targets.

C) CHANGE OPENING HOURS:
- Open `index.html` and search for comment: `<!-- EDIT HOURS HERE -->`
- Update the operating hours text (e.g. `4:00 PM – 11:30 PM`).

D) EDIT MENU ITEMS & PRICES:
- Open `index.html` and search for comment: `<!-- EDIT MENU BELOW -->`
- Update food names, descriptions, and prices (e.g. `₹280`).
- You can add or remove items by duplicating `<li class="menu-item">...</li>` blocks.

E) CHANGE OR ADD PHOTOS:
- Open the `/images/` folder.
- Replace `hero-cafe.jpg`, `pizza.jpg`, `coffee.jpg`, `nachos.jpg`, `dessert.jpg`, `live-music.jpg` with your own high-resolution photos.
- To add extra gallery photos, update the photo strip section in `index.html` where marked `<!-- PHOTO PLACEHOLDER -->`.

F) EDIT INSTAGRAM LINK:
- Open `index.html` and search for comment: `<!-- EDIT INSTAGRAM LINK HERE -->`
- Update `https://instagram.com/trp4next_cafe` with your exact Instagram link.


--------------------------------------------------------------------------
3. HOW TO UPLOAD & HOST (NETLIFY / FREE HOSTING)
--------------------------------------------------------------------------

OPTION A — NETLIFY (Easiest & Free):
1. Go to https://app.netlify.com/drop
2. Drag and drop the entire folder containing `index.html`, `style.css`, `script.js`, and `/images` into the browser window.
3. Your site will be live instantly with a free SSL certificate! You can connect your custom domain name anytime under Site Settings.

OPTION B — VERCEL / GITHUB PAGES:
1. Create a free account on GitHub.com and push this folder to a repository.
2. Connect the repository to Vercel (vercel.com) or enable GitHub Pages in repository settings under Pages.

OPTION C — ANY BASIC WEB HOSTING (Hostinger, Bluehost, GoDaddy, etc.):
1. Connect via FTP or File Manager.
2. Upload `index.html`, `style.css`, `script.js`, `README.txt`, and the `/images` folder into your `public_html` directory.


==========================================================================
Enjoy your new TRP4Next Café & Studio website!
==========================================================================

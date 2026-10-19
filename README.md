# DIT Study Hub

A responsive, modern dark-themed static website for organizing DIT First Year notes and model papers. Built with plain HTML, CSS, and JavaScript so it can be hosted free on GitHub Pages.

## Included
- Responsive desktop and mobile layout
- Navigation links and mobile menu
- Search across resource titles/descriptions
- Category filters for subject notes and model papers
- Model paper call-to-action that filters the catalog
- Accessible labels and reduced-motion support
- No build tools or dependencies required

## Important: add your real PDFs
The catalog currently uses example subject categories and links to `resources/README.md` as a placeholder. These are not verified official PBTE syllabus subjects or real notes.

1. Create a folder named `pdfs` in the repository.
2. Put your legally shareable PDFs inside it, e.g. `computer-applications-notes.pdf`.
3. In `index.html`, replace each placeholder link such as:
   `href="resources/README.md"`
   with the correct path, e.g.:
   `href="pdfs/computer-applications-notes.pdf" download`
4. Edit the subjects and descriptions to match your actual DIT First Year syllabus.
5. Add model-paper PDFs in the same way.

## Run locally
Open `index.html` in a modern browser. No installation is needed.

## Publish on GitHub Pages
1. Sign in to GitHub and create a new public repository named `dit-study-hub`.
2. Upload `index.html`, `styles.css`, `script.js`, `README.md`, and the `resources` folder (and your `pdfs` folder if added).
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch **main** and folder **/(root)**, then click **Save**.
6. Wait a minute or two. Your website URL will normally be:
   `https://YOUR-USERNAME.github.io/dit-study-hub/`
   Replace `YOUR-USERNAME` with your GitHub username.
7. Whenever you update files in the repository, GitHub Pages republishes the site automatically.

If you name the repository `YOUR-USERNAME.github.io`, the URL instead becomes `https://YOUR-USERNAME.github.io/`.

## Customize
- Brand name and page content: `index.html`
- Colors, spacing, and responsive breakpoints: `styles.css`
- Search, category filters, and mobile menu: `script.js`

## License/content note
Use only study materials you own or are allowed to distribute. This starter site does not copy the linked reference site's source code or claim official affiliation with PBTE.

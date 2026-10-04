# PursuitVLA project page

This is the anonymous PursuitVLA ICLR project page. It is a static site that can be published directly with GitHub Pages.

## Preview locally

From this directory, run:

```powershell
python -m http.server 4173
```

Then open `http://127.0.0.1:4173/`.

## GitHub Pages

1. Create a public GitHub repository and upload the contents of this directory.
2. In **Settings -> Pages**, choose **Deploy from a branch**.
3. Select the default branch and the `/ (root)` folder, then save.
4. The public page will be available at `https://<username>.github.io/<repository>/`.

The repository does not contain author identities or local raw videos. Case 1 and Case 4 use the two supplied YouTube embeds; Case 2 and Case 3 remain placeholders until their edits are ready.

## Adding the real-world video

Case 1 and Case 4 currently use responsive YouTube embeds. Case 2 and Case 3 remain as placeholders until their edits are ready. Replace their placeholder blocks with the corresponding YouTube embed URL in `index.html` when available.

For the eventual Google Sites embed, the HTML page and video must be served from a public HTTPS origin. Recommended options are a static host such as GitHub Pages, Cloudflare Pages, or Netlify. Imgur can host short media, but it is less predictable for a long-term research demo page and should not be the source of record for the videos.

## Files

- `index.html`: page structure and anonymous research copy
- `styles.css`: responsive academic layout
- `script.js`: section highlighting, result tabs, and BibTeX copy action
- `assets/figures/`: local paper figures used by the prototype
- `assets/videos/`: future MP4/WebM demo files

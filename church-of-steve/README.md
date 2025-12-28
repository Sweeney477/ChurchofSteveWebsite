<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1nrJkN3tgKgv74SHrBFllX3SSxGGwSkB8

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Sanity CMS

The site pulls dynamic content (tenets, testimonials, shop, events, gallery) from Sanity. To edit content or add new items, see `SANITY_SETUP.md` for environment variables and Studio usage. The Studio lives in `church-of-steve-cms/` and points at project `hjme0fev`.

# To Do

- Reels:
  - Line 75 section "lacks" H2. It's actually further down. Can I move it up and then use a flexbox trick to swap the visual order of the elements on the page?
  - Convert YouTube videos to `<video>` tags.
    - See Wes Bos tutorial.
    - Set `.gitignore` to not attempt to upload videos to GitHub. Instead, forego the relative filepaths and point them straight to the files on the Dreamhost server. (Upload to dreamhost first, of course.)
    - Alternative:
      - Speed up third-party iframes (YouTube, SoundCloud): https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/loading-third-party-javascript/?utm_source=lighthouse&utm_medium=unknown
        - Try setting scripts to "defer".
        - Try using `rel="dns-prefetch"` or `rel="preconnect"`.
        - Lazy-load each iframe.
- Add to my portfolio.
- Add sticky nav.
- Add Google Analytics tracking.
# Master Prompt — Copy/paste this into Telegram

Fill in the company details at the bottom. Send the whole thing to @Claude834bot. Claude will build the site end-to-end.

---

```
Build a website for the company at the bottom of this message. Follow these steps exactly. Do not ask me any questions — pick the mode, palette, and all design decisions yourself based on the rules in the template.

STEPS:
1. Read /Users/philipsznewajs/Desktop/Coding Projects/Nexus/WEBSITE-PROMPT-TEMPLATE.md in full. This is your spec — every code pattern, rule, and decision must follow it.
2. Create a new folder at /Users/philipsznewajs/Desktop/Coding Projects/Nexus/<business-slug>/ where <business-slug> is a kebab-case version of the org name.
3. Use WebSearch to find the business on Google and pull their top 3-5 most recent Google reviews (5-star preferred). Capture: star rating, full quote, reviewer first name, location/city. If you cannot find real reviews, write `REVIEWS: none` and skip that section.
4. Pick Mode A or Mode B per PART 2 of the template. Declare your choice and reasoning at the start.
5. Pick a unique color palette per PART 3. Declare it before writing code.
6. Build index.html plus all sub-pages per PART 11. Vanilla HTML/CSS/JS only. ES5 inside an IIFE. All CSS inline. Follow every rule in PART 10.
7. Create PROJECT.md documenting: chosen mode, palette, business type reasoning, and any design choices.
8. Once files are written, run `python3 -m http.server 8765 --directory <project-folder>` in the background so I can preview at http://localhost:8765
9. Reply to me with: the project folder path, the localhost URL, mode chosen, palette used, and a 1-line summary of the build.

Do not stop until all files are written and the local server is running.

═══ COMPANY DETAILS ═══

ORGANIZATION NAME: 
TYPE: 
TAGLINE: 
FOUNDED: 
CITY / NEIGHBORHOOD: 
ADDRESS: 
PHONE: 
EMAIL: 
EXISTING WEBSITE: 
TAX STATUS: 

INSTAGRAM: 
FACEBOOK: 
OTHER SOCIAL: 

DONATE / PAYMENT LINK: 

HOURS:
  Monday: 
  Tuesday: 
  Wednesday: 
  Thursday: 
  Friday: 
  Saturday: 
  Sunday: 

PRICING NOTE: 

SERVICES / PROGRAMS (4-8 items):
- 
- 
- 
- 
- 

KEY STATS (numbers that build trust — 4 of them):
- 
- 
- 
- 

UPCOMING EVENTS (up to 3, optional):
1. 
2. 
3. 

REVIEWS: pull from Google automatically — see step 3

MERCH / PRODUCTS (optional):
- 

NOTES (anything else — owner's name, history, signature quote, special programs):
```

---

## How to use

1. Open Telegram → @Claude834bot
2. Copy the entire code block above (everything between the triple backticks)
3. Paste, fill in the COMPANY DETAILS section, send
4. Wait — Claude will keep you posted with status messages as it works
5. When it replies with the localhost URL, open it in your browser
6. To grab the files later: text `/zip /Users/philipsznewajs/Desktop/Coding Projects/Nexus/<business-slug>` to download the project as a zip

## Tips

- Leave REVIEWS blank — Claude pulls them from Google automatically
- The more detail you give in NOTES, the more specific the copy will be
- For services like emergency plumbers, KEY STATS like "60 min response" / "500+ jobs" / "5.0★ rating" work great
- If you don't have a TAGLINE, leave blank — Claude will write one

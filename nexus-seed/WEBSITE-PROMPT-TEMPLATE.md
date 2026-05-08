# NEXUS MASTER WEBSITE PROMPT
### Drop in the client info. Get a finished website.

This prompt produces websites in one of THREE modes:
- **Mode A** — Light cream bg, Three.js 3D *object* (a bicycle, coffee cup, etc.) traveling across scroll. Community/nonprofit vibe. _(reference: Bicycle Kitchen LA)_
- **Mode B** — Dark bg, Pexels *video* scrubbed by scroll, custom bracket cursor. Local-service vibe. _(reference: Normandie Plumbing)_
- **Mode C** — Dark bg, Three.js immersive *scene* (space rocket / ocean waves / forest), CatmullRom camera fly-through, intro loading screen, optional Stripe checkout + Calendly booking. Premium / tech / agency vibe. _(reference: Nexus AI Agency)_

Claude picks the mode automatically. All three share the same fonts, structure, and code conventions.

---

## HOW TO USE THIS

1. Fill in **PART 1** with the client's info (copy from their Google Business page or what they sent you)
2. Leave everything else exactly as written
3. Paste the entire file into a new Claude Code session
4. Say: **"Build me a website using this prompt. Do not ask me questions — pick the mode and make all design decisions yourself based on the rules inside."**

---

---

# ═══ PART 1: CLIENT INFO (FILL THIS IN) ═══

```
ORGANIZATION NAME: [e.g. Bicycle Kitchen LA]
TYPE: [nonprofit / emergency plumber / cafe / law firm / AI agency / SaaS / etc.]
TAGLINE: [their words or a short description]
FOUNDED: [year]
NEIGHBORHOOD / CITY: [e.g. East Hollywood, Los Angeles]
ADDRESS: [full street address — or "remote" for tech/agency]
PHONE: [e.g. (213) 337-7719]
EMAIL: [contact email or "none"]
WEBSITE (old, if any): [URL or "none"]
TAX STATUS: [501(c)(3) / for-profit / etc.]

INSTAGRAM / FACEBOOK / TWITTER / OTHER: [URL or "none"]

DONATE / PAYMENT LINK: [PayPal/Venmo/Square URL — or "none"]
CALENDLY / BOOKING LINK: [URL or "none"]                 ← Mode C primary CTA
STRIPE INTEGRATION NEEDED: [yes / no]                    ← Mode C only
TARGET MARKET: [e.g. "PE firms and operators" / "LA homeowners" / "the community"]

HOURS:
  Monday: [Closed / 9am–5pm / 24/7]
  Tuesday: [TIME]
  ... etc.

PRICING / DONATION NOTE: [e.g. "$5–$10 suggested" / "Free estimates" / "none"]

PROGRAMS / SERVICES / OFFERINGS (4–8 items):
  - [SERVICE 1]
  - [SERVICE 2]
  - [SERVICE 3]
  - [SERVICE 4]
  - [SERVICE 5]
  - [SERVICE 6]

KEY IMPACT / TRUST STATS (4 numbers):
  - [STAT 1 with unit, e.g. "20+ years"]
  - [STAT 2, e.g. "500+ jobs"]
  - [STAT 3, e.g. "60 min response"]
  - [STAT 4, e.g. "100% satisfaction"]

UPCOMING EVENTS (up to 3 — leave blank if N/A):
  1. [DATE] — [EVENT] — [1 sentence] — [time, cost]
  2. [DATE] — [EVENT] — [1 sentence] — [time, cost]
  3. [DATE] — [EVENT] — [1 sentence] — [time, cost]

MERCH / PRODUCTS (if any):
  - [ITEM, PRICE, how to buy — or "none"]

REVIEWS_INPUT: (Paste raw Google Maps reviews here — see Part 9 for format. Leave blank if none.)

ANY OTHER NOTES:
  [Owner name, history, quotes, special context]
```

---

---

# ═══ PART 2: PICK THE MODE ═══

Read the client info. Pick **A**, **B**, or **C** from the table — DO NOT default. Decide on business type AND feel.

| If the client is... | Mode |
|---------------------|------|
| Nonprofit / community org / co-op / volunteer-run | **A** |
| Cafe / bakery / community kitchen / kids program / youth ed | **A** |
| Yoga / wellness / plant shop / craft / handmade | **A** |
| Emergency service (plumber / electrician / locksmith / HVAC / tow) | **B** |
| Law firm / accountant / professional services (small/local) | **B** |
| Construction / contractor / trade / cleaning / landscaping | **B** |
| Auto repair / motorcycle / performance shop | **B** |
| Restaurant / cocktail bar / nightclub (mid-tier) | **B** |
| AI / SaaS / dev shop / agency (B2B) | **C** |
| Tech startup / fintech / data / analytics | **C** |
| Premium consulting (PE, finance, M&A) | **C** |
| Web3 / crypto / hardware tech | **C** |
| Music studio / production house / luxury creative | **C** |

If unsure: warm/community → A. Urgent/local-service → B. Premium/tech/B2B → C.

**Declare your choice at the top of your output before any code:**
```
MODE: [A / B / C]
WHY: [one sentence]
```

---

---

# ═══ PART 3: COLOR PALETTE — UNIQUE PER CLIENT ═══

Never reuse the same palette twice. Pick a saturated, specific accent.

## Mode A palettes (light bg + warm accent)
| Vibe | Accent | BG |
|------|--------|----|
| Community / outdoor / nonprofit | `#E8601B` orange | `#F7F5F1` cream |
| Cafe / bakery / warm food | `#C44E2C` terracotta | `#F8F4ED` |
| Yoga / wellness / plant | `#7A9968` sage / `#C97B82` rose | `#F5F7F3` |
| Education / kids | `#3D8FBE` sky / `#E87662` coral | `#F7F5F0` |
| Vintage / craft | `#D4A12A` mustard / `#A03D2C` brick | `#F6F1E8` |

Text: `#111111` always.

## Mode B palettes (dark bg + bright accent + cyan hero highlight)
| Vibe | Accent | BG | Hero `em` |
|------|--------|----|-----------|
| Plumbing / water / emergency | `#1BA3CC` water blue | `#041520` | `#5CE0EE` |
| Electrician / power | `#F0B500` electric yellow | `#0E1014` | `#FFE17A` |
| Law / finance | `#2D7350` forest / `#9B2D2D` oxblood | `#0A0F12` | light same hue |
| Construction / industrial | `#FF6A00` hi-vis orange | `#0F1820` | `#FFB078` |
| Premium dining | `#C9A24F` burnt gold / `#7A1A28` wine | `#1A1209` | `#F2D593` |
| Auto / performance | `#D62828` crimson | `#0E0E10` | `#F25C5C` |

## Mode C palettes (deep dark + sharp tech accent)
| Vibe | Accent | BG | Border-hi |
|------|--------|----|-----------|
| AI / automation / B2B | `#2B5EA7` deep blue | `#050810` | `rgba(255,255,255,.13)` |
| Fintech / data | `#3DA9FC` electric blue | `#0A0A0E` | same |
| Web3 / hardware | `#8B5CF6` electric purple | `#0A0810` | same |
| Premium consulting (PE/M&A) | `#C9A24F` muted gold | `#0E0E12` | same |
| Healthcare tech | `#1A6B5A` deep teal | `#02101A` | same |
| Music / luxury creative | `#D62828` crimson / `#7A5C1E` warm gold | `#0A0608` | same |

Text on dark: `#E8EEF8` / `#FFFFFF` with rgba opacities `.78` / `.55` / `.32` for hierarchy.

**Always declare palette before code:**
```
PALETTE:
  Accent:     #XXXXXX  (RGB: r, g, b)
  Background: #XXXXXX  (RGB: r, g, b)
  Text:       #XXXXXX
  Hero em:    #XXXXXX  (Modes B/C)
```

---

---

# ═══ PART 4: TECH STACK — LOCKED ═══

| Layer | All Modes |
|-------|-----------|
| Framework | **Vanilla HTML/CSS/JS** — no React, Vue, Tailwind |
| Build | **None** — no webpack, vite |
| Fonts | **Google Fonts** — Syne (headings), Inter (body) |
| Animation | **GSAP 3.12.4 + ScrollTrigger** (CDN, index.html) |
| Hosting | **Netlify** static + functions |

**Mode-specific:**
| | Mode A | Mode B | Mode C |
|---|--------|--------|--------|
| 3D | Three.js (single object) | NONE | Three.js (full scene) |
| BG | Solid color | Pexels video + Unsplash photo | Three.js scene + vignette |
| Cursor | Browser default | Custom brackets | Custom brackets |
| Buttons | Pill (40px radius) | Rect (8px radius) | Rect (8px radius) |
| Logo mark | Circle | Rounded square (7px) | Rounded square (7px) |
| Newsletter | Yes (Gmail compose) | NO | NO |
| Search widget | Yes | NO | NO |
| Intro loading screen | NO | NO | YES (~2.5s) |
| Reviews chapter | NO (use about) | YES (3 cards) | YES (3 cards) |
| Animated stats | NO | YES | YES |
| Primary CTA | Visit / pill button | Phone `tel:` | Calendly link |
| Stripe checkout | NO | NO | OPTIONAL |
| Chapters | 6 | 5 | 5 |
| Scroll length | 7000px | 5200px | 5200px |

**Exact CDN URLs:**
```
https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js   (A and C)
https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/gsap.min.js
https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/ScrollTrigger.min.js
```

Inner pages have ZERO JS libraries (Mode A/B). Mode C inner pages DO load Three.js (subpages have their own ocean scene).

---

---

# ═══ PART 5: SHARED CODE (ALL MODES) ═══

## 5A. HTML shell (every page)
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>[PAGE] — [ORG]</title>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet"/>
<style>/* INLINE CSS */</style>
</head>
<body>
<!-- BACKGROUND LAYERS -->
<!-- NAV + MOBILE MENU -->
<!-- PAGE CONTENT -->
<!-- NEWSLETTER (Mode A only) -->
<!-- FOOTER -->
<!-- CUSTOM CURSOR (Modes B/C) -->
<script>(function(){'use strict'; /* ES5 IIFE */})();</script>
</body>
</html>
```

## 5B. CSS reset
```css
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
html,body{height:100%;}
body{background:[BG];color:[TEXT];font-family:'Inter',sans-serif;overflow-x:hidden;[CURSOR_NONE_IF_BC]}
::-webkit-scrollbar{width:0;}
```

## 5C. CSS custom properties (Modes B/C — recommended)
```css
:root{
  --bg:[BG];
  --text:[TEXT];
  --muted:[MUTED];        /* rgba(text, .55) */
  --muted2:[MUTED2];      /* rgba(text, .32) */
  --border:rgba(255,255,255,.07);
  --border-hi:rgba(255,255,255,.13);
  --accent:[ACCENT];
  --head:'Syne',sans-serif;
  --body:'Inter',sans-serif;
}
```

## 5D. Nav (all modes — adjust colors and logo shape)
```css
#nav{position:fixed;inset:0 0 auto;z-index:200;padding:1.75rem 0;transition:padding .3s,background .3s;}
#nav.scrolled{padding:1.1rem 0;background:rgba([BG_RGB],.88);backdrop-filter:blur(20px);border-bottom:1px solid var(--border);}
.nav-inner{max-width:1180px;margin:0 auto;padding:0 2.5rem;display:flex;align-items:center;gap:2rem;}
.logo{font-family:var(--head);font-size:1.2rem;font-weight:800;color:var(--text);text-decoration:none;letter-spacing:-.02em;display:flex;align-items:center;gap:.55rem;}
.logo-mark{width:28px;height:28px;[LOGO_SHAPE];background:var(--accent);display:flex;align-items:center;justify-content:center;font-size:.75rem;font-weight:900;color:#fff;}
/* Mode A: border-radius:50%   Mode B/C: border-radius:7px */
.nav-links{display:flex;gap:2.5rem;margin-left:auto;}
.nav-links a{color:rgba([TEXT_RGB],.5);text-decoration:none;font-size:.875rem;font-weight:500;transition:color .18s;}
.nav-links a:hover,.nav-links a.active{color:var(--text);}
.btn-nav{display:inline-flex;align-items:center;padding:.6rem 1.25rem;border-radius:8px;font-size:.85rem;font-weight:600;text-decoration:none;[CURSOR_NONE_BC];border:1px solid var(--border-hi);color:var(--text);background:transparent;transition:all .18s;}
.btn-nav:hover{background:var(--accent);border-color:var(--accent);}
.hamburger{display:none;flex-direction:column;gap:5px;background:none;border:none;[CURSOR_NONE_BC];padding:4px;}
.hamburger span{display:block;width:22px;height:1.5px;background:var(--text);transition:all .22s;}
.hamburger.open span:nth-child(1){transform:translateY(6.5px) rotate(45deg);}
.hamburger.open span:nth-child(2){opacity:0;}
.hamburger.open span:nth-child(3){transform:translateY(-6.5px) rotate(-45deg);}
.mobile-menu{display:none;position:fixed;inset:0;z-index:190;background:rgba([BG_RGB],.97);backdrop-filter:blur(24px);flex-direction:column;align-items:center;justify-content:center;gap:2.5rem;}
.mobile-menu.open{display:flex;}
.mobile-menu a{font-family:var(--head);font-size:1.8rem;font-weight:700;color:rgba([TEXT_RGB],.55);text-decoration:none;}
.mobile-menu a:hover{color:var(--text);}
@media(max-width:900px){.nav-links,.btn-nav{display:none;}.hamburger{display:flex;margin-left:auto;}}
```

```javascript
window.addEventListener('scroll',function(){document.getElementById('nav').classList.toggle('scrolled',scrollY>60);},{passive:true});
var btn=document.getElementById('hamburger'),menu=document.getElementById('mobile-menu');
btn.addEventListener('click',function(){var o=menu.classList.toggle('open');btn.classList.toggle('open',o);document.body.style.overflow=o?'hidden':'';});
menu.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){menu.classList.remove('open');btn.classList.remove('open');document.body.style.overflow='';});});
```

## 5E. Eye label (small uppercase section label)
```css
.eye{display:inline-flex;align-items:center;gap:.65rem;font-size:.68rem;font-weight:700;letter-spacing:.18em;color:rgba([ACCENT_RGB],.7);text-transform:uppercase;margin-bottom:1.75rem;}
.eye::before{content:'';width:22px;height:1px;background:rgba([ACCENT_RGB],.45);}
```

## 5F. Footer
```html
<footer>
  <div class="footer-row">
    <div>
      <a href="index.html" class="footer-logo"><div class="footer-logo-mark">[L]</div>[ORG]</a>
      <p class="footer-tagline">[1–2 line tagline]</p>
    </div>
    <div class="footer-links">
      <a href="[page]">[LABEL]</a>
      <a href="[page]">[LABEL]</a>
      <a href="[page]">[LABEL]</a>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© [YEAR] [ORG]. All rights reserved.</p>
    <a href="tel:[PHONE]">[PHONE]</a>
  </div>
</footer>
```

```css
footer{position:relative;z-index:2;background:[FOOTER_BG];padding:4rem 0 3rem;border-top:1px solid var(--border);}
/* FOOTER_BG: Mode A → #111111  Mode B → rgba(0,7,18,.94)  Mode C → #020406 */
.footer-row{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:3rem;gap:2rem;max-width:1180px;margin:0 auto;padding:0 2.5rem;}
.footer-logo{font-family:var(--head);font-size:1.15rem;font-weight:800;color:#fff;text-decoration:none;display:flex;align-items:center;gap:.5rem;margin-bottom:.65rem;}
.footer-logo-mark{width:24px;height:24px;[LOGO_SHAPE];background:var(--accent);display:flex;align-items:center;justify-content:center;font-size:.68rem;font-weight:900;color:#fff;}
.footer-tagline{color:rgba(255,255,255,.32);font-size:.82rem;line-height:1.6;}
.footer-links{display:flex;gap:2.5rem;align-items:center;}
.footer-links a{color:rgba(255,255,255,.32);text-decoration:none;font-size:.85rem;transition:color .18s;}
.footer-links a:hover{color:#fff;}
.footer-bottom{border-top:1px solid var(--border);padding-top:1.75rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;max-width:1180px;margin:0 auto;padding:1.75rem 2.5rem 0;}
.footer-bottom p,.footer-bottom a{color:rgba(255,255,255,.22);font-size:.75rem;text-decoration:none;}
@media(max-width:900px){.footer-row{flex-direction:column;}}
```

---

---

# ═══ PART 6: MODE A CODE (Light + 3D Object) ═══

USE WHEN: nonprofit, community, kids, wellness, light/warm vibe.

## 6A. Pill buttons
```css
.pill{display:inline-flex;align-items:center;padding:.68rem 1.55rem;border-radius:40px;font-size:.7rem;font-weight:600;letter-spacing:.07em;text-transform:uppercase;text-decoration:none;transition:all .2s;}
.pill-f{background:var(--accent);color:#fff;}
.pill-f:hover{background:[ACCENT_DARK];transform:translateY(-2px);box-shadow:0 8px 22px rgba([ACCENT_RGB],.3);}
.pill-g{border:1px solid rgba([DARK_RGB],.2);color:rgba([DARK_RGB],.7);}
.pill-g:hover{border-color:[DARK];color:[DARK];transform:translateY(-2px);}
```

## 6B. Pick a 3D object specific to the client
| Business | Object |
|----------|--------|
| Bike co-op | Bicycle |
| Cafe | Coffee cup with steam |
| Bakery | Loaf / croissant |
| Yoga | Lotus / crystal |
| Plant shop | Potted plant |
| Kids program | Pencil |
| Garden | Watering can |
| Bookshop | Stack of books |

Build with `CylinderGeometry`, `BoxGeometry`, `SphereGeometry`, `TorusGeometry`, `ConeGeometry` only. ~6–10 draw calls via `mergedCyls`. NO external 3D files.

## 6C. mergedCyls helper
```javascript
function V(x,y,z){return new THREE.Vector3(x,y,z);}
function mergedCyls(pairs,mat){
  var pos=[],nor=[],idx=[],vOff=0;
  pairs.forEach(function(t){
    var A=t[0],B=t[1],r=t[2];
    var dir=new THREE.Vector3().subVectors(B,A);
    var len=dir.length();
    var geo=new THREE.CylinderGeometry(r,r,len,5,1);
    var mid=new THREE.Vector3().lerpVectors(A,B,0.5);
    var q=new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,1,0),dir.normalize());
    var m4=new THREE.Matrix4().compose(mid,q,new THREE.Vector3(1,1,1));
    var nm=new THREE.Matrix3().getNormalMatrix(m4);
    var pa=geo.attributes.position.array,na=geo.attributes.normal.array,ia=geo.index.array;
    for(var i=0;i<pa.length;i+=3){var v=new THREE.Vector3(pa[i],pa[i+1],pa[i+2]).applyMatrix4(m4);pos.push(v.x,v.y,v.z);}
    for(var i=0;i<na.length;i+=3){var n=new THREE.Vector3(na[i],na[i+1],na[i+2]).applyMatrix3(nm).normalize();nor.push(n.x,n.y,n.z);}
    for(var i=0;i<ia.length;i++)idx.push(ia[i]+vOff);
    vOff+=pa.length/3;geo.dispose();
  });
  var g=new THREE.BufferGeometry();
  g.setAttribute('position',new THREE.BufferAttribute(new Float32Array(pos),3));
  g.setAttribute('normal',new THREE.BufferAttribute(new Float32Array(nor),3));
  g.setIndex(idx);
  return new THREE.Mesh(g,mat);
}
```

## 6D. Three.js scene setup (Mode A)
```javascript
var canvas=document.getElementById('gl');
var renderer=new THREE.WebGLRenderer({canvas:canvas,antialias:false,alpha:false,powerPreference:'high-performance'});
renderer.setPixelRatio(1);
renderer.setSize(innerWidth,innerHeight);
renderer.setClearColor([BG_HEX_INT],1);
var scene=new THREE.Scene();
scene.fog=new THREE.FogExp2([BG_HEX_INT],0.014);
var camera=new THREE.PerspectiveCamera(52,innerWidth/innerHeight,0.1,300);
camera.position.set(0,4.5,18);camera.lookAt(0,3,0);
window.addEventListener('resize',function(){camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight);});

scene.add(new THREE.AmbientLight(0xffffff,2.8));
var keyLight=new THREE.DirectionalLight(0xffffff,1.6);keyLight.position.set(5,12,8);scene.add(keyLight);
var fillLight=new THREE.DirectionalLight(0xFFDDCC,0.5);fillLight.position.set(-6,4,6);scene.add(fillLight);

var gnd=new THREE.Mesh(new THREE.PlaneGeometry(200,60),new THREE.MeshLambertMaterial({color:[GROUND_HEX]}));
gnd.rotation.x=-Math.PI/2;scene.add(gnd);
var glow=new THREE.Mesh(new THREE.PlaneGeometry(80,0.4),new THREE.MeshBasicMaterial({color:[ACCENT_HEX],transparent:true,opacity:.22}));
glow.rotation.x=-Math.PI/2;glow.position.set(0,0.01,0);scene.add(glow);
```

## 6E. Mode A scroll system + chapters (6 chapters, 7000px)
```javascript
gsap.registerPlugin(ScrollTrigger);
var SP={p:0};
gsap.to(SP,{p:1,ease:'none',scrollTrigger:{trigger:'#canvas-wrap',start:'top top',end:'+=7000',pin:true,scrub:0.5,onUpdate:function(self){SP.p=self.progress;}}});

var chapters=[
  {el:document.getElementById('ch0'),r:[0.00,0.00,0.22,0.28]},
  {el:document.getElementById('ch1'),r:[0.26,0.31,0.40,0.46]},
  {el:document.getElementById('ch2'),r:[0.43,0.48,0.57,0.63]},
  {el:document.getElementById('ch3'),r:[0.60,0.65,0.73,0.79]},
  {el:document.getElementById('ch4'),r:[0.76,0.81,0.88,0.93]},
  {el:document.getElementById('ch5'),r:[0.90,0.94,1.00,1.00]}
];

function clamp01(v){return Math.max(0,Math.min(1,v));}
function lerp(a,b,t){return a+(b-a)*t;}
function eio(t){return t<.5?2*t*t:-1+(4-2*t)*t;}
function rangeFade(p,r){
  if(p<r[0])return 0;
  if(p<r[1])return clamp01((p-r[0])/(r[1]-r[0]));
  if(p<r[2])return 1;
  if(p<r[3])return clamp01(1-(p-r[2])/(r[3]-r[2]));
  return 0;
}

var ENTRY=0.05,EXIT_S=0.87;
var BX_START=32,BX_TRAV_IN=8,BX_TRAV_OUT=-19,BX_END=-25;
var lastP=-1;
function tick(){
  requestAnimationFrame(tick);
  var p=SP.p;
  if(Math.abs(p-lastP)<0.00004)return;
  lastP=p;
  var objX;
  if(p<=ENTRY)objX=lerp(BX_START,BX_TRAV_IN,eio(clamp01(p/ENTRY)));
  else if(p<=EXIT_S)objX=lerp(BX_TRAV_IN,BX_TRAV_OUT,(p-ENTRY)/(EXIT_S-ENTRY));
  else objX=lerp(BX_TRAV_OUT,BX_END,eio(clamp01((p-EXIT_S)/(1-EXIT_S))));
  objectGroup.position.x=objX;
  objectGroup.rotation.z=-objX/[OBJECT_RADIUS];

  var active=0;
  chapters.forEach(function(ch,i){
    var op=rangeFade(p,ch.r);
    ch.el.style.opacity=op;
    ch.el.style.pointerEvents=op>.05?'all':'none';
    if(op>.4)active=i;
  });
  document.getElementById('sbfill').style.height=(p*100)+'%';
  document.getElementById('sbnum').textContent=['01','02','03','04','05','06'][active];
  renderer.render(scene,camera);
}
tick();
```

## 6F. Mode A chapters (6 in order)
1. **Hero** — Big name + accent word, eyebrow, sub, 2 buttons (Visit + Donate)
2. **Mission quote** — Italic quote with accent punchline + supporting paragraph
3. **Programs grid** — 6 cards (3×2), each with number/title/desc/tag
4. **Hours** — 7 days with times, address, phone, email, Get Directions button
5. **Stats** — 4 numbers in 2×2 grid
6. **Final CTA** — Big heading + 2 buttons

## 6G. Mode A below-fold sections
About cards (3-up) → Support/Donate (2-col) → Events (3-up) → Merch (optional) → Final CTA box → **Newsletter (Gmail compose)** → Footer.

---

---

# ═══ PART 7: MODE B CODE (Dark + Pexels Video) ═══

USE WHEN: emergency service, professional local service, premium retail.

## 7A. Background layers
```html
<div id="beach-photo"></div>
<video id="ocean-video" muted playsinline preload="auto">
  <source src="[PEXELS_HD]" type="video/mp4"/>
  <source src="[PEXELS_UHD]" type="video/mp4"/>
</video>
<div id="beach-overlay"></div>
<div id="sun-glow"></div>
<div class="vignette"></div>
```

```css
#beach-photo{position:fixed;inset:0;z-index:-1;background-image:url('[UNSPLASH_URL]');background-size:cover;background-position:center 55%;}
#ocean-video{position:fixed;inset:0;z-index:0;width:100%;height:100%;object-fit:cover;opacity:0;transition:opacity 1.4s ease;will-change:transform;}
#ocean-video.ready{opacity:1;}
#beach-overlay{position:fixed;inset:0;z-index:1;pointer-events:none;background:linear-gradient(to bottom,rgba(2,12,26,.18) 0%,rgba(2,12,26,.05) 38%,rgba(0,10,22,.26) 65%,rgba(0,5,16,.68) 100%);}
#sun-glow{position:fixed;z-index:2;pointer-events:none;width:800px;height:800px;border-radius:50%;top:-20%;right:4%;background:radial-gradient(circle,rgba(255,228,80,.28) 0%,rgba(255,175,45,.14) 32%,rgba(255,110,25,.06) 58%,transparent 72%);filter:blur(32px);will-change:transform;transition:transform .35s ease-out;}
.vignette{position:fixed;inset:0;z-index:2;pointer-events:none;background:radial-gradient(ellipse at 50% 55%,transparent 36%,rgba(0,5,16,.38) 100%);}
```

## 7B. Pexels videos
```
URL pattern:
https://videos.pexels.com/video-files/{ID}/{ID}-hd_1920_1080_{fps}fps.mp4
https://videos.pexels.com/video-files/{ID}/{ID}-uhd_2560_1440_{fps}fps.mp4

Proven IDs:
1093652 (30fps) — cinematic ocean pan — water/plumbing
3115506 (25fps) — crashing waves — water/plumbing alt
For other industries: pexels.com/search/videos/[topic]/
```

Always landscape video. Always Unsplash photo fallback at z-index -1.

## 7C. Custom bracket cursor
```html
<div class="c-dot" id="cdot"></div>
<div class="c-frame" id="cframe">
  <div class="c-frame-tl"></div><div class="c-frame-tr"></div>
  <div class="c-frame-bl"></div><div class="c-frame-br"></div>
</div>
```
```css
body{cursor:none;}
a,button,.hamburger{cursor:none;}
.c-dot{position:fixed;left:0;top:0;width:4px;height:4px;background:var(--accent);border-radius:50%;pointer-events:none;z-index:10000;will-change:transform;}
.c-frame{position:fixed;left:0;top:0;width:26px;height:26px;pointer-events:none;z-index:9999;will-change:transform;transition:width .18s,height .18s;}
.c-frame-tl,.c-frame-tr,.c-frame-bl,.c-frame-br{position:absolute;width:8px;height:8px;border-color:rgba(255,255,255,.5);border-style:solid;transition:width .18s,height .18s,border-color .18s,transform .18s;}
.c-frame-tl{top:0;left:0;border-width:1.5px 0 0 1.5px;}
.c-frame-tr{top:0;right:0;border-width:1.5px 1.5px 0 0;}
.c-frame-bl{bottom:0;left:0;border-width:0 0 1.5px 1.5px;}
.c-frame-br{bottom:0;right:0;border-width:0 1.5px 1.5px 0;}
.c-frame.hover{width:44px;height:44px;}
.c-frame.hover .c-frame-tl,.c-frame.hover .c-frame-tr,.c-frame.hover .c-frame-bl,.c-frame.hover .c-frame-br{width:13px;height:13px;border-color:#fff;}
.c-frame.hover .c-frame-tl{transform:translate(-2px,-2px);}
.c-frame.hover .c-frame-tr{transform:translate(2px,-2px);}
.c-frame.hover .c-frame-bl{transform:translate(-2px,2px);}
.c-frame.hover .c-frame-br{transform:translate(2px,2px);}
```
```javascript
var dot=document.getElementById('cdot'),frame=document.getElementById('cframe');
document.addEventListener('mousemove',function(e){var t='translate(calc('+e.clientX+'px - 50%),calc('+e.clientY+'px - 50%))';dot.style.transform=t;frame.style.transform=t;},{passive:true});
document.querySelectorAll('a,button').forEach(function(el){el.addEventListener('mouseenter',function(){frame.classList.add('hover');});el.addEventListener('mouseleave',function(){frame.classList.remove('hover');});});
document.addEventListener('mouseleave',function(){dot.style.opacity='0';frame.style.opacity='0';});
document.addEventListener('mouseenter',function(){dot.style.opacity='1';frame.style.opacity='1';});
```

## 7D. Sun glow parallax
```javascript
var sunGlow=document.getElementById('sun-glow');
document.addEventListener('mousemove',function(e){
  var mx=(e.clientX/window.innerWidth-0.5)*30;
  var my=(e.clientY/window.innerHeight-0.5)*20;
  sunGlow.style.transform='translate('+mx+'px,'+my+'px)';
},{passive:true});
```

## 7E. Rect buttons
```css
.btn{display:inline-flex;align-items:center;gap:.5rem;padding:.9rem 1.75rem;border-radius:8px;font-family:'Inter',sans-serif;font-size:.9rem;font-weight:600;text-decoration:none;transition:all .2s;cursor:none;border:none;white-space:nowrap;}
.btn-primary{background:var(--accent);color:#fff;}
.btn-primary:hover{background:[ACCENT_DARK];transform:translateY(-1px);box-shadow:0 8px 28px rgba([ACCENT_RGB],.4);}
.btn-ghost{background:rgba(255,255,255,.12);color:#fff;border:1px solid rgba(255,255,255,.28);backdrop-filter:blur(8px);}
.btn-ghost:hover{background:rgba(255,255,255,.22);border-color:rgba(255,255,255,.42);}
.btn-lg{padding:1rem 2rem;font-size:.95rem;}
```

## 7F. Frosted glass cards (Mode B)
```css
.glass{background:rgba(255,255,255,.88);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);border:1px solid rgba(255,255,255,.48);border-radius:14px;padding:2.25rem;}
.glass h3,.glass .title{font-family:'Syne',sans-serif;color:#071825;}
.glass p,.glass .desc{color:#3A6070;}
```

## 7G. Video scrub system (CRITICAL — never skip)
```javascript
gsap.registerPlugin(ScrollTrigger);
var vid=document.getElementById('ocean-video');
var beachPhoto=document.getElementById('beach-photo');
var SCRUB_DURATION=12;
vid.addEventListener('loadeddata',function(){vid.classList.add('ready');},{once:true});

var PATH=[{tx:0,ty:0},{tx:-7,ty:-4},{tx:7,ty:-7},{tx:-5,ty:-4},{tx:0,ty:-9}];

function applyCamera(p){
  var segs=PATH.length-1;
  var si=Math.min(Math.floor(p*segs),segs-1);
  var t=(p*segs)-si;
  t=t*t*(3-2*t);
  var A=PATH[si],B=PATH[si+1];
  var tx=A.tx+(B.tx-A.tx)*t;
  var ty=A.ty+(B.ty-A.ty)*t;
  vid.style.transform='scale(1.15) translateX('+tx.toFixed(2)+'%) translateY('+ty.toFixed(2)+'%)';
  beachPhoto.style.backgroundPosition=(50+tx*0.5).toFixed(1)+'% '+(55+ty*0.4).toFixed(1)+'%';
}

var targetP=0,lerpP=0;

ScrollTrigger.create({
  trigger:'#journey',start:'top top',end:'+=5200',pin:true,
  onUpdate:function(self){targetP=self.progress;}
});

function sStep(e0,e1,x){if(e1<=e0)return x>e0?1:0;var v=Math.max(0,Math.min(1,(x-e0)/(e1-e0)));return v*v*(3-2*v);}

var chapters=[
  {el:document.getElementById('ch-hero'),    range:[0,    0.02,0.15,0.22]},
  {el:document.getElementById('ch-stats'),   range:[0.18, 0.25,0.36,0.42]},
  {el:document.getElementById('ch-services'),range:[0.38, 0.45,0.60,0.66]},
  {el:document.getElementById('ch-reviews'), range:[0.62, 0.68,0.78,0.84]},
  {el:document.getElementById('ch-cta'),     range:[0.80, 0.87,1.00,1.00]}
];
var dots=document.querySelectorAll('.sp-dot');
chapters[0].el.style.opacity='1';chapters[0].el.classList.add('visible');

function tick(){
  requestAnimationFrame(tick);
  lerpP+=(targetP-lerpP)*0.08;
  applyCamera(lerpP);
  if(vid.readyState>=2){
    var st=lerpP*SCRUB_DURATION;
    if(vid.fastSeek)vid.fastSeek(st);
    else vid.currentTime=st;
  }
  var p=lerpP,activeIdx=0;
  chapters.forEach(function(ch,idx){
    var r=ch.range,op;
    if(idx===0){if(p<=r[2])op=1;else if(p<r[3])op=1-sStep(r[2],r[3],p);else op=0;}
    else{if(p<r[0])op=0;else if(p<r[1])op=sStep(r[0],r[1],p);else if(p<r[2])op=1;else if(p<r[3])op=1-sStep(r[2],r[3],p);else op=0;}
    ch.el.style.opacity=op;
    ch.el.classList.toggle('visible',op>0.05);
    if(op>0.5)activeIdx=idx;
  });
  dots.forEach(function(d,i){d.classList.toggle('active',i===activeIdx);});
  if(p>0.20&&p<0.45)animateStats();
}
tick();
```

## 7H. Mode B chapters (5)
1. **Hero** — Big "[ORG] / [accent].", sub, Call Now button, scroll hint
2. **Stats** — 4 with count-up animation
3. **Services** — 3-col frosted glass grid (6 services)
4. **Reviews** — 3 review cards (stars, quote, avatar initials, name, location)
5. **CTA** — Frosted glass card "Need help right now?" + Call button

---

---

# ═══ PART 8: MODE C CODE (Dark + Three.js Scene + Premium B2B) ═══

USE WHEN: AI agency, SaaS, fintech, B2B premium, tech startup, M&A consultant.

## 8A. Background — single fixed canvas with Three.js
```html
<canvas id="gl-canvas"></canvas>
<div class="vignette"></div>
```
```css
#gl-canvas{position:fixed;inset:0;width:100%;height:100%;z-index:0;pointer-events:none;}
.vignette{position:fixed;inset:0;z-index:1;pointer-events:none;background:radial-gradient(ellipse at 50% 40%,transparent 30%,rgba(5,8,16,.6) 100%);}
```

## 8B. Custom cursor — same as Mode B (Part 7C)

## 8C. Buttons — same as Mode B (Part 7E)

## 8D. Glass cards (Mode C — DARK glass, not white)
```css
.card{background:rgba(8,12,24,.82);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid var(--border);border-radius:14px;padding:2.75rem;transition:background .2s;}
.card:hover{background:rgba([ACCENT_RGB],.14);}
```

## 8E. Intro loading screen (Mode C ONLY — ~2.5s)
```html
<div id="intro">
  <div class="intro-scanlines"></div>
  <div class="intro-corner tl"></div><div class="intro-corner tr"></div>
  <div class="intro-corner bl"></div><div class="intro-corner br"></div>
  <div class="intro-content">
    <div class="intro-mark">[L]</div>
    <div class="intro-wordmark">[ORG_UPPER]</div>
    <div class="intro-tag">[TAGLINE]</div>
    <div class="intro-bar-wrap"><div class="intro-bar" id="ibar"></div></div>
    <div class="intro-status" id="istatus">INITIALIZING</div>
  </div>
</div>
```
```css
#intro{position:fixed;inset:0;z-index:3000;background:#010208;display:flex;align-items:center;justify-content:center;overflow:hidden;}
.intro-scanlines{position:absolute;inset:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,40,80,.05) 2px,rgba(0,40,80,.05) 4px);animation:iscan 8s linear infinite;}
@keyframes iscan{0%{background-position:0 0;}100%{background-position:0 100px;}}
.intro-corner{position:absolute;width:40px;height:40px;border-color:rgba([ACCENT_LIGHT_RGB],.3);border-style:solid;}
.intro-corner.tl{top:2.5rem;left:2.5rem;border-width:1.5px 0 0 1.5px;}
.intro-corner.tr{top:2.5rem;right:2.5rem;border-width:1.5px 1.5px 0 0;}
.intro-corner.bl{bottom:2.5rem;left:2.5rem;border-width:0 0 1.5px 1.5px;}
.intro-corner.br{bottom:2.5rem;right:2.5rem;border-width:0 1.5px 1.5px 0;}
.intro-content{text-align:center;display:flex;flex-direction:column;align-items:center;gap:1.1rem;}
.intro-mark{width:56px;height:56px;border-radius:14px;background:var(--accent);display:flex;align-items:center;justify-content:center;font-family:var(--head);font-size:1.6rem;font-weight:900;color:#fff;box-shadow:0 0 30px rgba([ACCENT_RGB],.5);}
.intro-wordmark{font-family:var(--head);font-size:2.8rem;font-weight:800;letter-spacing:-.02em;color:var(--text);}
.intro-tag{font-size:.6rem;letter-spacing:.25em;text-transform:uppercase;color:rgba([ACCENT_LIGHT_RGB],.45);}
.intro-bar-wrap{width:200px;height:1px;background:rgba([ACCENT_LIGHT_RGB],.1);margin-top:.4rem;overflow:hidden;}
.intro-bar{height:100%;width:0;background:linear-gradient(90deg,[ACCENT_DARK],[ACCENT_LIGHT]);transition:width 1.7s cubic-bezier(.4,0,.15,1);}
.intro-status{font-size:.58rem;letter-spacing:.22em;text-transform:uppercase;color:rgba([ACCENT_LIGHT_RGB],.3);}
```
```javascript
var ibar=document.getElementById('ibar'),istatus=document.getElementById('istatus'),intro=document.getElementById('intro');
setTimeout(function(){ibar.style.width='100%';},120);
var msgs=['INITIALIZING','LOADING 3D ENGINE','READY'],mi=0;
var si=setInterval(function(){mi++;if(mi<msgs.length)istatus.textContent=msgs[mi];else clearInterval(si);},700);
setTimeout(function(){intro.style.transition='opacity .6s ease';intro.style.opacity='0';setTimeout(function(){intro.remove();},620);},2500);
```

## 8F. Three.js scene — pick one based on client
| Vibe | Scene | Contains |
|------|-------|----------|
| AI / automation / B2B / tech | **SPACE** | Falcon 9 rocket, gas giant, asteroids, nebula |
| Healthcare / data / consulting | **OCEAN** | Animated waves, moon, holographic rings |
| Web3 / crypto / cyber | **SPACE** | Dark space + faster asteroids |
| Premium / consulting | **SPACE** with subdued colors |  |

Use SPACE on `index.html`, OCEAN on sub-pages (proven combo from Nexus build).

## 8G. SPACE scene
```javascript
renderer.setClearColor(0x000514,1);
scene.fog=new THREE.FogExp2(0x000514,0.0012);

function makeStars(count,r,size,opacity,col){
  var pos=new Float32Array(count*3);
  for(var i=0;i<count;i++){var th=Math.random()*Math.PI*2,ph=Math.acos(2*Math.random()-1),rd=r*Math.cbrt(Math.random());
    pos[i*3]=rd*Math.sin(ph)*Math.cos(th);pos[i*3+1]=rd*Math.sin(ph)*Math.sin(th);pos[i*3+2]=rd*Math.cos(ph);}
  var g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.BufferAttribute(pos,3));
  return new THREE.Points(g,new THREE.PointsMaterial({color:col,size:size,transparent:true,opacity:opacity,sizeAttenuation:true}));
}
scene.add(makeStars(6000,550,0.4,0.65,0xBBCCFF));
scene.add(makeStars(300,350,1.2,0.9,0xFFFFFF));

/* Gas giant */
var planet=new THREE.Mesh(new THREE.SphereGeometry(45,32,32),new THREE.MeshStandardMaterial({color:[ACCENT_HEX],emissive:[ACCENT_DARK_HEX],emissiveIntensity:0.5,roughness:0.65,metalness:0.18}));
planet.position.set(220,55,-480);scene.add(planet);
var pRing=new THREE.Mesh(new THREE.TorusGeometry(70,5,4,64),new THREE.MeshStandardMaterial({color:[ACCENT_LIGHT_HEX],emissive:[ACCENT_DARK_HEX],emissiveIntensity:0.28,roughness:0.6,metalness:0.3,transparent:true,opacity:0.6}));
pRing.rotation.x=1.2;planet.add(pRing);

/* Falcon 9 rocket — ~30 meshes, full detail with engines, fire plume, landing legs.
   Reference original code at /Nexus/Website Code/index.html */
var rocketGroup=new THREE.Group();scene.add(rocketGroup);rocketGroup.position.set(-5,-10,0);
/* ...[paste full rocket from Nexus reference]... */

/* 18 asteroids */
var asteroids=[];
var aRockMat=new THREE.MeshStandardMaterial({color:0x222030,roughness:0.92,metalness:0.12});
for(var ai=0;ai<18;ai++){
  var aMesh=new THREE.Mesh(new THREE.IcosahedronGeometry(Math.random()*3.5+0.8,1),aRockMat);
  aMesh.position.set((Math.random()-.5)*260,(Math.random()-.5)*90+5,(Math.random()-.5)*320);
  scene.add(aMesh);
  asteroids.push({mesh:aMesh,vy:(Math.random()-.5)*.004});
}
scene.add(new THREE.AmbientLight(0x08102A,0.55));
var sun=new THREE.DirectionalLight(0xB0C8E8,2.4);sun.position.set(80,50,-60);scene.add(sun);
```

## 8H. OCEAN scene (sub-pages)
```javascript
renderer.setClearColor(0x00080F,1);
scene.fog=new THREE.Fog(0x000C1A,150,520);
scene.add(makeStars(5000,480,0.36,0.6,0xBBCCFF));
scene.add(makeStars(220,300,1.0,0.85,0xFFFFFF));

var moon=new THREE.Mesh(new THREE.SphereGeometry(28,32,32),new THREE.MeshStandardMaterial({color:0xB8C4D0,emissive:0x445566,emissiveIntensity:0.28,roughness:0.88,metalness:0.04}));
moon.position.set(-160,110,-420);scene.add(moon);

/* Animated ocean — vertex displacement each frame */
var oceanGeo=new THREE.PlaneGeometry(700,700,72,72);
var ocean=new THREE.Mesh(oceanGeo,new THREE.MeshStandardMaterial({color:0x00243A,emissive:0x001122,emissiveIntensity:0.35,roughness:0.06,metalness:0.72,transparent:true,opacity:0.96}));
ocean.rotation.x=-Math.PI/2;ocean.position.y=-10;scene.add(ocean);
var oceanPos=oceanGeo.attributes.position;

/* In RAF each frame: */
function updateOcean(t){
  for(var i=0;i<oceanPos.count;i++){
    var wx=oceanPos.getX(i),wy=oceanPos.getY(i);
    oceanPos.setZ(i,Math.sin(wx*0.042+t*0.85)*1.7+Math.sin(wy*0.058+t*0.65)*1.2+Math.sin((wx+wy)*0.028+t*1.2)*0.8+Math.sin(wx*0.09-t*1.1)*0.4);
  }
  oceanPos.needsUpdate=true;oceanGeo.computeVertexNormals();
}

/* 8 floating holographic AI rings — torus geometry, drift up/down with sin */
var ringColors=[0x00CCFF,0x0088FF,0x00FFCC,0x4466FF,0x00DDFF,0x0099FF,0x22EEBB,0x3377FF];
var rings=[];
for(var ri=0;ri<8;ri++){
  var rg=new THREE.Mesh(new THREE.TorusGeometry(2+Math.random()*3,0.1,8,40),new THREE.MeshBasicMaterial({color:ringColors[ri],transparent:true,opacity:.6}));
  rg.position.set((Math.random()-.5)*60,Math.random()*15-2,(Math.random()-.5)*40);
  rg.userData.baseY=rg.position.y;rg.userData.fo=Math.random()*Math.PI*2;rg.userData.ss=0.005+Math.random()*0.01;
  scene.add(rg);rings.push(rg);
}

/* Sub-page camera = orbit on scroll (no GSAP, just window scroll) */
var camRadius=80,camHeight=16,camAngle=0,camAngleTarget=0;
window.addEventListener('scroll',function(){
  var maxS=Math.max(document.body.scrollHeight-window.innerHeight,1);
  camAngleTarget=(window.scrollY/maxS)*Math.PI;
},{passive:true});
/* In RAF: camAngle += (camAngleTarget-camAngle)*0.032; camera.position.x = sin(camAngle)*camRadius; ... */
```

## 8I. CatmullRom camera fly-through (Mode C index.html only)
```javascript
gsap.registerPlugin(ScrollTrigger);
var SP={p:0};
gsap.to(SP,{p:1,ease:'none',scrollTrigger:{trigger:'#journey',start:'top top',end:'+=5200',pin:true,scrub:1.8}});

var camWaypoints=[
  {pos:new THREE.Vector3(0,18,90),    look:new THREE.Vector3(0,15,0)},   /* hero */
  {pos:new THREE.Vector3(-75,-2,20),  look:new THREE.Vector3(0,-5,0)},   /* stats */
  {pos:new THREE.Vector3(22,90,30),   look:new THREE.Vector3(0,45,0)},   /* services */
  {pos:new THREE.Vector3(12,28,48),   look:new THREE.Vector3(0,22,0)},   /* reviews */
  {pos:new THREE.Vector3(-5,28,88),   look:new THREE.Vector3(0,18,0)}    /* cta */
];
var camCurve=new THREE.CatmullRomCurve3(camWaypoints.map(function(w){return w.pos;}));
var lookCurve=new THREE.CatmullRomCurve3(camWaypoints.map(function(w){return w.look;}));

/* In RAF: */
function tick(){
  requestAnimationFrame(tick);
  var p=Math.max(0,Math.min(1,SP.p));
  var cp=camCurve.getPoint(p),lk=lookCurve.getPoint(p);
  camera.position.copy(cp);camera.lookAt(lk);
  /* update chapters, animate scene objects, render */
  renderer.render(scene,camera);
}
tick();
```

## 8J. Mode C chapters (5 — same structure as Mode B)
1. **Hero** — Headline + sub + 2 buttons (Calendly + secondary)
2. **Stats** — 4 animated counters
3. **Services** — 3-col grid (6 services)
4. **Reviews** — 3 review cards
5. **CTA** — Glass card + Calendly button + phone

## 8K. Calendly link (Mode C primary CTA)
Just an external link — no embed needed:
```html
<a href="[CALENDLY_URL]" target="_blank" rel="noopener" class="btn btn-primary btn-lg">[CTA_TEXT] →</a>
```

---

---

# ═══ PART 9: REVIEWS PASTE-IN SYSTEM (B and C) ═══

When the client provides Google Maps reviews, paste them into PART 1's `REVIEWS_INPUT` block in this format:

```
---
NAME: Jane Doe
RATING: 5
TITLE: (optional)
REVIEW: Full review text here.
ROLE: COO, Apex Capital
---
---
NAME: Michael Torres
RATING: 5
REVIEW: Another review.
ROLE: Director of Ops
---
```

## What Claude does with REVIEWS_INPUT:
1. **Picks the top 3** — prioritize specificity (numbers, time frames, concrete outcomes) and 5-star ratings
2. **Extracts initials** from NAME for the avatar circle (`Jane Doe` → `JD`)
3. **Trims review text** to 2–3 punchy sentences if longer than ~200 chars
4. **Pulls numbers** mentioned (hours saved, days, %) and uses the strongest one to populate stat counters
5. **Generates the reviews chapter HTML** using:

```html
<div class="rev-card">
  <div class="rev-stars">★★★★★</div>
  <p class="rev-text">"{{ REVIEW }}"</p>
  <div class="reviewer">
    <div class="av">{{ INITIALS }}</div>
    <div>
      <div class="rev-name">{{ NAME }}</div>
      <div class="rev-role">{{ ROLE }}</div>
    </div>
  </div>
</div>
```

```css
.rev-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;}
.rev-card{background:[GLASS_BG];backdrop-filter:blur(14px);border:1px solid [BORDER];border-radius:14px;padding:2.25rem;display:flex;flex-direction:column;gap:1.25rem;transition:background .2s;}
.rev-stars{color:#E8A000;font-size:.9rem;letter-spacing:.05em;}
.rev-text{color:[GLASS_TEXT];font-size:.9rem;line-height:1.75;flex:1;}
.reviewer{display:flex;align-items:center;gap:.9rem;margin-top:auto;}
.av{width:38px;height:38px;border-radius:50%;background:var(--accent);color:#fff;font-family:var(--head);font-size:.72rem;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
.rev-name{font-size:.82rem;font-weight:600;color:[NAME_COLOR];}
.rev-role{font-size:.72rem;color:[ROLE_COLOR];margin-top:.1rem;}
@media(max-width:900px){.rev-grid{grid-template-columns:1fr;}}
```

If `REVIEWS_INPUT` is blank: invent 3 plausible 5-star reviews matching the business type, with realistic names and roles. Mark as "[stand-in copy — replace with real reviews]" in the PROJECT.md.

---

---

# ═══ PART 10: STAT COUNTER ANIMATION (B and C) ═══

```html
<div class="stat"><div class="stat-n" id="s0">0</div><div class="stat-l">[Label]</div></div>
<div class="stat"><div class="stat-n" id="s1">0</div><div class="stat-l">[Label]</div></div>
<div class="stat"><div class="stat-n" id="s2">0</div><div class="stat-l">[Label]</div></div>
<div class="stat"><div class="stat-n" id="s3">0</div><div class="stat-l">[Label]</div></div>
```

```javascript
var statsTriggered=false;
function animateStats(){
  if(statsTriggered)return;
  statsTriggered=true;
  [
    {el:document.getElementById('s0'),end:[N1],suffix:'[SUFFIX1]'},
    {el:document.getElementById('s1'),end:[N2],suffix:'[SUFFIX2]'},
    {el:document.getElementById('s2'),end:[N3],suffix:'[SUFFIX3]',dec:true},
    {el:document.getElementById('s3'),end:[N4],suffix:'[SUFFIX4]'}
  ].forEach(function(t){
    var elapsed=0,dur=1800,step=16;
    var ti=setInterval(function(){
      elapsed+=step;
      var pct=Math.min(elapsed/dur,1);
      t.el.textContent=(t.dec?(t.end*pct).toFixed(1):Math.floor(t.end*pct))+t.suffix;
      if(pct>=1)clearInterval(ti);
    },step);
  });
}
/* Call inside tick() when scroll progress enters stats chapter range */
if(p>0.20 && p<0.45) animateStats();
```

---

---

# ═══ PART 11: CONTACT / EMAIL / PHONE / MAPS PATTERNS ═══

**Mode A primary CTA:** Gmail compose
```
https://mail.google.com/mail/?view=cm&to=[EMAIL]&su=[SUBJECT]&body=[BODY]
```

**Mode B primary CTA:** Phone tel:
```
tel:[PHONE_DIGITS_ONLY]   e.g. tel:2133377719
```

**Mode C primary CTA:** Calendly link
```
[CALENDLY_URL]   e.g. https://calendly.com/example/30min
```

**All modes — Get Directions:**
```
https://www.google.com/maps/dir/?api=1&destination=[ADDRESS_URL_ENCODED]
```

**NEVER use `mailto:`.** Use Gmail compose. Clients rarely have a default mail client.

**Newsletter form (Mode A only):**
```javascript
function nlSub(inputId,okId,formId){
  var email=document.getElementById(inputId).value.trim();
  if(!email)return;
  var url='https://mail.google.com/mail/?view=cm&to=[EMAIL]&su=Newsletter+Subscribe&body=Please+add+'+encodeURIComponent(email)+'+to+the+[ORG]+newsletter+list.';
  window.open(url,'_blank');
  document.getElementById(formId).style.display='none';
  document.getElementById(okId).style.display='block';
}
```

---

---

# ═══ PART 12: NETLIFY FUNCTIONS (CONTACT FORM, STRIPE) ═══

## 12A. Contact form (any mode that needs one)
`netlify/functions/contact-form.js`:
```javascript
exports.handler=async function(event){
  if(event.httpMethod!=='POST')return{statusCode:405,body:'Method Not Allowed'};
  const p=new URLSearchParams(event.body);
  console.log('Contact:',{name:p.get('name'),email:p.get('email'),subject:p.get('subject'),message:p.get('message'),ts:new Date().toISOString()});
  return{statusCode:302,headers:{Location:'/contact-thanks.html'},body:''};
};
```

## 12B. Stripe checkout (Mode C only, when STRIPE INTEGRATION = yes)
`netlify/functions/create-checkout.js`:
```javascript
const stripe=require('stripe')(process.env.STRIPE_SECRET_KEY);
exports.handler=async function(event){
  if(event.httpMethod!=='POST')return{statusCode:405,body:'Method Not Allowed'};
  try{
    const{amount,description,email,name}=JSON.parse(event.body);
    const session=await stripe.checkout.sessions.create({
      payment_method_types:['card'],
      line_items:[{price_data:{currency:'usd',product_data:{name:description||'Service'},unit_amount:Math.round(amount*100)},quantity:1}],
      mode:'payment',
      customer_email:email,
      success_url:`${process.env.URL}/payment-success.html?session={CHECKOUT_SESSION_ID}`,
      cancel_url:`${process.env.URL}/pay.html`
    });
    return{statusCode:200,body:JSON.stringify({url:session.url})};
  }catch(e){return{statusCode:500,body:JSON.stringify({error:e.message})};}
};
```

Add to `package.json`:
```json
{"dependencies":{"stripe":"^14.0.0"},"devDependencies":{"netlify-cli":"^17.0.0"}}
```

Set in Netlify dashboard: `STRIPE_SECRET_KEY`, `URL` (auto), optional `NOTIFICATION_EMAIL`.

`netlify.toml`:
```toml
[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200
```

Deploy:
```bash
npx netlify-cli deploy --prod --dir .
```

Local dev:
```bash
npx netlify-cli dev --port 8888
```

---

---

# ═══ PART 13: HARD RULES — NEVER BREAK THESE ═══

Each rule prevented hours of pain on a real build.

## Universal (all modes)
1. **No frameworks** — no React, Vue, Tailwind, jQuery
2. **No ES6 syntax** — no `const`/`let`/arrows/template literals/async/await. ES5 in IIFE
3. **No code comments** — clean and dense
4. **No external stylesheets** — all CSS inline `<style>` per page
5. **No `mailto:` links** — Gmail compose URLs only
6. **No `git add -A`** without checking — projects often have no git repo
7. **Always create a `PROJECT.md`** — URL, mode, palette, decisions
8. **Always test mobile hamburger** opens AND closes
9. **Always hide the scrollbar** with `::-webkit-scrollbar{width:0;}`
10. **Always reuse the proven `mergedCyls` / `applyCamera` / `rangeFade` / `sStep` / animateStats helpers** — don't rewrite them
11. **Inner pages (Mode A/B): zero JS libraries.** Only homepage loads CDN scripts. Mode C inner pages DO load Three.js (sub-page ocean scene needs it).

## Mode A (light/3D object)
12. **Never custom cursor** — browser default for community/nonprofit sites
13. **Never `position:fixed` on canvas** — must be `position:sticky` for ScrollTrigger pin
14. **Never skip the render loop guard** `if(Math.abs(p-lastP)<0.00004)return;` — drains battery
15. **Never `rem` for canvas/Three.js values** — px or viewport units only
16. **Never generic 3D objects** — pick something specific to THIS business

## Mode B (dark/video)
17. **Never set `video.currentTime` from a scroll event handler** — async lag = stutter. RAF loop only
18. **Never use GSAP `scrub` to control video time** — double async lag
19. **Never use Three.js shader overlays on top of video** — looks fake. Real video > shaders for clients
20. **Never `scale` video higher than 1.28** — upscaling = pixelation
21. **Never set lerp factor higher than 0.08 with video scrub** — bigger jumps = more seek strain
22. **Never add a loading screen in Mode B** — emergency clients hate delays
23. **Always add `cursor:none` to `a`, `button`, `.hamburger`** — not just body
24. **Always include the Unsplash fallback photo** at z-index -1

## Mode C (dark/Three.js scene)
25. **Loading screen IS appropriate** — premium/agency context expects it (~2.5s with status messages)
26. **Use CatmullRom curves** for camera fly-throughs — feels cinematic, never linear
27. **Use `scrub: 1.8` not `scrub: 0.5`** for Mode C — slower scrub feels more cinematic when flying through 3D space
28. **Sub-pages get their own scene** (OCEAN), not the same as homepage (SPACE) — keeps it fresh page-to-page
29. **Sub-page camera = window scroll orbit, not GSAP pin** — only the homepage uses pinned scroll
30. **Vertex displacement on ocean** must call `oceanPos.needsUpdate=true; oceanGeo.computeVertexNormals();` after each update or shading breaks

## Design rules (all modes)
31. **Never reuse a palette across clients** — each business gets unique colors
32. **Never make Mode B/C sites without reviews chapter** — local services and B2B both live on social proof
33. **Mode A: pill buttons + circle logo. Mode B/C: rect buttons + rounded-square logo.** Don't mix
34. **Use CSS custom properties** (`:root { --accent... }`) for Modes B/C — makes color swaps trivial
35. **Stat counters fire ONCE** — use a `statsTriggered` flag, never re-trigger

---

---

# ═══ PART 14: PAGE STRUCTURE ═══

**Mode A:**
- `index.html` — 3D scroll homepage + below-fold + newsletter
- `about.html`, `faq.html`, `contact.html`, plus 1–3 topic pages
- `contact-thanks.html`

**Mode B:**
- `index.html` — Pinned video scroll, 5 chapters
- `services.html`, `how-it-works.html`, `contact.html`
- (No `contact-thanks.html` if phone-only)

**Mode C:**
- `index.html` — Pinned 3D scroll, 5 chapters, SPACE scene
- `services.html`, `how-it-works.html`, `contact.html` — OCEAN scene + window scroll
- `pay.html` (if Stripe) — custom checkout UI
- `payment-success.html` (if Stripe) — post-payment confirmation
- `contact-thanks.html` (if contact form)

---

---

# ═══ PART 15: DELIVERABLES CHECKLIST ═══

**Files (all modes):**
- [ ] `index.html` — full scroll experience
- [ ] All sub-pages
- [ ] `PROJECT.md` — URL, mode, palette, decisions, known issues
- [ ] `package.json`
- [ ] `netlify.toml` (if functions)
- [ ] `netlify/functions/contact-form.js` (if contact form)

**Mode C extras (if applicable):**
- [ ] `netlify/functions/create-checkout.js`
- [ ] `pay.html`
- [ ] `payment-success.html`
- [ ] Stripe env vars set in Netlify dashboard

**Deployed:**
- [ ] Live on Netlify
- [ ] Production URL provided

**Quality (all):**
- [ ] Mode declared explicitly at start of output
- [ ] Palette declared explicitly at start of output
- [ ] Mobile hamburger opens AND closes on every page
- [ ] All email links use Gmail compose (not mailto)
- [ ] Get Directions opens Google Maps
- [ ] No console errors

**Quality (Mode A):**
- [ ] 3D object is recognizable + specific to client
- [ ] Newsletter form opens Gmail compose
- [ ] Object rolls/spins as it travels

**Quality (Mode B):**
- [ ] Video scrubs smoothly with scroll, no stutter
- [ ] Phone CTA appears in nav, hero, CTA chapter, footer
- [ ] Stat counters animate once on scroll-in
- [ ] Reviews chapter has 3 real (or stand-in) cards

**Quality (Mode C):**
- [ ] Intro loading screen plays then disappears
- [ ] Camera fly-through through SPACE scene feels cinematic
- [ ] Sub-pages have their own (OCEAN) scene
- [ ] Calendly link works
- [ ] Stripe checkout (if enabled) hits live or test mode correctly

---

*Nexus Master Website Prompt — v4.0*
*Built from: Bicycle Kitchen LA (Mode A), Normandie Emergency Plumbers (Mode B), Nexus AI Agency (Mode C)*

/* Gradix — shared interactions, palette, and motion */

(function () {
  "use strict";

  const PAGES = {
    explore: "index.html",
    collections: "Collections.html",
    create: "Prompt.html",
    documentation: "Documentation.html",
    privacy: "Privacy.html",
    changelog: "Changelog.html",
    community: "Community.html",
  };

  const LOGO_SRC =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCDQ015-dAgoWc7vLYMdolqPPJaemz46vbmThQmCj5xofaxTVexdiHRj-hI_vPpKASaxB3JKY6m6lrpPRC2UFYlh7L-Nteo0OA6vYALVNG5SWn33WT6iLr1Wu57qJEzqOgq7SNYjJAAMr3qSGDoi9CsW45IZQgrN7gVXRcJPvXW7FE7w-aFL3wyyeAMKtzt-qQHIEKGXPi4Cco64zPC8S2yZOh10o5f0PFs674fyIkS38DFIJviyHfiEA";

  /** 120 curated unique colors organized by family */
  const PALETTE = [
    // Neutrals (16)
    { name: "Obsidian", hex: "#0B0D10", category: "neutrals" },
    { name: "Carbon", hex: "#15181D", category: "neutrals" },
    { name: "Graphite", hex: "#23272D", category: "neutrals" },
    { name: "Charcoal", hex: "#2C3238", category: "neutrals" },
    { name: "Steel", hex: "#495057", category: "neutrals" },
    { name: "Slate", hex: "#5C6770", category: "neutrals" },
    { name: "Silver", hex: "#868E96", category: "neutrals" },
    { name: "Ash", hex: "#ADB5BD", category: "neutrals" },
    { name: "Cloud", hex: "#CED4DA", category: "neutrals" },
    { name: "Fog", hex: "#E9ECEF", category: "neutrals" },
    { name: "Snow", hex: "#F8F9FA", category: "neutrals" },
    { name: "Ivory", hex: "#FFF8F0", category: "neutrals" },
    { name: "Bone", hex: "#F5F0E8", category: "neutrals" },
    { name: "Ink", hex: "#0A0A0A", category: "neutrals" },
    { name: "Smoke", hex: "#3A3A3A", category: "neutrals" },
    { name: "Pewter", hex: "#6B7280", category: "neutrals" },
    // Reds (12)
    { name: "Blood", hex: "#7F1D1D", category: "reds" },
    { name: "Crimson", hex: "#E03131", category: "reds" },
    { name: "Scarlet", hex: "#FA5252", category: "reds" },
    { name: "Coral", hex: "#FF6B6B", category: "reds" },
    { name: "Vermilion", hex: "#F03E3E", category: "reds" },
    { name: "Ruby", hex: "#C92A2A", category: "reds" },
    { name: "Cherry", hex: "#E64980", category: "reds" },
    { name: "Rose", hex: "#F06595", category: "reds" },
    { name: "Pink", hex: "#D6336C", category: "reds" },
    { name: "Blush", hex: "#FFA8C5", category: "reds" },
    { name: "Berry", hex: "#A61E4D", category: "reds" },
    { name: "Wine", hex: "#862E39", category: "reds" },
    // Oranges (10)
    { name: "Rust", hex: "#C2410C", category: "oranges" },
    { name: "Tangerine", hex: "#F76707", category: "oranges" },
    { name: "Orange", hex: "#FF922B", category: "oranges" },
    { name: "Amber", hex: "#FCC419", category: "oranges" },
    { name: "Gold", hex: "#FAB005", category: "oranges" },
    { name: "Honey", hex: "#F59F00", category: "oranges" },
    { name: "Peach", hex: "#FFA94D", category: "oranges" },
    { name: "Apricot", hex: "#FFC078", category: "oranges" },
    { name: "Copper", hex: "#C77D5D", category: "oranges" },
    { name: "Bronze", hex: "#A15C38", category: "oranges" },
    // Yellows (8)
    { name: "Lemon", hex: "#FFE066", category: "yellows" },
    { name: "Canary", hex: "#FFD43B", category: "yellows" },
    { name: "Sunflower", hex: "#F9C74F", category: "yellows" },
    { name: "Sand", hex: "#E9D8A6", category: "yellows" },
    { name: "Cream", hex: "#FFF3BF", category: "yellows" },
    { name: "Butter", hex: "#FFE8A3", category: "yellows" },
    { name: "Ochre", hex: "#E67700", category: "yellows" },
    { name: "Mustard", hex: "#D69E2E", category: "yellows" },
    // Greens (14)
    { name: "Forest", hex: "#1B4332", category: "greens" },
    { name: "Pine", hex: "#2D6A4F", category: "greens" },
    { name: "Emerald", hex: "#2F9E44", category: "greens" },
    { name: "Green", hex: "#40C057", category: "greens" },
    { name: "Lime", hex: "#A9E34B", category: "greens" },
    { name: "Chartreuse", hex: "#94D82D", category: "greens" },
    { name: "Mint", hex: "#63E6BE", category: "greens" },
    { name: "Seafoam", hex: "#96F2D7", category: "greens" },
    { name: "Jade", hex: "#0CA678", category: "greens" },
    { name: "Teal", hex: "#12B886", category: "greens" },
    { name: "Moss", hex: "#5C7A3D", category: "greens" },
    { name: "Olive", hex: "#748C3F", category: "greens" },
    { name: "Sage", hex: "#8FAE7E", category: "greens" },
    { name: "Fern", hex: "#37B24D", category: "greens" },
    // Cyans / Blues (18)
    { name: "Abyss", hex: "#0C4A6E", category: "blues" },
    { name: "Ocean", hex: "#0E7490", category: "blues" },
    { name: "Cyan", hex: "#15AABF", category: "blues" },
    { name: "Aqua", hex: "#22D3EE", category: "blues" },
    { name: "Sky", hex: "#74C0FC", category: "blues" },
    { name: "Azure", hex: "#339AF0", category: "blues" },
    { name: "Cerulean", hex: "#1C7ED6", category: "blues" },
    { name: "Blue", hex: "#228BE6", category: "blues" },
    { name: "Cobalt", hex: "#1864AB", category: "blues" },
    { name: "Navy", hex: "#1E3A5F", category: "blues" },
    { name: "Midnight", hex: "#0F172A", category: "blues" },
    { name: "Sapphire", hex: "#1D4ED8", category: "blues" },
    { name: "Ice", hex: "#A5D8FF", category: "blues" },
    { name: "Glacier", hex: "#7DF4FF", category: "blues" },
    { name: "Turquoise", hex: "#20C997", category: "blues" },
    { name: "Lagoon", hex: "#0D9488", category: "blues" },
    { name: "Denim", hex: "#3B82F6", category: "blues" },
    { name: "Steel Blue", hex: "#64748B", category: "blues" },
    // Purples (14)
    { name: "Indigo", hex: "#4C6EF5", category: "purples" },
    { name: "Violet", hex: "#7950F2", category: "purples" },
    { name: "Purple", hex: "#7048E8", category: "purples" },
    { name: "Amethyst", hex: "#845EF7", category: "purples" },
    { name: "Lavender", hex: "#BE4BDB", category: "purples" },
    { name: "Orchid", hex: "#DA77F2", category: "purples" },
    { name: "Plum", hex: "#9C36B5", category: "purples" },
    { name: "Grape", hex: "#862E9C", category: "purples" },
    { name: "Eggplant", hex: "#5F3DC4", category: "purples" },
    { name: "Iris", hex: "#9775FA", category: "purples" },
    { name: "Lilac", hex: "#E599F7", category: "purples" },
    { name: "Mauve", hex: "#CC5DE8", category: "purples" },
    { name: "Electric", hex: "#4A00E0", category: "purples" },
    { name: "Nebula", hex: "#1E1B4B", category: "purples" },
    // Brand / Accent extras to reach 120+
    { name: "Primary Cyan", hex: "#00DBE9", category: "accents" },
    { name: "Primary Ice", hex: "#00F0FF", category: "accents" },
    { name: "Primary Soft", hex: "#DBFCFF", category: "accents" },
    { name: "Solar Flare", hex: "#FFE179", category: "accents" },
    { name: "Warm Ivory", hex: "#FFF5DE", category: "accents" },
    { name: "Gold Dust", hex: "#EAC324", category: "accents" },
    { name: "Amber Glow", hex: "#FED639", category: "accents" },
    { name: "Soft Coral", hex: "#FFB4AB", category: "accents" },
    { name: "Pale Rose", hex: "#FFDAD6", category: "accents" },
    { name: "Blood Red", hex: "#93000A", category: "accents" },
    { name: "Deep Maroon", hex: "#690005", category: "accents" },
    { name: "Abyssal Teal", hex: "#002022", category: "accents" },
    { name: "Deep Emerald", hex: "#00363A", category: "accents" },
    { name: "Forest Shadow", hex: "#004F54", category: "accents" },
    { name: "Oceanic Depth", hex: "#006970", category: "accents" },
    { name: "Steel Mist", hex: "#B9C8DE", category: "accents" },
    { name: "Sky Frost", hex: "#D4E4FA", category: "accents" },
    { name: "Slate Core", hex: "#39485A", category: "accents" },
  ];

  const CATEGORIES = [
    { id: "all", label: "All" },
    { id: "neutrals", label: "Neutrals" },
    { id: "reds", label: "Reds" },
    { id: "oranges", label: "Oranges" },
    { id: "yellows", label: "Yellows" },
    { id: "greens", label: "Greens" },
    { id: "blues", label: "Blues" },
    { id: "purples", label: "Purples" },
    { id: "accents", label: "Accents" },
  ];

  function hexToRgb(hex) {
    const h = hex.replace("#", "");
    const n = parseInt(h.length === 3 ? h.split("").map((c) => c + c).join("") : h, 16);
    return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
  }

  function rgbToHsl(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0;
    const l = (max + min) / 2;
    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
        case g: h = ((b - r) / d + 2) / 6; break;
        default: h = ((r - g) / d + 4) / 6;
      }
    }
    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100),
    };
  }

  function enrich(color) {
    const { r, g, b } = hexToRgb(color.hex);
    const hsl = rgbToHsl(r, g, b);
    return {
      ...color,
      hex: color.hex.toUpperCase(),
      rgb: `${r}, ${g}, ${b}`,
      hsl: `${hsl.h}°, ${hsl.s}%, ${hsl.l}%`,
    };
  }

  const COLORS = PALETTE.map(enrich);

  window.Gradix = {
    colors: COLORS,
    categories: CATEGORIES,
    pages: PAGES,
  };

  /* ——— Toast ——— */
  function ensureToastHost() {
    let host = document.querySelector(".toast-host");
    if (!host) {
      host = document.createElement("div");
      host.className = "toast-host";
      host.setAttribute("aria-live", "polite");
      document.body.appendChild(host);
    }
    return host;
  }

  function showToast(message, hex) {
    const host = ensureToastHost();
    const el = document.createElement("div");
    el.className = "toast";
    el.innerHTML = `${hex ? `<span class="toast-swatch" style="background:${hex}"></span>` : ""}<span>${message}</span>`;
    host.appendChild(el);
    setTimeout(() => {
      el.classList.add("is-leaving");
      setTimeout(() => el.remove(), 260);
    }, 2200);
  }

  async function copyText(text) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.style.cssText = "position:fixed;left:-9999px;top:0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        ta.remove();
      }
      return true;
    } catch {
      return false;
    }
  }

  async function copyColor(hex, label) {
    const ok = await copyText(hex);
    showToast(ok ? `Copied ${label || hex}` : "Copy failed", hex);
    return ok;
  }

  window.Gradix.copyText = copyText;
  window.Gradix.copyColor = copyColor;
  window.Gradix.showToast = showToast;

  /* ——— Scroll reveal ——— */
  function initReveal() {
    const nodes = document.querySelectorAll(".reveal");
    if (!nodes.length) return;
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    nodes.forEach((n) => io.observe(n));
  }

  /* ——— Navigation ——— */
  function currentPage() {
    return (location.pathname.split("/").pop() || "index.html").toLowerCase();
  }

  function isNavActive(key, path) {
    if (key === "explore") return path === "" || path === "index.html";
    if (key === "collections") return path === "collections.html";
    if (key === "create") return path === "prompt.html";
    if (key === "documentation") return path === "documentation.html";
    if (key === "privacy") return path === "privacy.html";
    if (key === "changelog") return path === "changelog.html";
    if (key === "community") return path === "community.html";
    return false;
  }

  function initMobileNav() {
    let drawer = document.querySelector("[data-mobile-nav]");
    if (!drawer) {
      drawer = document.createElement("div");
      drawer.className = "mobile-nav";
      drawer.setAttribute("data-mobile-nav", "");
      drawer.setAttribute("aria-hidden", "true");
      drawer.innerHTML = `
        <div class="mobile-nav-backdrop" data-mobile-close></div>
        <div class="mobile-nav-panel" role="dialog" aria-label="Site menu">
          <div class="mobile-nav-header">
            <span class="font-display-lg text-headline-md font-bold tracking-tighter">Menu</span>
            <button type="button" class="icon-btn text-on-surface-variant" data-mobile-close aria-label="Close menu">
              <span class="material-symbols-outlined">close</span>
            </button>
          </div>
          <nav class="mobile-nav-links">
            <a data-nav="explore" href="index.html">Explore</a>
            <a data-nav="collections" href="Collections.html">Collections</a>
            <a data-nav="create" href="Prompt.html">Create</a>
            <a data-nav="documentation" href="Documentation.html">Documentation</a>
            <a data-nav="community" href="Community.html">Community</a>
          </nav>
          <button type="button" data-action="create" class="btn-primary w-full mt-4 bg-primary-fixed text-on-primary-fixed font-label-caps text-label-caps uppercase px-6 py-3 rounded-DEFAULT font-bold">
            Create Gradient
          </button>
        </div>`;
      document.body.appendChild(drawer);
    }

    const open = () => {
      drawer.classList.add("is-open");
      drawer.setAttribute("aria-hidden", "false");
      document.body.classList.add("mobile-nav-open");
    };
    const close = () => {
      drawer.classList.remove("is-open");
      drawer.setAttribute("aria-hidden", "true");
      document.body.classList.remove("mobile-nav-open");
    };

    document.querySelectorAll("[data-action='menu']").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        open();
      });
    });
    drawer.querySelectorAll("[data-mobile-close]").forEach((el) => {
      el.addEventListener("click", close);
    });
    drawer.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", close);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && drawer.classList.contains("is-open")) close();
    });
  }

  function initNav() {
    const path = currentPage();

    initMobileNav();

    document.querySelectorAll("[data-nav]").forEach((link) => {
      const key = link.getAttribute("data-nav");
      const href = PAGES[key];
      if (href) link.setAttribute("href", href);
      link.classList.add("nav-link");
      link.classList.toggle("is-active", isNavActive(key, path));
    });

    document.querySelectorAll("[data-action='create']").forEach((btn) => {
      if (btn.dataset.boundCreate === "1") return;
      btn.dataset.boundCreate = "1";
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        location.href = PAGES.create;
      });
    });

    document.querySelectorAll("[data-action='explore']").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.getElementById("palette");
        if (target) target.scrollIntoView({ behavior: "smooth" });
        else location.href = PAGES.explore + "#palette";
      });
    });

    document.querySelectorAll("[data-logo]").forEach((el) => {
      el.setAttribute("href", PAGES.explore);
      el.classList.add("logo-link");
      const img = el.querySelector("img");
      if (img) img.src = LOGO_SRC;
    });

    const footerMap = {
      Documentation: PAGES.documentation,
      Privacy: PAGES.privacy,
      Changelog: PAGES.changelog,
      Community: PAGES.community,
    };
    document.querySelectorAll(".footer-link").forEach((a) => {
      const label = a.textContent.trim();
      if (footerMap[label]) a.href = footerMap[label];
    });
  }

  /* ——— Search modal ——— */
  function initSearch() {
    const triggers = document.querySelectorAll("[data-action='search']");
    if (!triggers.length) return;

    let overlay = document.querySelector(".search-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.className = "search-overlay";
      overlay.innerHTML = `
        <div class="search-panel" role="dialog" aria-label="Search colors">
          <div class="flex items-center gap-2 px-4 border-b border-white/5">
            <span class="material-symbols-outlined text-on-surface-variant text-[20px]">search</span>
            <input class="search-input" type="search" placeholder="Search colors by name or hex…" autocomplete="off" />
            <kbd class="font-label-caps text-[10px] text-on-surface-variant border border-white/10 px-1.5 py-0.5 rounded">ESC</kbd>
          </div>
          <div class="search-results"></div>
        </div>`;
      document.body.appendChild(overlay);
    }

    const input = overlay.querySelector(".search-input");
    const results = overlay.querySelector(".search-results");
    let activeIndex = 0;
    let matches = [];

    function renderResults(q) {
      const query = (q || "").trim().toLowerCase();
      matches = !query
        ? COLORS.slice(0, 8)
        : COLORS.filter(
            (c) =>
              c.name.toLowerCase().includes(query) ||
              c.hex.toLowerCase().includes(query) ||
              c.category.includes(query)
          ).slice(0, 12);
      activeIndex = 0;
      if (!matches.length) {
        results.innerHTML = `<p class="p-4 text-on-surface-variant font-body-sm">No colors found</p>`;
        return;
      }
      results.innerHTML = matches
        .map(
          (c, i) => `
        <button type="button" class="search-result ${i === 0 ? "is-active" : ""}" data-hex="${c.hex}">
          <span class="w-8 h-8 rounded border border-white/15 shrink-0" style="background:${c.hex}"></span>
          <span class="flex flex-col items-start">
            <span class="font-label-caps text-[11px] uppercase tracking-widest">${c.name}</span>
            <span class="font-code-snippet text-[12px] text-on-surface-variant">${c.hex}</span>
          </span>
        </button>`
        )
        .join("");
      results.querySelectorAll(".search-result").forEach((btn) => {
        btn.addEventListener("click", () => {
          copyColor(btn.dataset.hex, btn.dataset.hex);
          close();
        });
      });
    }

    function open() {
      overlay.classList.add("is-open");
      input.value = "";
      renderResults("");
      setTimeout(() => input.focus(), 50);
    }

    function close() {
      overlay.classList.remove("is-open");
    }

    triggers.forEach((t) =>
      t.addEventListener("click", (e) => {
        e.preventDefault();
        open();
      })
    );

    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) close();
    });

    input.addEventListener("input", () => renderResults(input.value));

    document.addEventListener("keydown", (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        open();
      }
      if (e.key === "Escape" && overlay.classList.contains("is-open")) close();
      if (!overlay.classList.contains("is-open")) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        activeIndex = Math.min(activeIndex + 1, matches.length - 1);
        updateActive();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        activeIndex = Math.max(activeIndex - 1, 0);
        updateActive();
      } else if (e.key === "Enter" && matches[activeIndex]) {
        e.preventDefault();
        copyColor(matches[activeIndex].hex, matches[activeIndex].name);
        close();
      }
    });

    function updateActive() {
      results.querySelectorAll(".search-result").forEach((el, i) => {
        el.classList.toggle("is-active", i === activeIndex);
      });
    }
  }

  /* ——— Palette renderer (index) ——— */
  function initPalette() {
    const grid = document.getElementById("color-grid");
    const filterBar = document.getElementById("color-filters");
    const countEl = document.getElementById("color-count");
    if (!grid) return;

    let activeCategory = "all";

    if (filterBar) {
      filterBar.innerHTML = CATEGORIES.map(
        (c) =>
          `<button type="button" class="category-chip ${c.id === activeCategory ? "is-active" : ""}" data-category="${c.id}">${c.label}</button>`
      ).join("");
      filterBar.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-category]");
        if (!btn) return;
        activeCategory = btn.dataset.category;
        filterBar.querySelectorAll(".category-chip").forEach((c) =>
          c.classList.toggle("is-active", c.dataset.category === activeCategory)
        );
        render();
      });
    }

    function filtered() {
      if (activeCategory === "all") return COLORS;
      return COLORS.filter((c) => c.category === activeCategory);
    }

    function render() {
      const list = filtered();
      if (countEl) countEl.textContent = `${list.length} colors`;
      if (!list.length) {
        grid.innerHTML = `<div class="palette-empty font-body-base">No colors in this category.</div>`;
        return;
      }
      grid.innerHTML = list
        .map((c, i) => {
          const delay = Math.min(i % 10, 4);
          return `
          <article class="color-card reveal reveal-delay-${delay}" tabindex="0" role="button"
            aria-label="Copy ${c.name} ${c.hex}" data-hex="${c.hex}" data-name="${c.name}">
            <div class="color-swatch" style="background-color:${c.hex}">
              <div class="color-swatch-overlay">
                <span class="copy-hint"><span class="material-symbols-outlined text-[14px]">content_copy</span> Copy</span>
              </div>
            </div>
            <div class="color-meta">
              <h3 class="color-name">${String(i + 1).padStart(2, "0")} ${c.name}</h3>
              <div class="color-values">HEX: ${c.hex}<br>RGB: ${c.rgb}<br>HSL: ${c.hsl}</div>
            </div>
          </article>`;
        })
        .join("");

      grid.querySelectorAll(".color-card").forEach((card) => {
        card.addEventListener("click", async () => {
          const ok = await copyColor(card.dataset.hex, card.dataset.name);
          if (ok) {
            card.classList.add("is-copied");
            const hint = card.querySelector(".copy-hint");
            if (hint) hint.innerHTML = `<span class="material-symbols-outlined text-[14px]">check</span> Copied`;
            setTimeout(() => {
              card.classList.remove("is-copied");
              if (hint) hint.innerHTML = `<span class="material-symbols-outlined text-[14px]">content_copy</span> Copy`;
            }, 1200);
          }
        });
        card.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            card.click();
          }
        });
      });

      initReveal();
    }

    render();

    if (location.hash === "#palette") {
      document.getElementById("palette")?.scrollIntoView({ behavior: "smooth" });
    }
  }

  /* ——— Generic copy buttons ——— */
  function initCopyButtons() {
    document.querySelectorAll("[data-copy]").forEach((btn) => {
      btn.addEventListener("click", async (e) => {
        e.preventDefault();
        const selector = btn.getAttribute("data-copy");
        let text = btn.getAttribute("data-copy-text");
        if (!text && selector) {
          const target = document.querySelector(selector);
          text = target ? target.textContent.trim() : "";
        }
        if (!text) return;
        const ok = await copyText(text);
        showToast(ok ? "Copied to clipboard" : "Copy failed");
        const icon = btn.querySelector(".material-symbols-outlined");
        if (icon && ok) {
          const prev = icon.textContent;
          icon.textContent = "check";
          setTimeout(() => (icon.textContent = prev), 1200);
        }
      });
    });

    document.querySelectorAll("[data-copy-hex]").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        copyColor(el.getAttribute("data-copy-hex"));
      });
      el.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          copyColor(el.getAttribute("data-copy-hex"));
        }
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initNav();
    initSearch();
    initPalette();
    initCopyButtons();
    initReveal();
  });
})();

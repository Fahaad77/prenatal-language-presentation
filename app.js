(function () {
  const slideEl = document.getElementById("slide");
  const progressBar = document.getElementById("progressBar");
  const slideCount = document.getElementById("slideCount");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const overviewBtn = document.getElementById("overviewBtn");
  const overviewDialog = document.getElementById("overviewDialog");
  const overviewGrid = document.getElementById("overviewGrid");
  const closeOverview = document.getElementById("closeOverview");
  const notesBtn = document.getElementById("notesBtn");
  const notesPanel = document.getElementById("notesPanel");
  const notesContent = document.getElementById("notesContent");
  const timer = document.getElementById("timer");
  const fullscreenBtn = document.getElementById("fullscreenBtn");
  const spotlightBtn = document.getElementById("spotlightBtn");
  const spotlight = document.getElementById("spotlight");
  const figureDialog = document.getElementById("figureDialog");
  const figureImg = document.getElementById("figureImg");
  const figureCaption = document.getElementById("figureCaption");
  const closeFigure = document.getElementById("closeFigure");
  const printDeck = document.getElementById("printDeck");

  let index = readIndexFromHash();
  let revealStep = 0;
  let startedAt = Date.now();
  let timerHandle = window.setInterval(updateTimer, 1000);

  function readIndexFromHash() {
    const match = window.location.hash.match(/slide-(\d+)/);
    if (!match) return 0;
    const requested = Number(match[1]) - 1;
    return Math.max(0, Math.min(slides.length - 1, requested));
  }

  function renderSlide() {
    const slide = slides[index];
    revealStep = 0;
    slideEl.className = `slide ${slide.type || "content"} ${slide.classes || ""}`;
    slideEl.innerHTML = `
      <div class="slide-content">
        <header>
          <h1>${slide.title}</h1>
          ${slide.subtitle ? `<div class="subtitle">${slide.subtitle}</div>` : ""}
        </header>
        <div class="slide-body">${slide.body}</div>
      </div>
    `;
    slideEl.focus({ preventScroll: true });
    updateProgress();
    renderNotes();
    attachZoomHandlers();
    applyRevealState();
    if (window.location.hash !== `#slide-${index + 1}`) {
      history.replaceState(null, "", `#slide-${index + 1}`);
    }
  }

  function updateProgress() {
    const mainTotal = slides.filter((slide) => !String(slide.section).includes("Appendix")).length;
    const mainIndex = Math.min(index + 1, mainTotal);
    progressBar.style.width = `${((index + 1) / slides.length) * 100}%`;
    slideCount.textContent = `${mainIndex}/${mainTotal}${index + 1 > mainTotal ? " appendix" : ""}`;
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === slides.length - 1;
  }

  function renderNotes() {
    const notes = slides[index].notes || {};
    notesContent.innerHTML = `
      <p><strong>Suggested timing:</strong> ${notes.time || "Flexible"}</p>
      <p><strong>Script:</strong> ${notes.script || ""}</p>
      <p><strong>Pointer cue:</strong> ${notes.point || "None."}</p>
    `;
  }

  function next() {
    const reveals = slideEl.querySelectorAll(".reveal");
    if (revealStep < reveals.length) {
      revealStep += 1;
      applyRevealState();
      return;
    }
    if (index < slides.length - 1) {
      index += 1;
      renderSlide();
    }
  }

  function previous() {
    if (index > 0) {
      index -= 1;
      renderSlide();
    }
  }

  function applyRevealState() {
    slideEl.querySelectorAll(".reveal").forEach((item, itemIndex) => {
      item.classList.toggle("visible", itemIndex < revealStep);
    });
  }

  function openOverview() {
    overviewGrid.innerHTML = slides.map((slide, i) => `
      <button class="overview-item" type="button" data-slide="${i}">
        <strong>${i + 1}. ${slide.title}</strong>
        <span>${slide.section}</span>
      </button>
    `).join("");
    overviewDialog.hidden = false;
    overviewGrid.querySelector(`[data-slide="${index}"]`)?.focus();
  }

  function closeOverviewDialog() {
    overviewDialog.hidden = true;
    overviewBtn.focus();
  }

  function toggleNotes() {
    notesPanel.hidden = !notesPanel.hidden;
    notesBtn.setAttribute("aria-pressed", String(!notesPanel.hidden));
    if (!notesPanel.hidden) {
      startedAt = Date.now();
      updateTimer();
    }
  }

  function updateTimer() {
    const seconds = Math.floor((Date.now() - startedAt) / 1000);
    const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    timer.textContent = `${mins}:${secs}`;
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  }

  function toggleSpotlight() {
    const on = document.body.classList.toggle("spotlight-on");
    spotlightBtn.setAttribute("aria-pressed", String(on));
  }

  function attachZoomHandlers() {
    slideEl.querySelectorAll(".zoomable").forEach((figure) => {
      figure.addEventListener("click", () => {
        const img = figure.querySelector("img");
        const caption = figure.querySelector("figcaption");
        figureImg.src = img.src;
        figureImg.alt = img.alt;
        figureCaption.textContent = caption ? caption.textContent : "";
        figureDialog.hidden = false;
        closeFigure.focus();
      });
    });
  }

  function closeFigureDialog() {
    figureDialog.hidden = true;
    figureImg.removeAttribute("src");
    slideEl.focus({ preventScroll: true });
  }

  function buildPrintDeck() {
    printDeck.innerHTML = slides.map((slide) => `
      <section class="print-slide">
        <article class="slide ${slide.type || "content"} ${slide.classes || ""}">
          <div class="slide-content">
            <header>
              <h1>${slide.title}</h1>
              ${slide.subtitle ? `<div class="subtitle">${slide.subtitle}</div>` : ""}
            </header>
            <div class="slide-body">${slide.body}</div>
          </div>
        </article>
      </section>
    `).join("");
    printDeck.querySelectorAll(".reveal").forEach((item) => item.classList.add("visible"));
  }

  prevBtn.addEventListener("click", previous);
  nextBtn.addEventListener("click", next);
  overviewBtn.addEventListener("click", openOverview);
  closeOverview.addEventListener("click", closeOverviewDialog);
  notesBtn.addEventListener("click", toggleNotes);
  fullscreenBtn.addEventListener("click", toggleFullscreen);
  spotlightBtn.addEventListener("click", toggleSpotlight);
  closeFigure.addEventListener("click", closeFigureDialog);

  overviewGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-slide]");
    if (!button) return;
    index = Number(button.dataset.slide);
    closeOverviewDialog();
    renderSlide();
  });

  document.addEventListener("mousemove", (event) => {
    spotlight.style.setProperty("--x", `${event.clientX}px`);
    spotlight.style.setProperty("--y", `${event.clientY}px`);
  });

  document.addEventListener("keydown", (event) => {
    if (!figureDialog.hidden && (event.key === "Escape" || event.key === "Esc")) {
      closeFigureDialog();
      return;
    }
    if (!overviewDialog.hidden && (event.key === "Escape" || event.key === "Esc")) {
      closeOverviewDialog();
      return;
    }
    if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") {
      event.preventDefault();
      next();
    }
    if (event.key === "ArrowLeft" || event.key === "PageUp") {
      event.preventDefault();
      previous();
    }
    if (event.key.toLowerCase() === "o") openOverview();
    if (event.key.toLowerCase() === "r") toggleNotes();
    if (event.key.toLowerCase() === "s") toggleSpotlight();
    if (event.key.toLowerCase() === "f") toggleFullscreen();
  });

  window.addEventListener("hashchange", () => {
    const nextIndex = readIndexFromHash();
    if (nextIndex !== index) {
      index = nextIndex;
      renderSlide();
    }
  });

  buildPrintDeck();
  renderSlide();
})();

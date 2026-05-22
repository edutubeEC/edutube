import * as data from "./data.js";
import * as classes from "./class.js";

let selectedSubject = null; // subject object
let selectedSubjectNotes = [];
let selectedChapterNotes = [];
let noteIndex = 0;

const DOM = {
  topbar: document.getElementById("topbar"),
  homeScreen: document.getElementById("homeScreen"),
  chaptersWrapper: document.getElementById("chapter-wrapper"),
  topicWrapper: document.getElementById("topic-wrapper"),
  noteWrapper: document.getElementById("note-wrapper"),
  navBtns: document.getElementById("navBtns-wrapper"),
};

function loadTopbar() {
  if (!DOM.topbar) return;
  DOM.topbar.innerHTML = "";

  const toggleBtn = document.createElement("span");
  toggleBtn.id = "toggleBtn";
  toggleBtn.className = "menu-icon";
  toggleBtn.textContent = "≡";

  const title = document.createElement("h2");
  title.textContent = "EDUTUBE";

  DOM.topbar.appendChild(toggleBtn);
  DOM.topbar.appendChild(title);
}

function loadHome() {
  const homeScreen = DOM.homeScreen;
  if (!homeScreen) return;

  homeScreen.innerHTML = "";

  Object.keys(data.syllabusData).forEach(key => {
    const _syllabus = data.syllabusData[key];

    const card = new classes.SyllabusCard({
      className: "syllabus-card",
      label: _syllabus.label,
      code: _syllabus.code,
      color: _syllabus.color,
      href: `pages/${key}.html`
    });

    homeScreen.appendChild(card.cardUI());
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadTopbar();
  loadHome();
  loadNavBtns();

  const path = window.location.pathname;
  const subjectKey = path.split("/").filter(Boolean).pop().replace(".html", "");

  if (data.syllabusData[subjectKey]) {
    loadChapters(subjectKey);
  }
});

function loadNavBtns() {
  if (!DOM.navBtns) return;
  DOM.navBtns.innerHTML = "";

  const _homeBtn = document.createElement("button");
  _homeBtn.className = "navBtn";
  _homeBtn.id = "homeBtn";
  _homeBtn.textContent = "Home";
  _homeBtn.addEventListener("click", showChapters);

  const _prevBtn = document.createElement("button");
  _prevBtn.className = "navBtn";
  _prevBtn.id = "prevBtn";
  _prevBtn.textContent = "◀";
  _prevBtn.addEventListener("click", prevNote);

  const _nextBtn = document.createElement("button");
  _nextBtn.className = "navBtn";
  _nextBtn.id = "nextBtn";
  _nextBtn.textContent = "▶";
  _nextBtn.addEventListener("click", nextNote);

  const _showAllBtn = document.createElement("button");
  _showAllBtn.className = "navBtn";
  _showAllBtn.id = "showAllBtn";
  _showAllBtn.textContent = "Show All";
  _showAllBtn.addEventListener("click", showAllNotes);

  DOM.navBtns.appendChild(_homeBtn);
  DOM.navBtns.appendChild(_prevBtn);
  DOM.navBtns.appendChild(_nextBtn);
  DOM.navBtns.appendChild(_showAllBtn);
}

function loadChapters(subjectKey) {
  const chaptersWrapper = DOM.chaptersWrapper;
  if (!chaptersWrapper) return;
  chaptersWrapper.innerHTML = "";

  selectedSubject = data.syllabusData[subjectKey];
  const subjectChapters = selectedSubject.chapters || [];
  const subjectNotes = selectedSubject.notes || [];

  subjectChapters.forEach(subjectChapter => {
    subjectChapter.chapters.forEach(chapter => {
      const chapterNotes = subjectNotes.filter(note =>
        note.id.startsWith(chapter.chapterId)
      );

      const chapterCard = new classes.ChapterCard(
        {
          className: "chapter-card",
          num: chapter.num,
          label: chapter.label,
          chapterId: chapter.chapterId,
          color: chapter.color,
          notes: chapterNotes,
          onClick: () => {
            selectedSubjectNotes = chapterNotes;
            loadTopics();
          }
        }
      );
      chaptersWrapper.appendChild(chapterCard.cardUI());
    });
  });
  setNoteUIState("chapters");
}

function loadTopics() {
  const topicWrapper = DOM.topicWrapper;
  if (!topicWrapper) return;
  topicWrapper.innerHTML = "";

  selectedChapterNotes = selectedSubjectNotes.filter(note => note.type === "title");

  selectedChapterNotes.forEach((topic, index) => {
    const card = new classes.SelectableCard({
      className: "topic-card",
      label: topic.label,
      onClick: () => {
        noteIndex = index;
        createNotes();
      }
    });

    topicWrapper.appendChild(card.cardUI());
  });

  setNoteUIState("topics");
}

function createNotes() {
  const notesWrapper = DOM.noteWrapper;
  if (!notesWrapper) return;
  notesWrapper.innerHTML = "";

  selectedSubjectNotes.forEach(item => {
    const noteCard = new classes.NoteCard(item);
    const card = noteCard.cardUI();
    card.dataset.id = item.id;
    notesWrapper.appendChild(card);
  });

  updateVisibleNotes();
  setNoteUIState("note");
}

function showChapters() {
  noteIndex = 0;
  selectedChapterNotes = [];
  setNoteUIState("chapters");
}

function showTopics() {
  noteIndex = 0;
  setNoteUIState("topics");
}

function prevNote() {
  if (noteIndex > 0) {
    noteIndex--;
    updateVisibleNotes();
    setNoteUIState("note");
  }
}

function nextNote() {
  if (noteIndex < selectedChapterNotes.length - 1) {
    noteIndex++;
    updateVisibleNotes();
    setNoteUIState("note");
  }
}

function showAllNotes() {
  createNotes();
  const allCards = DOM.noteWrapper.children;
  Array.from(allCards).forEach(card => {
    card.style.display = "block";
  });
  setNoteUIState("allNotes");
}

function setNoteUIState(state) {
  const _chaptersWrapper = DOM.chaptersWrapper;
  const _topicsWrapper = DOM.topicWrapper;
  const _notesWrapper = DOM.noteWrapper;
  const _navBtns = DOM.navBtns;

  const _homeBtn = document.getElementById("homeBtn");
  const _prevBtn = document.getElementById("prevBtn");
  const _nextBtn = document.getElementById("nextBtn");
  const _showAllBtn = document.getElementById("showAllBtn");

  if (!_chaptersWrapper || !_topicsWrapper || !_notesWrapper || !_navBtns) return;

  _chaptersWrapper.classList.add("hidden");
  _topicsWrapper.classList.add("hidden");
  _notesWrapper.classList.add("hidden");
  _navBtns.classList.add("hidden");

  if (state === "chapters") {
    _chaptersWrapper.classList.remove("hidden");

    _homeBtn.disabled = true;
    _prevBtn.disabled = true;
    _nextBtn.disabled = true;
    _showAllBtn.disabled = true;
  }

  if (state === "topics") {
    _topicsWrapper.classList.remove("hidden");
    _navBtns.classList.remove("hidden");

    _homeBtn.disabled = false;
    _prevBtn.disabled = true;
    _nextBtn.disabled = true;
    _showAllBtn.disabled = false;
  }

  if (state === "note") {
    _notesWrapper.classList.remove("hidden");
    _navBtns.classList.remove("hidden");

    _homeBtn.disabled = false;
    _prevBtn.disabled = noteIndex <= 0;
    _nextBtn.disabled = noteIndex >= selectedChapterNotes.length - 1;
    _showAllBtn.disabled = false;
  }

  if (state === "allNotes") {
    _notesWrapper.classList.remove("hidden");
    _navBtns.classList.remove("hidden");

    _homeBtn.disabled = false;
    _prevBtn.disabled = true;
    _nextBtn.disabled = true;
    _showAllBtn.disabled = true;
  }
}

function updateVisibleNotes() {
  const currentId = selectedChapterNotes[noteIndex]?.id;
  const allCards = DOM.noteWrapper.children;
  Array.from(allCards).forEach(card => {
    if (card.dataset.id === currentId) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

function toggleSidebar() {
  DOM.chaptersWrapper.classList.toggle("hidden");
}
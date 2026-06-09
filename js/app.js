import * as data from "./data.js";
import * as classes from "./class.js";

let selectedSubject = null;
let selectedChapterId = null;
let selectedSubjectNotes = [];
let selectedChapterNotes = [];
let noteIndex = 0;

const DOM = {
  topbar: document.getElementById("topbar"),
  homeScreen: document.getElementById("homeScreen"),
  chaptersWrapper: document.getElementById("chapter-wrapper"),
  topicWrapper: document.getElementById("topic-wrapper"),
  noteWrapper: document.getElementById("note-wrapper"),
  navBtns: document.getElementById("navBtns-wrapper")
};

const NOTE_UI_STATES = {
  CHAPTERS: "chapters",
  TOPICS: "topics",
  NOTE: "note",
  ALL_NOTES: "allNotes"
};

function loadTopbar() {
  if (!DOM.topbar) return;
  DOM.topbar.innerHTML = "";

  const toggleBtn = document.createElement("span");
  toggleBtn.id = "toggleBtn";
  toggleBtn.className = "menu-icon";
  toggleBtn.textContent = "=";

  const title = document.createElement("h2");
  title.textContent = "EDUTUBE";

  DOM.topbar.appendChild(toggleBtn);
  DOM.topbar.appendChild(title);
}

function loadHome() {
  const homeScreen = DOM.homeScreen;
  if (!homeScreen) return;

  homeScreen.innerHTML = "";

  Object.entries(data.syllabusData).forEach(([key, syllabus]) => {

    const card = new classes.SyllabusCard({
      className: "syllabus-card",
      label: syllabus.label,
      code: syllabus.code,
      color: syllabus.color,
      href: `pages/${key}.html`
    });

    homeScreen.appendChild(card.cardUI());
  });
}
document.addEventListener("DOMContentLoaded", () => {
  loadTopbar();
  loadHome();
  loadNavBtns();

  const subjectKey = getCurrentSubjectKey();

  if (data.syllabusData[subjectKey]) {
    loadChapters(subjectKey);
  }
});

function getCurrentSubjectKey() {
  const pageName = window.location.pathname.split("/").filter(Boolean).pop() || "";
  return pageName.replace(/\.html$/i, "");
}

function createNavButton({ id, label, onClick }) {
  const button = document.createElement("button");
  button.className = "navBtn";
  button.id = id;
  button.textContent = label;
  button.addEventListener("click", onClick);
  return button;
}

function loadNavBtns() {
  if (!DOM.navBtns) return;
  DOM.navBtns.innerHTML = "";

  const buttons = [
    { id: "homeBtn", label: "Home", onClick: showChapters },
    { id: "prevBtn", label: "Prev", onClick: prevNote },
    { id: "nextBtn", label: "Next", onClick: nextNote },
    { id: "showAllBtn", label: "Show All", onClick: showAllNotes },
    { id: "paper2Btn", label: "Paper 2", onClick: navPaper2 }
  ];

  buttons.forEach(button => {
    DOM.navBtns.appendChild(createNavButton(button));
  });
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
          paper2: chapter.paper2,
          notes: chapterNotes,
          onClick: () => {
            selectedSubjectNotes = chapterNotes;
            selectedChapterId = chapter.chapterId;

            updatePaper2Button(chapter.paper2);
            loadTopics();
          }
        }
      );
      chaptersWrapper.appendChild(chapterCard.cardUI());
    });
  });
  setNoteUIState(NOTE_UI_STATES.CHAPTERS);
}

function updatePaper2Button(paper2Status) {
  const paper2Btn = document.getElementById("paper2Btn");
  if (!paper2Btn) return;

  const hasPaper2Link = Boolean(paper2Status) && paper2Status !== "no";

  paper2Btn.style.display = paper2Status ? "" : "none";
  paper2Btn.disabled = !hasPaper2Link;
  paper2Btn.classList.toggle("disabled", !hasPaper2Link);
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

  setNoteUIState(NOTE_UI_STATES.TOPICS);
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
  setNoteUIState(NOTE_UI_STATES.NOTE);
}

function showChapters() {
  noteIndex = 0;
  selectedChapterNotes = [];
  setNoteUIState(NOTE_UI_STATES.CHAPTERS);
}

function showTopics() {
  noteIndex = 0;
  setNoteUIState(NOTE_UI_STATES.TOPICS);
}

function prevNote() {
  if (noteIndex > 0) {
    noteIndex--;
    updateVisibleNotes();
    setNoteUIState(NOTE_UI_STATES.NOTE);
  }
}

function nextNote() {
  if (noteIndex < selectedChapterNotes.length - 1) {
    noteIndex++;
    updateVisibleNotes();
    setNoteUIState(NOTE_UI_STATES.NOTE);
  }
}

function showAllNotes() {
  createNotes();
  const allCards = DOM.noteWrapper.children;
  Array.from(allCards).forEach(card => {
    card.style.display = "block";
  });
  setNoteUIState(NOTE_UI_STATES.ALL_NOTES);
}

function navPaper2() {
  if (!selectedChapterId) { return; }
  window.location.href = `../pages/mcq/0610p2.html?title=${selectedChapterId}`;
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

  if (
    !_chaptersWrapper ||
    !_topicsWrapper ||
    !_notesWrapper ||
    !_navBtns ||
    !_homeBtn ||
    !_prevBtn ||
    !_nextBtn ||
    !_showAllBtn
  ) return;

  _chaptersWrapper.classList.add("hidden");
  _topicsWrapper.classList.add("hidden");
  _notesWrapper.classList.add("hidden");
  _navBtns.classList.add("hidden");

  if (state === NOTE_UI_STATES.CHAPTERS) {
    _chaptersWrapper.classList.remove("hidden");

    _homeBtn.disabled = true;
    _prevBtn.disabled = true;
    _nextBtn.disabled = true;
    _showAllBtn.disabled = true;
  }

  if (state === NOTE_UI_STATES.TOPICS) {
    _topicsWrapper.classList.remove("hidden");
    _navBtns.classList.remove("hidden");

    _homeBtn.disabled = false;
    _prevBtn.disabled = true;
    _nextBtn.disabled = true;
    _showAllBtn.disabled = false;
  }

  if (state === NOTE_UI_STATES.NOTE) {
    _notesWrapper.classList.remove("hidden");
    _navBtns.classList.remove("hidden");

    _homeBtn.disabled = false;
    _prevBtn.disabled = noteIndex <= 0;
    _nextBtn.disabled = noteIndex >= selectedChapterNotes.length - 1;
    _showAllBtn.disabled = false;
  }

  if (state === NOTE_UI_STATES.ALL_NOTES) {
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

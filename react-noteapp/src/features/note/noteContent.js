import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterOnOff: false,
  tagEditorOnOff: false,
  editorOnOff: false,
  next: 2,
  tag: ["Excercise", "Quotes"], //실제 태그
  value: [
    {
      id: 0,
      title: "테스트1",
      text: ".",
      tag: ["Excercise"],
      color: 0,
      order: 0,
      process: 0,
    }, //process는 0: 진행중, 1: 달성, 2: 휴지통
    {
      id: 1,
      title: "테스트2",
      text: ".",
      tag: ["Quotes"],
      color: 2,
      order: 0,
      process: 0,
    },
  ],
  store: [
    {
      id: 0,
      title: "테스트1",
      text: ".",
      tag: ["Excercise"],
      color: 0,
      order: 0,
      process: 0,
    },
    {
      id: 1,
      title: "테스트2",
      text: ".",
      tag: ["Quotes"],
      color: 2,
      order: 0,
      process: 0,
    },
  ], //all
  status: "Notes",
  contentForm: {
    title: "",
    text: "",
    tag: ["Excercise"],
    color: 0,
    order: 0,
    process: 0,
  },
  curColor: 0,
};

export const noteContent = createSlice({
  name: "note",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    selectTagContent: (state, action) => {
      state.value = [];
      state.status = action.payload.v;
      for (let tmp of state.store) {
        for (let t of tmp.tag) {
          if (t === action.payload.v && tmp.process === 0) {
            state.value.push(tmp);
            break;
          }
        }
      }
    },
    selectNotesTag: (state, action) => {
      state.value = [];
      state.status = action.payload.v;
      for (let tmp of state.store) {
        if (tmp.process === 0) {
          state.value.push(tmp);
        }
      }
    },
    //

    selectArchiveTag: (state) => {
      state.value = [];
      state.status = "Archive";
      for (let tmp of state.store) {
        if (tmp.process === 1) {
          state.value.push(tmp);
        }
      }
    },
    selectArchive: (state, action) => {
      let id = action.payload.id;
      for (let tmp of state.store) {
        if (tmp.id === id) {
          tmp.process = 1;
        }
      }
      let change = [];
      for (let tmp of state.value) {
        change.push(tmp);
        if (tmp.id === id) {
          if (state.status !== "Archive") {
            change.pop();
          }
          tmp.process = 1;
        }
      }
      state.value = change;
    },
    /////

    selectTrashTag: (state) => {
      state.value = [];
      state.status = "Trash";
      for (let tmp of state.store) {
        if (tmp.process === 2) {
          state.value.push(tmp);
        }
      }
    },
    selectTrash: (state, action) => {
      let id = action.payload.id;
      for (let tmp of state.store) {
        if (tmp.id === id) {
          tmp.process = 2;
        }
      }
      let change = [];
      for (let tmp of state.value) {
        change.push(tmp);
        if (tmp.id === id) {
          if (state.status !== "Trash") {
            change.pop();
          }
          tmp.process = 2;
        }
      }
      state.value = change;
      // console.log(action.payload.id);
    },
    showEditor: (state) => {
      state.editorOnOff = true;
      state.filterOnOff = true;
    },
    hideEditor: (state) => {
      state.editorOnOff = false;
      state.filterOnOff = false;
    },
    showTagEditor: (state) => {
      state.tagEditorOnOff = true;
      state.filterOnOff = true;
    },
    hideTagEditor: (state) => {
      state.tagEditorOnOff = false;
      state.filterOnOff = false;
    },
    createNote: (state) => {
      console.log(state.contentForm);
      // alert("pause");
      state.contentForm.id = state.next;
      state.next = state.next + 1;

      if (state.contentForm.tag.length === 0) {
        state.contentForm.push(state.tag[0]);
      }

      state.store.push(state.contentForm);
      if (state.status === state.contentForm.tag || state.status === "Notes") {
        state.value.push(state.contentForm);
      }
      state.editorOnOff = false;
      state.filterOnOff = false;

      // console.log(action.payload);
      // alert("pause");
    },
    changeItem: (state, action) => {
      console.log(action.payload);
      if (action.payload.id === "title") {
        state.contentForm.title = action.payload.value;
      }
      if (action.payload.id === "text") {
        state.contentForm.text = action.payload.value;
      }
      if (action.payload.id === "tag") {
        state.contentForm.tag = [action.payload.value];
      }
      if (action.payload.id === "color") {
        state.contentForm.color = Number(action.payload.value);
        state.curColor = Number(action.payload.value);
      }
      if (action.payload.id === "order") {
        state.contentForm.order = Number(action.payload.value);
      }
    },
    handleInit: (state) => {
      state.editorOnOff = true;
      state.filterOnOff = true;
    },
    addTag: (state, action) => {
      state.tag.push(action.payload.v);
    },
    eraseTag: (state, action) => {
      state.tag = state.tag.filter((value, index, arr) => {
        return value !== action.payload.v;
      });
    },
  },
});

export const {
  selectTagContent,
  selectNotesTag,
  selectArchiveTag,
  selectArchive,
  selectTrashTag,
  selectTrash,
  showEditor,
  createNote,
  changeItem,
  handleInit,
  showTagEditor,
  hideTagEditor,
  addTag,
  eraseTag,
  hideEditor,
} = noteContent.actions;

export const selectContent = (state) => state.note.value;
export const statusContent = (state) => state.note.status;
export const selectTag = (state) => state.note.tag;
export const nextId = (state) => state.note.next;
export const filterValue = (state) => state.note.filterOnOff;
export const tagEditorValue = (state) => state.note.tagEditorOnOff;
export const editorValue = (state) => state.note.editorOnOff;
export const curColorValue = (state) => state.note.curColor;

export default noteContent.reducer;

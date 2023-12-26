import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  selectContent,
  statusContent,
  selectTagContent,
  selectArchiveTag,
  selectTrashTag,
  selectArchive,
  selectTrash,
  selectTag,
  selectNotesTag,
  filterValue,
  tagEditorValue,
  editorValue,
  createNote,
  changeItem,
  handleInit,
  showTagEditor,
  hideTagEditor,
  hideEditor,
  addTag,
  eraseTag,
  curColorValue,
} from "./features/note/noteContent";

function App() {
  const dispatch = useDispatch();
  const status = useSelector(statusContent);
  const tagArr = useSelector(selectTag);
  const curContent = useSelector(selectContent);
  const curColor = useSelector(curColorValue);
  //이제 보여줄 것...
  console.log("================start=======================");
  console.log(status);
  console.log(tagArr);
  console.log(curContent);
  console.log("================end=======================");

  //
  let filterOnOff = useSelector(filterValue);
  let tagEditorOnOff = useSelector(tagEditorValue);
  let editorOnOff = useSelector(editorValue);
  const color = ["White", "Red", "Green", "Blue"];

  ///////

  const handleChange = (e) => {
    let info = { id: e.target.id, value: e.target.value };
    dispatch(changeItem(info));
  };
  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      dispatch(addTag({ v: e.target.value }));
    }
  };
  ///

  return (
    <div className="App">
      {/* <header className="App-header">
        <Counter />
      </header> */}
      {/* 왼쪽 헤더 */}
      <div className="Left">
        <h1>Keep</h1>

        <button
          className="Tag"
          onClick={() => dispatch(selectNotesTag({ v: "Notes" }))}
        >
          ❗ Notes
        </button>
        {tagArr.map((v) => (
          <button
            className="Tag"
            onClick={() => dispatch(selectTagContent({ v }))}
          >
            🏷 {v}
          </button>
        ))}
        <button className="Tag" onClick={() => dispatch(showTagEditor())}>
          ✎ Edit Notes
        </button>
        <button className="Tag" onClick={() => dispatch(selectArchiveTag())}>
          🏅 Archive
        </button>
        <button className="Tag" onClick={() => dispatch(selectTrashTag())}>
          🗑 Trash
        </button>
      </div>

      {/*

      오른 쪽 노트 내용

      */}
      <div className="Right">
        <h1>Notes</h1>
        <hr></hr>
        <div style={{ float: "right" }}>
          <button
            className="Like-Letter"
            onClick={() => dispatch(handleInit())}
            style={{ backgroundColor: "#fdefc4" }}
          >
            노트 추가하기
          </button>
        </div>
        <div className="Main">
          {curContent.map((v) => (
            <div
              // className="Box "
              className={`Box ${color[v.color]}`}
            >
              <h4>{v.title}</h4>
              <h6>{v.text}</h6>
              <div className="Row">
                {v.tag.map((t) => (
                  <span className="Tbox">{t}</span>
                ))}
              </div>
              <div className="Row">
                <button
                  className="Like-Letter"
                  onClick={() => dispatch(selectArchive({ id: v.id }))}
                >
                  🏅
                </button>
                <button
                  className="Like-Letter"
                  onClick={() => dispatch(selectTrash({ id: v.id }))}
                >
                  🗑
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*

      */}
      <div
        className={`${filterOnOff && "Filter"}  ${!filterOnOff && "No-Show"} `}
      ></div>
      <div
        className={`${tagEditorOnOff && "Tag-Edtior"} ${
          !tagEditorOnOff && "No-Show"
        }`}
      >
        <div className="Display-Flex">
          <span
            className="Tag-Edtior-Letter Display-Left"
            style={{ fontWeight: "bold", fontSize: "x-large" }}
          >
            Edit Tags
          </span>
          <button
            className="Tag-Edtior-Letter Like-Letter"
            onClick={() => dispatch(hideTagEditor())}
          >
            X
          </button>
        </div>
        <input className="Tag-Edtior-Letter" onKeyUp={handleOnKeyPress}></input>
        {tagArr.map((v) => (
          <div
            className="Display-Flex"
            style={{ border: "0.5px solid #cfcfcf", margin: "2px" }}
          >
            <span className={`Tag-Edtior-Letter Display-Left`}>{v}</span>
            {v !== "Excercise" && v !== "Quotes" && (
              <button
                className="Tag-Edtior-Letter Like-Letter"
                onClick={() => dispatch(eraseTag({ v }))}
              >
                X
              </button>
            )}
          </div>
        ))}
      </div>
      {/*

      */}
      <div
        className={`${editorOnOff && "Editor"} ${!editorOnOff && "No-Show"} `}
      >
        <div className="Display-Flex">
          <span
            className="Tag-Edtior-Letter Display-Left"
            style={{ fontWeight: "bold", fontSize: "x-large" }}
          >
            노트 생성하기
          </span>
          <button
            className="Like-Letter"
            onClick={() => dispatch(hideEditor())}
          >
            X
          </button>
        </div>
        <div className="Width-Setting">
          <input
            id="title"
            className="Width-Setting"
            onChange={handleChange}
          ></input>
          <textarea
            id="text"
            className={`Width-Setting Height-Setting ${color[curColor]}`}
            style={{
              border: "0.5px solid #cfcfcf",
              margin: "10px",
              borderRadius: "0.5rem",
            }}
            onChange={handleChange}
          ></textarea>
          <label className="Tag-Edtior-Letter " for="tag">
            태그 선택하기 :{" "}
          </label>
          <select id="tag" onClick={handleChange}>
            {tagArr.map((v) => (
              <option value={v}>{v}</option>
            ))}
          </select>
          <label className="Tag-Edtior-Letter " for="color">
            배경색 :{" "}
          </label>
          <select id="color" onClick={handleChange}>
            <option value="0">White</option>
            <option value="1">Red</option>
            <option value="2">Green</option>
            <option value="3">Blue</option>
          </select>
          <label className="Tag-Edtior-Letter " for="order">
            우선순위 :{" "}
          </label>
          <select id="order" onClick={handleChange}>
            <option value="0">Low</option>
            <option value="1">High</option>
          </select>
          <button onClick={() => dispatch(createNote())}>+생성하기</button>
        </div>
      </div>
    </div>
  );
}

export default App;

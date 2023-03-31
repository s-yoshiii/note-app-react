import React from "react";
import styles from "./Main.module.css";

const Main = ({ activeNote, onUpdateNote }) => {
  const onEditNote = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      modDate: Date.now(),
    });
  };
  if (!activeNote) {
    return <p className={styles.noActive}>ノートが選択されていません</p>;
  }
  return (
    <div className={styles.main}>
      <div className={styles.edit}>
        <input
          type="text"
          value={activeNote.title}
          onChange={(e) => onEditNote("title", e.target.value)}
          id="title"
        />
        <textarea
          id="content"
          value={activeNote.content}
          onChange={(e) => onEditNote("content", e.target.value)}
          placeholder="ノートの内容を記入"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div className={styles.preview}>
        <h1 className={styles.title}>{activeNote.title}</h1>
        <div className={styles.markdown}>{activeNote.content}</div>
      </div>
    </div>
  );
};

export default Main;

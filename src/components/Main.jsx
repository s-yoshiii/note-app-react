import React from "react";
import styles from "./Main.module.css";

const Main = ({ activeNote }) => {
  if (!activeNote) {
    return <p className={styles.noActive}>ノートが選択されていません</p>;
  }
  return (
    <div className={styles.main}>
      <div className={styles.edit}>
        <input type="text" name="" />
        <textarea
          id=""
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

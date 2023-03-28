import React from "react";
import styles from "./Main.module.css";

const Main = () => {
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
        <h1 className={styles.title}>タイトル</h1>
        <div className={styles.markdown}>ノート内容</div>
      </div>
    </div>
  );
};

export default Main;

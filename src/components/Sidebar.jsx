import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar = ({ onAddNote, notes, onDeleteNote }) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <h1>ノート</h1>
        <button onClick={onAddNote} className={styles.addbtn}>
          追加
        </button>
      </div>
      <div className={styles.notes}>
        {notes.map((note) => (
          <div className={styles.item} key={note.id}>
            <div className={styles.title}>
              <strong>{note.title}</strong>
              <button onClick={() => onDeleteNote(note.id)}>削除</button>
            </div>
            <p>{note.content}</p>
            <small>
              {new Date(note.modDate).toLocaleDateString("ja-JP", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

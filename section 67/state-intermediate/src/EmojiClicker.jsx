import { useState } from "react";
import { v4 as uuid } from "uuid";

const randomEmoji = () => {
  const emojisArr = [
    "😍",
    "😂",
    "😎",
    "😜",
    "😡",
    "😱",
    "😴",
    "😈",
    "🤢",
    "🤠",
    "🤡",
    "🤥",
    "🤧",
    "🤪",
    "🤫",
    "🤬",
    "🤭",
    "🤮",
    "🤯",
    "🧐",
    "🧒",
    "🧓",
    "🧔",
    "🧕",
    "🧖",
    "🧗",
    "🧘",
    "🧙",
    "🧚",
    "🧛",
    "🧜",
    "🧝",
    "🧞",
    "🧟",
    "🧠",
    "🧡",
    "🧢",
    "🧣",
    "🧤",
    "🧥",
    "🧦",
    "🧧",
    "🧨",
    "🧩",
    "🧪",
    "🧫",
    "🧬",
    "🧭",
    "🧮",
    "🧯",
    "🧰",
    "🧱",
    "🧲",
    "🧳",
    "🧴",
    "🧵",
    "🧶",
    "🧷",
    "🧸",
    "🧹",
    "🧺",
    "🧻",
    "🧼",
    "🧽",
    "🧾",
    "🧿",
  ];
  return emojisArr[Math.floor(Math.random() * emojisArr.length)];
};

export default function EmojiClicker() {
  const [emojis, setEmojis] = useState([{ id: uuid(), emoji: randomEmoji() }]);

  const addEmoji = () =>
    setEmojis((prevEmojis) => [
      ...prevEmojis,
      { id: uuid(), emoji: randomEmoji() },
    ]);
  const deleteEmoji = (id) =>
    setEmojis((prevEmojis) => prevEmojis.filter((e) => e.id !== id));

  const changeToHearts = () =>
    setEmojis((prevEmojis) => prevEmojis.map((e) => ({ ...e, emoji: "🧡" })));
  return (
    <>
      <div>
        {emojis.map((e) => (
          <span
            onClick={() => deleteEmoji(e.id)}
            style={{ fontSize: "3rem", cursor: "pointer" }}
            key={e.id}
          >
            {e.emoji}
          </span>
        ))}
      </div>
      <button onClick={addEmoji}>Add Emoji</button>
      <button onClick={changeToHearts}>Make All to Hearts</button>
    </>
  );
}

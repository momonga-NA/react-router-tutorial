import React, { useContext } from "react";

import AppContext from "./context";

const FRIENDS = [
  {
    id: "serval",
    nameJa: "サーバル",
    nameEn: "Serval Cat",
    family: "ネコ目ネコ科ネコ属",
  },
  {
    id: "raccoon",
    nameJa: "アライグマ",
    nameEn: "Common raccoon",
    family: "ネコ目アライグマ科アライグマ属",
  },
  {
    id: "fennec",
    nameJa: "フェネック",
    nameEn: "Fennec",
    family: "ネコ目イヌ科キツネ属",
  },
];

const frinendById = (id) => FRIENDS.find((friend) => id === friend.id);

const Friends = (props) => {
  const count = useContext(AppContext);

  const { id } = props.match.params;
  const friend = frinendById(id);

  if (!friend) {
    return (
      <div>
        <p>Friends with id {id} does not exist.</p>
        <p>{count}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>{friend.nameJa}</h1>
      <p>{friend.nameEn}</p>
      <p>{friend.family}</p>
      <p>{count}</p>
    </div>
  );
};

export default Friends;

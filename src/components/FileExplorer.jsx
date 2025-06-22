import React, { useState } from "react";

export const FileExplorer = ({ explorer }) => {
  const [showChildren, setShowChildren] = useState(false);
  const handleClick = (e) => {
    setShowChildren(!showChildren);
  };
  return (
    <>
      <div className="flex justify-center gap-1 pl-2 cursor-pointer border-l-2 m-2 flex-col">
        <div onClick={handleClick} className="flex gap-1">
          <div>{explorer?.isFolder ? (showChildren ? "📂️" : "📁️") : ""}
            
          </div>
          <div>{explorer?.name}</div>
        </div>
        {showChildren &&
          explorer?.items?.map((item, i) => {
            return <FileExplorer key={i} explorer={item} />;
          })}
      </div>
    </>
  );
};

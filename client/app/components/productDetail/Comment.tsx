// Comment.tsx
"use client";

import React, { useState } from "react";
import Avatar from "../general/Avatar";
import { Review } from "@/constans/Props";

function Comment({ prd }: { prd: Review }) {
  const [isExpanded, setIsExpanded] = useState(false); // "Daha Fazla" ve "Daha Az" için state

  const toggleExpand = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col md:flex-row items-start gap-4 p-6 bg-white shadow-lg rounded-lg mb-4">
      <div className="w-16 h-16 relative rounded-full border border-black p-3 flex-shrink-0">
        <Avatar
          image={
            prd?.user?.image
              ? prd?.user?.image
              : "https://res.cloudinary.com/dgoothqal/image/upload/v1730673960/avatar3_oronth.png"
          }
        />
      </div>
      <div className="flex flex-col mt-4 md:mt-0 flex-grow">
        <div className="font-semibold text-lg text-gray-700">
          {prd?.user?.name || "Anonim Kullanıcı"}
        </div>
        <div
          className={`text-gray-600 mt-2 ${
            !isExpanded && prd.comment.length > 150 ? "line-clamp-3" : ""
          }`}
        >
          {prd.comment}
        </div>

        {prd.comment.length > 150 && (
          <button
            onClick={toggleExpand}
            className="text-primary hover:underline mt-2 text-end"
          >
            {isExpanded ? "Daha Az" : "Daha Fazla"}
          </button>
        )}
      </div>
    </div>
  );
}

export default Comment;

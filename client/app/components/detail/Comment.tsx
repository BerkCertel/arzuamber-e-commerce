"use client";

import React from "react";
import Avatar from "../general/Avatar";
import { Review } from "@/constans/productProps";

function Comment({ prd }: { prd: Review }) {
  return (
    <div className="flex items-start gap-4 p-6 bg-white shadow-lg rounded-lg mb-4">
      <div className="w-16 h-16 relative rounded-full overflow-hidden border-2 border-primary">
        <Avatar image={prd?.user?.image} />
      </div>
      <div className="flex flex-col">
        <div className="font-semibold text-lg text-gray-700">
          {prd?.user?.name || "Anonim Kullanıcı"}
        </div>
        <div className="text-gray-600 mt-2">{prd.comment}</div>
      </div>
    </div>
  );
}

export default Comment;

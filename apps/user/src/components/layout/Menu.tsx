import React from "react";

export function Menu() {
  return (
    <nav className="flex w-full justify-between gap-2 bg-blue-400 bg-opacity-90 p-2 rounded-b-lg sticky top-0">
      <div>LOGO</div>
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((_, i) => (
          <div key={i}>Lorem</div>
        ))}
      </div>
      <div>someaction</div>
    </nav>
  );
}

"use strict";

document.addEventListener("mousemove", (e) => {
  const cursor = document.getElementById("cursor");
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});

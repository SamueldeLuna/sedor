import { useEffect, useState, useRef } from "react";

const useLockBodyScroll = () => {
  const bodyStyle = document.body.style;
  const [isLocked, setIsLocked] = useState(bodyStyle.overflowY == "hidden");

  useEffect(() => {
    bodyStyle.overflowY = isLocked ? "hidden" : "auto";
  }, [isLocked, bodyStyle]);

  const toggle = () => setIsLocked(!isLocked);
  return [isLocked, toggle];
};

export default useLockBodyScroll;

import React, { useRef, useEffect } from "react";
function useOutsideListener(ref: any, clickHandler: any) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        clickHandler();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

export function OutsideListener(props: { children: any; clickHandler: any }) {
  const wrapperRef = useRef(null);
  useOutsideListener(wrapperRef, props.clickHandler);

  return <div ref={wrapperRef}>{props.children}</div>;
}

import { useEffect, useRef, useState } from "react";

const useHideShow = () => {
  const [showLinks, setShowLinks] = useState(false);
  const headerRef = useRef(null);
  const childrenRef = useRef(null);
  const otherRef = useRef(null)

  useEffect(() => {
    const childrenHeight = childrenRef.current.getBoundingClientRect().height;
    if (showLinks) {
      headerRef.current.style.height = `${childrenHeight}px`;
      headerRef.current.style.border = "1px solid var(--color-blue)";
    } else {
      headerRef.current.style.height = "0px";
      headerRef.current.style.border = "none";
    }
    const handleClickOutside = (event) => {
      
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target) &&
        !childrenRef.current.contains(event.target) &&
        !otherRef.current.contains(event.target)
      ) {
        setShowLinks(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showLinks]);

  
  return [headerRef, childrenRef, otherRef, setShowLinks];
};

export default useHideShow;

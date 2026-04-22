import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      const isMobileNow = window.innerWidth < MOBILE_BREAKPOINT;
      setIsMobile((prev) => (prev !== isMobileNow ? isMobileNow : prev));
    };
    mql.addEventListener("change", onChange);
    const isMobileNow = window.innerWidth < MOBILE_BREAKPOINT;
    setIsMobile((prev) => (prev !== isMobileNow ? isMobileNow : prev));
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}

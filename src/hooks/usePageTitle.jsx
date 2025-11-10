import { useEffect } from "react";

export const usePageTitle = (title, suffix = "DevyTrailTales") => {
   useEffect(() => {
      if (title) {
         document.title = `${title} | ${suffix}`;
      } else {
         document.title = suffix;
      }
   }, [title, suffix]);
};

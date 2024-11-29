import React from "react";

export default function Wrapper({
   children,
   ...props
}: {
   children: React.ReactNode;
}) {
   return (
      <>
         <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            color={"currentColor"}
            fill={"none"}
            {...props}
         >
            {children}
         </svg>
      </>
   );
}

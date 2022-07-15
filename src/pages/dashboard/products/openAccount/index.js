/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Text from "../../../../components/Typography/Typography";

export default function OpenAccount() {
  const location = useLocation();

  useEffect(() => {
    let mounted = false;
    (async () => {
      mounted = true;
      if (mounted) {
        console.log(window?.location);
        if (location?.state !== null) {
          console.log("coming from product page");
        } else {
          const myString = location?.pathname.replace("/products/open_account/", "");
          const decodedString = atob(myString);
          const splitted = decodedString.split("-");
          console.log(splitted);
        }
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      <Text variant="h1" weight="bold">
        Open account
      </Text>
    </>
  );
}

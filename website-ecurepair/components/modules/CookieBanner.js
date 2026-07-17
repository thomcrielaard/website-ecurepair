"use client";

import Title from "@/components/text/Title";
import Text from "../text/Text";
import Colors from "@/styles/Colors";
import Button from "./Button";
import Clear from "@/assets/svg/Clear";

import { getLocalStorage, setLocalStorage } from "@/services/StorageHelper";
import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [cookies, setCookies] = useState(null);
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookies", null);

    setCookies(storedCookieConsent);
    setPageLoaded(true);
  }, [setCookies]);

  useEffect(() => {
    if (cookies !== null) {
      const newValue = cookies ? "granted" : "denied";

      window.gtag("consent", "update", {
        ad_storage: newValue,
        analytics_storage: newValue,
        ad_user_data: newValue,
        ad_personalization: newValue,
      });

      setLocalStorage("cookies", cookies);
    }
  }, [cookies]);

  return (
    <>
      {cookies === null && pageLoaded && (
        <div className="w-full fixed bottom-0 right-0 z-50 bg-gray-800 flex flex-col items-center px-3 py-5 max-w-100 gap-2.5 shadow-[0px_0px_10px_5px_#00000040]">
          <button
            className="bg-transparent border-0 m-0 p-0 absolute top-2.5 right-2.5 hover:cursor-pointer"
            onClick={() => setCookies(false)}
          >
            <Clear width={16} color={Colors.LIGHTGRAY} />
          </button>
          <Title size="md" text="Cookies" className="text-gray-200" />
          <Text
            className="m-0 text-gray-200"
            align="center"
            text="Om onze site optimaal te laten presteren hanteren wij cookies. "
          />
          <div className="mt-2 flex justify-center">
            <Button
              text="Accepteren"
              className="text-gray-200 border-gray-200 hover:text-white hover:border-white"
              onClick={() => setCookies(true)}
              isButton
            />
          </div>
        </div>
      )}
    </>
  );
}

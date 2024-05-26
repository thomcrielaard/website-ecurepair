"use client";

import styles from "@/styles/modules/CookieBanner.module.scss";
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
        <div className={styles.Banner}>
          <button
            className={styles.RejectButton}
            onClick={() => setCookies(false)}
          >
            <Clear width={16} color={Colors.LIGHTGRAY} />
          </button>
          <Title size="mc" text="Cookies" color={Colors.LIGHTWHITE} />
          <Text
            style={{ margin: 0 }}
            align="center"
            text="Om onze site optimaal te laten presteren hanteren wij cookies. "
            color={Colors.LIGHTWHITE}
          />
          <div className={styles.ButtonWrapper}>
            <Button
              text="Accepteren"
              color={Colors.LIGHTWHITE}
              borderColor={Colors.LIGHTWHITE}
              backgroundColor="transparent"
              hoverColor={Colors.WHITE}
              hoverBorderColor={Colors.WHITE}
              onClick={() => setCookies(true)}
              isButton
            />
          </div>
        </div>
      )}
    </>
  );
}

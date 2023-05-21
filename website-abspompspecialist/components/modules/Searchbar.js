import * as React from "react";

import UseDimensions from "@/services/UseDimensions";
import Breakpoints from "@/styles/Breakpoints";
import Colors from "@/styles/Colors";

import Title from "@/components/text/Title";
import Text from "@/components/text/Text";
import Button from "@/components/modules/Button";
import MagnifyingGlass from "@/assets/svg/MagnifyingGlass";

export default function Searchbar(props) {
  const size = UseDimensions();

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: size.width < Breakpoints.sm ? "column" : "row",
          width: "100%",
          maxWidth: 750,
          gap: 30,
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              gap:
                size.width < Breakpoints.sm
                  ? 5
                  : size.width < Breakpoints.md
                  ? 10
                  : 40,
              height: "100%",
              flexDirection: size.width < Breakpoints.sm ? "column" : "row",
            }}
          >
            <select
              className="select-search"
              style={{
                width: "100%",
                height: "100%",
                background: "transparent",
                border: 0,
                color: Colors.GRAY,
                fontFamily: "lato",
                fontSize: 18,
                fontWeight: 600,
              }}
              defaultValue={"DEFAULT"}
            >
              <option value="DEFAULT" disabled style={{ fontWeight: 500 }}>
                Selecteer merk
              </option>
              <option value="opel" style={{ fontWeight: 500 }}>
                Opel
              </option>
            </select>
            {size.width < Breakpoints.sm && (
              <div
                style={{
                  height: 1,
                  width: "100%",
                  backgroundColor: `${Colors.GRAY}50`,
                  marginBottom: 10,
                }}
              />
            )}
            <select
              className="select-search"
              style={{
                width: "100%",
                height: "100%",
                background: "transparent",
                border: 0,
                color: Colors.GRAY,
                fontFamily: "lato",
                fontSize: 18,
                fontWeight: 600,
              }}
              defaultValue={"DEFAULT"}
            >
              <option value="DEFAULT" disabled style={{ fontWeight: 500 }}>
                Selecteer model
              </option>
              <option value="astra" style={{ fontWeight: 500 }}>
                Astra
              </option>
            </select>
            {size.width < Breakpoints.sm && (
              <div
                style={{
                  height: 1,
                  width: "100%",
                  backgroundColor: `${Colors.GRAY}50`,
                  marginBottom: 10,
                }}
              />
            )}
            <select
              className="select-search"
              style={{
                width: "100%",
                height: "100%",
                background: "transparent",
                border: 0,
                color: Colors.GRAY,
                fontFamily: "lato",
                fontSize: 18,
                fontWeight: 600,
              }}
              defaultValue={"DEFAULT"}
            >
              <option value="DEFAULT" disabled style={{ fontWeight: 500 }}>
                Selecteer type
              </option>
              <option value="opel" style={{ fontWeight: 500 }}>
                H 2000 - 2006
              </option>
            </select>
            {size.width < Breakpoints.sm && (
              <div
                style={{
                  height: 1,
                  width: "100%",
                  backgroundColor: `${Colors.GRAY}50`,
                }}
              />
            )}
          </div>
          {size.width >= Breakpoints.sm && (
            <div style={{ display: "flex", width: "100%" }}>
              <div
                style={{
                  backgroundColor: Colors.RED,
                  width: "30%",
                  height: 2,
                }}
              />
              <div
                style={{
                  backgroundColor: `${Colors.RED}50`,
                  width: "70%",
                  height: 2,
                }}
              />
            </div>
          )}
        </div>
        <div style={{ display: "flex" }}>
          <Button
            text={
              <div style={{ display: "flex", gap: 10 }}>
                ZOEKEN <MagnifyingGlass width={20} fill={Colors.WHITE} />
              </div>
            }
            borderColor={Colors.RED}
            backgroundColor={Colors.RED}
            color={Colors.WHITE}
          />
        </div>
      </div>
    </div>
  );
}

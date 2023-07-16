import * as React from "react";

import UseDimensions from "@/services/UseDimensions";
import Breakpoints from "@/styles/Breakpoints";
import Colors from "@/styles/Colors";

import Button from "@/components/modules/Button";
import MagnifyingGlass from "@/assets/svg/MagnifyingGlass";
import Clear from "@/assets/svg/Clear";

export default function Searchbar(props) {
  const size = UseDimensions();

  const inputRef = React.useRef(null);
  const selectBrandRef = React.useRef(null);
  const selectTypeRef = React.useRef(null);

  const [selectedMerk, setSelectedMerk] = React.useState(props.merk ?? null);
  const [selectedType, setSelectedType] = React.useState(props.type ?? null);
  const [inputWidth, setInputWidth] = React.useState(160);
  const [types, setTypes] = React.useState([]);

  const [barWidth, setBarWidth] = React.useState(0);

  const updateModules = () => {
    if (props.updateModules != undefined)
      props.updateModules(
        inputRef.current?.value,
        selectBrandRef.current?.value,
        selectTypeRef.current?.value
      );
  };

  const changeMerk = (merk) => {
    const selectedValue = merk;
    const brand = props.MT.find((item) => item.id === parseInt(selectedValue));
    if (brand) {
      setTypes(brand.types);
      setBarWidth(48);
      setSelectedType(null);
      selectTypeRef.current.value = "DEFAULT";
    }
    updateModules();
  };

  const changeType = () => {
    setBarWidth(100);
    updateModules();
  };

  const handleInputChange = () => {
    updateModules();
    const inputValue = inputRef.current.value;
    if (inputValue === "") {
      setInputWidth(160);
      return;
    }
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    context.font = "18px lato"; // Set the font size and family to match the input
    const width = Math.ceil(context.measureText(inputValue).width);
    setInputWidth(width + 8);
  };

  React.useEffect(() => {
    if (inputRef.current && props.text) {
      inputRef.current.value = props.text;
      handleInputChange();
    }

    if (selectBrandRef.current && props.merk && props.merk != "DEFAULT") {
      changeMerk(props.merk);
      setSelectedMerk(props.merk);
      selectBrandRef.current.value = props.merk;
    }

    if (selectTypeRef.current && props.type && props.type != "DEFAULT") {
      setSelectedType(props.type);
    }
  }, [props.text, props.merk]);

  React.useEffect(() => {
    if (selectedType) {
      selectTypeRef.current.value = selectedType;
      changeType();
    }
  }, [selectedMerk]);

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
          <div style={{ paddingBottom: size.width < Breakpoints.sm ? 10 : 20 }}>
            {props.showButton ? (
              <form method="GET" action="/reparaties">
                <input
                  type="text"
                  name="onderdeel"
                  placeholder="Onderdelen zoeken"
                  className="searchbar-input"
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "transparent",
                    border: 0,
                    color: Colors.GRAY,
                    fontFamily: "lato",
                    fontSize: 18,
                    fontWeight: 600,
                    borderBottom: 0,
                    padding: "0 4px",
                  }}
                  ref={inputRef}
                  onChange={handleInputChange}
                />
              </form>
            ) : (
              <input
                type="text"
                name="search"
                placeholder="Onderdelen zoeken"
                className="searchbar-input"
                style={{
                  width: "100%",
                  height: "100%",
                  background: "transparent",
                  border: 0,
                  color: Colors.GRAY,
                  fontFamily: "lato",
                  fontSize: 18,
                  fontWeight: 600,
                  borderBottom: 0,
                  padding: "0 4px",
                }}
                ref={inputRef}
                onChange={handleInputChange}
              />
            )}

            {size.width >= Breakpoints.sm && (
              <div style={{ display: "flex", width: "100%", marginTop: 2 }}>
                <div
                  style={{
                    backgroundColor: Colors.RED,
                    width: `min(${inputWidth}px, 100%)`,
                    height: 2,
                    transition: "all .3s ease-out",
                  }}
                />
                <div
                  style={{
                    backgroundColor: `${Colors.RED}50`,
                    flex: 1,
                    height: 2,
                  }}
                />
              </div>
            )}
          </div>

          <div style={{ display: "flex", gap: 10 }}>
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
                flex: 1,
                flexDirection: size.width < Breakpoints.sm ? "column" : "row",
              }}
            >
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
                className="select-search hover"
                ref={selectBrandRef}
                name="merk"
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
                onChange={(e) => changeMerk(e.target.value)}
              >
                <option value="DEFAULT" disabled style={{ fontWeight: 500 }}>
                  Selecteer merk
                </option>
                {props.MT.map((brand, key) => (
                  <option
                    key={key}
                    value={brand.id}
                    style={{ fontWeight: 500 }}
                  >
                    {brand.naam}
                  </option>
                ))}
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
                className={`select-search ${
                  types.length === 0 ? "select-disabled" : "hover"
                }`}
                ref={selectTypeRef}
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
                disabled={types.length === 0}
                onChange={(e) => changeType(e.target.value)}
              >
                <option value="DEFAULT" disabled style={{ fontWeight: 500 }}>
                  Selecteer onderdeel
                </option>
                {types.map((type, key) => (
                  <option key={key} value={type.id} style={{ fontWeight: 500 }}>
                    {type.naam}
                  </option>
                ))}
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

            <button
              className="hover"
              style={{
                border: 0,
                backgroundColor: "transparent",
                width: 18,
                padding: 0,
                marginLeft: "auto",
                position: "relative",
                zIndex: 1,
              }}
              onClick={() => {
                setTypes([]);

                inputRef.current.value = "";
                selectBrandRef.current.value = "DEFAULT";
                setSelectedType(null);
                selectTypeRef.current.value = "DEFAULT";

                setBarWidth(0);
                handleInputChange();
              }}
              aria-label="Selectie wissen"
            >
              <Clear width={12} color={Colors.GRAY} />
            </button>
          </div>
          {size.width >= Breakpoints.sm && (
            <div style={{ display: "flex", width: "100%", marginTop: 2 }}>
              <div
                style={{
                  backgroundColor: Colors.RED,
                  width: `${barWidth}%`,
                  transition: "all .3s ease-out",
                  height: 2,
                }}
              />
              <div
                style={{
                  backgroundColor: `${Colors.RED}50`,
                  flex: 1,
                  height: 2,
                }}
              />
            </div>
          )}
        </div>

        {props.showButton && (
          <div style={{ display: "flex" }}>
            <Button
              text={
                <div
                  style={{ display: "flex", alignSelf: "flex-start", gap: 10 }}
                >
                  ZOEKEN <MagnifyingGlass width={20} fill={Colors.WHITE} />
                </div>
              }
              borderColor={Colors.RED}
              backgroundColor={Colors.RED}
              color={Colors.WHITE}
              style={{ alignSelf: "center" }}
              href={`/reparaties?onderdeel=${
                inputRef.current?.value ?? "DEFAULT"
              }&merk=${selectBrandRef.current?.value ?? "DEFAULT"}&type=${
                selectTypeRef.current?.value ?? "DEFAULT"
              }`}
            />
          </div>
        )}
      </div>
    </div>
  );
}

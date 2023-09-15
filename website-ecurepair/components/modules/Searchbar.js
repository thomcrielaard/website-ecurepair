import * as React from "react";

import styles from "@/styles/modules/Searchbar.module.scss";

import Colors from "@/styles/Colors";

import Button from "@/components/modules/Button";
import MagnifyingGlass from "@/assets/svg/MagnifyingGlass";
import Clear from "@/assets/svg/Clear";

export default function Searchbar(props) {
  const inputRef = React.useRef(null);
  const selectBrandRef = React.useRef(null);
  const selectPartRef = React.useRef(null);

  const [selectedMerk, setSelectedMerk] = React.useState(props.merk ?? null);
  const [selectedPart, setSelectedPart] = React.useState(props.part ?? null);
  const [inputWidth, setInputWidth] = React.useState(160);
  const [barWidth, setBarWidth] = React.useState(0);

  const [parts, setParts] = React.useState(props.initialParts ?? []);

  React.useEffect(() => {
    if (inputRef.current && props.text) {
      inputRef.current.value = props.text;
      handleInputChange();
    }

    if (selectBrandRef.current && props.merk && props.merk != "DEFAULT") {
      setSelectedMerk(props.merk);
      changeMerk(props.merk, props.part);
      selectBrandRef.current.value = props.merk;
    }

    if (selectPartRef.current && props.part && props.part != "DEFAULT") {
      setSelectedPart(props.part);
      changePart();
      selectPartRef.current.value = props.part;
    }
    updateModules();
  }, [props.text, props.merk, props.part]);

  const updateModules = () => {
    if (props.updateModules != undefined)
      props.updateModules(
        inputRef.current?.value,
        selectBrandRef.current?.value,
        selectPartRef.current?.value
      );
  };

  const changeMerk = (merk, clearPart = true) => {
    const selectedValue = merk;
    const brand = props.MP.find((item) => item.id === parseInt(selectedValue));
    if (brand) {
      setParts(brand.parts);
      setBarWidth(48);
      if (clearPart) {
        setSelectedPart(null);
        selectPartRef.current.value = "DEFAULT";
      }
      updateModules();
    }
  };

  const changePart = () => {
    setBarWidth(100);
    updateModules();
  };

  const handleInputChange = () => {
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
    updateModules();
  };

  return (
    <div className={styles.SearchbarContainer}>
      <div className={styles.SearchbarWrapper}>
        <div className={styles.Searchbar}>
          <div className={styles.SearchbarFormWrapper}>
            {props.showButton ? (
              <form method="GET" action="/onderdelen">
                <input
                  type="text"
                  name="onderdeel"
                  placeholder="Onderdelen zoeken"
                  className={`${styles.SearchbarInput} searchbar-input`}
                  ref={inputRef}
                  onChange={handleInputChange}
                />
              </form>
            ) : (
              <input
                type="text"
                name="search"
                placeholder="Onderdelen zoeken"
                className={`${styles.SearchbarInput} searchbar-input`}
                ref={inputRef}
                onChange={handleInputChange}
              />
            )}

            <div className={styles.SearchbarIndicationbar}>
              <div
                className={styles.SearchbarIndication}
                style={{
                  width: `min(${inputWidth}px, 100%)`,
                }}
              />
              <div className={styles.SearchbarIndicationFill} />
            </div>
          </div>

          <div className={styles.SearchbarSelectContainer}>
            <div className={styles.SearchbarSelectWrapper}>
              <div className={styles.SearchbarMobileSeparator} />

              <select
                className={`${styles.SearchbarInput} select-search hover`}
                ref={selectBrandRef}
                name="merk"
                defaultValue={"DEFAULT"}
                onChange={(e) => changeMerk(e.target.value)}
              >
                <option value="DEFAULT" disabled>
                  Selecteer merk
                </option>
                {props.MP.map((brand, key) => (
                  <option key={key} value={brand.id}>
                    {brand.naam}
                  </option>
                ))}
              </select>

              <div className={styles.SearchbarMobileSeparator} />

              <select
                className={`select-search 
                ${styles.SearchbarInput} 
                ${parts.length === 0 ? "select-disabled" : "hover"}`}
                ref={selectPartRef}
                defaultValue={"DEFAULT"}
                disabled={parts.length === 0}
                onChange={(e) => changePart(e.target.value)}
              >
                <option value="DEFAULT" disabled>
                  Selecteer onderdeel
                </option>
                {parts.map((part, key) => (
                  <option key={key} value={part.id}>
                    {part.naam}
                  </option>
                ))}
              </select>

              <div className={styles.SearchbarMobileSeparator} />
            </div>

            <button
              className={`${styles.SearchbarClear} hover`}
              onClick={() => {
                setParts([]);

                inputRef.current.value = "";
                selectBrandRef.current.value = "DEFAULT";
                selectPartRef.current.value = "DEFAULT";
                setSelectedMerk(null);
                setSelectedPart(null);

                setBarWidth(0);
                handleInputChange();
                updateModules();
              }}
              aria-label="Selectie wissen"
            >
              <Clear width={12} color={Colors.GRAY} />
            </button>
          </div>
          <div className={styles.SearchbarIndicationbar}>
            <div
              className={styles.SearchbarIndication}
              style={{
                width: `${barWidth}%`,
              }}
            />
            <div className={styles.SearchbarIndicationFill} />
          </div>
        </div>

        {props.showButton && (
          <div style={{ display: "flex" }}>
            <Button
              text={
                <div className={styles.SearchbarButton}>
                  ZOEKEN <MagnifyingGlass width={20} fill={Colors.WHITE} />
                </div>
              }
              borderColor={Colors.RED}
              backgroundColor={Colors.RED}
              color={Colors.WHITE}
              style={{ alignSelf: "center" }}
              href={`/onderdelen?${
                inputRef.current?.value && inputRef.current.value != ""
                  ? `onderdeel=${inputRef.current.value}&`
                  : ""
              }merk=${selectedMerk ?? "DEFAULT"}&part=${
                selectedPart ?? "DEFAULT"
              }`}
            />
          </div>
        )}
      </div>
    </div>
  );
}

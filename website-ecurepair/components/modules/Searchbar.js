import * as React from "react";

import styles from "@/styles/modules/Searchbar.module.scss";

import UseDimensions from "@/services/UseDimensions";
import Colors from "@/styles/Colors";

import Button from "@/components/modules/Button";
import MagnifyingGlass from "@/assets/svg/MagnifyingGlass";
import Clear from "@/assets/svg/Clear";

export default function Searchbar(props) {
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
    <div className={styles.SearchbarContainer}>
      <div className={styles.SearchbarWrapper}>
        <div className={styles.Searchbar}>
          <div className={styles.SearchbarFormWrapper}>
            {props.showButton ? (
              <form method="GET" action="/reparaties">
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
                {props.MT.map((brand, key) => (
                  <option key={key} value={brand.id}>
                    {brand.naam}
                  </option>
                ))}
              </select>

              <div className={styles.SearchbarMobileSeparator} />

              <select
                className={`select-search 
                ${styles.SearchbarInput} 
                ${types.length === 0 ? "select-disabled" : "hover"}`}
                ref={selectTypeRef}
                defaultValue={"DEFAULT"}
                disabled={types.length === 0}
                onChange={(e) => changeType(e.target.value)}
              >
                <option value="DEFAULT" disabled>
                  Selecteer onderdeel
                </option>
                {types.map((type, key) => (
                  <option key={key} value={type.id}>
                    {type.naam}
                  </option>
                ))}
              </select>

              <div className={styles.SearchbarMobileSeparator} />
            </div>

            <button
              className={`${styles.SearchbarClear} hover`}
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
              href={`/reparaties?
              onderdeel=${inputRef.current?.value ?? "DEFAULT"}
              &merk=${selectBrandRef.current?.value ?? "DEFAULT"}
              &type=${selectTypeRef.current?.value ?? "DEFAULT"}`}
            />
          </div>
        )}
      </div>
    </div>
  );
}

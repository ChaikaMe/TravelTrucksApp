import icons from "../../img/icons.svg";
import FilterFragment from "../FilterFragment/FilterFragment";
import StyledToggleButton from "../StyledToggleButton/StyledToggleButton";
import css from "./FilterType.module.css";
import { useState } from "react";

export default function FilterType({ setType }) {
  const [selected, setSelected] = useState({ form: "" });

  const handleClick = (value) => {
    setSelected({ form: value });
    setType({ form: value });
  };

  return (
    <FilterFragment title="Vehicle type">
      <StyledToggleButton
        value="panelTruck"
        selected={selected.form === "panelTruck"}
        onClick={() => handleClick("panelTruck")}
      >
        <svg className={css.icon}>
          <use href={`${icons}#icon-van`} />
        </svg>
        Van
      </StyledToggleButton>

      <StyledToggleButton
        value="fullyIntegrated"
        selected={selected.form === "fullyIntegrated"}
        onClick={() => handleClick("fullyIntegrated")}
        sx={{
          "&.MuiToggleButton-root": {
            p: "4px 16px",
          },
        }}
      >
        <svg className={css.icon}>
          <use href={`${icons}#icon-fully-integrated`} />
        </svg>
        Fully Integrated
      </StyledToggleButton>

      <StyledToggleButton
        value="alcove"
        selected={selected.form === "alcove"}
        onClick={() => handleClick("alcove")}
      >
        <svg className={css.icon}>
          <use href={`${icons}#icon-alcove`} />
        </svg>
        Alcove
      </StyledToggleButton>
    </FilterFragment>
  );
}

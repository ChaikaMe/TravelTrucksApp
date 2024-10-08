import FilterFragment from "../FilterFragment/FilterFragment";
import StyledToggleButton from "../StyledToggleButton/StyledToggleButton";
import icons from "../../img/icons.svg";
import css from "./FilterEquipment.module.css";

export default function FilterEquipment({ equipment, setEquipment }) {
  const handleClick = (addedEquipment) => {
    const updatedEquipment = { ...equipment };
    if (addedEquipment === "transmission") {
      updatedEquipment.transmission === "manual"
        ? (updatedEquipment.transmission = "automatic")
        : (updatedEquipment.transmission = "manual");
    } else {
      if (updatedEquipment[addedEquipment]) {
        updatedEquipment[addedEquipment] = false;
      } else {
        updatedEquipment[addedEquipment] = true;
      }
    }
    setEquipment(updatedEquipment);
  };

  return (
    <FilterFragment title="Vehicle equipment">
      <StyledToggleButton
        value="ac"
        onClick={() => handleClick("AC")}
        selected={equipment.AC}
      >
        <svg className={css.icon}>
          <use href={`${icons}#icon-ac`} />
        </svg>
        AC
      </StyledToggleButton>
      <StyledToggleButton
        value="automatic"
        onClick={() => handleClick("transmission")}
        selected={equipment.transmission === "automatic"}
      >
        <svg className={css.icon}>
          <use href={`${icons}#icon-automatic`} />
        </svg>
        Automatic
      </StyledToggleButton>
      <StyledToggleButton
        value="kitchen"
        onClick={() => handleClick("kitchen")}
        selected={equipment.kitchen}
      >
        <svg className={css.icon}>
          <use href={`${icons}#icon-kitchen`} />
        </svg>
        Kitchen
      </StyledToggleButton>
      <StyledToggleButton
        value="tv"
        onClick={() => handleClick("TV")}
        selected={equipment.TV}
      >
        <svg className={css.icon}>
          <use href={`${icons}#icon-tv`} />
        </svg>
        TV
      </StyledToggleButton>
      <StyledToggleButton
        value="bathroom"
        onClick={() => handleClick("bathroom")}
        selected={equipment.bathroom}
      >
        <svg className={css.icon}>
          <use href={`${icons}#icon-bathroom`} />
        </svg>
        Bathroom
      </StyledToggleButton>
    </FilterFragment>
  );
}

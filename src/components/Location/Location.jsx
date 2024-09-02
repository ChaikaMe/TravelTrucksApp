import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import icons from "../../img/icons.svg";
import css from "./Location.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeLocation } from "../../redux/filters/slice-filter";

export default function Location() {
  const [activeIcon, setActiveIcon] = useState(false);
  const dispatch = useDispatch();

  return (
    <label className={css.labelContainer}>
      Location
      <TextField
        id="location"
        placeholder="City"
        variant="outlined"
        autoComplete="off"
        fullWidth
        sx={{
          "& .MuiOutlinedInput-root": {
            backgroundColor: "var(--inputs)",
            borderRadius: "12px",
            fontFamily: "Inter, sans-serif",
            height: 56,
            "& fieldset": {
              borderRadius: "12px",
              border: "none",
            },
          },
        }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <svg className={activeIcon ? css.activeIcon : css.icon}>
                  <use href={`${icons}#icon-map`} />
                </svg>
              </InputAdornment>
            ),
          },
        }}
        onFocus={() => {
          setActiveIcon(true);
        }}
        onBlur={(e) => {
          if (e.target.value != "") {
            return;
          }
          setActiveIcon(false);
        }}
        onChange={(e) => dispatch(changeLocation(e.target.value))}
      />
    </label>
  );
}

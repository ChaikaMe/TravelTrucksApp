import { styled, ToggleButton } from "@mui/material";

const StyledToggleButton = styled(ToggleButton)({
  borderRadius: "10px",
  backgroundColor: "inherit",
  transition: "var(--animation)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "8px",
  border: "1px solid var(--gray-light)",
  width: "112px",
  height: "96px",
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "1.5em",
  letterSpacing: "-0.01em",
  color: "var(--main)",
  textTransform: "none",
  "&.Mui-selected": {
    backgroundColor: "inherit",
    border: "1px solid var(--button)",
  },
});

export default StyledToggleButton;

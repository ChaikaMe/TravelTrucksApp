import { TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import css from "./BookingForm.module.css";
import { DatePicker } from "@mui/x-date-pickers";
import Button from "../Button/Button";
import dayjs from "dayjs";
import toast from "react-hot-toast";
import { useRef } from "react";

export default function BookingForm() {
  const fieldStyles = {
    "& .MuiOutlinedInput-root": {
      backgroundColor: "var(--inputs)",
      borderRadius: "12px",
      fontFamily: "Inter, sans-serif",
      height: 60,
      "& fieldset": {
        borderRadius: "12px",
        border: "none",
      },
    },
  };

  const commentFieldStyles = {
    "& .MuiOutlinedInput-root": {
      backgroundColor: "var(--inputs)",
      borderRadius: "12px",
      fontFamily: "Inter, sans-serif",
      "& fieldset": {
        borderRadius: "12px",
        border: "none",
      },
    },
  };

  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    formRef.current.reset();
    toast.success("Successfully booked!");
  };
  return (
    <form
      className={css.form}
      autoComplete="off"
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <div>
        <h3>Book your campervan now</h3>
        <p className={css.text}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <div className={css.fieldsContainer}>
        <TextField
          required
          type="text"
          fullWidth
          placeholder="Name*"
          sx={fieldStyles}
        />
        <TextField
          required
          type="email"
          fullWidth
          placeholder="Email*"
          sx={fieldStyles}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker sx={fieldStyles} minDate={dayjs()} />
        </LocalizationProvider>
        <TextField
          type="text"
          fullWidth
          placeholder="Comment"
          multiline
          rows={4}
          sx={commentFieldStyles}
        />
      </div>
      <div className={css.formButtonContainer}>
        <div className={css.formButton}>
          <Button text={"Send"} type={"submit"} />
        </div>
      </div>
    </form>
  );
}

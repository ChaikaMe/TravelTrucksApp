import css from "./Button.module.css";

export default function Button({ text, type }) {
  return (
    <button className={css.button} type={type}>
      {text}
    </button>
  );
}

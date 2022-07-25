import classes from "./CssModules.module.scss";

export const CssModules = () => {
  return (
    <div className={classes.container}>
      <p>- Css Modules-</p>
      <button className={classes.button}>FIGHT</button>
    </div>
  );
};

import classes from "../UI/global.module.scss";
import { useState } from "react";
import arrow from "../icons/arrowUp.svg";

function TypeFilter({
  settypeIsOpen,
  setstyleIsOpen,
  setsearchIsOpen,
  setcountOnPageIsOpen,
  typeIsOpen,
  setTypedData,
  filteredData,
}) {
  const [typeRes, settypeRes] = useState("All Types");

  async function handleSelect(value) {
    setTypedData(() =>
      filteredData.filter((el) => {
        if (value === "All Types") {
          return true;
        }
        return (
          el.types[0].type.name.toLowerCase() === value.toLowerCase() ||
          el.types[1]?.type.name.toLowerCase() === value.toLowerCase()
        );
      })
    );
    settypeRes(value);
    settypeIsOpen(false);
  }

  return (
    <div>
      <div
        className={classes["select-type"]}
        onClick={() => {
          settypeIsOpen((prev) => !prev);
          setstyleIsOpen(false);
          setsearchIsOpen(false);
          setcountOnPageIsOpen(false);
        }}
      >
        {typeRes ? typeRes : "All Types"}
        {typeIsOpen ? (
          <img width="20" height="20" src={arrow} alt="img" />
        ) : (
          <img
            className={classes["arrow-down"]}
            width="20px"
            height="20px"
            src={arrow}
            alt="img"
          />
        )}
      </div>

      {typeIsOpen ? (
        <div className={classes["element-types"]}>
          <div
            className={classes["type"]}
            onClick={(e) => handleSelect(e.target.textContent)}
          >
            All Types
          </div>
          <div
            className={classes["type"]}
            onClick={(e) => handleSelect(e.target.textContent)}
          >
            Normal
          </div>
          <div
            className={classes["type"]}
            onClick={(e) => handleSelect(e.target.textContent)}
          >
            Fighting
          </div>
          <div
            className={classes["type"]}
            onClick={(e) => handleSelect(e.target.textContent)}
          >
            Flying
          </div>
          <div
            className={classes["type"]}
            onClick={(e) => handleSelect(e.target.textContent)}
          >
            Poison
          </div>
          <div
            className={classes["type"]}
            onClick={(e) => handleSelect(e.target.textContent)}
          >
            Ground
          </div>
          <div
            className={classes["type"]}
            onClick={(e) => handleSelect(e.target.textContent)}
          >
            Rock
          </div>
          <div
            className={classes["type"]}
            onClick={(e) => handleSelect(e.target.textContent)}
          >
            Bug
          </div>
          <div
            className={classes["type"]}
            onClick={(e) => handleSelect(e.target.textContent)}
          >
            Ghost
          </div>
          <div
            className={classes["type"]}
            onClick={(e) => handleSelect(e.target.textContent)}
          >
            Steel
          </div>
          <div
            className={classes["type"]}
            onClick={(e) => handleSelect(e.target.textContent)}
          >
            Fire
          </div>
          <div
            className={classes["type"]}
            onClick={(e) => handleSelect(e.target.textContent)}
          >
            Water
          </div>
          <div
            className={classes["type"]}
            onClick={(e) => handleSelect(e.target.textContent)}
          >
            Grass
          </div>
          <div
            className={classes["type"]}
            onClick={(e) => handleSelect(e.target.textContent)}
          >
            Electric
          </div>
          <div
            className={classes["type"]}
            onClick={(e) => handleSelect(e.target.textContent)}
          >
            Psychic
          </div>
          <div
            className={classes["type"]}
            onClick={(e) => handleSelect(e.target.textContent)}
          >
            Ice
          </div>
          <div
            className={classes["type"]}
            onClick={(e) => handleSelect(e.target.textContent)}
          >
            Dragon
          </div>
          <div
            className={classes["type"]}
            onClick={(e) => handleSelect(e.target.textContent)}
          >
            Dark
          </div>
          <div
            className={classes["type"]}
            onClick={(e) => handleSelect(e.target.textContent)}
          >
            Fairy
          </div>
          <div
            className={classes["type"]}
            onClick={(e) => handleSelect(e.target.textContent)}
          >
            Shadow
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default TypeFilter;

import classes from "../UI/global.module.scss";
import arrow from "../icons/arrowUp.svg";

function StyleFilter({
  setstyleIsOpen,
  settypeIsOpen,
  setsearchIsOpen,
  setcountOnPageIsOpen,
  styleIsOpen,
  setTypedData,
  setFilteredData,
  typedData,
  styleRes,
  setStyleRes,
}) {
  async function handleSelect(value) {
    setStyleRes(value);
    if (value === "Highest To Lowest Number") {
      const data = typedData.sort((a, b) => b.id - a.id);
      setFilteredData(data);
      setTypedData(data);
    } else if (value === "Lowest To Highest Number") {
      const data = typedData.sort((a, b) => a.id - b.id);
      setFilteredData(data);
      setTypedData(data);
    } else if (value === "A-Z") {
      const data = typedData.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();

        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      setFilteredData(data);
      setTypedData(data);
    } else if (value === "Z-A") {
      const data = typedData
        .sort((a, b) => {
          const nameA = a.name.toLowerCase();
          const nameB = b.name.toLowerCase();

          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        })
        .reverse();

      setFilteredData(data);
      setTypedData(data);
    }
    setstyleIsOpen(false);
  }

  return (
    <div>
      <div
        className={classes["select-style"]}
        onClick={() => {
          setstyleIsOpen((prev) => !prev);
          settypeIsOpen(false);
          setsearchIsOpen(false);
          setcountOnPageIsOpen(false);
        }}
      >
        {styleRes ? styleRes : "Lowest To Highest Number"}
        {styleIsOpen ? (
          <img width="20px" height="20px" src={arrow} alt="img" />
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
      {styleIsOpen ? (
        <div className={classes["element-style"]}>
          <div onClick={(e) => handleSelect(e.target.textContent)}>
            Lowest To Highest Number
          </div>
          <div onClick={(e) => handleSelect(e.target.textContent)}>
            Highest To Lowest Number
          </div>
          <div onClick={(e) => handleSelect(e.target.textContent)}>A-Z</div>
          <div onClick={(e) => handleSelect(e.target.textContent)}>Z-A</div>
        </div>
      ) : null}
    </div>
  );
}

export default StyleFilter;

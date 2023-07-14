import React, { useEffect, useRef, useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import classes from "../UI/global.module.scss";
import "../UI/style.scss";
import SearchFilter from "./SearchFilter";
import TypeFilter from "./TypeFilter";
import StyleFilter from "./StyleFilter";
import CountOnPage from "./CountOnPage";

const FilterBar = function ({
  data,
  setFilteredData,
  filteredData,
  countOnPageRes,
  setcountOnPageRes,
  setTypedData,
  typedData,
}) {
  const divRef = useRef(null);
  const [typeIsOpen, settypeIsOpen] = useState(false);
  const [searchIsOpen, setsearchIsOpen] = useState(false);
  const [styleIsOpen, setstyleIsOpen] = useState(false);
  const [countOnPageIsOpen, setcountOnPageIsOpen] = useState(false);
  const [styleRes, setStyleRes] = useState("");

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  useEffect(() => {
    const handler = (e) => {
      if (divRef.current && !divRef.current.contains(e.target)) {
        setsearchIsOpen(false);
      }
    };

    document.addEventListener("click", handler);

    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <Wrapper>
      <div className={classes["filters-bar"]}>
        <SearchFilter
          typedData={typedData}
          setTypedData={setTypedData}
          divRef={divRef}
          setstyleIsOpen={setstyleIsOpen}
          settypeIsOpen={settypeIsOpen}
          setcountOnPageIsOpen={setcountOnPageIsOpen}
          data={data}
          searchIsOpen={searchIsOpen}
          setsearchIsOpen={setsearchIsOpen}
        />
        <div className={classes["type-style"]}>
          <TypeFilter
            settypeIsOpen={settypeIsOpen}
            setstyleIsOpen={setstyleIsOpen}
            setsearchIsOpen={setsearchIsOpen}
            setcountOnPageIsOpen={setcountOnPageIsOpen}
            typeIsOpen={typeIsOpen}
            setTypedData={setTypedData}
            filteredData={filteredData}
          />
          <StyleFilter
            setstyleIsOpen={setstyleIsOpen}
            settypeIsOpen={settypeIsOpen}
            setsearchIsOpen={setsearchIsOpen}
            setcountOnPageIsOpen={setcountOnPageIsOpen}
            styleIsOpen={styleIsOpen}
            setTypedData={setTypedData}
            setFilteredData={setFilteredData}
            typedData={typedData}
            styleRes={styleRes}
            setStyleRes={setStyleRes}
          />
        </div>
        <CountOnPage
          settypeIsOpen={settypeIsOpen}
          setsearchIsOpen={setsearchIsOpen}
          setstyleIsOpen={setstyleIsOpen}
          setcountOnPageIsOpen={setcountOnPageIsOpen}
          countOnPageRes={countOnPageRes}
          countOnPageIsOpen={countOnPageIsOpen}
          setcountOnPageRes={setcountOnPageRes}
        />
      </div>
    </Wrapper>
  );
};

export default FilterBar;

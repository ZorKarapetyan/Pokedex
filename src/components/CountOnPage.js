import classes from "../UI/global.module.scss"
import arrow from "../icons/arrowUp.svg"

function CountOnPage({settypeIsOpen, setsearchIsOpen, setstyleIsOpen, setcountOnPageIsOpen, countOnPageRes, countOnPageIsOpen, setcountOnPageRes}){

    async function handleSelect(value){
           setcountOnPageRes(value);
           setcountOnPageIsOpen(false)
       return 1
   }

    return(
        <div className={classes['countOnPage']}>
                    <span>Show per page:</span>
                    <div>
                        <div className={classes['select-countOnPage']} onClick={() => {setcountOnPageIsOpen((prev) => !prev)
                            settypeIsOpen(false)
                            setsearchIsOpen(false)
                            setstyleIsOpen(false)
                    }}
                        
                        >
                            {countOnPageRes ? countOnPageRes : 20}
                            {countOnPageIsOpen ? <img width="20px" height="20px" src={arrow} alt="img" />: <img className={classes["arrow-down"]} width="20px" height="20px" src={arrow} alt="img" />}  
                        </div>
                        
                        
                        {countOnPageIsOpen ? 
                        <div className={classes["countOfPage-element"]}>
                            <div onClick={(e) => handleSelect(e.target.textContent, "count")}>10</div>    
                            <div onClick={(e) => handleSelect(e.target.textContent, "count")}>20</div>    
                            <div onClick={(e) => handleSelect(e.target.textContent, "count")}>50</div>    
                        </div> : null   
                        }
                    </div>
                </div>
    )
}

export default CountOnPage
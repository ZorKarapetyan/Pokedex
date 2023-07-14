import Wrapper from "../Wrapper/Wrapper";
import classes from "../UI/global.module.scss"
import { useState, useRef } from "react" 


function SearchFilter({typedData, setTypedData, divRef, setstyleIsOpen, settypeIsOpen, setcountOnPageIsOpen, data, searchIsOpen, setsearchIsOpen}){
    const buttonRef = useRef(null);
    const [searchInp, setsearchInp] = useState("");
    const [searchRes, setsearchRes] = useState("");
    const [searchedTextIsOpen, setsearchedTextIsOpen] = useState(false);
    const searchRef = useRef("");


    function handleSearch(value){
        setsearchIsOpen(true)
        const prevData = typedData
        const res = [];
        for(let element of typedData){
            if(value.length > 0){        
                        if(element.name.toLowerCase().includes(value)){
                            res.push(element)  
                        }
            } else if(value.length === 0){
                setTypedData(prevData)
            }

            if(res.length === 5){
                break;
            }
    }
        return res
    }

    function clickSearch(value = ''){

        if(!value.length){
            setTypedData(data)
        }
        else{

            const newData = typedData.filter(el => {
                const str = el.name;
                const str2 = str.charAt(0).toUpperCase() + str.slice(1);
                return str2.toLowerCase().includes(value)         
            })
            setTypedData(newData)
            setsearchedTextIsOpen(true)
            setsearchIsOpen(false)
        }
 
    }


    return (
        <Wrapper>
        <div className={classes['search-menu']} ref={divRef}>
                    <input  value={searchInp} type="text" maxLength="30" placeholder="Search by name" ref={searchRef} className={classes['search-inp']}  onClick={(e) => {
                        setstyleIsOpen(false)
                        settypeIsOpen(false)
                        setcountOnPageIsOpen(false)
                        handleSearch(e.target.value)
                    }}
                    onKeyDown={(e) => {
                        if(e.key === "Enter"){
                            buttonRef.current.focus()
                    }
                    }}
                    onChange={
                        (e) => {
                        setsearchInp(e.target.value)
                        handleSearch(e.target.value)
                        setsearchRes(handleSearch(e.target.value))
                        }}/>
                    <button className={classes['search-boo']} ref={buttonRef}
                    onClick={() => {clickSearch(searchRef.current.value)}}
                    onSubmit={() => {clickSearch(searchRef.current.value)}}
                    >
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                            <path className={classes['search-icon']}  d="m23.111 20.058-4.977-4.977a9.767 9.767 0 0 0 1.523-5.251c0-5.42-4.409-9.83-9.829-9.83C4.408 0 0 4.41 0 9.83s4.408 9.83 9.829 9.83a9.764 9.764 0 0 0 5.022-1.383l5.021 5.021c2.144 2.141 5.384-1.096 3.239-3.24zM3.047 9.83c0-3.739 3.043-6.782 6.782-6.782s6.782 3.042 6.782 6.782-3.043 6.782-6.782 6.782-6.782-3.043-6.782-6.782zm2.01-1.764c1.984-4.599 8.664-4.066 9.922.749a7.002 7.002 0 0 0-9.922-.749z"></path>
                        </svg>
                    </button>
        </div>
        <div className={classes['search-elements']}> 
                {searchRes.length > 0 && searchInp && searchIsOpen ? searchRes.map(element => {
                    return <div onClick={() => {
                        const str = element.name;
                        const str2 = str.charAt(0).toUpperCase() + str.slice(1);
                        setsearchInp(str2)
                        setsearchIsOpen(false)
                        clickSearch(element.name)
                    } 
                    
                    }
                    >{element.name}</div>
                }) : null }
        </div>
        <div className={classes['searched-text']}>
                {searchedTextIsOpen && searchRef.current.value.length ? "Showing matches for ' " + searchRef.current.value + "'" : null }   
        </div>
        </Wrapper>
    )
}

export default SearchFilter
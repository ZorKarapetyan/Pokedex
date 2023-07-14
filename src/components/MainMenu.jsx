import React, { useState } from "react";
import classes from "../UI/global.module.scss"
import Wrapper from "../Wrapper/Wrapper";
import "../UI/style.scss"
import { useNavigate } from "react-router-dom";
import {v4 as uuid} from 'uuid'

function MainMenu({ countOnPageRes,typedData, isLoaded}) {
    const [currentPage, setCurrentPage] = useState(1)
    const [firstvalue, setFirstValue] = useState(1)
    const [lastvalue, setLastValue] = useState(7)

    const pagesCount = Math.ceil(typedData.length / countOnPageRes)
    const pageItems = [];

    const navigate = useNavigate()

    function pokemonNumber(val){
        let newStr = ""
        if(val < 10){
            newStr = "#00" + val;
        } else if(val > 9 && val < 100){
            newStr = "#0" + val;
        } else{
            newStr = "#" + val
        }
        return newStr
    }

    if(lastvalue <= pagesCount){
    if(currentPage > Math.ceil((firstvalue + lastvalue) / 2)){
        setFirstValue(prev => prev + 1)
        setLastValue(prev => prev + 1)
     }
    }

    if(pagesCount < 7){
        for(let i = firstvalue; i <= pagesCount; i++){
            pageItems.push(<button className={classes["boo-element"]} onClick={
                () => setCurrentPage(i) 
            }
            style = {currentPage === i?{color:'white', backgroundColor: "#397f84"}:{}}
            key={uuid()}>{i}</button>)
        }
    } else{
        for(let i = firstvalue ; i <= lastvalue; i++){
            pageItems.push(<button className={classes["boo-element"]} onClick={
                () => setCurrentPage(i) 
            }
            style = {currentPage === i?{color:'white', backgroundColor: "#397f84"}:{}}
            key={uuid()}
                >{i}</button>)
        }
    }

    return (
        <Wrapper>
            {isLoaded? 
            <div className={classes['main-menu']}>
                {!typedData.length?
                <div className={classes['loading']}>Nothing Was Found</div>:
                typedData.map((el, i) => {
                    if(i >= (currentPage - 1) * countOnPageRes  && i < countOnPageRes * (currentPage)){
                    const str = el.name;
                    const str2 = str[0].toUpperCase() + str.slice(1);
                    return (
                        <div key={uuid()} className={classes['item']} >
                            <div className={classes['item-img-div']} onClick={() => navigate(`/pokemon/${el.name}`)} key = {uuid()}>
                                 <img width="100%" height="100%" src={el.sprites.other["official-artwork"]["front_default"]} alt="img" key = {i + 999}/>     
                            </div>
                            <div className={classes['item-name']} key = {i+1001}>{str2}</div>
                            <div key = {uuid()}>{pokemonNumber(el.id)}</div>
                            <div key = {uuid()}>{el.types[0].type.name }{ el.types[1]?.type.name && ', ' +  el.types[1]?.type.name }</div>
                        </div>
                    )
                }
                }) 
                }
            </div>: <div className={classes['loading']}>Loading...</div>
            }
            <div className={classes["button-bar"]} key  = {uuid()} > 
                <button className={classes["boo-element"]} onClick={() => setCurrentPage(prev =>{
                    if(currentPage > 1){
                        setFirstValue(prev => prev-1 > 0?prev-1:prev)
                        setLastValue(prev => prev-1 >=7? prev-1:prev)

                        return prev -1
                    }
                    return prev
                })} key = {uuid()}>prev</button>
                {
                    pageItems
                }
                <button className={classes["boo-element"]} onClick={() => setCurrentPage(prev =>{
                    if(currentPage < pagesCount){
                        setLastValue(prev => prev+1 < currentPage?prev+1:prev)
                        
                        return prev +1
                    }
                    return prev
                })} key = {uuid()}>next</button>
            </div>
        </Wrapper>
    )
}



export default MainMenu
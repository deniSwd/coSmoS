import React, {useState} from 'react';
import style from "./Paginator.module.css";


const Paginator = ({totalItemsCount, pageSize, currentPage, onPostChanged, fractionSize = 10}) => {
    let pageCount = Math.ceil(totalItemsCount / pageSize)
    let page = []
    for (let i = 1; i <= pageCount; i++) {
        page.push(i)
    }

    let fractionCount = Math.ceil(pageCount / fractionSize)
    let [fractionNumber, setFractionNumber] = useState(1)
    let leftElementFraction = ((fractionNumber - 1) * fractionSize) + 1
    let rightElementFraction = fractionNumber * fractionSize

    return (
        <div className={style.content}>
            {fractionNumber > 1 &&
            <button onClick={() => {
                setFractionNumber(fractionNumber - 1)
            }}>{'<...'}</button>}

            {page
                .filter(p => p >= leftElementFraction && p <= rightElementFraction)
                .map(p => {
                    return <span className={currentPage === p ? style.selectedPage : style.noSelectedPage}
                                 onClick={(event) => {
                                     onPostChanged(p)
                                 }}>{p}</span>
                })}
            {fractionNumber < fractionCount &&
            <button onClick={() => {
                setFractionNumber(fractionNumber + 1)
            }}>{'...>'}</button>}

        </div>
    )
}
export default Paginator
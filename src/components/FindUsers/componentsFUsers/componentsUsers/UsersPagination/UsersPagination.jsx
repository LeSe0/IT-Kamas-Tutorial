import React from "react";
import c from './UsersPagination.module.css'

function Pagination(props){
    let pages = [];

    for(let i = 1 ; i <= props.pagesCount ; i++){
        pages.push(i)
    }

    let firstCheck = props.initialPage == pages[0]
    let secondCheck = props.initialPage == pages[pages.length - 1]
    let thirdCheck = props.initialPage - 1 == pages[0]
    let forthCheck = props.initialPage + 1 == pages[pages.length - 1]

    let paginationPages = firstCheck ? pages.slice(1 , props.initialPage + props.pagesCountOS) : 
        secondCheck ? pages.slice(0 - (1 + props.pagesCountOS) , pages.length - 1) : 
        thirdCheck ? pages.slice(props.initialPage - 1 , props.initialPage + 3) :
        forthCheck ? pages.slice(0 - (props.pagesMargin + 4), 0 - props.pagesMargin) :
        pages.slice(props.initialPage - (props.pagesMargin + 1) , props.initialPage + props.pagesMargin)

    return <>
           <div className = {c.pagesCountContainer}>
                    <span className = {props.initialPage === pages[0] ? `${c.currentPage} ${c.firstPage}` 
                            : `${c.firstPage} ${c.page} ${c.button}`} 
                        onClick ={() =>{
                                props.changePage(pages[0])
                    }}>{pages[0]}</span>
                    <div className = {props.initialPage - 1 > pages[0] ? `${c.leftArrows} ${c.arrows} ${c.button}` : 
                            c.disabledArrow} 
                        onClick = {() =>{
                            props.initialPage - 1 < 1 ? props.changePage(props.pagesCount) : 
                            props.changePage(props.initialPage - 2)
                    }}>
                        <span><i className = "fas fa-angle-double-left" ></i> </span>
                    </div>
                    {paginationPages.map((el , i) =>{
                        return (
                            <span className = {props.initialPage === el ? `${c.currentPage}` : `${c.page} ${c.button}`} 
                            onClick = {() =>{props.changePage(el)}}>{el}</span>
                        )
                    })}
                    <div className = {props.initialPage + 1 < pages[pages.length - 1] ?
                            `${c.rightArrows} ${c.arrows} ${c.button}` : c.disabledArrow}
                        onClick = {() =>{
                            props.initialPage + 1 > props.pagesCount ? props.changePage(1) : 
                            props.changePage(props.initialPage + 2)
                        }}>
                        <span> <i className ="fas fa-angle-double-right"></i> </span>
                    </div>
                    <span className = {props.initialPage === pages[pages.length - 1] ? `${c.currentPage} ${c.lastPage}` 
                            : `${c.lastPage} ${c.page} ${c.button}`} 
                        onClick ={() =>{
                            props.changePage(pages[pages.length - 1])
                    }}>{pages[pages.length - 1]}</span>   
            </div>
    </>
}

export default Pagination
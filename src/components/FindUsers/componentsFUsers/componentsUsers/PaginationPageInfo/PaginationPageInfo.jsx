import React from "react";
import c from './PaginationPageInfo.module.css'

function PaginationPageInfo(props){
    return <>
        <div className = {c.pageInfoContainer}>
            <div className = {`${c.totalUsers} ${c.container}`}>
                <span className ={c.pagesCount}>{props.totalUsers}</span> 
                Users
            </div>
            <div className = {`${c.currentPage} ${c.container}`}>    
                Page
                <span className = {c.currentPageContent}> {props.initialPage}/{props.pagesCount}</span>
            </div>
        </div>
    </>
}

export default PaginationPageInfo
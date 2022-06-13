import React, {memo, useReducer} from "react";
import {reducer, TOGGLE_CONSTANT} from "./reducer";

type AccordionPropsType = {
    titleValue: string
   // collapsed: boolean
}


 export const UncontrolledAccordion = memo( (props: AccordionPropsType )=> {
    console.log("Accordion rendering")
let [collapsed, dispatch] = useReducer(reducer, {collapsed:false})
    return <div>
        <AccordionTitle title={props.titleValue}  onClick={() => {
        dispatch({type: TOGGLE_CONSTANT}) } }/>
        {!collapsed && <AccordionBody/>} {/*заменяет if else*/}
    </div>
})

type AccordionTitlePropsType = {
    title: string
    onClick:()=> void
}
function AccordionTitle (props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return <h3 onClick={()=> {props.onClick()}}>{props.title}</h3>
        }

function AccordionBody () {
    console.log("AccordionBody rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}
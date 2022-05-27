import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";


export default {
    title: 'Accordion',
    component: Accordion
}
const callback = action('Accordion mode change event fired')
const onClickCallback = action('some item was clicked')

export const CollapsedMode = () => <Accordion titleValue={'menu'} collapsed={true} onChange={callback} items={[]} onClick={onClickCallback}/>;//свернуто
export const UsersUnCollapsedMode = () => <Accordion titleValue={'users'} collapsed={false} onChange={callback} items={[
    {title:'inna', value:1} ,
    {title:'dima', value: 2},
    {title:'vasya', value: 3},
    {title:'viktor', value:4}
]} onClick={onClickCallback} />;
export const ModeChanging = ()=> {
    const [value, setValue] = useState<boolean>(true)
return <Accordion titleValue={'users'} collapsed={value} onChange={()=> setValue(!value)}
                  items={[
                      {title:'inna', value:1},
                      {title:'dima', value: 2},
                      {title:'vasya', value: 3},
                      {title:'viktor', value:4}
                  ]}  onClick={onClickCallback}/>
}
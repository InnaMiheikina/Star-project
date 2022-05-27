import {Select} from "./Select";
import {useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'select',
    component: Select
}

export const WithValue = () => {
    const [value, setValue] = useState('2');
    return <>
        <Select value={value}
                onChange={setValue}
                items={[
                    {value: '1', title: 'Minsk'},
                    {value: '2', title: 'Moscow'},
                    {value: '3', title: 'kiev'}]}/>
    </>
}
export const WithoutValue = () => {
    return <>
        <Select onChange={action('Value changed')}
                items={[
                    {value: '1', title: 'Minsk'},
                    {value: '2', title: 'Moscow'},
                    {value: '3', title: 'kiev'}]}/>
    </>
}

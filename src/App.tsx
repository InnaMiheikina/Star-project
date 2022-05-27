import React, {useState} from 'react';
import './App.css';
import {Rating,RatingValueType} from './components/Rating/Rating';
import {Accordion} from "./components/Accordion/Accordion";
import {UnControlledOnOff} from './components/UnControlledOnOff/UnControlledOnOff'
import {UncontrolledAccordion} from "./components/UnControlledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UnControlledRaring/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";


function App () {
    let[ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let[accordionCollapsed, setAccordionCollapsed] =useState<boolean>(false);
    let [switchOn, setSwitchOn] = useState<boolean>(false);
  return (
      <div className={"App"}>
          {/*<OnOff on={} onChange={} />*/}
          <UnControlledOnOff onChange={setSwitchOn} /> {switchOn. toString()}
          {/*<UnControlledOnOff on={switchOn} onChange={()=>setSwitchOn(switchOn)}/>*/}
          <PageTitle title={'hello'}/>
          <UncontrolledAccordion titleValue={'menu'} />
         <Accordion titleValue={'menu'}
                    collapsed={accordionCollapsed}
                    onChange={()=>setAccordionCollapsed(!accordionCollapsed)}
                    items={[]}
                    onClick={()=>{}}
         />
          {/*<UncontrolledRating />*/}
          <Rating value={ratingValue} onClick = {setRatingValue} />
    </div>
  );
}
type PageTitlePropsType = {
    title: string
}

function  PageTitle(props: PageTitlePropsType){
  return <h1> {props.title}</h1>
}




export default App;

import React, {useState} from 'react';
import './App.css';
import {Rating,RatingValueType} from './components/Rating/Rating';
import Accordion from "./components/Accordion/Accordion";
import {UnControlledOnOff} from './components/UnControlledOnOff'
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {OnOff} from "./components/OnOff";


function App () {
    let[ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let[accordionCollapsed, setAccordionCollapsed] =useState<boolean>(false);
    let [switchOn, setSwitchOn] = useState<boolean>(false);
  return (
      <div className={"App"}>
          <OnOff on={} onChange={} />
          <UnControlledOnOff onChange={setSwitchOn} /> {switchOn. toString()}
          {/*<UnControlledOnOff on={switchOn} onChange={()=>setSwitchOn(switchOn)}/>*/}
          <PageTitle title={'hello'}/>
          <UncontrolledAccordion titleValue={'menu'} />
         <Accordion titleValue={'menu'}
                    collapsed={accordionCollapsed}
                    onChange={()=>setAccordionCollapsed(!accordionCollapsed)}/>
          <UncontrolledRating />
          <Rating value={ratingValue} onClick = {setRatingValue} />
         {/* <img src = {"https://sun2.mts-by-minsk.userapi.com/s/v1/if1/BIB1wbuY39arTXnUBobaLO7cOFklcC3h_dNeSWO8qIu7rFs3-z7-nxmF8GfblZxWcTGLNQ.jpg?size=50x50&quality=96&crop=4,5,990,990&ava=1"} />
          <PageTitle title = {"This is  APP component"} />
          <PageTitle title = {"My friends"} />
          Article 1
        <Rating value={2} />
        <Accordion titleValue ={"Menu"} collapsed={true}/>
          <Accordion titleValue ={"Users"} collapsed={false}/>
          Article 2
          <Rating value={0}/>
          <Rating value={1}/>
          <Rating value={2}/>
          <Rating value={3}/>
          <Rating value={4}/>
          <Rating value={5}/>*/}
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

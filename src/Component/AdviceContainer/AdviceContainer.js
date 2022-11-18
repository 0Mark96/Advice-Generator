import style from './container.module.scss';
import { useEffect, useState } from 'react';
//component
import AdviceNumber from '../AdviceNumber/AdviceNumber';
import Quotes from '../Quotes/Quotes';
import Img from '../Img/Img';
import GenerateBtn from '../GenerateBtn/GenerateBtn';


const AdviceContainer = () => {
    const {advice_container} = style
   
    const [adviceData,setAdviceData] = useState({})
    const [isLoading,setIsLoading] = useState(false)

    const fetchAdvice = async()=>{
        setIsLoading(true)
        try{
          const response = await fetch('https://api.adviceslip.com/advice',{cache:'no-cache'}) // no cache -> fetching before the 2s limit of api
          const data = await response.json()
          setIsLoading(false)
          setAdviceData(data.slip)
          console.log('isFetching')
        }catch(err){
          setIsLoading(false)
          console.log(err)
          alert('Error: check console for more info')
        }
      }
   
      useEffect(()=>{
        fetchAdvice()
    },[])   
    
  return (
    <div className={advice_container}>
      <AdviceNumber num={adviceData?.id}/>
      <Quotes advice={adviceData?.advice}/>
      <Img />
      <GenerateBtn fetchAdvice={fetchAdvice} isLoading={isLoading}/>
    </div>
  )
}

export default AdviceContainer
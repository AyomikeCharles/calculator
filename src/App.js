import Buttons from './components/Buttons';
import './App.css'
import { useState,useEffect } from 'react';

function App() {



const [disValue, setDisValue] = useState([''])
const [results, setResults] = useState('')

const lastArrValue = (arr) =>{
  let opArr = ['+','-','/','*'];

  if (opArr.includes(arr[arr.length - 1])){
      return true;
  }else{
    return false;
  }

}



const operation = (evalVal) =>{
     
    
      if(lastArrValue(evalVal)){

        setResults('');

      }else if(evalVal.length>=3){
        
       let value = evalVal.toString();
        value = value.replace(/,/g, '');
       let sum = Function("return " + value)();
        setResults(sum)

      }
    }


    const equalto = () =>{
     
    
      if(lastArrValue(disValue)){

        return 'invalid operation';

      }else if(disValue.length>=3){
        
        setDisValue([results])
        setResults('')

      }
    }

    const cancel = () =>{
      let nArr = [...disValue];

      if(nArr==''){

        setDisValue([''])

      }else if(nArr[nArr.length - 1].length>='2'){
        

        nArr[nArr.length - 1]=nArr[nArr.length - 1].slice(0,-1)
        setDisValue(nArr)

        
      }else{
       
      
        nArr.pop()
        setDisValue(nArr)

      }
    }

    const reset = () =>{
     
        setDisValue([''])
        setResults('')

    }



useEffect(()=>{

  operation(disValue)
  
}, [disValue])

const addToVal = (val,type) =>{

  if(type ==='operation'){

    if(disValue[0]!=''){

        if(!lastArrValue(disValue)){
            setDisValue(disValue=>[...disValue,val])
        }else{
           let newArr = [...disValue];
        
            newArr[newArr.length - 1]= val
            setDisValue(newArr)
          
        }
      }


  }else{
      
      let newArr = [...disValue];
      
      if (lastArrValue(disValue)){
        if(val=='.'){
          setDisValue(disValue=>[...disValue,'0'+val])
        }else{
          setDisValue(disValue=>[...disValue,val])
        }
        } else{
          if(newArr[newArr.length - 1].length<15){
            newArr[newArr.length - 1]=newArr[newArr.length - 1] + val
            setDisValue(newArr)
          }else{
            alert('cannot exceed 15 digits')
          }
        }
      }
    }
   
   const values = [
   { value : 'CE', info : 'reset', clas:'cancel', action:reset },
  { value : 'C', info : 'cancel', clas:'cancel', action:cancel },
  { value : '*', info : 'operation', clas:'operate', action:addToVal },
  { value : '+', info : 'operation', clas:'operate', action:addToVal },
  { value : '1', info : 'one', clas:'number', action:addToVal },
  { value : '2', info : 'two', clas:'number', action:addToVal },
  { value : '3', info : 'three', clas:'number', action:addToVal },
  { value : '-', info : 'operation', clas:'operate', action:addToVal },
  { value : '4', info : 'four', clas:'number', action:addToVal },
  { value : '5', info : 'five', clas:'number', action:addToVal },
  { value : '6', info : 'six', clas:'number', action:addToVal },
  { value : '/', info : 'operation', clas:'operate', action:addToVal },
  { value : '7', info : 'seven', clas:'number', action:addToVal },
  { value : '8', info : 'eight', clas:'number', action:addToVal },
  { value : '9', info : 'nine', clas:'number', action:addToVal },
  { value : '=', info : 'equalto', clas:'operate', action:equalto },
  { value : '0', info : 'zero', clas:'number', action:addToVal },
  { value : '.', info : 'decimal', clas:'number', action:addToVal },

];
    

  return (
    <div className="App">
      <div className='display'>
        <div className='values'>{disValue}</div>
        <div className='answer'>{results}</div>
      </div>
      <div className="btns">
        {values.map((item, index)=>{
          return(
            <Buttons key = {index} class={item.clas} bntVal = {item.value} id={item.info} addVal={()=>item.action(item.value, item.info)}  />
            )
        })
      }
      </div>
    </div>
  );
}

export default App;

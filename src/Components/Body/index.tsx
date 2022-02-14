import { useState } from "react";
import { Container } from "./styles";


// Accepts 9 digits long values
export function Calculator(){
  const [value, setValue] = useState('0')
  const [oldValue, setOldValue] = useState(0)
  const [currentOperation, setCurrentOperation] = useState('')
  const [size, setSize] = useState(80)
  function changeValue(content: string){
    if (value.length > 8) {
      setSize(80-(3.2*(value.length-8)))
    } 
    if (value == '0') {
      setValue(content)
    } else {
      setValue((`${value}${content}`))
    }     
  }

  function resetValue(){
    if (value == '0'){
      completeReset()
    } else {
      setValue('0')
      setSize(80)
    }
  }

  function completeReset(){
    setValue('0')
    setOldValue(0)
    setCurrentOperation('')
    setSize(80)

  }

  function inverse(){
    setValue(`${Number(value) * -1}`)
  }

  function begginOperation(operation: string){
    switch(operation){
      case '+':
        setOldValue(Number(value.replace('...','')))
        setValue('0')
        setCurrentOperation('+')
        break
      case '-':
        setOldValue(Number(value.replace('...','')))
        setValue('0')
        setCurrentOperation('-')
        break
      case '*':
        setOldValue(Number(value.replace('...','')))
        setValue('0')
        setCurrentOperation('*')
        break
      case '/':
        setOldValue(Number(value.replace('...','')))
        setValue('0')
        setCurrentOperation('/')
        break
      case '%':
        setValue(`${Number(value.replace('...','')) / 100}`)
    }
  }

  function completeOperation(){
    let result = ''
    switch(currentOperation){
      case '+':
        result = `${Number(value.replace('...','')) + oldValue}`
        setOldValue(0)
        break

      case '-':
        result = `${ oldValue - Number(value.replace('...',''))}`
        setOldValue(0)
        break

      case '*':
        result = `${Number(value.replace('...','')) * oldValue}`
        setOldValue(0)
        break
        
      case '/':
        result = `${Number(value.replace('...','')) / oldValue}`
        setOldValue(0)
        break
      
    }
    if (result.length > 8){
      setSize(80-(3.2*(result.length-8)))
    } 
    setValue(result)

    }
    
  return(
    <Container>
      <body>
        <div className="display" style={{fontSize: size}}> {value}</div> 
        <div className="buttonArea">
          <button className="redText" onClick={resetValue}>C</button>
          <button className="redText" onClick={completeReset}>AC</button>
          <button className="greenText" onClick={()=>begginOperation('%')}>%</button>
          <button className="greenText" onClick={()=>begginOperation('/')} >÷</button>
          <button onClick={()=>changeValue('7')}>7</button>
          <button onClick={()=>changeValue('8')}>8</button>
          <button onClick={()=>changeValue('9')}>9</button>
          <button className="greenText" onClick={()=>begginOperation('*')}>X</button>
          <button onClick={()=>changeValue('4')}>4</button>
          <button onClick={()=>changeValue('5')}>5</button>
          <button onClick={()=>changeValue('6')}>6</button>
          <button className="greenText" onClick={()=>begginOperation('-')}>-</button>
          <button onClick={()=>changeValue('1')}>1</button>
          <button onClick={()=>changeValue('2')}>2</button>
          <button onClick={()=>changeValue('3')}>3</button>
          <button className="greenText" onClick={()=>begginOperation('+')}>+</button>
          <button onClick={inverse}>±</button>
          <button onClick={()=>changeValue('0')}>0</button>
          <button onClick={()=>changeValue('.')}>.</button>
          <button className="greenButton" onClick={completeOperation}>=</button>
        </div>
      </body>
    </Container>
  )
}
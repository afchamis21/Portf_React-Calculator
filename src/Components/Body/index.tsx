import { useState } from "react";
import { Container } from "./styles";


// Accepts 9 digits long values
export function Calculator(){
  const [value, setValue] = useState('0')
  const [oldValue, setOldValue] = useState(0)
  const [currentOperation, setCurrentOperation] = useState('')

  function changeValue(content: string){
    if (value.length > 8) {
      return
    } else {
      if (value == '0') {
        setValue(content)
      } else {
       setValue((`${value}${content}`))
      }
    }
     
  }

  function resetValue(){
    setValue('0')
  }

  function completeReset(){
    setValue('0')
    setOldValue(0)
    setCurrentOperation('')
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
      result = result.slice(0,9) + '...'
    } 
    setValue(result)

    }
  return(
    <Container>
      <h1>Numbers and Results bigger than 8 digits will cause errors</h1>
      <body>
        <div className="display">{value}</div> 
        <div className="buttonArea">
          <button onClick={resetValue}>C</button>
          <button onClick={completeReset}>AC</button>
          <button onClick={()=>begginOperation('%')}>%</button>
          <button onClick={()=>begginOperation('/')} >÷</button>
          <button onClick={()=>changeValue('7')}>7</button>
          <button onClick={()=>changeValue('8')}>8</button>
          <button onClick={()=>changeValue('9')}>9</button>
          <button onClick={()=>begginOperation('*')}>X</button>
          <button onClick={()=>changeValue('4')}>4</button>
          <button onClick={()=>changeValue('5')}>5</button>
          <button onClick={()=>changeValue('6')}>6</button>
          <button onClick={()=>begginOperation('-')}>-</button>
          <button onClick={()=>changeValue('1')}>1</button>
          <button onClick={()=>changeValue('2')}>2</button>
          <button onClick={()=>changeValue('3')}>3</button>
          <button onClick={()=>begginOperation('+')}>+</button>
          <button onClick={inverse}>±</button>
          <button onClick={()=>changeValue('0')}>0</button>
          <button onClick={()=>changeValue('.')}>.</button>
          <button className="GreenButton" onClick={completeOperation}>=</button>
        </div>
      </body>
    </Container>
  )
}
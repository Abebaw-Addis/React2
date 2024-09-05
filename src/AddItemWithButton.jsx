import React, { useState } from 'react'
import './Styles/item.css'

function AddItemWithButton() {
//     const things =  ['Thing 1', 'Thing 2']
//     function addItem(){
//         const newThingElement = `Thing ${arrayThings.length + 1}`
//         arrayThings.push(newThingElement)
//         console.log(arrayThings)
//     }

  const[things, addThings] = useState(['Thing 1', 'Thing 2'])
  const[num, setNum] = useState()
  const[inputNumber, setInputNumber] = useState()
  const[text, setText] = useState()
  const[inputText, setInputText] = useState()
  const[level, setLevel] = useState()

    let range = 50
    if(level === 'Very Easy'){
        range = 5
    } else if(level === 'Easy'){
        range = 20
    }else if(level === 'Moderate'){
        range = 50
    }else if(level === 'Hard'){
        range = 100
    }else if(level === 'Very Hard'){
        range = 1000
    }

    function generateRandNum(){
        const randNum = Math.floor(Math.random() * range)
        setNum(randNum)
    }
    function addThing(){
        // const newThingElement = `Thing ${things.length + 1}`
        addThings(t => [...t, `Thing ${things.length + 1}`])
        // things.push(newThingElement)
        // addThings(t => {
        //     return [...t, `Thing ${things.length + 1}`]})

    }
    function generateRandText(){
        const randThing = Math.floor(Math.random() * things.length)
        setText(things[randThing].toLowerCase())
    }
    function removeThing(index){
        addThings(things.filter((_, i) => i!==index))
    }
    const thingElements = things.map((thing, index) => <p key={thing} onClick={() => removeThing(index)}>{thing}</p>)

    return (
        <div className="item-lists1">
            <div className="item-lists">
                <select id="select-level" value={level} onChange={(e) =>{
                    setLevel(e.target.value)}}>
                    <option value="">Select Level</option>
                    <option value="Very Easy">Very Easy</option>
                    <option value="Easy">Easy</option>
                    <option value="Moderate">Moderate</option>
                    <option value="Hard">Hard</option>
                    <option value="Very Hard">Very Hard</option>
                </select>
            <input type='number' className='number-input' placeholder={'Guess A Number 0-'+range} 
                onChange={(e) => setInputNumber(e.target.value)} value={inputNumber}/>
            <input type="text" className="text-input" placeholder='Enter Your Guess Word'
                onChange={(e) => setInputText(e.target.value).toLowerCase()} value={inputText}/>
            <button className="button" onClick={generateRandNum}>Generate Number</button>
            <button className="button" onClick={generateRandText}>Generate Text</button>
            <h3>{inputNumber == num ? 'You Won' : 'You Loss'} Number: {num}</h3>
            <h3>{inputText === text ? 'You Won' : 'You Loss'} Text: {text}</h3></div>
            
            <div className="thing-list">
            <button className="button" onClick={addThing}>Add Thing</button>
            <div>{thingElements}</div></div>
        </div> 
      )

}

export default AddItemWithButton

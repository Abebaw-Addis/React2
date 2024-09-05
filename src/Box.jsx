import React from 'react'

function Box() {
    
    const squares = [{id:1, on: true},
                    {id:2, on: true},
                    {id:3, on: true},
                    {id:4, on: true},
                    {id:5, on: true},
                    {id:6, on: true},
                    {id:7, on: true},
                    {id:8, on: true},
                    {id:9, on: true},
                    {id:10, on: true}]
    
        const darkMode = squares.map(s => s.on)
        const styles = {
            backgroundColor: darkMode.on ? 'yellow' : 'white'
            }
    const sqaureElement = squares.map((square) => (
            <div className='square' key={square.id} style={styles}>
            </div>
    ))
    
    
  return (
    <div>
        {sqaureElement }
        {darkMode}
        
    </div>
  )
}

export default Box

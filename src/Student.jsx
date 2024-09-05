import React from 'react'


const studInfo = [{subCode:'000', subName:'English', subResult: 95},
    {subCode:'001', subName:'Amharic', subResult: 80},
    {subCode:'002', subName:'Mathematics', subResult: 91},
    {subCode:'003', subName:'History', subResult: 69},
    {subCode:'004', subName:'Science', subResult: 86},
    {subCode:'005', subName:'Computer', subResult: 97},
    ]

const info = studInfo.map((result) => 
    <table>
        <tr>
            <td>{result.subCode}</td>
            <td>{result.subName}</td>
            <td>{result.subResult}</td>
        </tr>
    </table>)
function Student() {
  return (
    <div>
           {info}

    </div>
  )
}

export default Student

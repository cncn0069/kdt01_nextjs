import React from 'react'

export default function FcstRecode({pm10, co2, co,no2, no, nox, o3, pm25, fad}) {

  return (
      <tr>
              <td>{pm10}</td>
              <td>{co2}</td>
              <td>{co}</td>
              <td>{no2}</td>
              <td>{no}</td>
              <td>{nox}</td>
              <td>{o3}</td>
              <td>{pm25}</td>
              <td>{fad}</td>
    </tr>
  )
}

// let categoryPart = category.substring(category.lastIndexOf('(') + 1, category.lastIndexOf(')')) ;
    
//     let importCode = CODE.filter(item => item["항목값"] == categoryPart)[0];

//     console.log(importCode["예보구분"]);
//     categoryPart = (importCode["예보구분"]);
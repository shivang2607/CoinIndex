import React from 'react'
import Table from 'react-bootstrap/Table'

export const CoinList = ({coinlist}) => {

    

    console.log(coinlist)
    let i = 0;
    return (
        <div style={{display:'flex', width:'98vw', justifyContent:'center',alignItems:'center', justifyItems:'center',justifySelf:'center', marginTop:'10px', padding:'0px',}}>
            {/* <h4>List of Currencies and their Values (refreshed after 15 seconds)</h4> */}
            <Table hover variant="dark" >
  <thead >
    <tr style={{width:'90vw', }}>
      <th>Sno.</th>
      <th>Currency Name</th>
      <th>Symbol</th>
      <th>Current Price (in ₹)</th>
      <th>Price Change (in 24 hr)</th>
    </tr>
  </thead>
  
        <tbody>{coinlist.map((key)=>{
            i++;
            let style = {}
            key['price_change_percentage_24h']<0?style = {color:'rgb(191, 55, 40)',fontWeight:'bold'}:style = {color:'rgb(55, 156, 30)',fontWeight:'bold'}
            return <>
                <tr>
                <td>{i} </td>
                <td>{key['name']} <img src={key['image']} alt="" style={{height:'25px', margin:'2px 20px'}}/> 
                </td>
                <td>{key['symbol']}  </td>
                {/* <td>{key['currency']}  </td> */}
                <td style = {style}>{key['current_price']}  </td>
                <td style = {style}>{key['price_change_24h']} (  {key['price_change_percentage_24h']}  %  )</td>
            </tr></>
            
            
        })}
        </tbody>
        

    {/* <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr> */}
    {/* <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
    </tr> */}
  
</Table>
        </div>
    )
}

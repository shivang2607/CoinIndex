import React from "react";


function Footer() {
  return(
     <>
     <div className="main-footer bottom" style = {{display:"flex",justifyContent:'center', justifyItems:'center',alignItems:'center', backgroundColor:'black', color:'white', fontweight:'bold', padding:'25px'}}>
     <div className= ".container">
       <div className="row">
         {/* column 1 */}
         <div className="col-md-3 col-sm-6" style = {{display:'flex'}}>
          
           {/* <ui classNamelist= "list-unstyled" style = {{display:'flex'}}>
             <li>bharat</li>
             <li>bharat</li>
             <li>bharat</li>
             <li>bharat</li>
           </ui> */}
         </div>
       </div>
  {/* {footer bottem} */}
  <div className="footer-bottom">
    <p className="text-xs-center" >
      &copy;{new Date().getFullYear()} City Guide App -All Rights reserved @Code Conquerors
    </p>
  </div>
     </div>
     </div>
     </>
  );
}
export default Footer;

// export default function Footer(props) {
//   return (
//     <div className="row fixed-bottom">
//       <button
//         className="btn btn-danger col-2"
//         onClick={() => {
//           props.resetQuantity();
//         }}
//       >
//         Reset
//       </button>
//       <div className="col-8 bg-dark text-white text-center">
//         {props.totalAmount}
//       </div>
//       <button className="btn btn-primary col-2">Pay Now</button>
//     </div>
//   );
// }

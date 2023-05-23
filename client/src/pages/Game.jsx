import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getId } from '../actions';
import image from "../img/game.jpg";

import Detail from "../styles/Detail.css";


function Game() {
  
  
  let dispatch = useDispatch();
  let {id}=useParams();


  let details =useSelector(state=>state.detail)

  useEffect(()=>{
   dispatch(getId(id))
  },[])
  
  
  return (
    <>


      <div className='firstContainer' key={details.id}>
           
         <div className='detailContainer'>
           
           <img className="gameImg "src= {details.image? details.image : image} alt="" width="580px"  height="400px"/>

            <div className="gameDetail">
           
            <h1>{details.name}</h1>
            <p> <strong> {details.released}</strong></p>

            {/* cuando mapeo a genres de la api entro sin name y cuando mapeo a genres de base de datos entro con name */}
            
            <div className='detailPlatform' ><strong>Platforms : </strong> {details.platforms?.map(e => <div key={e}> {"--" + e  }</div>)} </div>
            <p ><strong>Genre:</strong>{details.genres?.map(e => e).join(", ")}</p>
            <div><strong>Sinopsis: </strong>{<p dangerouslySetInnerHTML={{__html: details.description}}></p>}</div>
            <div  className="ratingDetail"> <strong> Rating:</strong> <p className='ratingDetails'>{details.rating}</p> </div>
            </div>

        </div>

      </div>

      
    
    
    
    </>
     

  )
}

export default Game



// // {/* <div className="firstContainer "key={details.id}>
// //             {   
                
// //                 details.nombre?
                
// //                 <div className="detailContainer" key="videoGameDetail.id">
// //                     <img className="gameImg" src={regexUrl.test(details.imagen)? details.imagen : img} alt="File Not Found" width="300px" hight="300px"/>
// //                     <div className="gameDetail"key={details.id}>
// //                         <h1>{details.name}</h1>
// //                         <p><strong>Released: </strong>{details.released}</p>
// //                         <div className="ratingDetail"><strong>puntaje: </strong><p className="ratingDetails">{details.puntuacion}</p></div>
// //                         <div className="detailPlatform"><strong>Materias: </strong>{details.materias?.map(e => <div key={e}>{e.name + " "}</div>)}</div>
                        
// //                         <div><strong>descripcion: </strong>{<p dangerouslySetInnerHTML={{__html: details.descripcion}}></p>}</div>
// //                     </div>
             
// //                 </div>
// //                   : <p className="loadingDetail">Loading...</p>
// //             }   

// //             <Link to="/home">
// //                 <button className="backBtnDetail">Back</button>
// //             </Link>

// //             </div> */}


// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom'
// import "./Detalle.css";
// import img from "../../view/PerfilProfesor/img/1.jpg";
// import { getProfesorById } from '../../redux/Actions/Profesor';




// export const Detalle = () => {
 
//  let {id} = useParams();
//  let dispatch = useDispatch();
//  let details = useSelector(state => state.profesores.detail); 
//    console.log(details) 
//  useEffect(()=>{
//   dispatch(getProfesorById(id))
//  },[])
//   return (
//       <>
    
//     <div className='firstContainer' key={details.id}>
           
//            <div className='detailContainer'>
             
//              <img className="profImg"src= {details.image? details.image : img} alt="" width="500px"  height="500px"/>
  
//                 <div className="gameDetail" key={details.id}>
             
//                   <h1>{details.nombre}</h1>
              
//                   <p><strong>Pais: </strong>{details.pais}</p>
//                   <div  className="puntajeDetail"> <strong> puntaje:</strong> <p className='puntajeDetails'>{details.puntuacion}</p> </div>
                 
//                   <div className="detailMateria"><p ><strong>materias:</strong>{details.materias?.map(e => e.name).join(", ")}</p></div> 
//                   <div className='detailPlatform' ><strong>Estudios: </strong> {details.estudios } </div>

//                    <div className='detailPlatform' ><strong>Email: </strong> {details.email} </div>
                   
                 
//               <div><strong>Sobre mi: </strong>{<p dangerouslySetInnerHTML={{__html: details.descripcion}}></p>}</div>
              
//               </div>
  
//           </div>
  
//         </div>
  
        
//      </> 
//   )
// }
// ////////
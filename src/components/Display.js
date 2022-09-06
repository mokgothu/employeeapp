import React from "react";


function Display(props) {
  const deleteemployee = ((id) => {
    props.delete(id)
  })

  return (


    
   
 <div className="card-container" >
 {props.data.map((employeeName) => (

        <div  class="col-lg-3,col">
          <div className="card-container">

            <div className="card"   style={{width:'18rem'}}>
              <div className="card-body">
                <h5 className="card-title">{employeeName.name}</h5>
                <h5 className="card-title">{employeeName.surname}</h5>
                <h5 className="card-title">{employeeName.number}</h5>
                <h5 className="card-title">{employeeName.employeeid}</h5>
                  
              <button id="btn"onClick={()=> deleteemployee(employeeName.id)}>DELETE</button>
                  
              </div>
            </div>
          </div>
        </div>


      ))}
    
    </div>




  )
}

export default Display;
import React from 'react'

export default function Actions({handleDelete , id}) {
    return (
        <div>
                
                
        <div className="btn-group " role="group">
        <button  className="btn btn-primary btn-sm ">
                EDIT
            </button>
        <button onClick={()=>{handleDelete(id)}} className="btn btn-danger btn-sm">DELETE</button>
        </div>
    </div>
    )
}

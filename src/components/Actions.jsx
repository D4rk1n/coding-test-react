import React from 'react'

export default function Actions({handleDelete,handleEdit , id}) {
    return (
        <div>
                
                
        <div className="btn-group " role="group">
        <button  onClick={()=>{handleEdit(id)}}  className="btn btn-light btn-sm ">
                EDIT
            </button>
        <button onClick={()=>{handleDelete(id)}} className="btn btn-danger btn-sm">DELETE</button>
        </div>
    </div>
    )
}

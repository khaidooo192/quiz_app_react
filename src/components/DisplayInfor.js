import React, { useEffect, useState } from "react";
import './DisplayInfor.scss'

const DisplayInfor = (props) => {
    const { listUsers } = props

    const [isShowHideListUsers, setShowHideListUser] = useState(true)

    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUsers)
    }

    useEffect(
        () => {
                if(listUsers.length===0){
                    alert('you deleted all user')
                }
        }, [listUsers])
    return (
        <div className="display-infor-container">
            <div>
                <span onClick={() => handleShowHideListUser()}>
                    {isShowHideListUsers === true ? "Hide list Users" : "Show list Users"}
                </span>
            </div>
            {isShowHideListUsers &&
                <>
                    {listUsers.map((user, index) => {
                        return (
                            <div key={user.id} className={+user.age > 18 ? 'green' : 'red'} >
                                <div>
                                    <div >My Name's {user.name}</div>
                                    <div>My Age's {user.age}</div>
                                </div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                </div>
                            </div>
                        )
                    })}
                </>
            }
        </div>
    )
}

export default DisplayInfor;
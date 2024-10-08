import React, { useState } from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfor from "./DisplayInfor";


const MyComponent = (props) => {
  const [listUsers, setListUsers] = useState(
    [
      { id: 1, name: 'Khải', age: 17 },
      { id: 2, name: 'Messi', age: 35 },
      { id: 3, name: 'Rolnado', age: 39 },
    ]
  );

  const handleAddNewUser = (userObj) => {
    let NewListUSers = [userObj, ...listUsers];
    console.log(NewListUSers);
    setListUsers(NewListUSers)

  }
  const handleDeleteUser = (userId) => {
    let listUsersClone = listUsers.filter(item => item.id !== userId)
    setListUsers(listUsersClone)

  }
  return (
    <>
      <AddUserInfo
        handleAddNewUser={handleAddNewUser}
      />
      <br />  <br />
      <DisplayInfor
        listUsers={listUsers}
        handleDeleteUser={handleDeleteUser}
      />
      <hr />
    </>
  )
}

export default MyComponent;
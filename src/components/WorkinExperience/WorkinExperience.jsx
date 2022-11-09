function WorkinExperience({usersData}){
    console.log(usersData)
    const userCard = usersData.map((user)=>{ 
        return(
        <ul> Work Experience
            <li> Company: {user.Company}</li>
            <li> Location: {user.Location}</li>
            <li> Employment Type: {user.EmploymentType}</li>
        </ul>
        )
    })
   
    
    return(
        <>
         <h2>Users Profiles</h2>
         {userCard}
    
      </>



    )
}
export default WorkinExperience;
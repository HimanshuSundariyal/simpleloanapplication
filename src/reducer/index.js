const iState = {
    error: false
  }
  const reducer = (state=iState, action) => {
    if(action.type ==='USER_LOGIN')
    {

      if(action.payload.message == 'success')
      {
       return { isuserlogin: "Yes", error: false, user_id:action.payload.data[0]['id'] }
      }

      if(action.payload.message == 'error')
      {
       return { isuserlogin: "No", error: true }
      }

     return state;
    }

    if(action.type ==='USER_SIGNUP')
    {
      if(action.payload == 'success')
      {
       return {usersignup_status: "Yes"}
      }
      if(action.payload == 'error')
      {
       return {usersignup_status: "No"}
      }

     return state;
    }
    
    if(action.type ==='USER_LOAN_APPLICATION')
    {
      if(action.payload == 'success')
      {
       return {application_success: "Yes"}
      }
      if(action.payload == 'error')
      {
       return {application_success: "No"}
      }
     return state;
    }



  return state;
  }
  
  export default reducer;
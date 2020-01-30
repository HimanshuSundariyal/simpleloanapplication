export const makeuserlogin = (username, password) => {
    return (dispatch) => {
        fetch(`http://localhost:4000/login/?username=${username}&password=${password}`)
        .then(res => res.json())
        .then(users => { 
            if(users.message == 'error')
            {
                dispatch({type: 'USER_LOGIN', payload:users})
            }
            if(users.message == 'success')
            {
                dispatch({type: 'USER_LOGIN', payload:users})
            }
    
         });
    }
}


export const usersignup = (username, password,email) => {
    const data = {
        username: username,
        password: password,
        email: email
    }
    return (dispatch) => {
        fetch(`http://localhost:4000/signup/`,{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
              },
              body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(users => { 
            if(users.message == 'error')
            {
                dispatch({type: 'USER_SIGNUP', payload:"error"})
            }
            if(users.message == 'success')
            {
                dispatch({type: 'USER_SIGNUP', payload:"success"})
            }
    
         });
    }
}








export const userloanapplication = (userID, amount, loanType) => {
    const data = {
        userID: userID,
        amount: amount,
        loanType: loanType
    }
    return (dispatch) => {
        fetch(`http://localhost:4000/loanapplication/`,{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
              },
              body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(users => { 
            if(users.message == 'error')
            {
                dispatch({type: 'USER_LOAN_APPLICATION', payload:"error"})
            }
            if(users.message == 'success')
            {
                dispatch({type: 'USER_LOAN_APPLICATION', payload:"success"})
            }
    
         });
    }
}


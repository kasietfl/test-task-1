import React from 'react'

function Login({isAuth, setStateFunc}) {

    const [formData, setFormData] = React.useState({
        username: "",
        password: "",
    })

    const [helper, setHelper] = React.useState(false)
    

    // React.useEffect(() => {
    //     localStorage.setItem("formData", JSON.stringify(formData))
    // }, [formData])
    
    function handleChange(event){
        const {name, value} = event.target
        setFormData(prevData => {
            return  {
                ...prevData,
                [name]: value}
        })
    }

   
    
    function handleSubmit(event) {
        event.preventDefault()
        
        if(formData.username === 'admin' && formData.password === '12345') {
            setStateFunc(true)
            window.location.replace('http://localhost:3000/profile');
            console.log("Successfully signed in")
        } else {
            setHelper(true)
            console.log("Enter correct username and password")
            return
        }
    }
   

  return (
    <div className='form-container'>
        <h1>Sign in</h1>
        <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Username"
                    className="form--input"
                    onChange={handleChange}
                    name="username"
                    value={formData.email}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    onChange={handleChange}
                    name="password"
                    value={formData.password}
                />
                {helper && <small className='form--helper'>*Enter correct username and password</small>}
                <button 
                    className="form--submit"
                >
                    Sign in
                </button>
            </form>
    </div>
  )
}

export default Login
import "./signup.css"

function Signup(prop){

    return <div> 
        <form action="" id="signupForm" onSubmit={prop.handleSubmit}>
            <h1>Sign Up</h1>
            <label htmlFor="">Username</label>
            <input 
                type="text" 
                value={prop.state.username} 
                placeholder="Enter Username" 
                name="username" 
                onChange={prop.handleChange}
                style={{outline : prop.userValid ? "2px solid green" : "2px solid red"}}
            />
            {prop.userValid ? <p className="errormsg">Username is Valid</p> : <p className="errormsg">Username is Invalid</p> }
            <label htmlFor="">Email</label>
            <input 
                type="text" 
                value={prop.state.email} 
                placeholder="Enter Email" 
                name="email" 
                onChange={prop.handleChange} 
                style={{outline : prop.emailValid ? "2px solid green" : "2px solid red"}}
            />
            {prop.emailValid ? <p className="errormsg">Email is Valid</p> : <p className="errormsg">Email is Invalid</p> }
            <label htmlFor="">Password</label>
            <input 
                type="text" 
                value={prop.state.password} 
                placeholder="Enter Password" 
                name="password" 
                onChange={prop.handleChange} 
                style={{outline : prop.passwordValid ? "2px solid green" : "2px solid red"}}
            />
            {prop.passwordValid ? <p className="errormsg">Password is Valid</p> : <p className="errormsg">Password is Invalid</p> }
            <div>
                <input type="submit" id="signupSubmit"/>
                <p onClick={prop.toggle}>Already have a account? Login</p>
            </div>
        </form>

        <div id="notification">
            <div id="success">
                <i className="fa-solid fa-xmark" id="Sclose"></i>
                <p className="head">Success</p>
                <p className="msg">Signup Successful</p>
            </div>
            <div id="error">
                <i className="fa-solid fa-xmark" id="Eclose"></i>
                <p className="head">Error</p>
                <p className="msg">Incorrect Validation</p>
            </div>
            <div id="info">
                <i className="fa-solid fa-xmark" id="Iclose"></i>
                <p className="head">Error</p>
                <p className="msg">Incorrect Password</p>
            </div>
        </div>
    </div>
}

export default Signup
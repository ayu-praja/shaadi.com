import React,{useState,useEffect} from "react";
export default function Login(props) {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
        
        useEffect(() => {
            props.handleSign(false);
        }, [])
        const handleLogin=()=>{
               if(login === 'foo' && password === 'bar'){
                    props.history.push('/Home');
                    props.handleSign(true);
               }
               else{
                   alert('wrong username/password')
               }
        }
        
        return (
            <>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" value={login} onChange={e=>setLogin(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password"  value={password} onChange={e=>setPassword(e.target.value)} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button  className="btn btn-primary btn-block" onClick={handleLogin}>Submit</button>
                {/* <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p> */}
            </>
        );
    
}
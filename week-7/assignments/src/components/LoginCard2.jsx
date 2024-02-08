import React,{useState, useRef} from 'react';

const LoginCard2 = () => {
    const [otp, setOTP] = useState(['','','',''])
    const inputRefs = useRef([])

    const handleChange = (index, value) => {
        const newOTP = [...otp]
        newOTP[index] = value
        setOTP(newOTP)

        if(value !== '' && index < otp.length - 1){
            inputRefs.current[index + 1].focus()
        }
    }

    const handleClick = () => {
        alert(otp.join(''))
        setOTP(['','','',''])
    }


    return <div className="loginCard">
        <h2>Login via OTP</h2>
        <div className="loginInputs">
            {otp.map((digit, index) => (
                <input type="number" key={index} 
                ref={el => (inputRefs.current[index] = el)}
                maxLength={1}
                value={digit}
                onChange={e => handleChange(index, e.target.value)} />
            ))}
        </div>
        <button onClick={handleClick}>Login</button>
    </div>

}

export default LoginCard2;
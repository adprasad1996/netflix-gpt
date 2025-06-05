export const checkValidData = (email, password)=> {
    const isEmailValid = /^[\w._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if(!isEmailValid) return  "Email is NOt Valid";
    if(!isPasswordValid) return "Password is not Valid"; 

    return null;
    



}
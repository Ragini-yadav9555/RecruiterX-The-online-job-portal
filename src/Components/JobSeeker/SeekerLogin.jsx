import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {useNavigate} from "react-router-dom";
import axios from 'axios';
const schema = yup
  .object()
  .shape({ 
     
    email: yup.string().required().email(), 
    password: yup.string().required(),
    
  })

 function SeekerLogin(){
         const navigate=useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
      });

      const handleData=async(data)=>{
          const payload={
            email:data.email,
            password:data.password
          }
      const response= await axios.post("http://localhost:9000/api/seeker-login",payload,{
            headers:{
                "Content-Type":"application/json"
            }
         })
   
   if(response.data.code==200){
            localStorage.setItem("data",JSON.stringify(response.data.data))
            localStorage.setItem("userType",JSON.stringify("seeker"))//nav use

    alert("Login Successfull")

    navigate('/seeker')
   }
   else if(response.data.code==302){ 
      alert("Invalid Email or Password!!!") 
}
else if(response.data.code==203){ 
    alert("Your Account is Blocked Contact to the Admin!!!") 
}


      }

    return(<>
    <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-10">
            <div className="row">
                <div className="col-sm-6 form_div_register recuiter_register">
                 <div className="seeker_img"></div>
                </div>
                <div className="col-sm-6 form_div_register ">
                    <h2 className="recruiter_signUp_text">Seeker <span style={{color: "#db0249"}}>Login</span></h2>
                <div className="p-4">
                <form onSubmit={handleSubmit(handleData)}>
                
                 
                <div className="row mb-4 ">
                    <input  className="form-control " 
                    placeholder="Enter Your email"
                    type="text"
                    {...register('email')}
                    />
                     {errors.email?.message && <span  className='error_msg'>{errors.email?.message}</span>}
                </div>  
                <div className="row mb-4">
                    <input  className="form-control " 
                    placeholder="Enter Your password"
                    type="password"
                    {...register('password')}
                    />
                    {errors.password?.message && <span  className='error_msg'>{errors.password?.message}</span>}
                </div> 
                <div className="row mb-4">
                    <input  className="register_submit form-control " 
                    type="submit"
                    value="LogIn"
                    />
                </div>
                </form>     
                </div>
                </div>
            </div>
        </div>
        <div className="col-sm-1"></div>
    </div>
    <br />
    <br />
    </>)
 }

 export default SeekerLogin;
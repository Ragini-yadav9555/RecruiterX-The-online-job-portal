import React from 'react';
import { useForm } from 'react-hook-form';    // Form Validation
import { yupResolver } from '@hookform/resolvers/yup';   // Form Validation
import * as yup from 'yup';   // Form Validation
import axios from 'axios';  // fetch data

// form validation schema
const schema = yup
  .object()
  .shape({
    name: yup.string().required().min(2).max(30),
    email: yup.string().required().email(),
    contact: yup.string().required(),
    password: yup.string().required(),
    jobLocation: yup.string().required(),
    image: yup.mixed().required(),
    resume: yup.mixed().required(),
    qualification: yup.string().required(),
    jobPreference: yup.string().required()
  })

const JobSeekerUpdate = () => {

// form validation useform Hook
const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const handleData = async(data) =>{
    const formData = new FormData();
    formData.append('name',data.name);
    formData.append('email',data.email);
    formData.append('contact',data.contact);
    formData.append('password',data.password);
    formData.append('jobLocation',data.jobLocation);
    formData.append('image',data.image[0]);
    formData.append('resume',data.resume[0]);
    formData.append('qualification', data.qualification);
    formData.append('jobPreference', data.jobPreference);
    // // API Calling
    // const response = await axios.post('http://localhost:9000/api/seeker-register', formData, {
    //   headers:{
    //     'Content-Type':'multipart/form-data'
    //   }
    // })
    // alert("Registration Successfull !")
  }

return(
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm form_card">
            <div className="card-header text-center form_cardheader">
              <h4 className="mb-0 form_h2">Seeker Profile Update</h4>
            </div>
            <div className="card-body p-4">
              <form onSubmit={handleSubmit(handleData)}>
                <div className="row mb-3">
                  <div className="col-md-6">
                  <div className="form-group">
                      <label className="mb-2 ms-1 mt-1 form_label">Name :</label>
                      <input {...register('name')} type="text" className="form-control" placeholder="Enter Your Name" />
                      {errors.name?.message && <span className='err_span'>{errors.name?.message}</span>}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="mb-2 ms-1 mt-1 form_label">Email :</label>
                      <input {...register('email')} type="text" className="form-control" placeholder="Enter Your Email" />
                      {errors.email?.message && <span className='err_span'>{errors.email?.message}</span>}
                    </div>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="mb-2 ms-1 mt-1 form_label">Contact :</label>
                      <input {...register('contact')} type="number" className="form-control" placeholder="Enter Your Contact"/>
                      {errors.contact?.message && <span className='err_span'>{errors.contact?.message}</span>}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="mb-2 ms-1 mt-1 form_label">Password :</label>
                      <input type='password' {...register('password')} className="form-control" placeholder='Enter Your Password'/>
                      {errors.password?.message && <span className='err_span'>{errors.password?.message}</span>}

                    </div>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="mb-2 ms-1 mt-1 form_label">Location :</label>
                      <input {...register('jobLocation')} type="text" className="form-control" placeholder="Enter Location"/>
                      {errors.jobLocation?.message && <span className='err_span'>{errors.jobLocation?.message}</span>}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="mb-2 ms-1 mt-1 form_label">Qualification :</label>
                      <input {...register('qualification')} type="text" className="form-control" placeholder="Enter Your Qualification" />
                      {errors.qualification?.message && <span className='err_span'>{errors.qualification?.message}</span>}
                    </div>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="mb-2 ms-1 mt-1 form_label">Job Preference :</label>
                      <input {...register('jobPreference')} type="text" className="form-control"  placeholder="Enter Your Job Preference" />
                      {errors.jobPreference?.message && <span className='err_span'>{errors.jobPreference?.message}</span>}

                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="mb-2 ms-1 mt-1 form_label">Image :</label>
                      <input {...register('image')} type="file" className="form-control" accept='image/*' />
                      {errors.image?.message && <span className='err_span'>{errors.image?.message}</span>}
                    </div>
                  </div>
                </div>
                <div className="d-grid">
                  <input type="submit" value='UPDATE PROFILE' className="form_button"/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
)


    
}

export default JobSeekerUpdate
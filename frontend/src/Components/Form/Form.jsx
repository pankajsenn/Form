import React from 'react'
import {useForm} from 'react-hook-form';
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {FormSchema} from '../../validationSchema/FormSchema';
import './Form.css'
import { useNavigate } from 'react-router-dom';
function Form() {
    const {register,handleSubmit,formState:{errors}} = useForm({
        resolver:yupResolver(FormSchema)
    })
    const navigate = useNavigate();
    const  formhandler =(data)=>{
         fetch("http://localhost:3001/post/info",{
            method:"POST",
            body: JSON.stringify(
                {
                    data
                }
            ),
            headers:{
                'Content-type' : 'application/json ; charset=UTF-8'
            }
         })
         .then((res)=>res.json())
         .then((ans)=>{
             if(ans.status==="success"){
                alert("Form Submitted Successfully");
                navigate('/DisplayUser');
             }
         })
    }    
    return (
        <>
            <div id='main-container'>
                <form onSubmit={handleSubmit(formhandler)}>
                    <section id='personal-detail'>
                        <h3>Personal Details</h3>
                        <div id='personal-div'>
                            <div>
                                <div className='name-div'>
                                    <label htmlFor='name'>Name<span style={{ color: "red" }}>*</span></label>
                                    <input {...register("name")} placeholder='Enter Name' id='name' className='input' name="name" />
                                    {errors.name?(
                                        <div className='error'>{errors.name.message}</div>
                                    ):null}
                                </div>
                                <div className='dob-div'>
                                    <label htmlFor='dob'>Date Of Birth or Age<span style={{ color: "red" }}>*</span></label>
                                    <input {...register("Dob")} placeholder='DD/MM/YYYY or Age in Years' id='dob' className='input' name='Dob'/>
                                    {errors.Dob?(
                                        <div className='error' style={{left:'34%'}}>{errors.Dob.message}</div>
                                    ):null}
                                </div>
                                <div className='sex-div'>
                                    <label htmlFor='sex'>Sex<span style={{ color: "red" }}>*</span></label>
                                    <select name='sex' id='sex' className='input' {...register("sex")}>
                                        <option value="">Enter Sex</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                    {errors.sex?(
                                        <div className='error' style={{top:'25px',left:'40%'}}>{errors.sex.message}</div>
                                    ):null}
                                </div>
                            </div>
                            <div>
                                <div className='mobile-div'>
                                    <label htmlFor='mobile'>Mobile</label>
                                    <input {...register("mobile")} placeholder='Enter Mobile' id='mobile' className='input' name='mobile'/>
                                    {errors.mobile?(
                                        <div className='error' style={{left:'40%'}}>{errors.mobile.message}</div>
                                    ):null}
                                </div>
                                <div className='govt-div'>
                                    <label htmlFor='govtway'>Govt Issued ID</label>
                                    <select  {...register("govtway")} name='govtway' id='govtway' className='input'>
                                        <option value="" >ID Type</option>
                                        <option value="aadhar">Aadhar</option>
                                        <option value="pan">PAN</option>
                                    </select>
                                    {errors.govtway?(
                                        <div className='error' style={{left:'18%'}}>{errors.govtway.message}</div>
                                    ):null}
                                    <input  {...register("govtid")} placeholder='Enter Govt ID' id='govtid' className='input' name='govtid'/>
                                    {errors.govtid?(
                                        <div className='error' style={{left:'64%'}}>{errors.govtid.message}</div>
                                    ):null}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id='contact-detail'>
                        <h3>Contact Details</h3>
                        <div id='contact-div'>
                            <div className='guardian-div'>
                                <label htmlFor='guardian'>Guardian Details</label>
                                <select {...register("guardian")} name='guardian' className='input' id='guardian' >
                                    <option value="">Enter Label</option>
                                    <option value="mr">Mr</option>
                                    <option value="mrs">Mrs</option>
                                    <option value="miss">Miss</option>
                                    <option value="ms">Ms</option>
                                </select>
                                {errors.guardian?(
                                        <div className='error' style={{left:'22%'}}>{errors.guardian.message}</div>
                                    ):null}
                                <input  {...register("guardianname")}placeholder='Enter Guardian name' className='input' id='guardian-name' name='guardianname'/>
                                {errors.guardianname?(
                                        <div className='error' style={{left:'54%'}}>{errors.guardianname.message}</div>
                                    ):null}
                            </div>
                            <div className='email-div'>
                                <label htmlFor='email'>Email</label>
                                <input {...register("email")} placeholder='Enter Email' id='email' className='input' name='email' />
                            </div>
                            <div className='emergency-div'>
                                <label htmlFor='emergency-no'>Emergency Contact Number</label>
                                <input {...register("emergencyno")} placeholder='Enter Emergency No.' className='input' id='emergency-no' name='emergencyno'/>
                                {errors.emergencyno?(
                                        <div className='error' style={{left:'30%'}}>{errors.emergencyno.message}</div>
                                    ):null}
                            </div>
                        </div>
                    </section>
                    <section id='address-detail'>
                        <h3>Address Details</h3>
                        <div id='address-div'>
                            <div>
                                <div className='Address-div'>
                                    <label htmlFor='address'>Address</label>
                                    <input {...register("address")} id='address' placeholder='Enter Address' className='input' name='address'/>
                                    {errors.address?(
                                        <div className='error' style={{left:'35%'}}>{errors.address.message}</div>
                                    ):null}
                                </div>
                                <div className='state-div'>
                                    <label htmlFor='state'>State</label>
                                    <select {...register("state")} name="state" id="state" className='input'>
                                        <option value="">Enter State</option>
                                        <option value="AN">Andaman and Nicobar Islands</option>
                                        <option value="AP">Andhra Pradesh</option>
                                        <option value="AR">Arunachal Pradesh</option>
                                        <option value="AS">Assam</option>
                                        <option value="BR">Bihar</option>
                                        <option value="CH">Chandigarh</option>
                                        <option value="CT">Chhattisgarh</option>
                                        <option value="DN">Dadra and Nagar Haveli</option>
                                        <option value="DD">Daman and Diu</option>
                                        <option value="DL">Delhi</option>
                                        <option value="GA">Goa</option>
                                        <option value="GJ">Gujarat</option>
                                        <option value="HR">Haryana</option>
                                        <option value="HP">Himachal Pradesh</option>
                                        <option value="JK">Jammu and Kashmir</option>
                                        <option value="JH">Jharkhand</option>
                                        <option value="KA">Karnataka</option>
                                        <option value="KL">Kerala</option>
                                        <option value="LA">Ladakh</option>
                                        <option value="LD">Lakshadweep</option>
                                        <option value="MP">Madhya Pradesh</option>
                                        <option value="MH">Maharashtra</option>
                                        <option value="MN">Manipur</option>
                                        <option value="ML">Meghalaya</option>
                                        <option value="MZ">Mizoram</option>
                                        <option value="NL">Nagaland</option>
                                        <option value="OR">Odisha</option>
                                        <option value="PY">Puducherry</option>
                                        <option value="PB">Punjab</option>
                                        <option value="RJ">Rajasthan</option>
                                        <option value="SK">Sikkim</option>
                                        <option value="TN">Tamil Nadu</option>
                                        <option value="TG">Telangana</option>
                                        <option value="TR">Tripura</option>
                                        <option value="UP">Uttar Pradesh</option>
                                        <option value="UT">Uttarakhand</option>
                                        <option value="WB">West Bengal</option>
                                    </select>
                                </div>
                                <div className='city-div'>
                                    <label htmlFor='city'>City</label>
                                    <input {...register("city")}id='city' placeholder='Enter City' className='input' name='city'/>
                                </div>
                            </div>
                            <div>
                                <div className='country-div'>
                                    <label htmlFor='country'>Country</label>
                                    <input {...register("country")} id='country' placeholder='Enter Country' className='input' name='country'/>
                                </div>
                                <div className='pincode-div'>
                                    <label htmlFor='pincode'>Pincode</label>
                                    <input {...register("pincode")} id='pincode' placeholder='Enter pincode' className='input' name='pincode'/>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id='other-detail'>
                        <h3>Other Details</h3>
                        <div id='other-div'>
                            <div>
                                <div className='occupation-div'>
                                    <label htmlFor='occupation'>Occupation</label>
                                    <input {...register("occupation")}placeholder='Enter Occupation' id='occupation' className='input'  name='occupation'/>
                                </div>
                                <div className='religion-div'>
                                    <label htmlFor='religion'>Religion</label>
                                    <select  {...register("religion")}name='religion' id='religion' className='input' >
                                        <option value=""> Select Religion</option>
                                        <option value="hindu">Hindu</option>
                                        <option value="christian">Christian</option>
                                        <option value="muslim">Muslim</option>
                                    </select>
                                </div>
                                <div className='martial-div'>
                                    <label htmlFor='marital'>Marital Status</label>
                                    <select {...register("marital")}name='marital' id='marital' className='input'>
                                        <option value="">Enter Marital Status</option>
                                        <option value="single">Single</option>
                                        <option value="married">Married</option>
                                        <option value="divorced">Divorced</option>
                                    </select>
                                </div>
                                <div>
                                    <label id='blood'>Blood Group</label>
                                    <select {...register("bloodgroup")} name='bloodgroup' id='blood' className='input'>
                                        <option value=""> Group</option>
                                        <option value="A"> A</option>
                                        <option value="B">B</option>
                                        <option value="AB"> AB</option>
                                        <option value="O"> O</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <div className='nationality-div'>
                                    <label htmlFor='nationality'>Nationality</label>
                                    <input {...register("nationality")} placeholder='Enter Nationality' id='nationality' className='input' name="nationality" />
                                    {errors.nationality?(
                                        <div className='error' style={{left:'45%'}}>{errors.nationality.message}</div>
                                    ):null}
                                </div>
                            </div>
                        </div>
                    </section>
                    <div id='btn-div'>
                      <button>CANCEL</button>
                      <button type="submit">SUBMIT</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form

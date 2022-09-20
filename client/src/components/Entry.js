import React from 'react'

const Entry = () => {
  return (
    <>
    

    <section className="sign-in">
    <div className="container mt-5">
      <div className="signin-content">
      <div className='signin-image'>
 
</div>
      <div className = "signin-form">
        <h2 className = "form-title">
          New Entry
        </h2>
        <form method="POST" className="register-form" id="register-form"> 
        
        
        <div className="form-group"> 
        <label htmlFor='date'></label>
        <input type="date" name="date" id="name" autoComplete='off'
        placeholder='Date'></input> </div>

        <div className="form-group"> 
        <label htmlFor='name'></label>
        <input type="text" name="name" id="name" autoComplete='off'
        placeholder='Name PIC'></input> </div>

       
        <div className="form-group"> 
        <label htmlFor='departure'></label>
        <input type="text" name="departure" id="name" autoComplete='off'
        placeholder='Place'></input> </div>

        <div className="form-group"> 
        <label htmlFor='destination'></label>
        <input type="text" name="destination" id="name" autoComplete='off'
        placeholder='Place'></input> </div>

        <div className="form-group"> 
        <label htmlFor='aircraft'></label>
        <input type="text" name="aircraft" id="name" autoComplete='off'
        placeholder='SU-30 MKI'></input> </div>
        
        
        

        <div className="form-group"> 
        <label htmlFor='duration'></label>
        <input type="time" name="duration" id="name" autoComplete='off'
        placeholder='00:00'></input> </div>
        
        
        <div className="form-group"> 
        <label htmlFor='second name'></label>
        <input type="text" name="second name" id="name" autoComplete='off'
        placeholder='Second Pilot(optional)'></input> </div>

       
       
        <div className="form-group"> 
        <label htmlFor='third name'></label>
        <input type="text" name="third name" id="name" autoComplete='off'
        placeholder='Third Pilot(optional)'></input> </div>

        <div className="form-group"> 
        <label htmlFor='remarks'></label>
        <input type="text" name="remarks" id="name" autoComplete='off'
        placeholder='Remarks(optional)'></input> </div>

        <div className='form-group form-button'>
          <input type="submit" name="entryin" id=" signin" className='form-submit'   value="Submit"
          /> 
        </div>
        
        </form>


      </div>
       


      </div>


    </div>

   </section>    
    
    </>
  )
}

export default Entry
import React from 'react'

const ContactForm = () => {
 return (
  <div className="contact-form-content">
  <h3 className="contact-page-title">Tell Us Your Message</h3>
  <div className="contact-form">
      <form id="contact-form" action="https://whizthemes.com/mail-php/mamunur/kenne/kenne.php">
          <div className="form-group">
              <label>Your Name <span className="required">*</span></label>
              <input type="text" name="con_name" id="con_name" required/>
          </div>
          <div className="form-group">
              <label>Your Email <span className="required">*</span></label>
              <input type="email" name="con_email" id="con_email" required/>
          </div>
          <div className="form-group">
              <label>Subject</label>
              <input type="text" name="con_subject" id="con_subject"/>
          </div>
          <div className="form-group form-group-2">
              <label>Your Message</label>
              <textarea name="con_message" id="con_message"></textarea>
          </div>
          <div className="form-group">
              <button type="submit" value="submit" id="submit" className="kenne-contact-form_btn" name="submit">send</button>
          </div>
      </form>
  </div>
  <p className="form-message"></p>
</div>
 )
}

export default ContactForm

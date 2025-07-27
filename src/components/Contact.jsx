import React, { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null); 
  const [touched, setTouched] = useState({});

  const validateField = useCallback((name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return '';
      case 'email':
        if (!value.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Please enter a valid email address';
        return '';
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        return '';
      default:
        return '';
    }
  }, []);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    
    setForm(prev => ({ ...prev, [name]: value }));
    
    // Clear submit status when user starts typing
    if (submitStatus) setSubmitStatus(null);
    
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  }, [touched, validateField, submitStatus]);

  const handleBlur = useCallback((e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  }, [validateField]);

  const validateForm = useCallback(() => {
    const newErrors = {};
    Object.keys(form).forEach(key => {
      const error = validateField(key, form[key]);
      if (error) newErrors[key] = error;
    });
    
    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });
    
    return Object.keys(newErrors).length === 0;
  }, [form, validateField]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Focus first error field
      const firstErrorField = Object.keys(errors)[0];
      if (firstErrorField) {
        const element = formRef.current?.querySelector(`[name="${firstErrorField}"]`);
        element?.focus();
      }
      return;
    }

    setLoading(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "SpectoV",
          from_email: form.email,
          to_email: "vdkalife@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus('success');
      setForm({ name: "", email: "", message: "" });
      setTouched({});
      setErrors({});
      
    } catch (error) {
      console.error('Email submission error:', error);
      setSubmitStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const getFieldClasses = (fieldName) => {
    const baseClasses = "bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-2 font-medium transition-all duration-200 focus:ring-2 focus:ring-[#915EFF] focus:ring-opacity-50";
    
    if (errors[fieldName] && touched[fieldName]) {
      return `${baseClasses} border-red-500 focus:border-red-500`;
    }
    
    if (touched[fieldName] && !errors[fieldName] && form[fieldName]) {
      return `${baseClasses} border-green-500 focus:border-[#915EFF]`;
    }
    
    return `${baseClasses} border-transparent focus:border-[#915EFF]`;
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      {/* bg-white bg-black-100*/}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-green-900/20 border border-green-500 rounded-lg"
            role="alert"
            aria-live="polite"
          >
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-green-400 font-medium">Message sent successfully! We'll get back to you soon.</p>
            </div>
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-red-900/20 border border-red-500 rounded-lg"
            role="alert"
            aria-live="polite"
          >
            <div className="flex items-center">
              <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <p className="text-red-400 font-medium">Failed to send message. Please try again or contact us directly.</p>
            </div>
          </motion.div>
        )}

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-8 flex flex-col gap-6'
          noValidate
        >
          {/* Name Field */}
          <div className="flex flex-col">
            <label htmlFor="name" className='text-white font-medium mb-2'>
              Your Name <span className="text-red-400" aria-label="required">*</span>
            </label>
            <input
              id="name"
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="What's your good name?"
              className={getFieldClasses('name')}
              disabled={loading}
              aria-describedby={errors.name && touched.name ? "name-error" : undefined}
              aria-invalid={errors.name && touched.name ? "true" : "false"}
              required
            />
            {errors.name && touched.name && (
              <p id="name-error" className="mt-2 text-red-400 text-sm flex items-center" role="alert">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.name}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="flex flex-col">
            <label htmlFor="email" className='text-white font-medium mb-2'>
              Your Email <span className="text-red-400" aria-label="required">*</span>
            </label>
            <input
              id="email"
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="What's your web address?"
              className={getFieldClasses('email')}
              disabled={loading}
              aria-describedby={errors.email && touched.email ? "email-error" : undefined}
              aria-invalid={errors.email && touched.email ? "true" : "false"}
              required
            />
            {errors.email && touched.email && (
              <p id="email-error" className="mt-2 text-red-400 text-sm flex items-center" role="alert">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.email}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div className="flex flex-col">
            <label htmlFor="message" className='text-white font-medium mb-2'>
              Your Message <span className="text-red-400" aria-label="required">*</span>
            </label>
            <textarea
              id="message"
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='What you want to say?'
              className={getFieldClasses('message')}
              disabled={loading}
              aria-describedby={errors.message && touched.message ? "message-error" : undefined}
              aria-invalid={errors.message && touched.message ? "true" : "false"}
              required
            />
            {errors.message && touched.message && (
              <p id="message-error" className="mt-2 text-red-400 text-sm flex items-center" role="alert">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            disabled={loading}
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-[#915EFF] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-2 focus:ring-[#915EFF] focus:ring-opacity-50 flex items-center gap-2'
            aria-describedby="submit-status"
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
          
          <p id="submit-status" className="sr-only" aria-live="polite">
            {loading ? 'Sending your message...' : ''}
          </p>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

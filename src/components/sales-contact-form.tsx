import { useState } from 'react';

export default function ContactSalesForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    companyName: '',
    seats: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when field is being edited
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  const validate = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.jobTitle.trim()) newErrors.jobTitle = 'Job title is required';
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!formData.seats.trim()) newErrors.seats = 'Number of seats is required';
    
    return newErrors;
  };
  
  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    // In a real application, you would submit the form data to your backend here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };
  
  if (isSubmitted) {
    return (
      <div className="relative">
        <button 
          onClick={openModal} 
          className="bg-transparent border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-800 shadow-lg transition-all duration-300 hover:shadow-xl"
        >
          Contact Sales
        </button>
        
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="max-w-2xl w-full bg-black border border-gray-800 rounded-lg p-8 text-white">
            <button 
              onClick={() => {
                setIsSubmitted(false);
                setIsOpen(false);
                setFormData({
                  firstName: '',
                  lastName: '',
                  email: '',
                  jobTitle: '',
                  companyName: '',
                  seats: '',
                  message: ''
                });
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <h2 className="text-3xl font-bold mb-6">Thank you!</h2>
            <p className="text-xl">Our sales team will be in touch with you shortly.</p>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="relative">
      {/* Contact Sales Button */}
      <button 
        onClick={openModal} 
        className="bg-transparent border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-800 shadow-lg transition-all duration-300 hover:shadow-xl"
      >
        Contact Sales
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          {/* Modal Content */}
          <div className="max-w-2xl w-full bg-black border border-gray-800 rounded-lg p-8 relative">
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <h1 className="text-4xl font-bold mb-8 text-white">Contact our sales team</h1>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-white mb-2">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full p-3 bg-black border ${errors.firstName ? 'border-red-500' : 'border-gray-600'} rounded-md text-white`}
                  />
                  {errors.firstName && <p className="mt-1 text-red-500 text-sm">{errors.firstName}</p>}
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-white mb-2">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full p-3 bg-black border ${errors.lastName ? 'border-red-500' : 'border-gray-600'} rounded-md text-white`}
                  />
                  {errors.lastName && <p className="mt-1 text-red-500 text-sm">{errors.lastName}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white mb-2">Work Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-3 bg-black border ${errors.email ? 'border-red-500' : 'border-gray-600'} rounded-md text-white`}
                    placeholder="Please fill in this field."
                  />
                  {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
                </div>
                
                <div>
                  <label htmlFor="jobTitle" className="block text-white mb-2">Job Title</label>
                  <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className={`w-full p-3 bg-black border ${errors.jobTitle ? 'border-red-500' : 'border-gray-600'} rounded-md text-white`}
                  />
                  {errors.jobTitle && <p className="mt-1 text-red-500 text-sm">{errors.jobTitle}</p>}
                </div>
                
                <div>
                  <label htmlFor="companyName" className="block text-white mb-2">Company name</label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className={`w-full p-3 bg-black border ${errors.companyName ? 'border-red-500' : 'border-gray-600'} rounded-md text-white`}
                  />
                  {errors.companyName && <p className="mt-1 text-red-500 text-sm">{errors.companyName}</p>}
                </div>
                
                <div>
                  <label htmlFor="seats" className="block text-white mb-2">Number of Seats</label>
                  <input
                    type="number"
                    id="seats"
                    name="seats" 
                    value={formData.seats}
                    onChange={handleChange}
                    className={`w-full p-3 bg-black border ${errors.seats ? 'border-red-500' : 'border-gray-600'} rounded-md text-white`}
                  />
                  {errors.seats && <p className="mt-1 text-red-500 text-sm">{errors.seats}</p>}
                </div>
              </div>
              
              {/* <div>
                <label htmlFor="message" className="block text-white mb-2">
                  How can we help get your team started on Cursor? (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 bg-black border border-gray-600 rounded-md text-white"
                  placeholder="Any comments or questions"
                ></textarea>
              </div> */}
              
              <div className="flex space-x-4">
                <button
                  onClick={handleSubmit}
                  className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded transition-colors duration-200"
                >
                  SUBMIT
                </button>
                <button
                  onClick={closeModal}
                  className="px-6 py-3 bg-transparent border border-gray-600 text-white font-medium rounded hover:bg-gray-900 transition-colors duration-200"
                >
                  CANCEL
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
import { useState } from "react"
import { Mail, Phone, MapPin, Clock } from "lucide-react"


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Message Sent Successfully ")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 mt-12">
          Contact Us
        </h1>
        <div className="text-center mb-12 font-medium">Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</div>

        <div className="grid md:grid-cols-2 gap-12">
          
          <form 
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-lg space-y-6"
          >
            <div>
              <label className="block mb-2 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Message</label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-all duration-300"
            >
              Send Message
            </button>
          </form>

         <div className="space-y-6">

  <div className="group bg-white p-6 rounded-2xl border border-gray-200 
  hover:border-red-500 hover:shadow-[0_0_20px_rgba(255,0,0,0.4)] 
  transition-all duration-300">

    <div className="flex items-start gap-4">
      
      <div className="bg-red-100 p-4 rounded-xl 
      transition-all duration-300 
      group-hover:scale-110 group-hover:bg-red-200">
        <Mail className="text-red-500 transition-all duration-300 group-hover:scale-125" size={24} />
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Email</h3>
        <p className="text-gray-600">tycore@gmail.com</p>
        <p className="text-gray-600">tycore2@gmail.com.com</p>
      </div>

    </div>
  </div>


  <div className="group bg-white p-6 rounded-2xl border border-gray-200 
  hover:border-red-500 hover:shadow-[0_0_20px_rgba(255,0,0,0.4)] 
  transition-all duration-300">

    <div className="flex items-start gap-4">

      <div className="bg-red-100 p-4 rounded-xl 
      transition-all duration-300 
      group-hover:scale-110 group-hover:bg-red-200">
        <Phone className="text-red-500 transition-all duration-300 group-hover:scale-125" size={24} />
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Phone</h3>
        <p className="text-gray-600">+91 5252525252</p>
        <p className="text-gray-600">+91 8585858525</p>
      </div>

    </div>
  </div>


  <div className="group bg-white p-6 rounded-2xl border border-gray-200 
  hover:border-red-500 hover:shadow-[0_0_20px_rgba(255,0,0,0.4)] 
  transition-all duration-300">

    <div className="flex items-start gap-4">

      <div className="bg-red-100 p-4 rounded-xl 
      transition-all duration-300 
      group-hover:scale-110 group-hover:bg-red-200">
        <MapPin className="text-red-500 transition-all duration-300 group-hover:scale-125" size={24} />
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Office</h3>
        <p className="text-gray-600">123 Commerce Street</p>
        <p className="text-gray-600">New York, NY 10001</p>
        <p className="text-gray-600">United States</p>
      </div>

    </div>
  </div>


  <div className="group bg-white p-6 rounded-2xl border border-gray-200 
  hover:border-red-500 hover:shadow-[0_0_20px_rgba(255,0,0,0.4)] 
  transition-all duration-300">

    <div className="flex items-start gap-4">

      <div className="bg-red-100 p-4 rounded-xl 
      transition-all duration-300 
      group-hover:scale-110 group-hover:bg-red-200">
        <Clock className="text-red-500 transition-all duration-300 group-hover:scale-125" size={24} />
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Working Hours</h3>
        <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
        <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
        <p className="text-gray-600">Sunday: Closed</p>
      </div>

    </div>
  </div>

</div>


        </div>
      </div>
    </div>
  )
}

export default Contact

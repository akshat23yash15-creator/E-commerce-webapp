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
    <div className="min-h-screen bg-gray-50 py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 mt-10">
          Contact Us
        </h1>

        <p className="text-center mb-10 sm:mb-12 text-sm sm:text-base font-medium max-w-2xl mx-auto">
          Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl shadow-lg space-y-5 sm:space-y-6"
          >
            <div>
              <label className="block mb-2 font-medium text-sm sm:text-base">Name</label>
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
              <label className="block mb-2 font-medium text-sm sm:text-base">Email</label>
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
              <label className="block mb-2 font-medium text-sm sm:text-base">Message</label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg h-[120px] sm:h-[150px] resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-all duration-300"
            >
              Send Message
            </button>
          </form>

          {/* CONTACT INFO */}
          <div className="space-y-5 sm:space-y-6">

            {[ 
              { icon: Mail, title: "Email", data: ["tycore@gmail.com", "tycore2@gmail.com"] },
              { icon: Phone, title: "Phone", data: ["+91 5252525252", "+91 8585858525"] },
              { icon: MapPin, title: "Office", data: ["123 Commerce Street", "New York, NY 10001", "United States"] },
              { icon: Clock, title: "Working Hours", data: ["Monday - Friday: 9AM - 6PM", "Saturday: 10AM - 4PM", "Sunday: Closed"] }
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white p-4 sm:p-5 md:p-6 rounded-2xl border border-gray-200 
                hover:border-red-500 hover:shadow-[0_0_20px_rgba(255,0,0,0.4)] 
                transition-all duration-300"
              >
                <div className="flex items-start gap-3 sm:gap-4">

                  <div className="bg-red-100 p-3 sm:p-4 rounded-xl 
                  transition-all duration-300 
                  group-hover:scale-110 group-hover:bg-red-200">
                    <item.icon className="text-red-500 transition-all duration-300 group-hover:scale-125" size={22} />
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
                      {item.title}
                    </h3>
                    {item.data.map((line, idx) => (
                      <p key={idx} className="text-gray-600 text-sm sm:text-base">
                        {line}
                      </p>
                    ))}
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
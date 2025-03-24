"use client"

import { useState, useEffect } from "react"
import { CalendarIcon,  ChevronLeft, ChevronRight, Upload } from "lucide-react"
import Sidebar from "../_components/adminsidebar"

export default function page() {
  const [currentStep, setCurrentStep] = useState(0)
  const [errors, setErrors] = useState({})

  const [showCalendar, setShowCalendar] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    description: "",
    address: "",
    locality: "",
    city: "",
    minArea: "",
    maxArea: "",
    minPrice: "",
    maxPrice: "",
    pricePerSqFt: "",
    reraNumber: "",
    availabilityStatus: "",
    possession: "",
    amenities: [],
    photos: [],
  })

  // Steps configuration
  const steps = [
    {
      id: "basic-details",
      name: "BASIC DETAILS",
      description: "Add basic details",
    },
    {
      id: "project-location",
      name: "PROJECT LOCATION",
      description: "Where is your project located?",
    },
    {
      id: "project-details",
      name: "PROJECT DETAILS",
      description: "Tell us about your project",
    },
    {
      id: "photo-gallery",
      name: "PHOTO GALLERY",
      description: "Add photos of your project",
    },
  ]

  // Cities data
  const cities = [
    "Alipur",
    "Andaman Island",
    "Anderson Island",
    "Arainj-Laka-Punga",
    "Austinabad",
    "Bamboo Flat",
    "Barren Island",
    "Beadonabad",
    "New Delhi",
    "Newasa",
    "Newai",
  ]

  // Amenities data
  const amenitiesOptions = [
    "Kids Play area",
    "Garden",
    "Gymnasium",
    "Multi-purpose Hall",
    "Swimming Pool",
    "Club House",
    "Security",
    "Power Backup",
  ]

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  // Handle amenity selection
  const handleAmenityToggle = (amenity) => {
    const updatedAmenities = formData.amenities.includes(amenity)
      ? formData.amenities.filter((item) => item !== amenity)
      : [...formData.amenities, amenity]

    setFormData({
      ...formData,
      amenities: updatedAmenities,
    })
  }

  // Handle file selection
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files || [])
    setFormData({
      ...formData,
      photos: files,
    })
  }

  // Handle city selection
  // const handleCitySelect = (city) => {
  //   setFormData({
  //     ...formData,
  //     city,
  //   })
  //   setShowCityDropdown(false)
  // }

  // Handle date selection
  const handleDateSelect = (date) => {
    setFormData({
      ...formData,
      possession: date,
    })
    setShowCalendar(false)
  }

  // Validate current step
  const validateStep = () => {
    const newErrors = {}

    if (currentStep === 0) {
      if (!formData.title) newErrors.title = "Project title is required"
      if (!formData.subtitle) newErrors.subtitle = "Subtitle is required"
      if (!formData.description) newErrors.description = "Description is required"
    } else if (currentStep === 1) {
      if (!formData.address) newErrors.address = "Address is required"
      if (!formData.locality) newErrors.locality = "Locality is required"
      if (!formData.city) newErrors.city = "City is required"
    } else if (currentStep === 2) {
      if (!formData.minArea) newErrors.minArea = "Minimum area is required"
      if (!formData.maxArea) newErrors.maxArea = "Maximum area is required"
      if (!formData.minPrice) newErrors.minPrice = "Minimum price is required"
      if (!formData.maxPrice) newErrors.maxPrice = "Maximum price is required"
      if (!formData.pricePerSqFt) newErrors.pricePerSqFt = "Price per sq.ft is required"
      if (!formData.reraNumber) newErrors.reraNumber = "RERA number is required"
      if (!formData.availabilityStatus) newErrors.availabilityStatus = "Availability status is required"
      if (!formData.possession) newErrors.possession = "Possession date is required"
      if (formData.amenities.length === 0) newErrors.amenities = "Select at least one amenity"
    } else if (currentStep === 3) {
      if (formData.photos.length === 0) newErrors.photos = "At least one photo is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle next step
  const handleNext = () => {
    if (validateStep()) {
      setCurrentStep((prev) => prev + 1)
    }
  }

  // Handle back step
  const handleBack = () => {
    setCurrentStep((prev) => prev - 1)
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateStep()) {
      // Submit the form data to the server
      console.log("Form submitted:", formData)
      alert("Form submitted successfully!")
    }
  }

  // Generate calendar days
  const generateCalendarDays = () => {
    const today = new Date()
    const year = today.getFullYear()
    const month = today.getMonth()

    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const firstDayOfMonth = new Date(year, month, 1).getDay()

    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null)
    }

    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i)
    }

    return days
  }

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {

      setShowCalendar(false)
    }

    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])

  return (
    <>
    <div className="flex flex-row w-full">
      
      <Sidebar />
    <div className="container mx-auto py-10 px-4">

      <div className="flex items-center justify-between mb-8">
        {/* <h1 className="text-2xl font-bold">My Landing Property | Dashboard</h1> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="space-y-4">
          <div className="font-medium">
            <div className="flex items-center space-x-2 mb-2">
              {/* <span className="bg-blue-500 text-white p-1 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M9 14.25H15" />
                  <path d="M12 11.25v6" />
                </svg>
              </span>
              <span>Dashboard</span> */}
            </div>
          </div>

          <div className="space-y-1">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`flex items-start p-3 border-l-4 ${
                  index === currentStep ? "border-red-500 bg-red-50" : "border-transparent"
                }`}
              >
                <div className="ml-2">
                  <p
                    className={`font-medium uppercase text-sm ${
                      index === currentStep ? "text-red-500" : "text-gray-500"
                    }`}
                  >
                    {step.name}
                  </p>
                  <p className="text-xs text-gray-500">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-3">
          <div className="bg-white rounded-lg shadow-sm border">
            <form onSubmit={handleSubmit} className="p-6">
              {/* Basic Details */}
              {currentStep === 0 && (
                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <h2 className="text-xl font-semibold text-blue-700">Basic Details</h2>
                    <p className="text-sm text-gray-500">Add basic details</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Add title to project</label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Enter Title Here..."
                        className={`w-full px-3 py-2 border rounded-md ${
                          errors.title ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                      <p className="text-xs text-gray-500 mt-1">e.g. Arise Atlantis</p>
                      {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Add subtitle</label>
                      <input
                        type="text"
                        name="subtitle"
                        value={formData.subtitle}
                        onChange={handleChange}
                        placeholder="Enter Subtitle Here..."
                        className={`w-full px-3 py-2 border rounded-md ${
                          errors.subtitle ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                      <p className="text-xs text-gray-500 mt-1">e.g. Arise Developer and Soniz Developer</p>
                      {errors.subtitle && <p className="text-red-500 text-xs mt-1">{errors.subtitle}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Add description</label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Enter Description Here..."
                        rows={4}
                        className={`w-full px-3 py-2 border rounded-md ${
                          errors.description ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                      {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
                    </div>
                  </div>
                </div>
              )}

              {/* Project Location */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <h2 className="text-xl font-semibold text-blue-700">Project Location</h2>
                    <p className="text-sm text-gray-500">Where is your project located?</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Address</label>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Enter address"
                        rows={4}
                        className={`w-full px-3 py-2 border rounded-md ${
                          errors.address ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                      {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Locality</label>
                      <input
                        type="text"
                        name="locality"
                        value={formData.locality}
                        onChange={handleChange}
                        placeholder="Eg: Andheri"
                        className={`w-full px-3 py-2 border rounded-md ${
                          errors.locality ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                      {errors.locality && <p className="text-red-500 text-xs mt-1">{errors.locality}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">city</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Eg:mumbai"
                        className={`w-full px-3 py-2 border rounded-md ${
                          errors.city ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                      {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                    </div>

                  </div>
                </div>
              )}

              {/* Project Details */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <h2 className="text-xl font-semibold text-blue-700">Project Details</h2>
                    <p className="text-sm text-gray-500">Tell us about your project</p>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Area Range in Sq.Ft (Min)</label>
                        <input
                          type="text"
                          name="minArea"
                          value={formData.minArea}
                          onChange={handleChange}
                          placeholder="Enter Min Area"
                          className={`w-full px-3 py-2 border rounded-md ${
                            errors.minArea ? "border-red-500" : "border-gray-300"
                          }`}
                        />
                        {errors.minArea && <p className="text-red-500 text-xs mt-1">{errors.minArea}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Area Range in Sq.Ft (Max)</label>
                        <input
                          type="text"
                          name="maxArea"
                          value={formData.maxArea}
                          onChange={handleChange}
                          placeholder="Enter Max Area"
                          className={`w-full px-3 py-2 border rounded-md ${
                            errors.maxArea ? "border-red-500" : "border-gray-300"
                          }`}
                        />
                        {errors.maxArea && <p className="text-red-500 text-xs mt-1">{errors.maxArea}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Price Range (Min)</label>
                        <input
                          type="text"
                          name="minPrice"
                          value={formData.minPrice}
                          onChange={handleChange}
                          placeholder="Enter Min Price"
                          className={`w-full px-3 py-2 border rounded-md ${
                            errors.minPrice ? "border-red-500" : "border-gray-300"
                          }`}
                        />
                        {errors.minPrice && <p className="text-red-500 text-xs mt-1">{errors.minPrice}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Price Range (Max)</label>
                        <input
                          type="text"
                          name="maxPrice"
                          value={formData.maxPrice}
                          onChange={handleChange}
                          placeholder="Enter Max Price"
                          className={`w-full px-3 py-2 border rounded-md ${
                            errors.maxPrice ? "border-red-500" : "border-gray-300"
                          }`}
                        />
                        {errors.maxPrice && <p className="text-red-500 text-xs mt-1">{errors.maxPrice}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Price Per Sq.Ft</label>
                      <input
                        type="text"
                        name="pricePerSqFt"
                        value={formData.pricePerSqFt}
                        onChange={handleChange}
                        placeholder="Enter Price Per Sq.Ft"
                        className={`w-full px-3 py-2 border rounded-md ${
                          errors.pricePerSqFt ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                      {errors.pricePerSqFt && <p className="text-red-500 text-xs mt-1">{errors.pricePerSqFt}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">RERA Number</label>
                      <input
                        type="text"
                        name="reraNumber"
                        value={formData.reraNumber}
                        onChange={handleChange}
                        placeholder="Enter RERA Number"
                        className={`w-full px-3 py-2 border rounded-md ${
                          errors.reraNumber ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                      {errors.reraNumber && <p className="text-red-500 text-xs mt-1">{errors.reraNumber}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Availability status</label>
                      <input
                        type="text"
                        name="availabilityStatus"
                        value={formData.availabilityStatus}
                        onChange={handleChange}
                        placeholder="eg:1 & 2 BHK Apartment"
                        className={`w-full px-3 py-2 border rounded-md ${
                          errors.availabilityStatus ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                      {errors.availabilityStatus && (
                        <p className="text-red-500 text-xs mt-1">{errors.availabilityStatus}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Possession</label>
                      <div className="relative">
                        <div
                          className={`flex items-center justify-between w-full px-3 py-2 border rounded-md cursor-pointer ${
                            errors.possession ? "border-red-500" : "border-gray-300"
                          }`}
                          onClick={(e) => {
                            e.stopPropagation()
                            setShowCalendar(!showCalendar)
                          }}
                        >
                          <span className={formData.possession ? "text-black" : "text-gray-400"}>
                            {formData.possession || "yyyy-mm-dd"}
                          </span>
                          <CalendarIcon className="h-4 w-4 text-gray-500" />
                        </div>

                        {showCalendar && (
                          <div
                            className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <div className="p-2">
                              <div className="grid grid-cols-7 gap-1">
                                {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                                  <div key={day} className="text-center text-xs font-medium p-1">
                                    {day}
                                  </div>
                                ))}

                                {generateCalendarDays().map((day, index) => (
                                  <div
                                    key={index}
                                    className={`text-center p-1 ${day ? "hover:bg-gray-100 cursor-pointer" : ""}`}
                                    onClick={() =>
                                      day && handleDateSelect(`2025-03-${day.toString().padStart(2, "0")}`)
                                    }
                                  >
                                    {day}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      {errors.possession && <p className="text-red-500 text-xs mt-1">{errors.possession}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Amenities</label>
                      <div className="flex flex-wrap gap-2">
                        {amenitiesOptions.map((amenity) => (
                          <button
                            key={amenity}
                            type="button"
                            className={`px-3 py-1 text-sm rounded-md ${
                              formData.amenities.includes(amenity)
                                ? "bg-blue-500 text-white"
                                : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                            }`}
                            onClick={() => handleAmenityToggle(amenity)}
                          >
                            {amenity}
                          </button>
                        ))}
                      </div>
                      {errors.amenities && <p className="text-red-500 text-xs mt-1">{errors.amenities}</p>}
                    </div>
                  </div>
                </div>
              )}

              {/* Photo Gallery */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <h2 className="text-xl font-semibold text-blue-700">Photo Gallery</h2>
                    <p className="text-sm text-gray-500">Add photos of your project</p>
                  </div>

                  <div>
                    <div
                      className={`border-2 border-dashed rounded-lg p-12 text-center ${
                        errors.photos ? "border-red-500" : "border-gray-300"
                      }`}
                    >
                      <Upload className="h-12 w-12 mx-auto text-gray-400" />
                      <p className="mt-4 text-lg font-medium">
                        Drag and drop some files here, or click to select files
                      </p>
                      <input type="file" multiple className="hidden" id="file-upload" onChange={handleFileChange} />
                      <button
                        type="button"
                        className="mt-4 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                        onClick={() => document.getElementById("file-upload")?.click()}
                      >
                        Select Files
                      </button>
                      {formData.photos.length > 0 && (
                        <div className="mt-4">
                          <p className="text-sm text-green-600">{formData.photos.length} file(s) selected</p>
                        </div>
                      )}
                    </div>
                    {errors.photos && <p className="text-red-500 text-xs mt-1">{errors.photos}</p>}
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-4 border-t mt-6">
                <button
                  type="button"
                  className={`px-4 py-2 border border-gray-300 rounded-md text-sm font-medium ${
                    currentStep === 0 ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={handleBack}
                  disabled={currentStep === 0}
                >
                  <ChevronLeft className="inline-block mr-2 h-4 w-4" />
                  Back
                </button>

                {currentStep < steps.length - 1 ? (
                  <button
                    type="button"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700"
                    onClick={handleNext}
                  >
                    Next
                    <ChevronRight className="inline-block ml-2 h-4 w-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700"
                  >
                    Publish
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div></div></>
  )
}


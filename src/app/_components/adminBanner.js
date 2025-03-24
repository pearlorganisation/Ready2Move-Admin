"use client"

import { useState } from "react"
import { Pencil, X, Upload, Plus, ChevronRight, Save } from "lucide-react"
import Image from "next/image"



export default function HeroSliderEditor() {
  const [slides, setSlides] = useState([
    {
      id: 1,
      title: "Power Converters for Clean Energy Products",
      description: "Efficient and reliable power conversion solutions for renewable energy applications.",
      image: "/placeholder.svg?height=200&width=400",
      ctaText: "Explore Solutions",
      ctaLink: "Arrow Right",
      ctaUrl: "https://example.com",
      isEditing: false,
    },

  ])

  // Toggle edit mode for a slide
  const toggleEditMode = (id) => {
    setSlides(slides.map((slide) => (slide.id === id ? { ...slide, isEditing: !slide.isEditing } : slide)))
  }

  // Update slide data
  const updateSlide = (id, field, value) => {
    setSlides(slides.map((slide) => (slide.id === id ? { ...slide, [field]: value } : slide)))
  }

  // Add a new slide
  const addSlide = () => {
    const newId = slides.length > 0 ? Math.max(...slides.map((s) => s.id)) + 1 : 1
    const newSlide = {
      id: newId,
      title: `Slide ${newId}`,
      description: "",
      image: "/placeholder.svg?height=200&width=400",
      ctaText: "Learn More",
      ctaLink: "Arrow Right",
      ctaUrl: "",
      isEditing: true,
    }
    setSlides([...slides, newSlide])
  }

  // Remove a slide
  const removeSlide = (id) => {
    setSlides(slides.filter((slide) => slide.id !== id))
  }

  // CTA link options
  const ctaLinkOptions = ["Arrow Right", "Button", "Text Link", "None"]

  return (
    <div className="container mx-auto p-6 max-w-5xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Banner </h1>
        <button
          onClick={addSlide}
          className="flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md text-sm transition-colors"
        >
          <Plus className="h-4 w-4" />
          Add Slide
        </button>
      </div>

      <div className="space-y-8">
        {slides.map((slide) => (
          <div key={slide.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="flex justify-between items-center p-4 bg-gray-50 border-b">
              <h2 className="font-medium"></h2>
              <div className="flex items-center gap-2">
                {!slide.isEditing ? (
                  <button
                    onClick={() => toggleEditMode(slide.id)}
                    className="flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded-md text-sm transition-colors"
                  >
                    <Pencil className="h-4 w-4" />
                    Edit
                  </button>
                ) : (
                  <button
                    onClick={() => toggleEditMode(slide.id)}
                    className="flex items-center gap-1 bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded-md text-sm transition-colors"
                  >
                    <Save className="h-4 w-4" />
                    Save
                  </button>
                )}
                <button onClick={() => removeSlide(slide.id)} className="text-red-500 hover:text-red-700">
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                    {slide.isEditing ? (
                      <input
                        type="text"
                        value={slide.title}
                        onChange={(e) => updateSlide(slide.id, "title", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    ) : (
                      <div className="px-3 py-2 border border-gray-200 rounded-md bg-gray-50">{slide.title}</div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    {slide.isEditing ? (
                      <textarea
                        value={slide.description}
                        onChange={(e) => updateSlide(slide.id, "description", e.target.value)}
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    ) : (
                      <div className="px-3 py-2 border border-gray-200 rounded-md bg-gray-50 min-h-[100px]">
                        {slide.description}
                      </div>
                    )}
                  </div>

</div> 
<div>
  <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
  <div className="border border-gray-200 rounded-md overflow-hidden">
    <Image
      src={slide.image || "/placeholder.svg"}
      alt={slide.title}
      width={400}
      height={200}
      className="w-full h-48 object-cover"
    />
    {slide.isEditing && (
      <div className="p-2 bg-gray-50 border-t flex flex-col items-center gap-2">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            if (e.target.files.length > 0) {
              const file = e.target.files[0];
              const imageUrl = URL.createObjectURL(file);
              updateSlide(slide.id, "image", imageUrl);
            }
          }}
          className="hidden"
          id={`upload-${slide.id}`}
        />
        <label
          htmlFor={`upload-${slide.id}`}
          className="cursor-pointer flex items-center gap-1 text-blue-500 hover:text-blue-700 text-sm"
        >
          <Upload className="h-4 w-4" />
          Upload Image
        </label>
      </div>
    )}
  </div>
</div>

              </div>
            </div>
          </div>
        ))}
      </div>

    
 
    </div>
  )
}


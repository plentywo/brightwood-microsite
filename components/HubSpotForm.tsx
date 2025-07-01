'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

interface FormData {
  firstname: string
  lastname: string
  email: string
  phone: string
  description: string
}

interface CustomHubSpotFormProps {
  className?: string
}

const CustomHubSpotForm: React.FC<CustomHubSpotFormProps> = ({ 
  className = '' 
}) => {
  const [formData, setFormData] = useState<FormData>({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    description: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const portalId = '44668504'
      const formId = '5b52cd93-0113-444f-84de-6d25d6e4a52e'
      
      const response = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields: [
            { objectTypeId: "0-1", name: "firstname", value: formData.firstname },
            { objectTypeId: "0-1", name: "lastname", value: formData.lastname },
            { objectTypeId: "0-1", name: "email", value: formData.email },
            { objectTypeId: "0-1", name: "phone", value: formData.phone },
            { objectTypeId: "0-1", name: "description", value: formData.description }
          ],
          context: {
            pageUri: window.location.href,
            pageName: document.title
          }
        })
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          description: ''
        })
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (err) {
      setError('Failed to submit form. Please try again.')
      console.error('Form submission error:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className={`p-6 text-center ${className}`}>
        <h3 className="text-xl font-bold text-[#c6a664] mb-2">Thank You!</h3>
        <p className="text-[#f8f5f0]">We'll be in touch with you soon.</p>
      </div>
    )
  }

  return (
    <div className={`w-full h-full ${className}`}>
      <form onSubmit={handleSubmit} className="space-y-4 w-full h-full flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label 
              htmlFor="firstname" 
              className="text-sm font-medium text-[#f8f5f0] font-montserrat"
            >
              First Name *
            </label>
            <Input
              id="firstname"
              type="text"
              name="firstname"
              placeholder="Enter your first name"
              value={formData.firstname}
              onChange={handleInputChange}
              required
              className="bg-[#f8f5f0] border-gray-300 text-[#1b1b1b] placeholder-gray-500"
            />
          </div>
          <div className="space-y-2">
            <label 
              htmlFor="lastname" 
              className="text-sm font-medium text-[#f8f5f0] font-montserrat"
            >
              Last Name *
            </label>
            <Input
              id="lastname"
              type="text"
              name="lastname"
              placeholder="Enter your last name"
              value={formData.lastname}
              onChange={handleInputChange}
              required
              className="bg-[#f8f5f0] border-gray-300 text-[#1b1b1b] placeholder-gray-500"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label 
            htmlFor="email" 
            className="text-sm font-medium text-[#f8f5f0] font-montserrat"
          >
            Email Address *
          </label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="bg-[#f8f5f0] border-gray-300 text-[#1b1b1b] placeholder-gray-500"
          />
        </div>
        
        <div className="space-y-2">
          <label 
            htmlFor="phone" 
            className="text-sm font-medium text-[#f8f5f0] font-montserrat"
          >
            Phone Number *
          </label>
          <Input
            id="phone"
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="bg-[#f8f5f0] border-gray-300 text-[#1b1b1b] placeholder-gray-500"
          />
        </div>
        
        <div className="space-y-2 flex-1 flex flex-col">
          <label 
            htmlFor="description" 
            className="text-sm font-medium text-[#f8f5f0] font-montserrat"
          >
            Tell us about your care needs
          </label>
          <Textarea
            id="description"
            name="description"
            placeholder="Describe your specific care needs and preferences..."
            value={formData.description}
            onChange={handleInputChange}
            rows={4}
            className="bg-[#f8f5f0] border-gray-300 text-[#1b1b1b] placeholder-gray-500 flex-1 min-h-[100px]"
          />
        </div>

        {error && (
          <div className="text-red-500 text-sm">{error}</div>
        )}

        <div className="pt-2">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#c6a664] hover:bg-[#b39555] text-[#1b1b1b] font-medium py-3"
          >
            {isSubmitting ? 'Submitting...' : 'Get Started Today'}
          </Button>
          
          <p className="text-xs text-[#f8f5f0] text-center mt-3">
            By submitting this form, you agree to receive communications from Brightwood Health.
          </p>
        </div>
      </form>
    </div>
  )
}

export default CustomHubSpotForm

// Keep the old component name for backward compatibility
export const HubSpotForm = CustomHubSpotForm 
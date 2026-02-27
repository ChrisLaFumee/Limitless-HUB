import { useState } from 'react';

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PopupForm({ isOpen, onClose }: PopupFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Submit to Tally form
      const response = await fetch(
        'https://tally.so/api/forms/meWEQO/submissions',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            data: [
              {
                key: 'firstName',
                value: formData.firstName,
              },
              {
                key: 'lastName',
                value: formData.lastName,
              },
              {
                key: 'email',
                value: formData.email,
              },
              {
                key: 'phone',
                value: formData.phone,
              },
            ],
          }),
        }
      );

      if (response.ok) {
        console.log('Form submitted to Tally successfully');
      } else {
        console.error('Failed to submit to Tally');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }

    setSubmitted(true);
    // Close after 2 seconds
    setTimeout(() => {
      onClose();
      setSubmitted(false);
      setFormData({ firstName: '', lastName: '', email: '', phone: '' });
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-lg shadow-2xl max-w-md w-full border border-gray-700 p-8">
        {!submitted ? (
          <>
            <h2 className="text-2xl font-bold mb-2 text-white">
              Join the Limitless Team
            </h2>
            <p className="text-gray-400 mb-6 text-sm">
              Share your info to stay connected with us
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-500"
                  placeholder="John"
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-500"
                  placeholder="Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-500"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Phone Number <span className="text-gray-500">(optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-500"
                  placeholder="(123) 456-7890"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 mt-6"
              >
                Submit
              </button>
            </form>

            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-300 text-sm mt-4 w-full py-2"
            >
              Skip for now
            </button>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="text-green-500 text-4xl mb-4">✓</div>
            <p className="text-white text-lg font-semibold">Thank you!</p>
            <p className="text-gray-400 text-sm mt-2">
              We'll be in touch soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

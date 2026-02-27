import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { firstName, lastName, email, phone } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Submit to FormSubmit.co
    const formData = new FormData();
    formData.append('email', 'limitlessprogressions@gmail.com');
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('email_address', email);
    if (phone) {
      formData.append('phone', phone);
    }

    const response = await fetch(
      'https://formsubmit.co/limitlessprogressions@gmail.com',
      {
        method: 'POST',
        body: formData,
      }
    );

    console.log('FormSubmit response:', response.status);

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Form submission error:', error);
    return res.status(200).json({ success: true });
  }
}

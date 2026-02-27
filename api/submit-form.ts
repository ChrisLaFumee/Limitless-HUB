import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
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

    // Submit to Tally form
    const formData = new URLSearchParams();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('email', email);
    if (phone) {
      formData.append('phone', phone);
    }

    const tallyResponse = await fetch(
      'https://tally.so/api/forms/meWEQO/submissions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      }
    );

    if (tallyResponse.ok || tallyResponse.status === 422) {
      // 422 might still be a successful submission on Tally's end
      return res.status(200).json({ success: true });
    }

    console.error('Tally response:', tallyResponse.status);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Form submission error:', error);
    return res.status(200).json({ success: true });
  }
}

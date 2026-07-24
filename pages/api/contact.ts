import type { NextApiRequest, NextApiResponse } from 'next';

interface ContactPayload {
  name?: string;
  email?: string;
  message?: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>,
): void {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ success: false, message: 'Method not allowed' });
    return;
  }

  const { name, email, message } = (req.body ?? {}) as ContactPayload;

  if (!name || !email || !message) {
    res.status(400).json({ success: false, message: 'Missing required fields' });
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    res.status(400).json({ success: false, message: 'Invalid email address' });
    return;
  }

  res.status(200).json({ success: true, message: 'Message received' });
}

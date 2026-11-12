/**
 * VYORA DIGITAL — UNIFIED LEAD DISPATCHER & NOTIFICATION PIPELINE
 * Target Email: getupramesh@gmail.com
 * Target Google Sheet: https://docs.google.com/spreadsheets/d/1kZpBSVbwHqxZuQpNBDKg4Eyg8Q3n4-GScuAa7iIgsVc/edit
 */

export interface LeadPayload {
  name: string;
  phone: string;
  email?: string;
  service?: string;
  budget?: string;
  message?: string;
  page?: string;
}

export async function submitLead(payload: LeadPayload): Promise<boolean> {
  const SPREADSHEET_URL = 'https://docs.google.com/spreadsheets/d/1kZpBSVbwHqxZuQpNBDKg4Eyg8Q3n4-GScuAa7iIgsVc/edit';
  const NOTIFICATION_EMAIL = 'getupramesh@gmail.com';

  const fullPayload = {
    ...payload,
    page: payload.page || (typeof window !== 'undefined' ? window.location.pathname : 'Homepage'),
    targetSheet: SPREADSHEET_URL,
    notificationEmail: NOTIFICATION_EMAIL,
  };

  // 1. Dispatch to Next.js API route
  try {
    fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(fullPayload),
    }).catch(() => {});
  } catch (e) {
    console.warn('API lead dispatch error:', e);
  }

  // 2. Direct client-side fail-safe email to getupramesh@gmail.com via FormSubmit
  try {
    fetch(`https://formsubmit.co/ajax/${NOTIFICATION_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        _subject: `🔥 New Lead: ${payload.name} (${payload.phone}) — Vyora Digital`,
        name: payload.name,
        phone: payload.phone,
        email: payload.email || 'Not provided',
        service_requirement: payload.service || 'Growth Consultation',
        monthly_budget: payload.budget || 'Not specified',
        notes: payload.message || 'None',
        source_url: typeof window !== 'undefined' ? window.location.href : 'Website',
      }),
    }).catch(() => {});
  } catch (e) {
    console.warn('FormSubmit email direct relay warning:', e);
  }

  // 3. Dispatch global custom event so the Success Popup can display anywhere
  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent('vyora:leadSuccess', {
        detail: fullPayload,
      })
    );
  }

  return true;
}

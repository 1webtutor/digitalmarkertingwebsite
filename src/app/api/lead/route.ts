import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const SPREADSHEET_ID = '1kZpBSVbwHqxZuQpNBDKg4Eyg8Q3n4-GScuAa7iIgsVc';
    const NOTIFICATION_EMAIL = 'getupramesh@gmail.com';

    // 1. Direct Email Notification to getupramesh@gmail.com via FormSubmit AJAX Relay
    try {
      await fetch(`https://formsubmit.co/ajax/${NOTIFICATION_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `🔥 New Lead: ${data.name || 'Anonymous'} (${data.phone || 'No phone'}) — Vyora Digital`,
          name: data.name || 'Not provided',
          phone: data.phone || 'Not provided',
          email: data.email || 'Not provided',
          service: data.service || data.requirement || 'Growth Audit',
          budget: data.budget || 'Not specified',
          message: data.message || data.notes || 'None',
          source_page: data.page || 'Website',
          timestamp: new Date().toISOString(),
          google_sheet: `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/edit`,
        }),
      });
    } catch (mailErr) {
      console.warn('FormSubmit email relay warning:', mailErr);
    }

    // 2. Google Apps Script Webhook (if configured in environment)
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
      } catch (sheetErr) {
        console.warn('Google Sheets Webhook warning:', sheetErr);
      }
    }

    return NextResponse.json({
      status: 'success',
      message: 'Lead received successfully. Notification dispatched to getupramesh@gmail.com',
      targetSheet: `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/edit`,
      notificationEmail: NOTIFICATION_EMAIL,
    });
  } catch (error) {
    return NextResponse.json(
      { status: 'error', message: (error as Error).message },
      { status: 500 }
    );
  }
}

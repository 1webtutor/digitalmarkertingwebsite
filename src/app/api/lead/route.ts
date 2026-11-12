import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const SPREADSHEET_ID = '1kZpBSVbwHqxZuQpNBDKg4Eyg8Q3n4-GScuAa7iIgsVc';
    const NOTIFICATION_EMAIL = 'getupramesh@gmail.com';

    // If an external Google Apps Script webhook URL is provided via env, forward it
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
      } catch (err) {
        console.error('Failed to forward to Google Apps Script webhook:', err);
      }
    }

    return NextResponse.json({
      status: 'success',
      message: 'Lead received successfully',
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

/**
 * VYORA DIGITAL — GOOGLE SHEETS & EMAIL NOTIFICATION SCRIPT
 * 
 * Target Google Spreadsheet:
 * https://docs.google.com/spreadsheets/d/1kZpBSVbwHqxZuQpNBDKg4Eyg8Q3n4-GScuAa7iIgsVc/edit
 * 
 * Notification Recipient:
 * getupramesh@gmail.com
 * 
 * HOW TO INSTALL (Takes 60 seconds):
 * 1. Open the Google Sheet above in your browser.
 * 2. Click "Extensions" > "Apps Script" in the top menu.
 * 3. Delete any default code in Code.gs, paste this entire file, and click Save (disk icon).
 * 4. Click "Deploy" > "New deployment" (blue button at top right).
 * 5. Select type: "Web app".
 * 6. Under "Execute as": select "Me".
 * 7. Under "Who has access": select "Anyone".
 * 8. Click "Deploy", approve permissions, and copy the Web App URL (ends in /exec).
 * 9. Paste the Web App URL into:
 *    - `assets/js/main.js` (under GOOGLE_SHEET_WEBAPP_URL)
 *    - `src/components/BookingModal.tsx`
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000); // Wait up to 10s for other concurrent requests

  try {
    var SPREADSHEET_ID = "1kZpBSVbwHqxZuQpNBDKg4Eyg8Q3n4-GScuAa7iIgsVc";
    var NOTIFICATION_EMAIL = "getupramesh@gmail.com";

    var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = ss.getActiveSheet();

    // Setup headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      var headers = [
        "Timestamp",
        "Full Name",
        "Phone / WhatsApp",
        "Email",
        "Service / Requirement",
        "Monthly Budget",
        "Message / Notes",
        "Source Page"
      ];
      sheet.appendRow(headers);
      var headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#D4AF37"); // Metallic Gold
      headerRange.setFontColor("#08090C");
      sheet.setFrozenRows(1);
    }

    // Extract POST payload (JSON or Form URL-encoded)
    var data = {};
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter || {};
      }
    } else if (e.parameter) {
      data = e.parameter;
    }

    var now = new Date();
    var formattedDate = Utilities.formatDate(now, "Asia/Kolkata", "yyyy-MM-dd HH:mm:ss");

    var name = data.name || data.fullName || data.modalName || "Not provided";
    var phone = data.phone || data.mobile || data.modalPhone || "Not provided";
    var email = data.email || data.modalEmail || "Not provided";
    var service = data.service || data.specialty || data.modalService || "Growth Audit";
    var budget = data.budget || data.modalBudget || "Not specified";
    var message = data.message || data.project || data.notes || "None";
    var source = data.page || data.source || data.sourceUrl || "Vyora Digital Website";

    // 1. Append row to spreadsheet
    sheet.appendRow([
      formattedDate,
      name,
      phone,
      email,
      service,
      budget,
      message,
      source
    ]);

    // 2. Send instant email notification to getupramesh@gmail.com
    var subject = "🔥 New Lead: " + name + " (" + phone + ") — Vyora Digital";
    var body = 
      "You have received a new growth consultation inquiry on Vyora Digital!\n\n" +
      "--------------------------------------------------\n" +
      "👤 Name: " + name + "\n" +
      "📞 Phone / WhatsApp: " + phone + "\n" +
      "✉️ Email: " + email + "\n" +
      "🎯 Service / Goal: " + service + "\n" +
      "💰 Monthly Ad Budget: " + budget + "\n" +
      "📝 Notes / Details: " + message + "\n" +
      "🌐 Source Page: " + source + "\n" +
      "⏰ Submission Time: " + formattedDate + " (IST)\n" +
      "--------------------------------------------------\n\n" +
      "📊 Open Live Google Sheet:\n" +
      "https://docs.google.com/spreadsheets/d/" + SPREADSHEET_ID + "/edit\n\n" +
      "— Vyora Digital Automated Acquisition Bot";

    MailApp.sendEmail({
      to: NOTIFICATION_EMAIL,
      subject: subject,
      body: body
    });

    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Lead recorded in Google Sheet and notification sent to " + NOTIFICATION_EMAIL,
      row: sheet.getLastRow()
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: err.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

// Enable CORS GET test
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: "active",
    message: "Vyora Digital Google Sheets Webhook is Live!"
  })).setMimeType(ContentService.MimeType.JSON);
}

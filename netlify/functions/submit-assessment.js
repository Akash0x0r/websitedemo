/**
 * Netlify Serverless Function: Submit Security Assessment Request
 * 
 * Handles incoming scoping requests from /request-assessment.
 * Environment variables (like RESEND_API_KEY, SENDGRID_API_KEY, SLACK_WEBHOOK_URL, or CRM tokens)
 * can be configured securely in the Netlify Dashboard without exposing them to the client-side bundle.
 */

export default async (req, context) => {
  // Handle pre-flight CORS if called from external origins
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
    });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const data = await req.json();

    // Log submitted assessment request metadata
    console.log("New SECERA Assessment Scoping Request:", {
      fullName: data.fullName,
      workEmail: data.workEmail,
      companyName: data.companyName,
      service: data.primaryService,
      timeline: data.timeline,
      timestamp: new Date().toISOString(),
    });

    // Optional: If you configure a Slack Webhook or Email service in Netlify environment variables:
    /*
    if (process.env.SLACK_WEBHOOK_URL) {
      await fetch(process.env.SLACK_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: `🚨 *New SECERA Assessment Request*\n*Name:* ${data.fullName}\n*Company:* ${data.companyName}\n*Email:* ${data.workEmail}\n*Service:* ${data.primaryService}\n*Timeline:* ${data.timeline}\n*NDA Required:* ${data.ndaRequired ? "Yes" : "No"}`
        })
      });
    }
    */

    return new Response(
      JSON.stringify({
        success: true,
        message: "Assessment request received. 24-hour SLA initiated.",
        referenceId: `SEC-${Date.now().toString(36).toUpperCase()}`,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  } catch (error) {
    console.error("Error processing assessment request:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Failed to process assessment request",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};

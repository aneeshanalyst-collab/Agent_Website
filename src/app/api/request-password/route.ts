import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    console.log(`[PASSWORD REQUEST] Email: ${email} | Subject: Requesting password for resume | To: aneesh.analyst@gmail.com`);

    // Dispatch automated email via FormSubmit API directly to aneesh.analyst@gmail.com
    const formSubmitUrl = "https://formsubmit.co/ajax/aneesh.analyst@gmail.com";
    
    const params = new URLSearchParams();
    params.append("_subject", "Requesting password for resume");
    params.append("_replyto", email);
    params.append("Requester Email", email);
    params.append("Message", `User ${email} has requested the password to unlock your PDF resume.`);
    params.append("_captcha", "false");

    const response = await fetch(formSubmitUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
        "Referer": "http://localhost:3000/resume"
      },
      body: params.toString(),
    });

    const responseData = await response.json();
    console.log("[FORMSUBMIT RESPONSE]", responseData);

    return NextResponse.json({
      success: true,
      message: `Automated password request for ${email} has been dispatched to aneesh.analyst@gmail.com.`,
      data: responseData,
    });
  } catch (error) {
    console.error("Error processing password request:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from "next/server";

// In a real application, you would use a database
// For now, we'll store applications in memory (will reset on server restart)
let applications: any[] = [];

export async function GET(request: NextRequest) {
  try {
    // In production, add authentication check here
    return NextResponse.json(applications);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch applications" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const newApplication = {
      id: Date.now().toString(),
      ...body,
      submittedAt: new Date().toISOString(),
    };

    applications.push(newApplication);

    // In production, you would:
    // 1. Save to database
    // 2. Send confirmation email to user
    // 3. Send notification email to admin

    return NextResponse.json(
      {
        success: true,
        message: "Application submitted successfully",
        application: newApplication,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 }
    );
  }
}

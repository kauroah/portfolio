"use server"

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  // Validate inputs
  if (!name || !email || !subject || !message) {
    return { success: false, error: "All fields are required" }
  }

  // Log the message for now (in production, you would integrate with Resend or another email service)
  console.log("📧 Contact Form Submission:", {
    name,
    email,
    subject,
    message,
    timestamp: new Date().toISOString(),
  })

  // Simulate successful send
  return { success: true }
}

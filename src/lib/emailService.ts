/**
 * Email Service using EmailJS for sending confirmation emails
 */
import emailjs from "@emailjs/browser";

export async function sendConfirmationEmail(
  name: string,
  email: string,
): Promise<{ success: boolean; message: string }> {
  try {
    console.log(`Sending confirmation email to ${name} at ${email}`);

    const templateParams = {
      user_name: name,
      user_email: email,
      message: `Thank you for subscribing to our newsletter!`,
    };

    const result = await emailjs.send(
      "service_3tv6rui",
      "template_b2bwzw8",
      templateParams,
      "qw1m7N_6QwVONUW6g",
    );

    console.log("Email sent successfully:", result.text);

    return {
      success: true,
      message: "Confirmation email sent successfully",
    };
  } catch (error: any) {
    console.error("Error sending confirmation email:", error);
    return {
      success: false,
      message: error.message || "Failed to send confirmation email",
    };
  }
}

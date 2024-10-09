import { GOOGLE_EMAIL } from "$env/static/private"
import transporter from "$lib/transporter.server"
import { json } from "@sveltejs/kit"

// Sends email with data from contact form
export const actions = {
    default: async ({ request }) => {
        try {
            const formData = await request.formData()

            let name = formData.get("name")
            let email = formData.get("email")
            let message = formData.get("message")

            // Check if all required fields are present
            if (!name || !email || !message) {
                console.error("Missing form data:", { name, email, message })
                return json({ error: "Missing form data" }, { status: 400 })
            }

            /** Escapes unsafe HTML characters. */
            function escapeHtml(unsafeHtml: string) {
                return unsafeHtml
                    .replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&#039;")
            }

            name = escapeHtml(String(name))
            email = escapeHtml(String(email))
            message = escapeHtml(String(message))

            /** Shortens form data to match maxLength limit. */
            function shortenString(longString: string, length: number) {
                return longString.substring(0, length)
            }

            name = shortenString(name, 100)
            email = shortenString(email, 100)
            message = shortenString(message, 5000)

            // Add email header
            let html = `<h4>Email from ${name} (${email})</h4>`

            // Add email body
            String(message)
                .split("\n")
                .forEach((paragraph: string) => {
                    html += `<p>${paragraph}</p>`
                })

            // Build email object
            const newEmail = {
                from: GOOGLE_EMAIL,
                to: "leon@obrm.de",
                subject: "Portfolio Contact Form",
                html: html,
            }

            // Send email
            await new Promise((resolve, reject) => {
                transporter.sendMail(newEmail, (err, info) => {
                    if (err) {
                        console.log(err)
                        reject(err)
                    } else resolve(info)
                })
            })

            console.log(`Email sent from ${name} (${email})`)

            // Return 200 response
            return {
                status: 200,
                body: { success: true, message: "Email sent successfully!" },
            }
        } catch (e: unknown) {
            // @ts-expect-error The error is of type unknown as the try catch block can catch multiple different errors
            console.log(`An error occured while trying to send email: ${e.stack}`)

            // Return 500 response
            return json({ error: "Failed to send email" }, { status: 500 })
        }
    },
}

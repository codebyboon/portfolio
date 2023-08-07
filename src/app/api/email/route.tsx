import { NextRequest, NextResponse } from 'next/server'
import { mailOptions, transporter } from '../../../config/nodemailer'

export const runtime = 'nodejs'

/*To process POST request to send email upon submitting form in Contact section*/
export async function POST(req: NextRequest) {

  const {name, email, subject, message} = await req.json()

  if(!name || !email || !subject || !message) {
    return NextResponse.json({message: "Bad Request due to inputs"}, {status: 400})
  }
  
  try {
    const post = {name, email, subject, message}
    transporter.sendMail({
      ...mailOptions,
      subject: "codebyboon.com :: " + post.subject,
       html: `<h3>From: ${post.name} <${post.email}></h3>
       
       <p>${post.message}</p>`
    })

    return NextResponse.json({message: "OK"}, {status: 200})
  }
  catch(err) {
    return NextResponse.json({message: "Error", err})

  }
}
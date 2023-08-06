import { headers } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { sendEmail } from '../../../../lib/api'

export async function GET(request: Request) {return new Response('hi')}

export async function POST(req: NextRequest) {
  const {email, subject, message} = await req.json()
  
  try {
    const post = {email, subject, message}
    sendEmail(post)
    return NextResponse.json({message: "OK", post}, {status: 201})
  }
  catch(err) {
    return NextResponse.json({message: "Error", err})

  }
}
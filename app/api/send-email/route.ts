import { sendMail } from "@/app/lib/email";


export interface Credentials{
  firstname: string;
  lastname: string;
  email: string;
  message: string;
  plan: string;
}

export async function POST(request: Request){
  try{
    const data: Credentials = await request.json();
    await sendMail(data);
    return Response.json(data);
    
  } catch(error){
    console.error(error);
  }
}
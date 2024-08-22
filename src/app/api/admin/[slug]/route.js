import { NextResponse } from "next/server";
// import { Authetication } from "@/helpers/Auth";
import Controller from "./controller";

export async function GET(request, { params }) {
  let output = { status: "error", message: "No route found" };
  const slug = params.slug;

  switch (slug) {
   

    case "getadminmodule":
      output = await Controller.getAdminModuleById(request);
      break;

    default:
    // no route
  }

  return NextResponse.json(output);
}

export async function POST(request, { params }) {
  let output = { status: "error", message: "No route found" };
  const slug = params.slug;

  switch (slug) {

    case "signin":
      output = await Controller.signIn(request);
      break;

    case "signup":
      output = await Controller.signUp(request);
      break;

    case "updateadminmodule":
      output = await Controller.updateAdminModule(request);
      break;

    default:
    // no route 
  }

  return NextResponse.json(output);
}




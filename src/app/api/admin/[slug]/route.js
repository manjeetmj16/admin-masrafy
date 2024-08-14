import { NextResponse } from "next/server";
// import { Authetication } from "@/helpers/Auth";
import Controller from "./controller";

export async function GET(request, { params }) {
  // const authResult = await Authetication(request);
  // if (authResult?.status && authResult.status == "error") {
  //   return NextResponse.json(authResult);
  // }

  let output = { status: "error", message: "No route found" };
  const slug = params.slug;

  switch (slug) {
    case "getItems":
      output = await Controller.getItems(request);
      break;

    default:
    // no route
  }

  return NextResponse.json(output);
}

export async function POST(request, { params }) {
    // console.log("call api")
  // const authResult = await Authetication(request);
  // if (authResult?.status && authResult.status == "error") {
  //   return NextResponse.json(authResult);
  // }

  let output = { status: "error", message: "No route found" };
  const slug = params.slug;

  switch (slug) {
    case "updateadminmodule":
      output = await Controller.updateAdminModule(request);
      break;

    default:
    // no route 
  }

  return NextResponse.json(output);
}




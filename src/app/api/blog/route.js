import Blog from "@/app/models/Blog";
import { connectToDB } from "@/database";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDB();

    const getBlogs = await Blog.find({});
    if (getBlogs) {
      return NextResponse.json({
        success: true,
        data: getBlogs
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Fail! The blogs are not available.",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong while trying to fetch the blogs",
    });
  }
}

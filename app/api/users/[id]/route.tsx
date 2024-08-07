import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: { id: params.id },
  });
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  return NextResponse.json(user);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // Validate the request body
  const body = await request.json();
  // if invalid return 400
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  // Fetch the user with the given id
  const user = await prisma.user.findUnique({
    where: { id: params.id },
  });

  // if user does'nt exist, return 404
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: {
      name: body.name,
      email: body.email,
    },
  });

  // Return the updated user
  return NextResponse.json(updatedUser);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // Fetch user from db
  const user = await prisma.user.findUnique({
    where: { id: params.id },
  });

  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  // If not found, return 404

  await prisma.user.delete({
    where: { id: user.id },
  });

  return NextResponse.json("User successfully deleted");
  // Delete User
  // Return 200
}

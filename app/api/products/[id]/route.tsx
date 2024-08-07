import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string; name: string; price: number } }
) {
  const product = await prisma.products.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!product)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  return NextResponse.json(product);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string; name: string; price: number } }
) {
  // Validate the request body
  const body = await request.json();
  // if invalid return 400
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  // Fetch the product with the given id
  const product = await prisma.products.findUnique({
    where: { id: parseInt(params.id) },
  });

  // if product does'nt exist, return 404
  if (!product)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  const updatedProduct = await prisma.products.update({
    where: { id: product.id },
    data: {
      name: body.name,
      price: body.price,
      description: body.description,
    },
  });
  return NextResponse.json(updatedProduct);
  // Return the updated product
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // Fetch product from db
  const product = await prisma.products.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!product)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  await prisma.products.delete({
    where: { id: product.id },
  });

  // If not found, return 404
  return NextResponse.json("Product successfully deleted");
  // Delete User
  // Return 200
}

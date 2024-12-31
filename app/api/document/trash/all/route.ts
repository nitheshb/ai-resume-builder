// /app/api/document/trash/all/route.ts
import { NextResponse } from "next/server";
// import { db } from "@/lib/db";
// import { documentTable } from "@/lib/db/schema";
import { eq, and, desc } from "drizzle-orm";
// import { auth } from "@clerk/nextjs";
import { db } from "@/db";
import { getKindeServerSession } from "@/lib/kinde";
import { document } from "@/db/drizzle/schema";


export async function GET(request: Request) {
  console.log('check it===>',request)
  try {
    // const { userId } = getAuthUser();
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    if (!user || !user.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const documents = await db
      .select()
      .from(document)
      .where(
        and(
          eq(document.userId, user.id),
          eq(document.status, "archived")
        )
      )
      .orderBy(desc(document.updatedAt));

    return NextResponse.json(documents);

  } catch (error) {
    console.error("[TRASH_DOCUMENTS]", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Types for the response (can be in a separate types file)
interface TrashDocument {
  id: string;
  title: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  isArchived: boolean;
  isPublished: boolean;
}
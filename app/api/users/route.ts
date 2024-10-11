import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { connectToDB } from "@/lib/connectToDB";
import User from "@/lib/models/User";



export const GET = async () => {
    const { userId } = auth();

    if (!userId) return NextResponse.json({ message: "User not found" }, { status: 401 });
    try {
        await connectToDB();

        let user = await User.findOne({ clerkId: userId });

        if (!user) {
            user = await User.create({ clerkId: userId });
            await user.save();
        }
        return NextResponse.json(user, { status: 200 })
    } catch (error) {
        console.error("User GET", error);
        return new NextResponse("Internal server error", { status: 500 })

    }
}

export const dynamic = "force-dynamic"
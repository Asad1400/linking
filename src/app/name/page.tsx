'use client';

import { useRouter } from "next/navigation";

export default function GiveName() {
    const router = useRouter();

    return (
        <div>
            My name is Muhammad Asad Ullah
            <br />
            <button type="button" onClick={() => router.push('/')}>Go to Home</button>
        </div>
    )
}
"use client"  // Fixes this error: "You're importing a component that needs `useActionState`. This React hook only works in a client component. To fix, mark the file (or its parent) with the `"use client"` directive.
import {useActionState} from 'react'
import Link from "next/link";
import {register} from '@/actions/auth';
export default function Register() {
    const [state, action, isPending] = useActionState(register, undefined);
    return (
        <div className="container w-1/2">
            <h1 className="title">Register</h1>
            <form action="" className="space-y-4">
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email"/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password"/>
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" name="confirmPassword"/>
                </div>
                <div className="flex items-end gap-4">
                    <button className="btn-primary">Register</button>
                    <Link href="/" className="text-link">or login here</Link>
                </div>
            </form>
        </div>
    );
}
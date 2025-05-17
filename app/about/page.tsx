'use client'

import { useRouter } from 'next/navigation';
import './page.css';

export default function About() {
    const router = useRouter();

 return (
 <div className="about">
    
 <h1>About Page</h1>
 <p>This page is all about our Next.js project.</p>

 <button onClick={() => router.push('/')}>
    Return
 </button>
 </div>
 );
}
'use client';
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

 
 return (
 <div>
  <div className="mainPage">
    <h1>Welcome to My Next.js App!</h1>
    <p>This is the homepage customized by Ada.</p>
    <button onClick={() => router.push('/about')}>
     Go to About
    </button>
  </div>



 </div>
 );
}
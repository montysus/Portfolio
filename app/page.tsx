// Page.tsx
import Image from 'next/image';

export default function Page() {
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg w-1/2 mx-auto">
        <div className="flex items-center justify-center mb-4">
          <Image
            src="/images/face.jpeg" // Make sure to replace 'your-face.jpg' with your actual image file name
            alt="Your Face"
            width={100}
            height={100}
            className="rounded-full mr-4"
          />
          <h1 className="text-6xl font-bold">MONTY</h1>
        </div>
        <p className="text-lg text-gray-300">
          Welcome to my portfolio! I'm Monty, and I'm excited to share my work with you.
        </p>
      </div>
    </section>
  );
}

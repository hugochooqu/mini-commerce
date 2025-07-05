import Link from "next/link";

export default function NotFound() {
  return (
    <div className="p-6 text-center h-[440px]">
      <h2 className="text-3xl font-bold">Page Not Found</h2>
      <Link href="/" className="text-black underline mt-4 block">
        Return Home
      </Link>
    </div>
  );
}

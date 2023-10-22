import Link from "next/link";

export default function Logo() {
  return (
    <Link
      className="block group font-bold text-[20px] font-helvetica text-[#064EA4]"
      href="/"
      aria-label="home"
    >
      Software Recruitment co.
    </Link>
  );
}

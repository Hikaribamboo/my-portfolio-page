import Link from "next/link";
import Image from "next/image";

const navItems = [
  { href: "#profile", label: "Profile" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

const Sidebar = () => {
  return (
    <aside className="hidden sm:flex fixed top-0 left-0 h-full w-64 bg-white border-r shadow-sm flex-col justify-between px-6 py-8 z-50">
      {/* 上部：アイコンと名前 */}
      <div>
        <div className="flex flex-col items-center mb-8">
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={80}
            height={80}
            className="rounded-full border"
          />
          <h1 className="mt-4 text-xl font-semibold text-gray-800">Your Name</h1>
          <p className="text-sm text-gray-500">Full Stack Developer</p>
        </div>

        {/* メニュー */}
        <nav>
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block text-gray-700 hover:text-blue-500 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* SNSアイコン（任意） */}
      <div className="flex gap-4 justify-center text-gray-500">
        <a href="https://github.com/yourname" target="_blank" rel="noopener noreferrer">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.43 7.86 10.96.58.1.79-.25.79-.55 0-.27-.01-1.14-.02-2.07-3.2.7-3.88-1.54-3.88-1.54-.53-1.33-1.3-1.69-1.3-1.69-1.07-.74.08-.73.08-.73 1.19.08 1.81 1.22 1.81 1.22 1.05 1.8 2.76 1.28 3.44.98.11-.76.41-1.28.75-1.58-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.3 1.2-3.11-.12-.3-.52-1.52.12-3.16 0 0 .97-.31 3.17 1.19.92-.26 1.9-.4 2.88-.41.98.01 1.96.14 2.88.41 2.2-1.5 3.17-1.19 3.17-1.19.64 1.64.24 2.86.12 3.16.75.81 1.2 1.85 1.2 3.11 0 4.43-2.71 5.41-5.29 5.69.42.37.8 1.1.8 2.22 0 1.6-.01 2.89-.01 3.29 0 .3.21.66.8.55A10.52 10.52 0 0 0 23.5 12c0-6.28-5.22-11.5-11.5-11.5z" />
          </svg>
        </a>
        {/* 他SNSもここに追加可能 */}
      </div>
    </aside>
  );
}

export default Sidebar
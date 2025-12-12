import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold">Casbin</h1>
        <p className="mb-8 max-w-2xl text-xl text-gray-600">
          An authorization library that supports access control models like ACL, RBAC, ABAC, ReBAC, PBAC, OrBAC, BLP, Biba, LBAC, UCON for Golang, Java, C/C++, Node.js, Javascript, PHP, Laravel, Python, .NET (C#), Delphi, Rust, Ruby, Swift (Objective-C), Lua (OpenResty), Dart (Flutter) and Elixir
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/docs"
            className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
          >
            Get Started
          </Link>
          <Link
            href="https://github.com/casbin/casbin"
            className="rounded-lg border border-gray-300 px-6 py-3 hover:bg-gray-100"
            target="_blank"
          >
            GitHub
          </Link>
        </div>
      </div>
    </main>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-x py-28 text-center">
      <p className="eyebrow text-terra-600">404</p>
      <h1 className="mt-4 text-5xl text-cenote-900 sm:text-6xl">This path goes a little too <em>deep</em>.</h1>
      <p className="mx-auto mt-5 max-w-md text-lg text-ink-soft">The page you were looking for doesn&rsquo;t exist, but plenty of Mexico does.</p>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn btn-primary">Back to home</Link>
        <Link href="/destinations" className="btn btn-outline text-cenote-800">Explore destinations</Link>
      </div>
    </section>
  );
}

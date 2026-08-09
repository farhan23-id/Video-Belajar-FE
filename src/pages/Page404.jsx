import { Link } from "react-router";

function Page404() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-5 text-center">
      <h1 className="heading-2 lg:heading-1">Oops! Halaman Tidak Ditemukan</h1>
      <p className="heading-5 lg:heading-4">
        Kembali ke{" "}
        <Link
          to="/"
          className="text-info-default hover:text-info-hover active:text-info-pressed underline"
        >
          Beranda
        </Link>
      </p>
    </main>
  );
}

export default Page404;

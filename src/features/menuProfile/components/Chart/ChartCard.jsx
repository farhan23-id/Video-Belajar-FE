function formatDateTime(date) {
  return new Date(date).toLocaleString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Jakarta",
  });
}

function ChartCard(props) {
  const { date, image, title, price } = props;

  return (
    <div className="border border-border rounded-[10px]">
      <header className="bg-[#E2FCD933] border-b border-border px-4.5 py-3 flex flex-col justify-between gap-3 lg:flex-row">
        <div className="flex items-center gap-2.5">
          <p className="flex gap-2 bodySmall-M lg:bodyLarge-M">
            <span className="hidden lg:block text-textDark-secondary">
              No. Invoice:
            </span>
            <span className="underline text-info-default">HEL/VI/1234567</span>
          </p>
          <p className="text-textDark-secondary flex flex-row gap-2 bodySmall-M lg:bodyLarge-M">
            <span className="hidden lg:block">Waktu Pembayaran</span>
            <span>{formatDateTime(date)}</span>
          </p>
        </div>
        <div
          className={`pill bg-secondary-100 w-fit rounded-[10px] px-2.5 py-1 text-secondary bodySmall-R lg:bodyMedium-R`}
        >
          Waiting
        </div>
      </header>

      <main className="border-b border-border bg-primaryBg px-4.5 py-3 flex flex-col gap-2 justify-between lg:p-5 lg:gap-9 lg:flex-row">
        <div className="flex items-center gap-4">
          <img
            src={`/asset/catalog/${image}`}
            alt="img.jpg"
            className="size-13 rounded-[10px]"
          />
          <p className="bodyLarge-M text-textDark-primary">{title}</p>
        </div>

        <p className="hidden lg:block border-r border-border"></p>

        <div className="flex flex-col gap-2">
          <p className="bodyMedium-M text-textDark-secondary">Harga</p>
          <p className="heading-6 text-textDark-primary">
            Rp {Number(price).toLocaleString("id-ID")}
          </p>
        </div>
      </main>

      <footer className="bg-[#E2FCD933] flex justify-between items-center px-4.5 py-3 lg:px-5 lg:py-4">
        <p className="bodySmall-M text-textDark-secondary">Total Pembayaran</p>
        <p className="bodyMedium-Sb text-primary lg:heading-6">
          Rp {Number(price).toLocaleString("id-ID")}
        </p>
      </footer>
    </div>
  );
}

export default ChartCard;

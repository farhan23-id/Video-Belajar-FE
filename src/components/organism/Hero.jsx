import Button from "../atoms/Button"

function Hero() {
    return (
        <section
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('asset/hero/hero_main.jpg')` }}
            className="bg-cover bg-center bg-no-repeat min-h-100 rounded-[10px] py-16 px-5 text-center  flex flex-col justify-center items-center gap-6 lg:pt-20.5 lg:pb-16 lg:px-35"
        >

            <div className="hero-text flex flex-col gap-3 mx-auto h-full">
                <h1
                    className="heading-4 lg:heading-1 text-textLight-primary">
                    Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!
                </h1>
                <p
                    className="bodySmall-M lg:bodyMedium-M text-textLight-primary">
                    Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi.
                    Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan
                    pemahaman Anda.
                </p>
            </div>

            <Button variant="primaryContained" className="bodySmall-R lg:bodyMedium-B">Temukan Video Course Untuk Dipelajari!</Button>
        </section>
    )
}

export default Hero
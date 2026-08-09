import Label from "../atoms/Label"
import Input from "../atoms/Input"
import Button from "../atoms/Button"


function BannerCTA() {
    return (
        <section style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("asset/bannerCTA/BannerCTA.jpg")` }}
            className="bg-cover bg-center bg-no-repeat rounded-[10px]">
            <form action="" className="subscribe flex flex-col justify-center items-center gap-10 min-h-100 py-17 px-5 lg:py-23 lg:px-[337.5px]">

                <div className="banner-text flex flex-col justify-center items-center gap-1">
                    <h2 className="bodyMedium-M lg:bodyLarge-M text-textLight-secondary ">
                        NEWSLETTER
                    </h2>

                    <div className="banner-description flex flex-col justify-center items-center gap-2.5 ">
                        <h3 className="heading-4 lg:heading-3 text-textLight-primary text-center">
                            Mau Belajar Lebih Banyak?
                        </h3>

                        <p className="bodySmall-R lg:bodyMedium-R text-textLight-primary text-center">
                            Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik hariesok.id
                        </p>
                    </div>
                </div>

                <div className="subscribe-btn rounded-[0.625rem] flex w-full flex-col gap-4 items-center lg:flex-row lg:bg-primaryBg lg:gap-5 lg:py-2 lg:pr-2 lg:pl-5">

                    <Label htmlFor="subsEmail" className="hidden">E-Mail</Label>
                    <Input id="SubsEmail"
                        type="email"
                        placeholder="Masukkan Emailmu"
                        required={true}
                        className="bodySmall-R lg:bodyMedium-R w-full text-center bg-primaryBg focus:outline-none rounded-[10px] py-2.5 px-2  flex-1 lg:bg-transparent lg:border-none lg:p-2 lg:text-left" />

                    <Button variant="secondaryContained"
                        className="w-full whitespace-nowrap lg:w-auto">
                        Subscribe
                    </Button>

                </div>

            </form>
        </section>
    )
}

export default BannerCTA
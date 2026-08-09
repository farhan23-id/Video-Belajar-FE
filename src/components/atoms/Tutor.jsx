

const tutors = {
    tutor_1: {
        avatar: "avatar_1.png",
        name: "Bowo",
        job: "Senior Front-End Engineer",
        company: "Tech Corporate BUMN"
    },
    tutor_2: {
        avatar: "avatar_2.png",
        name: "Rian Kurnia",
        job: "Tech Lead Full-Stack",
        company: "Gojek"
    },
    tutor_3: {
        avatar: "avatar_3.png",
        name: "Siti Rahma",
        job: "Data Scientist Specialist",
        company: "SatuData Indonesia"
    },
    tutor_4: {
        avatar: "avatar_4.png",
        name: "Aris Munandar",
        job: "VP of Product & UI/UX",
        company: "Tokopedia"
    },
    tutor_5: {
        avatar: "avatar_5.png",
        name: "Dedi Wijaya",
        job: "Cyber Security Analyst",
        company: "Badan Siber Sandi Negara"
    },
    tutor_6: {
        avatar: "avatar_6.png",
        name: "Faisal Amir",
        job: "Cloud Solution Architect",
        company: "Telkom Indonesia"
    },
    tutor_7: {
        avatar: "avatar_7.png",
        name: "Nadia Utami",
        job: "Senior Mobile Developer",
        company: "Bukalapak"
    },
    tutor_8: {
        avatar: "avatar_8.png",
        name: "Hendra Putera",
        job: "Head of Product Management",
        company: "Traveloka"
    },
    tutor_9: {
        avatar: "avatar_1.png",
        name: "Agus Pratama",
        job: "Principal Backend Architect",
        company: "Bank Mandiri Digital"
    }

}

function Tutor({ variant = "tutor_1" }) {

    const tutor = tutors[variant] || tutors.tutor_1;

    return (

        <div className="flex items-center gap-2  lg:gap-2.5">
            <img src={`asset/avatar/${tutor.avatar}`}
                alt="Tutor.jpg"
                className="rounded-[0.625rem] w-9 h-9 lg:w-10 lg:h-10" />

            <div className="">
                <h3 className="bodySmall-M lg:bodyMedium-M text-textDark-primary">{tutor.name}</h3>
                <p className="text-[0.75rem] bodySmall-R lg:text-[14px] text-textDark-secondary">{tutor.job} <span className="hidden lg:inline-block">di</span> <span className="bodySmall-B hidden lg:inline-block"> {tutor.company}</span>
                </p>
            </div>
        </div>
    )
}

export default Tutor
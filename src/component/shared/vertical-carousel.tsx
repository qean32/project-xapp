import React from "react";
import { empielogoImg, animalhideImg, sneakersImg, musicImg } from "../import";

export const VerticalCarousel: React.FC<{}> = React.memo(() => {
    const [index, setIndex] = React.useState<number>(0)
    const [carouselStyle, setCarouselStyle] = React.useState<React.CSSProperties>({ transform: 'translateY(0%)' })

    React.useEffect(() => {
        const intervalID = setInterval(() => setIndex((prev: any) => prev + 1), 5000);

        return () => {
            clearInterval(intervalID)
        }
    }, [])

    React.useEffect(() => {
        setCarouselStyle({ transform: `translateY(-${index * 25}%)` })

        if (index == 4) {
            setIndex(0)
        }
    }, [index])

    return (
        <div className="Z-10 plate-color" onClick={() => setIndex((prev: any) => prev + 1)}>
            <div className="w-100">
                <div style={{ ...carouselStyle, height: 'calc(100% * 4)' }} className="transition07">
                    <CarouselItem icon={<img className="carousel-img" src={animalhideImg} alt="" width={55} />} text="В разработке" />
                    <CarouselItem icon={<img className="carousel-img" src={empielogoImg} alt="" width={55} />} text="Оценили проект?" />
                    <CarouselItem icon={<img className="carousel-img" src={musicImg} alt="" width={55} />} text="Музыка продливает жизнь" />
                    <CarouselItem icon={<img className="carousel-img" src={sneakersImg} alt="" width={55} />} text="Занимайтесь спортом!" />
                </div>
            </div>
        </div>
    );
})

type Props = {
    icon: React.ReactNode
    text: string
}

const CarouselItem: React.FC<Props> = ({ icon, text }: Props) => {
    return <div className="h-1/4 flex justify-center flex-col gap-5 items-center">{icon}<p>{text}</p></div>
}
import React from "react";

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
                    <CarouselItem icon={<></>} text="zxczxc" />
                    <CarouselItem icon={<></>} text="zxczxc" />
                    <CarouselItem icon={<></>} text="zxczxc" />
                    <CarouselItem icon={<></>} text="zxczxc" />
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
    return <div className="h-1/4 flex justify-center items-center">{icon}<p>{text}</p></div>
}
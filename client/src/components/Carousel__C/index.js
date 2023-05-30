import { Carousel } from "antd"

export const Carousel__C = ({imageList}) => {

    return (
        <Carousel effect='fade'autoplay>
            {imageList.map(imageUrl => (
                <center>
                    <img src={imageUrl} style={{width: '100vw', height: 'auto'}}/>
                </center>
            ))}
        </Carousel>
    )
}
import { url } from 'inspector';
import {FC} from 'react';
import '../styles/imageWidget.scss';

interface Props{
    title:string,
    imageUrl:string
}

const ImageWidget : FC<Props> = ({title,imageUrl}) => {
    return (
        <div className='image-widget' 
        style={{backgroundImage:`url(${imageUrl})`,objectFit:"contain",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}
        >
            <div>
                <h2>{title}</h2>
                <h3>Shop Now</h3>
            </div>
        </div>
    );
}

export default ImageWidget;
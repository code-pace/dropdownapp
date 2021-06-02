import React, {useState, useEffect} from 'react'

const ImageSlider = ({slide}) => {
    const [index, setIndex] = useState(0);
    useEffect(()=>{
        if(index < 0) {
            setIndex(slide.length -1);
        };
        if(index > slide.length -1) {
            setIndex(0);
        };
    },
    [index, slide])
    useEffect(()=>{
        let timer = setInterval(()=>{
            setIndex(index + 1);
        }, 3000);
        return (()=>{
            clearInterval(timer);
        })
    }, 
    [index]);
    return (
        <section className="image-slider">
            {slide.map((slides, slideIndex)=>{
                const {name, age, image, id, message} = slides;
                let position = "slideRight";
                if(slideIndex === index) {
                    position = "activeSlide";
                }
                if(slideIndex === index - 1 || (index === 0 && slideIndex === slide.length -1)) {
                    position = "slideLeft";
                }
                return (
                    <article key={id} className={position}>
                        <div className="content">
                            <img src={image} alt={name} />
                            <h1 className="image-name">{name}</h1>
                            <p>{age}</p>
                            <i className="fas fa-quote-left"></i>
                            <p>{message}</p>
                        </div>
                    </article>
                )
            })}
            <div className="slideBtn">
                <button onClick={()=>{setIndex(index - 1)}} className="btnLeft"><i className="fas fa-chevron-left"></i></button>
                <button onClick={()=>{setIndex(index + 1)}} className="btnRight"><i className="fas fa-chevron-right"></i></button>
            </div>
        </section>
    )
}

export default ImageSlider

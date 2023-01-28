import img1 from "../../../background/otv4 1.png";
import img2 from "../../../background/2 21.png";
import img3 from "../../../background/junilos-astra-2-1024x709 1.png";
import img4 from "../../../background/1-14781_white-clouds-png-clipart-baby-e-kill-the 16.png";
import img5 from "../../../background/1-14781_white-clouds-png-clipart-baby-e-kill-the 20.png";
import img6 from "../../../background/134A 1.png";

export const BackgroundImages = () => {
    return(
        <>
            <img alt='true' src={img1} style={{position: 'absolute', left: '0', top: '1101px', zIndex: '1'}}/>
            <img alt='true' src={img2} style={{position: 'absolute', right: '0', top: '1166px', zIndex: '1'}}/>
            <img alt='true' src={img3} style={{position: 'absolute', left: '0', bottom: '334px', zIndex: '1'}}/>
            <img alt='true' src={img4} style={{position: 'absolute', left: '0', bottom: '725px', zIndex: '1'}}/>
            <img alt='true' src={img5} style={{position: 'absolute', right: '0', bottom: '25px', zIndex: '1'}}/>
            <img alt='true' src={img6} style={{position: 'absolute', right: '0', bottom: '373px', zIndex: '1'}}/>
        </>
    )
}
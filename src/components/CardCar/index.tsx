import './styles.css';
import carImg from '../../assets/car.png';

export default function CardCar() {

    return (
        <>
            <div className="dsct-card-car dsct-container">
                <img src={carImg} alt="Carro" />
                <p>Lorem ipsum dolor</p>
            </div>
        </>
    );
}
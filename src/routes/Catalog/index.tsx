import './styles.css';
import Header from "../../components/Header";
import CardCar from '../../components/CardCar';

export default function Catalog() {

    return (
        <>
            <Header />
            <main className="dsct-main-container">
                <section id="dsct-card-car">
                    <div className="dsct-card-title">
                        <h3>Venha nos visitar</h3>
                    </div>
                    <div className="dsct-card-car-container">
                        <CardCar />
                        <CardCar />
                    </div>
                </section>
            </main>
        </>
    );
}
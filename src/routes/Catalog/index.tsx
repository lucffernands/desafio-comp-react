import './styles.css';
import Header from "../../components/Header";
import CardCar from '../../components/CardCar';
import CardComment from '../../components/CardComment';
import Footer from '../../components/Footer';

export default function Catalog() {

    return (
        <>
            <Header />

            <main>
                <section id="dsct-card-car">
                    <div className="dsct-card-car-container">
                        <h3>Venha nos visitar</h3>  
                        <CardCar />
                        <CardCar />
                    </div>
                </section>

                <section id="dsct-card-comment">
                    <div className="dsct-card-comment-container">
                        <h3>O que estão dizendo</h3>
                        <CardComment />
                        <CardComment />
                        <CardComment />
                        <CardComment />
                        <CardComment />
                    </div>
                </section>
            </main>
            
            <Footer />
        </>
    );
}
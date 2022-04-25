import { BsPaypal } from 'react-icons/bs';
import { MdAccountBalanceWallet } from 'react-icons/md';
import { FaStripeS } from 'react-icons/fa';
import { Container } from './styles';

function CardSales() {
    return (
        <Container>
            <section className="cardSale">
                <div>
                    <span><BsPaypal /></span>
                    <p>Paypal balance</p>
                    <h3>$647,605.74</h3>
                </div>
            </section>
            <section className="cardSale">
                <div>
                    <span><FaStripeS /></span>
                    <p>Stripe balance</p>
                    <h3>$47,204.42</h3>
                </div>
            </section>

            <section className="cardTotal">
                <div className="box">
                    <section>
                        <span><MdAccountBalanceWallet /></span>
                        <div>
                            <p>Total balance</p>
                            <h3>$221,810.16</h3>
                        </div>
                    </section>
                </div>
            </section>
        </Container>
    );
}

export default CardSales;
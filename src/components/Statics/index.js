import { BiEnvelope } from 'react-icons/bi';
import { FiBarChart2, FiArrowUpRight } from 'react-icons/fi';
import { CgTree } from 'react-icons/cg';
import { Container } from './styles';

function Statics() {
    return (
        <Container>
            <section>
                <div>
                    <span className="iconChart"><FiBarChart2 /></span>
                    <h4>1478 286</h4>
                    <p>total visits</p>
                    <p><strong className="totalVisits"><FiArrowUpRight />63.07%</strong> Last month</p>
                </div>
            </section>
            <section>
                <div>
                    <span className="iconEnvelope"><BiEnvelope /></span>
                    <h4>32</h4>
                    <p>New forms</p>
                    <p><strong className="totalForms"><FiArrowUpRight />23.01%</strong> Last month</p>
                </div>
            </section>
            <section>
                <div>
                    <span className="iconTree"><CgTree /></span>
                    <h4>24</h4>
                    <p>Tress planted</p>
                    <p><strong className="totalPlanted"><FiArrowUpRight />4.07%</strong> Last month</p>
                </div>
            </section>
        </Container>
    );
}

export default Statics;
import { grid, card } from '../styles/components';

const QueryList = () => {
    return (
        <div className={grid}>
            <a href="/api/compound" className={card}>
                <h3>Compound</h3>
                <p>Get basic Compound markets data.</p>
            </a>
            <a href="/api/maker" className={card}>
                <h3>Maker</h3>
                <p>Get basic Maker markets data.</p>
            </a>
            <a href="/api/aave" className={card}>
                <h3>Aave</h3>
                <p>Get basic Aave markets data.</p>
            </a>
            <a href="/api/cream" className={card}>
                <h3>Cream</h3>
                <p>Get basic Cream markets data.</p>
            </a>
        </div>
    )
}

export default QueryList;

export default function Card({ icon, alt, texts }) {
    return (
        <div className="feature-item">
            <img src={icon} alt={alt} className="feature-icon" />
            <h3 className="feature-item-title">{texts.text1}</h3>
            <p>{texts.text2}</p>
        </div>
    );
}

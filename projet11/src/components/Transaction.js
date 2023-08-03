export default function Transaction({ account }) {
    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{account.argentBank}</h3>
                <p className="account-amount">{account.money}</p>
                <p className="account-amount-description">{account.balance}</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">
                    View transactions
                </button>
            </div>
        </section>
    );
}

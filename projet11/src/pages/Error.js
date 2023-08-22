import TitlePage from "../components/TitlePage";

export default function Error() {
    return (
        <>
            <TitlePage title={"Error 404"} />
            <main>
                <section className="error">
                    <h1>404</h1>
                    <p>Error 404 Page not found</p>
                </section>
            </main>
        </>
    );
}

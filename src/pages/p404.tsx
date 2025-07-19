import { changeTitle } from "../lib/function"

export const P404 = () => {
    changeTitle('404');

    return (
        <main className="flex justify-center items-center">
            <p style={{ fontSize: '90px' }}>
                404 page
            </p>
        </main>
    );
}
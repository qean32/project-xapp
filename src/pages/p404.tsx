import { useNavigate } from "react-router-dom";
import { Button } from "../component/ui";
import { changeTitle } from "../lib/function"

export const P404 = () => {
    changeTitle('404');
    const navigate = useNavigate()

    return (
        <main className="flex justify-center items-center flex-col">
            <p style={{ fontSize: '90px' }}>
                404 page
            </p>
            <div style={{transform: 'translateX(-80px)'}}>
                <Button function_={() => navigate('/')} place={'на главную'} />
            </div>
        </main>
    );
}
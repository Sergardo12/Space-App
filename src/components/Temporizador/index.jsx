import { useEffect, useState } from "react";

const Temporizador = () => {
    const [contador, establecerContador] = useState(0);

    useEffect(() => {
        const temporizador = setInterval(() => {
            establecerContador((contadorPrevio) => contadorPrevio + 1);
        }, 1000);

        return () => clearInterval(temporizador);
    }, []);

    return (
        <div>
            <h1>Contador: {contador}</h1>
        </div>
    );
};

export default Temporizador;
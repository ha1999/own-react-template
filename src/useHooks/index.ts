import { useEffect, useState } from "react";
export const useSizeScreen = () => {
    const [size, setSize] = useState(window.innerWidth);
    useEffect(() => {
        const updateDimensions = () => setSize(window.innerWidth);
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);
    return size;
}
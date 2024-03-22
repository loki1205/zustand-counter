import { Button } from "@mui/material";
import { useStore } from "./store";

export default function ButtonComponent(){
    const incrementCount = useStore(state => state.incrementCount);
    const decrementCount = useStore(state => state.decrementCount);
    return(
        <>
            <Button onClick={incrementCount} color="success" variant="contained">Increment</Button>
            <Button onClick={decrementCount} color="error" variant="contained">Decrement</Button>
        </>
    )
}
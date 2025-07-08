import { useDispatch, useSelector } from "react-redux";

export default function useChanger() {
    const value = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    
    return [value, dispatch];
}
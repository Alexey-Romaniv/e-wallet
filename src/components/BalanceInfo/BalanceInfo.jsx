import {useAuth} from "../../hooks/useAuth";

export const BalanceInfo = () => {
    const {wallet} = useAuth();
    return <>
    <div>Your balance</div>
        <div>$ {wallet}</div>
    </>
}
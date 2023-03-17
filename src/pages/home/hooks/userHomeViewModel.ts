import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import type { GithubResponse } from "../types";

export default function userHomeViewModel() {
    // viewModel
    const [user, setUser] = useState<string>("")

    const navigate = useNavigate()

    function handleIputChange(event: ChangeEvent<HTMLInputElement>) {
        setUser(event.target.value)
    }

    useEffect(() => {
        console.log("Foi criado")
    }, [])

    // esse método ele observa os useState passando no array
    useEffect(() => {
        console.log(user)

    }, [user])

    function gotoUserInfo() {
        if (user === "") {
            toast.warn("Por favor, digite um usuário!", {
                position: toast.POSITION.TOP_RIGHT
            });
        } else if (user.split(' ')[1]) {
            toast.warn("Por favor, digite um usuário válido!", {
                position: toast.POSITION.TOP_RIGHT
            });
        } else {
            navigate('/info', {
                state: {
                    gitHubUser: user
                }
            })
        }
    }
    return {
        user,
        handleIputChange,
        gotoUserInfo
    };
}

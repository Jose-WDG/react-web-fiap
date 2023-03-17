import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { GithubResponse, GithubUserRepos } from "../../home/types";

export default function useInfo(){
    const [userInfo, setUserInfo] = useState<GithubResponse>();
    const [repos, setRepos] = useState<GithubUserRepos[]>([]);
    
    const userLocation = useLocation()
    const user = userLocation.state.gitHubUser

    function fetchGithubApi() {
        if (user === "") {
            toast.warn("Por favor, digite um usuário!", {
                position: toast.POSITION.TOP_RIGHT
            });
        } else if (user.split(' ')[1]) {
            toast.warn("Por favor, digite um usuário válido!", {
                position: toast.POSITION.TOP_RIGHT
            });
        } else {
            //jose-wdg
            fetch("https://api.github.com/users/" + user)
                .then(r => r.json())
                .then((r: GithubResponse) => {
                    setUserInfo(r)
                    toast.success("Conseguimos achar o usuário do GitHub!", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    console.log(r)
                }).catch(e => {
                    toast.error("Usuário não encontrado.", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                })
        }
    }

    function fetchUserRepos(){
        fetch(`https://api.github.com/users/${userInfo?.login}/repos`)
        .then(r => r.json())
        .then((r: GithubUserRepos[]) => {
            setRepos(r)
        }).catch((e)=>{
            console.log(e)
            toast.error("Repositórios não encontrados.", {
                position: toast.POSITION.TOP_RIGHT
            });
        })
    }

    useEffect(() => {
        fetchUserRepos()
    }, [userInfo])

    useEffect(() => {
        fetchGithubApi()
    }, [])

    return {userInfo,repos};
}
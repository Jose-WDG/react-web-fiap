import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ReposList } from '../../components';
import { GithubResponse } from '../home/types';
import useInfo from './hooks/userInfo';
import { ContainerInfo, UserInfoArea, UserInfoContent } from './style';

function Info() {
    const { userInfo,repos } = useInfo()

    return (
        <ContainerInfo>
            <UserInfoArea>
                <img src={userInfo?.avatar_url} />
                <UserInfoContent>
                    <strong>Usuário: {userInfo?.name}</strong>
                    <span>login: {userInfo?.login}</span>
                    <span>Repositórios: {userInfo?.public_repos}</span>
                    <span>{userInfo?.bio}</span>
                    <a href={userInfo?.html_url} target="_blank">{userInfo?.html_url}</a>
                </UserInfoContent>
            </UserInfoArea>
            <ReposList repos={repos} />
        </ContainerInfo>
    )
}

export { Info };
import React, { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react"

export type user = {
    id: string
    nama: string
    email: string
    kata_sandi: string
    id_kategori_pengguna: number
}

export interface UserContextInterface {
    user: user
    setUser: Dispatch<SetStateAction<user>>
}

const defaultState = {
    user: {
        id: '',
        nama: '',
        email: '',
        kata_sandi: '',
        id_kategori_pengguna: 0
    },
    setUser: (user: user) => {}
} as UserContextInterface;

export const userContext = createContext(defaultState)

type UserProviderProps = {
    Children: ReactNode
}

export default function UserProvider({Children}: UserProviderProps) {
    const [user, setUser] = useState<user>({
        id: '',
        nama: '',
        email: '',
        kata_sandi: '',
        id_kategori_pengguna: 0
    })
    return (
        <userContext.Provider value={{user, setUser}}>
            {Children}
        </userContext.Provider>
    )
}
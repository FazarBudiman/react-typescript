class User {
    public static instance: User | null = null
    private id: string 
    private nama: string
    private email: string
    private kata_sandi: string
    private idKategoriPengguna: number

    private constructor(id: string, nama: string, email: string, kata_sandi: string, idKategoriPengguna: number){
        this.id = id
        this.nama = nama
        this.email = email
        this.kata_sandi = kata_sandi
        this.idKategoriPengguna = idKategoriPengguna
    }
    
    public getId() : string {
        return this.id
    }

    public getNama(): string {
        return this.nama
    }

    public getEmail() : string {
        return this.email
    }
    
    public getkata_sandi() : string {
        return this.kata_sandi
    }

    public getIdKategoriPengguna() : number {
        return this.idKategoriPengguna
    }

    public static getInstance(id: string, nama: string, email: string, kata_sandi: string, idKategoriPengguna: number): User {
        if (! User.instance) {
            User.instance = new User(id, nama, email, kata_sandi, idKategoriPengguna)
        }
        return User.instance
    }
    
    
}

export default User
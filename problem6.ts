{
    interface Profile {
        name: string;
        age: number;
        email: string;
    }

    function updateProfile(profile: Profile, updates: Partial<Profile>): Profile {
        return {
            ...profile , ...updates
        }

    }

    const myProfile = {
        name : "Asef Ahmed",
        age : 24,
        email: "asef@gmail.com"
    }

    const result = updateProfile(myProfile , {  age : 25} )
    console.log(result)
}
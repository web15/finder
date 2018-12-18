//alert("working1");

class Github {
    constructor()   {
        this.client_id = '0e13d9a486e2ebc321a8';
        this.client_secret = 'f763b3435f9cb93eb2aca5b21ee578ba249654c4';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}
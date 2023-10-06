async function getauthToken() {
    const authData = await fetch("http://20.244.56.144/train/auth", {
        method: 'POST',
        body: JSON.stringify(
            {
                "companyName": "LocoLink",
                "clientID": "13d34574-2535-4f48-b904-b965d3f2b3b1",
                "clientSecret": "KzddfZvtzFRwXkWB",
                "ownerName": "Vigneswaran",
                "ownerEmail": "vigneswaran0431@gmail.com",
                "rollNo": "8115U20AD047"
            })
    })
    const thisData = await authData.json()
    return thisData;
}

module.exports={getauthToken}
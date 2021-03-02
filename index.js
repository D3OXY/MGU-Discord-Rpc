var rpc = require("discord-rpc")
const client = new rpc.Client({
    transport: 'ipc'
})
client.on('ready', () => {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: "Join Now: discord.gg/mgu",
            assets: {
                large_image: "picsart_03-02-12_21_49",
                large_text: "https://www.instagram.com/malayaleegamersunited/",
                small_image: "image",
                small_text: "Test"
            },
            buttons: [{
                label: "Discord",
                url: "https://discord.com/invite/mgu"
            }, {
                label: "Instagram",
                url: "https://www.instagram.com/malayaleegamersunited/"
            }]
        }
    })
})
client.login({
    clientId: "815810339421159435"
}).catch(console.error);
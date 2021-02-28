const { Client } = require('discord-rpc'),
    client = new Client({ transport: 'ipc' }),
    config = require('./config.json');

client.on('ready', () => {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
            activity: {
                details: config.Discord_RPC.details,
                    assets: {
                        large_image: config.Discord_RPC.large_image,
                        large_text: config.Discord_RPC.large_text
                    },
                    buttons: [{ label: config.Discord_RPC.label, url: config.Discord_RPC.label_url }]
            }
    });
});

client.login({ clientId: config.Discord_RPC.clientid })
try { console.log('Logged!') } catch { console.error() }
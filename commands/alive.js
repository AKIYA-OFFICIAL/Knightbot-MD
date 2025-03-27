async function aliveCommand(sock, chatId) {
    try {
        const message = `*🤖 AKIYA OFFICIAL🤖*\n\n` +
                       `*AKILA SANDARUWAN*\n` +
                       `~*BOT IS ONLINE*~\n` +
                       `*Version:* 1.0.0\n` +
                       `*Status:* Online\n` +
                       `*Mode:* Public\n\n` +
                       `*🌟 Features:*\n` +
                       `• Group Management\n` +
                       `• Antilink Protection\n` +
                       `• Fun Commands\n` +
                       `• And more!\n\n` +

            `*FOLLOW THIS LINK*\n\n` +

            ``YOUTUBE`\n\n` +
                      `• https://www.youtube.com/@akiya_music\n\n` +
                      `• https://www.youtube.com/@GAMINGakiya_official\n\n` +
                      `• https://www.youtube.com/@AKIYA-topic_official\n\n` +
        
                       `_Type_ *.menu* _for full command list_`;
                      
        await sock.sendMessage(chatId, {
            text: message,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363161513685998@newsletter',
                    newsletterName: 'KnightBot MD',
                    serverMessageId: -1
                }
            }
        });
    } catch (error) {
        console.error('Error in alive command:', error);
        await sock.sendMessage(chatId, { text: 'Bot is alive and running!' });
    }
}

module.exports = aliveCommand;

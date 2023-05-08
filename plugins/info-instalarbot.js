import { generateWAMessageFromContent } from '@adiwajshing/baileys'
let handler  = async (m, { conn }) => {
let texto = `
*—◉ 𝚃𝚄𝚃𝙾𝚁𝙸𝙰𝙻*
> Tutorial: https://www.youtube.com/watch?v=uWfbR_juSdY&ab_channel=Noka924
> Pagina Oficial: https://www.youtube.com/watch?v=uWfbR_juSdY&ab_channel=Noka924
> Dashboard: https://www.youtube.com/watch?v=uWfbR_juSdY&ab_channel=Noka924
> Panel: https://www.youtube.com/watch?v=uWfbR_juSdY&ab_channel=Noka924
> Soporte: https://www.youtube.com/watch?v=uWfbR_juSdY&ab_channel=Noka924

------------------------------------

*—◉ 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂*
> Tutorial: https://www.youtube.com/watch?v=uWfbR_juSdY&ab_channel=Noka924
> Comandos:
- npm start` 
let aa = { quoted: m, userJid: conn.user.jid }
let prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: `${texto}`.trim(), contextInfo: { externalAdReply: { title: 'ᴛʜᴇ ᴍʏsᴛɪᴄ - ʙᴏᴛ', body: null, thumbnail: imagen1, sourceUrl: 'https://github.com/BrunoSobrino/TheMystic-Bot-MD' }, mentionedJid: [m.sender] }}}, aa)
conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id, mentions: [m.sender] })  
}
handler.command = /^(instalarbot)/i
export default handler

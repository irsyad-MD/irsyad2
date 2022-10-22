let handler = async (m, { conn, usedPrefix }) => { 
      conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'INR',
      amount1000: 1339889,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: `
╭─「 Mau Esceh??? 」
│ • Buy di Nomor Bawah Ini ↓
│ • wa.me/6285922404374
╰────
`,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
}

handler.help = ['sc']
handler.tags = ['info']
handler.command = /^sc$/i

module.exports = handler
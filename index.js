const { Telegraf, Markup } = require('telegraf')
require('dotenv').config()

const bot = new Telegraf('5704035099:AAH_0xBSCMZFNGB6GTpHdcRrY7Z-GVFYK1g')

bot.command('start', (ctx)=>{
    ctx.reply('Hey! This is a template for you, study the functionality and give feedback.',{
        reply_markup: Markup.keyboard([
            '🔗│Social Networks',
            '🤍│Whitepapper',
            '❓️│FAQ',
            '💲│Buy'
        ])
    })
})


bot.hears('🔗│Social Networks', ctx=>{
    ctx.replyWithHTML(
        'Telegram Chat - link here \n\n' + 
        'Discord Server - <b>link here</b>'
        )
})
bot.hears('🤍│Whitepapper',ctx=>{
    ctx.replyWithHTML(
        '<b>Whitepapper link here</b>'
    )
})
bot.hears('❓️│FAQ', ctx=>{
    ctx.replyWithHTML(
        'Faq text here'
    )
})
bot.hears('💲│Buy', ctx=>{
    ctx.replyWithHTML(
        'To buy a custom server, write here 👇 \n'+
        '@vesternyachok'
    )
})


bot.launch()


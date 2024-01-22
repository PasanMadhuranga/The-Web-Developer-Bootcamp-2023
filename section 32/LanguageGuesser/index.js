import { franc } from 'franc'
import langs from 'langs'
import colors from 'colors'

const input = process.argv.slice(2).join(' ')
const langCode = franc(input)

if (langCode === 'und') {
    console.log("Couldn't identify the language!".red);
} else {
    const langObj = langs.where("3", langCode);
    console.log(langObj ? `Language is ${langObj.name.green}` : `Language Code is ${langCode.green}`)
}
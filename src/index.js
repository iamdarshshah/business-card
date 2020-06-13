#!/usr/bin/env node

const chalk = require('chalk')
const corners = require('./corners')
const me = require('../data/me.json')
const dividers = require('./dividers')
const style = require('../data/style.json')

const base = chalk[style.base]
const accent = chalk[style.accent]

const spaces = (count) => ' '.repeat(count)
const name = (name, handle) => `${accent(name)} / ${accent(handle)}`
const title = (title, company) => `${title} @ ${company}`
const link = (name, url) => `${base(name)}: ${accent(url)}`
const command = (handle) => accent(`npx ${handle}`)

const width = 61
const divider = dividers[style.divider]
const { topLeft, topRight, bottomLeft, bottomRight } = corners[style.corners]

const topBorder = base(topLeft + '─'.repeat(width) + topRight)
const bottomBorder = base(bottomLeft + '─'.repeat(width) + bottomRight)
const dividerLine = base('├' + divider.repeat(width) + '┤')
const border = base('│')
const blankLine = base(border + spaces(width) + border)

const card = `
    ${topBorder}
    ${blankLine}
    ${border + spaces(4) + name(me.name, me.handle) + spaces(32) + border}
    ${border + spaces(4) + title(me.title, me.company) + spaces(29) + border}
    ${blankLine}
    ${border + spaces(9) + link('Website', me.website) + spaces(23) + border}
    ${border + spaces(11) + link('GitHub', me.github) + spaces(11) + border}
    ${border + spaces(9) + link('Twitter', me.twitter) + spaces(11) + border}
    ${border + spaces(8) + link('LinkedIn', me.linkedin) + spaces(7) + border}
    ${blankLine}
    ${dividerLine}
    ${border + spaces(44) + command(me.handle) + spaces(1) + border}
    ${bottomBorder}
`

console.log(card)

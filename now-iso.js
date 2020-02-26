#!/usr/bin/env node

'use strict'

const fs = require('fs')
const path = require('path')

setImmediate(main)

function main() {
  //@ts-ignore
  const argv = process.argv.slice(2)

  if (argv[0] === '-h') printHelp()

  const now = Date.now()
  const deltas = argv
  if (argv.length === 0) deltas.push('.')

  for (const delta of deltas) {
    let deltaMS
    try {
      deltaMS = getDeltaMillis(delta)
    } catch (err) {
      console.log(err.message)
      continue
    }

    const date = new Date(now + deltaMS).toISOString()
    console.log(date)
  }
}

function getDeltaMillis(delta) {
  delta = delta.trim()
  if (delta === '.') return 0

  const match = delta.match(/^(.*)(s|m|h|d)$/)
  if (!match) throw new Error(`unknown delta unit in "${delta}"`)

  const multiplier = Multiplier[match[2]]

  const numberString = match[1]
  const number = parseFloat(numberString)
  if (isNaN(number)) throw new Error(`invalid number "${numberString}"`)

  return number * multiplier
}

const Multiplier = {
  s: 1000,
  m: 1000 * 60,
  h: 1000 * 60 * 60,
  d: 1000 * 60 * 60 * 24,
}

function printHelp() {
  const readmePath = path.join(__dirname, 'README.md')
  const readme = fs.readFileSync(readmePath, 'utf8')
  console.log(readme)
  process.exit(1)
}

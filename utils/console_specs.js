const colorMapping = {
  RED: "\x1b[31m",
  GREEN: "\x1b[32m",
  YELLOW: "\x1b[33m",
  BLUE: "\x1b[34m",
  WHITE: "\x1b[37m",
}

const configMapping = {
  BRIGHT: "\x1b[1m",
  REVERSED: "\x1b[7m",
  UNDERSCORE: "\x1b[4m"
}

const resetConsole = () => {
  console.log(colorMapping.WHITE, "\x1b[40m", "\x1b[0m")
}

exports.warn = (text, reversed) => {
  console.log(configMapping.BRIGHT, reversed ? configMapping.REVERSED : '', configMapping.UNDERSCORE, colorMapping.YELLOW, text)
  resetConsole()
}

exports.danger = (text, reversed) => {
  console.log(configMapping.BRIGHT, reversed ? configMapping.REVERSED : '', colorMapping.RED, text)
  resetConsole()
}

exports.print = (text, reversed) => {
  console.log(reversed ? configMapping.REVERSED : '', text)
  resetConsole()
}

exports.info = (text, reversed) => {
  console.log(configMapping.BRIGHT, reversed ? configMapping.REVERSED : '', colorMapping.BLUE, text)
  resetConsole()
}

import shell from "shelljs"
import chalk from "chalk"

const branchName = shell.exec("git rev-parse --abbrev-ref HEAD", {silent: true}).stdout.slice(0, -1)

export function branchNameCheck() {
  if(!/^BTD-[0-9]+$/.test(branchName)) {
    const errorMsg = `
      Branch name does adhere to BTD ticket.
      Your branch name is "${branchName}"
      The branch name must be in the following format: "BTD-[NUMBER]".
    `
    console.log(chalk.bgRgb(75, 0, 0).white.bold(errorMsg))
    process.exit(1)
  }
  else {
    const successMsg = `
      Branch name adheres to repo policy.
    `
    console.log(chalk.bgRgb(0, 75, 0).white.bold(successMsg))
  }
}






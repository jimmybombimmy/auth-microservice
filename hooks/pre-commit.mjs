import { branchNameCheck } from "./utils/git-hooks.mjs"
import { lintCheck } from "./utils/lint-hooks.mjs"

branchNameCheck()
lintCheck()
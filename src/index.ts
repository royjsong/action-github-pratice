import * as core from '@actions/core'
import * as github from '@actions/github'
import {getInputs} from './input-helper'


async function run(): Promise<void> {
    try {
        const inputs = getInputs()

        const packageName = inputs.fileName + "_v1.0.0"
        console.log(`fileName : ${inputs.fileName}`)

        let githubWorkspacePath = process.env['GITHUB_WORKSPACE']

        console.log(`githubWorkspacePath : ${githubWorkspacePath}`)

        core.setOutput("packageName", packageName);

        const payload = JSON.stringify(github.context.payload, undefined, 2)
        console.log(`The event payload: ${payload}`)      
    } catch (err) {
        core.setFailed(err.message)
    }
}

run()
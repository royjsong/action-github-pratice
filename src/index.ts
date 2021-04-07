import * as core from '@actions/core'
import * as github from '@actions/github'
import {getInputs} from './input-helper'
import * as fs from 'fs'

async function run(): Promise<void> {
    try {
        const inputs = getInputs()

        const packageName = inputs.fileName + "_v1.0.0"
        console.log(`fileName : ${inputs.fileName}`)

        const versionFilePath = process.env['GITHUB_WORKSPACE'] + "/version.json"
        let versionJson;
        fs.readFile('versionFilePath', 'utf8', (err, data) => {
            versionJson = JSON.parse(data)
        })

        console.log(`versionFilePath : ${versionFilePath}`)

        core.setOutput("packageName", packageName);

        const payload = JSON.stringify(github.context.payload, undefined, 2)
        console.log(`The event payload: ${payload}`)      
    } catch (err) {
        core.setFailed(err.message)
    }
}

run()
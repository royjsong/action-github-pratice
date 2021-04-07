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
        try {
            if (fs.existsSync(versionFilePath)) {
                console.error("file exsist!! ")
            }
        } catch(err) {
            console.error("file not exsist!! " + err)
        }

        const data = fs.readFileSync(versionFilePath)
        let versionJson = JSON.parse(data.toString())
        

        console.log(`versionFilePath : ${versionFilePath}`)
        console.log(`versionJson : ${versionJson}`)

        core.setOutput("packageName", packageName);

        // const payload = JSON.stringify(github.context.payload, undefined, 2)
        // console.log(`The event payload: ${payload}`)      
    } catch (err) {
        core.setFailed(err.message)
    }
}

run()
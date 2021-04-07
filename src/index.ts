import * as core from '@actions/core'
import {getInputs} from './input-helper'
import * as fs from 'fs'

async function run(): Promise<void> {
    try {
        const inputs = getInputs()        
        const versionFilePath = process.env['GITHUB_WORKSPACE'] + "/version.json"
        try {
            if (fs.existsSync(versionFilePath)) {
                console.log("found version.json.")
            }
        } catch(err) {
            console.error("Not Found version.json")
        }
        console.log(`versionFilePath : ${versionFilePath}`)
        const data = fs.readFileSync(versionFilePath)
        let versionJson = JSON.parse(data.toString())        
        const version  = "v" + versionJson.major + "." + versionJson.minor + "." + versionJson.patch
        console.log(`version : ${version}`)
        console.log(`fileName : ${inputs.fileName}`)
        console.log(`gitSha : ${inputs.gitSha}`)

        const packageName = inputs.fileName + "_" + version + "_" + inputs.gitSha.slice(0, 8)
        core.setOutput("packageName", packageName);
    } catch (err) {
        core.setFailed(err.message)
    }
}

run()
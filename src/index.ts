import * as core from '@actions/core'
import * as github from '@actions/github'
import {getInputs} from './input-helper'


async function run(): Promise<void> {
    try {
        const inputs = getInputs()
        console.log(`Hello ${inputs.name}`);
        
        const version = "v1.0.0"
        core.setOutput("version", version);

        const payload = JSON.stringify(github.context.payload, undefined, 2)
        console.log(`The event payload: ${payload}`)      
    } catch (err) {
        core.setFailed(err.message)
    }
}

run()
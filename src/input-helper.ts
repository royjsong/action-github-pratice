import * as core from '@actions/core'
import {Inputs} from './constants'
import {InputFields} from './input-fields'

export function getInputs(): InputFields {
    const name = core.getInput(Inputs.FILE_NAME, {required: true})

    const inputs = {
        fileName : name,
    } as InputFields

    return inputs
}
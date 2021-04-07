import * as core from '@actions/core'
import {Inputs} from './constants'
import {InputFields} from './input-fields'

export function getInputs(): InputFields {
    const name = core.getInput(Inputs.Name)
    const whoToGreet = core.getInput(Inputs.WhoToGreet, {required: true})

    const inputs = {
        name : name,
        whoToGreet : whoToGreet
    } as InputFields

    return inputs
}
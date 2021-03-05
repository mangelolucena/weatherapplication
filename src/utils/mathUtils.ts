import {track} from './analyticsUtils'

export function addNumbers(x:number, y:number) {
    track('addNumbers')
    return x + y;
}
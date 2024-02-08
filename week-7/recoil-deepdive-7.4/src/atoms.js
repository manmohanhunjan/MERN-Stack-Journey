import {atom, selector} from 'recoil';

export const networkAtom = atom({
    key: "networkAtom",
    default: 104
})
export const jobsAtom = atom({
    key: "jobsAtom",
    default: 0
})
export const notificationAtom = atom({
    key: "notificationAtom",
    default: 12
})
export const messagingAtom = atom({
    key: "messagingAtom",
    default: 0
})

export const totalSelector = selector({
    key: 'totalSelector',
    get: ({get}) => {
        const nwa = get(networkAtom)
        const jbsa = get(jobsAtom)
        const notia = get(notificationAtom)
        const msga = get(messagingAtom)

        return nwa + jbsa + notia + msga
    }
})
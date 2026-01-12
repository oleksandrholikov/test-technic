type TokenUsage = {
    wordsUsed: number;
    lastReset: number;
}

const CHAR_LIMIT =  80000;
const DAY_LIMIT = 24*60*60*1000;
const usegeMap = new Map<string, TokenUsage>();

export function checkCharLimit (token: string, words: number): boolean{
    const now = Date.now();
    const usage = usegeMap.get(token);
    if(!usage || now - usage.lastReset > DAY_LIMIT){
        usegeMap.set(token, {wordsUsed: words, lastReset: now});
        return true;    
    }

    if(usage.wordsUsed + words > CHAR_LIMIT) return false;

    usage.wordsUsed += words;
    return true;
}
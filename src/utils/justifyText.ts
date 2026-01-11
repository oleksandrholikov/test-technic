export function justifyText (text: string, lineLength = 80): string{
    const words = text.split(/\s+/).filter(Boolean);
    const lines: string[] = [];
    let currentLine:string[] = [];
    let currentLength = 0;

    for (const word of words) {
        if(currentLength + word.length + currentLine.length > lineLength){
            lines.push(justifyLine(currentLine, lineLength));
            currentLine = [];
            currentLength = 0;        
        }
        currentLine.push(word);
        currentLength += word.length;
    }

    if(currentLine.length > 0) lines.push(currentLine.join(" "));

    return lines.join("\n");
}

function justifyLine(words: string[], lineLength: number):string{
    if(words.length === 1) return words[0]!;
    const totalChars = words.reduce((a,b)=> a+b.length, 0);
    const spaces = lineLength - totalChars;
    const gaps = words.length - 1;
    const base = Math.floor(spaces / gaps);
    let extra = spaces % gaps;

    return words 
            .map((w, i)=>{
                if (i === gaps) return w;
                const spaceCount = base + (extra-- > 0 ? 1 : 0);
                return w + " ".repeat(spaceCount);
            
            }) 
            .join("");
}
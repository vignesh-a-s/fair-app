export function generatePapers(numPapers) {
    let papers = [];

    for(let i = 0; i < numPapers; i++) {
        let paper = {
            'name': `Paper ${i+1}`,
            'type': `Type ${i+1}`,
            'description': `Description ${i+1}`,
        }

        papers.push(paper);
    }

    return papers;
}
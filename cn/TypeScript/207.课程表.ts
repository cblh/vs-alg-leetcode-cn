// @algorithm @lc id=207 lang=typescript 
// @title course-schedule
// @test(2,[[1,0]])=true
// @test(2,[[1,0],[0,1]])=false
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    // ajdList
    const adjList = new Map<number, number[]>();

    // build ajdList
    for (const prerequisite of prerequisites) {
        const [ver, edge] = prerequisite
        const item = adjList.get(ver) ?? []
        item.push(edge)
        adjList.set(ver, item)
    }
    const topoSortResult = topoSort(numCourses, adjList)
    return topoSortResult.length === numCourses
};

function topoSort(V: number, adjList: Map<number, number[]>) {
    const indegreeEdge = new Array(V).fill(0)
    const topoSortResult = []
    for (let i = 0; i < V; i++) {
        for (let it of adjList.get(i) ?? []) {
            indegreeEdge[it]++
        }
    }

    const queue = []
    indegreeEdge.forEach((value, i) => {
        if (value === 0) {
            queue.push(i)
        }
    })

    while (queue.length !== 0) {
        const node = queue.shift()
        topoSortResult.push(node)

        for (let edge of (adjList.get(node) ?? [])) {
            indegreeEdge[edge]--
            if (indegreeEdge[edge] === 0) {
                queue.push(edge)
            }
        }
    }
    return topoSortResult
}
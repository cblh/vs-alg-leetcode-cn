// @algorithm @lc id=1709 lang=typescript 
// @title alert-using-same-key-card-three-or-more-times-in-a-one-hour-period
// @test(["daniel","daniel","daniel","luis","luis","luis","luis"],["10:00","10:40","11:00","09:00","11:00","13:00","15:00"])=["daniel"]
// @test(["alice","alice","alice","bob","bob","bob","bob"],["12:01","12:00","18:00","21:00","21:20","21:30","23:00"])=["bob"]
// @test(["john","john","john"], ["23:58","23:59","00:01"])=[]
// @test(["alice","alice","alice","bob","bob","bob","bob"], ["12:01","12:00","18:00","21:00","21:20","21:30","23:00"])=["bob"]
// @test(["a","a","a","a","a","a","a","b","b","b","b","b","b","b","c","c","c","c","c","c","c","c","c"], ["00:37","11:24","14:35","21:25","15:48","20:28","07:30","09:26","10:32","20:10","19:26","08:13","01:08","15:49","02:34","06:48","04:33","07:18","00:05","06:44","13:33","04:12","03:54"])=["c"]
function alertNames(keyName: string[], keyTime: string[]): string[] {
    const map = new Map<string, number[]>(),
    n = keyName.length
    for (let i = 0; i < n; i++) {
        let minutes = (+keyTime[i].slice(0, 2)) * 60 +  +(keyTime[i].slice(3))
        
        const name = keyName[i]
        const mapByName = map.get(name) ?? []
        mapByName.push(minutes)
        map.set(name, mapByName)
    }
    const filterName: string[] = []
    for (const [name, minutesArr] of map) {
        if (minutesArr.length < 3) {
            continue
        }
        minutesArr.sort((x, y) => x - y)
        for (let i = 2; i < minutesArr.length; i++) {
            if (minutesArr[i] - minutesArr[i - 2] <= 60) {
                filterName.push(name)
                break
            }
        }
    }
    return filterName.sort()
};
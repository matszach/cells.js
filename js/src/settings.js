let St = {
    Food: {
        nofInitial: 500,
        radiusMod: 0.1,
        maxValue: 200,
        minInitialValue: 2,
        maxInitialValue: 5,
        growthRate: 0.2
    }, 
    Cell: {
        nofInitial: 20,
        radiusMod: 0.04,
        minSpeed: 0.05,
        maxSpeed: 2,
        speedUpkeep: 0.5,
        minFeedingRate: 2,
        maxFeedingRate: 20,
        feedingRateUpkeep: 0.2,
        minSplitReq: 100,
        maxSplitReq: 1000,
        splitReqUpkeep: 0.1,
        mutationRate: 0.05,
        mutationLimits: true
    }
};

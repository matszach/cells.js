let St = {
    Food: {
        nofInitial: 500,
        radiusMod: 0.1,
        maxValue: 500,
        minInitialValue: 2,
        maxInitialValue: 5,
        spawnedPerFrame: 1,
        growthRate: 0.5
    }, 
    Cell: {
        nofInitial: 10,
        radiusMod: 0.04,
        minSpeed: 0.05,
        maxSpeed: 2,
        speedUpkeep: 0.6,
        minFeedingRate: 2,
        maxFeedingRate: 20,
        feedingRateUpkeep: 0.2,
        minSplitReq: 100,
        maxSplitReq: 1000,
        splitReqUpkeep: -0.1,
        mutationRate: 0.2,
        mutationLimits: true
    },
    Data: {
        samplingRate: 10,
        samplesLimit: 100
    }
};

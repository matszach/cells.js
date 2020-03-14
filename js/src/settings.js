let St = {
    Food: {
        nofInitial: 500,
        radiusMod: 0.02,
        maxValue: 1000,
        minInitialValue: 2,
        maxInitialValue: 5,
        spawnedPerFrame: 2,
        growthRate: 0.5
    }, 
    Cell: {
        nofInitial: 10,
        radiusMod: 0.02,
        minSpeed: 0.05,
        maxSpeed: 2,
        speedUpkeep: 1.2,
        minFeedingRate: 2,
        maxFeedingRate: 20,
        feedingRateUpkeep: 0.5,
        minSplitReq: 100,
        maxSplitReq: 1000,
        splitReqUpkeep: -0.1,
        mutationRate: 0.2,
        mutationLimits: true
    },
    Data: {
        samplingRate: 10,
        samplesLimit: 1000
    }
};

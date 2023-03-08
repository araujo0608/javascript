    const number = (busStop) => {
        let stillOn = 0;
        for(let stop = 0; stop < busStop.length; stop++){
            stillOn += (busStop[stop][0] - busStop[stop][1]);
        }
        return stillOn;
    }

    console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]));
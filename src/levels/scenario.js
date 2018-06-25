export const SCENARIO = {
    "1": {
        background: "assets/img/level01.png",
        elements: [
            {
                type: "01",
                positionX: window.innerWidth / 4 + (window.innerWidth / 2) * Math.random(),
                movement: "inverseRect",
                howMany: 5,
                after: 15
            },
            {
                type: "01",
                positionX: window.innerWidth / 4 + (window.innerWidth / 2) * Math.random(),
                movement: "rect",
                howMany: 3,
                after: 45
            },
            {
                type: "02",
                positionX: window.innerWidth / 4 + (window.innerWidth / 2) * Math.random(),
                movement: "senoid",
                howMany: 5,
                after: 90
            },
            {
                type: "01",
                positionX: window.innerWidth / 4 + (window.innerWidth / 2) * Math.random(),
                movement: "senoid",
                howMany: 7,
                after: 110
            }
        ]
    },
    "2": {
        background: "assets/img/level02.png",
        elements: [
            {
                type: "01",
                positionX: window.innerWidth / 4 + (window.innerWidth / 2) * Math.random(),
                movement: "rect",
                howMany: 5,
                after: 15
            },
            {
                type: "02",
                positionX: window.innerWidth / 4 + (window.innerWidth / 2) * Math.random(),
                movement: "constant",
                howMany: 3,
                after: 50
            },
            {
                type: "01",
                positionX: window.innerWidth / 4 + (window.innerWidth / 2) * Math.random(),
                movement: "senoid",
                howMany: 5,
                after: 70
            },
            {
                type: "03",
                positionX: window.innerWidth / 4 + (window.innerWidth / 2) * Math.random(),
                movement: "logarithm",
                howMany: 7,
                after: 100
            }
        ]
    },
    "3": {
        background: "assets/img/level03.png",
        elements: [
            {
                type: "02",
                positionX: window.innerWidth / 4 + (window.innerWidth / 2) * Math.random(),
                movement: "logarithm",
                howMany: 5,
                after: 15
            },
            {
                type: "02",
                positionX: window.innerWidth / 4 + (window.innerWidth / 2) * Math.random(),
                movement: "inverseRect",
                howMany: 5,
                after: 30
            },
            {
                type: "03",
                positionX: window.innerWidth / 4 + (window.innerWidth / 2) * Math.random(),
                movement: "senoid",
                howMany: 4,
                after: 45
            },
            {
                type: "02",
                positionX: window.innerWidth / 4 + (window.innerWidth / 2) * Math.random(),
                movement: "senoid",
                howMany: 7,
                after: 60
            }
        ]
    },
    "4": {
        background: "assets/img/level04.png",
        elements: [
            {
                type: "04",
                positionX: window.innerWidth / 4 + (window.innerWidth / 2) * Math.random(),
                movement: "logarithm",
                howMany: 3,
                after: 15
            },
            {
                type: "05",
                positionX: window.innerWidth / 4 + (window.innerWidth / 2) * Math.random(),
                movement: "denominator",
                howMany: 3,
                after: 30
            },
            {
                type: "05",
                positionX: window.innerWidth / 4 + (window.innerWidth / 2) * Math.random(),
                movement: "bigsenoid",
                howMany: 4,
                after: 45
            },
            {
                type: "06",
                positionX: window.innerWidth / 4 + (window.innerWidth / 2) * Math.random(),
                movement: "senoid",
                howMany: 2,
                after: 60
            }
        ]
    },
    "5": {
        background: "assets/img/level05.png",
        elements: [
            {
                type: "06",
                positionX: window.innerWidth / 4 + (window.innerWidth / 2) * Math.random(),
                movement: "denominator",
                howMany: 5,
                after: 15
            },
            {
                type: "07",
                positionX: window.innerWidth / 4 + (window.innerWidth / 2) * Math.random(),
                movement: "logarithm",
                howMany: 2,
                after: 30
            },
            {
                type: "08",
                positionX: window.innerWidth / 4 + (window.innerWidth / 2) * Math.random(),
                movement: "bigsenoid",
                howMany: 6,
                after: 70
            },
            {
                type: "09",
                positionX: window.innerWidth / 4 + (window.innerWidth / 2) * Math.random(),
                movement: "senoid",
                howMany: 5,
                after: 100
            },
            {
                type: "10",
                positionX: window.innerWidth / 4 + (window.innerWidth / 2) * Math.random(),
                movement: "logarithm",
                howMany: 6,
                after: 120
            }
        ]
    }
}
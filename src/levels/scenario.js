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
                after: 30
            },
            {
                type: "02",
                positionX: window.innerWidth / 4 + (window.innerWidth / 2) * Math.random(),
                movement: "senoid",
                howMany: 5,
                after: 80
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
                howMany: 3,
                after: 15
            },
            {
                type: "02",
                positionX: window.innerWidth / 4 + (window.innerWidth / 2) * Math.random(),
                movement: "inverseRect",
                howMany: 3,
                after: 30
            },
            {
                type: "03",
                positionX: window.innerWidth / 4 + (window.innerWidth / 2) * Math.random(),
                movement: "senoid",
                howMany: 5,
                after: 45
            },
            {
                type: "04",
                positionX: window.innerWidth / 4 + (window.innerWidth / 2) * Math.random(),
                movement: "senoid",
                howMany: 7,
                after: 60
            }
        ]
    }
}
export default function createDataStructure(edges,nodes) {
  edges = [
    {
        "source": "1",
        "sourceHandle": "2",
        "target": "2",
        "targetHandle": "in1",
        "type": "buttonedge",
        "id": "reactflow__edge-12-2in1"
    },
    {
        "source": "1",
        "sourceHandle": "4",
        "target": "3",
        "targetHandle": "in0",
        "type": "buttonedge",
        "id": "reactflow__edge-14-3in0"
    },
    {
        "source": "2",
        "sourceHandle": "y",
        "target": "6",
        "targetHandle": null,
        "type": "buttonedge",
        "id": "reactflow__edge-2y-6"
    },
    {
        "source": "2",
        "sourceHandle": "n",
        "target": "7",
        "targetHandle": null,
        "type": "buttonedge",
        "id": "reactflow__edge-2n-7"
    },
    {
        "source": "3",
        "sourceHandle": "人間",
        "target": "5",
        "targetHandle": null,
        "type": "buttonedge",
        "id": "reactflow__edge-3人間-5"
    },
    {
        "source": "3",
        "sourceHandle": "機械",
        "target": "4",
        "targetHandle": null,
        "type": "buttonedge",
        "id": "reactflow__edge-3機械-4",
        "selected": true
    }
]
  nodes = [
    {
        "id": "1",
        "type": "question",
        "position": {
            "x": 317.9913554174577,
            "y": 67.12523409410872
        },
        "data": {
            "body": "二本足? 四本足?",
            "answers": [
                "2",
                "4"
            ]
        },
        "width": 116,
        "height": 91,
        "selected": false,
        "positionAbsolute": {
            "x": 317.9913554174577,
            "y": 67.12523409410872
        },
        "dragging": false
    },
    {
        "id": "2",
        "type": "question",
        "position": {
            "x": 181.00918986342126,
            "y": 268.13570739506844
        },
        "data": {
            "body": "可愛い?",
            "answers": [
                "y",
                "n"
            ]
        },
        "width": 56,
        "height": 91,
        "selected": false,
        "positionAbsolute": {
            "x": 181.00918986342126,
            "y": 268.13570739506844
        },
        "dragging": false
    },
    {
        "id": "3",
        "type": "question",
        "position": {
            "x": 478.17647163676816,
            "y": 273.9749184603818
        },
        "data": {
            "body": "人間?　機械?",
            "answers": [
                "人間",
                "機械"
            ]
        },
        "width": 96,
        "height": 96,
        "selected": false,
        "positionAbsolute": {
            "x": 478.17647163676816,
            "y": 273.9749184603818
        },
        "dragging": false
    },
    {
        "id": "4",
        "type": "output",
        "position": {
            "x": 595.3352155881219,
            "y": 505.1059919082067
        },
        "data": {
            "label": "ガンダム"
        },
        "width": 150,
        "height": 40,
        "selected": false,
        "positionAbsolute": {
            "x": 595.3352155881219,
            "y": 505.1059919082067
        },
        "dragging": false
    },
    {
        "id": "5",
        "type": "output",
        "position": {
            "x": 422.51725567176015,
            "y": 459.20942358198596
        },
        "data": {
            "label": "人間"
        },
        "width": 150,
        "height": 40,
        "selected": false,
        "positionAbsolute": {
            "x": 422.51725567176015,
            "y": 459.20942358198596
        },
        "dragging": false
    },
    {
        "id": "6",
        "type": "output",
        "position": {
            "x": 33.827352763399645,
            "y": 453.4618110076197
        },
        "data": {
            "label": "猫"
        },
        "width": 150,
        "height": 40,
        "selected": false,
        "positionAbsolute": {
            "x": 33.827352763399645,
            "y": 453.4618110076197
        },
        "dragging": false
    },
    {
        "id": "7",
        "type": "output",
        "position": {
            "x": 228.06742791860535,
            "y": 469.75816311302583
        },
        "data": {
            "label": "G"
        },
        "width": 150,
        "height": 36,
        "selected": false,
        "positionAbsolute": {
            "x": 228.06742791860535,
            "y": 469.75816311302583
        },
        "dragging": false
    }
]

  const st = [
    {id:1,body:"A or B?",arrows:[{answer:'A',to:2},{answer:'B',to:3}]}

  ]
  const struct = edges.map((edge) => {



  })

}
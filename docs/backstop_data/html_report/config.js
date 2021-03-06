report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../../../backstop_data/bitmaps_reference/qq_map_0_document_0_phone.png",
        "test": "../../../backstop_data/bitmaps_test/20211211-182250/qq_map_0_document_0_phone.png",
        "selector": "document",
        "fileName": "qq_map_0_document_0_phone.png",
        "label": "map",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://map.qq.com/m/",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 4.0015992003998,
          "misMatchPercentage": "4.00",
          "analysisTime": 82
        },
        "diffImage": "../../../backstop_data/bitmaps_test/20211211-182250/failed_diff_qq_map_0_document_0_phone.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../../../backstop_data/bitmaps_reference/qq_map_0_document_1_tablet.png",
        "test": "../../../backstop_data/bitmaps_test/20211211-182250/qq_map_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "qq_map_0_document_1_tablet.png",
        "label": "map",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://map.qq.com/m/",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "tablet",
        "error": "Reference file not found /Users/edz/yd-learn/backstop_data/bitmaps_reference/qq_map_0_document_1_tablet.png"
      },
      "status": "fail"
    }
  ],
  "id": "qq"
});
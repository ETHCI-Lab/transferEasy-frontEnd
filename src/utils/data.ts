import { DocumentTable } from "@azure/ai-form-recognizer";
import { simpleContent } from "./content";
import { idToArray } from "./id2Arrary";

export const data : Array<idToArray<simpleContent>> = [
    {
        "0": [
            {
                "rowIndex": 0,
                "content": "111 學 年 度 ( 111 年 9 月至 112 年 6月)"
            }
        ],
        "1": [
            {
                "rowIndex": 1,
                "content": "科 目 名 稱"
            },
            {
                "rowIndex": 1,
                "content": "選課別"
            },
            {
                "rowIndex": 1,
                "content": "上學期"
            },
            {
                "rowIndex": 1,
                "content": "下學期"
            }
        ],
        "2": [
            {
                "rowIndex": 2,
                "content": "學分"
            },
            {
                "rowIndex": 2,
                "content": "成績"
            },
            {
                "rowIndex": 2,
                "content": "學分"
            },
            {
                "rowIndex": 2,
                "content": "成績"
            }
        ],
        "3": [
            {
                "rowIndex": 3,
                "content": "一般體育(一)"
            },
            {
                "rowIndex": 3,
                "content": "必"
            },
            {
                "rowIndex": 3,
                "content": "0"
            },
            {
                "rowIndex": 3,
                "content": "90"
            },
            {
                "rowIndex": 3,
                "content": ""
            },
            {
                "rowIndex": 3,
                "content": ""
            }
        ],
        "4": [
            {
                "rowIndex": 4,
                "content": "一般體育(二)"
            },
            {
                "rowIndex": 4,
                "content": "必"
            },
            {
                "rowIndex": 4,
                "content": ""
            },
            {
                "rowIndex": 4,
                "content": ""
            },
            {
                "rowIndex": 4,
                "content": "0"
            },
            {
                "rowIndex": 4,
                "content": "87"
            }
        ],
        "5": [
            {
                "rowIndex": 5,
                "content": "西洋藝術史"
            },
            {
                "rowIndex": 5,
                "content": "選"
            },
            {
                "rowIndex": 5,
                "content": ""
            },
            {
                "rowIndex": 5,
                "content": ""
            },
            {
                "rowIndex": 5,
                "content": "3"
            },
            {
                "rowIndex": 5,
                "content": "74"
            }
        ],
        "6": [
            {
                "rowIndex": 6,
                "content": "科技應用與文化創新"
            },
            {
                "rowIndex": 6,
                "content": "選"
            },
            {
                "rowIndex": 6,
                "content": ""
            },
            {
                "rowIndex": 6,
                "content": ""
            },
            {
                "rowIndex": 6,
                "content": "3"
            },
            {
                "rowIndex": 6,
                "content": "93"
            }
        ],
        "7": [
            {
                "rowIndex": 7,
                "content": "英文一"
            },
            {
                "rowIndex": 7,
                "content": "選"
            },
            {
                "rowIndex": 7,
                "content": "3"
            },
            {
                "rowIndex": 7,
                "content": "76"
            },
            {
                "rowIndex": 7,
                "content": ""
            },
            {
                "rowIndex": 7,
                "content": ""
            }
        ],
        "8": [
            {
                "rowIndex": 8,
                "content": "英文二"
            },
            {
                "rowIndex": 8,
                "content": "選"
            },
            {
                "rowIndex": 8,
                "content": ""
            },
            {
                "rowIndex": 8,
                "content": ""
            },
            {
                "rowIndex": 8,
                "content": "3"
            },
            {
                "rowIndex": 8,
                "content": "84"
            }
        ],
        "9": [
            {
                "rowIndex": 9,
                "content": "計算機概論"
            },
            {
                "rowIndex": 9,
                "content": "必"
            },
            {
                "rowIndex": 9,
                "content": "3"
            },
            {
                "rowIndex": 9,
                "content": "71"
            },
            {
                "rowIndex": 9,
                "content": ""
            },
            {
                "rowIndex": 9,
                "content": ""
            }
        ],
        "10": [
            {
                "rowIndex": 10,
                "content": "國文一"
            },
            {
                "rowIndex": 10,
                "content": "必"
            },
            {
                "rowIndex": 10,
                "content": "3"
            },
            {
                "rowIndex": 10,
                "content": "88"
            },
            {
                "rowIndex": 10,
                "content": ""
            },
            {
                "rowIndex": 10,
                "content": ""
            }
        ],
        "11": [
            {
                "rowIndex": 11,
                "content": "國文二"
            },
            {
                "rowIndex": 11,
                "content": "必"
            },
            {
                "rowIndex": 11,
                "content": ""
            },
            {
                "rowIndex": 11,
                "content": ""
            },
            {
                "rowIndex": 11,
                "content": "3"
            },
            {
                "rowIndex": 11,
                "content": "82"
            }
        ],
        "12": [
            {
                "rowIndex": 12,
                "content": "設計溝通與傳達"
            },
            {
                "rowIndex": 12,
                "content": "選"
            },
            {
                "rowIndex": 12,
                "content": "3"
            },
            {
                "rowIndex": 12,
                "content": "90"
            },
            {
                "rowIndex": 12,
                "content": ""
            },
            {
                "rowIndex": 12,
                "content": ""
            }
        ],
        "13": [
            {
                "rowIndex": 13,
                "content": "通識涵養"
            },
            {
                "rowIndex": 13,
                "content": "必"
            },
            {
                "rowIndex": 13,
                "content": "0"
            },
            {
                "rowIndex": 13,
                "content": ""
            },
            {
                "rowIndex": 13,
                "content": ""
            },
            {
                "rowIndex": 13,
                "content": ""
            }
        ],
        "14": [
            {
                "rowIndex": 14,
                "content": "創意思考"
            },
            {
                "rowIndex": 14,
                "content": "必"
            },
            {
                "rowIndex": 14,
                "content": "3"
            },
            {
                "rowIndex": 14,
                "content": "87"
            },
            {
                "rowIndex": 14,
                "content": ""
            },
            {
                "rowIndex": 14,
                "content": ""
            }
        ],
        "15": [
            {
                "rowIndex": 15,
                "content": "創意與科技產業概論"
            },
            {
                "rowIndex": 15,
                "content": "必"
            },
            {
                "rowIndex": 15,
                "content": ""
            },
            {
                "rowIndex": 15,
                "content": ""
            },
            {
                "rowIndex": 15,
                "content": "3"
            },
            {
                "rowIndex": 15,
                "content": "92"
            }
        ],
        "16": [
            {
                "rowIndex": 16,
                "content": "程式設計"
            },
            {
                "rowIndex": 16,
                "content": "必"
            },
            {
                "rowIndex": 16,
                "content": "3"
            },
            {
                "rowIndex": 16,
                "content": "89"
            },
            {
                "rowIndex": 16,
                "content": ""
            },
            {
                "rowIndex": 16,
                "content": ""
            }
        ],
        "17": [
            {
                "rowIndex": 17,
                "content": "視窗程式設計"
            },
            {
                "rowIndex": 17,
                "content": "必"
            },
            {
                "rowIndex": 17,
                "content": ""
            },
            {
                "rowIndex": 17,
                "content": ""
            },
            {
                "rowIndex": 17,
                "content": "3"
            },
            {
                "rowIndex": 17,
                "content": "80"
            }
        ],
        "18": [
            {
                "rowIndex": 18,
                "content": "溝通與簡報技巧"
            },
            {
                "rowIndex": 18,
                "content": "必"
            },
            {
                "rowIndex": 18,
                "content": ""
            },
            {
                "rowIndex": 18,
                "content": ""
            },
            {
                "rowIndex": 18,
                "content": "3"
            },
            {
                "rowIndex": 18,
                "content": "91"
            }
        ],
        "19": [
            {
                "rowIndex": 19,
                "content": "圖像繪製與編輯"
            },
            {
                "rowIndex": 19,
                "content": "必"
            },
            {
                "rowIndex": 19,
                "content": "3"
            },
            {
                "rowIndex": 19,
                "content": "96"
            },
            {
                "rowIndex": 19,
                "content": ""
            },
            {
                "rowIndex": 19,
                "content": ""
            }
        ],
        "20": [
            {
                "rowIndex": 20,
                "content": "* 以下空白 *"
            },
            {
                "rowIndex": 20,
                "content": ""
            },
            {
                "rowIndex": 20,
                "content": ""
            },
            {
                "rowIndex": 20,
                "content": ""
            },
            {
                "rowIndex": 20,
                "content": ""
            },
            {
                "rowIndex": 20,
                "content": ""
            }
        ],
        "21": [
            {
                "rowIndex": 21,
                "content": ""
            },
            {
                "rowIndex": 21,
                "content": ""
            },
            {
                "rowIndex": 21,
                "content": ""
            },
            {
                "rowIndex": 21,
                "content": ""
            },
            {
                "rowIndex": 21,
                "content": ""
            },
            {
                "rowIndex": 21,
                "content": ""
            }
        ],
        "22": [
            {
                "rowIndex": 22,
                "content": ""
            },
            {
                "rowIndex": 22,
                "content": ""
            },
            {
                "rowIndex": 22,
                "content": ""
            },
            {
                "rowIndex": 22,
                "content": ""
            },
            {
                "rowIndex": 22,
                "content": ""
            },
            {
                "rowIndex": 22,
                "content": ""
            }
        ],
        "23": [
            {
                "rowIndex": 23,
                "content": ""
            },
            {
                "rowIndex": 23,
                "content": ""
            },
            {
                "rowIndex": 23,
                "content": ""
            },
            {
                "rowIndex": 23,
                "content": ""
            },
            {
                "rowIndex": 23,
                "content": ""
            },
            {
                "rowIndex": 23,
                "content": ""
            }
        ],
        "24": [
            {
                "rowIndex": 24,
                "content": ""
            },
            {
                "rowIndex": 24,
                "content": ""
            },
            {
                "rowIndex": 24,
                "content": ""
            },
            {
                "rowIndex": 24,
                "content": ""
            },
            {
                "rowIndex": 24,
                "content": ""
            },
            {
                "rowIndex": 24,
                "content": ""
            }
        ],
        "25": [
            {
                "rowIndex": 25,
                "content": ""
            },
            {
                "rowIndex": 25,
                "content": ""
            },
            {
                "rowIndex": 25,
                "content": ""
            },
            {
                "rowIndex": 25,
                "content": ""
            },
            {
                "rowIndex": 25,
                "content": ""
            },
            {
                "rowIndex": 25,
                "content": ""
            }
        ],
        "26": [
            {
                "rowIndex": 26,
                "content": ""
            },
            {
                "rowIndex": 26,
                "content": ""
            },
            {
                "rowIndex": 26,
                "content": ""
            },
            {
                "rowIndex": 26,
                "content": ""
            },
            {
                "rowIndex": 26,
                "content": ""
            },
            {
                "rowIndex": 26,
                "content": ""
            }
        ],
        "27": [
            {
                "rowIndex": 27,
                "content": ""
            },
            {
                "rowIndex": 27,
                "content": ""
            },
            {
                "rowIndex": 27,
                "content": ""
            },
            {
                "rowIndex": 27,
                "content": ""
            },
            {
                "rowIndex": 27,
                "content": ""
            }
        ],
        "28": [
            {
                "rowIndex": 28,
                "content": ""
            },
            {
                "rowIndex": 28,
                "content": ""
            },
            {
                "rowIndex": 28,
                "content": ""
            },
            {
                "rowIndex": 28,
                "content": ""
            },
            {
                "rowIndex": 28,
                "content": ""
            },
            {
                "rowIndex": 28,
                "content": ""
            }
        ],
        "29": [
            {
                "rowIndex": 29,
                "content": ""
            },
            {
                "rowIndex": 29,
                "content": ""
            },
            {
                "rowIndex": 29,
                "content": ""
            },
            {
                "rowIndex": 29,
                "content": ""
            },
            {
                "rowIndex": 29,
                "content": ""
            },
            {
                "rowIndex": 29,
                "content": ""
            }
        ],
        "30": [
            {
                "rowIndex": 30,
                "content": ""
            },
            {
                "rowIndex": 30,
                "content": ""
            },
            {
                "rowIndex": 30,
                "content": ""
            },
            {
                "rowIndex": 30,
                "content": ""
            },
            {
                "rowIndex": 30,
                "content": ""
            },
            {
                "rowIndex": 30,
                "content": ""
            }
        ],
        "31": [
            {
                "rowIndex": 31,
                "content": ""
            },
            {
                "rowIndex": 31,
                "content": ""
            },
            {
                "rowIndex": 31,
                "content": ""
            },
            {
                "rowIndex": 31,
                "content": ""
            },
            {
                "rowIndex": 31,
                "content": ""
            },
            {
                "rowIndex": 31,
                "content": ""
            }
        ],
        "32": [
            {
                "rowIndex": 32,
                "content": ""
            },
            {
                "rowIndex": 32,
                "content": ""
            },
            {
                "rowIndex": 32,
                "content": ""
            },
            {
                "rowIndex": 32,
                "content": ""
            },
            {
                "rowIndex": 32,
                "content": ""
            },
            {
                "rowIndex": 32,
                "content": ""
            }
        ]
    }
]
import { PromptTemplate } from "langchain/prompts";

export const gradePromptTemplate = PromptTemplate.fromTemplate(
    `
    請幫我計算一下大概[我的學分]可以抵免 [淡江資管必修學分]及[淡江資管選修學分]當中的哪些學分，計算抵免時，不用分必修選修、0學分，都可以算進去，名字相似或接近也可以抵免，英文可以抵英文能力檢定。
    
    [我的學分]
    {grade}
    
    [淡江資管必修學分]
    英語能力檢定：0 學分
    微積分：4 學分
    統計學：4 學分
    管理學：3 學分
    資訊管理導論：2 學分
    資訊概論：4 學分
    基礎程式設計：4 學分
    會計學：4 學分
    網路與通訊：2 學分
    程式設計與資料結構：6 學分
    作業系統：2 學分
    作業系統實務：2 學分
    經濟學：4 學分
    系統分析與設計：3 學分
    商事法：2 學分
    財務管理：3 學分
    進階程式設計：4 學分
    網路程式設計：3 學分
    資料庫設計：3 學分
    行銷管理：3 學分
    專題製作：4 學分
    
    [淡江資管選修學分]
    管理數學：2 學分
    基礎數學：2 學分
    離散數學導論：2 學分
    企業資訊系統平台實作：2 學分
    資料交換語言：2 學分
    網路與通訊實務：2 學分
    生產與作業管理：2 學分
    企業資源規劃：2 學分
    資訊科技創新創業管理：2 學分
    人力資源管理：3 學分
    資訊數位服務：2 學分
    專業排版與設計：2 學分
    簡報設計技巧：2 學分
    多媒體互動與使用者經驗：3 學分
    網路規劃與實作：4 學分
    資訊安全概論：2 學分
    Linux作業系統：2 學分
    演算法：3 學分
    PHP API程式設計：2 學分
    使用者體驗與介面設計：3 學分
    行動應用程式開發：2 學分
    雲端應用程式開發：2 學分
    雲端資料庫程式開發：2 學分
    企業雲端應用趨勢與實務：2 學分
    行銷科技：2 學分
    雲端服務架構實務：4 學分
    行銷企劃：2 學分
    企業電子化：2 學分
    人工智慧：3 學分
    組織管理：2 學分
    電子商務：2 學分
    電子與行動商務安全：2 學分
    資安管理專題：2 學分
    數位化公司管理：3 學分
    物件導向軟體開發技術：3 學分
    系統安全：2 學分
    巨量資料探勘：2 學分
    資料倉儲：2 學分
    商業智慧實務：2 學分
    專案管理：3 學分
    軟體工程流程管理：2 學分
    人際溝通：2 學分
    企業資料分析技巧：2 學分
    商業智慧分析技巧：2 學分
    資訊與管理實習：2 學分
    行動APP開發技術實務：2 學分
    行動APP敏捷開發管理實務：3 學分
    知識管理：2 學分
    資訊管理專題：2 學分
    顧客關係管理：2 學分
    資訊技術/管理專業認證：1 學分
    企業資訊科技應用實務：2 學分
    機器學習概論：2 學分
    `
);

export const JsonToPrompt = PromptTemplate.fromTemplate(
    `
    分析以下內容，列出有哪些科目及學分及成績:
    {json}
    `
)
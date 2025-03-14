import Foundation
import Ignite

enum PortfolioLanguage: String, LanguageProtocol {
    case english = "English"
    case portuguese = "Portuguese"
    
    var flag: String {
        switch self {
            case .english: "🇧🇷"
            case .portuguese: "🇺🇸"
        }
    }
    
    var type: LanguageType {
        switch self {
        case .english:
            .english
        case .portuguese:
            .portuguese
        }
    }
    
    var page: String {
        switch self {
            case .english: "/portfolio"
            case .portuguese: "/portfolio-en"
        }
    }
    
    var staticPageName: String {
        "📹 Project"
    }
    
    @MainActor
    var staticPage: any StaticPage { Project() }
}

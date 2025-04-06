import Foundation
import Ignite

enum ProjectLanguage: String, LanguageProtocol {
    case english = "projectEnglish"
    case portuguese = "projectPortuguese"
    
    var type: LanguageType {
        switch self {
        case .english:
            .english
        case .portuguese:
            .portuguese
        }
    }
    
    var flag: String {
        switch self {
            case .english: "🇧🇷"
            case .portuguese: "🇺🇸"
        }
    }
    
    var page: String {
        switch self {
            case .english: "/project"
            case .portuguese: "/project-en"
        }
    }
    
    var staticPageName: String {
        switch self {
            case .english: "💻 Portfolio"
            case .portuguese: "💻 Portifólio"
        }
    }
    
    @MainActor
    var staticPage: any StaticPage { Portfolio() }
}


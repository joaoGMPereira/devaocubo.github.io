import Foundation
import Ignite

enum ProjectLanguage: String, LanguageProtocol {
    var type: LanguageType {
        switch self {
        case .english:
            .english
        case .portuguese:
            .portuguese
        }
    }
    
    case english = "English"
    case portuguese = "Portuguese"
    
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


import Foundation
import Ignite

enum PortfolioLanguage: String {
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
            case .english: "/ptbr"
            case .portuguese: "/en"
        }
    }
}

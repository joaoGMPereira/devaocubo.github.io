import Foundation
import Ignite

enum PageType: String {
    case project = "Project"
    case portfolio = "Portfolio"
    
    var flag: String {
        switch self {
        case .project: "💻"
        case .portfolio: "📚"
        }
    }
}

struct SelectedPage {
    let type: PageType
    var language: LanguageProtocol
    
    init(type: PageType, language: LanguageProtocol) {
        self.type = type
        self.language = language
    }
}

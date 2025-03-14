import Foundation
import Ignite

protocol LanguageProtocol {
    var flag: String { get }
    
    var page: String { get }
    
    var staticPageName: String { get }
    var staticPage: any StaticPage { get }
    
    var type: LanguageType { get }
}

enum LanguageType: String {
    case english = "English"
    case portuguese = "Portuguese"
}

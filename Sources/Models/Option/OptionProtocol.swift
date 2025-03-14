import Foundation
import Ignite

protocol OptionProtocol {
    var idName: String { get }
    func iconWithDescription(for language: LanguageType, uppercased: Bool) -> String
}

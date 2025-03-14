import Foundation
import Ignite

enum ProfileOption: String, CaseIterable, CustomStringConvertible, OptionProtocol {
    case job
    case education
    case project
    case contact
    
    var idName: String {
        "#\(rawValue)"
    }
    
    var icon: String {
        switch self {
            case .job: "⌨️"
            case .education: "📚"
            case .project: "⚙️"
            case .contact: "👥"
        }
    }
    
    var description: String {
        description(for: .english)
    }
    
    func description(for language: LanguageType) -> String {
        switch (self, language) {
            case (.job, .english): "Jobs"
            case (.job, .portuguese): "Trabalhos"
            case (.education, .english): "Education"
            case (.education, .portuguese): "Educação"
            case (.project, .english): "Projects"
            case (.project, .portuguese): "Projetos"
            case (.contact, .english): "Contact"
            case (.contact, .portuguese): "Contato"
        }
    }
    
    /// Combines the icon and the raw value description.
    /// - Parameters:
    ///   - language: The language in which the description is desired.
    ///   - uppercased: A boolean that determines whether the raw value should be uppercased. Default is `false`.
    /// - Returns: A string with the icon and the corresponding description, optionally in uppercase.
    func iconWithDescription(for language: LanguageType, uppercased: Bool = false) -> String {
        let description = self.description(for: language)
        return "\(icon) \(uppercased ? description.uppercased() : description)"
    }
}
